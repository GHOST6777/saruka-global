"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-accent">
              Contact Us
            </span>

            <h2 className="mt-5 text-5xl font-light leading-tight tracking-tighter text-primary md:text-6xl">
              Let&apos;s Discuss Your Global Requirements
            </h2>

            <p className="mt-6 max-w-xl text-zinc-600">
              Share your product requirement, quantity, packaging preference and destination country. Our export team will get back to you with details.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <Phone className="mb-4 text-accent" size={28} />
                <h3 className="font-bold text-primary">Phone</h3>
                <p className="mt-2 text-sm text-zinc-600">+91 8595203649</p>
              </div>

              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <Mail className="mb-4 text-accent" size={28} />
                <h3 className="font-bold text-primary">Email</h3>
                <p className="mt-2 text-sm text-zinc-600">export@sarukaglobal.com</p>
              </div>

              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <FaWhatsapp className="mb-4 text-green-500" size={28} />
                <h3 className="font-bold text-primary">WhatsApp</h3>
                <p className="mt-2 text-sm text-zinc-600">+91 8595203649</p>
              </div>

              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <Clock className="mb-4 text-accent" size={28} />
                <h3 className="font-bold text-primary">Business Hours</h3>
                <p className="mt-2 text-sm text-zinc-600">10 AM - 7 PM IST</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-primary p-7 text-white">
              <div className="flex gap-4">
                <MapPin className="mt-1 text-accent" size={28} />
                <div>
                  <h3 className="font-bold">Office Location</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Faridabad, Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-zinc-100 bg-zinc-50 p-6 shadow-2xl md:p-10"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-2xl bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-accent"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Country"
                  className="rounded-2xl bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-accent"
                />

                <input
                  type="text"
                  placeholder="Product Required"
                  className="rounded-2xl bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Tell us your requirement..."
                className="w-full resize-none rounded-2xl bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-accent"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-accent py-5 font-black uppercase tracking-widest text-primary transition hover:scale-[1.02]"
              >
                Send Inquiry
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}