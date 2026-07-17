import { defineMcp } from "@lovable.dev/mcp-js";
import submitInquiryTool from "./tools/submit-inquiry";
import listProductsTool from "./tools/list-products";

export default defineMcp({
  name: "covaimetals-mcp",
  title: "COVAIMETALS",
  version: "0.1.0",
  instructions:
    "Tools for COVAIMETALS, a Coimbatore-based supplier of PVC & UPVC valves, taps, and irrigation filters. Use `list_products` to browse the catalogue, and `submit_inquiry` to send a lead (name, phone, message; optional email, state, district) to the sales team.",
  tools: [submitInquiryTool, listProductsTool],
});