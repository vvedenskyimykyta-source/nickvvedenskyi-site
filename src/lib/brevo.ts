type ContactInput = {
  email: string;
  listId?: string;
  attributes: Record<string, string>;
};

export type BrevoResult =
  | { ok: true }
  | { ok: false; status: number; message: string };

/**
 * Adds or updates a Brevo contact.
 *
 * Returns the failure instead of swallowing it: a webhook that answers 200
 * while the contact never lands makes the sending service report a healthy
 * delivery, which is how a broken funnel stays invisible.
 */
export async function upsertContact({ email, listId, attributes }: ContactInput): Promise<BrevoResult> {
  const apiKey = import.meta.env.BREVO_API_KEY;

  if (!apiKey) {
    return { ok: false, status: 500, message: 'BREVO_API_KEY is not set on this deployment' };
  }
  if (!listId) {
    return { ok: false, status: 500, message: 'Brevo list id is not set on this deployment' };
  }

  let res: Response;
  try {
    res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        attributes,
        listIds: [Number(listId)],
        updateEnabled: true,
      }),
    });
  } catch (err) {
    return { ok: false, status: 502, message: `Brevo unreachable: ${(err as Error).message}` };
  }

  if (res.ok) return { ok: true };

  // Brevo answers 204 on update and 201 on create; anything else carries a reason.
  const body = await res.text().catch(() => '');
  return { ok: false, status: 502, message: `Brevo ${res.status}: ${body.slice(0, 300)}` };
}
