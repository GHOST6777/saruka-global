"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useEffect } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl"
          >
            <div className="bg-primary p-6 text-white flex justify-between items-center border-b border-accent/30">
              <div>
                <h3 className="text-2xl font-bold text-accent">Request a Quote</h3>
                <p className="text-sm text-zinc-300">Get personalized pricing for your global requirements.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} className="text-accent" />
              </button>
            </div>

            <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary dark:text-accent">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-accent outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary dark:text-accent">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-accent outline-none" placeholder="Global Traders Inc" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary dark:text-accent">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-accent outline-none" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary dark:text-accent">Country of Destination</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-accent outline-none" placeholder="e.g. United Arab Emirates" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-primary dark:text-accent">Requirement Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="Quantities, varieties, and packaging preferences..."></textarea>
              </div>
              <button className="md:col-span-2 bg-primary text-accent font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary transition-all border border-accent/20 group">
                Submit Inquiry
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}