# JimmyWang0417.github.io

Personal homepage for Junrui Wang (王君睿).

- Live: https://jimmywang0417.github.io/
- Stack: static `index.html` + `css/` + `js/` (no framework build)
- Optional assemble step: `bash scripts/build.sh` copies the deployable tree into `public/` for GitHub Pages Actions
- Content mirrored from resume facts in the `cv` repository

## Preview locally

```bash
cd "/home/jimmywang0417/Git Repositories/JimmyWang0417.github.io"
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/ (or open `index.html` directly).

Language defaults to English. Use the header switch, or `?lang=zh` / `?lang=en`. Choice is stored in `localStorage`.

## Design

See [docs/2026-10-16-personal-homepage-design.md](docs/2026-10-16-personal-homepage-design.md).

Approved constraints: single-column sticky header, no face/photo/avatar (JW mark only), light cool-gray paper + ink-blue accent, bilingual EN/中文.
