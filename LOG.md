# LOG — AI-IOT FE Study Portal

## 2026-06-16 Codex — FE教材 ASCII図解→SVG変換 Computer B

- 対象仕事票: `docs/ai-team-queue/active/task-2026-06-16-svg-convert-computer-b-codex.md`
- 対象ファイル5件の `<pre>` 図解を全確認し、構造・フロー・比較を表すASCII図10件をSVGへ置換。
- 修正ファイル:
  - `fe/technology/computer/filesystem.html`
  - `fe/technology/computer/io-devices-bus.html`
  - `fe/technology/computer/io-scheduling-dma.html`
  - `fe/technology/computer/memory-cache.html`
  - `fe/technology/computer/memory-management.html`
- 補修: `filesystem.html` のアクセス権対象表にあった誤った `<td><td>` を `<tr><td>` へ修正。
- 検証:
  - 対象5ファイルで `<pre>` / `</pre>` / Mermaid / `flowchart` / `timeline` / `<style>` は検出なし。
  - `git diff --check` OK。
  - 各ページの `quiz-card` / `answer-toggle` 数は維持。
- 補足: 各ページ末尾の学習済みボタンに既存 `style=""` が残るが、今回追加ではないため未変更。

## 2026-06-16 Codex — FE教材 ASCII図解→SVG変換 Computer A

- 対象仕事票: `docs/ai-team-queue/active/task-2026-06-16-svg-convert-computer-a-codex.md`
- 対象ファイル5件の `<pre>` 図解を全確認し、構造・フロー・比較を表すASCII図12件をSVGへ置換。
- 修正ファイル:
  - `fe/technology/computer/bios-os-types.html`
  - `fe/technology/computer/cloud-mobile-iot.html`
  - `fe/technology/computer/computer-history.html`
  - `fe/technology/computer/cpu-architecture.html`
  - `fe/technology/computer/device-management.html`
- 補修: `bios-os-types.html` のBIOS/UEFI比較表末尾にあった誤った `</tr>` を `</table>` へ修正。
- 検証:
  - 対象5ファイルで `<pre>` / `</pre>` / Mermaid / `flowchart` / `timeline` / `<style>` は検出なし。
  - `git diff --check` OK。
  - 各ページの `quiz-card` / `answer-toggle` 数は維持。
- 補足: 各ページ末尾の学習済みボタンに既存 `style=""` が1件ずつ残るが、今回追加ではないため未変更。

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
