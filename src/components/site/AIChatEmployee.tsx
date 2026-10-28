import { useState } from "react";
import { Reveal } from "./Reveal";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface IndustryTab {
  id: string;
  title: string;
  badge: string;
  desc: string;
  avatar: string;
  business: string;
  channel: string;
  badges: string[];
  messages: Message[];
}

const steps = [
  {
    num: "1",
    title: "Customer asks",
    desc: '“Do you have a slot on Saturday?” on WhatsApp, your website or by phone.'
  },
  {
    num: "2",
    title: "AI understands",
    desc: "It works out what the customer wants and what they've told you so far."
  },
  {
    num: "3",
    title: "AI answers",
    desc: "From your approved information, in your brand's voice."
  },
  {
    num: "4",
    title: "Action happens",
    desc: "It books, qualifies, follows up or routes to the right person."
  },
  {
    num: "5",
    title: "Your team joins",
    desc: "When it matters, with the full conversation and a summary."
  }
];

const industryTabs: IndustryTab[] = [
  {
    id: "medical",
    title: "Medical aesthetics",
    badge: "WHATSAPP",
    desc: "Answers in seconds at any hour and books the consultation. Clinical questions always go to a clinician.",
    avatar: "L",
    business: "Lumen Skin Clinic",
    channel: "WhatsApp · 11:42 pm",
    badges: ["Booked", "Doctor alerted"],
    messages: [
      { sender: "user", text: "Hi, first time here. Do you have a facial consultation this Saturday?" },
      { sender: "bot", text: "Welcome! Saturday has 11:30 am or 3:00 pm. A first consultation takes about 45 minutes. Which suits you?" },
      { sender: "user", text: "3pm please. Is it OK if I'm on antibiotics?" },
      { sender: "bot", text: "I've booked you for Saturday at 3:00 pm. For the antibiotics question, I've asked our doctor to message you before your visit." }
    ]
  },
  {
    id: "education",
    title: "Education & enrichment",
    badge: "MISSED CALL",
    desc: "Instantly texts missed callers back, qualifies grade & subject needs, and books trial classes automatically.",
    avatar: "O",
    business: "Oakridge Academy",
    channel: "Missed Call SMS · 2:15 pm",
    badges: ["Trial Booked", "Staff notified"],
    messages: [
      { sender: "bot", text: "Hi! We noticed we just missed your call at Oakridge Academy. How can we help you today?" },
      { sender: "user", text: "Hi, do you have Primary 4 Math tuition slots for Term 2?" },
      { sender: "bot", text: "Yes! Two slots are open: Saturday 10:00 am and Wednesday 5:00 pm with Teacher Sarah. Would you like a trial session?" },
      { sender: "user", text: "Saturday 10am trial please" },
      { sender: "bot", text: "Trial booked for Saturday 10:00 am! We've texted your student pass and informed our center manager." }
    ]
  },
  {
    id: "property",
    title: "Property",
    badge: "WEBSITE CHAT",
    desc: "Qualifies buyers on budget & timeline 24/7, answers project specs, and schedules viewing slots directly.",
    avatar: "P",
    business: "Prime Realty SG",
    channel: "Website Chat · 4:10 pm",
    badges: ["Viewing Scheduled", "Agent dispatched"],
    messages: [
      { sender: "user", text: "Hi, is the 3-bed unit at Marina One still available for private viewing?" },
      { sender: "bot", text: "Yes! Two viewing slots remain: tomorrow at 2:00 pm and 5:30 pm. Are you looking for own stay or investment?" },
      { sender: "user", text: "Own stay, let's do 5:30 pm" },
      { sender: "bot", text: "Private viewing locked in for tomorrow 5:30 pm. Senior Agent Marcus will meet you at Tower 2 lobby with floor plans." }
    ]
  },
  {
    id: "retail",
    title: "Retail",
    badge: "INSTAGRAM AD",
    desc: "Engages leads straight from Instagram & Facebook ads, checks stock availability, and reserves items.",
    avatar: "L",
    business: "Luxe Timepieces",
    channel: "Instagram Ad · 8:30 pm",
    badges: ["Item Reserved", "Boutique prepared"],
    messages: [
      { sender: "user", text: "Hi, saw your Instagram ad. Do you have the Chrono Black in stock in Singapore?" },
      { sender: "bot", text: "Yes, 3 pieces remain at our Marina Bay boutique! We're including a complimentary Italian leather strap this week." },
      { sender: "user", text: "Can I reserve one to try on tomorrow 1pm?" },
      { sender: "bot", text: "Reserved under your name for tomorrow 1:00 pm. Your private fitting room is prepared!" }
    ]
  }
];

