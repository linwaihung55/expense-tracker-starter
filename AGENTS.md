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

<!-- context7 -->
Use Context7 MCP to fetch current documentation whenever the user asks about a library, framework, SDK, API, CLI tool, or cloud service — even well-known ones like React, Next.js, Prisma, Express, Tailwind, Django, or Spring Boot. This includes API syntax, configuration, version migration, library-specific debugging, setup instructions, and CLI tool usage. Use even when you think you know the answer — your training data may not reflect recent changes. Prefer this over web search for library docs.

Do not use for: refactoring, writing scripts from scratch, debugging business logic, code review, or general programming concepts.

## Steps

1. Always start with `resolve-library-id` using the library name and what to look up in the library's documentation, unless the user provides an exact library ID in `/org/project` format
2. Pick the best match (ID format: `/org/project`) by: exact name match, description relevance, code snippet count, source reputation (High/Medium preferred), and benchmark score (higher is better). If results don't look right, try alternate names or queries (e.g., "next.js" not "nextjs", or rephrase the question). Use version-specific IDs when the user mentions a version
3. `query-docs` with the selected library ID and what to look up in the library's documentation (not single words), scoped to a single concept. If the question spans multiple distinct concepts (e.g. routing and auth and caching), make a separate `query-docs` call per concept with the same library ID, unless the question is about how the concepts interact — combined queries dilute ranking and return shallow results for each topic
4. Answer using the fetched docs
<!-- context7 -->
