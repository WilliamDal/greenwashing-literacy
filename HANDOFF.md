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

High-value next steps:

- Add a stronger interactive claim-lab workflow with user-selected observations.
- Add a claim rewrite practice area that produces a transparent rewritten claim.
- Improve mobile density and section rhythm.
- Add a printable educator worksheet.
- Add regulator-validated case examples with careful wording.
- Add a small glossary for terms such as scope, baseline, offset, lifecycle and
  climate delay.
- Add structured metadata for search previews.
- Check HTTPS status in GitHub Pages after DNS propagation.

## Future Codex Session Prompt

Start a future session with:

> Read `HANDOFF.md` first. Continue improving the Greenwashing Literacy static
> site in this folder only. Preserve DNS/email assumptions, keep the site static
> and public-facing, and push approved improvements to GitHub Pages.

