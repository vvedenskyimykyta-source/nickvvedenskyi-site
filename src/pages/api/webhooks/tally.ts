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

    const signature = request.headers.get('tally-signature');
    const body = await request.text();

    const secret = import.meta.env.TALLY_SIGNING_SECRET;
    if (secret) {
      if (!signature) {
        return new Response('Missing signature', { status: 401 });
      }
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
    // Where the visit actually came from, and which page the link was clicked on.
    const referrer = getField('referrer') || '';
    const sourcePage = getField('source_page') || '';

    const result = await upsertContact({
      email,
      listId: import.meta.env.BREVO_LIST_QUIZ_ID,
      attributes: {
        FIRSTNAME: firstName,
        COMPANY: company,
        MAIN_PROBLEM: mainProblem,
        STAGE: stage,
        UTM_SOURCE: utmSource,
        UTM_MEDIUM: utmMedium,
        UTM_CAMPAIGN: utmCampaign,
        REFERRER: referrer,
        SOURCE_PAGE: sourcePage,
        LANGUAGE: language,
      },
    });

    if (!result.ok) {
      console.error('Tally webhook — Brevo failed:', result.message);
      return new Response(result.message, { status: result.status });
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Tally webhook error:', err);
    return new Response('Internal error', { status: 500 });
  }
};
