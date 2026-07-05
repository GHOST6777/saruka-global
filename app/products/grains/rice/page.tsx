"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function RicePage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/products/grains" className="inline-flex items-center gap-2 text-accent font-bold mb-8 hover:gap-4 transition-all">
          <ChevronLeft size={20} /> BACK TO GRAINS
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070" className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover" alt="Basmati Rice" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl font-black text-primary dark:text-white mb-6 uppercase">Indian <span className="text-accent">Basmati Rice</span></h1>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              Aged for 2 years, our 1121 Extra Long Grain Basmati Rice is known for its aroma and separate grains after cooking.
            </p>
            
            <div className="space-y-4 mb-10">
              {["Grain Length: 8.35mm+", "Moisture: 12% Max", "Purity: 95%", "Admixture: 5% Max"].map((spec, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-white/5">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="font-bold text-primary dark:text-zinc-300">{spec}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-primary text-accent font-black rounded-2xl shadow-xl hover:bg-secondary transition-all">
              DOWNLOAD TECHNICAL DATASHEET
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}