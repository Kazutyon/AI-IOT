# PDF to Folder Map

Last updated: 2026-06-12 / Claude

This file maps each source PDF to the folder where HTML lessons should be created.
Update rules are defined in `HTMLIZATION-STATUS-RULES.md`.

## Completed or In Progress

| PDF | Status | Target folder | Notes |
|---|---|---|---|
| `1_基礎理論（数学・論理・情報理論99）.pdf` | done | `fe/technology/basic-theory/` | All 11 lesson pages registered. |
| `1_2(2)進数のお話.pdf` | integrated | `fe/technology/basic-theory/` | Supplement for radix/complement lesson. |
| `2_アルゴリズムとデータ構造.pdf` | done | `fe/technology/algorithm/` | All 8 lesson pages registered: tree/search, search, sort, recursion/complexity, data structure, graph, basic, control. Last commit: 83513d1. |
| `1_ネットワーク基礎.pdf` | done | `fe/technology/network/` | All 12 lesson pages registered. |
| `2_クラウド基礎.pdf` | done | `fe/technology/cloud/` | All 9 lesson pages registered. |
| `1_情報セキュリティー.pdf` | done | `fe/technology/security/` | All 22 lesson pages registered. |
| `1_マネジメント.pdf` | done | `fe/technology/management/` | All 20 lesson pages registered. |

| `コンピュータ概論.pdf` | done | `fe/technology/computer/` | All 15 lesson pages registered. 2026-06-16 |
| `1_2_AIの_IoTセキュリティー.pdf` | done | `fe/technology/iot-security/` | All 5 lesson pages registered. 2026-06-16 |
| `3_経営・戦略.pdf` | done | `fe/strategy/business-strategy/` | All 12 lesson pages registered. 2026-06-16 |
| `1_Webサーバー・データベース概論.pdf` | done | `fe/technology/database/` | All 25 lesson pages registered. 2026-06-16 |
| `2_関連法令・契約.pdf` | done | `fe/strategy/legal/` | All 11 lesson pages registered. 2026-06-16 |
| `3_デジタル社会の形成について.pdf` | done | `fe/strategy/digital-society/` | All 6 lesson pages registered. 2026-06-16 |
| `DX概論.pdf` | done | `fe/strategy/dx/` | All 9 lesson pages registered. QC PASS (quiz:10 ans:10, no pre, no cn). 2026-06-17 / DeepSeek |

## Planned

| PDF | Status | Target folder | Notes |
|---|---|---|---|
| （なし） | — | — | — |

## Folder Rule

- Technology folders belong under `fe/technology/`.
- Strategy folders belong under `fe/strategy/`.
- Do not use `fe/technology/strategy/`; it was a temporary empty folder.
- PDF files do not have to be committed unless explicitly needed for GitHub Pages. If a PDF is kept outside this repository, record the source path in this file and the target folder README.
- When a PDF status changes, update this file, the target folder `README.md`, `PENDING-LESSONS.md`, `data/curriculum.json`, `assets/app.js`, `LOG.md`, and `CURRENT.md` as applicable.
