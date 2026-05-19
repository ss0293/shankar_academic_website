# Figures

Publication-ready figures associated with the research themes described on
the [Research page](../research.html).

## Status

This folder is reserved for forthcoming figures from the PhD chapters
listed on the [Projects page](../projects.html). Until those chapters are
published, the folder contains only this README.

When figures are added, they will be organised as follows:

```text
figures/
├── lcz_sydney/             # Local Climate Zone classification (Sharma et al. 2025)
│   ├── lcz_map_2020.png
│   ├── lcz_evolution_1995-2020.png
│   └── README.md           # caption, source, regeneration instructions
├── imerg_urban_trends/     # Urban rainfall trends in GPM IMERG (in prep)
├── wrf_sydney_precip/      # Convection-permitting WRF results (in prep)
└── urban_heat/             # Human thermal exposure (planned)
```

## Conventions

| Aspect          | Convention                                                |
| --------------- | --------------------------------------------------------- |
| File format     | PNG (raster, ≥ 300 dpi) and SVG / PDF (vector) where possible |
| Naming          | `<study>_<short-description>_<vN>.<ext>`                  |
| Captions        | One paragraph in each sub-folder's README, with DOI link  |
| Colour palettes | Colour-blind safe; `viridis`, `cividis`, or ColorBrewer   |
| Provenance      | Source notebook + commit hash recorded in the README      |

## Licence

Figures in this folder are released under
[CC-BY-4.0](../LICENSE-CC-BY-4.0); please attribute as described on the
[Citation](../CITATION.cff) page.
