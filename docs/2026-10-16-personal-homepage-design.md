# Personal Homepage Design — 2026-10-16

Approved plan for https://jimmywang0417.github.io/

## Approach

Plain static single page: `index.html` + `css/styles.css` + `js/i18n.js` + `js/main.js`.

Deployment follows the team homepage (`clyzcst.github.io`): **`master` holds source only**; `scripts/build.sh` assembles `public/` (gitignored); GitHub Actions uploads `public/` as a Pages Artifact via `deploy-pages.yml`. No `gh-pages` branch.

## Sections (order)

1. About
2. Education
3. Experience
4. Projects / Open Source
5. Awards
6. Links

## Chrome

- Sticky header: geometric initials mark · name · section anchors · EN | 中文
- Default language: English
- Persist choice in `localStorage`; honor `?lang=zh` / `?lang=en`
- No face / photo / avatar

## Visual

- Light cool-gray paper background, near-black text
- Single ink-blue / slate-teal accent (`#345A7C`)
- Typography: Source Serif 4 (display) + Source Sans 3 (body) via Google Fonts — not Inter / Roboto / Arial / system stacks
- Single column, restrained motion (language fade, active-section underline)
- Explicitly avoid purple gradients, cream+serif terracotta, and dark-mode-first layouts

## Content rules

- Facts from the resume repo (`content/data.typ` and narrative modules)
- Mirror resume claims; no invented publications
- Label GitHub stars/forks as project-level metrics
- Prefer internship-variant open-source bullets on the homepage (merged Mooncake / Axolotl / Haystack); do not present unmerged PRs as adopted
- XJTUToolBox role: Project Collaborator (maintenance, review & PR merge) — not Maintainer
- Public email on site; internship evaluation included because it appears on the public resume
- Links: GitHub, ORCID, email, blog; ORCID also in footer
- Content column: ~60rem (`--max`) so the page uses more of the viewport while staying single-column

## Password generator (hosted, not featured)

- Host static mirror at `/password-generator/` from upstream `zoegea/password-generator` (third-party; not a JimmyWang0417 fork)
- Keep current via `.github/workflows/sync-password-generator.yml` (`schedule` + `workflow_dispatch` + workflow path push)
- Do not list in homepage Projects or Links

## Out of scope

- ORCID profile edits (handled separately)
- Build tooling, frameworks, CMS
