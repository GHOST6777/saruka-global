"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  FileText,
  CheckCircle2,
  PackageCheck,
  Ship,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "Inquiry",
    desc: "Buyer shares product requirement, quantity, destination country and packaging preference.",
  },
  {
    icon: FileText,
    title: "Quotation",
    desc: "We provide product details, pricing, packaging options and shipment terms.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmation",
    desc: "Order terms, specifications and documentation requirements are confirmed.",
  },
  {
    icon: PackageCheck,
    title: "Packing",
    desc: "Products are packed as per buyer requirement with export-focused quality checks.",
  },
  {
    icon: Ship,
    title: "Shipment",
    desc: "Shipment is arranged with proper export documentation and logistics coordination.",
  },
  {
    icon: Handshake,
    title: "Long-Term Supply",
    desc: "We focus on reliable repeat supply and long-term business relationships.",
  },
];

export default function ExportProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-accent/10 px-5 py-2 text-sm md:text-base font-bold
          uppercase tracking-[0.3em] text-accent border border-accent/30">
            Export Process
          </span>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Simple. Transparent. Reliable.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-zinc-700">
            Our export process is designed to make international sourcing smooth,
            professional and easy for global buyers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-zinc-200 bg-[#faf8f2] p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-accent">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-black text-accent">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-primary">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] font-medium leading-7 text-zinc-700">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}