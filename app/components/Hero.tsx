"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop",
    title: "Global Export",
    sub: "Excellence",
  },
  {
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=2000&auto=format&fit=crop",
    title: "Premium Agri",
    sub: "Solutions",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p === slides.length - 1 ? 0 : p + 1)), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center bg-primary overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={slides[current].image} 
            alt="Saruka Global" 
            className="h-full w-full object-cover" 
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Leading International Trade</span>
          <h1 className="text-5xl md:text-8xl font-light text-white leading-[1.1] mb-6 tracking-tighter">
            {slides[current].title} <br/>
            <span className="text-gold-gradient italic font-extralight">{slides[current].sub}</span>
          </h1>
          <p className="text-sm md:text-lg text-zinc-200 mb-10 max-w-md font-light leading-relaxed">
            Delivering the finest Indian agricultural produce to global markets with an unwavering commitment to quality.
          </p>
          <button className="border border-accent text-accent px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-accent hover:text-primary transition-all flex items-center gap-3">
            VIEW RANGE <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}