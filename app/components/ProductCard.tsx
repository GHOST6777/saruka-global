import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  MapPin,
  Package,
} from "lucide-react";

interface ProductCardProps {
  name: string;
  tag: string;
  image: string;
  desc: string;
  origin: string;
  purity?: string;
  packaging: string;
  shelfLife: string;
  varieties?: string[];
}

export default function ProductCard({
  name,
  tag,
  image,
  desc,
  origin,
  purity,
  packaging,
  shelfLife,
  varieties,
}: ProductCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}

      <div className="relative h-48 overflow-hidden bg-zinc-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary">
          {tag}
        </span>
      </div>

      {/* Product Content */}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold tracking-tight text-primary">
          {name}
        </h3>

        <p className="mt-3 line-clamp-4 text-[14px] font-medium leading-6 text-zinc-700">
          {desc}
        </p>

        {/* Varieties */}

        {varieties && varieties.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-primary">
              Varieties
            </p>

            <div className="flex flex-wrap gap-2">
              {varieties.map((variety) => (
                <span
                  key={variety}
                  className="rounded-full border border-zinc-200 bg-[#faf8f2] px-3 py-1 text-[11px] font-semibold text-zinc-700 transition hover:border-accent hover:bg-accent hover:text-primary"
                >
                  {variety}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Specifications */}

        <div className="mt-5 grid grid-cols-2 gap-2">
          <Spec icon={MapPin} label="Origin" value={origin} />

          <Spec
            icon={BadgeCheck}
            label="Purity"
            value={purity || "Export Grade"}
          />

          <Spec icon={Package} label="Packaging" value={packaging} />

          <Spec icon={Calendar} label="Shelf Life" value={shelfLife} />
        </div>

        {/* Quote Button */}

        <a
          href="/#contact"
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white transition hover:bg-accent hover:text-primary"
        >
          Request Quote
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#faf8f2] px-3 py-2">
      <div className="mb-1 flex items-center gap-1.5">
        <Icon size={13} className="shrink-0 text-accent" />

        <p className="text-[10px] font-black uppercase tracking-wider text-primary">
          {label}
        </p>
      </div>

      <p className="line-clamp-2 text-[12px] font-medium leading-5 text-zinc-700">
        {value}
      </p>
    </div>
  );
}