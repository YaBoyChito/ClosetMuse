# Closet Muse ✧

**Your wardrobe, reimagined.** A digital closet and outfit planner that helps you rediscover clothes and accessories you already own.

Upload your pieces, organize your wardrobe, and generate outfit combinations for your plans—all in your browser.

## Features

- Upload JPEG, PNG, and WebP photos (up to 20 MB per photo).
- Tag pieces by category, color, style, occasion, season, and availability.
- Search and filter your closet; mark items available, in laundry, or archived.
- Generate up to three outfit combinations based on tags, color compatibility, and temperature.
- Build around a required piece, exclude items, lock pieces, or swap alternatives.
- Save outfits, rename looks, and track dates worn.
- Create inspiration boards with uploaded reference images and Pinterest/Instagram bookmarks.
- Export and restore a JSON backup including your photos.
- Explore a clearly labeled sample closet.

## Technology

Vanilla JavaScript ES modules, HTML, CSS, Canvas for image processing and sample artwork, and IndexedDB for browser storage. No framework, backend, runtime dependencies, or API keys are required.

Styling uses a rules-based matching algorithm, not a connected AI model. Social links are bookmarks; the app does not scrape or analyze Pinterest or Instagram pages. Uploaded inspiration images can supply a color palette for matching your pieces.

## Run locally

Install Node.js 20 or later, then run:

```bash
npm ci
npm start
```

Open **http://localhost:3000**. Serve the app over HTTP; opening `index.html` directly as a file can block ES modules. `npm ci` installs no third-party dependencies.

```bash
npm test   # outfit engine and backup validation checks
npm run build   # creates the static site in dist/
```

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | App shell and file inputs |
| `style.css` | Responsive interface |
| `app.mjs` | Views, uploads, and user interactions |
| `engine.mjs` | Outfit matching and color helpers |
| `storage.mjs` | IndexedDB persistence and backup validation |
| `scripts/` | Dependency-free local server and static build |
| `tests/` | Automated engine and backup checks |
| `.github/workflows/pages.yml` | GitHub Pages deployment |

## Data and limitations

Closet data stays in the current browser profile and origin. It does not sync between devices or travel with this repository. Moving to a new hosting URL creates a separate closet: export a backup from the old app and import it into the new one. Clearing browser storage can erase your closet; keep backups somewhere safe. Do not commit personal photos or backup files to a public repository.

Outfit quality depends on the tags you provide. There is no automatic garment recognition, live weather feed, account system, or social-media integration. Browser storage limits vary by device. Demo pieces are kept separate from personal pieces when styling.

## Future ideas

- Optional image-based garment tagging.
- More customizable outfit ranking.
- Optional account-based synchronization.
- Authorized integrations for inspiration sources.

## License

No open-source license has been selected for this release. Add a `LICENSE` file if you want to grant reuse permissions.
