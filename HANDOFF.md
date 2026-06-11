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
- Add an OG share image (simple specimen-card graphic, no stock photos).
- Check HTTPS status in GitHub Pages after DNS propagation.

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

