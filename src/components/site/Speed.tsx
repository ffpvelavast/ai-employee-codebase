import { Reveal } from "./Reveal";
import { Eyebrow, Section } from "./ui";

const fast = [
  "Customer asks",
  "AI responds",
  "Lead is qualified",
  "Appointment booked",
];

const slow = [
  "Customer asks",
  "No immediate response",
  "Customer continues searching",
  "Competitor responds first",
];

export function Speed() {
  return (
    <Section id="how-it-works" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
        <Reveal>
          <Eyebrow>Speed matters</Eyebrow>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
            Reply Within 5 Minutes.
            <span className="block text-blue">You&apos;re 8× More Likely to Win the Customer.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-end gap-5 rounded-3xl border border-hairline bg-card p-7 shadow-soft">
            <span className="font-display text-6xl leading-none font-bold text-amber sm:text-7xl">8×</span>
            <p className="pb-1.5 text-sm text-muted-foreground">
              More likely to convert when businesses respond quickly.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={60}>
        <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Research across more than 55 million sales activities found that businesses responding to inbound leads
          within five minutes achieved dramatically higher conversion rates.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-blue/20 bg-card p-7 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-navy">Customer Enquiry</p>
              <span className="rounded-full bg-blue-soft px-3 py-1 text-xs font-semibold text-blue">
                Fast response
              </span>
            </div>
            <ol className="mt-6 space-y-4">
              {fast.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full gradient-blue text-[0.7rem] font-bold text-navy-foreground">
                    {i + 1}
                  </span>
                  <span className="text-[0.95rem] text-navy">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="h-full rounded-3xl border border-hairline bg-surface-2 p-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-navy">Customer Enquiry</p>
              <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
                Slow response
              </span>
            </div>
            <ol className="mt-6 space-y-4">
              {slow.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-hairline bg-card text-[0.7rem] font-bold text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="text-[0.95rem] text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
