# Scripts

Small reusable scripts for repeated tasks across the research projects.

## Status

Placeholder folder. Scripts will be added as the corresponding studies are
published. Each script will be self-contained, with a short header
explaining purpose, inputs, outputs, and dependencies.

## Planned categories

```text
scripts/
├── wrf/                # WRF pre/post-processing helpers
├── imerg/              # IMERG download, regridding, validation
├── lcz/                # LCZ classification utilities
├── plotting/           # Reusable matplotlib / cartopy figure helpers
└── hpc/                # PBS / SLURM submission templates for HPC
```

## Conventions

- One concern per script; readable from top to bottom.
- Header docstring with `Usage:` and `Example:` blocks.
- `argparse` for command-line tools.
- Pure-Python where feasible; shell scripts only for environment setup or
  HPC submission.

## Licence

Scripts in this folder are released under [MIT](../LICENSE).
