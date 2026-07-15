"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Search,
  X,
} from "lucide-react";
import QuoteModal from "./QuoteModal";
import ProductSearch from "./ProductSearch";

const productLinks = [
  { label: "Rice", href: "/products/grains/rice" },
  { label: "Wheat", href: "/products/grains/wheat" },
  { label: "Maize", href: "/products/grains/maize" },
  { label: "Fruits", href: "/products/fruits" },
  { label: "Vegetables", href: "/products/vegetables" },
  { label: "Spices", href: "/products/spices" },
  { label: "Pulses", href: "/products/pulses" },
  { label: "Dry Fruits", href: "/products/dry-fruits" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const shouldLockScroll = menuOpen || quoteOpen || searchOpen;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = shouldLockScroll ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen, quoteOpen, searchOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setProductsOpen(false);
        setQuoteOpen(false);
        setSearchOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    setProductsOpen(false);
  }

  function openQuote() {
    closeMenu();
    setQuoteOpen(true);
  }

  function openSearch() {
    closeMenu();
    setSearchOpen(true);
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[9990] transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-primary/95 py-2 shadow-xl backdrop-blur-xl"
            : "bg-primary/90 py-3 md:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Brand */}

          <Link
            href="/"
            aria-label="Go to Saruka Global homepage"
            className="group flex min-w-0 items-center gap-3 md:gap-4"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-accent/45 bg-white shadow-[0_10px_30px_rgba(212,175,55,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:border-accent md:h-16 md:w-16">
              <Image
                src="/images/logo.png"
                alt="Saruka Global"
                fill
                priority
                sizes="64px"
                className="object-contain p-1.5 md:p-2"
              />
            </div>

            <div className="min-w-0 leading-none">
              <p className="truncate text-[19px] font-black tracking-[-0.04em] text-white sm:text-[22px] md:text-[27px]">
                SARUKA
                <span className="ml-1.5 text-accent">GLOBAL</span>
              </p>

              <p className="mt-1 hidden text-[8px] font-extrabold uppercase tracking-[0.28em] text-white/60 sm:block md:text-[9px]">
                Agricultural Exports
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-6 lg:flex xl:gap-7">
            <NavLink href="/#hero">Home</NavLink>

            <NavLink href="/about">About</NavLink>

            <div className="group relative">
              <button
                type="button"
                aria-label="Open products menu"
                className="relative flex items-center gap-1.5 py-4 text-[15px] font-semibold tracking-wide text-white transition duration-300 hover:text-accent"
              >
                Products

                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full w-[580px] -translate-x-1/2 translate-y-3 rounded-[26px] border border-zinc-200 bg-white p-6 opacity-0 shadow-2xl transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-5 flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                      Product Range
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-primary">
                      Explore Our Exports
                    </h3>
                  </div>

                  <Link
                    href="/#products"
                    className="text-sm font-bold text-primary transition hover:text-accent"
                  >
                    View All
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-[#faf8f2] hover:text-primary"
                    >
                      {item.label}

                      <ChevronRight
                        size={16}
                        className="text-accent transition-transform group-hover/item:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/resources">Resources</NavLink>

            <NavLink href="/#contact">Contact</NavLink>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              <Search size={19} />
            </button>

            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="rounded-full bg-accent px-6 py-3 text-sm font-black text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition active:scale-95 lg:hidden"
          >
            <Menu size={27} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}

      <div
        className={`fixed inset-0 z-[9995] lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close navigation overlay"
          className={`absolute inset-0 bg-black/65 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-[100dvh] w-[88%] max-w-[390px] flex-col overflow-hidden bg-primary shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}

          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-3"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-accent/45 bg-white shadow-[0_8px_24px_rgba(212,175,55,0.22)]">
                <Image
                  src="/images/logo.png"
                  alt="Saruka Global"
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>

              <div className="min-w-0 leading-none">
                <p className="truncate text-[19px] font-black tracking-[-0.04em] text-white">
                  SARUKA
                  <span className="ml-1 text-accent">GLOBAL</span>
                </p>

                <p className="mt-1 text-[8px] font-extrabold uppercase tracking-[0.24em] text-white/50">
                  Agricultural Exports
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition active:scale-95"
            >
              <X size={27} />
            </button>
          </div>

          {/* Drawer Content */}

          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-7">
            <div className="space-y-2">
              <MobileLink href="/#hero" onClick={closeMenu}>
                Home
              </MobileLink>

              <MobileLink href="/about" onClick={closeMenu}>
                About
              </MobileLink>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <button
                  type="button"
                  onClick={() => setProductsOpen((value) => !value)}
                  aria-expanded={productsOpen}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-bold text-white"
                >
                  Products

                  <ChevronDown
                    size={21}
                    className={`text-accent transition-transform duration-300 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    productsOpen
                      ? "grid-rows-[1fr] border-t border-white/10"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-1 p-3">
                      {productLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-accent"
                        >
                          {item.label}
                          <ChevronRight size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <MobileLink href="/resources" onClick={closeMenu}>
                Resources
              </MobileLink>

              <MobileLink href="/#contact" onClick={closeMenu}>
                Contact
              </MobileLink>

              <button
                type="button"
                onClick={openSearch}
                className="flex w-full items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-left text-lg font-bold text-white transition hover:border-white/10 hover:bg-white/5 hover:text-accent"
              >
                Search Products
                <Search size={20} className="text-accent" />
              </button>
            </div>

            {/* Quote Card */}

            <div className="mt-8 rounded-[24px] border border-accent/25 bg-accent/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">
                Export Enquiries
              </p>

              <p className="mt-3 text-sm font-medium leading-6 text-white/75">
                Share your product, quantity and destination for a customized
                quotation.
              </p>

              <button
                type="button"
                onClick={openQuote}
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-accent px-5 py-4 text-sm font-black text-primary transition active:scale-[0.98]"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Drawer Footer */}

          <div className="border-t border-white/10 px-5 py-4 text-center">
            <p className="text-xs font-medium text-white/45">
              © {new Date().getFullYear()} Saruka Global
            </p>
          </div>
        </aside>
      </div>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

      <ProductSearch
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-[15px] font-semibold tracking-wide text-white transition duration-300 hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-lg font-bold text-white transition hover:border-white/10 hover:bg-white/5 hover:text-accent"
    >
      {children}

      <ChevronRight size={20} className="shrink-0 text-accent" />
    </Link>
  );
}