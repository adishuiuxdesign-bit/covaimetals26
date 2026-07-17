import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { submitInquiry } from "@/lib/inquiries.functions";

export default defineTool({
  name: "submit_inquiry",
  title: "Submit inquiry",
  description:
    "Submit a contact or quote inquiry to COVAIMETALS. Saves the lead to the company's Google Sheet so the sales team can follow up.",
  inputSchema: {
    name: z.string().describe("Full name of the person inquiring."),
    phone: z.string().describe("Contact phone number, including country code if available."),
    message: z.string().describe("Details of the inquiry: products, sizes, quantities, use case, etc."),
    email: z.string().optional().describe("Optional email address for follow-up."),
    state: z.string().optional().describe("Optional Indian state of the buyer."),
    district: z.string().optional().describe("Optional district within the state."),
    type: z
      .enum(["contact", "quote"])
      .optional()
      .describe("Kind of inquiry. Use 'quote' for pricing requests, otherwise 'contact'."),
  },
  annotations: { readOnlyHint: false, openWorldHint: true },
  handler: async ({ name, phone, message, email, state, district, type }) => {
    try {
      const result = await submitInquiry({
        data: {
          type: type ?? "contact",
          name,
          phone,
          message,
          email: email ?? "",
          state: state ?? "",
          district: district ?? "",
        },
      });
      const text = result.duplicate
        ? "Inquiry recognised as a duplicate of an existing lead — not saved again."
        : "Inquiry saved. The COVAIMETALS team will follow up shortly.";
      return { content: [{ type: "text", text }], structuredContent: result };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return {
        content: [{ type: "text", text: `Failed to submit inquiry: ${message}` }],
        isError: true,
      };
    }
  },
});