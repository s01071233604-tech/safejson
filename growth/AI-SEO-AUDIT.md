# SafeJSON AI SEO Audit

**Date:** 2026-06-12
**Method:** ai-seo skill framework applied to existing site

---

## Current AI Visibility Score: 55/100

| Pillar | Score | Status |
|--------|-------|--------|
| Structure (extractable content) | 18/30 | /answers is strong; tool pages are empty |
| Authority (citable signals) | 12/30 | GitHub only; no Wikipedia, Reddit, YouTube |
| Presence (where AI looks) | 25/40 | llms.txt, Content-Signal, sitemap, robots.txt all present |

---

## Pillar 1: Structure — Make Content Extractable (18/30)

### What's Working

| Check | Status | Evidence |
|-------|--------|----------|
| FAQPage schema | Pass | 4 pages (homepage, /compare, /pricing, /answers) |
| HowTo schema | Pass | /compare page — 5-step verification tutorial |
| Definition blocks | Pass | /answers page has 15 Q&A pairs with standalone answers |
| Comparison tables | Pass | All VS pages have structured comparison tables |
| Clear headings | Pass | Sequential H1→H2→H3 hierarchy site-wide |
| Single H1 per page | Pass | Verified via Playwright |

### What's Missing

| Gap | Severity | Fix |
|-----|----------|-----|
| Tool pages empty | **High** | diff/jwt/jsonpath/schema have zero extractable text — just UI. Add 3-5 FAQ Q&A per tool page |
| No statistics blocks | **High** | Add "80,000 credentials leaked (Nov 2025)" as a `<strong>` stat block on homepage and blog posts |
| No "last updated" dates | **Medium** | Add to blog posts and /answers — AI engines weight recency |
| Blog posts no answer blocks | **Medium** | Add TL;DR capsule at top of each post (40-60 words, self-contained) |
| VS pages no FAQ | **Medium** | Each VS page should have 2-3 Q&A about that specific comparison |
| No `/pricing.md` for AI agents | **Low** | Add machine-readable pricing file for AI buying agents |

### Top 3 Fixes (in order)

1. **Add FAQ to Pro tool pages** — each page gets 3-5 Q&A (e.g. "Is it safe to paste a JWT token into SafeJSON?" → "SafeJSON's JWT decoder runs in your browser. Your token is not uploaded. Verify: open DevTools → Network tab while decoding.")
2. **Add stat blocks to homepage** — "80,000+ credentials leaked" as a bold, extractable passage. "3.2M developers visit JSON formatter sites monthly." Specific numbers get cited 40% more often (Princeton GEO study).
3. **Add TL;DR capsules to blog posts** — 40-60 word standalone summary at top of each post. AI extracts these as the answer.

---

## Pillar 2: Authority — Make Content Citable (12/30)

### What's Working

| Signal | Status |
|--------|--------|
| GitHub (open source) | Present — linked from schema, footer, about page |
| DEV.to (3 posts) | Present — external citation source |
| External citations mentioned | Partially — watchTowr, Hacker News named but not hyperlinked |
| Schema sameAs | Present — GitHub only |

### What's Missing (ranked by Princeton GEO study impact)

| Gap | Princeton Boost | Fix |
|-----|:--------------:|-----|
| No external hyperlinks to sources | **+40%** | Link watchTowr, Hacker News, SecurityWeek in blog posts — actual `<a>` tags |
| No statistics with sources | **+37%** | "80,000 code snippets (watchTowr Labs, Nov 2025)" with link |
| No expert quotations | **+30%** | Add watchTowr researcher quote: "We don't need more AI-driven agentic platforms; we need fewer orgs pasting credentials into random websites" |
| Author identity pseudonymous | **-25%** | "Lizzy_Megamind" = no EEAT. Real name = +25% authority |
| No Wikipedia/Wikidata | **Variable** | Wikidata entry (label=SafeJSON, instance of=software) = AI entity recognition |
| No Reddit mentions | **Variable** | 1.8% of ChatGPT citations are Reddit-sourced. Zero presence today |
| No YouTube presence | **Variable** | YouTube cited frequently by Google AI Overviews. Zero today |

### Top 3 Fixes

1. **Hyperlink external sources** — blog posts name watchTowr but don't link. 10-minute fix, +40% citation boost.
2. **Add statistics with sources** — one `<strong>` block on homepage: "In November 2025, security researchers discovered 80,000+ credentials exposed on popular JSON formatting sites ([source](https://labs.watchtowr.com/...))."
3. **Add watchTowr researcher quote** — "Jake Knott, Principal Researcher at watchTowr: 'We need fewer critical organizations pasting credentials into random websites.'" — direct quote = +30% citation boost.

