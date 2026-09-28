import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, PhoneMissed, Globe, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, Eyebrow, Cta } from "./ui";

const tabs = [
  { id: 'sms', label: 'SMS', icon: MessageSquare },
  { id: 'missed-call', label: 'Missed Call', icon: PhoneMissed },
  { id: 'webchat', label: 'Webchat', icon: Globe },
  { id: 'meta', label: 'Meta Ad', icon: Instagram },
];

const tabData: Record<string, any> = {
  'sms': {
    title: 'AI SMS',
    desc: 'Your leads are texting — are you responding fast enough? AI Chat engages instantly with inbound SMS, delivering answers, qualifying prospects, and moving them down your sales funnel 24/7. No more missed messages or delayed replies.',
    headerName: 'Jaci Smith',
    headerSub: 'Text Message',
    theme: 'light',
    messages: [
      { role: 'agent', text: "Hi there! It's Alex Bella Aesthetic Artistic. I remember you contacted us a while back, and I just wanted to check in. How have you been doing since we last spoke?" },
      { role: 'user', text: "About your laser hair removal services. Can you tell me more about it?" }
    ]
  },
  'missed-call': {
    title: 'Missed Call Text Back',
    desc: "Most leads won't leave a voicemail — they'll call your competitor. With AI-powered Missed Call Text Back, every lost call becomes a new opportunity. Instantly text back missed calls, start the conversation, and let AI qualify and convert leads automatically.",
    headerName: 'John Smith',
    headerSub: 'Text Message',
    theme: 'light',
    messages: [
      { role: 'agent', text: "Hi there! I'm Alex from Harper & Quinn Law Partners. Sorry we missed your call, how can we help you?" },
      { role: 'user', text: "I was injured in an accident and need some advice." },
      { role: 'agent', text: "Sorry to hear that! Was it an auto accident?" }
    ]
  },
  'webchat': {
    title: 'Webchat',
    desc: "Your website should do more than look pretty — it should convert. AI Chat engages visitors the moment they land, answers their questions, captures their info, and guides them toward buying decisions. It's like having your best salesperson on your homepage 24/7.",
    headerName: 'Harper & Quinn',
    headerSub: 'Website Chat',
    theme: 'light',
    messages: [
      { role: 'agent', text: "Of course! I'd be happy to help. What do you need assistance with?" },
      { role: 'user', text: "What information will you need from me during the consultation?" },
      { role: 'agent', text: "During the consultation, we'll ask about the specifics of your accident, any communication you've had with insurance companies, and how your injuries have affected you." }
    ]
  },
  'meta': {
    title: 'Meta Ad',
    desc: "Clicks are expensive — don't let them go to waste. AI Chat responds immediately when prospects engage with your Meta Ads, turning curiosity into conversations. Whether it's Messenger or comment triggers, your AI Chat is always ready to nurture leads and turn ad spend into ROI.",
    headerName: 'WrapWorx Auto Studio',
    headerSub: 'Instagram',
    theme: 'dark',
    messages: [
      { role: 'agent', text: "Hey! 👋 Excited you're thinking about a vehicle wrap. Got any questions before we check the calendar?" },
      { role: 'user', text: "Sure, how long does the wrapping take?" },
      { role: 'agent', text: "For most cars, it usually takes between 2 to 3 days. We focus on quality to make sure your wrap looks amazing." }
    ]
  }
};

export default function AIChatEmployee() {
  const [activeTab, setActiveTab] = useState('sms');
  const activeData = tabData[activeTab];

  return (
    <Section id="chat-employee" tone="navy">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-center">
        
        {/* Left: Text & Tabs */}
        <div>
          <Reveal>
            <Eyebrow tone="amber">Omnichannel Chat</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy-foreground sm:text-5xl">
              Meet Your <span className="text-amber">AI Chat Employee.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-foreground/70 sm:text-lg max-w-xl">
              Engage with leads and customers across all channels instantly. Never miss a message, a lead, or an opportunity again.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-white/10 ring-1 ring-white/20 shadow-soft"
                      : "hover:bg-white/5"
                  )}
                >
                  <div className={cn(
                    "grid w-auto h-auto p-4 place-items-center rounded-xl",
                    activeTab === tab.id ? "bg-amber text-navy" : "bg-white/10 text-navy-foreground"
                  )}>
                    <tab.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={cn("font-bold", activeTab === tab.id ? "text-amber" : "text-navy-foreground")}>
                      {tab.label}
                    </p>
                    {activeTab === tab.id && (
                      <p className="mt-1 text-sm text-navy-foreground/70 leading-relaxed animate-in fade-in slide-in-from-top-2">
                        {activeData.desc}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-10">
              <Cta href="#demo" size="lg" variant="primary">
                Try a Live Chat Demo
              </Cta>
            </div>
          </Reveal>
        </div>

        {/* Right: Phone Mockup */}
        <Reveal delay={150}>
          <div className="flex justify-center lg:justify-end" style={{ perspective: "1000px" }}>
            <div className="relative w-[320px] h-[640px] rounded-[3rem] border-[12px] border-navy shadow-2xl overflow-hidden shrink-0 transition-transform duration-700 hover:-rotate-y-6 bg-navy">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-navy rounded-b-3xl z-20"></div>
              
              {/* Screen */}
              <div className={cn(
                "w-full h-full flex flex-col pt-10 pb-6 transition-colors duration-500",
                activeData.theme === 'dark' ? "bg-black text-white" : "bg-gray-50 text-navy"
              )}>
                {/* Header */}
                <div className="px-5 pb-4 flex items-center justify-between border-b border-gray-200/20">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-blue-soft mb-2 overflow-hidden border-2 border-white">
                      <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${activeData.headerName}`} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm font-bold">{activeData.headerName}</p>
                    <p className="text-[0.65rem] opacity-60 font-medium uppercase tracking-wider">{activeData.headerSub}</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5">
                  <div className="text-center my-2 text-[0.65rem] opacity-50 font-semibold uppercase tracking-wider">Today 3:25 PM</div>
                  
                  {activeData.messages.map((msg: any, idx: number) => (
                    <div 
                      key={idx + activeTab} 
                      className={cn(
                        "max-w-[85%] rounded-2xl p-3.5 text-[0.9rem] leading-relaxed shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both",
                        msg.role === 'user' 
                          ? "bg-blue text-white self-end rounded-br-sm" 
                          : activeData.theme === 'dark' 
                            ? "bg-gray-800 text-white self-start rounded-bl-sm border border-gray-700"
                            : "bg-white text-navy self-start rounded-bl-sm border border-hairline"
                      )}
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Input mock */}
                <div className="px-5 pt-3">
                  <div className={cn(
                    "w-full h-11 rounded-full px-5 flex items-center text-sm transition-colors",
                    activeData.theme === 'dark' ? "bg-gray-900 border border-gray-700 text-gray-500" : "bg-white border border-gray-200 text-gray-400"
                  )}>
                    Message...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
