"use client";

import Link from "next/link";
import { Globe, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>
            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Globe className="text-primary" size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  SARUKA
                  <span className="text-accent">GLOBAL</span>
                </h3>
              </div>

            </div>

            <p className="text-zinc-300 leading-7">
              Premium exporter of Indian agricultural products including
              grains, fruits, vegetables, spices, pulses and dry fruits,
              serving buyers across international markets.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-accent text-lg font-semibold mb-6">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4">

              <Link href="#hero" className="hover:text-accent transition">
                Home
              </Link>

              <Link href="#about" className="hover:text-accent transition">
                About
              </Link>

              <Link href="#products" className="hover:text-accent transition">
                Products
              </Link>

              <Link href="#contact" className="hover:text-accent transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Products */}

          <div>

            <h4 className="text-accent text-lg font-semibold mb-6">
              Products
            </h4>

            <div className="flex flex-col gap-4">

              <Link href="/products/grains" className="hover:text-accent transition">
                Grains
              </Link>

              <Link href="/products/fruits" className="hover:text-accent transition">
                Fruits
              </Link>

              <Link href="/products/vegetables" className="hover:text-accent transition">
                Vegetables
              </Link>

              <Link href="/products/spices" className="hover:text-accent transition">
                Spices
              </Link>

              <Link href="/products/pulses" className="hover:text-accent transition">
                Pulses
              </Link>

              <Link href="/products/dry-fruits" className="hover:text-accent transition">
                Dry Fruits
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-accent text-lg font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-1" />
                <span>+91 8595203649</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-1" />
                <span>sraentreprises@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span>
                  Faridabad,
                  Haryana,
                  India
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Saruka Global. All Rights Reserved.
          </p>

          <p className="text-zinc-400 text-sm">
            Designed for Global Agricultural Trade
          </p>

        </div>

      </div>
    </footer>
  );
}