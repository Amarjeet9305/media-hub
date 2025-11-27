## Part C – Testing & Edge Cases

| Scenario | Expected Behaviour | How to Verify |
| --- | --- | --- |
| Article missing `imageUrl` | `ArticleCard`/`ArticleBody` render `placehold.co` fallback while preserving layout | Set `imageUrl: null` (e.g. article `startups-eye-tier-2-india`) and load home + article detail |
| API returns no articles | Home page shows “No news available” `StateCard` | Temporarily return `[]` from `getGroupedArticles` and reload |
| Fetch failure / rejected promise | Home page shows error `StateCard` with retry guidance | Throw inside `getGroupedArticles` to simulate failure |
| Long headlines or summaries | Text wraps via `line-clamp` utilities; cards keep fixed height | Adjust `title` to >120 chars and confirm grid integrity |
| Loading state | `/loading.tsx` and route-level loading indicators show shimmering skeletons | Refresh with throttled network (Chrome devtools) |
| 404 article slug | `/articles/bad-slug` hits `not-found.tsx` and links back home | Visit invalid slug |

### Manual Regression Checklist
- [ ] Desktop (≥1024px) layout shows hero + two column grid + sidebar simultaneously.
- [ ] Mobile (≤640px) stacks hero, cards, and trending blocks without horizontal scroll.
- [ ] `<Image>` components load remote Unsplash images successfully (domain allowlist).
- [ ] Metadata updates per route (inspect `<head>` in devtools).
- [ ] ESLint + `npm run lint` passes.



