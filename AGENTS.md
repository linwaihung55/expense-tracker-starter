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
- `src/App.jsx` — owns the top-level `transactions` state and the `handleAdd` callback; renders the three child components below. No router, backend, or persistence.
- `src/Summary.jsx` — receives `transactions`, computes `totalIncome` / `totalExpenses` / `balance`, renders the summary cards.
- `src/TransactionForm.jsx` — owns its own form-input state; converts `amount` with `Number(...)` and calls `onAdd(transaction)`. Receives `categories`.
- `src/TransactionList.jsx` — owns its own filter state; receives `transactions` and `categories`, renders filters + table.
- `categories` is defined in `App.jsx` and passed down as a prop; there is no shared constants/store module.
- Plain JSX, no TypeScript, no tests / test runner configured. Do not attempt to run a test suite.
- Transaction data starts as an in-memory `useState` seed array; changes are lost on reload.
- `amount` is a **number** on every transaction. The add-form keeps its input as a string and converts with `Number(amount)` on submit; keep new transactions numeric so the totals reduce correctly. (The README's "intentional bug" — string amounts concatenating in the totals — has been fixed.)
- Seed data still contains intentional messiness: e.g. "Freelance Work" is seeded as `type: "expense"` with `category: "salary"` (App.jsx line 12). Don't "fix" it without asking; it may be course material.
- `package.json` name is `finance-tracker` and the UI title is "Finance Tracker" even though the repo dir is `expense-tracker-starter` — naming is inconsistent on purpose/historically; renaming is out of scope unless asked.

## Git
- `origin` is `https://github.com/linwaihung55/expense-tracker-starter.git` (the README links the original course repo; do not push there).
- GitHub CLI is at `C:\Program Files\GitHub CLI\gh.exe` (currently on PATH in this environment; if `gh` isn't found, prepend that directory).
