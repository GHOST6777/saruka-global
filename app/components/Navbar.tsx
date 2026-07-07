"use client";

import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || quoteOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, quoteOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          scrolled ? "glass-effect py-3" : "bg-primary/90 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <Globe className="text-primary" size={26} />
            </div>

            <h1 className="text-white text-xl font-black tracking-tight">
              SARUKA<span className="text-accent">GLOBAL</span>
            </h1>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#hero" className="text-white hover:text-accent">Home</a>
            <a href="#about" className="text-white hover:text-accent">About</a>
            <a href="#products" className="text-white hover:text-accent">Products</a>
            <a href="#contact" className="text-white hover:text-accent">Contact</a>

            <button
              onClick={() => setQuoteOpen(true)}
              className="bg-accent text-primary px-6 py-3 rounded-full font-bold"
            >
              Get Quote
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            onTouchEnd={() => setMenuOpen(true)}
            className="lg:hidden w-14 h-14 flex items-center justify-center text-white z-[10000]"
            aria-label="Open menu"
          >
            <Menu size={42} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/70 z-[9998]"
          />

          <div className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-primary z-[9999] px-8 py-8 shadow-2xl">
            <div className="flex justify-end">
              <button
                onClick={closeMenu}
                onTouchEnd={closeMenu}
                className="text-accent"
              >
                <X size={42} />
              </button>
            </div>

            <div className="mt-16 flex flex-col gap-8">
              <a onClick={closeMenu} href="#hero" className="text-white text-4xl font-light">
                Home
              </a>
              <a onClick={closeMenu} href="#about" className="text-white text-4xl font-light">
                About
              </a>
              <a onClick={closeMenu} href="#products" className="text-white text-4xl font-light">
                Products
              </a>
              <a onClick={closeMenu} href="#contact" className="text-white text-4xl font-light">
                Contact
              </a>

              <button
                onClick={() => {
                  closeMenu();
                  setQuoteOpen(true);
                }}
                className="mt-8 bg-accent text-primary py-5 rounded-2xl font-black"
              >
                REQUEST QUOTE
              </button>
            </div>
          </div>
        </>
      )}

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}