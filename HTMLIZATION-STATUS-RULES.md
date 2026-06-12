# HTMLization Status Rules

Last updated: 2026-06-12 / Codex

Use this rule whenever a PDF is split into HTML lessons, QC is performed, or portal links are updated.

## Required Files to Update

Every HTMLization task must update these files before commit/push:

1. `PDF-FOLDER-MAP.md`
   - Update the PDF status.
   - Update the target folder.
   - Add page count, created HTML count, and remaining work in Notes.

2. Target folder `README.md`
   - Update the status block.
   - Add the created HTML files.
   - Add QC result and commit hash after push.

3. `PENDING-LESSONS.md`
   - Remove completed items or move them from Planned to Completed/In Progress.
   - Keep remaining work explicit.

4. `data/curriculum.json`
   - Register the section and items shown on the portal.
   - Set section status to `planned`, `in-progress`, or `done`.

5. `assets/app.js`
   - Keep fallback curriculum in sync with `data/curriculum.json`.

6. Project operation logs
   - Update `D:\vs_code\projects\ai-iot-school\LOG.md`.
   - Update `D:\vs_code\projects\ai-iot-school\CURRENT.md` when the current state changes.

## Status Values

- `planned`: Folder exists, but no lesson HTML is complete.
- `in-progress`: Some lesson HTML exists, or an AI is actively generating/QCing the section.
- `qc-pending`: HTML exists, but QC has not passed yet.
- `done`: HTML pages are complete, QC passed, portal registered, and pushed.
- `integrated`: Source PDF was used as a supplement inside another lesson.
- `not-placed`: Source PDF has not been placed or located yet.

## Folder README Status Block

Each target folder `README.md` must contain this block near the top:

```md
## Status

- Source PDF:
- Status:
- Target folder:
- Portal:
- HTML files:
- QC:
- Last commit:
- Remaining:
```

## Done Checklist

A PDF is not `done` until all are true:

- All intended lesson HTML files exist.
- The folder `index.html` links to each lesson.
- `data/curriculum.json` and `assets/app.js` include the same items.
- Top portal links to the section when appropriate.
- QC passed: quiz cards, answer toggles, source notes, duplicate IDs, local links, and no banned inline style patterns.
- Commit hash is recorded in the folder README, `PDF-FOLDER-MAP.md`, `LOG.md`, and `CURRENT.md`.
- Changes are pushed to GitHub.

## Coordination Rule

- Before editing, check `D:\vs_code\docs\ai-team-queue\ACTIVE-LOCKS.md`.
- Do not edit files currently locked by another AI.
- If another AI created untracked HTML or PDF files, do not add them unless the task explicitly owns those files.
