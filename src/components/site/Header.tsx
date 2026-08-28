import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Cta, Logo } from "./ui";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Employees", href: "#ai-employees" },
  { label: "See It In Action", href: "#demo" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-hairline bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-18">
        <a href="#top" aria-label="ASAP AI home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Cta href="#demo" className="hidden sm:inline-flex">
            Try Your AI Employee
          </Cta>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy lg:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-navy hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <Cta href="#demo" size="lg" className="mt-2" onClick={() => setOpen(false)}>
              Try Your AI Employee
            </Cta>
          </div>
        </div>
      )}
    </header>
  );
}
