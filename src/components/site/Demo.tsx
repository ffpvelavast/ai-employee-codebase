import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Globe, Loader2, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Cta, Eyebrow, Section } from "./ui";

const steps = [
  { number: "01", title: "Enter your website", text: "Tell us where your business lives online." },
  { number: "02", title: "We prepare the AI experience", text: "Your AI Employee learns your business." },
  { number: "03", title: "Try your AI Employee", text: "Ask questions the way a customer would." },
];

const progressStages = [
  "Reading your website",
  "Understanding your business",
  "Preparing your AI Employee",
  "Launching your interactive demo",
];

const STAGE_MS = 3800;

export function Demo() {
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");
  const [website, setWebsite] = useState("");
  const [stage, setStage] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const start = () => {
    if (!website.trim() || status === "loading") return;
    setStatus("loading");
    setStage(0);
    timers.current.forEach(clearTimeout);
    timers.current = progressStages.map((_, i) =>
      setTimeout(() => {
        setStage(i + 1);
        if (i === progressStages.length - 1) setStatus("ready");
      }, STAGE_MS * (i + 1)),
    );
  };

  return (
    <Section id="demo">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-3.5 py-1.5 text-[0.7rem] font-bold tracking-[0.14em] text-blue uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive AI Experience
            </span>
            <h2 className="mt-6 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
              Don&apos;t Just Read About It.
              <span className="block text-blue">Put AI to Work.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Give us your business website and see how an AI Employee could be prepared to engage with your customers.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 70}>
                <div className="flex gap-5 border-t border-hairline pt-5">
                  <span className="font-display text-sm font-bold text-amber">{step.number}</span>
                  <div>
                    <p className="font-semibold text-navy">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <form
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                start();
              }}
            >
              <label className="sr-only" htmlFor="website">
                Your business website
              </label>
              <div className="flex flex-1 items-center gap-2.5 rounded-full border border-border bg-card px-4 py-3 shadow-soft focus-within:border-blue/50">
                <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="yourbusiness.com"
                  className="w-full bg-transparent text-sm text-navy outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Cta type="submit" size="lg" className="shrink-0">
                Create My AI Demo
                <ArrowRight className="h-4 w-4" />
              </Cta>
            </form>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <DemoPreview status={status} stage={stage} website={website} />
        </Reveal>
      </div>
    </Section>
  );
}

function DemoPreview({
  status,
  stage,
  website,
}: {
  status: "idle" | "loading" | "ready";
  stage: number;
  website: string;
}) {
  const host = website.trim() || "yourbusiness.com";

  return (
    <div className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-lift">
      <div className="flex items-center gap-3 border-b border-hairline bg-surface px-4 py-3">
        <div className="flex gap-1.5">
          {["bg-hairline", "bg-hairline", "bg-hairline"].map((c, i) => (
            <span key={i} className={cn("h-2.5 w-2.5 rounded-full", c)} />
          ))}
        </div>
        <span className="flex-1 truncate rounded-full bg-card px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-hairline">
          {host}
        </span>
      </div>

      {status === "loading" ? (
        <LoadingState stage={stage} />
      ) : (
        <div className="grid gap-0 sm:grid-cols-[1fr_1.1fr]">
          <div className="hidden border-r border-hairline p-6 sm:block">
            <div className="h-2.5 w-24 rounded-full bg-surface-2" />
            <div className="mt-5 h-5 w-full rounded-md bg-surface-2" />
            <div className="mt-2.5 h-5 w-4/5 rounded-md bg-surface-2" />
            <div className="mt-6 space-y-2">
              <div className="h-2 w-full rounded-full bg-surface" />
              <div className="h-2 w-11/12 rounded-full bg-surface" />
              <div className="h-2 w-9/12 rounded-full bg-surface" />
            </div>
            <div className="mt-7 h-9 w-32 rounded-full bg-surface-2" />
          </div>

          <div className="flex flex-col p-5">
            <div className="flex items-center gap-2.5 border-b border-hairline pb-4">
              <span className="grid h-8 w-8 place-items-center rounded-full gradient-navy text-[0.65rem] font-bold text-navy-foreground">
                FD
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">AI Front Desk</p>
                <p className="flex items-center gap-1.5 text-[0.7rem] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue dot-pulse" />
                  {status === "ready" ? "Trained on your website" : "Online now"}
                </p>
              </div>
            </div>

            <div className="mt-4 flex-1 space-y-3">
              <Bubble side="customer">Hi, do you have availability this Saturday?</Bubble>
              <Bubble side="ai">
                We do — there are two slots left on Saturday. Would 10:30am or 2:00pm suit you better?
              </Bubble>
              <Bubble side="customer">2pm works.</Bubble>
              <Bubble side="ai">
                Booked. I&apos;ve added it to the calendar and sent a confirmation. Anything else before Saturday?
              </Bubble>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2.5">
              <span className="flex-1 text-xs text-muted-foreground">Ask your AI Employee a question…</span>
              <Send className="h-3.5 w-3.5 text-blue" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Bubble({ side, children }: { side: "customer" | "ai"; children: React.ReactNode }) {
  const isAi = side === "ai";
  return (
    <div className={cn("flex", isAi ? "justify-start" : "justify-end")}>
      <p
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.82rem] leading-relaxed",
          isAi
            ? "rounded-tl-sm border border-hairline bg-surface text-navy"
            : "rounded-tr-sm gradient-blue text-navy-foreground",
        )}
      >
        {children}
      </p>
    </div>
  );
}

function LoadingState({ stage }: { stage: number }) {
  return (
    <div className="p-8 sm:p-10">
      <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
        Your AI Employee Is Getting Ready.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Learning about your business and preparing a personalised experience.
      </p>

      <ol className="mt-8 space-y-5">
        {progressStages.map((label, i) => {
          const done = stage > i;
          const active = stage === i;
          return (
            <li key={label} className="flex items-center gap-3.5">
              <span
                className={cn(
                  "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[0.7rem] font-bold transition-colors",
                  done && "border-transparent gradient-blue text-navy-foreground",
                  active && "border-blue/40 bg-blue-soft text-blue",
                  !done && !active && "border-hairline bg-surface text-muted-foreground",
                )}
              >
                {done ? <Check className="h-3.5 w-3.5" /> : active ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : i + 1}
              </span>
              <span
                className={cn(
                  "text-sm transition-colors",
                  done || active ? "font-medium text-navy" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-9 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full gradient-blue transition-all duration-700 ease-out"
          style={{ width: `${Math.max(6, (stage / progressStages.length) * 100)}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">This usually takes around 15 seconds.</p>
    </div>
  );
}
