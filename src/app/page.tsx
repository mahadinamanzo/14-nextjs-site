import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    number: "01",
    title: "Brand & identity",
    description:
      "Distinctive identities and clear positioning that help good businesses stand apart.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Digital experiences",
    description:
      "Beautiful, intuitive websites and products that make every interaction count.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Growth & strategy",
    description:
      "Practical direction and smart campaigns that turn momentum into meaningful growth.",
    icon: "⌁",
  },
];

const testimonials = [
  {
    quote:
      "They helped us find the story we wanted to tell, then brought it to life in a way that feels unmistakably us.",
    name: "Amina Yusuf",
    title: "Founder, Common Ground",
  },
  {
    quote:
      "A thoughtful partner from the first workshop to launch day. The new experience is already changing how people see us.",
    name: "Daniel Okafor",
    title: "Director, Fieldwork",
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/65">
              <span className="size-2 rounded-full bg-emerald-700" />
              A digital agency for what&apos;s next
            </p>
            <h1 className="max-w-3xl text-[3.4rem] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-[5.5rem]">
              Make your next move{" "}
              <span className="relative inline-block">
                matter.
                <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-lime sm:h-4" />
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
              We bring ambitious ideas to life through strategy, design, and
              digital experiences built to move your business forward.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">Start a conversation</Button>
              <Button href="/services" variant="secondary">
                Explore our work
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["bg-[#cfddd2]", "bg-[#f0c9a8]", "bg-[#d5d0e7]"].map((color, i) => (
                  <span
                    key={color}
                    className={`grid size-9 place-items-center rounded-full border-2 border-paper text-[10px] font-bold text-ink ${color}`}
                  >
                    {["A", "D", "N"][i]}
                  </span>
                ))}
              </div>
              <p className="text-xs leading-5 text-ink/60">
                Good people, doing<br />meaningful work together
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -right-10 -top-10 size-44 rounded-full bg-lime/60 blur-3xl" />
            <div className="relative aspect-[0.98] overflow-hidden rounded-[2rem] bg-[#dfe8de] p-5 sm:p-8">
              <div className="absolute inset-5 rounded-[1.5rem] border border-white/60 sm:inset-8" />
              <div className="absolute left-[13%] top-[15%] h-[68%] w-[74%] rotate-[-8deg] rounded-[45%] bg-[#a4bea8]" />
              <div className="absolute left-[30%] top-[11%] h-[76%] w-[52%] rotate-[12deg] rounded-[48%] bg-[#344d3e]" />
              <div className="absolute left-[42%] top-[17%] h-[64%] w-[31%] -rotate-[9deg] rounded-[45%] bg-[#c4d7b6]" />
              <div className="absolute left-[18%] top-[26%] grid size-24 place-items-center rounded-full bg-lime text-4xl text-ink shadow-xl sm:size-32 sm:text-5xl">
                ✳
              </div>
              <div className="absolute bottom-8 left-8 rounded-2xl bg-paper px-5 py-4 shadow-xl sm:bottom-12 sm:left-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/50">
                  Built with purpose
                </p>
                <p className="mt-1 text-lg font-semibold">Made to move you.</p>
              </div>
              <div className="absolute right-8 top-8 grid size-14 place-items-center rounded-full border border-white/70 text-2xl text-ink sm:right-12 sm:top-12">
                ↗
              </div>
            </div>
            <div className="absolute -bottom-5 -right-2 rounded-full bg-ink px-5 py-3 text-xs font-medium text-white shadow-xl sm:-right-5">
              Strategy meets imagination
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/10 py-7">
        <Container className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40 sm:justify-between">
          <span>Independent thinking</span>
          <span>Human-centred design</span>
          <span>Better, together</span>
          <span>Made for what&apos;s next</span>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Good work starts with a good question."
              description="We connect the dots between what your business needs and what your audience cares about."
            />
            <Link
              href="/services"
              className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-emerald-900 hover:gap-3"
            >
              All services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-ink/10 bg-white/50 p-7 transition-all hover:-translate-y-1 hover:border-ink/20 hover:bg-white sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-ink/40">
                    {service.number}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-[#e8eee5] text-xl text-emerald-900 transition-colors group-hover:bg-lime">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mt-12 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <Container className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {[
            ["12+", "years of curious thinking"],
            ["40+", "brands moved forward"],
            ["8", "brilliant minds, one team"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-white/20 pl-5">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-lime sm:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Kind words"
            title="The best work is a team effort."
            description="A few kind words from the people we’ve had the pleasure of working alongside."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl bg-[#e9ede5] p-7 sm:p-9"
              >
                <span className="text-4xl leading-none text-emerald-800">“</span>
                <blockquote className="mt-3 text-lg leading-8 tracking-tight sm:text-xl">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-5">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-ink/55">{testimonial.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#314a3c] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-24 size-72 rounded-full border-[40px] border-lime/10" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime">
                  Your next chapter
                </p>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                  Let&apos;s make something meaningful.
                </h2>
              </div>
              <Button href="/contact">Tell us what you&apos;re thinking</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
