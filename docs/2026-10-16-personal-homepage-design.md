# Personal Homepage Design — 2026-10-16

Approved plan for https://jimmywang0417.github.io/

## Approach

Plain static single page: `index.html` + `css/styles.css` + `js/*.js`. No framework build step.
Optional `scripts/build.sh` assembles `public/` for GitHub Pages Actions.

## Sections (order)

1. About
2. Education
3. Experience
4. Projects / Open Source
5. Awards
6. Links

## Chrome

- Sticky header: geometric initials mark (JW) · name · section anchors · EN | 中文
- Default language: English
- Persist choice in `localStorage`; honor `?lang=zh` / `?lang=en`
- No face / photo / avatar

## Visual

- Light cool-gray paper background, near-black text
- Single ink-blue accent (`#345A7C`)
- Typography: Source Serif 4 (display) + Source Sans 3 (body)
- Single column, restrained motion (language fade, active-section underline)
- Avoid purple gradients, cream+serif terracotta, and dark-mode-first layouts

## Content rules

- Facts from the resume repo (`content/data.typ` and narrative modules)
- Mirror resume claims; no invented publications
- Label GitHub stars/forks as project-level metrics
- XJTUToolBox role: Project Collaborator (maintenance, review & PR merge) — not Maintainer
- Do not present unmerged PRs as adopted
- Public email on site; internship evaluation 「优秀」 included because it appears on the public resume
- Links: GitHub, ORCID, email, blog; ORCID also in footer

## Out of scope

- ORCID profile edits (handled separately)
