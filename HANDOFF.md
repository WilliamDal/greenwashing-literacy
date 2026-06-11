# Greenwashing Literacy Handoff

This file is the durable operating guide for future work on the Greenwashing
Literacy website. Read it first when a new Codex session starts, especially if
the conversation has been compacted.

## Project Identity

- Public site: https://greenwashingliteracy.com
- GitHub repository: https://github.com/WilliamDal/greenwashing-literacy
- GitHub owner: WilliamDal
- Default branch: main
- Hosting: GitHub Pages from the repository root
- Domain registrar/DNS UI: Squarespace Domains
- Local workspace: `/Users/william/Desktop/邓紫恒/Greenwashing Literacy`

The site is a public-facing educational resource, not a dissertation
recruitment page. It may lightly mention the dissertation origin, but the main
experience should help students, educators and the public read sustainability
claims more critically.

## Current Technical Shape

- Static files only: `index.html`, `styles.css`, `script.js`
- No build system
- No analytics, cookies, tracking pixels or external scripts
- No external font dependency
- Local diagrams should be inline SVG or CSS unless a project asset is
  intentionally added
- Keep British English spelling

### Where the interactive content lives (since v3)

All practice content is data, not markup. Edit these objects at the top of
`script.js`:

- `LAB_CASES` — the three claim-lab cards. Each lens has three options with a
  `verdict` of `strongest`, `partial` or `weak` plus feedback text. Options are
  shuffled on render. When all four lenses are answered, a summary with the
  possible delay family appears.
- `QUIZ_ITEMS` / `QUIZ_FAMILIES` — the six-statement "Spot the family" quiz in
  the climate-delay section, with first-try scoring.
- The rewrite lab sentences live in `initialiseRewriteLab` (`parts` object),
  with a four-segment strength meter.

Other systems in `script.js`: hero specimen lens chips (highlight `.spec-part`
spans in `index.html`), scroll-reveal via IntersectionObserver (`.reveal`
class), nav section highlighting, and the print worksheet
(`data-print-worksheet` button adds `print-worksheet` to `<body>` and calls
`window.print()`; the worksheet markup is the `.worksheet` section at the end
of `index.html`, print CSS at the end of `styles.css`).

Cache-busting: bump `?v=N` on the CSS/JS links in `index.html` whenever either
file changes.

### Brand identity (June 2026 rebrand)

- Name: **The Greenwashing Literacy Project** — positioned as an independent
  educational initiative (reference point: The Carbon Literacy Project), NOT a
  personal/student site. Keep the institutional voice ("the project ...").
- Personal info policy, set by William: only "Founded by Ziheng Deng" appears;
  no supervisor, no university email. Origin is described as "grew out of
  postgraduate education research at the University of Manchester".
