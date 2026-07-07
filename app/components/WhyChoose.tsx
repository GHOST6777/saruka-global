"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Ship,
  PackageCheck,
  BadgeCheck,
  Clock,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Carefully sourced agricultural products checked for export-grade quality.",
  },
  {
    icon: Ship,
    title: "Global Shipping",
    desc: "Reliable export support for international buyers and bulk shipments.",
  },
  {
    icon: PackageCheck,
    title: "Safe Packaging",
    desc: "Customized packaging options suitable for long-distance transportation.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Sourcing",
    desc: "Products sourced from verified farms, mills and processing partners.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Organized procurement and logistics for smooth order execution.",
  },
  {
    icon: Headphones,
    title: "Buyer Support",
    desc: "Clear communication from inquiry to quotation, packing and shipment.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.45em] text-accent">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-light tracking-tighter text-white md:text-6xl">
            Built For Global Buyers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-zinc-300 md:text-base">
            We focus on quality, reliability and long-term partnerships for
            agricultural export requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}