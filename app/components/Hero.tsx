"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

const slides = [
  {
    image: "/images/hero/hero1.jpg",
    eyebrow: "Global Agricultural Trade",
    title: "Exporting Quality From India To The World",
    sub: "Premium grains, fruits, vegetables, spices, pulses and dry fruits sourced with care and delivered with trust.",
  },
  {
    image: "/images/hero/hero2.jpg",
    eyebrow: "Premium Agri Solutions",
    title: "Freshness, Purity And Global Standards",
    sub: "We help international buyers source reliable Indian agricultural products with transparent documentation and quality control.",
  },
  {
    image: "/images/hero/hero3.jpg",
    eyebrow: "Trusted Export Partner",
    title: "Building Strong Global Partnerships",
    sub: "From farm sourcing to packaging and shipment, Saruka Global focuses on consistency, compliance and long-term buyer relationships.",
  },
  {
    image: "/images/hero/hero4.jpg",
    eyebrow: "Indian Produce. Global Reach.",
    title: "Your Reliable Agricultural Export House",
    sub: "Serving global markets with premium Indian produce, professional communication and dependable supply capability.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-primary"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/65 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 mx-auto flex min-h-[100dvh] max-w-7xl items-start px-5 pb-20 pt-32 md:px-8">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-white/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck size={16} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent">
                  {slides[current].eyebrow}
                </span>
              </div>

              <h1 className="max-w-5xl text-5xl font-light leading-[0.98] tracking-tighter text-white md:text-7xl lg:text-8xl">
                {slides[current].title.split(" ").slice(0, 3).join(" ")}
                <br />
                <span className="text-gold-gradient italic">
                  {slides[current].title.split(" ").slice(3).join(" ")}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-zinc-200 md:text-xl">
                {slides[current].sub}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-primary transition-all hover:scale-105 hover:bg-white"
                >
                  View Products
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all hover:bg-white hover:text-primary"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["40+", "Global Markets"],
              ["100%", "Quality Focus"],
              ["24/7", "Buyer Support"],
              ["India", "Sourced Produce"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md"
              >
                <h3 className="text-2xl font-black text-accent">{value}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-zinc-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-accent hover:text-primary md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-accent hover:text-primary md:flex"
        aria-label="Next slide"
      >
        <ChevronRight size={26} />
      </button>

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-10 bg-accent" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}