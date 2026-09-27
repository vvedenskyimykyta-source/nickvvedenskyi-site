# SPEC: nickvvedenskyi.com (MVP) v3

Owner: Nick Vvedenskyi
Goal: a live personal consulting site on nickvvedenskyi.com within 1-2 days, English first, Ukrainian right after, with booking, lead quiz, CRM, auto emails and analytics working.

---

## 0. Instructions for Claude Code (read first)

You are building this site together with Nick. Nick is a marketer, not a developer. Guide him step by step from an empty folder to a live site with every integration working.

Rules:
1. Work in the phases from section 10. At the end of each phase, run the site locally, tell Nick exactly what to check, and wait for his OK.
2. When something only Nick can do (accounts, API keys, DNS records, photos), give click-by-click instructions and wait.
3. Use the English copy in this spec exactly as written. Do not rewrite or "improve" it. Missing text gets a placeholder marked `TODO(Nick)`, listed at the end of the phase.
4. Every word you write yourself (Ukrainian localization, alt texts, error states, meta tags, 404) follows the voice rules in section 2. If the `nick-voice` skill is available in this environment, load it before writing any copy. Section 2 is the minimum even if the skill is not available.
5. Secrets only in `.env` locally and in Vercel Environment Variables. `.env` goes to `.gitignore` from the first commit.
6. MVP mindset. No CMS, no database, no auth. Static wherever possible.
7. Respect `prefers-reduced-motion`: animations off when requested.
8. Nick's photos are in the project folder: `nick-hero.jpg`, `nick-portrait.jpg`, `nick-life.jpg`, `extra-1.jpg`, `extra-2.jpg`. Move them to `src/assets/images/`. Look at the two extra photos yourself and propose where they fit (see 3.6). Do not force them in.

---

## 1. Tech stack

| Part | Choice | Cost |
|---|---|---|
| Framework | Astro (latest) + Tailwind CSS | free |
| i18n | Astro built-in i18n routing: `defaultLocale: "en"`, `locales: ["en", "uk"]`, `prefixDefaultLocale: false` → English at `/`, Ukrainian at `/uk/` | free |
| Icons | Lucide (`lucide-astro` or inline SVG) | free |
| Animations | CSS transitions + Motion (motion.dev) for reveal and expand | free |
| Hosting | Vercel Hobby, `@astrojs/vercel` adapter. Pages static, only `/api/*` on demand | free |
| Code | GitHub repo `nickvvedenskyi-site`, auto deploy on push to `main` | free |
| Domain | nickvvedenskyi.com at GoDaddy, DNS stays at GoDaddy | owned |
| Booking | Cal.com free plan, inline embed in the final section | free |
| Lead quiz | Tally free, popup embed, one form per language | free |
| CRM | Notion database, filled by Tally's native Notion integration | free |
| Auto emails | Brevo free (300 emails/day, automations up to 2,000 contacts) | free |
| Webhooks | `/api/webhooks/tally` and `/api/webhooks/cal` on Vercel → Brevo API | free |
| Analytics | GA4 via GTM + Consent Mode v2, banner: CookieConsent v3 (orestbida) | free |
| Cookieless analytics | Vercel Web Analytics | free |

Keep the structure ready for later (not now): `/services/[slug]`, `/resources` (unit economics calculator as a React island, frameworks), `/blog` with content collections.

---

## 2. Voice rules (must have, for every word on the site, both languages)

This is Nick's voice. The site should read like Nick talking to a founder friend over coffee: warm, direct, a bit ironic, zero corporate polish.

### Who is talking
- One person, first person singular. Never "we" as a company.
- A practitioner who shares what he saw, not a guru. Honest about what he does not do.
- Warmth first, sharpness second. Humor lowers defenses, then the real point lands. Humor lives in small places (notes, microcopy, FAQ, 404), never inside prices or case results.
- The client is the hero. Nick helped them see what was already there.
- Stories over frameworks. Tell what happened, let the reader draw the conclusion.
- Take a position. No "it depends", no both-sides hedging.

### Grammar (English, strict)
- Full word forms only: "do not", "I am", "it is", "you are", "can not". Never contractions.
- No em dashes (—) anywhere. Use commas, periods, colons or restructure.
- People overload sentences, they do not chop them. Prefer one longer sentence connected with commas, "and", "because", "which means" over three short choppy ones. Vary sentence length naturally.
- No bold inside flowing text except where the spec shows it.

### Patterns that are banned (they read as AI)
- Fragment triples: "Not X. Not Y. Just Z." / "Fixed scope. Fixed price. Clear result."
- "It is not X, it is Y" more than once per page.
- Openers and transitions: "Here is what/how/why", "Here is the thing", "The key is", "The result?", "Let me break this down", "Picture this", "At the end of the day", "In today's fast-paced world", "Moreover", "Furthermore", "Additionally".
- Words: leverage, synergy, paradigm shift, navigate, landscape, comprehensive, unpack, foster, streamline, seamless, robust, cutting-edge, empower, elevate, unlock (as a verb in copy), delve, harness, transformative, pivotal, game-changer, holistic, journey (as metaphor), ecosystem (as metaphor), roadmap (as metaphor), crucial, utilize, facilitate.
- Motivational closers ("you got this", "keep going").
- Invented numbers or results. Every number on the site must come from this spec.

