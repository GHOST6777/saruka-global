import Image from "next/image";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f2] px-6">
      <div className="text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-zinc-200 border-t-accent" />

          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-accent/30 bg-primary shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Saruka Global"
              fill
              priority
              sizes="64px"
              className="object-contain p-2"
            />
          </div>
        </div>

        <h1 className="mt-7 text-2xl font-black tracking-tight text-primary">
          SARUKA<span className="text-accent">GLOBAL</span>
        </h1>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
          Agricultural Exports
        </p>

        <div className="mx-auto mt-6 h-1 w-40 overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-accent" />
        </div>

        <p className="mt-5 text-sm font-medium text-zinc-600">
          Loading premium export solutions...
        </p>
      </div>
    </main>
  );
}