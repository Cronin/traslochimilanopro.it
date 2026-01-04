"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "393791721331"; // Without + and spaces
  const message = encodeURIComponent("Ciao, vorrei informazioni sui vostri servizi di trasloco");

  const handleClick = () => {
    // Track WhatsApp click event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "whatsapp_button_click",
      });
    }
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg transition-all hover:scale-105"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold">WhatsApp</span>
    </a>
  );
}