### Ukrainian version (`/uk/`)
- Localize, do not translate word by word. It should sound like Nick speaking Ukrainian to a founder, natural spoken language, no bureaucratic style, no surzhyk, no russisms.
- Address the reader with "ти" (informal, warm). TODO(Nick): confirm "ти" vs "ви" before Phase 3.
- No em dashes in Ukrainian either. Where Ukrainian grammar wants a dash, use a colon, a comma or restructure.
- Keep English terms Ukrainian tech people actually use: ICP, GTM, churn, retention, pipeline, SaaS, demo. Service names stay in English (Buyer Sprint, Brand-Market Fit, etc.).
- Prices stay in euros, same format.
- Nick reviews every Ukrainian string before the Ukrainian version goes live.

### Final test for any text
Read it aloud. Would Nick say this to a colleague over coffee? Could someone think "AI wrote this"? If yes, rewrite.

---

## 3. Design direction

### 3.1 Base reference: robwalling.com
Take the structure and feeling from robwalling.com: a big personal hero with the photo of a real person, a bold stats row right under the hero, single column full width sections, warm accent color, decorative hand-drawn elements, slanted section dividers in a few places, conversational copy. Adapt the colors to Nick's palette below.

Secondary references: elenaverna.lovable.app (simple structure, companies row), aprildunford.com (clarity of the offer, but we are warmer).
Not like: linear.app, rauno.me (too much motion, Nick gets motion sick from those).

### 3.2 The spirit
Meeting a warm, funny, very direct person who genuinely cares whether your business works. The coach who believes in you before you proved anything, tells you the uncomfortable truth and makes you laugh while doing it. Never mention any TV show or character on the site; this is about the feeling, not references.

Principles:
1. A person, not a brand. Photo, first person, handwritten notes in the margins as if Nick scribbled on a printout.
2. Humor in the small places.
3. Honesty as design: real prices, what Nick does not do, what the founding deal asks in return.
4. Calm motion: things gently appear, buttons feel alive, nothing moves on its own, no scroll hijacking, no parallax.

### 3.3 Palette (from Nick's photos, sample the exact blue from the photo background)
```
--paper:     #FAF7F2   /* page background */
--paper-2:   #F2EDE4   /* cards, alternating sections */
--ink:       #1B1D23   /* text */
--ink-soft:  #5B5F6A   /* secondary text */
--cobalt:    #2F4FA8   /* primary accent, buttons (photo background) */
--cobalt-dk: #22397D   /* hover */
--wine:      #6E2A2E   /* second accent, handwritten notes, doodles (t-shirt) */
--line:      #E3DDD2   /* borders */

/* soft tints for the 5 pipeline steps */
--step-1: #E6ECFA   /* cobalt tint */
--step-2: #F4E4E4   /* wine tint */
--step-3: #F3EAD7   /* sand */
--step-4: #E3EFE6   /* sage */
--step-5: #EFE6F3   /* lavender */
```
Light theme only.

### 3.4 Typography
- Headings and big numbers: Fraunces (500-700).
- Body and UI: DM Sans (400/500/700), 17-18px body, line-height 1.6.
- Handwritten notes: Caveat in `--wine`, rotated -2 to -4 degrees, max one per section.
- Cyrillic: Fraunces, DM Sans and Caveat must render Ukrainian properly. Check it in Phase 1. If any font lacks Cyrillic or looks broken, swap only for the `/uk/` pages (for example Manrope for body, Lora for headings, Neucha for handwritten) and tell Nick.

### 3.5 Components and motion
- Primary button (cobalt, rounded-full, white text): hover lifts 2px, shadow grows, arrow slides 4px right; press scales to 0.98; 200ms ease-out.
- Secondary button (outline cobalt): hover fills `--paper-2`, arrow slides.
- Scroll reveal: fade in + 16px up, once, 500ms, cards staggered 80ms.
- Stats: numbers count up once when visible (1.2s, ease-out). With reduced motion, show final numbers immediately.
- Cards: rounded-2xl, 1px `--line` border; hover: border cobalt, lift 2px.
- Doodles: 3-5 simple hand-drawn inline SVGs in `--wine` (arrows, a small burst or star near the stats, an underline scribble under one word in the hero H1).
- Slanted dividers: use between 2-3 sections max (hero/stats, before final CTA).
- Mobile first. Everything works at 360px.

### 3.6 Photos
- `nick-hero.jpg` (standing, smiling, blue background): hero, in a large rounded frame. The blue background is on-brand, keep it.
- `nick-portrait.jpg` (corduroy jacket): OG image, favicon source, next to the Cal.com booking embed.
- `nick-life.jpg` (restaurant, glasses): About. Crop tight so no other faces are visible.
- `extra-1.jpg`, `extra-2.jpg`: look at them and propose placement. Good candidates: a second photo in About, the "How I work" section, or the founding clients banner. Use only if they fit. Crop out any other people's faces.
- All through Astro `<Image>` (AVIF/WebP, responsive, lazy except hero).

---

## 4. Site structure (MVP)

| URL | What |
|---|---|
| `/` and `/uk/` | Landing page, all sections from section 5 |
| `/privacy` and `/uk/privacy` | Privacy policy, required by GDPR because of the quiz and analytics |
| 404 | Custom, both languages |

No other pages. Every "Book a call" button scrolls to `#book` (Cal.com embed in the final section). The quiz opens as a Tally popup and shows its own thank-you screen.

Navigation (sticky, solid on scroll): `Nick Vvedenskyi` (logo text) · How I help · Cases · About · FAQ · `EN / UA` switcher · [Book a call].
Mobile: logo + `EN / UA` + Book a call + burger.

Language switcher: keeps the current anchor, sets `hreflang` alternates, no automatic redirect by browser language.

Section order on the landing page:
1. Hero
2. Numbers
3. Problems
4. How I help (pipeline) + founding clients banner
5. Cases
6. About
7. Testimonials
8. How I work
9. Projects
10. FAQ
11. Final CTA with booking (`#book`)
12. Footer

