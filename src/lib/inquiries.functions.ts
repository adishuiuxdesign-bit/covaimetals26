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

function sheetRange(sheetName: string) {
  const escaped = sheetName.replace(/'/g, "''");
  return `'${escaped}'!A:I`;
}

async function appendToSheet(payload: InquiryPayload) {
  const spreadsheetId = process.env.INQUIRIES_SPREADSHEET_ID
    ? spreadsheetIdFromSecret(process.env.INQUIRIES_SPREADSHEET_ID)
    : undefined;
  const sheetName = process.env.INQUIRIES_SHEET_NAME || "Sheet1";
  const connectionKey = process.env.GOOGLE_SHEETS_API_KEY;
  const lovableKey = process.env.LOVABLE_API_KEY;

  if (!spreadsheetId || !connectionKey || !lovableKey) {
    console.error("Google Sheets connector is not fully configured");
    throw new Error("Lead sheet is not configured");
  }

  const range = sheetRange(sheetName);
  const res = await fetch(
    `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
        "Content-Type": "application/json",
      },
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
    await appendToSheet(payload);
    await postToWebhook(payload).catch((err) => console.warn("GAS webhook backup failed", err));
    return { ok: true };
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
    await appendToSheet(payload);
    await postToWebhook(payload).catch((err) => console.warn("GAS webhook backup failed", err));
    return { ok: true };
  });
