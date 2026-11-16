type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-lime" : "text-emerald-800"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${centered ? "mx-auto" : ""} ${light ? "text-white/65" : "text-ink/65"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
