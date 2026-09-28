# 🗺️ Master Project Roadmap: AI Employee Launchpad (Beginner Friendly Guide)

Welcome! Since this is your first time doing something like this, don't worry—this document is designed to guide you step-by-step. We will take it one small chunk at a time. This document serves as our "North Star" for the entire project. Whenever we lose track of where we are, we return to this file.

---

## Phase 1: GHL Presentation Layer (The "Front Door")
*This is the visual experience that your user sees. It captures the lead's URL and displays the demo.*
- [x] Set up the Cloudflare Worker (for iframing the client's site and injecting the AI widget).
- [x] Design the custom Hero section (Left text, Right visual cards).
- [x] Design the Demo Form section (Left form overrides, Right chat skeleton).
- [ ] Configure the GoHighLevel workflow so when the form is submitted, it fires a "Webhook" (a digital message) to our new backend app telling it to start working.

---

## Phase 2: Infrastructure & Backend Setup (The Foundation)
*This is where we set up the tools needed for the background engine to run. Since you are new to this, we will do this together step-by-step.*

**Step A: Create the Accounts** (We will do this first!)
- [ ] **Supabase (Database):** Go to supabase.com, sign up for a free account, and create a new project. We will use this to save our data.
- [ ] **Upstash (Background Queue):** Go to upstash.com, sign up for free, and create a "Redis" database. We need this so our app doesn't crash when scraping takes a long time.
- [ ] **Firecrawl (Scraper):** Go to firecrawl.dev, sign up, and get an API key. This is the robot that will read the websites for us.
- [ ] **OpenAI (AI Brain):** Go to platform.openai.com, sign up, and generate an API key. We use this to help categorize tricky website links.

**Step B: Write the Code Foundation**
- [ ] Save the API keys we got in Step A into a hidden `.env` file in our code.
- [ ] Connect our code to the Supabase database.
- [ ] Create Database Tables (like spreadsheets) to save our data: `Jobs`, `CandidatePages`, `SelectedPages`.
- [ ] Connect our code to Upstash Redis so we can run tasks in the background.

---

## Phase 3: The Core Intelligence Engine (The "Brain")
*This is the actual code we will write to make the app smart.*
- [ ] **Map the Website:** Write code to ask Firecrawl for a list of every single page on the user's website.
- [ ] **Filter out the Junk:** Write code to automatically delete bad links like `/privacy-policy` or `.pdf` files.
- [ ] **Classify the Pages:** Write code to label if a page is a "Pricing" page or a "Contact" page (using OpenAI to help if the link is confusing).
- [ ] **Score the Pages:** Write the math (the 100-point system) to grade how valuable each page is.
- [ ] **Pick the Best 12:** Write the logic to sort the pages by their score and pick the top 12 best ones.

---

## Phase 4: Webhooks & End-to-End Pipeline
*Connecting the GHL front door to the backend brain so they talk to each other automatically.*
- [ ] Build a receiver in our app to catch the URL sent by GoHighLevel.
- [ ] Connect that receiver to our background queue so it can process 50 pages without freezing.
- [ ] Write the main script that runs Phase 3 automatically (Map -> Filter -> Classify -> Score -> Select).
- [ ] Save the winning Top 12 pages to our Supabase database.
- [ ] Ask Firecrawl to actually read the text on those Top 12 pages and save that text to our database.

---

## Phase 5: AI Widget & Demo Delivery
*Hooking up the scraped text to the actual AI chatbot and sending the demo to the user.*
- [ ] Send the scraped text to your chosen AI Provider (like Vapi or Bland).
- [ ] Generate the unique demo link for the user (e.g., `yourdomain.com/demo/abc-123`).
- [ ] Send a message *back* to GoHighLevel with the demo link so GHL can automatically email/text the user saying "Your AI is ready!"

---

## Phase 6: Testing & Production Deployment
*Making sure it works perfectly before real customers use it.*
- [ ] **Testing the Math:** Test the scoring system with fake URLs to ensure it always picks the right 12.
- [ ] **Real Website Test:** Run 3 completely different business websites (e.g., a Dentist, a Plumber) through our system to ensure it doesn't break.
- [ ] **Go Live:** Upload our code to the internet (using a service like Vercel).
- [ ] **Launch:** Watch the first live leads use your incredible AI system!
