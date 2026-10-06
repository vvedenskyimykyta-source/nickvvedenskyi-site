export const prerender = false;

import type { APIRoute } from 'astro';
import { createHmac } from 'node:crypto';
import { upsertContact } from '../../../lib/brevo';

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

    const result = await upsertContact({
      email,
      listId: import.meta.env.BREVO_LIST_BOOKED_ID,
      attributes: { FIRSTNAME: firstName, COMPANY: company },
    });

    if (!result.ok) {
      console.error('Cal webhook — Brevo failed:', result.message);
      return new Response(result.message, { status: result.status });
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Cal webhook error:', err);
    return new Response('Internal error', { status: 500 });
  }
};
