"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Box } from "lucide-react";

const categories = [
  { name: "Grains", href: "/products/grains", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070" },
  { name: "Fruits", href: "/products/fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070" },
  { name: "Vegetables", href: "/products/vegetables", image: "https://images.unsplash.com/photo-1597362868479-353396b11222?q=80&w=2070" },
  { name: "Spices", href: "/products/spices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070" },
];

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-primary dark:text-white mb-4 tracking-tighter">
            OUR <span className="text-accent">PORTFOLIO</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl text-lg">
            Discover our extensive range of certified agricultural exports sourced from the best farms in India.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-96 overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-white/5"
            >
              <img src={cat.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-widest">{cat.name}</h3>
                <Link href={cat.href} className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm transform hover:translate-x-2 transition-all">
                  VIEW RANGE <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}