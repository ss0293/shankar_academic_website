# Image assets

Static images used by the website.

## Required: hero portrait

The home page (`index.html`) expects a portrait photograph here:

```
assets/img/portrait.jpg
```

If the file is missing, the page automatically falls back to a stylised
"SS" monogram — so there is no broken state. As soon as you save the
JPEG at that exact path, the home page will use it.

### How to add your photo

1. Save the image you uploaded in chat (the Cradle Mountain shot) as
   `portrait.jpg`.
2. Place it at `assets/img/portrait.jpg` in this repository.

That's it. The page will pick it up on next reload.

### Recommended specs

| Property      | Recommendation                                  |
| ------------- | ----------------------------------------------- |
| Aspect ratio  | The hero crops to a **circle** — any aspect works, but a near-square crop centred on the face looks best. |
| Resolution    | At least **600 × 600 px**; the source can be larger (the browser scales down). |
| File size     | Under ~300 KB recommended (use `cwebp -q 85` or `jpegoptim --max=85` if needed). |
| Format        | JPEG (default). For a sharper result on retina displays you can also save `portrait.webp` and adjust the `<img src>` in `index.html`. |
| Face position | The CSS uses `object-position: center 25%`, which favours the upper portion of the photo (where the face usually is). Tweak in `assets/css/style.css` if needed. |

### Optional: social preview image

For richer link previews (Slack, Twitter, LinkedIn, iMessage, etc.) save
a 1200 × 630 PNG/JPG at:

```
assets/img/og.png
```

Then add this line to each page's `<head>`:

```html
<meta property="og:image" content="https://ss0293.github.io/shankar_academic_website/assets/img/og.png">
```

(All other Open Graph metadata is already wired up.)
