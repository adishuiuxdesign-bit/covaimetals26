import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  type: z.string().trim().min(1).max(40).default("contact"),
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().max(255).optional().default(""),
  message: z.string().trim().min(1).max(2000),
  state: z.string().trim().max(100).optional().default(""),
  district: z.string().trim().max(100).optional().default(""),
});

type InquiryPayload = z.infer<typeof inquirySchema> & { created_at: string };

function spreadsheetIdFromSecret(value: string) {
  const match = value.match(/\/spreadsheets\/d\/([^/]+)/);
  return match?.[1] ?? value;
}

// Prevent spreadsheet formula injection: prefix dangerous leading chars with a single quote.
function sanitizeCell(value: string) {
  if (!value) return "";
  return /^[=+\-@|%]/.test(value) ? `'${value}` : value;
}

function sheetRange(sheetName: string) {
  if (/^[A-Za-z0-9_]+$/.test(sheetName)) return `${sheetName}!A:I`;
  const escaped = sheetName.replace(/'/g, "''");
  return `'${escaped}'!A:I`;
}

async function getSheetName(spreadsheetId: string, headers: HeadersInit) {
  const configured = process.env.INQUIRIES_SHEET_NAME;
  const res = await fetch(`https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}`, {
    headers,
  });
  if (!res.ok) return configured || "Sheet1";

  const data = await res.json() as { sheets?: { properties?: { title?: string } }[] };
  const names = data.sheets?.map((sheet) => sheet.properties?.title).filter(Boolean) as string[] | undefined;
  if (configured && names?.includes(configured)) return configured;
  return names?.[0] || configured || "Sheet1";
}

async function appendToSheet(payload: InquiryPayload) {
  const spreadsheetId = process.env.INQUIRIES_SPREADSHEET_ID
    ? spreadsheetIdFromSecret(process.env.INQUIRIES_SPREADSHEET_ID)
    : undefined;
  const connectionKey = process.env.GOOGLE_SHEETS_API_KEY;
  const lovableKey = process.env.LOVABLE_API_KEY;

  if (!spreadsheetId || !connectionKey || !lovableKey) {
    console.error("Google Sheets connector is not fully configured");
    throw new Error("Lead sheet is not configured");
  }

  const headers = {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connectionKey,
    "Content-Type": "application/json",
  };
  const sheetName = await getSheetName(spreadsheetId, headers);
  const range = sheetRange(sheetName);

  // Duplicate detection: skip if a row with same name+phone+message already exists.
  try {
    const existing = await fetch(
      `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}/values/${range}`,
      { headers },
    );
    if (existing.ok) {
      const data = (await existing.json()) as { values?: string[][] };
      const rows = data.values ?? [];
      const norm = (s: string) => (s ?? "").trim().toLowerCase();
      const dup = rows.some(
        (r) =>
          norm(r[2]) === norm(payload.name) &&
          norm(r[3]) === norm(payload.phone) &&
          norm(r[7]) === norm(payload.message),
      );
      if (dup) {
        console.log("Duplicate inquiry detected — skipping append");
        return { duplicate: true };
      }
    }
  } catch (err) {
    console.warn("Duplicate check failed, proceeding with append", err);
  }

  const res = await fetch(
    `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        values: [[
          payload.created_at,
          payload.type,
          payload.name,
          payload.phone,
          payload.email,
          payload.state,
          payload.district,
          payload.message,
          "website",
        ]],
      }),
    },
  );

  if (!res.ok) {
    const body = await res.text();
    console.error("Google Sheets append failed", res.status, body);
    throw new Error("Failed to save lead");
  }
  return { duplicate: false };
}

async function postToWebhook(payload: Record<string, string>) {
  const url = process.env.GAS_WEBHOOK_URL;
  if (!url) {
    console.error("GAS_WEBHOOK_URL not configured");
    throw new Error("Webhook not configured");
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });
  if (!res.ok) {
    const body = await res.text();
    console.error("GAS webhook failed", res.status, body);
    throw new Error("Failed to submit");
  }
}

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    const payload = {
      type: data.type || "contact",
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      message: data.message,
      state: data.state ?? "",
      district: data.district ?? "",
      created_at: new Date().toISOString(),
    };
    const result = await appendToSheet(payload);
    if (!result.duplicate) {
      await postToWebhook(payload).catch((err) => console.warn("GAS webhook backup failed", err));
    }
    return { ok: true, duplicate: result.duplicate };
  });

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((input) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    const payload = {
      type: data.type || "quote",
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      message: data.message,
      state: data.state ?? "",
      district: data.district ?? "",
      created_at: new Date().toISOString(),
    };
    const result = await appendToSheet(payload);
    if (!result.duplicate) {
      await postToWebhook(payload).catch((err) => console.warn("GAS webhook backup failed", err));
    }
    return { ok: true };
  });
