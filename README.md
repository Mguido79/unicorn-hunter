# Unicorn Hunter — Global Intelligence Dashboard

Static dashboard for annuity, life, and retail investment intelligence (United States and Japan). Open it in a browser — no build step.

Share slug: `unicorn-hunter` (no personal names in the public URL).

## Open locally

1. Download or clone this folder.
2. Serve the folder over HTTP (recommended). From this directory:

```bash
python3 -m http.server 8000
```

3. Open `http://localhost:8000/` (loads `index.html`, which opens `dashboard.html`).

You can also open `dashboard.html` directly. Some live market quotes fail under `file://` because of browser CORS rules; a local HTTP server avoids that.

## Share as a web page

This package is static files only (`index.html`, `dashboard.html`, `styles.css`, `app.js`, `data.js`). Any static host works:

- Put the whole folder on a static host so the site root contains `index.html`.
- Visitors open the site URL. `/` serves `index.html`, which sends them to the dashboard.
- Optional FRED series: add `?fredKey=YOUR_KEY` once; the key stays in that visitor’s browser storage and is not part of this package.

Do not commit API keys or `.env` files.

## Files

| File | Role |
| --- | --- |
| `index.html` | Entry page for `/` on any static host |
| `dashboard.html` | Dashboard UI |
| `styles.css` | Layout and theme |
| `app.js` | Charts, tabs, live quotes |
| `data.js` | Embedded research data |
