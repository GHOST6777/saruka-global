import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductHeroProps {
  title: string;
  highlight: string;
  description: string;
  image: string;
  backLink: string;
  backText: string;
  badges: string[];
}

export default function ProductHero({
  title,
  highlight,
  description,
  image,
  backLink,
  backText,
  badges,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32">
        <Link
          href={backLink}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          <ArrowLeft size={18} />
          {backText}
        </Link>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          {title}
          <span className="block text-accent">{highlight}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-zinc-200">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {badges.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/40 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}