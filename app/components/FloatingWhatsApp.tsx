"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phone = "918595203649"; 

  const message = encodeURIComponent(
`Hello Saruka Global,

We are interested in importing your products.

Please provide the following details:

• Product Name:
• Required Quantity:
• Destination Country:
• Preferred Packaging:
• Preferred Incoterm (FOB / CIF / CFR):

Kindly share your best quotation along with product specifications.

Thank you.`
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
      group
      fixed
      bottom-6
      right-6
      z-[999]
      flex
      items-center
      gap-3
      rounded-full
      bg-[#25D366]
      px-5
      py-3
      text-white
      shadow-2xl
      transition-all
      duration-300
      hover:scale-105
      hover:bg-[#1ebe5d]
      hover:shadow-green-500/40
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
        <MessageCircle size={26} />
      </div>

      <div className="hidden sm:block">
        <p className="text-[11px] font-medium uppercase tracking-wider text-white/80">
          Need Export Assistance?
        </p>

        <h3 className="text-base font-bold">
          Chat With Our Team
        </h3>
      </div>
    </a>
  );
}