- Public contact: william@greenwashingliteracy.com (domain email).
- Logo: **"the four-lens grid"** — three dark-purple outlined squares (the
  questions) and one sage-green filled square rotated 8° (the green claim that
  doesn't sit straight). Chosen by William after three rounds; earlier rejected
  marks: cartoon magnifier ("too cartoonish"), peeled-corner square ("file-icon
  cliché"). Design rules learned: marks must come from the method itself, look
  like ink on paper (editorial, not app-icon), two inks max, drawn as paths
  (no font dependence). It lives in two places in `index.html`: the inline
  `<svg class="brand-logo">` in the header and the URL-encoded favicon data
  URI in `<head>`. Edit both together.
- Never fabricate testimonials, partner logos, user statistics or charity
  status to look more institutional. Credibility comes from definitions,
  method and sourcing.

The site should continue to work by opening `index.html` directly, although
using a tiny local server is better for testing.

## Deployment Workflow

1. Edit files in this folder only.
2. Test locally.
3. Commit changes to git.
4. Push `main` to GitHub.
5. GitHub Pages publishes automatically.

Useful checks:

```bash
git status --short
git log --oneline -5
curl -I http://greenwashingliteracy.com
```

If HTTPS is already enabled later, also check:

```bash
curl -I https://greenwashingliteracy.com
```

## DNS Records To Preserve

Do not remove Google Workspace email records.

Important records:

- `MX @ smtp.google.com`
- `TXT @ v=spf1 include:_spf.google.com ~all`
- `TXT google._domainkey ...`

GitHub Pages records:

- `A @ 185.199.108.153`
- `A @ 185.199.109.153`
- `A @ 185.199.110.153`
- `A @ 185.199.111.153`
- `CNAME www williamdal.github.io`

Squarespace may also keep `_domainconnect` records. Leave them unless there is
a clear reason to change them.

## Design Direction

Use the forensic clarity style:

- Warm off-white paper background
- Deep Manchester-like purple for inquiry and authority
- Muted sage green for sustainability-claim countercolour
- Charcoal text
- Hairline rules, specimen cards, annotations, small mono labels
- Evidence table, field notebook, annotated lab sheet mood

Avoid:

- Generic green eco imagery
- Leaves
- Stock photos
- Gradient blobs
- Decorative noise
- Corporate sustainability gloss
- Activist-shouty tone
- Consumer shaming

The page should feel calm, rigorous and inviting. Scrutiny is the point, not
cynicism.

## Content Boundaries

Do not claim the resource gives legal advice.

Do not accuse named companies unless referring carefully to public
regulator-validated or peer-reviewed cases.

Do not overclaim that a short workshop creates transformation.

Use fictional examples for practice cards unless a real case is carefully
sourced.

Keep the original project note understated:

> This resource grew out of an MA Education for a Sustainable Environment
> dissertation project at the University of Manchester exploring critical
> greenwashing literacy among MA students.

Contact details:

- Ziheng Deng
- ziheng.deng@student.manchester.ac.uk
- Supervisor: Dr Susan Brown

## Future Improvement Backlog

Done in v3 (June 2026): user-selected claim-lab observations, delay-family
quiz, rewrite lab with strength meter, glossary, printable educator worksheet,
JSON-LD metadata, scroll-reveal and nav highlighting.

High-value next steps:

- Consider a downloadable PDF version of the educator worksheet.

Done June 2026: og-image.png (generated with PIL from the logo geometry —
regenerate if the logo changes), branded 404.html, robots.txt + sitemap.xml
(bump `lastmod` on meaningful content changes), README rewritten for the
project brand, HTTPS enforced and verified.

Done since: ASA Shell UK ruling (June 2023, upheld in part) added to Resources
as the regulator-validated case; de Freitas Netto et al. (2020) added.

## Dissertation Alignment Notes

The dissertation lives in the separately mounted folder
`/Users/william/Desktop/邓紫恒/MA Courses/Dissertation` (read-only — never edit
it from this project). Key alignment facts, from Ch1–2 (June 2026 drafts):

- Three anchors: M = critical media literacy (Hobbs 2010; Eng et al. 2021),
  D = climate-delay discourses (Lamb et al. 2020), T = transformative learning
  and affective pedagogy (Mezirow; Bryan 2020; Ojala 2016).
- The dissertation calls the tool the "four-prompt tool"; the site uses
  "four-question tool" deliberately as plainer public language. Same four
  prompts: what is claimed / what evidence / what is omitted / what future is
  normalised.
- Workshop arc: four prompts → name the delay family → rewrite or public
  scrutiny question (a small efficacy experience, after Bandura). The site's
  Claim Lab → quiz → rewrite lab mirrors this arc.
- Teaching case: ASA Shell UK ruling (2023) is the regulator-validated case;
  scored task uses fictional scenarios — matching the site's fictional cards.
- Tone rule from the dissertation: avoid cynicism; end constructively; treat
  emotion as data, not noise; no consumer shaming.

Verification note: the Chrome extension cannot open `file://` URLs, so verify
changes on the live site after pushing, at desktop and ~390px widths, and check
the console for errors.

## How This Site Works (plain-language, for William)

- **Squarespace** is only the domain registrar: it owns the "address"
  greenwashingliteracy.com and points it at GitHub's servers (DNS). The site
  is never edited there. The only thing to do on Squarespace is renew the
  domain each year.
- **The GitHub repo** (WilliamDal/greenwashing-literacy) is the website
  itself: `index.html` + `styles.css` + `script.js` are the whole site.
  Changing the site = changing these files and committing.
- **GitHub Pages** turns the repo into the public website automatically,
  about a minute after each commit to `main`.
- **HTTPS**: fixed June 2026. The TLS certificate stalled for ~11h after
  first setup; removing and re-adding the custom domain in repo Settings →
  Pages re-triggered issuance. "Enforce HTTPS" is now ON, so http requests
  redirect to https. If a browser tab still shows "Not Secure" with a valid
  certificate, it is a stale tab loaded before the cert existed — reload it.
- DNS at Squarespace is correct (apex A records → GitHub Pages IPs, www CNAME
  → williamdal.github.io). Do not change it.

## Git State Note (June 2026 session)

The Cowork sandbox has no GitHub credentials, so publishing happens by
uploading changed files through the GitHub web UI (with William's confirmation
for each commit). After each web commit, re-sync the local repo to origin
(`git fetch && git reset --hard origin/main`) — this can be run on William's
Mac via the Control-your-Mac osascript tool if the sandbox cannot write to
`.git`. Always sync local AFTER the remote has the final state, never before
uncommitted local work has been uploaded.

## Future Codex Session Prompt

Start a future session with:

> Read `HANDOFF.md` first. Continue improving the Greenwashing Literacy static
> site in this folder only. Preserve DNS/email assumptions, keep the site static
> and public-facing, and push approved improvements to GitHub Pages.

