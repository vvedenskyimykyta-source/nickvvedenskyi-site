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

    // Each Tally form signs with its own secret, and both forms post here, so
    // a signature counts as valid when it matches any configured secret.
    // Fail closed: this endpoint writes straight into the mailing list.
    const secrets = [
      import.meta.env.TALLY_SIGNING_SECRET,
      import.meta.env.TALLY_SIGNING_SECRET_UK,
    ].filter((v): v is string => typeof v === 'string' && v.length > 0);

    if (secrets.length === 0) {
      console.error('Tally webhook — no TALLY_SIGNING_SECRET set on this deployment');
      return new Response('Webhook signing secret is not configured', { status: 503 });
    }
    if (!signature) {
      return new Response('Missing signature', { status: 401 });
    }
    const matches = secrets.some(
      secret => createHmac('sha256', secret).update(body).digest('base64') === signature
    );
    if (!matches) {
      return new Response('Invalid signature', { status: 401 });
    }

    const payload = JSON.parse(body);
    const fields: unknown[] = payload.data?.fields ?? [];

    // Tally mixes field types in one array: some carry a null label, and choice
    // fields answer with an array rather than a string. Both used to throw here.
    const asText = (value: unknown): string => {
      if (value == null) return '';
      if (Array.isArray(value)) return value.filter(v => typeof v === 'string' || typeof v === 'number').join(', ');
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
      return '';
    };

    const getField = (label: string): string => {
      const needle = label.toLowerCase();
      const match = fields.find((f): f is { label: string; value: unknown } => {
        const l = (f as { label?: unknown })?.label;
        return typeof l === 'string' && l.toLowerCase().includes(needle);
      });
      return asText(match?.value);
    };

    const email = getField('email') || asText(payload.data?.respondentEmail);
    if (!email.includes('@')) {
      return new Response('No usable email in payload', { status: 400 });
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
    const ctaLocation = getField('cta_location') || '';

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
        CTA_LOCATION: ctaLocation,
        LANGUAGE: language,
      },
    });

    if (!result.ok) {
      console.error('Tally webhook — Brevo failed:', result.message);
      return new Response(result.message, { status: result.status });
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    // Hand the reason back: Tally shows the response body in its delivery log,
    // which is the only place this is visible without Vercel logs.
    const reason = err instanceof Error ? err.message : String(err);
    console.error('Tally webhook error:', err);
    return new Response(`Webhook error: ${reason}`, { status: 500 });
  }
};
