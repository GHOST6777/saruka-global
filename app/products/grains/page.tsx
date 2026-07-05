"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const grainLinks = [
  { title: "Rice", href: "/products/grains/rice", desc: "Basmati, Non-Basmati, Sella" },
  { title: "Wheat", href: "/products/grains/wheat", desc: "Durum, Milling Wheat, Flour" },
  { title: "Maize", href: "/products/grains/maize", desc: "Yellow Maize, Animal Feed" },
];

export default function GrainsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-black text-primary dark:text-white mb-6">GRAINS & <br/><span className="text-accent">CEREALS</span></h1>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Saruka Global is a leading exporter of premium grains. We ensure rigorous quality control for moisture, purity, and grain length to meet global standards.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000" className="rounded-[3rem] shadow-2xl" alt="Grains" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {grainLinks.map((g, i) => (
            <Link key={i} href={g.href} className="group">
              <div className="p-10 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-white/5 group-hover:border-accent transition-all">
                <h2 className="text-3xl font-black text-primary dark:text-white mb-2">{g.title}</h2>
                <p className="text-zinc-500 mb-6">{g.desc}</p>
                <div className="flex items-center gap-2 text-accent font-bold">
                  EXPLORE <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}