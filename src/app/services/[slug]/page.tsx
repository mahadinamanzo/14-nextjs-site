import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { getService, getServices } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServices().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: service.title,
      description: service.summary,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} | Mahadi Na Manzo`,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/55 transition-colors hover:text-emerald-900"
          >
            <span aria-hidden="true">←</span> All services
          </Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <span className="grid size-14 place-items-center rounded-full bg-[#e8eee5] text-3xl text-emerald-900">
                {service.icon}
              </span>
              <p className="mb-5 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
                How we can help
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/65">
                {service.summary}
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#e8eee5] p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                Project investment
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                From ₦{service.priceFrom.toLocaleString("en-NG")}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink/60">
                Every project is different. We&apos;ll shape a clear scope and
                proposal around your goals.
              </p>
              <Button href="/contact" className="mt-6">
                Discuss your project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/55 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              A little more
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
              Thoughtful work, made for your next step.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-ink/65">
              {service.description}
            </p>
            <h3 className="mt-10 text-lg font-semibold">What&apos;s included</h3>
            <ul className="mt-5 space-y-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-ink/70"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-800" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-8 rounded-[2rem] bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              Have a project in mind?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Let&apos;s make it matter.
            </h2>
          </div>
          <Button href="/contact">Get in touch</Button>
        </Container>
      </section>
    </>
  );
}