Content lives in `src/i18n/en.ts` and `src/i18n/uk.ts` (UI strings) and data files `src/data/*.ts` with `{ en, uk }` fields.

---

## 5. Content: landing page (English, final)

### 5.1 Hero

Layout: text left, `nick-hero.jpg` right in a rounded frame (mobile: photo on top, cropped to chest).

Eyebrow: `Revenue & Marketing for Tech/AI Products`

H1 (wine scribble underline under "not picking up"):
> You are probably sitting on revenue you are not picking up.

Sub:
> I am Nick. I help tech and AI founders figure out who buys, why they stay and where the money is hiding, and then I help build the system that actually gets it. Seven years, 44 projects, and one stubborn belief: be a friend to your customer.

Buttons:
- Primary: `Book a 30-min call` → `#book` (event `cta_book_call`, `location: hero`)
- Secondary: `Not ready? Get free advice` → Tally popup (event `cta_quiz_open`, `location: hero`)

Handwritten note with an arrow to the photo:
> this is me, the guy who actually reads your message

### 5.2 Numbers

Full-width band right under the hero (slanted top edge), like the stats row on robwalling.com. Four big Fraunces numbers in cobalt, label under each, a small wine burst doodle near one of them.

| Number | Label |
|---|---|
| 44 | projects across tech, AI, fintech, apps and B2B |
| 7 | years of figuring out where the money comes from |
| 15+ | products taken to market from zero |
| 60+ | customer interviews and product demos |

Handwritten note under the band:
> plus a stint on cruise ships running a 15-person team, still the best customer service school I have ever been to

### 5.3 Problems

Title:
> Maybe some of this sounds familiar

Six cards (3 columns desktop, 2 tablet, 1 mobile). Each card: the quote in large text, and a small link at the bottom that scrolls to the matching pipeline step and opens it (event `problem_click`, param `step`).

1. "We have customers, but honestly, I could not tell you exactly why they bought." → `step 1: who buys and why`
2. "Our messaging sounds great in the team meeting and means nothing to the people we are selling to." → `step 2: why they pick you`
3. "The product is ready, or almost, and nobody agrees on how to take it to market." → `the whole path: Launch Sprint`
4. "Demos go well, everyone nods, and then the deals quietly disappear." → `step 3: how they buy`
5. "People leave and the only explanation we have is a checkbox in the cancellation form." → `step 4: why they stay`
6. "We have traffic and users, and somehow the revenue does not match either of them." → `step 5: how they pay more`

Closing line under the grid:
> Different symptoms, but in my experience it is usually the same thing underneath: somewhere along the way the business stopped really listening to its customers. That part is what I fix.

### 5.4 Divider (small, centered, handwritten)
> ok, so what do I actually do about it

### 5.5 How I help (the pipeline)

Anchor: `how-i-help`

Title:
> The whole path, from stranger to a customer who stays

Intro:
> Most specialists fix one channel and call it a day. I look at the whole path, because the leak is almost never where everyone is looking.

#### Visual (see Nick's reference: numbered step cards connected by arrows)
- Desktop: 5 cards in a row, connected by small circular arrow buttons (→) between them. Mobile: vertical stack, arrows point down (↓).
- Each card: number badge top left, Lucide icon top right, stage title, one-line description. Card background uses its `--step-N` tint.
- Click or tap on a card expands it downward (height animation 300ms, others keep their height, `align-items: start`). Only one open at a time. Clicking an open card closes it.
- **Step 1 is open by default**, so people see there is something inside.
- Expanded content: service name, optional tag `where I usually start` (wine pill), description, "You get" line, and a footer caption separated by a thin line: `from €X · N weeks` in Fraunces.
- Accessible: cards are buttons with `aria-expanded`, content is in the DOM (good for SEO), keyboard works.
- Event `pipeline_step_open` with param `step` on every open.
- Under the row, two full-width bars with the same expand behavior (both closed by default):
  - Bar A, cobalt background, white text: "The whole path at once" (Launch Sprint). A thin line visually spans all 5 steps above it.
  - Bar B, `--paper-2`: "Under the hood" (Ops Audit).

Handwritten hint near step 1:
> tap a step to see what is inside

#### Step content

**Step 1 · Who buys and why** · icon `messages-square`
One-liner: Talking to your customers until the pattern shows up.
Expanded:
- **Buyer Sprint** · `where I usually start`
- I interview 10 to 12 of your customers, or people who should be your customers, and come back with who actually buys, why they buy and the exact words they use to describe the problem.
- You get: ICP cards, a buyer language map, your top 3 segments and where the product falls short for each, clear next steps.
- Footer: `from €1,500 · 4 weeks`

**Step 2 · Why they pick you** · icon `target`
One-liner: Making the market get what makes you different.
Expanded:
- **Brand-Market Fit** · `where I usually start`
- Product-market fit means the product works. Brand-market fit means people understand why they should pick you over the other guys, and in my experience those are two very different problems.
- You get: positioning, a messaging matrix, an elevator pitch you can actually say out loud, brand guidelines lite.
- Footer: `from €1,500 · 3 weeks`
- Small line under the footer: `€1,000 when added to a Buyer Sprint`

**Step 3 · How they find you and buy** · icon `handshake`
One-liner: Finding where deals leak on the way in.
Expanded:
- **Pipeline Audit**
- I go through your funnel and your sales process, listen to call recordings, talk to people who did not buy and show you where the deals leak and why.
- You get: a funnel and sales audit, lost deal analysis, a prioritized list of fixes.
- Footer: `from €2,000 · 2 weeks`

