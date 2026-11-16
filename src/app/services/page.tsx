import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { getServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand strategy, digital design, and growth services from Mahadi Na Manzo.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              What we can do together
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Good thinking.{" "}
              <span className="text-emerald-800">Made real.</span>
            </h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-ink/65">
            The right mix of people, perspective, and craft to take you from
            &ldquo;what if?&rdquo; to what&apos;s next.
          </p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-72 flex-col rounded-[2rem] border border-ink/10 bg-white/50 p-7 transition-all hover:-translate-y-1 hover:border-ink/20 hover:bg-white sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.16em] text-emerald-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid size-12 place-items-center rounded-full bg-[#e8eee5] text-2xl text-emerald-900 transition-colors group-hover:bg-lime">
                  {service.icon}
                </span>
              </div>
              <h2 className="mt-8 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                {service.summary}
              </p>
              <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                <span className="text-xs font-medium text-ink/50">
                  From ₦{service.priceFrom.toLocaleString("en-NG")}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition-all group-hover:gap-3">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime">
              A good place to start
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              Every project begins with a conversation.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
              Tell us what you’re working towards. We’ll bring an open mind and a few good questions.
            </p>
          </div>
          <Button href="/contact">Let&apos;s talk</Button>
        </Container>
      </section>
    </>
  );
}
