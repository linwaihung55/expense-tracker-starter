# AGENTS.md

## Project
Single-page React expense tracker (Vite + React 19). This is a course starter: the README states it **intentionally contains a bug, poor UI, and messy code** meant to be fixed during the course. Verify with the user before assuming these are regressions.

## Commands
- `npm install` — required first; `npm run dev` fails with `'vite' is not recognized` until deps are installed.
- `npm run dev` — Vite dev server at http://localhost:5173
- `npm run build` / `npm run preview` — production build / serve build
- `npm run lint` — ESLint (flat config, `eslint.config.js`); the only automated check

## Layout & conventions
- `src/main.jsx` — entrypoint (React `StrictMode`), imported by `index.html`.
- `src/App.jsx` — the entire app: all state, logic, and UI live in this one component. No router, backend, or persistence.
- Plain JSX, no TypeScript, no tests / test runner configured. Do not attempt to run a test suite.
- Transaction data starts as an in-memory `useState` seed array; changes are lost on reload.
- `amount` is a **number** on every transaction. The add-form keeps its input as a string and converts with `Number(amount)` on submit; keep new transactions numeric so the totals reduce correctly.
