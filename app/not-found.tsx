import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f2] px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-accent shadow-xl">
          <SearchX size={38} />
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.35em] text-accent">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-primary md:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[15px] font-medium leading-8 text-zinc-700">
          The page you are looking for may have been moved, renamed or is no
          longer available.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-w-48 items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-accent hover:text-primary"
          >
            <Home size={18} />
            Go To Homepage
          </Link>

          <Link
            href="/#products"
            className="inline-flex min-w-48 items-center justify-center gap-2 rounded-full border border-primary/20 bg-white px-7 py-4 text-sm font-black text-primary transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <ArrowLeft size={18} />
            Explore Products
          </Link>
        </div>
      </div>
    </main>
  );
}