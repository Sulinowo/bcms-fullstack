# BCMS — frontend (`bcms-web`)

**Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router + Storybook.**

## Zasada na ten etap

- **Aplikacja (`npm run dev`)** — tylko **shell layoutu** (sidebar, header, pusty obszar treści). Bez gotowych „stron” produktowych.
- **Komponenty globalne** — rozwój i warianty w **Storybooku** (`npm run storybook`).

## Struktura

| Ścieżka | Opis |
| ------- | ---- |
| `src/index.css` | Tailwind + tokeny kolorów (Vitality / Stitch) |
| `src/layout/` | `AppLayout`, `Sidebar`, `AppHeader`, `MobileNav`, `navConfig` |
| `src/components/icons/` | `MaterialIcon` (Material Symbols) |
| `src/components/ui/` | Warstwa UI podzielona na katalogi (`actions`, `display`, `forms`, `inputs`, `tables`, `upload`) + `index.ts` |
| `src/pages/AppPlaceholder.tsx` | Krótki komunikat w miejscu przyszłej treści |

Eksport designu (zip Stitch) trzymaj lokalnie; katalog `design-reference/` jest w `.gitignore`.

## Polecenia

```bash
npm install
npm run dev          # aplikacja — http://localhost:5173
npm run storybook    # Storybook — http://localhost:6006
npm run build-storybook   # statyczny build katalogu storybook-static
```

## Storybook + testy

- Dodatek **Vitest** w Storybooku: `npx vitest --project=storybook` (wymaga Chromium z Playwright — już skonfigurowane przez init).
