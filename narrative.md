# Communal Market — Design Narrative

## The Business

Communal Market is a beloved neighbourhood cafe and bakery at 949 Glen Huntly Rd, Caulfield VIC 3162. It holds a perfect 5.0 Google rating across 118 reviews — an extraordinary achievement that speaks to the care behind every cup and every pastry. They're known for specialty coffee (roasted by Proud Mary / Humbler), their legendary cinnamon scrolls with cream cheese frosting, pistachio chocolate chip cookies, gourmet sandwiches on focaccia, and a warm community atmosphere. Their tagline on the branded cups: "Gather. Sip. Shop."

Open seven days: Mon–Fri 6:30am–2pm, Sat 8am–2pm, Sun 8am–12:30pm.

No existing website. This is their first.

## The Audience

Caulfield locals on their morning coffee run. Weekend brunch seekers. People who've found their "spot" and want to tell friends about it. The website needs to confirm what regulars already know and convince newcomers to make the trip.

## Design Philosophy

**Let the photos do the talking.** We have 10 stunning real photographs — the white-walled storefront with its colourful mural, latte art in branded red cups, pistachio cookies on glass stands, a loaded display case, gourmet sandwiches, and a warm interior with globe chandeliers and pressed tin ceilings. These aren't stock photos. They're the real thing.

**Lead with trust.** A perfect 5-star rating from 118 people is the single most persuasive thing on this site. It goes front and centre, above the fold, impossible to miss.

**Warm, not corporate.** This is a neighbourhood cafe that knows your name. The design should feel like walking in — warm cream tones, soft natural light, unhurried. No hard sells, no aggressive CTAs. The primary action is simply: come visit us.

## Visual Language

### Colour Palette (Light Theme)
- **Background:** `#f5f0e8` — warm cream, like parchment or a linen tablecloth
- **Text:** `#2c1810` — deep warm brown, like espresso
- **Accent/Surface:** `#e8d5b0` — soft tan, like steamed milk
- **White surface:** `#ffffff` — for cards and contrast
- **Muted text:** `#8b7355` — warm brown-grey for secondary copy

### Typography
- **Headings:** Playfair Display — a warm, elegant serif that says "artisan" not "corporate". Used as the wordmark in place of a logo.
- **Body:** Inter — clean, highly readable, modern. The perfect counterweight to Playfair's character.

### No Logo
The business name "Communal Market" typeset in Playfair Display serves as the wordmark. This is intentional — it keeps things human and typographic rather than branded and corporate.

## Photo Strategy

| Photo | Content | Best Use |
|-------|---------|----------|
| photo-00 | Storefront exterior — white walls, colourful mural, people sitting outside | Hero image, Find Us page |
| photo-01 | Latte art heart in branded red cup on timber counter | Hero candidate, coffee section |
| photo-02 | Retail shelf display | Secondary/gallery |
| photo-03 | Interior — counter, pastry display case, globe chandelier, pressed tin ceiling | Interior atmosphere, about section |
| photo-04 | Gourmet focaccia sandwich with rocket on wooden board | Menu page hero, food section |
| photo-05 | Exterior window — "COMMUNAL MARKET" text, warm interior glow | Atmospheric, find-us |
| photo-06 | Pistachio cookies on glass stand | Menu highlights, gallery |
| photo-07 | Iced coffee with Humbler coffee bag | Coffee section, gallery |
| photo-08 | Full display case — sandwiches, pastries, salads, drinks | Menu page, what we offer |
| photo-09 | Counter spread — pastries, scrolls, flatbreads on wooden boards | Menu highlights, bakery section |

## Page Architecture

### Home `/`
1. **Hero** — Full-bleed photo (photo-00 storefront or photo-01 latte art) with overlay text: business name in Playfair Display, "Cafe & Bakery · Caulfield" descriptor, the 5.0 star rating badge prominently displayed, and "Open today" with current hours. Primary CTA: "Get Directions" linking to Google Maps.
2. **Trust Bar** — "★ 5.0 · 118 Google Reviews · Open 7 Days" — compact, scannable.
3. **What We're Known For** — 3-4 highlight cards (coffee, cinnamon scrolls, baked goods, light food) with real photos.
4. **Customer Reviews** — The three 5-star reviews from brief, presented warmly with real names.
5. **Photo Gallery** — Masonry or grid of the remaining photos. Let the space speak for itself.
6. **Visit Us** — Address, hours table, Google Maps directions link. Quick-glance info for someone deciding right now.

### Menu `/menu`
Not a priced menu (no prices provided). Instead, a curated showcase of what they serve:
- **Coffee** — Specialty coffee, lattes, iced coffee. Photo of latte art.
- **Bakery** — Cinnamon scrolls with cream cheese frosting, cookies, pastries. Photos of the goods.
- **Light Food** — Gourmet sandwiches, salads, savoury pastries. Sandwich photo.
- **Drinks & More** — Cold drinks, retail items.

Each category gets a real photo and warm descriptive copy. The vibe is "here's what awaits you" not "here's what it costs."

### Find Us `/find-us`
- Large map embed placeholder (Google Maps iframe area)
- Full address: 949 Glen Huntly Rd, Caulfield VIC 3162
- Opening hours table (all 7 days)
- "We're a short walk from Caulfield station" directional note
- Exterior photo (photo-00 or photo-05) so people recognise the building
- Google Maps directions link as primary CTA

## Content Tone

Warm, inviting, unpretentious. Short sentences. First person plural ("we") sparingly — mostly let the photos and reviews speak. No exclamation marks in headings. No "artisanal" or "curated" — those words have been drained of meaning. Instead: "made fresh daily", "neighbourhood favourite", "your morning ritual."

## Technical Approach

- Next.js 16 with App Router (already scaffolded)
- Tailwind CSS v4 with @theme tokens for the warm palette
- Playfair Display + Inter via next/font/google
- Lucide React for icons (MapPin, Clock, Star, Coffee, etc.)
- All 10 real photos via next/image with proper alt text
- Fully responsive — mobile-first, since most cafe searches happen on phones
- JSON-LD structured data for LocalBusiness (cafe)
- Light, fast, no JavaScript bloat — this is a cafe site, not a SaaS app

## The Feeling

When someone lands on this site, they should feel the same thing they feel when they walk through the door at Communal Market: warm, welcome, and glad they came.
