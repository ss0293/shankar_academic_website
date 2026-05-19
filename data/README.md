# Data

Descriptions of datasets used in the research projects. **No raw datasets
are committed to this repository** — they are too large and are governed
by the licences of the original providers.

## Status

This folder is currently a placeholder. As each study is published, a
sub-folder will be added describing exactly which data products, versions,
and time windows were used, with download instructions and DOIs.

## Planned structure

```text
data/
├── README.md                            # this file
├── imerg/                               # GPM IMERG
│   ├── README.md                        # version, level, hosting, citation
│   └── download.sh                      # reproducible download script
├── era5/                                # ECMWF ERA5 reanalysis
├── landsat_sentinel/                    # Earth-observation imagery for LCZ
├── awap_bom/                            # Australian observational gridded products
└── lcz_sydney/                          # Output: LCZ raster (Sharma et al. 2025)
```

## Primary datasets

| Dataset | Provider | Use | Citation / DOI |
|---|---|---|---|
| GPM IMERG (V06/V07) | NASA GSFC | Satellite precipitation analysis | <https://doi.org/10.5067/GPM/IMERG/3B-HH/07> |
| ERA5 reanalysis | ECMWF / Copernicus | Boundary forcing &amp; large-scale context | <https://doi.org/10.24381/cds.adbb2d47> |
| MERRA-2 | NASA GMAO | Reanalysis intercomparison | <https://doi.org/10.5067/VJAFPLI1CSIV> |
| Landsat 5/7/8/9 | USGS | LCZ classification inputs | <https://doi.org/10.5066/F7DZ069H> |
| Sentinel-2 | ESA | LCZ classification inputs | <https://doi.org/10.5270/S2_-742ikth> |
| Australian gridded rainfall | Bureau of Meteorology | Validation over Sydney | <http://www.bom.gov.au/climate/data/> |

## Data policy

- All raw data downloads happen **outside** this repository.
- Per-study `download.sh` scripts will fetch the exact files used.
- Derived products that are small (< 50 MB) and openly licensable may be
  committed under `data/derived/` when a study is published.
- Researchers reusing this work should cite the **original data providers**
  in addition to any of my publications.

## Licence

Data **descriptions** in this folder are released under
[CC-BY-4.0](../LICENSE-CC-BY-4.0). The datasets themselves remain under
their original licences from the providers listed above.
