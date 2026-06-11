# Greenwashing Literacy

A standalone static website for the public-facing educational resource "Greenwashing Literacy".

## Open locally

Open `index.html` in any modern browser. The site does not need a build step, server, cookies, analytics or external scripts.

## Publish

This site is designed for GitHub Pages with the custom domain `greenwashingliteracy.com`. The `CNAME` file tells GitHub Pages which public domain to serve.

After GitHub Pages is enabled, point the Squarespace DNS website records to GitHub Pages while keeping Google Workspace email records unchanged.

## Files

- `index.html` contains the page content and inline SVG hero diagram.
- `styles.css` contains the visual system, layout and responsive rules.
- `script.js` controls the claim lab tabs, reveal panels and rewrite exercise.
- `CNAME` sets the public custom domain for GitHub Pages.
- `HANDOFF.md` is the durable project handoff for future Codex sessions.

## Editing later

Most text can be edited directly in `index.html`. The main sections are marked with readable `id` values such as `greenwashing`, `tool`, `claim-lab`, `educators`, `resources` and `faq`.

To adjust the visual identity, start with the colour and spacing variables at the top of `styles.css`. The site uses system fonts and local code only, so it will remain portable.

When adding new examples, keep them fictional unless you are using a carefully sourced or regulator-validated case. This keeps the resource focused on public communication analysis rather than accusation.

For future maintenance, read `HANDOFF.md` first. It records the deployment setup, DNS records to preserve, design direction, content boundaries and improvement backlog.
