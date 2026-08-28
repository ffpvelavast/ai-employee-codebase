import { CalendarCheck, CheckCircle2, Globe, MessageCircle, PhoneCall, PlayCircle, UserCheck, UserPlus } from "lucide-react";
import { Cta } from "./ui";
import { Reveal } from "./Reveal";

const channels = [
  { icon: PhoneCall, name: "Phone", line: "Incoming customer call" },
  { icon: MessageCircle, name: "WhatsApp", line: "Customer asks a question" },
  { icon: Globe, name: "Website", line: "Customer enquiry" },
];

const outcomes = [
  { icon: CheckCircle2, label: "Answered" },
  { icon: UserCheck, label: "Qualified" },
  { icon: CalendarCheck, label: "Booked" },
  { icon: UserPlus, label: "Escalated" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-blue-soft/60"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }}
      />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-semibold text-navy shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-amber dot-pulse" />
              AI Employees for phone, WhatsApp &amp; web
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-bold text-navy sm:text-6xl">
              Your Business Doesn&apos;t Work 9 to 5.
              <span className="block text-muted-foreground">Neither Should Your Customer Experience.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ASAP AI gives your business AI Employees that answer calls, respond to messages, handle enquiries and
              help customers move forward — 24/7.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Cta href="#demo" size="lg">
                Meet Your First AI Employee
              </Cta>
              <Cta href="#how-it-works" variant="ghost" size="lg">
                <PlayCircle className="h-4.5 w-4.5" />
                What AI Employees Can Do for You?
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-8 text-sm text-muted-foreground">
              Every call. Every message. Every enquiry.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="rounded-3xl border border-hairline bg-card p-5 shadow-lift sm:p-7">
            <div className="space-y-3">
              {channels.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center gap-3.5 rounded-2xl border border-hairline bg-surface px-4 py-3.5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-card text-blue shadow-soft">
                    <channel.icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy">{channel.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{channel.line}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-5 flex items-center gap-3">
              <span className="h-px flex-1 flow-line" />
              <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Routed to
              </span>
              <span className="h-px flex-1 flow-line" />
            </div>

            <div className="rounded-2xl gradient-navy px-5 py-5 text-navy-foreground">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-navy-foreground/55">
                Intelligence layer
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold">Your AI Employee</p>
              <p className="mt-1 text-sm text-navy-foreground/70">
                Understands the enquiry, replies instantly, decides the next step.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {outcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className="flex items-center gap-2 rounded-xl border border-hairline bg-surface px-3 py-2.5 text-sm font-medium text-navy"
                >
                  <outcome.icon className="h-4 w-4 text-blue" />
                  {outcome.label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
