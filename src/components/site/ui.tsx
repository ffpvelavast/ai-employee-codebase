import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid h-8 w-8 place-items-center rounded-[10px] gradient-navy">
        <span className="absolute h-2 w-2 rounded-full bg-amber" style={{ transform: "translate(-5px,-4px)" }} />
        <span className="absolute h-2 w-2 rounded-full bg-blue" style={{ transform: "translate(4px,4px)" }} />
        <span className="absolute h-[1px] w-4 rotate-45 bg-navy-foreground/35" />
      </span>
      <span className="font-display text-[1.05rem] font-bold tracking-tight text-navy">
        ASAP<span className="text-blue"> AI</span>
      </span>
    </span>
  );
}

type CtaProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "light";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Cta({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: CtaProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    size === "lg" ? "px-8 py-4 text-[1rem]" : "px-6 py-2.5 text-[0.9rem]",
    variant === "primary" &&
      "bg-gradient-to-br from-red-500 to-red-700 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:-translate-y-0.5 border border-red-400/30",
    variant === "ghost" &&
      "border border-border bg-card text-navy hover:border-red-500/40 hover:bg-red-50 hover:text-red-600",
    variant === "light" &&
      "border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.2)]",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function Eyebrow({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "amber" | "light" }) {
  return (
    <p
      className={cn(
        "eyebrow",
        tone === "amber" && "text-amber",
        tone === "light" && "text-navy-foreground/60",
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 relative overflow-hidden",
        tone === "surface" && "bg-surface",
        tone === "navy" && "bg-gradient-to-b from-black to-zinc-950 text-white border-y border-white/5",
        className,
      )}
    >
      {tone === "navy" && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
      )}
      <div className="container-page relative z-10">{children}</div>
    </section>
  );
}
