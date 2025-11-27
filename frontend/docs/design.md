## LiveHindiस्ट्रीट – Design & Code Notes

### Wireframe Snapshot

```
┌──────────────────────────── Hero (Breaking) ────────────────────────────┐
│ [Full width image + gradient overlay + headline + CTA]                  │
└─────────────────────────────────────────────────────────────────────────┘
┌──────────── Spotlight Grid (2 columns) ────────────┐┌────── Trending ───┐
│ [Card 1] [Card 2]                                  ││ 1. Headline       │
│ [Card 3] [Card 4]                                  ││ 2. Headline       │
└────────────────────────────────────────────────────┘└───────────────────┘
┌──────────── Category Blocks (3-up grids) ───────────────────────────────┐
│ Business | Sports | Technology | Health | Entertainment | Faith         │
│ Each block → 3 compact cards                                            │
└─────────────────────────────────────────────────────────────────────────┘
```

### Layout Decisions
- **Hero dominance**: LiveHindustan highlights one marquee story, so the hero spans full width with badges for breaking news.
- **Two-column mid-section**: Desktop breakpoint keeps spotlight stories in a dense grid while reserving the right rail for the trending list to mimic print-front hierarchy.
- **Category clusters**: Repeating three-up grids keep scanning predictable on both mobile (stacked) and desktop (multi-column).
- **Sticky header & muted background**: Keeps nav accessible while letting cards float above a soft sandstone gradient seen on many Hindi portals.

### Data-Fetching Strategy
- **Choice**: Incremental Static Regeneration via `export const revalidate = 300` in both the home and article routes.
- **Why**: News front pages need regular refresh, but server-rendering every request is unnecessary with mock/static data. ISR re-builds pages every 5 minutes without full redeploys, keeping them cache-friendly and fast worldwide.
- **Trade-offs**: Slight delay before new content appears (up to the revalidation window). If true real-time breaking updates were required, we would switch to `getServerSideProps`/server actions or add on-demand revalidation hooks.

### Component & Data Model Overview
- **Layout**: `SiteHeader`, `SiteFooter` wrap every page.
- **Home modules**: `HeroArticle`, `ArticleCard`, `TrendingList`, `CategorySection`, and `StateCard` for fallbacks.
- **Article view**: `ArticleBody` + reused compact cards for “related stories”.
- **Data access**: `getArticles`, `getGroupedArticles`, `getArticleBySlug` (server-only helpers that simulate latency, memoized with `cache` to mimic ISR caching).
- **Article shape** (`src/types/article.ts`): `id`, `slug`, `title`, `summary`, `content[]`, `category`, `author`, `publishedAt`, optional `imageUrl`, tags, and flags (`featured`, `breaking`). This mirrors what a real CMS feed would expose and makes filtering straightforward.

### Challenges & Resolutions
- **Image availability**: Articles without images fall back to a remote placeholder (allowed in `next.config.ts`). This satisfied the Part C “missing image” case.
- **Error/empty states inside server components**: Server components cannot use hooks, so `page.tsx` wraps data fetching in `try/catch` and returns a `StateCard` tree instead of throwing.
- **Hindi typography**: Added `Noto_Sans_Devanagari` globally to avoid tofu glyphs and keep copy legible on every platform.

### Future Improvements
- Integrate a real API route (NewsAPI) with search & pagination, then gate it behind environment variables.
- Add client-side filters (state dropdowns, category tabs) with React Server Components + partial hydration.
- Introduce structured data (JSON-LD for articles) and integrate a/c/b testing for hero ordering.