export default function AIChatEmployee() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = industryTabs[activeTabIdx];

  return (
    <section id="chat-employee" className="relative py-24 sm:py-32 bg-[#faf9f6]">
      <div className="container-page flex flex-col items-center">
        
        {/* ========================================================
            PART 1: HOW IT WORKS TOP (5 PROCESS CARDS)
            ======================================================== */}
        <div className="w-full max-w-[1200px] mb-16 sm:mb-20 text-left">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#e52e2e] block mb-4">
              HOW IT WORKS
            </span>
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] max-w-xl">
                Turn more<br />
                enquiries into<br />
                customers.
              </h2>
              <p className="font-serif italic text-2xl sm:text-3xl text-neutral-800 leading-snug max-w-sm">
                One customer question.<br />
                A whole business response.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-neutral-100 bg-white p-5 sm:p-6 shadow-sm flex flex-col items-start transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e52e2e] text-xs font-bold text-white mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ========================================================
            PART 2: DARK CARD (BUILT AROUND YOUR BUSINESS)
            ======================================================== */}
        <Reveal delay={150}>
          <div className="w-full max-w-[1200px] rounded-[32px] bg-[#141416] p-8 sm:p-14 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            
            {/* Left: Industry Tabs */}
            <div className="flex flex-col items-start text-left">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#e52e2e] block mb-4">
                BUILT AROUND YOUR BUSINESS
              </span>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.05] mb-4">
                Not around<br />
                a template<span className="text-[#e52e2e]">.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 mb-8 max-w-md leading-relaxed">
                Every industry has its own questions, decisions and risks. Pick one to see a real exchange.
              </p>

              {/* Tabs List */}
              <div className="flex flex-col gap-3 w-full mb-8">
                {industryTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className={`rounded-2xl p-4 sm:p-5 text-left transition-all duration-200 border ${
                      idx === activeTabIdx
                        ? "bg-[#1e1e23] border-[#e52e2e] ring-1 ring-[#e52e2e] shadow-lg shadow-red-500/10"
                        : "bg-[#1a1a1d] border-white/5 hover:bg-[#222226]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm sm:text-base text-white">{tab.title}</span>
                      <span className={`text-[11px] font-bold tracking-wider uppercase ${idx === activeTabIdx ? "text-[#e52e2e]" : "text-neutral-500"}`}>
                        {tab.badge}
                      </span>
                    </div>
                    {idx === activeTabIdx && (
                      <p className="mt-2.5 text-xs sm:text-[13px] text-neutral-400 leading-relaxed animate-in fade-in slide-in-from-top-1">
                        {tab.desc}
                      </p>
                    )}
                  </button>
                ))}
              </div>

              {/* Language Capsules */}
              <div className="w-full pt-5 border-t border-white/10 flex flex-col gap-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-400">
                  SPEAKS YOUR CUSTOMER&apos;S LANGUAGE
                </span>
                <div className="flex flex-wrap gap-2">
                  {["English", "中文", "Bahasa Melayu", "தமிழ்", "+ more"].map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-[#1c1c20] border border-white/10 px-3.5 py-1 text-xs font-semibold text-neutral-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Phone Simulator */}
            <div className="flex justify-center">
              <div className="w-full max-w-[380px] h-[520px] rounded-[32px] bg-white p-5 sm:p-6 shadow-2xl text-neutral-900 flex flex-col overflow-hidden transition-all">
                
                {/* Header */}
                <div className="flex items-center gap-3 pb-3.5 border-b border-neutral-100 mb-3.5 flex-shrink-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white flex-shrink-0">
                    {activeTab.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 leading-tight">
                      {activeTab.business}
                    </h4>
                    <p className="text-[11.5px] text-neutral-500">{activeTab.channel}</p>
                  </div>
                </div>

                {/* Messages Flow */}
                <div className="flex flex-col gap-2.5 flex-1 overflow-y-auto pr-1 justify-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {activeTab.messages.map((msg, i) => (
                    <div
                      key={`${activeTabIdx}-${i}`}
                      className={`text-[13px] leading-snug px-3.5 py-2.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${
                        msg.sender === "user"
                          ? "self-end bg-neutral-900 text-white rounded-[18px_18px_4px_18px] max-w-[84%]"
                          : "self-start bg-[#f5f1eb] text-neutral-800 rounded-[18px_18px_18px_4px] max-w-[86%]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Badges Footer */}
                <div className="flex items-center gap-2 pt-3.5 border-t border-neutral-100 mt-auto flex-wrap flex-shrink-0">
                  {activeTab.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-semibold text-neutral-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e52e2e]" />
                      {b}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
