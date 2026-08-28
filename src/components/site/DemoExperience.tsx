import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  Globe,
  Loader2,
  MessageCircle,
  Sparkles,
  UserCheck,
  UserPlus,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Cta, Eyebrow, Section } from "./ui";

export type DemoLead = {
  name: string;
  company: string;
  phone: string;
  website: string;
  email: string;
};

const progressStages = [
  { label: "Reading your website", detail: "Scanning pages, services and FAQs" },
  { label: "Understanding your business", detail: "Learning your tone and offers" },
  { label: "Preparing your AI Employee", detail: "Drafting answers and booking flows" },
  { label: "Launching your interactive demo", detail: "Wiring up the live preview" },
];

const STAGE_MS = 3800;

export function DemoExperience({ lead }: { lead: DemoLead }) {
  const [stage, setStage] = useState(0);
  const [ready, setReady] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current = progressStages.map((_, i) =>
      setTimeout(
        () => {
          setStage(i + 1);
          if (i === progressStages.length - 1) setReady(true);
        },
        STAGE_MS * (i + 1),
      ),
    );
    return () => timers.current.forEach(clearTimeout);
  }, []);

  if (!ready) return <LoadingScreen stage={stage} lead={lead} />;

  return (
    <>
      <DemoHero lead={lead} />
      <ConsultationSection />
      <DemoFaq />
    </>
  );
}

/* ------------------------------- loading -------------------------------- */