**Step 4 · Why they stay** · icon `heart-handshake`
One-liner: Finding out why people leave and giving them reasons not to.
Expanded:
- **Grow Through Your Customers** · `where I usually start`
- We find out why people leave, and then build what makes them stay: feedback loops, early warning signs, better communication with customers and referral mechanics that do not feel awkward.
- You get: churn interviews, a retention playbook, customer health signals, an expansion map.
- Footer: `from €3,000 · 4 weeks`

**Step 5 · How they pay more** · icon `trending-up`
One-liner: Picking up the money already lying on the table.
Expanded:
- **Revenue Unlock**
- Pricing, packaging, upsells, annual plans and all the other places where the money is already in the business and nobody is picking it up.
- You get: a revenue structure review, pricing and packaging recommendations, quick wins, a test plan.
- Footer: `from €2,000 · 2 weeks`

**Bar A · The whole path at once** · icon `rocket`
- **Launch Sprint**
- Taking a new product or a new segment to market? We go through all five steps together, from research and interviews to launch, with channel math that makes sense before you spend a single euro on ads.
- You get: GTM strategy, ICP and messaging, a channel plan with CAC math per channel, a launch and experiments map.
- Footer: `from €7,000 · 2 months`

**Bar B · Under the hood** · icon `settings`
- **Ops Audit**
- Who owns what, how tasks actually move, which meetings deserve to die. The boring stuff that decides whether anything above actually happens.
- You get: an ops audit, an ownership map, a plan for meetings and documentation.
- Footer: `from €1,500 · 2 weeks`

Handwritten note with arrow to the button:
> not sure where your problem sits? that is literally what the first call is for

Button: `Book a 30-min call` → `#book` (event `cta_book_call`, `location: pipeline`)

Store services in `src/data/services.ts`: name, slug, step, icon, core (boolean), description, deliverables, priceFrom, duration, note, all text fields as `{ en, uk }`.

### 5.6 Founding clients banner

Directly under the pipeline. Full width, `--paper-2`, wine left border, optional extra photo on the right if it fits.

Title:
> My first 5 clients get 30% off

Text:
> I am taking on my first five clients as an independent consultant at 30% off any engagement. In return I ask for two things: permission to write up our work as a case study (you approve it before anything goes public) and an honest testimonial, good or bad. Seems like a fair trade to me.

Button: `Grab a founding spot` → `#book` (event `cta_book_call`, `location: founding`)

No counter. Keep `foundingSpots: 5` in `src/data/site.ts` for a real counter later.

### 5.7 Cases

Anchor: `cases`

Title:
> A few things that actually happened

No company names, only the type of business. Cards (2 columns desktop, 1 mobile): small label, title, story, result line in bold, handwritten lesson at the bottom.

**Card 1**
Label: `B2C fintech · comparison platform`
Title: Plenty of traffic and zero revenue
Story: I was running content and SEO there and kept wondering why nobody was making money from all those visitors. Nobody asked me to look at monetization, so I did it anyway, designed a partner commission model and built it out with the team.
Result: **From $0 to $5,000 a month, starting the first month after the partner contracts were signed.**
Lesson: sometimes you do not need more users, you need someone asking why nobody pays

**Card 2**
Label: `B2B AI SaaS · from idea to market`
Title: From an idea to the first paying customers
Story: I came in as the first marketing person when the product was mostly an idea. More than 20 customer interviews and 40 demos later we had a go-to-market plan, paid tests that showed which angles actually work, and pricing built from scratch.
Result: **First paying customers through channels we validated instead of guessed.**
Lesson: the first marketing hire is really the person figuring out where the money comes from

**Card 3**
Label: `B2B tech company · agency client`
Title: They stayed for 2+ years when the numbers were not great
Story: The organic results were weaker than any of us hoped for. The client stayed for more than two years anyway, because they always knew what was happening, why it was happening and what we were doing about it.
Result: **Over two years of retention built on communication, not on a pretty dashboard.**
Lesson: people forgive bad months, they do not forgive silence

**Card 4**
Label: `US local services business · agency client`
Title: A client paid me extra to be their voice
Story: While I was at the agency, one client started paying me $500 a month on top of the contract, just to make sure someone inside was fighting for their project. Later they gave me a separate project based on trust alone.
Result: **$500 a month extra, paid for advocacy and not for deliverables.**
Lesson: being on the customer's side is something people will actually pay for

**Card 5**
Label: `Marketing agency · 30+ client projects`
Title: Order in a team of 20+ project managers
Story: Over three years I kept seeing the same chaos between project managers, clients and leadership. Nobody asked me to fix it, so I built a mentorship system, a feedback loop between PMs and C-level and a grading structure.
Result: **A system that kept working after I left.**
Lesson: structure is not bureaucracy when it takes the anxiety away

Store in `src/data/cases.ts` with `{ en, uk }`.

### 5.8 About

Anchor: `about`

Layout: `nick-life.jpg` left (optionally an extra photo stacked slightly rotated behind it like a printed photo), text right.

Title:
> Hi, I am Nick

Text:
> I started in politics of all places, coordinating districts and 30 to 40 field volunteers during campaigns back at university. Then came cruise ships, first as a lifeguard and later running a 15-person team, which teaches you more about people and complaints than any course ever will. After that, factory marketing with cold calls and trade shows, more than three years as a project manager at an agency with 30+ client projects, and now I lead marketing at an AI startup.
>
> On paper every role looks different, and it took me a while to see the thread. It was always revenue, the whole chain of how a business finds people, earns their trust and keeps it. I am not a channel specialist and I do not pretend to be one. I am the person who talks to your customers, figures out what they actually want and helps you build around it.
>
> Based in Spain, working with founders in Europe and the US, in English and Ukrainian.

