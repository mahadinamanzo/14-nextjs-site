import Container from "@/components/Container";

export default function LoadingServicePage() {
  return (
    <section
      aria-label="Loading service details"
      aria-busy="true"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="h-5 w-28 animate-pulse rounded bg-ink/10" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="size-14 animate-pulse rounded-full bg-ink/10" />
            <div className="mt-8 h-4 w-36 animate-pulse rounded bg-ink/10" />
            <div className="mt-6 h-16 max-w-xl animate-pulse rounded bg-ink/10" />
            <div className="mt-6 h-8 max-w-lg animate-pulse rounded bg-ink/10" />
          </div>
          <div className="min-h-56 animate-pulse rounded-[2rem] bg-ink/10" />
        </div>
      </Container>
    </section>
  );
}
