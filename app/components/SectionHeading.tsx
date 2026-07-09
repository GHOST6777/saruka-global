interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mb-12 text-center" : "mb-12"}>
      <span className="text-xs font-black uppercase tracking-[0.35em] text-accent">
        {badge}
      </span>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-[15px] font-medium leading-7 text-zinc-700 ${
            center ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}