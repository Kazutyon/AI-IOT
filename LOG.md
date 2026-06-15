# LOG — AI-IOT FE Study Portal

## 2026-06-16 Codex — FE教材 ASCII箱図のSVG化（Algorithm / Computer / Management）

- 対象仕事票: `docs/ai-team-queue/active/task-2026-06-16-svg-fix-algorithm-codex.md`
- 対象ファイル6件を確認し、`│日本語│` を含む崩れやすいASCII箱図をSVGまたはHTML表へ置換。
- 修正ファイル:
  - `fe/technology/algorithm/algo-control.html`
  - `fe/technology/algorithm/algo-data-structure.html`
  - `fe/technology/algorithm/algo-graph.html`
  - `fe/technology/algorithm/algo-recursion.html`
  - `fe/technology/computer/cpu-architecture.html`
  - `fe/technology/management/quality-management-qc-tools.html`
- 検証: 対象6ファイルで `rg -n "│.*[ぁ-んァ-ン一-龥].*│"` が0件。
- 補足: in-app Browser確認は Node REPL 側の sandbox 起動エラーで実施できず。ローカル正規表現検査と差分確認で代替。
