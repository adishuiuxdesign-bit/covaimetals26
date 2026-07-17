import { defineTool } from "@lovable.dev/mcp-js";

const CATEGORIES = [
  {
    slug: "ball-valves",
    name: "PVC & UPVC ball valves",
    items: [
      { name: "Standard PVC ball valve", sizes: ["½″", "¾″", "1″", "1¼″", "1½″", "2″"] },
      { name: "Heavy PVC ball valve", sizes: ["½″", "¾″", "1″", "1¼″", "1½″", "2″", "2½″", "3″", "4″"] },
      { name: "UPVC ball valve", sizes: ["½″", "¾″", "1″", "1¼″", "1½″", "2″", "2½″", "3″", "4″"] },
      { name: "Union ball valve", sizes: ["½″", "¾″", "1″", "1¼″", "1½″", "2″"] },
      { name: "Double union ball valve", sizes: ["½″", "¾″", "1″", "1¼″", "1½″", "2″"] },
    ],
  },
  {
    slug: "foot-check",
    name: "Foot valves & check valves",
    items: [
      { name: "PVC foot valve", sizes: ["1″", "1¼″", "1½″", "2″", "2½″", "3″", "4″"] },
      { name: "Flap foot valve", sizes: ["1″", "1¼″", "1½″", "2″"] },
      { name: "PVC check valve", sizes: ["½″", "¾″", "1″", "1¼″", "1½″", "2″"] },
      { name: "Float valve", sizes: ["½″", "¾″", "1″"] },
    ],
  },
  {
    slug: "taps",
    name: "PVC & UPVC taps",
    items: [
      { name: "Angle tap", sizes: ["½″"] },
      { name: "Stop cock", sizes: ["½″", "¾″"] },
      { name: "Pillar cock", sizes: ["½″"] },
      { name: "Long body tap", sizes: ["½″"] },
      { name: "Machine tap", sizes: ["½″"] },
      { name: "Garden hose tap", sizes: ["½″"] },
      { name: "Sink cock — wall mount", sizes: ["½″"] },
      { name: "Sink cock — basin mount", sizes: ["½″"] },
      { name: "Shower", sizes: [] },
      { name: "Teflon tape", sizes: [] },
    ],
  },
  {
    slug: "filters",
    name: "Irrigation filters",
    items: [
      { name: "Disc type irrigation filter", sizes: ["1″", "1¼″", "1½″", "2″"] },
      { name: "Screen type irrigation filter", sizes: ["1″", "1¼″", "1½″", "2″"] },
    ],
  },
];

export default defineTool({
  name: "list_products",
  title: "List COVAIMETALS products",
  description:
    "List all product categories and items COVAIMETALS supplies (PVC & UPVC ball valves, foot & check valves, taps, irrigation filters) with available sizes.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CATEGORIES, null, 2) }],
    structuredContent: { categories: CATEGORIES },
  }),
});