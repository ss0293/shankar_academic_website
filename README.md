<div align="center">

# Shankar Sharma — academic website & research portfolio

**Urban climate · Satellite precipitation · Convection-permitting WRF · Local Climate Zones**

PhD Candidate · [Climate Change Research Centre (CCRC)](https://www.ccrc.unsw.edu.au/) · [UNSW Sydney](https://www.unsw.edu.au/) · [ARC Centre of Excellence for Climate Extremes](https://climateextremes.org.au/)

[![License: MIT](https://img.shields.io/badge/code-MIT-0d5e6f?style=flat-square)](LICENSE)
[![License: CC BY 4.0](https://img.shields.io/badge/content-CC--BY--4.0-e2902c?style=flat-square)](LICENSE-CC-BY-4.0)
[![GitHub Pages](https://img.shields.io/badge/site-live-0d5e6f?style=flat-square&logo=github)](https://ss0293.github.io/shankar_academic_website/)
[![Made with HTML5](https://img.shields.io/badge/built%20with-HTML%2FCSS-e2902c?style=flat-square&logo=html5&logoColor=white)](#)
[![ORCID](https://img.shields.io/badge/ORCID-0000--0001--7008--5757-A6CE39?style=flat-square&logo=orcid&logoColor=white)](https://orcid.org/0000-0001-7008-5757)
[![Google Scholar](https://img.shields.io/badge/Google%20Scholar-profile-4285F4?style=flat-square&logo=google-scholar&logoColor=white)](https://scholar.google.com/citations?user=gjTxjbgAAAAJ&hl=en)

[**Live site →**](https://ss0293.github.io/shankar_academic_website/) ·
[Research](./research.html) ·
[Projects](./projects.html) ·
[Publications](./publications.html) ·
[CV](./cv.html) ·
[Contact](./contact.html)

</div>

---

## About

This repository powers my personal academic website, hosted with GitHub
Pages. It documents my research on **urban climate, urban rainfall
processes, satellite precipitation products (GPM IMERG), convection-
permitting WRF modelling, Local Climate Zone (LCZ) datasets, and human
thermal exposure**, and is intended to make the work accessible to
collaborators, students, journal editors, and the broader climate-science
community.

The site is intentionally **dependency-free static HTML/CSS** — there is
no build step, and every page can be opened directly in a browser.

## Table of contents

- [Repository structure](#repository-structure)
- [Quick start](#quick-start)
- [Local preview](#local-preview)
- [Deploy with GitHub Pages](#deploy-with-github-pages)
- [Design system](#design-system)
- [Research themes](#research-themes)
- [Selected publications](#selected-publications)
- [Reproducibility](#reproducibility)
- [Citation](#citation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## Repository structure

```text
shankar_academic_website/
├── index.html                Home — hero, themes, recent publications, timeline
├── research.html             Long-form research themes
├── projects.html             Project showcase (completed and planned)
├── publications.html         Full publication list, grouped by year
├── news.html                 Talks, awards, academic service
├── cv.html                   Structured CV view + downloadable DOCX
├── contact.html              Contact details and online profiles
├── 404.html                  Custom not-found page
├── Shankar_Sharma_CV.docx    Downloadable CV
│
├── assets/
│   ├── css/style.css         Design tokens, components, dark mode
│   ├── js/main.js            Theme toggle + active-nav highlight
│   ├── img/                  Image assets (placeholders documented)
│   └── favicon.svg           Site icon
│
├── figures/                  Publication figures (placeholder — see folder README)
├── notebooks/                Analysis notebooks per chapter (placeholder)
├── data/                     Dataset descriptions (no raw data committed)
├── scripts/                  Reusable utility scripts (placeholder)
│
├── .github/
│   ├── workflows/
│   │   ├── pages.yml         GitHub Pages auto-deploy
│   │   └── lint.yml          HTML + link checking on every PR
│   ├── ISSUE_TEMPLATE/       Bug, content correction, feature templates
│   └── PULL_REQUEST_TEMPLATE.md
│
├── README.md                 (this file)
├── CONTRIBUTING.md           How to contribute
├── CODE_OF_CONDUCT.md        Community standards
├── CITATION.cff              Machine-readable citation metadata
├── LICENSE                   MIT (code)
├── LICENSE-CC-BY-4.0         CC-BY-4.0 (content)
├── .gitignore                Common ignores + scientific-data ignores
├── .nojekyll                 Tell GitHub Pages not to run Jekyll
├── .htmlhintrc               HTML linting rules
├── robots.txt
└── sitemap.xml
```

## Quick start

```bash
git clone https://github.com/ss0293/shankar_academic_website.git
cd shankar_academic_website
python3 -m http.server 8080
# open http://localhost:8080
```

## Local preview

Any static-file server works. Pick one:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# Ruby
ruby -run -e httpd . -p 8080
```

Open <http://localhost:8080/> in your browser. The theme defaults to your
operating-system preference and is persisted per device via
`localStorage`.

## Deploy with GitHub Pages

A workflow at [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
deploys the repository root to GitHub Pages on every push to `main`.

To enable it:

1. Push the repository to GitHub (`main` branch).
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. The site will appear at `https://<username>.github.io/<repo>/`.

No Jekyll. No Ruby. No build step. The `.nojekyll` file makes sure GitHub
serves the files verbatim.

> **Custom domain (optional):** add a `CNAME` file at the repository root
> containing your domain (e.g., `shankarsharma.org`) and configure DNS as
> described in the [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Design system

All visual styles live in a single CSS file ([`assets/css/style.css`](assets/css/style.css))
built around a small set of design tokens:

| Token              | Light             | Dark              | Role                |
| ------------------ | ----------------- | ----------------- | ------------------- |
| `--brand-primary`  | `#0d5e6f`         | `#1d8fa6`         | Deep teal           |
| `--brand-accent`   | `#e2902c`         | `#e2902c`         | Warm amber          |
| `--bg`             | `#fbfaf6`         | `#0e1419`         | Page background     |
| `--surface`        | `#ffffff`         | `#16202a`         | Cards / chips       |
| `--text`           | `#11161b`         | `#e8eef2`         | Body text           |
| `--font-sans`      | `Inter`           | `Inter`           | UI text             |
| `--font-serif`     | `Source Serif 4`  | `Source Serif 4`  | Headings            |
| `--font-mono`      | `JetBrains Mono`  | `JetBrains Mono`  | Code, kickers       |

Components: hero, cards, chips, publication entries, timeline, buttons,
sticky nav, dark-mode toggle, and a collapsible `<details>` element.

## Research themes

| # | Theme                                                        | Status         |
| - | ------------------------------------------------------------ | -------------- |
| 1 | Urban rainfall trends & retrieval uncertainty in GPM IMERG   | In preparation |
| 2 | Convection-permitting WRF over Greater Sydney                | Ongoing        |
| 3 | Multi-decadal Local Climate Zone datasets                    | Published 2025 |
| 4 | Urban heat & human thermal exposure                          | Planned        |

See [`research.html`](research.html) for the long-form descriptions and
[`projects.html`](projects.html) for the corresponding project cards.

## Selected publications

A short list — the [Publications page](publications.html) carries the full
record (and [Google Scholar](https://scholar.google.com/citations?user=gjTxjbgAAAAJ&hl=en)
the most up-to-date one).

<details>
<summary><strong>Show selected publications</strong></summary>

- Sharma, S., Evans, J.P., Pitman, A., Nazarian, N., Lipson, M.J., & Lopez-Bravo, C. (**2025**). *Mapping urban dynamics in Greater Sydney — a scalable multi-decadal local climate zone classification approach.* **PLOS Climate**, 4(8), e0000677. <https://doi.org/10.1371/journal.pclm.0000677>
- Sharma, S., Dahal, P., Marahatta, S., Shrestha, A., Panday, V.P., Pokharel, B. (**2025**). *Historical trend and future projection of extreme precipitation in Nepal from high-resolution CMIP6 data.* In *Severe Storms* (pp. 607–625). Springer Nature Singapore.
- Sharma, S., Hamal, K., Pokharel, B., et al. (**2023**). *Atypical forcing embedded in typical forcing leading to the extreme summer 2020 precipitation in Nepal.* **Climate Dynamics**, 61(7), 3845–3856. <https://doi.org/10.1007/s00382-023-06777-9>
- Sharma, S., Khadka, N., Hamal, K., Shrestha, D., Talchabhadel, R., & Chen, Y. (**2020**). *How accurately can satellite products (TMPA and IMERG) detect precipitation patterns, extremities, and drought across the Nepalese Himalaya?* **Earth and Space Science**, 7(8), e2020EA001315. <https://doi.org/10.1029/2020EA001315>
- Sharma, S., Chen, Y., Zhou, X., et al. (**2020**). *Evaluation of GPM-Era satellite precipitation products on the southern slopes of the central Himalayas against rain-gauge data.* **Remote Sensing**, 12(11), 1836. <https://doi.org/10.3390/rs12111836>

</details>

## Reproducibility

Where licensing permits, analysis notebooks and scripts will be released
alongside each publication in dedicated repositories. This umbrella
repository documents:

- A per-study **environment file** convention (`environment.yml`).
- A **data-availability statement** template (see [`data/README.md`](data/README.md)).
- A **figure-provenance** convention (see [`figures/README.md`](figures/README.md)).
- An **HPC submission** convention for WRF runs (see [`scripts/README.md`](scripts/README.md)).

## Citation

If you reference this website or its content, please cite:

```bibtex
@misc{sharma_academic_website,
  author       = {Sharma, Shankar},
  title        = {Shankar Sharma --- academic website and research portfolio},
  year         = {2026},
  howpublished = {\url{https://ss0293.github.io/shankar_academic_website/}},
  note         = {Climate Change Research Centre, UNSW Sydney}
}
```

Machine-readable metadata is provided in [`CITATION.cff`](CITATION.cff).

For the flagship LCZ-Sydney paper:

```bibtex
@article{sharma2025lcz,
  author  = {Sharma, Shankar and Evans, Jason P. and Pitman, Andrew and
             Nazarian, Negin and Lipson, Mathew J. and Lopez-Bravo, Carlos},
  title   = {Mapping urban dynamics in Greater Sydney --- a scalable
             multi-decadal local climate zone classification approach},
  journal = {PLOS Climate},
  year    = {2025},
  volume  = {4},
  number  = {8},
  pages   = {e0000677},
  doi     = {10.1371/journal.pclm.0000677}
}
```

## Contributing

Small, focused PRs are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).
By participating you agree to follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

Common contributions:

- 🪶 Typo / grammar fixes
- 🔗 Broken-link or DOI corrections
- ♿ Accessibility improvements
- 🎨 Visual polish within the existing design system

## License

This repository uses a **dual-license** model:

- **Code** — HTML, CSS, JavaScript, scripts, notebooks — is licensed under the
  [MIT License](LICENSE).
- **Content** — text, figures, presentations, the CV — is licensed under
  [Creative Commons Attribution 4.0 International (CC-BY-4.0)](LICENSE-CC-BY-4.0).

In both cases, **attribution is required**.

## Acknowledgements

This work is undertaken at the
[Climate Change Research Centre (CCRC)](https://www.ccrc.unsw.edu.au/),
[UNSW Sydney](https://www.unsw.edu.au/), and is affiliated with the
[ARC Centre of Excellence for Climate Extremes](https://climateextremes.org.au/).

It is supported by a **University International Postgraduate Award (UIPA),
UNSW Sydney (2023)**.

I am grateful to my supervisors and colleagues at CCRC, and to the
maintainers of the open data products and open-source tools that make
this research possible (NASA GPM, ECMWF, USGS, ESA, the Australian Bureau
of Meteorology, the WRF modelling community, and the wider scientific
Python ecosystem).

## Contact

<table>
<tr>
<td><strong>Email</strong></td>
<td><a href="mailto:shankar.sharma@unsw.edu.au">shankar.sharma@unsw.edu.au</a></td>
</tr>
<tr>
<td><strong>Affiliation</strong></td>
<td>Climate Change Research Centre, UNSW Sydney, NSW 2052, Australia</td>
</tr>
<tr>
<td><strong>Google Scholar</strong></td>
<td><a href="https://scholar.google.com/citations?user=gjTxjbgAAAAJ&hl=en">scholar.google.com/citations?user=gjTxjbgAAAAJ</a></td>
</tr>
<tr>
<td><strong>ORCID</strong></td>
<td><a href="https://orcid.org/0000-0001-7008-5757">0000-0001-7008-5757</a></td>
</tr>
<tr>
<td><strong>ResearchGate</strong></td>
<td><a href="https://www.researchgate.net/profile/Shankar-Sharma-3">researchgate.net/profile/Shankar-Sharma-3</a></td>
</tr>
<tr>
<td><strong>LinkedIn</strong></td>
<td><a href="https://www.linkedin.com/in/shankar-sharma-9236bb105/">linkedin.com/in/shankar-sharma-9236bb105</a></td>
</tr>
<tr>
<td><strong>GitHub</strong></td>
<td><a href="https://github.com/ss0293">github.com/ss0293</a></td>
</tr>
</table>

---

<div align="center">

<sub>Built with care · static HTML · no trackers · runs on any GitHub Pages</sub>

</div>
