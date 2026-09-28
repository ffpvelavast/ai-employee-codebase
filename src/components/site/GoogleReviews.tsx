import { Reveal } from "./Reveal";
import { Section, Eyebrow } from "./ui";

const reviews = [
  {
    name: "Richard Kelly",
    time: "4 days ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RK",
    text: "Even on the free version the customer support was outstanding. Very responsive and issue was resolved within 12hrs."
  },
  {
    name: "frank",
    time: "5 days ago",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Frank",
    text: "Sehr gute widgets, für den Einbau in eigene Webseiten. Über den Service kann ich nur das Beste sagen ... freundlich, kompetent und schnell. Wirklich Top! Ich kann SociableKIT nur empfehlen."
  },
  {
    name: "Brittany Reid",
    time: "3 weeks ago",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Brittany",
    text: "SociableKit is a very user-friendly service that offers a variety of widgets and tools to enhance activity on ones website. The customer service is top tier, and responsive in a very timely manner! Highly recommend SociableKit for others to try!"
  },
  {
    name: "Maonosa from SitesGo",
    time: "4 weeks ago",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Maonosa",
    text: "Been using them for 3 years, no regrets! Tough to beat their price and quality :)"
  },
  {
    name: "Jefferson Fowler",
    time: "4 weeks ago",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Jefferson",
    text: "SociableKIT is wonderful to work with! The customer service is quick, easy, and always gets the job done! I highly recommend them!"
  },
  {
    name: "Amna Aamir",
    time: "1 month ago",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Amna",
    text: "I had a great experience with SociableKIT! The platform makes it incredibly easy to integrate widgets into your website, even if you aren't tech-savvy. On top of that, the support staff is extremely helpful and responsive whenever you have a question. Highly recommended for anyone looking to stream!"
  },
  {
    name: "Ali Mahjoub",
    time: "1 month ago",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Ali",
    text: "Best Support, Really nice to work with them"
  },
  {
    name: "Nicole Warner",
    time: "1 month ago",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Nicole",
    text: "Ive been using these guys for like three years now. I run a marketing business and they make facebook widgets super easy. And their tech/customer support is on point. They really know what they're doing. Could not recommend them enough."
  }
];

export default function GoogleReviews() {
  return (
    <Section id="reviews" tone="default">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>Social Proof</Eyebrow>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
            What Our Clients Say.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Don't just take our word for it. See how our AI Employees are transforming businesses.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="w-full max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {/* Main Google Profile Card */}
          <div className="break-inside-avoid rounded-2xl border border-hairline bg-card p-6 shadow-soft flex flex-col items-center text-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
              alt="Google" 
              className="h-8 mb-2"
            />
            <h3 className="text-xl font-bold text-navy">SociableKIT</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold text-lg">4.9</span>
              <div className="flex text-[#fbbc04]">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1 mb-4">Read our 599 Reviews</p>
            <button className="w-full py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
              Write a review
            </button>
          </div>

          {/* Review Cards */}
          {reviews.map((review, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl border border-hairline bg-card p-6 shadow-soft flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full bg-gray-100 object-cover" />
                <div>
                  <p className="text-sm font-bold text-navy">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.time}</p>
                </div>
              </div>
              <div className="flex text-[#fbbc04] mb-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-navy/80 leading-relaxed mb-4 flex-1">
                {review.text}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-hairline">
                <a href="#" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-navy transition-colors">
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                  View on Google
                </a>
                <button className="text-blue/70 hover:text-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                </button>
              </div>
            </div>
          ))}

        </div>
      </Reveal>
    </Section>
  );
}
