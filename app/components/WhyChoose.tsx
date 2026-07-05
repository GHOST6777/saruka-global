"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "grains",
    title: "Premium Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800",
    desc: "Basmati Rice, Wheat, and Maize.",
    href: "/products/grains"
  },
  {
    id: "spices",
    title: "Pure Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800",
    desc: "Turmeric, Red Chilli, and Cumin.",
    href: "/products/spices"
  },
  {
    id: "fruits",
    title: "Fresh Fruits",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800",
    desc: "Mangoes, Grapes, and Pomegranates.",
    href: "/products/fruits"
  },
  {
    id: "vegetables",
    title: "Vegetables",
    image: "https://images.unsplash.com/photo-1597362868479-353396b11222?q=80&w=800",
    desc: "Onions, Garlic, and Potatoes.",
    href: "/products/vegetables"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-black tracking-widest uppercase text-xs"
            >
              Export Catalog
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter"
            >
              Exporting Excellence in <br/>
              <span className="text-gold-gradient">Every Category.</span>
            </motion.h3>
          </div>
          <Link href="/products" className="text-accent font-bold border-b-2 border-accent pb-1 hover:text-white hover:border-white transition-all">
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }} // Critical for mobile visibility
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-zinc-900"
            >
              <Link href={p.href}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-2xl font-black text-white mb-2">{p.title}</h4>
                      <p className="text-zinc-400 text-sm">{p.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}