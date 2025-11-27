## Part D – AI Usage & Reflection

| Prompt Requirement | Response |
| --- | --- |
| **Which parts used AI?** | Asked AI to suggest component boilerplates (Hero/ArticleCard shells), brainstorm Tailwind class stacks for responsive grids, and help word Hindi summaries/taglines so copy felt newsroom-like. Also used AI to propose an outline for the docs set. |
| **Where was AI wrong or suboptimal?** | It pushed for `useEffect` polling + client caches, which clashes with the App Router’s server-component-first approach, and repeatedly suggested overly saturated gradients plus 5–6 utility repetitions that bloated the CSS. |
| **How were AI snippets verified/corrected?** | Every snippet was reviewed in-context before pasting. Anything stateful was rewritten into server utilities (`getArticles`, `getGroupedArticles`). After integration, ran `npm run lint` and `npm run dev`, checked TypeScript in VSCode, and inspected layouts in Chrome responsive mode. |
| **Custom work beyond AI output** | Crafted the final layout hierarchy, Hindi typography stack, mock data set, server-only helpers, dynamic routing, loading/error boundaries, documentation (design/testing), and testing plan manually—AI suggestions served only as starting points that were heavily edited. |

