"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";

const searchableProducts = [
  { name: "1121 Basmati Rice", category: "Rice", href: "/products/grains/rice" },
  { name: "1509 Basmati Rice", category: "Rice", href: "/products/grains/rice" },
  { name: "IR64 Rice", category: "Rice", href: "/products/grains/rice" },
  { name: "Pusa Basmati Rice", category: "Rice", href: "/products/grains/rice" },
  { name: "Traditional Basmati Rice", category: "Rice", href: "/products/grains/rice" },

  { name: "Sharbati Wheat", category: "Wheat", href: "/products/grains/wheat" },
  { name: "Lokwan Wheat", category: "Wheat", href: "/products/grains/wheat" },
  { name: "Durum Wheat", category: "Wheat", href: "/products/grains/wheat" },

  { name: "Yellow Maize", category: "Maize", href: "/products/grains/maize" },
  { name: "Broken Maize", category: "Maize", href: "/products/grains/maize" },
  { name: "White Maize", category: "Maize", href: "/products/grains/maize" },
  { name: "Sweet Corn", category: "Maize", href: "/products/grains/maize" },
  { name: "Popcorn Maize", category: "Maize", href: "/products/grains/maize" },
  { name: "Baby Corn", category: "Maize", href: "/products/grains/maize" },

  { name: "Apple", category: "Fruits", href: "/products/fruits" },
  { name: "Banana", category: "Fruits", href: "/products/fruits" },
  { name: "Dragon Fruit", category: "Fruits", href: "/products/fruits" },
  { name: "Sonaka Grapes", category: "Fruits", href: "/products/fruits" },
  { name: "Jumbo Black Grapes", category: "Fruits", href: "/products/fruits" },
  { name: "Pomegranate", category: "Fruits", href: "/products/fruits" },
  { name: "Orange", category: "Fruits", href: "/products/fruits" },
  { name: "Guava", category: "Fruits", href: "/products/fruits" },
  { name: "Pineapple", category: "Fruits", href: "/products/fruits" },
  { name: "Custard Apple", category: "Fruits", href: "/products/fruits" },
  { name: "Mangosteen", category: "Fruits", href: "/products/fruits" },

  { name: "Onion", category: "Vegetables", href: "/products/vegetables" },
  { name: "Potato", category: "Vegetables", href: "/products/vegetables" },
  { name: "Tomato", category: "Vegetables", href: "/products/vegetables" },
  { name: "Green Chilli", category: "Vegetables", href: "/products/vegetables" },
  { name: "Garlic", category: "Vegetables", href: "/products/vegetables" },
  { name: "Ginger", category: "Vegetables", href: "/products/vegetables" },
  { name: "Okra", category: "Vegetables", href: "/products/vegetables" },
  { name: "Suran", category: "Vegetables", href: "/products/vegetables" },
  { name: "Cabbage", category: "Vegetables", href: "/products/vegetables" },
  { name: "Bottle Gourd", category: "Vegetables", href: "/products/vegetables" },
  { name: "Drumstick", category: "Vegetables", href: "/products/vegetables" },

  { name: "Turmeric Fingers", category: "Spices", href: "/products/spices" },
  { name: "Red Chilli", category: "Spices", href: "/products/spices" },
  { name: "Cumin Seeds", category: "Spices", href: "/products/spices" },
  { name: "Coriander Seeds", category: "Spices", href: "/products/spices" },
  { name: "Fennel Seeds", category: "Spices", href: "/products/spices" },
  { name: "Fenugreek Seeds", category: "Spices", href: "/products/spices" },
  { name: "Black Pepper", category: "Spices", href: "/products/spices" },
  { name: "Green Cardamom", category: "Spices", href: "/products/spices" },
  { name: "Cloves", category: "Spices", href: "/products/spices" },
  { name: "Nutmeg", category: "Spices", href: "/products/spices" },
  { name: "Ajwain", category: "Spices", href: "/products/spices" },

  { name: "Chickpea", category: "Pulses", href: "/products/pulses" },
  { name: "Bengal Gram", category: "Pulses", href: "/products/pulses" },
  { name: "Pigeon Pea", category: "Pulses", href: "/products/pulses" },
  { name: "Green Gram", category: "Pulses", href: "/products/pulses" },
  { name: "Black Gram", category: "Pulses", href: "/products/pulses" },
  { name: "Red Lentil", category: "Pulses", href: "/products/pulses" },
  { name: "Black Eyed Pea", category: "Pulses", href: "/products/pulses" },
  { name: "White Pea", category: "Pulses", href: "/products/pulses" },
  { name: "Soybean", category: "Pulses", href: "/products/pulses" },
  { name: "Kidney Bean", category: "Pulses", href: "/products/pulses" },
  { name: "Horse Gram", category: "Pulses", href: "/products/pulses" },
  { name: "Moth Bean", category: "Pulses", href: "/products/pulses" },
  { name: "Field Pea", category: "Pulses", href: "/products/pulses" },
  { name: "Cowpea", category: "Pulses", href: "/products/pulses" },

  { name: "Raisins", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Cashew Nut", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Walnuts", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Almonds", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Pistachios", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Dates", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Figs", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Apricots", category: "Dry Fruits", href: "/products/dry-fruits" },
  { name: "Fox Nut (Makhana)", category: "Dry Fruits", href: "/products/dry-fruits" },
];

interface ProductSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductSearch({
  isOpen,
  onClose,
}: ProductSearchProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchableProducts.slice(0, 8);
    }

    return searchableProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.category.toLowerCase().includes(normalizedQuery)
      )
      .slice(0, 12);
  }, [query]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[10050] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close product search"
        className="absolute inset-0"
      />

      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-zinc-200 px-5 py-4">
          <Search size={22} className="shrink-0 text-accent" />

          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search rice, apple, cumin, makhana..."
            className="w-full bg-transparent text-base font-semibold text-primary outline-none placeholder:text-zinc-400"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-primary transition hover:bg-primary hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4">
          <p className="px-2 pb-3 text-[11px] font-black uppercase tracking-[0.22em] text-accent">
            {query ? "Search Results" : "Popular Products"}
          </p>

          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((product) => (
                <Link
                  key={`${product.category}-${product.name}`}
                  href={product.href}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 transition hover:border-accent/30 hover:bg-[#faf8f2]"
                >
                  <div>
                    <p className="font-bold text-primary">{product.name}</p>
                    <p className="mt-1 text-xs font-semibold text-zinc-500">
                      {product.category}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-accent transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-12 text-center">
              <Search size={34} className="mx-auto text-zinc-300" />

              <p className="mt-4 font-bold text-primary">No product found</p>

              <p className="mt-2 text-sm text-zinc-500">
                Try another product or category name.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}