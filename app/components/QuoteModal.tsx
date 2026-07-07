"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { useEffect, useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <motion.div
            key="quote-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          />

          <motion.div
            key="quote-modal"
            initial={{ scale: 0.92, opacity: 0, y: 22 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 22 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-accent/30 bg-primary p-5 text-white md:p-6">
              <div>
                <h3 className="text-2xl font-bold text-accent">Request a Quote</h3>
                <p className="text-sm text-zinc-300">
                  Get personalized pricing for your global requirements.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-white/10"
                aria-label="Close modal"
              >
                <X size={24} className="text-accent" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 md:p-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Company Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Global Traders Inc"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Country</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
                    placeholder="United Arab Emirates"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-primary">Requirement Details</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Quantities, varieties, and packaging preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-lg border border-accent/20 bg-primary py-4 font-bold text-accent transition-all hover:bg-secondary md:col-span-2"
                >
                  Submit Inquiry
                  <Send size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <div className="p-10 text-center">
                <h3 className="text-3xl font-bold text-primary">Inquiry Submitted</h3>
                <p className="mt-3 text-zinc-600">
                  Thank you. Our export team will contact you soon.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}