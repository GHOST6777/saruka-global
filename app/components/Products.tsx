"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const items = [
  { id: "grains", title: "Premium Grains", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800" },
  { id: "fruits", title: "Fresh Fruits", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800" },
  { id: "vegetables", title: "Vegetables", img: "https://images.unsplash.com/photo-1597362868479-353396b11222?q=80&w=800" }, // FIXED IMAGE
  { id: "spices", title: "Organic Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800" },
  { id: "pulses", title: "Nutritious Pulses", img: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=800" },
  { id: "dry-fruits", title: "Dry Fruits & Nuts", img: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=800" },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-bold text-accent tracking-[0.5em] uppercase mb-4 block">Product Catalog</span>
          <h3 className="text-4xl md:text-6xl font-light text-primary tracking-tighter">Explore Our Range</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100"
            >
              {/* FIXED IMAGE SCALING WITH ASPECT RATIO */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-medium text-primary mb-4 tracking-tight">{item.title}</h4>
                <Link 
                  href={`/products/${item.id}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-bold text-accent tracking-[0.2em] hover:gap-4 transition-all uppercase"
                >
                  Explore Details <MoveRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}