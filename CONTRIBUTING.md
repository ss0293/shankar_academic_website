# Contributing

Thank you for your interest in this repository. This is primarily Shankar
Sharma's personal academic website and research portfolio, but I welcome
small, focused contributions — particularly:

- typo / spelling / grammar fixes
- broken-link or DOI corrections
- accessibility improvements (alt text, contrast, keyboard navigation)
- minor visual polish that fits the existing design system

For larger changes (new pages, design overhauls, new dependencies), please
open an issue first to discuss.

---

## Ground rules

1. **Be respectful.** This project follows the [Code of Conduct](CODE_OF_CONDUCT.md).
2. **Stay scoped.** Pull requests that try to do too much at once will be
   asked to be split.
3. **No invented content.** Do not add publications, talks, grants, or
   affiliations that are not already documented in this repository or in
   `Shankar_Sharma_CV.docx`.
4. **Respect both licences.** Code contributions are accepted under MIT;
   text/content contributions are accepted under CC-BY-4.0. By submitting a
   pull request you agree to license your contribution accordingly.

---

## Repository layout

```text
.
├── index.html            # Home page (hero, themes, recent pubs, timeline)
├── research.html         # Long-form research themes
├── projects.html         # Project showcase
├── publications.html     # Full publication list
├── news.html             # Talks, awards, service
├── cv.html               # Structured CV view + download
├── contact.html          # Contact details and profiles
├── 404.html              # Custom not-found page
├── assets/
│   ├── css/style.css     # Design system / theme tokens / components
│   ├── js/main.js        # Theme toggle + active nav highlight
│   └── favicon.svg
├── figures/              # Figure gallery placeholder
├── notebooks/            # Analysis notebooks (per chapter)
├── data/                 # Dataset descriptions (no large data committed)
├── scripts/              # Helper scripts
└── .github/              # Issue / PR templates and Pages workflow
```

---

## Setting up locally

The site is intentionally dependency-free static HTML. To preview locally:

```bash
# any one of these works
python3 -m http.server 8080
# or
npx serve .
```

Then open <http://localhost:8080/>.

---

## Style guide

- **HTML** — semantic landmarks (`<header>`, `<main>`, `<footer>`,
  `<nav>`, `<section>`); always include `lang="en"` and a meta
  description.
- **CSS** — use the variables defined in `:root` in
  `assets/css/style.css`. Do not hard-code colours. Honour `data-theme="dark"`.
- **Accessibility** — all interactive elements must be keyboard reachable;
  `aria-label` for icon buttons; contrast ratio ≥ 4.5 : 1 for body text.
- **Citations / DOIs** — always link DOIs as `https://doi.org/<doi>`.
- **Tone** — academic, neutral, evidence-based. No marketing voice.

---

## Submitting a pull request

1. Fork the repository.
2. Create a feature branch: `git checkout -b fix/typo-publications`.
3. Make focused, well-commented commits.
4. Open a pull request describing **what** changed and **why**.

If your PR addresses an open issue, include `Closes #<issue-number>` in the
description.

---

## Reporting issues

Please use the [issue templates](./.github/ISSUE_TEMPLATE/). For broken
links or factual inaccuracies, include the file and line number.

---

## Thanks

This site benefits from the open-source community's work — fonts, design
patterns, and best practices from many academic websites. Suggestions are
always welcome.
