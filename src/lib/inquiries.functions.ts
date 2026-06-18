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
    await postToWebhook({
      type: data.type || "contact",
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      message: data.message,
      state: data.state ?? "",
      district: data.district ?? "",
      created_at: new Date().toISOString(),
    });
    return { ok: true };
  });

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((input) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    await postToWebhook({
      type: data.type || "quote",
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      message: data.message,
      state: data.state ?? "",
      district: data.district ?? "",
      created_at: new Date().toISOString(),
    });
    return { ok: true };
  });