function LoadingScreen({ stage, lead }: { stage: number; lead: DemoLead }) {
  const host = lead.website || "your website";
  const pct = Math.max(6, (stage / progressStages.length) * 100);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-blue-soft/60"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div className="container-page relative mx-auto max-w-2xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-semibold text-navy shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-amber dot-pulse" />
            Building your AI Employee
          </span>
          <h1 className="mt-6 text-[2rem] leading-[1.08] font-bold text-navy sm:text-[2.8rem]">
            {lead.name ? `${lead.name}, your` : "Your"} AI Employee
            <span className="block text-muted-foreground">is being trained right now.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We&apos;re reading <span className="font-semibold text-navy">{host}</span> and preparing a
            personalised experience for {lead.company || "your business"}.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 rounded-3xl gradient-navy p-6 text-navy-foreground shadow-lift sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-navy-foreground/55">
                Training progress
              </p>
              <p className="font-display text-sm font-semibold text-navy-foreground">{Math.round(pct)}%</p>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy-foreground/15">
              <div
                className="h-full rounded-full bg-amber transition-all duration-700 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>

            <ol className="mt-7 space-y-4">
              {progressStages.map((s, i) => {
                const done = stage > i;
                const active = stage === i;
                return (
                  <li key={s.label} className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[0.7rem] font-bold transition-colors",
                        done && "border-transparent bg-amber text-navy",
                        active && "border-amber/50 bg-navy-foreground/10 text-amber",
                        !done && !active && "border-navy-foreground/20 text-navy-foreground/45",
                      )}
                    >
                      {done ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : active ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        i + 1
                      )}
                    </span>
                    <div>
                      <p
                        className={cn(
                          "text-sm font-semibold transition-colors",
                          done || active ? "text-navy-foreground" : "text-navy-foreground/45",
                        )}
                      >
                        {s.label}
                      </p>
                      <p className="text-xs text-navy-foreground/45">{s.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            This usually takes around 15 seconds.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- hero --------------------------------- */


const outcomes = [
  { icon: CheckCircle2, label: "Answered" },
  { icon: UserCheck, label: "Qualified" },
  { icon: CalendarCheck, label: "Booked" },
  { icon: UserPlus, label: "Escalated" },
];

const transcript: { side: "customer" | "ai"; text: string }[] = [
  { side: "customer", text: "Hi — do you have availability this Saturday?" },
  { side: "ai", text: "We do. Two slots left: 10:30am or 2:00pm. Which suits you better?" },
  { side: "customer", text: "2pm please." },
  { side: "ai", text: "Booked, and a confirmation is on its way. 🎉" },
];

function DemoHero({ lead }: { lead: DemoLead }) {
  const host = lead.website || "your website";
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-blue-soft/60"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-semibold text-navy shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-amber" />
              Interactive AI preview mode
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.3rem] leading-[1.05] font-bold text-navy sm:text-5xl">
              {lead.company ? `${lead.company}'s` : "Your"} AI Employee,
              <span className="block text-muted-foreground">trained on your business. Live below.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              This is how your AI Employee greets real enquiries across phone, WhatsApp and your website —
              trained on <span className="font-semibold text-navy">{host}</span>. Watch it answer, qualify
              and book, end to end.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Cta href="#consultation" size="lg">
                Schedule 1-on-1 Custom AI Demo
                <ArrowRight className="h-4 w-4" />
              </Cta>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-8 text-sm text-muted-foreground">
              No installs. No forms. Just a conversation that converts.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          {/* Phone frame: client's website loads here with the AI chat widget */}
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="rounded-[2.75rem] border border-hairline bg-navy p-2.5 shadow-lift">
              <div className="overflow-hidden rounded-[2.1rem] bg-background">
                {/* phone status / url bar */}
                <div className="flex items-center gap-2 border-b border-hairline bg-surface px-4 py-2.5">
                  <span className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-hairline" />
                    <span className="h-2 w-2 rounded-full bg-hairline" />
                  </span>
                  <span className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-card px-3 py-1 text-[0.62rem] font-medium text-muted-foreground">
                    <Globe className="h-3 w-3 shrink-0 text-blue" />
                    <span className="truncate">{host}</span>
                  </span>
                </div>

                {/* website skeleton */}
                <div className="space-y-2.5 px-5 pt-5 pb-3">
                  <div className="h-2.5 w-3/4 rounded-full bg-blue/20" />
                  <div className="h-2 w-full rounded-full bg-hairline" />
                  <div className="h-2 w-5/6 rounded-full bg-hairline" />
                  <div className="mt-3 h-20 rounded-2xl bg-blue-soft" />
                  <div className="h-2 w-2/3 rounded-full bg-hairline" />
                  <div className="h-2 w-1/2 rounded-full bg-hairline" />
                </div>

                {/* chat widget */}
                <div className="px-4 pb-5">
                  <div className="rounded-2xl gradient-navy p-3.5 text-navy-foreground shadow-lift">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-amber font-display text-[0.6rem] font-bold text-navy">
                          AI
                        </span>
                        <div>
                          <p className="text-[0.7rem] font-semibold leading-tight">
                            {lead.company || "Your"} AI Employee
                          </p>
                          <p className="flex items-center gap-1 text-[0.58rem] text-navy-foreground/60">
                            <span className="h-1 w-1 rounded-full bg-amber dot-pulse" />
                            Online — replies instantly
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-navy-foreground/10 px-2 py-0.5 text-[0.55rem] font-semibold text-navy-foreground/80">
                        Live
                      </span>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      {transcript.map((m, i) => (
                        <div key={i} className={cn("flex", m.side === "ai" ? "justify-start" : "justify-end")}>
                          <p
                            className={cn(
                              "max-w-[85%] rounded-xl px-2.5 py-1.5 text-[0.66rem] leading-relaxed",
                              m.side === "ai"
                                ? "rounded-tl-sm bg-navy-foreground/10 text-navy-foreground"
                                : "rounded-tr-sm bg-amber font-medium text-navy",
                            )}
                          >
                            {m.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-2 rounded-full bg-navy-foreground/10 px-3 py-2">
                      <span className="flex-1 text-[0.62rem] text-navy-foreground/50">Type a message…</span>
                      <ArrowRight className="h-3 w-3 text-amber" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating outcome chips */}
            <div className="absolute -left-6 top-24 hidden rounded-2xl border border-hairline bg-card px-3.5 py-2.5 shadow-lift sm:block">
              <p className="flex items-center gap-2 text-xs font-semibold text-navy">
                <MessageCircle className="h-3.5 w-3.5 text-blue" />
                Answers in seconds
              </p>
            </div>
            <div className="absolute -right-4 bottom-24 hidden rounded-2xl border border-hairline bg-card px-3.5 py-2.5 shadow-lift sm:block">
              <p className="flex items-center gap-2 text-xs font-semibold text-navy">
                <CalendarCheck className="h-3.5 w-3.5 text-amber" />
                Appointment booked
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* outcome strip */}
      <Reveal delay={220}>
        <div className="relative mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="flex items-center justify-center gap-2 rounded-2xl border border-hairline bg-card px-3 py-3.5 text-sm font-medium text-navy shadow-soft"
            >
              <outcome.icon className="h-4 w-4 text-blue" />
              {outcome.label}
            </div>
          ))}
        </div>
      </Reveal>

    </section>
  );
}

