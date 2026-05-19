# Semi Stack Hub

A minimalist, Obsidian-styled reference site tracking the Logic + Memory nexus of
the 2026 AI buildout. Static SPA, deployable to GitHub Pages.

## Stack
- Vite + React 18
- Tailwind CSS (dark/light)
- Mermaid.js for the stack-flow diagram
- Hash routing — no server rewrites needed

## Local dev
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Edit `vite.config.js` and set `base` to `'/<your-repo-name>/'`.
2. Edit `package.json` and set `homepage` to your Pages URL.
3. Push to GitHub, then:
```bash
npm run deploy
```
This publishes `dist/` to a `gh-pages` branch. In the repo's
**Settings → Pages**, point the source at the `gh-pages` branch.

## Adding a company
Edit `src/data/companies.js`. Each entry needs:
- `id`, `name`, `ticker`, `category`
- `weight`, `stackPosition`, `thematic` (3 sentences)
- `constraints` array, `nexus` array (referencing other `id`s)
- `ir` block with `base` and `reports` array

The sidebar, home index, and cross-links wire up automatically.

## Project structure
```
src/
  App.jsx                  hash router + layout
  main.jsx
  index.css                tailwind + tokens
  data/
    companies.js           single source of truth
  components/
    CompanyCard.jsx        the core entry layout
    Home.jsx               landing view
    Sidebar.jsx            grouped nav
    StackFlow.jsx          mermaid diagram
    ThemeToggle.jsx        dark/light
```

## Notes on data accuracy
Index weights and capacity figures in the seed data are approximate and reflect
the user's stated reference points. Always verify against the current SMH
holdings sheet, individual IR filings, and primary trade press before publishing
or trading on any of this.
