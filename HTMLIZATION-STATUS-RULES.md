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

## study-map ナビのリンク数ルール

フォルダ `index.html` のヘッダー内 `<nav class="study-map">` に入れるリンクは **5〜6個** に絞ること。

- ページ数が多い場合はカテゴリ代表ページだけを選ぶ（全ページを列挙しない）
- 根拠：basic-theory / cloud / management / network / security すべて 5〜6 個で統一済み
- 違反例：computer/index.html が当初15個 → 6個に修正（2026-06-12）

## ASCII箱図禁止ルール（2026-06-16追加）

PDF→HTML化で図解を作る際、`│日本語テキスト│`形式のASCII箱図を**新規に作らない**こと。

- 根拠：ASCII罫線文字（`│`等）は表示幅1、日本語文字は表示幅2のため、スマホ・PCどちらでも右端がズレて崩壊する。
- 過去の失敗：この崩れを直すために19件の仕事票（`docs\ai-team-queue\done\task-2026-06-16-svg-*`）が発生し、HTML化作業全体の中で最も時間がかかった修正になった（詳細: `BUGS.md`）。
- ルール：
  - 構造図・フロー図・状態遷移図は最初から `<svg viewBox="..." width="100%">` で作成する。
  - 単純な縦リスト・ツリー（箱なし・日本語を箱の中に入れない形）はASCII可。
  - 図は `<figure class="wide-diagram"><figcaption>タイトル</figcaption>` で囲む。

## Done Checklist

A PDF is not `done` until all are true:

- All intended lesson HTML files exist.
- The folder `index.html` links to each lesson.
- `data/curriculum.json` and `assets/app.js` include the same items.
- Top portal links to the section when appropriate.
- QC passed: quiz cards, answer toggles, source notes, duplicate IDs, local links, and no banned inline style patterns.
- `<tr>`/`</tr>` と `<table>`/`</table>` の出現数が一致している（タグの閉じ忘れ・取り違えがない）。
- Commit hash is recorded in the folder README, `PDF-FOLDER-MAP.md`, `LOG.md`, and `CURRENT.md`.
- Changes are pushed to GitHub.

## Coordination Rule

- Before editing, check `D:\vs_code\docs\ai-team-queue\ACTIVE-LOCKS.md`.
- Do not edit files currently locked by another AI.
- If another AI created untracked HTML or PDF files, do not add them unless the task explicitly owns those files.
