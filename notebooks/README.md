# Notebooks

Analysis notebooks paired with published or in-preparation studies.

## Status

This folder is a placeholder. Notebooks will be added alongside the
corresponding manuscripts, with one sub-folder per study so that each
chapter can be reproduced independently:

```text
notebooks/
├── 01_lcz_sydney/                       # Sharma et al. (2025), PLOS Climate
│   ├── 01_data_preparation.ipynb
│   ├── 02_classification.ipynb
│   ├── 03_figures.ipynb
│   └── environment.yml
├── 02_imerg_urban_trends/                # In preparation (PhD chapter 1)
├── 03_wrf_sydney_precip/                 # In preparation (PhD chapter 2)
└── 04_urban_heat/                        # Planned (PhD chapter 3)
```

## Conventions

- **Reproducibility** — every sub-folder ships a pinned `environment.yml`.
- **Output cells** — committed notebooks are executed top-to-bottom; large
  outputs are stripped before commit using `nbstripout`.
- **Data access** — notebooks read from `../data/` (see that folder's
  README); large datasets are not included in this repository.
- **Style** — follow PEP 8 for Python code cells; descriptive markdown
  headings every few cells.

## Suggested environment

A typical climate-analysis environment is:

```yaml
name: ss-climate
channels: [conda-forge]
dependencies:
  - python=3.11
  - xarray
  - netcdf4
  - dask
  - numpy
  - pandas
  - matplotlib
  - cartopy
  - rioxarray
  - rasterio
  - geopandas
  - scikit-learn
  - jupyterlab
  - pip
```

## Licence

Notebook source code is released under [MIT](../LICENSE); the textual
narrative and figures inside notebooks fall under
[CC-BY-4.0](../LICENSE-CC-BY-4.0).
