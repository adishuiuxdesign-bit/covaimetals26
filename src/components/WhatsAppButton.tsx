import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Covai Metals, I'd like to enquire about your products.")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-white shadow-elegant transition hover:scale-105"
      style={{ boxShadow: "0 10px 30px -10px rgba(37,211,102,0.55)" }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43Zm-8.48 18.2h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.8 1 .99-3.7-.23-.38a9.83 9.83 0 0 1-1.5-5.18c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.97c0 5.43-4.42 9.83-9.79 9.83Zm5.4-7.36c-.3-.15-1.74-.86-2.01-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.45 0 1.45 1.05 2.85 1.2 3.05.15.2 2.06 3.14 4.99 4.41.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.12.56-.08 1.74-.71 1.98-1.4.25-.69.25-1.27.17-1.4-.07-.13-.27-.2-.56-.35Z"/>
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}