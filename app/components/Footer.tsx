import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const productLinks = [
  {
    label: "Rice",
    href: "/products/grains/rice",
  },
  {
    label: "Wheat",
    href: "/products/grains/wheat",
  },
  {
    label: "Maize",
    href: "/products/grains/maize",
  },
  {
    label: "Fruits",
    href: "/products/fruits",
  },
  {
    label: "Vegetables",
    href: "/products/vegetables",
  },
  {
    label: "Spices",
    href: "/products/spices",
  },
  {
    label: "Pulses",
    href: "/products/pulses",
  },
  {
    label: "Dry Fruits",
    href: "/products/dry-fruits",
  },
];

const companyLinks = [
  {
    label: "Home",
    href: "/#hero",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Products",
    href: "/#products",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr] md:gap-12">
          {/* Brand */}

          <div className="max-w-md">
            <a
              href="/"
              aria-label="Go to Saruka Global homepage"
              className="inline-flex items-center gap-3"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-accent/40 bg-white/10 shadow-[0_8px_24px_rgba(212,175,55,0.18)]">
                <Image
                  src="/images/logo.png"
                  alt="Saruka Global Logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1.5"
                />
              </div>

              <div>
                <p className="text-xl font-black tracking-tight text-white">
                  SARUKA<span className="text-accent">GLOBAL</span>
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Agricultural Exports
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-zinc-300">
              Premium Indian agricultural products supplied to global buyers
              with reliable sourcing, professional packaging and export
              support.
            </p>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Connecting Indian Agriculture to Global Markets
            </p>
          </div>

          {/* Products */}

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-accent">
              Products
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {productLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-300 transition hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company & Contact */}

          <div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-accent">
                Company
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
                {companyLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-zinc-300 transition hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-accent">
                Contact
              </h3>

              <div className="mt-5 space-y-3">
                <a
                  href="tel:+918595203649"
                  className="flex items-start gap-3 text-sm font-medium text-zinc-300 transition hover:text-accent"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  +91 8595203649
                </a>

                <a
                  href="mailto:sraentreprises@gmail.com"
                  className="flex items-start gap-3 break-all text-sm font-medium text-zinc-300 transition hover:text-accent"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  sraentreprises@gmail.com
                </a>

                <div className="flex items-start gap-3 text-sm font-medium text-zinc-300">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  Faridabad, Haryana, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-center text-xs font-medium text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Saruka Global. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <a
              href="/privacy-policy"
              className="transition hover:text-accent"
            >
              Privacy Policy
            </a>

            <span className="text-white/20">•</span>

            <a
              href="/terms-and-conditions"
              className="transition hover:text-accent"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}