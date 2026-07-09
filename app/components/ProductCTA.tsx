import { ArrowRight } from "lucide-react";

interface ProductCTAProps {
  title: string;
  description: string;
  buttonText?: string;
}

export default function ProductCTA({
  title,
  description,
  buttonText = "Request Quote",
}: ProductCTAProps) {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-primary p-8 text-center text-white md:p-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-zinc-300">
          {description}
        </p>

        <a
          href="/#contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-primary transition hover:scale-105 hover:bg-white"
        >
          {buttonText}
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}