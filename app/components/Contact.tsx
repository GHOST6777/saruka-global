"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8595203649",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sraentreprises@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Faridabad, Haryana, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-zinc-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-accent/10 px-5 py-2 text-sm md:text-base font-bold
          uppercase tracking-[0.3em] text-accent border border-accent/30">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-light mt-4 text-primary">
            Let's Build Business Together
          </h2>

          <p className="text-zinc-600 mt-5 max-w-2xl mx-auto">
            Looking for reliable agricultural exports from India?
            Send us your requirement and our export team will
            contact you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[30px] p-10 text-white"
          >
            <h3 className="text-3xl font-light mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-5">
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>

                    <div>
                      <p className="text-accent text-sm uppercase tracking-wider">
                        {item.title}
                      </p>

                      <p className="mt-1 text-white/90">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-[30px] p-10 shadow-xl border border-zinc-200 space-y-6"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-zinc-300 px-5 py-4 outline-none focus:border-accent"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-zinc-300 px-5 py-4 outline-none focus:border-accent"
            />

            <input
              type="text"
              placeholder="Country"
              className="w-full rounded-xl border border-zinc-300 px-5 py-4 outline-none focus:border-accent"
            />

            <input
              type="text"
              placeholder="Product Required"
              className="w-full rounded-xl border border-zinc-300 px-5 py-4 outline-none focus:border-accent"
            />

            <textarea
              rows={5}
              placeholder="Tell us your requirements..."
              className="w-full resize-none rounded-xl border border-zinc-300 px-5 py-4 outline-none focus:border-accent"
            />

            <button
              className="bg-accent text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition"
            >
              Send Inquiry
              <Send size={18} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}