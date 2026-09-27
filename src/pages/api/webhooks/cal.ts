export const prerender = false;

import type { APIRoute } from 'astro';
import { createHmac } from 'node:crypto';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > 100_000) {
      return new Response('Payload too large', { status: 413 });
    }

    const body = await request.text();

    const secret = import.meta.env.CAL_WEBHOOK_SECRET;
    if (secret) {
      const signature = request.headers.get('x-cal-signature-256');
      if (!signature) {
        return new Response('Missing signature', { status: 401 });
      }
      const expected = createHmac('sha256', secret).update(body).digest('hex');
      if (signature !== expected) {
        return new Response('Invalid signature', { status: 401 });
      }
    }

    const payload = JSON.parse(body);

    if (payload.triggerEvent !== 'BOOKING_CREATED') {
      return new Response('OK', { status: 200 });
    }

    const attendee = payload.payload?.attendees?.[0];
    if (!attendee?.email) {
      return new Response('No attendee email', { status: 400 });
    }

    const email = attendee.email;
    const firstName = attendee.name?.split(' ')[0] || email.split('@')[0];

    const responses = payload.payload?.responses ?? {};
    const company =
      responses['company-website']?.value ??
      responses['Company website']?.value ??
      '';

    const brevoKey = import.meta.env.BREVO_API_KEY;
    const brevoListId = import.meta.env.BREVO_LIST_BOOKED_ID;

    if (brevoKey) {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': brevoKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: firstName,
            COMPANY: company,
          },
          listIds: brevoListId ? [Number(brevoListId)] : [],
          updateEnabled: true,
        }),
      });
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Cal webhook error:', err);
    return new Response('Internal error', { status: 500 });
  }
};
