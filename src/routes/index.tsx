import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Video } from "@/components/site/Video";
import { Speed } from "@/components/site/Speed";
import { Reality } from "@/components/site/Reality";
import { Employees } from "@/components/site/Employees";
import { Channels } from "@/components/site/Channels";
import { HumanAI } from "@/components/site/HumanAI";
import { Brand } from "@/components/site/Brand";
import { Demo } from "@/components/site/Demo";
import { FaqCta, Footer } from "@/components/site/FaqCta";

const title = "ASAP AI — AI Employees for Phone, WhatsApp & Website";
const description =
  "ASAP AI gives your business AI Employees that answer calls, reply on WhatsApp, qualify leads and book appointments — 24/7.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Video />
        <Demo />
        <Speed />
        <Reality />
        <Employees />
        <Channels />
        <HumanAI />
        <Brand />
        <FaqCta />
      </main>
      <Footer />
    </div>
  );
}