Belief block (large Fraunces quote in cobalt):
> Be a friend to your customer.

Under it:
> Not in a cheesy way. In the way where you actually know what they need, you tell them the truth, and they stay because leaving would feel weird.

### 5.9 Testimonials

Title:
> People who worked with me for years and still say nice things

Subtitle (small, `--ink-soft`):
> Straight from my LinkedIn recommendations. On LinkedIn I am Mykyta, Nick is just shorter.

Cards: no photos, no company names. Name, role, relationship line in small text, the quote, and a link `Read on LinkedIn ↗` → `https://www.linkedin.com/in/nick-vvedenskyi/details/recommendations/` (event `outbound_linkedin`, `location: testimonials`). A large wine quotation mark doodle in the corner of each card. Two cards carry a small tag `translated from Ukrainian` on the English site.

Layout: desktop 3 visible, the rest in a horizontal scroll with arrow buttons; mobile swipe. Long texts clamped to 6 lines with `read more`.

IMPORTANT: these are quotes from other people. Keep them exactly as below, including contractions and the spellings Mykyta and Nikita. The no-contractions rule does not apply here and the Phase 8 grep skips `testimonials.ts`. On the Ukrainian site, show Darina's and Natalia's original Ukrainian texts (TODO(Nick): paste originals into `uk` fields), and translate the four English ones into Ukrainian with the tag `переклад з англійської`.

**1. Mykhailo Shcherbachov** · Co-Founder and CMO · managed Nick directly
> Nikita is a highly responsible manager who always advocates for his clients' interests. He's also very pleasant to work with and collaborates well with colleagues. Regarding his core responsibilities, he's extremely diligent and dependable.
>
> It was a pleasure working with Nikita, and I can confidently recommend him as an excellent specialist and mentor for any team.

**2. Yevhenii Titov** · Project Manager · worked with Nick on the same team
> We worked on the same team for 1.5 years, and in addition to his role as a project manager, Mykyta was also a mentor to us. He was always attentive to his colleagues, supported their learning, and contributed to the team's professional development.
>
> Mykyta has strong leadership qualities and communicates effectively both within the team and with clients. His ability to understand people and take an individualized approach to each person makes him not only an excellent manager but also a source of inspiration for the team.
>
> In addition, Mykyta demonstrates deep knowledge in digital marketing, which allows him not only to coordinate projects but also to strategically influence their success.

**3. Maria Sokolova** · COO · managed Nick directly
> I would like to leave my favorable recommendation about Mykyta as an excellent specialist and colleague.
>
> During the entire time of his work, Mykyta showed excellent organizational qualities, the ability to find an approach to clients and excellent analytical skills. Working on a project as a PM, Mykyta knows how to deeply dive into a business niche, correctly build processes in a team to obtain an excellent result, customize processes in such a way as to make cooperation as comfortable as possible.
>
> In addition, Nikita has deep knowledge of digital marketing tools and the ability to use them to achieve project goals. Among the strengths, it is worth highlighting leadership, the ability to take responsibility, and the ability to quickly work with a large volume of tasks.
>
> Working in a team with Mykyta is about professionalism, creative thinking, support, honesty, dedication and hard work!

**4. Darina Rudenko** · HR People Partner · was senior to Nick · `translated from Ukrainian`
> Mykyta worked as a Mentor Project Manager. Over almost 4 years, Mykyta proved himself a high-level professional, able to manage projects effectively, keep the team working well together and reach the goals that were set.
>
> Mykyta showed leadership skills, found an individual approach to every team member and every client, and helped the team grow professionally. Thanks to his mentoring, the PM team significantly improved its skills.
>
> Mykyta manages projects successfully, is very proactive and brings in new ideas. He takes an active part in developing the company and creating a supportive working environment for specialists. Mykyta has strong analytical skills, strategic thinking and the ability to work with people of different experience levels. His professionalism, initiative and responsibility make him a strong specialist in any team.
>
> I am sure Mykyta will become a valuable specialist for any company and will contribute to its growth.

**5. Kateryna Rudenko** · Senior SEO Specialist · worked with Nick on a shared project
> I had the opportunity to work with Mykyta on a shared project when I was an SEO specialist, and he was the project manager. Even after I moved into the role of SEO Team Lead, we continued to collaborate, and I became even more convinced of his professionalism.
>
> He has complete control over every project he manages. His attention to detail, analytical approach, and ability to effectively coordinate teams make working with him both smooth and productive. Beyond his exceptional project management skills, he also has deep expertise in various areas of marketing, allowing him to not only oversee processes but also provide valuable strategic insights.
>
> If you're looking for a professional, highly organized, and dedicated manager who doesn't just do the job but takes it to the highest level, Mykyta is exactly that kind of specialist.

**6. Natalia Dushchak** · SEO Specialist · worked with Nick on the same team · `translated from Ukrainian`
> I had the honor of working with Mykyta, and it was a truly professional experience. Mykyta is a PM who stands out for really great organizational skills, strategic thinking and the ability to find solutions even in the most difficult situations.
>
> One of his strongest sides is the ability to communicate effectively with everyone involved. He always keeps the project under control and makes sure tasks are delivered on time without losing quality.
>
> I am confident that with Mykyta any project will succeed. I recommend him as a great PM who will make a real contribution to your company's growth.

Future: client testimonials go first when they exist.

### 5.10 How I work

Anchor: `how-i-work`

Title:
> What working together actually looks like

