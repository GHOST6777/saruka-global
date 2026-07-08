"use client";

import {
  Building2,
  Globe2,
  ReceiptText,
  Leaf,
} from "lucide-react";

const registrations = [
  {
    name: "MCA",
    icon: Building2,
    subtitle: "Company Registered",
  },
  {
    name: "IEC",
    icon: Globe2,
    subtitle: "Import Export Code",
  },
  {
    name: "GST",
    icon: ReceiptText,
    subtitle: "GST Registered",
  },
  {
    name: "APEDA",
    icon: Leaf,
    subtitle: "Agricultural Export",
  },
];

export default function OfficialRegistrations() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-5 py-2 text-sm md:text-base font-bold
          uppercase tracking-[0.3em] text-accent border border-accent/30">
            Official Registrations
          </span>

          <h2 className="mt-3 text-4xl font-semibold text-primary">
            Registered & Compliant
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {registrations.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group flex flex-col items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 bg-[#faf8f2] transition group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="text-primary" size={30} />
                </div>

                <h3 className="mt-4 text-sm font-bold tracking-widest text-primary">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs text-zinc-600">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}