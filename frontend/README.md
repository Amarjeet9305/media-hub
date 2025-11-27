## LiveHindiस्ट्रीट – Next.js Front Page

This project mimics the LiveHindustan front page using the Next.js App Router, Tailwind CSS, and mock news data. It demonstrates dynamic article routing, image optimization, responsive layout decisions, and full documentation for the assignment’s Parts A–D.

### Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS with custom tokens
- Next `<Image>` for optimized media
- Server-only data helpers using memoized mock JSON (ISR enabled via `revalidate`)

### Local Development
```bash
cd frontend
npm install
npm run dev
```
Visit `http://localhost:3000` for the home page and `http://localhost:3000/articles/<slug>` for individual stories. Run `npm run lint` before submitting.

### Project Structure
```
src/
  app/                # App Router pages, layouts, loading/not-found states
  components/         # UI building blocks (Hero, cards, header/footer, states)
  data/               # Mock Hindi news dataset
  lib/                # Server-only helpers for fetching/grouping
  types/              # TypeScript models
docs/
  design.md           # Part B: wireframe, layout, data strategy, component notes
  testing.md          # Part C: edge cases + manual test plan
  ai-reflection.md    # Part D: AI usage log
```

### Key Requirements Covered
- **Dynamic routing**: `/articles/[slug]` with metadata + related stories.
- **Next.js features**: App Router, server components, ISR (`revalidate = 300`), `<Image>`.
- **Responsive UI**: Hero, spotlight grid, category strips, trending sidebar.
- **Error / loading states**: Dedicated skeleton UIs, empty/error fallbacks, 404 handling.
- **SEO touches**: Route-level metadata, OG tags for articles, Hindi typography via `next/font`.

### Documentation
1. `docs/design.md` – Wireframe, layout rationale, data fetching justification, component + data explanations, challenges, improvements.
2. `docs/testing.md` – Required edge cases and manual checklist.
3. `docs/ai-reflection.md` – AI assistance log per assignment instructions.

### Future Enhancements
- Replace mock data with a NewsAPI feed and on-demand revalidation hooks.
- Add search, filters, and personalization.
- Emit structured data (JSON-LD) and share cards for richer SEO previews.
