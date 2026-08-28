import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoExperience, type DemoLead } from "@/components/site/DemoExperience";
import { Footer } from "@/components/site/FaqCta";
import { Logo } from "@/components/site/ui";

const title = "Your Live AI Demo — ASAP AI";
const description =
  "Watch your AI Employee being trained on your website, then test it live and book a 1-on-1 AI strategy session with ASAP AI.";

type Search = DemoLead;

export const Route = createFileRoute("/demo")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const str = (v: unknown) => (typeof v === "string" ? v : "");
    return {
      name: str(search["name"]),
      company: str(search["company"]),
      phone: str(search["phone"]),
      website: str(search["website"]),
      email: str(search["email"]),
    };
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  const lead = Route.useSearch();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between sm:h-18">
          <Link to="/" aria-label="ASAP AI home">
            <Logo />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
          >
            Back to site
          </Link>
        </div>
      </header>

      <main>
        <DemoExperience lead={lead} />
      </main>
      <Footer />
    </div>
  );
}