/* ---------------------------- consultation ------------------------------ */

const slots = ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM"];

const steps = [
  { n: "1", label: "Pick a day", detail: "Choose any day in the next two weeks" },
  { n: "2", label: "Pick a time", detail: "30 minutes, at a time that suits you" },
  { n: "3", label: "Confirm", detail: "We send the invite straight to you" },
];

function ConsultationSection() {
  const [monthOffset, setMonthOffset] = useState(0);
  const [selected, setSelected] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const monthStart = useMemo(
    () => new Date(today.getFullYear(), today.getMonth() + monthOffset, 1),
    [today, monthOffset],
  );

  const monthLabel = monthStart.toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  const calendarCells = useMemo(() => {
    const cells: (Date | null)[] = [];
    const firstDow = (monthStart.getDay() + 6) % 7; // Monday-first
    for (let i = 0; i < firstDow; i++) cells.push(null);
    const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++)
      cells.push(new Date(monthStart.getFullYear(), monthStart.getMonth(), d));
    return cells;
  }, [monthStart]);

  const isBookable = (d: Date) => {
    const day = d.getDay();
    return d >= today && day !== 0 && day !== 6;
  };

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

  return (
    <Section id="consultation" tone="navy">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone="amber">Next step</Eyebrow>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold sm:text-[2.6rem]">
            Schedule Your 1-on-1
            <span className="block text-navy-foreground/60">AI Strategy Session.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-navy-foreground/70">
            A specialist will walk through your AI Employee, answer questions and show how it plugs into
            phone, WhatsApp and your website.
          </p>

          <ol className="mt-9 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-amber/40 bg-navy-foreground/5 font-display text-sm font-bold text-amber">
                  {s.n}
                </span>
                <div>
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="mt-0.5 text-sm text-navy-foreground/60">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex items-center gap-2.5 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-3.5 text-sm text-navy-foreground/80">
            <Clock className="h-4 w-4 shrink-0 text-amber" />
            {selected && slot ? (
              <span>
                {fmt(selected)} at {slot} — 30 min
              </span>
            ) : (
              <span>30 minutes · video call · no prep needed</span>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-hairline bg-card p-6 text-card-foreground shadow-lift sm:p-8">
            <div className="grid gap-8 sm:grid-cols-[1.15fr_1fr]">
              {/* month calendar */}
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-display text-base font-semibold text-navy">{monthLabel}</p>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      aria-label="Previous month"
                      onClick={() => setMonthOffset((m) => Math.max(0, m - 1))}
                      disabled={monthOffset === 0}
                      className="grid h-8 w-8 place-items-center rounded-full border border-hairline text-navy transition-colors hover:bg-blue-soft disabled:opacity-40"
                    >
                      <ChevronDown className="h-4 w-4 rotate-90" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next month"
                      onClick={() => setMonthOffset((m) => m + 1)}
                      className="grid h-8 w-8 place-items-center rounded-full border border-hairline text-navy transition-colors hover:bg-blue-soft"
                    >
                      <ChevronDown className="h-4 w-4 -rotate-90" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-7 gap-1 text-center">
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                    <span key={d} className="py-1 text-[0.62rem] font-semibold tracking-wide text-muted-foreground uppercase">
                      {d}
                    </span>
                  ))}
                  {calendarCells.map((cell, i) =>
                    cell === null ? (
                      <span key={`e-${i}`} />
                    ) : (
                      <button
                        key={cell.toISOString()}
                        type="button"
                        disabled={!isBookable(cell)}
                        onClick={() => {
                          setSelected(cell);
                          setConfirmed(false);
                        }}
                        className={cn(
                          "mx-auto grid h-9 w-9 place-items-center rounded-full text-sm font-medium transition-all",
                          selected?.toDateString() === cell.toDateString()
                            ? "gradient-blue font-bold text-navy-foreground shadow-soft"
                            : isBookable(cell)
                              ? "text-navy hover:bg-blue-soft"
                              : "cursor-not-allowed text-muted-foreground/40",
                        )}
                      >
                        {cell.getDate()}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* time slots */}
              <div>
                <p className="eyebrow">
                  {selected ? fmt(selected) : "Pick a day first"}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      disabled={!selected}
                      onClick={() => {
                        setSlot(s);
                        setConfirmed(false);
                      }}
                      className={cn(
                        "rounded-xl border px-2 py-2.5 text-[0.8rem] font-semibold transition-all",
                        slot === s
                          ? "border-transparent gradient-blue text-navy-foreground shadow-soft"
                          : "border-blue/30 text-blue hover:bg-blue-soft",
                        !selected && "cursor-not-allowed opacity-40",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-blue" />
                  30 minutes · video call
                </p>
              </div>
            </div>


            <div className="mt-8 border-t border-hairline pt-6">
              {confirmed && selected && slot ? (
                <div className="flex items-center gap-3 rounded-2xl border border-amber/40 bg-amber-soft px-4 py-3.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber text-navy">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-navy">
                    Booked — {fmt(selected)} at {slot}. Confirmation sent.
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-4">
                  <Cta
                    size="lg"
                    onClick={() => selected && slot && setConfirmed(true)}
                    className={cn(!selected || !slot ? "pointer-events-none opacity-50" : "")}
                  >
                    Confirm Session
                    <ArrowRight className="h-4 w-4" />
                  </Cta>
                  <p className="text-sm text-muted-foreground">
                    {!selected ? "Select a day to continue." : !slot ? "Now pick a time slot." : "Ready when you are."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------- faq --------------------------------- */

const demoFaqs = [
  {
    q: "How do you build my AI Employee?",
    a: "We read your website, services and tone of voice, then train a specialised AI Employee on the answers you already give customers every day.",
  },
  {
    q: "What can the AI do during the demo?",
    a: "It answers questions about your business, qualifies enquiries and books appointments straight into a calendar — exactly as it would with a real customer.",
  },
  {
    q: "When can I go live?",
    a: "Most businesses are live within days. After your strategy session we configure phone, WhatsApp and website channels for you.",
  },
  {
    q: "What if I get stuck?",
    a: "You get a dedicated specialist. We handle setup, tuning and ongoing improvements so you never manage the AI alone.",
  },
];

function DemoFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section>
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Still not sure?</Eyebrow>
        <h2 className="mt-4 text-[2rem] leading-[1.1] font-bold text-navy sm:text-[2.6rem]">
          Frequently Asked Questions.
        </h2>
      </Reveal>

      <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
        {demoFaqs.map((faq, i) => (
          <div key={faq.q} className="mb-3 rounded-2xl border border-hairline bg-card px-5 shadow-soft">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-navy"
            >
              {faq.q}
              <ChevronDown
                className={cn("h-4 w-4 shrink-0 transition-transform duration-200", open === i && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