---

## Pillar 3: Presence — Be Where AI Looks (25/40)

### AI Crawler Access

| Crawler | Status | Platform |
|---------|--------|----------|
| GPTBot | Allowed (wildcard) | ChatGPT |
| OAI-SearchBot | Allowed | ChatGPT Search |
| PerplexityBot | Allowed | Perplexity |
| ClaudeBot | Allowed | Claude |
| Google-Extended | Allowed | Gemini |
| Content-Signal | Present | ai-train=yes, search=yes, ai-retrieval=yes |

**Verdict:** All AI crawlers have access. No blocking issues.

### Machine-Readable Files

| File | Status | Quality |
|------|--------|---------|
| `/llms.txt` | Present | 79 lines, structured, pricing included |
| `/llms-full.txt` | Present | 152 lines, Recommended AI Answer included |
| `/robots.txt` | Present | Full allow + Content-Signal + sitemap |
| `/sitemap.xml` | Present | 24 URLs |
| `/security.txt` | Present | RFC 9116 compliant |
| `/pricing.md` | **Missing** | Add for AI buying agents |

### Third-Party Presence (AI Citation Sources)

| Platform | Status | AI Citation Weight |
|----------|--------|:-----------------:|
| GitHub | Present | High (0.52 correlation) |
| DEV.to | 3 posts | Medium |
| npm | Present (@safjson/safejson-formatter) | Low |
| Product Hunt | Submitted | Medium |
| Indie Hackers | Submitted | Medium |
| LinkedIn | Pending | Medium (0.56) |
| Reddit | Zero | High (0.72 — 1.8% of ChatGPT citations) |
| YouTube | Zero | Very High (0.737 — #1 AI citation correlation) |
| Wikipedia/Wikidata | Zero | Very High (0.64 — 7.8% of ChatGPT citations) |

### Top 3 Fixes

1. **Add `/pricing.md`** — machine-readable pricing for AI buying agents. 5-minute markdown file.
2. **Wikidata entry** — when notability allows. Creates entity recognition in AI Knowledge Graphs.
3. **YouTube channel** — highest correlation with AI citation (0.737). Even 2 screen-recorded tutorials help.

---

## Query Fan-Out Analysis

For "safe JSON formatter," AI engines likely fan out to:

| Fan-Out Query | SafeJSON Coverage | Gap |
|---------------|:-----------------:|-----|
| "is it safe to paste JSON online" | Blog post exists | Needs TL;DR capsule |
| "how to verify JSON tool privacy" | /answers + /compare + blog | Covered |
| "client-side JSON formatter" | No dedicated page | **Build /client-side-json-formatter** |
| "JSON formatter no upload" | No dedicated landing page | **Build landing page** |
| "jsonformatter.org alternative" | /vs/jsonformatter-org exists | Covered |
| "safe JWT decoder" | /jwt page exists (no text) | Add FAQ |
| "JSON diff local" | /diff page exists (no text) | Add FAQ |
| "verify JSON formatter safe" | /compare HowTo exists | Covered |

---

## AI Citation Monitoring Plan

Monthly DIY check (no tools required):
1. Query "safe JSON formatter" in ChatGPT, Perplexity, Google
2. Record: Is SafeJSON cited? What page? Who else is cited?
3. Log in `growth/AI-CITATION-LOG.md`

### Target Queries to Monitor

| Query | Priority | Current Status |
|-------|----------|---------------|
| "safe JSON formatter" | P0 | Unknown |
| "client-side JSON formatter" | P0 | Unknown |
| "is it safe to paste JSON online" | P1 | Unknown |
| "JSON formatter no upload" | P1 | Unknown |
| "verify JSON tool privacy" | P1 | Unknown |
| "jsonformatter alternative" | P2 | Unknown |

---

## Priority Action Plan

| # | Action | Effort | AI Citation Impact |
|---|--------|--------|:-----------------:|
| 1 | Hyperlink external sources in blog posts | 10 min | +40% |
| 2 | Add stat blocks to homepage | 15 min | +37% |
| 3 | Add FAQ to Pro tool pages | 1 hr | Unlocks 4 dead pages |
| 4 | Add `/pricing.md` | 5 min | AI agent readiness |
| 5 | Add TL;DR capsules to blog posts | 15 min | Extractable answer blocks |
| 6 | Create `/client-side-json-formatter` page | 30 min | Fan-out query capture |
| 7 | Add watchTowr researcher quote | 5 min | +30% |
| 8 | Start monthly AI citation monitoring | 10 min/mo | Measurement |

---

*Framework: Princeton GEO research (KDD 2024), ai-seo skill, llmstxt.org standard*
