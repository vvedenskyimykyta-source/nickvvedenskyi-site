Addendum to SPEC_nickvvedenskyi.md: mobile requirements. Treat this as part of the spec (new section 3.7) and apply it from Phase 1 onward. Most traffic will come from LinkedIn and Instagram links, which means phones and the in-app browsers of those apps, so mobile is the primary experience, not an adaptation.

## 3.7 Mobile

### Breakpoints and layout
- Design and build mobile first. Test widths: 360, 390, 430 (phones), 768 (tablet), 1024, 1440.
- Side padding 20px on mobile, 24px on tablet. No horizontal scroll anywhere on the page (check with `overflow-x` at 360px, including long words, prices, links and the language switcher).
- Section vertical spacing on mobile roughly 64px instead of 96-120px on desktop.

### Typography on mobile
- Body 16-17px, never smaller than 16px in inputs (prevents iOS auto-zoom).
- H1 fluid with clamp(), about 34-40px on a 360-390px screen, max 3-4 lines. Check the Ukrainian H1 too, Ukrainian strings are usually 15-25% longer.
- Stats numbers about 40px on mobile.
- Handwritten notes stay readable: min 20px, and they must never overlap text or buttons on small screens. If a note does not fit next to its element, put it above or below it.

### Touch
- All tap targets at least 44x44px, with at least 8px between them.
- Nothing important depends on hover. On touch devices (`@media (hover: none)`):
  - project stickers show the ↗ icon and straight rotation state by default or on tap
  - card lift effects are off
  - button arrow animation plays on tap (`:active`)
- Add `touch-action: manipulation` on interactive elements to remove the tap delay.

### Header and navigation
- Sticky header max 56-64px tall on mobile. It must not cover section titles when jumping to anchors (use `scroll-margin-top` on every anchored section).
- Header on mobile: logo, EN/UA switcher, compact "Book a call" button, burger. If it does not fit at 360px, move EN/UA into the burger menu.
- Burger menu: full-screen overlay, big tap targets, closes on link tap and on Escape, locks body scroll while open.

### Sticky mobile CTA
- On mobile only, after the user scrolls past the hero, show a slim bar fixed at the bottom with the "Book a 30-min call" button (event `cta_book_call`, `location: sticky_mobile`).
- Hide it when the final `#book` section is in view, and while the cookie banner, burger menu or Tally popup is open.
- Respect iOS safe areas: `padding-bottom: env(safe-area-inset-bottom)`.

### Section by section on mobile
- Hero: photo first, cropped to chest, max about 45% of the viewport height, so the H1 and the primary button are visible without scrolling on a 390px phone. Both buttons full width, stacked.
- Numbers: 2x2 grid.
- Problems: one column, cards compact. Tapping the step link scrolls to the pipeline and opens that step.
- Pipeline: vertical stack, arrows point down. When a card expands, scroll it into view smoothly so its top is visible under the sticky header. Step 1 open by default on mobile too. The two bars (Launch Sprint, Ops Audit) stack under the steps.
- Founding banner: text first, photo (if used) below or hidden.
- Cases: one column. The handwritten lesson stays inside the card.
- About: photo on top, text below.
- Testimonials: horizontal swipe with CSS scroll-snap, each card about 85% of the screen width so the next card peeks out, plus small dots showing position. "read more" works on tap.
- How I work: steps vertical with a line on the left, facts in one column.
- Projects stickers: wrap naturally, smaller font, keep the slight rotation but make sure nothing overlaps.
- FAQ: accordion items with full-width tap areas.
- Final CTA: text first, then the Cal.com embed full width. Give the Cal container enough height so the calendar is usable without an inner scroll trap. Check the booking works start to finish on a phone.
- Footer: one column, links with 44px tap areas.

### Tally, Cal.com and cookie banner on phones
- The Tally popup must open full screen on mobile and be easy to close.
- The cookie banner on mobile is a compact bottom sheet, not a full-screen wall, and it must not cover the sticky CTA permanently. Buttons stacked and full width.
- If the Cal.com inline embed misbehaves in in-app browsers, fall back to a full-width button that opens the Cal.com booking page in a new tab.

### In-app browsers (important)
Test the preview URL inside:
- LinkedIn app (iOS and Android if possible), opened from a link in a DM or post
- Instagram app, opened from the bio link
- Safari iOS and Chrome Android
Check: layout, fonts load, pipeline expand works, Tally popup opens and submits, Cal.com booking completes, cookie banner works, sticky CTA does not overlap anything, no content hidden behind the bottom browser bar (use `100dvh`, not `100vh`, anywhere height matters).

### Performance on mobile
- Hero image preloaded, other images lazy with correct `sizes`, so phones never download desktop-sized photos.
- Fonts: subset to latin + cyrillic, `font-display: swap`, preload only the fonts used above the fold.
- Load Tally and Cal.com scripts lazily (Tally on first interaction or when needed, Cal.com when `#book` gets close to the viewport).
- Lighthouse mobile: performance 90+, accessibility 95+, CLS under 0.1.

### Add to the Phase 8 QA checklist
- [ ] No horizontal scroll at 360px in EN and UA
- [ ] Hero H1 and primary button visible without scrolling on a 390px phone
- [ ] All tap targets 44px+, nothing depends on hover
- [ ] Anchors do not hide titles under the sticky header
- [ ] Sticky mobile CTA appears after the hero and hides at #book, over banners and popups
- [ ] Full flow tested in the LinkedIn app, the Instagram app, Safari iOS and Chrome Android: quiz submit, booking, pipeline, language switch
- [ ] Lighthouse mobile 90+ / 95+, CLS under 0.1

At the end of Phases 1, 2 and 3, send me the preview URL and tell me exactly what to check on my phone.
