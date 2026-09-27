export const prerender = false;

import type { APIRoute } from 'astro';
import { createHmac } from 'node:crypto';

export const POST: APIRoute = async ({ request }) => {
  try {
    const signature = request.headers.get('tally-signature');
    const body = await request.text();

    const secret = import.meta.env.TALLY_SIGNING_SECRET;
    if (secret && signature) {
      const expected = createHmac('sha256', secret).update(body).digest('base64');
      if (signature !== expected) {
        return new Response('Invalid signature', { status: 401 });
      }
    }

    const payload = JSON.parse(body);
    const fields = payload.data?.fields ?? [];

    const getField = (label: string): string => {
      const f = fields.find((f: { label: string }) =>
        f.label.toLowerCase().includes(label.toLowerCase())
      );
      return f?.value ?? '';
    };

    const email = getField('email') || payload.data?.respondentEmail;
    if (!email) {
      return new Response('No email found', { status: 400 });
    }

    const firstName = getField('name') || getField("ім'я") || email.split('@')[0];
    const company = getField('company') || getField('website') || getField('сайт') || '';
    const mainProblem = getField('problem') || getField('проблем') || '';
    const stage = getField('stage') || getField('етап') || '';
    const language = (payload.data?.respondentLanguage || 'en').substring(0, 2);

    const utmSource = getField('utm_source') || '';
    const utmMedium = getField('utm_medium') || '';
    const utmCampaign = getField('utm_campaign') || '';

    const brevoKey = import.meta.env.BREVO_API_KEY;
    const brevoListId = import.meta.env.BREVO_LIST_QUIZ_ID;

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
            MAIN_PROBLEM: mainProblem,
            STAGE: stage,
            UTM_SOURCE: utmSource,
            UTM_MEDIUM: utmMedium,
            UTM_CAMPAIGN: utmCampaign,
            LANGUAGE: language,
          },
          listIds: brevoListId ? [Number(brevoListId)] : [],
          updateEnabled: true,
        }),
      });
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Tally webhook error:', err);
    return new Response('Internal error', { status: 500 });
  }
};