Part 1, four steps (horizontal desktop, vertical mobile, big Fraunces numerals, thin connecting line):

1. **We talk for 30 minutes.** It is free. You tell me what is going on, I ask a lot of slightly annoying questions, and we figure out if I am the right person for this. If I am not, I will tell you and probably know who is.
2. **You get a proposal within 48 hours.** Scope, price, timeline and exactly what you will have at the end, on one or two pages, because nobody reads the forty-page ones.
3. **We run the sprint.** Weekly check-ins, and you see the work while it happens instead of waiting for a big reveal at the end.
4. **You keep everything.** Documents, systems and next steps your team can run without me, which is kind of the whole point.

Part 2, a row of four small facts with Lucide icons (`badge-euro`, `mic`, `globe`, `folder-check`):
- The price is fixed and agreed before we start, I never bill by the hour.
- I talk to your customers myself, not through a survey tool.
- Remote, Spanish time zone, in English or Ukrainian.
- Everything I make for you is yours to keep.

### 5.11 Projects

Title:
> A few of the 44 projects that taught me all this

Design: not a list. Company names as "stickers": Fraunces name on a `--paper-2` pill with a 1px border alternating `--cobalt` and `--wine`, each slightly rotated (random between -3 and 3 degrees, fixed at build time), wrapping and centered, a bit like stickers on a laptop lid. Hover: straightens to 0 degrees, lifts, border turns cobalt, a small ↗ appears. Each opens the company site in a new tab (event `outbound_project`, param `name`).

Content: TODO(Nick) list of `name + url`. Store in `src/data/projects.ts`.

### 5.12 FAQ

Anchor: `faq`

Title:
> Questions people usually ask

Accordion:

- **Why a fixed price and not hourly?**
  Because hourly pricing rewards being slow. With a fixed scope we both focus on the result, and you know the full cost before we start.

- **Do you run SEO, paid ads or email campaigns?**
  I use them as tools inside the work, but I do not sell them as standalone services. If you need someone running your ads every day, I am the wrong guy, and I know a few right ones.

- **What stage should my company be at?**
  Early stage tech and AI products, anywhere from the first paying customers to a growth plateau you can not seem to break through.

- **I am not sure which service I need.**
  Most people are not, and that is completely fine. Figuring it out is exactly what the free call is for.

- **How does the founding client deal work?**
  The first five clients get 30% off any engagement. In return you let me write up our work as a case study and give me an honest testimonial. You see and approve the case study before anything goes public.

- **Which time zone and languages?**
  I am in Spain, so Central European Time. I work in English and Ukrainian.

### 5.13 Final CTA and booking

Anchor: `book`

Background `--cobalt`, slanted top edge, text white.

Title:
> Tell me what is going on

Text:
> Thirty minutes, no pitch deck and no pressure. Worst case, you leave with a couple of ideas you did not have before.

Layout: text and `nick-portrait.jpg` (small, round) on the left, Cal.com inline embed on the right inside a white rounded card (mobile: stacked). The Cal embed uses the `intro-call` event, passes UTM params from the session into booking metadata, and fires `booking_completed` on the Cal `bookingSuccessful` event.

Under the embed:
> Not ready for a call? `Answer a few quick questions and get free advice` → Tally popup (event `cta_quiz_open`, `location: final`)
> I reply personally within 48 hours with one honest thing I would look at first. Written by me, not a bot.

One small line:
> Reminder: my first five clients get 30% off.

### 5.14 Footer

- `Nick Vvedenskyi · Revenue & Marketing for Tech/AI Products`
- LinkedIn `https://www.linkedin.com/in/nick-vvedenskyi/` (event `outbound_linkedin`, `location: footer`)
- Instagram TODO(Nick) URL, label `Instagram (the personal side)` (event `outbound_instagram`)
- Email TODO(Nick) (event `click_email`)
- Privacy · Cookie settings (reopens the banner) · `EN / UA`
- Bottom line:
> Made in Spain with too much coffee and a stubborn belief that customers are people.

### 5.15 404

Title: `Well, this page left without telling anyone why`
Text: `Which is exactly the kind of churn I help with. Let us get you back home.`
Button: `Back to the homepage`

---

## 6. Tally quiz

Two forms with identical structure: `Free advice (EN)` and `Free advice (UA)`. Claude Code writes the Ukrainian questions for Nick to paste. The site opens the form that matches the page language.

Questions:
1. What are you building? AI product / B2B SaaS / Mobile app / Other tech product
2. Where are you right now? Pre-revenue / First paying customers / Growing / Stuck on a plateau
3. What is bothering you most? We do not really know who buys and why / People do not get what makes us different / Getting ready to launch / Leads come in but do not convert / Customers leave / We have users but revenue does not match / Team and processes are a mess
4. Tell me in your own words what is going on (long text, required)
5. Monthly revenue, roughly (optional): Under €10K / €10-50K / €50-200K / €200K+ / Rather not say
6. Name, email (required), company website, LinkedIn (optional)
7. How did you find me? LinkedIn / Instagram / Someone recommended you / Other

Hidden fields: `utm_source`, `utm_medium`, `utm_campaign`, `lang`.

Thank-you screen inside Tally (EN):
> Got it, thank you. I read every answer myself and will reply within 48 hours. If it is urgent, grab a slot on my calendar, it is right below the quiz.

Integrations in Tally: self email notification ON, Notion → `Leads CRM`, webhook → `https://nickvvedenskyi.com/api/webhooks/tally` with signing secret.

Embed: popup via `data-tally-open`. Listen to Tally embed events and push `quiz_started` and `quiz_submitted` + `generate_lead` (`method: tally_quiz`) to the dataLayer.

