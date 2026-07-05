"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? "glass-effect py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 z-[110]">
          <Globe className="text-accent" size={28} />
          <span className="text-xl font-bold text-white tracking-tighter">
            SARUKA<span className="text-accent">GLOBAL</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-white hover:text-accent transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/quote" className="bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-all">
            GET QUOTE
          </Link>
        </div>

        {/* MOBILE TOGGLE - Made larger for thumb-tapping */}
        <button 
          className="lg:hidden text-white p-2 z-[110]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-primary z-[105] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black text-white hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="bg-accent text-primary px-10 py-4 rounded-xl font-black text-xl"
            >
              GET QUOTE
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}