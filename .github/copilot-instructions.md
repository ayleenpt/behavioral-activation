# Copilot instructions for behavioral-activation

Short, actionable guidance to help an AI agent make productive edits in this repo.

- Architecture: single-repo monorepo-like layout with a React frontend and an Express + MongoDB backend.
  - Frontend: files under `src/` (SPA using React Router; entry `src/App.js`). Uses `react-scripts`.
  - Backend: `backend/` (ES modules, entry `backend/index.js`). Connects to MongoDB via Mongoose and exposes REST endpoints under `/api/*`.

- How to run locally (developer-first):
  - Start frontend: `npm start` (from repo root) — runs `react-scripts start` and serves the UI.
  - Start backend: `cd backend && npm run dev` — uses `nodemon` to run `node index.js` and reload on change. Backend listens on port 8080 by default.
  - Environment: backend reads `MONGO_URI` and `PORT` from env; default Mongo URI is `mongodb://localhost:27017/behavioral_activation`.

- Key runtime integrations and patterns:
  - Frontend fetches API from `http://localhost:8080/api/...` (see `src/components/tracker/Tracker.js`). Adjust base URL when deploying or proxying.
  - The backend registers a cron-like job: `backend/jobs/DailyTaskLogJob.js` is imported by `backend/index.js` and performs daily TaskLog work via `node-cron`.
  - Mongoose models live under `backend/models/`:
    - `Task` (see `backend/models/Task.js`): fields include `taskName`, `difficulty`, `tracking` (boolean), `category` (enum: `value|enjoyment|routine`), `frequency` (subdocument using `Frequency` schema).
    - `TaskLog` (see `backend/models/TaskLog.js`): references `Task`, has `date`, `tracking`, `logged`; unique compound index `{task, date}`.

- API surface (examples):
  - GET /api/tasks?category=<cat>&tracking=true — list tasks filtered by category and tracking (see `backend/routes/tasks.js`).
  - POST /api/tasks — create task with body matching `Task` schema.
  - PUT /api/tasks/:id — update task.
  - PUT /api/tasklog — updates a TaskLog by `{ task, date }` with `update` body.
  - DELETE /api/tasklog/task/:taskId — delete all logs for a task.

- Project-specific conventions to follow when editing code:
  - Use ES module syntax (`import`/`export`) in `backend/` files (package.json `type: module`).
  - Dates are stored as JavaScript `Date` objects. APIs expect ISO date strings (see `tasklog` route converting `date` to `new Date(date)`).
  - Category values are fixed to `value`, `enjoyment`, or `routine` — change both frontend route strings (e.g., `/tracker/value`) and backend enums together.
  - Task tracking is opt-in: `tracking: true` toggles whether a task appears in the tracker UI.

- Small diffs we commonly expect:
  - When adding fields to `Task` or `TaskLog`, update the Mongoose schema in `backend/models/`, adjust any route logic in `backend/routes/`, and update frontend components that read/write those fields (e.g., `TrackerRow.js`, `AddTask.js`).
  - If modifying API paths, update `backend/index.js` mounts and any frontend fetch URLs.

- Debugging hints:
  - Backend logs visible in terminal when running `npm run dev` inside `backend/`.
  - Frontend console and network tab useful for API contract mismatches — many components use plain `fetch('http://localhost:8080/api/...')`.
  - Common source of bugs: timezone/Date normalization between frontend strings and Mongoose Date objects; check `TaskLogSchema.index({ task: 1, date: 1 }, { unique: true })` for duplicate key errors when creating logs.

- Files to inspect for examples when implementing changes:
  - API: `backend/routes/tasks.js`, `backend/routes/tasklog.js`
  - Models: `backend/models/Task.js`, `backend/models/TaskLog.js`, `backend/models/Frequency.js`
  - Frontend usage: `src/components/tracker/Tracker.js`, `src/components/tracker/TrackerRow.js`, `src/components/hierarchy/AddTask.js`

- Quick checklist for PRs that touch backend and frontend:
  - Update backend schema and routes first, run backend with nodemon, verify endpoints with curl or browser.
  - Update frontend fetch URLs / request bodies next; run frontend and confirm UI behavior.
  - If adding required fields, provide sensible defaults to avoid 400 responses from existing clients.

If anything above is unclear or you want extra guidance (tests, CI, or deployment notes), tell me which area to expand.
