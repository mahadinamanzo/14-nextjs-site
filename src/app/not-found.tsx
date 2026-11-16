import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center py-20">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
          404 · Page not found
        </p>
        <h1 className="mx-auto mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">
          Looks like this page took a different turn.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-ink/65">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#c5eb52]"
        >
          Back to home <span aria-hidden="true">↗</span>
        </Link>
      </Container>
    </section>
  );
}
