import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().max(255).optional().default(""),
  message: z.string().trim().min(1).max(2000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY;
    const spreadsheetId = process.env.INQUIRIES_SPREADSHEET_ID;
    const sheetName = process.env.INQUIRIES_SHEET_NAME || "Sheet1";

    if (!lovableKey || !sheetsKey || !spreadsheetId) {
      console.error("Inquiry storage not configured", {
        hasLovable: !!lovableKey,
        hasSheets: !!sheetsKey,
        hasSpreadsheet: !!spreadsheetId,
      });
      throw new Error("Inquiry storage is not configured");
    }

    const range = `${sheetName}!A:F`;
    const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const now = new Date();
    const tz = "Asia/Kolkata";
    const date = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
    const time = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(now);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": sheetsKey,
      },
      body: JSON.stringify({
        values: [[date, time, data.name, data.phone, data.email ?? "", data.message]],
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Google Sheets append failed", res.status, body);
      throw new Error("Failed to save inquiry");
    }

    return { ok: true };
  });
