import Link from "next/link";
import { ArrowRight, PackageCheck, Ship, ShieldCheck } from "lucide-react";

const grains = [
  {
    name: "Rice",
    desc: "Premium Indian basmati and non-basmati rice varieties for international markets.",
    image: "/images/products/rice.jpg",
    href: "/products/grains/rice",
  },
  {
    name: "Wheat",
    desc: "High-quality Indian wheat including Sharbati, Lokwan and Durum varieties.",
    image: "/images/products/wheat.jpg",
    href: "/products/grains/wheat",
  },
  {
    name: "Maize",
    desc: "Export-quality yellow maize, white maize, sweet corn and other maize products.",
    image: "/images/products/maize.jpg",
    href: "/products/grains/maize",
  },
];

export default function GrainsPage() {
  return (
    <main className="bg-white">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-primary px-6 pt-32">
        <img
          src="/images/products/grains.jpg"
          alt="Premium Indian Grains"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <span className="text-[11px] font-black uppercase tracking-[0.45em] text-accent">
            Product Category
          </span>

          <h1 className="mt-5 max-w-4xl text-5xl font-light leading-tight tracking-tighter text-white md:text-7xl">
            Premium Indian Grains For Global Markets
          </h1>

          <p className="mt-6 max-w-2xl text-zinc-300">
            Saruka Global supplies high-quality rice, wheat and maize sourced
            from trusted Indian farms and processed for international buyers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-accent">
              Explore Grains
            </span>

            <h2 className="mt-4 text-4xl font-light tracking-tighter text-primary md:text-6xl">
              Our Grain Products
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {grains.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] bg-primary shadow-xl"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-medium text-white">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-300">
                      {item.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                      View Products
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
            <ShieldCheck className="mb-5 text-accent" size={38} />
            <h3 className="text-2xl font-medium">Export Quality</h3>
            <p className="mt-3 text-sm text-zinc-400">
              Cleaned, graded and processed grains suitable for global buyers.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
            <PackageCheck className="mb-5 text-accent" size={38} />
            <h3 className="text-2xl font-medium">Bulk Packaging</h3>
            <p className="mt-3 text-sm text-zinc-400">
              Available in 25kg, 50kg PP bags and customized export packaging.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
            <Ship className="mb-5 text-accent" size={38} />
            <h3 className="text-2xl font-medium">Global Shipping</h3>
            <p className="mt-3 text-sm text-zinc-400">
              Container-based export support with proper documentation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}