---

## 7. Integrations

### 7.1 Cal.com
Event type `Intro call`, slug `intro-call`, 30 min, Google Meet or Cal Video.
Booking questions: name, email, company website, "What would you like to talk about?".

Event description:
> A relaxed 30-minute call. You tell me what is going on with your product and revenue, I ask a lot of questions, and we figure out whether there is something I can actually help with. If there is not, I will tell you honestly and point you somewhere better.

Profile bio:
> Revenue & Marketing for Tech/AI Products. I help founders figure out who buys, why they stay and where the money is hiding. Based in Spain.

Webhook `BOOKING_CREATED` → `https://nickvvedenskyi.com/api/webhooks/cal` with a secret. If webhooks are not available on the free plan, fall back to Cal.com's default confirmation email and skip email C.

On `/uk/`, set the embed language to Ukrainian if the Cal.com embed supports it.

### 7.2 Notion CRM
Database `Leads CRM`: Name (title) · Email · Company website · LinkedIn · Product type · Stage · Main problem · Details · Revenue range · Found via · Language · UTM source · UTM medium · UTM campaign · Status (New / Replied / Call booked / Proposal sent / Won / Lost) · Created.
Both Tally forms write into this one database.

### 7.3 Webhook routes
`/api/webhooks/tally`: verify signature, upsert Brevo contact (email, FIRSTNAME, COMPANY, MAIN_PROBLEM, STAGE, UTM_SOURCE, LANGUAGE), add to list `Leads - quiz`.
`/api/webhooks/cal`: verify secret, upsert contact (FIRSTNAME, COMPANY), add to list `Booked call`.
Return 200 fast, log errors, never expose keys.

Env vars:
```
BREVO_API_KEY=
BREVO_LIST_QUIZ_ID=
BREVO_LIST_BOOKED_ID=
TALLY_SIGNING_SECRET=
CAL_WEBHOOK_SECRET=
PUBLIC_GTM_ID=
PUBLIC_TALLY_FORM_EN=
PUBLIC_TALLY_FORM_UK=
PUBLIC_CAL_LINK=
```

### 7.4 Brevo emails (English for MVP, Ukrainian versions after launch)
Sender `Nick Vvedenskyi <hello@nickvvedenskyi.com>`, reply-to TODO(Nick). Domain authenticated (DKIM + DMARC at GoDaddy). Plain text style, signed by Nick.

**Automation 1: quiz submitted** (trigger: added to `Leads - quiz`)

Email A, immediately. Subject: `Got it, reading it now`
> Hi {{FIRSTNAME}},
>
> Thanks for taking the time to write all that out, most people do not, and it makes my job a lot easier.
>
> I read every answer myself and will reply within 48 hours with one honest thing I would look at first in your situation. No templates and no automated advice, just me thinking about your business for a bit.
>
> If you would rather talk it through live, you can grab 30 minutes here: https://nickvvedenskyi.com/#book
>
> Talk soon,
> Nick

Wait 3 days. Only if the contact is NOT in `Booked call`.

Email B. Subject: `The $5,000 that was sitting in plain sight`
> Hi {{FIRSTNAME}},
>
> A quick story while you think about what I sent you.
>
> A while ago I was running content and SEO for a financial comparison platform. Lots of traffic, growing every month, and zero revenue from it. Nobody asked me to look at monetization, but it kept bugging me, so I designed a partner commission model and we built it out with the team. It made $5,000 in the first month after the partner contracts were signed.
>
> The traffic had been there the whole time. Nobody had asked why none of it was paying.
>
> Most businesses I look at have something like that, a pile of money sitting in plain sight. If you want to find yours, let us talk: https://nickvvedenskyi.com/#book
>
> Nick

**Automation 2: call booked** (trigger: added to `Booked call`)

Email C, immediately. Subject: `See you soon, one small thing before our call`
> Hi {{FIRSTNAME}},
>
> Looking forward to our call. To make the 30 minutes actually useful, think about these three things beforehand, no need to write anything down:
>
> 1. Who is your best customer right now, and why do you think they chose you?
> 2. What is the one number that worries you the most?
> 3. If our call goes really well, what changes for you?
>
> That is it, see you there.
>
> Nick

After launch: Claude Code writes Ukrainian versions of A, B and C, and the automations split by the LANGUAGE attribute if the Brevo free plan allows conditions.

### 7.5 Analytics
- GTM (new container, TODO(Nick) ID), loaded only through consent logic.
- CookieConsent v3 + Consent Mode v2, all denied by default, categories: necessary and analytics. Banner (EN):
  > I use analytics cookies to see which parts of this site are useful and which are not. Nothing is sold and nothing creepy happens. You can say no and everything still works.
  Buttons: `Accept analytics` / `No thanks` / `Settings`. Ukrainian version via i18n.
- GA4 via GTM. Events pushed to `dataLayer` from `data-event` / `data-location` attributes:
  `cta_book_call`, `cta_quiz_open`, `quiz_started`, `quiz_submitted`, `generate_lead`, `booking_completed`, `pipeline_step_open`, `problem_click`, `lang_switch`, `outbound_linkedin`, `outbound_instagram`, `outbound_project`, `click_email`, plus enhanced measurement for scroll. Every event also carries `lang`.
- UTM parameters kept for the session and passed into Tally hidden fields and Cal.com metadata.
- Vercel Web Analytics on, counts everyone without cookies.

