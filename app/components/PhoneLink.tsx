"use client";

import { Phone } from "lucide-react";

export default function PhoneLink({ className = "" }: { className?: string }) {
  const phoneNumber = "+39 379 172 1331";
  const cleanPhone = phoneNumber.replace(/\s/g, "");

  const handleClick = () => {
    // Track phone click event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "phone_click", {
        event_category: "engagement",
        event_label: "phone_number_click",
        value: phoneNumber,
      });
    }
  };

  return (
    <a
      href={`tel:${cleanPhone}`}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 font-semibold ${className}`}
    >
      <Phone className="w-5 h-5" />
      <span>{phoneNumber}</span>
    </a>
  );
}
