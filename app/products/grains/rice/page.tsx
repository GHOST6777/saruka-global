import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Ruler,
  Droplets,
  Package,
  Calendar,
} from "lucide-react";

const riceProducts = [
  {
    name: "1121 Basmati Rice",
    tag: "Best Seller",
    image: "/images/rice/1121.jpg",
    desc: "Premium-quality extra-long grain Basmati rice renowned for exceptional aroma, excellent cooking characteristics, and remarkable grain elongation after cooking.",
    origin: "Haryana, Punjab, Uttar Pradesh",
    grain: "8.30 mm+",
    moisture: "Max 13%",
    packaging: "5kg, 10kg, 25kg, 50kg PP / Jute Bags",
    shelfLife: "24 Months",
  },
  {
    name: "1509 Basmati Rice",
    tag: "Popular",
    image: "/images/rice/1509.jpg",
    desc: "Extra-long grain Basmati rice known for natural fragrance, high cooking yield, quick cooking time, and excellent texture for food service buyers.",
    origin: "Haryana, Punjab",
    grain: "8.30 mm+",
    moisture: "Max 13%",
    packaging: "5kg, 10kg, 25kg, 50kg Bags",
    shelfLife: "24 Months",
  },
  {
    name: "IR64 Rice",
    tag: "Non-Basmati",
    image: "/images/rice/ir64.jpg",
    desc: "High-quality non-basmati rice with uniform grains, excellent cooking performance, and broad international acceptance for bulk procurement.",
    origin: "Chhattisgarh, Odisha, Andhra Pradesh",
    grain: "Long Grain",
    moisture: "Max 13%",
    packaging: "25kg & 50kg Bags",
    shelfLife: "24 Months",
  },
  {
    name: "Pusa Basmati Rice",
    tag: "Premium",
    image: "/images/rice/pusa.jpg",
    desc: "Aromatic long grain Basmati rice offering delightful aroma, premium appearance, and excellent cooking quality for global markets.",
    origin: "Punjab, Haryana, Uttar Pradesh",
    grain: "7.40 mm+",
    moisture: "Max 13%",
    packaging: "5kg, 10kg, 25kg, 50kg Bags",
    shelfLife: "24 Months",
  },
  {
    name: "Traditional Basmati Rice",
    tag: "Classic",
    image: "/images/rice/traditional.jpg",
    desc: "Authentic traditional Basmati rice valued for natural aroma, slender grains, rich taste, and premium aged quality.",
    origin: "Punjab, Haryana",
    grain: "7.00 mm+",
    moisture: "As per buyer requirement",
    packaging: "5kg, 10kg, 25kg, 50kg Bags",
    shelfLife: "24 Months",
  },
];

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl bg-[#faf8f2] p-3">
      <Icon size={17} className="mt-1 shrink-0 text-accent" />
      <div>
        <p className="text-[12px] font-bold uppercase tracking-wider text-primary">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium leading-5 text-zinc-700">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function RicePage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <img
            src="/images/rice/rice-banner.jpg"
            alt="Premium Indian Rice Export"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32">
          <Link
            href="/products/grains"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <ArrowLeft size={18} />
            Back to Grains
          </Link>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Premium Indian
            <span className="block text-accent">Rice Export</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-zinc-200">
            Export-quality Basmati and Non-Basmati rice varieties for global
            importers, wholesalers, hospitality buyers and food service
            businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["1121", "1509", "IR64", "Pusa", "Traditional"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent/40 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="rice-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-black uppercase tracking-[0.35em] text-accent">
              Rice Varieties
            </span>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
              Our Rice Products
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-zinc-700">
              Carefully selected rice varieties with essential export details
              for serious buyers.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {riceProducts.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute right-4 top-4 rounded-full bg-accent px-4 py-2 text-[10px] font-black uppercase tracking-wider text-primary">
                    {item.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold tracking-tight text-primary">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-[15px] font-medium leading-7 text-zinc-700">
                    {item.desc}
                  </p>

                  <div className="mt-5 grid gap-3">
                    <Spec icon={MapPin} label="Origin" value={item.origin} />
                    <Spec icon={Ruler} label="Grain Length" value={item.grain} />
                    <Spec icon={Droplets} label="Moisture" value={item.moisture} />
                    <Spec icon={Package} label="Packaging" value={item.packaging} />
                    <Spec icon={Calendar} label="Shelf Life" value={item.shelfLife} />
                  </div>

                  <a
                    href="/#contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white transition hover:bg-accent hover:text-primary"
                  >
                    Send Inquiry
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-primary p-8 text-center text-white md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Looking For Bulk Rice Export?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-zinc-300">
            Send your required rice variety, quantity, packaging preference and
            destination country. Our team will share pricing and shipment
            details.
          </p>

          <a
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-primary transition hover:scale-105 hover:bg-white"
          >
            Request Quote
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}