"use client";

import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#061510] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">

                <Globe className="text-primary"/>

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  SARUKA
                </h2>

                <p className="text-accent tracking-[0.35em] text-xs">
                  GLOBAL
                </p>

              </div>

            </div>

            <p className="text-zinc-400 leading-8">

              Delivering premium agricultural products
              from India to international buyers with
              quality, reliability and long-term trust.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-accent">

              Quick Links

            </h3>

            <div className="flex flex-col gap-4">

              <a href="#hero" className="hover:text-accent transition">
                Home
              </a>

              <a href="#about" className="hover:text-accent transition">
                About
              </a>

              <a href="#products" className="hover:text-accent transition">
                Products
              </a>

              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-accent">

              Product Categories

            </h3>

            <div className="flex flex-col gap-4">

              <Link href="/products/grains">
                Grains
              </Link>

              <Link href="/products/fruits">
                Fruits
              </Link>

              <Link href="/products/vegetables">
                Vegetables
              </Link>

              <Link href="/products/spices">
                Spices
              </Link>

              <Link href="/products/pulses">
                Pulses
              </Link>

              <Link href="/products/dry-fruits">
                Dry Fruits
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-accent">

              Contact

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone className="text-accent"/>

                <span>+91 8882292191</span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-accent"/>

                <span>export@sarukaglobal.com</span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-accent"/>

                <span>

                  Faridabad,
                  Haryana,
                  India

                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-zinc-500">

            © {new Date().getFullYear()} Saruka Global.
            All Rights Reserved.

          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition"
          >

            Back To Top

            <ArrowUp size={18}/>

          </button>

        </div>

      </div>

    </footer>
  );
}