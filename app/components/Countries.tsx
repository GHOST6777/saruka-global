"use client";

import Marquee from "react-fast-marquee";
import { Globe2, PackageCheck, Headphones, ShieldCheck } from "lucide-react";

const row1 = [
  "🇺🇸 United States",
  "🇨🇦 Canada",
  "🇬🇧 United Kingdom",
  "🇫🇷 France",
  "🇩🇪 Germany",
  "🇮🇹 Italy",
  "🇪🇸 Spain",
  "🇳🇱 Netherlands",
  "🇲🇽 Mexico",
  "🇧🇷 Brazil",
];

const row2 = [
  "🇦🇪 UAE",
  "🇸🇦 Saudi Arabia",
  "🇴🇲 Oman",
  "🇶🇦 Qatar",
  "🇰🇼 Kuwait",
  "🇧🇭 Bahrain",
  "🇸🇬 Singapore",
  "🇲🇾 Malaysia",
  "🇹🇭 Thailand",
  "🇯🇵 Japan",
  "🇦🇺 Australia",
];

export default function Countries() {
  return (
    <section className="bg-primary py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[0.45em] text-[11px] font-black text-accent">
            GLOBAL REACH
          </span>

          <h2 className="text-5xl md:text-6xl font-light text-white mt-5">
            Trusted Across International Markets
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-zinc-400 leading-8">
            Saruka Global proudly exports premium Indian agricultural
            products to importers, wholesalers and distributors
            across the Middle East, Europe, North America and Asia.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">

            <Globe2
              className="mx-auto text-accent mb-5"
              size={38}
            />

            <h3 className="text-5xl font-black text-white">
              40+
            </h3>

            <p className="text-zinc-400 mt-2">
              Countries Served
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">

            <PackageCheck
              className="mx-auto text-accent mb-5"
              size={38}
            />

            <h3 className="text-5xl font-black text-white">
              100+
            </h3>

            <p className="text-zinc-400 mt-2">
              Export Products
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">

            <ShieldCheck
              className="mx-auto text-accent mb-5"
              size={38}
            />

            <h3 className="text-5xl font-black text-white">
              100%
            </h3>

            <p className="text-zinc-400 mt-2">
              Quality Focus
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">

            <Headphones
              className="mx-auto text-accent mb-5"
              size={38}
            />

            <h3 className="text-5xl font-black text-white">
              24/7
            </h3>

            <p className="text-zinc-400 mt-2">
              Buyer Support
            </p>

          </div>

        </div>

      </div>

      {/* Countries */}

      <div className="mt-20">

        <Marquee
          speed={40}
          gradient={false}
        >

          {row1.map((country) => (

            <div
              key={country}
              className="mx-4 rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-8 py-4 text-white font-medium hover:bg-accent hover:text-primary transition"
            >
              {country}
            </div>

          ))}

        </Marquee>

      </div>

      <div className="mt-8">

        <Marquee
          speed={35}
          gradient={false}
          direction="right"
        >

          {row2.map((country) => (

            <div
              key={country}
              className="mx-4 rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-8 py-4 text-white font-medium hover:bg-accent hover:text-primary transition"
            >
              {country}
            </div>

          ))}

        </Marquee>

      </div>

    </section>
  );
}