"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const products = [
  {
    id: "grains",
    title: "Grains",
    desc: "Premium rice, wheat, maize and other Indian grain varieties.",
    img: "/images/products/grains.jpeg",
  },
  {
    id: "fruits",
    title: "Fruits",
    desc: "Fresh export-quality fruits packed for global markets.",
    img: "/images/products/fruits.jpeg",
  },
  {
    id: "vegetables",
    title: "Vegetables",
    desc: "Farm-fresh vegetables sourced from trusted Indian growers.",
    img: "/images/products/vegetables.jpg",
  },
  {
    id: "spices",
    title: "Spices",
    desc: "Authentic Indian spices with rich aroma and purity.",
    img: "/images/products/spices.jpg",
  },
  {
    id: "pulses",
    title: "Pulses",
    desc: "High-quality pulses suitable for wholesale and retail buyers.",
    img: "/images/products/pulses.jpg",
  },
  {
    id: "dry-fruits",
    title: "Dry Fruits",
    desc: "Premium dry fruits packed with care and export standards.",
    img: "/images/products/dry-fruits.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-accent/10 px-5 py-2 text-sm md:text-base font-bold
          uppercase tracking-[0.3em] text-accent border border-accent/30">
            Export Catalog
          </span>

          <h2 className="text-4xl font-light tracking-tighter text-primary md:text-6xl">
            Our Product Range
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-zinc-600 md:text-base">
            Saruka Global supplies premium Indian agricultural products to
            international buyers with reliable sourcing, packaging and export
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={`/products/${item.id}`}
                className="group block overflow-hidden rounded-[2rem] bg-primary shadow-xl"
              >
                <div className="relative h-[360px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="text-3xl font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-300">
                      {item.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                      Explore Products
                      <MoveRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
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