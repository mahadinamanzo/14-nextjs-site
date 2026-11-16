import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mahadi Na Manzo to start your next project.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
            Start something good
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">
            Tell us what you&apos;re thinking.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-ink/65">
            A new idea, a knotty challenge, or just a feeling it&apos;s time for
            something different. We&apos;d love to hear about it.
          </p>
          <a
            href="mailto:mahadinamanzo@gmail.com"
            className="mt-9 inline-flex items-center gap-3 border-b border-ink/20 pb-2 text-base font-semibold transition-colors hover:border-emerald-800 hover:text-emerald-900 sm:text-lg"
          >
            mahadinamanzo@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>

        <aside className="rounded-[2rem] bg-[#e8eee5] p-7 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
            We&apos;re easy to reach
          </p>
          <div className="mt-8 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
                Email
              </p>
              <a
                className="mt-2 inline-block text-lg font-semibold tracking-tight hover:text-emerald-900"
                href="mailto:mahadinamanzo@gmail.com"
              >
                mahadinamanzo@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
                Phone
              </p>
              <a
                className="mt-2 inline-block text-lg font-semibold tracking-tight hover:text-emerald-900"
                href="tel:08131923393"
              >
                08131923393
              </a>
            </div>
            <div className="border-t border-ink/10 pt-6">
              <p className="text-sm leading-6 text-ink/60">
                Reach out whenever you&apos;re ready. We&apos;ll get back to you
                as soon as we can.
              </p>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
