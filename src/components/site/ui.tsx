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
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    size === "lg" ? "px-7 py-3.5 text-[0.98rem]" : "px-5 py-2.5 text-sm",
    variant === "primary" &&
      "gradient-blue text-navy-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
    variant === "ghost" &&
      "border border-border bg-card text-navy hover:border-blue/40 hover:bg-blue-soft",
    variant === "light" &&
      "border border-navy-foreground/20 bg-navy-foreground/5 text-navy-foreground hover:bg-navy-foreground/12",
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
        "scroll-mt-20 py-20 sm:py-28",
        tone === "surface" && "bg-surface",
        tone === "navy" && "gradient-navy text-navy-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
