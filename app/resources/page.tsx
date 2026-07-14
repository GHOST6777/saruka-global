import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  FileText,
  Globe,
  Package,
  ShieldCheck,
  Ship,
} from "lucide-react";

const resources = [
  {
    title: "Export Process",
    description:
      "Understand our export workflow from enquiry to final shipment.",
    icon: Ship,
    href: "#",
  },
  {
    title: "Payment Terms",
    description:
      "Learn about common international payment methods used in exports.",
    icon: FileText,
    href: "#",
  },
  {
    title: "Incoterms",
    description:
      "Simple explanation of FOB, CIF, CFR and other international trade terms.",
    icon: Globe,
    href: "#",
  },
  {
    title: "Packaging",
    description:
      "Discover packaging options available for agricultural exports.",
    icon: Package,
    href: "#",
  },
  {
    title: "Quality & Inspection",
    description:
      "Quality checks and third-party inspection support available on request.",
    icon: ShieldCheck,
    href: "#",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions from international buyers.",
    icon: Boxes,
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2] pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-xs font-black uppercase tracking-[0.35em] text-accent">
            Resources
          </span>

          <h1 className="mt-4 text-5xl font-semibold text-primary">
            Export Knowledge Center
          </h1>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-zinc-700">
            Everything you need to know about agricultural exports,
            documentation, logistics, payment methods and international trade.
          </p>

        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {resources.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-accent">
                  <Icon size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-primary">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-zinc-600">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-accent transition group-hover:gap-3"
                >
                  Coming Soon
                  <ArrowRight size={18} />
                </Link>

              </div>

            );

          })}

        </div>

      </div>
    </main>
  );
}