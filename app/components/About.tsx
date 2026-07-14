import Image from "next/image";
import { Globe2, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2] pt-24">
      {/* Who We Are */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/about/about.jpg"
              alt="Saruka Global agricultural exports"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
                India To The World
              </p>

              <h1 className="mt-2 text-3xl font-semibold">
                Trusted Export Solutions
              </h1>
            </div>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.35em] text-accent">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
              A Professional Partner For Agricultural Trade
            </h2>

            <p className="mt-6 text-[15px] font-medium leading-8 text-zinc-700">
              Saruka Global supplies premium Indian grains, fresh fruits,
              vegetables, whole spices, pulses and dry fruits to international
              buyers. We focus on understanding each buyer&apos;s product,
              packaging, quantity and destination requirements before arranging
              the supply.
            </p>

            <p className="mt-4 text-[15px] font-medium leading-8 text-zinc-700">
              Our objective is to provide dependable sourcing, clear
              communication and organized export coordination while building
              long-term business relationships across global markets.
            </p>

            <p className="mt-4 text-[15px] font-medium leading-8 text-zinc-700">
              We work with trusted agricultural suppliers and logistics partners
              to support buyers with suitable products, packaging options and
              export documentation according to their requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-black uppercase tracking-[0.35em] text-accent">
              Our Direction
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
              Vision & Mission
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-zinc-700">
              Our direction is shaped by dependable service, transparent trade
              practices and long-term international partnerships.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div className="rounded-[2rem] bg-primary p-8 text-white shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
                <Globe2 size={28} />
              </div>

              <h3 className="mt-6 text-3xl font-semibold">Our Vision</h3>

              <p className="mt-4 font-medium leading-8 text-zinc-300">
                To become a trusted name in international agricultural trade by
                delivering dependable products, professional service and
                long-term value to buyers worldwide.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-accent">
                <Target size={28} />
              </div>

              <h3 className="mt-6 text-3xl font-semibold text-primary">
                Our Mission
              </h3>

              <p className="mt-4 font-medium leading-8 text-zinc-700">
                To connect trusted Indian agricultural supply networks with
                global buyers through transparent communication, export-focused
                quality, reliable packaging and coordinated logistics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}