UTM links for Nick (put them in the README):
```
LinkedIn profile:   https://nickvvedenskyi.com/?utm_source=linkedin&utm_medium=profile
LinkedIn posts:     https://nickvvedenskyi.com/?utm_source=linkedin&utm_medium=post
LinkedIn DMs:       https://nickvvedenskyi.com/?utm_source=linkedin&utm_medium=dm
Instagram bio:      https://nickvvedenskyi.com/?utm_source=instagram&utm_medium=bio
Email signature:    https://nickvvedenskyi.com/?utm_source=email&utm_medium=signature
Ukrainian outreach: https://nickvvedenskyi.com/uk/?utm_source=linkedin&utm_medium=dm
```

### 7.6 Privacy policy
Plain-language GDPR policy in both languages, based on what the site uses: GA4 (with consent), Vercel Web Analytics (cookieless), Tally, Cal.com, Brevo, Notion. Controller: Nick Vvedenskyi, Spain, contact TODO(Nick). Sections: what I collect, why, where it is stored, how long, your rights, cookies, contact. Code comment at the top: Nick should review it, it is not legal advice.

### 7.7 Domain and DNS (GoDaddy)
Nameservers stay at GoDaddy. Add exactly what Vercel and Brevo show:
- Vercel: apex `nickvvedenskyi.com` + `www` (redirect www → apex).
- Brevo: verification TXT, DKIM, DMARC TXT (`v=DMARC1; p=none;` to start).
- Do not delete existing MX records.
- Optional: free forwarding for `hello@nickvvedenskyi.com` (for example ImprovMX free) so replies are not lost.

### 7.8 SEO basics
- EN title: `Nick Vvedenskyi · Revenue & Marketing for Tech/AI Products`
- EN description: `I help tech and AI founders figure out who buys, why they stay and where the money is hiding. Customer discovery, positioning, retention and go-to-market sprints with fixed prices.`
- UA title and description localized by the same rules.
- `hreflang` en / uk / x-default, `lang` attribute per page.
- OG image 1200×630 per language: `nick-portrait.jpg` left, name and tagline right on `--paper`.
- Favicon: `NV` in Fraunces, white on a cobalt circle.
- `@astrojs/sitemap` with i18n, `robots.txt`, JSON-LD `Person` (name, jobTitle, url, sameAs LinkedIn and Instagram).

---

## 8. What Nick still has to provide (TODO list)
- Projects: names + URLs (only ones he can mention publicly)
- Instagram URL, contact email, reply-to email
- GTM container ID
- Ukrainian originals of Darina's and Natalia's recommendations
- Confirm "ти" vs "ви" for the Ukrainian version
- Photos in the folder (done)

---

## 9. Future (not now)
`/services/[slug]` pages, `/resources` with the unit economics calculator and frameworks, `/blog`, a real founding spots counter, client testimonials first, Ukrainian email sequences.

---

## 10. Build phases

**Phase 0. Setup (20 min)**
Check Node LTS and git. Nick logs into GitHub and Vercel (via GitHub). Create Astro + Tailwind + i18n config, fonts, tokens, `.gitignore`. First push, import to Vercel, get the `*.vercel.app` preview URL.

**Phase 1. Design system (1 hour)**
Layout, nav with EN/UA switcher, footer, buttons, cards, section wrapper, reveal, handwritten note, doodles, slanted divider, reduced motion. Check fonts with Cyrillic. Nick checks on phone and desktop.

**Phase 2. English landing (2-3 hours)**
All sections from section 5 with data files. Pipeline expand logic, problem → step links, count-up numbers, projects stickers. Photos including a proposal for extra-1 and extra-2. Nick reviews on the preview URL.

**Phase 3. Ukrainian version (1 hour + Nick's review)**
Claude Code localizes every string by section 2 rules into `uk` fields and generates a review file `UK_REVIEW.md` with EN and UA side by side, section by section. Nick edits the file, Claude Code applies his edits. The Ukrainian version is hidden from the nav until Nick approves it. English launch does not wait for this.

**Phase 4. Privacy and 404 (30 min)**

**Phase 5. Forms and CRM (1 hour)**
Nick creates the Cal.com event, both Tally forms, the Notion database and the Brevo account with instructions. Claude Code embeds Cal.com and Tally, builds both webhook routes, Nick adds env vars in Vercel. Test end to end: quiz → Notion row → Brevo contact → email A. Booking → email C.

**Phase 6. Domain (30 min + DNS wait)**
Vercel domain, GoDaddy records with exact instructions, SSL. Brevo domain authentication. Check that Brevo emails do not land in spam.

**Phase 7. Analytics (45 min)**
GTM + GA4 + consent + all events + Vercel Analytics. Verify in GTM preview and GA4 DebugView, and check nothing fires before consent.

**Phase 8. QA and launch (45 min)**
- [ ] No em dashes and no contractions in EN copy: grep for `—`, `n't`, `'m`, `'re`, `'ll`, `'ve`, `'d `, and `'s ` (check that `'s` matches are possessives), skipping `src/data/testimonials.ts`
- [ ] No em dashes in UA copy
- [ ] No banned words from section 2 (grep the list)
- [ ] All `TODO(Nick)` resolved
- [ ] 360px, tablet, desktop in both languages
- [ ] Pipeline: step 1 open by default, one open at a time, keyboard works
- [ ] Lighthouse: performance 90+, accessibility 95+
- [ ] Quiz → Notion → Brevo → email A works, in both languages
- [ ] Booking → email C works
- [ ] Events in GA4 DebugView, nothing fires before consent
- [ ] OG preview checked by pasting the URL into a LinkedIn post draft
- [ ] 404 works
- [ ] README: UTM links + how to edit prices, cases, testimonials, projects
Then Nick puts the UTM links into LinkedIn and Instagram.
