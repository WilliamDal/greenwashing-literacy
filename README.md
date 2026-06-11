# The Greenwashing Literacy Project

The public website of The Greenwashing Literacy Project — a free educational
initiative that helps people read sustainability claims, climate-delay
framings and green communication more critically.

Live at **https://greenwashingliteracy.com**.

## Stack

Static files only — no build step, no analytics, no cookies, no external
scripts or fonts.

| File | Purpose |
| --- | --- |
| `index.html` | The whole site: content, inline logo SVG, print worksheet |
| `styles.css` | Visual system, layout, responsive and print rules |
| `script.js` | Claim lab, delay-family quiz, rewrite lab, scroll reveal (content lives in data objects at the top) |
| `404.html` | Branded not-found page |
| `og-image.png` | Social share preview (1200×630) |
| `CNAME` | Custom domain for GitHub Pages |
| `robots.txt` / `sitemap.xml` | Search-engine basics |
| `HANDOFF.md` | **Read this first** — durable handoff for future working sessions |

## Publishing

Hosted on GitHub Pages from the `main` branch. Every commit to `main`
redeploys the site in about a minute. The domain is registered at Squarespace,
whose DNS points to GitHub Pages; HTTPS is enforced.

## Editing rules (short version)

- Bump the `?v=N` query on the CSS/JS links in `index.html` when either file
  changes.
- Keep practice claims fictional unless a case is regulator-validated.
- Keep British English, the two-ink editorial look, and the institutional
  voice ("the project ...").
- Full conventions, content boundaries and backlog: see `HANDOFF.md`.
