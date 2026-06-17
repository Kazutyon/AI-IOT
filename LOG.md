# LOG — AI-IOT FE Study Portal

## 2026-06-17 DeepSeek — DX概論教材 HTML化・AI-IOTプロジェクト統合

- 内容:
  - `D:\vs_code\DX概論\` の9つのHTMLファイル（01.html〜09.html）をAI-IOTプロジェクトへ組み込み
  - ファイル名を分割.txtの推奨名に変換（dx-definition, dx-background-policy, dx-types-impact, dx-domestic-cases, dx-overseas-cases, dx-lessons-failures, dx-technologies, dx-strategy, dx-data-governance）
  - 配置先: `fe/strategy/dx/`
  - CSSパス修正: `../../../assets/style.css` → `../../assets/style.css`
  - パンくずパス修正: `../../../index.html` → `../../index.html`
  - `index.html`（セクションポータル）を作成
  - `README.md`（Statusブロック付き）を作成
  - `data/curriculum.json` にDXセクション（id: dx, strategyカテゴリ, 9教材）を追加
  - `data/curriculum.json` のsourcesに DX概論.pdf を追加
  - `PDF-FOLDER-MAP.md` にDX概論.pdfを追加
- QC: 全9ファイル PASS（`<tr>`/`</tr>`数一致, `<table>`/`</table>`数一致, quiz:10 ans:10, `<pre>`なし, 中国語混入なし, 重複idなし）
- 再発防止: `AI-RULES.md` に「execute_commandで複数ファイルの一括処理・長いインラインスクリプトを実行しない」ルールを追加（PowerShellワンライナー固まり事故の教訓）

## 2026-06-16 Claude — ASCII箱図崩壊・タグ取り違えを教訓として記録

- 背景: HTML化作業全体で最も時間がかかった修正（ASCII箱図のスマホ崩壊、19件の仕事票でSVG化）と、頻発していたHTML表タグの閉じ忘れ・取り違えが、どこにも予防ルールとして記録されていなかった。
- 内容:
  - `BUGS.md` に2件の教訓エントリを追加（ASCII箱図崩壊の症状・原因・規模19件、表タグ崩れの頻発パターン）。
  - `HTMLIZATION-STATUS-RULES.md` に「ASCII箱図禁止ルール」セクションを追加し、次回PDF→HTML化では図解を最初からSVG/HTML表で作ることを明記。
  - 同ファイルの `Done Checklist` に「`<tr>`/`</tr>`、`<table>`/`</table>` の出現数一致確認」を追加。
- 目的: Markdownルールファイルは全AI（Claude/Codex/DeepSeek）が共通で読めるため、Claude専用のSkillではなくこの形式で再発防止を仕込んだ。

## 2026-06-16 Codex — Database教材 用語表・比較表の中国語混入とHTML崩れ修正

- 対象: `fe/technology/database/page-generation-1.html` 以降のDatabase教材12ファイル。
- 内容:
  - `那样` / `那樣` / `了一样` / `-than` / 既存置換後の `とは` が表セル外に残っていた箇所を、意味文を削らず `<td>説明</td>` として復元。
  - 「試験に出る用語」表を `No. / 用語 / 一言` の3列構造に統一。
  - 同じページ内の比較表・説明表に残っていた `<td style="font-weight: bold;">... </th>`、`<td><td>`、`</table><th>`、`<tr>` と `<table>` の取り違え、`</tr>` 漏れを補修。
- 修正ファイル:
  - `page-generation-1.html`
  - `page-generation-2.html`
  - `rest-api.html`
  - `security-1.html`
  - `security-2.html`
  - `security-3.html`
  - `sql-basic.html`
  - `webapp-link-1.html`
  - `webserver-1.html`
  - `webserver-2.html`
  - `webserver-3.html`
  - `webserver-4.html`
- 検証:
  - 対象12ファイルで `rg -n "那样|那樣|了一样|-than|的那样"` 残存0件。
  - 対象12ファイルで `<tr>` / `</tr>`、`<table>` / `</table>` の件数一致。
  - 対象12ファイルで既知の崩れパターン（`<td><th>` / `</table><th>` / `</th></td>` / `</th><tr>` / `<td>... </th>`）残存0件。
  - `git diff --check` OK。
- 補足: in-app Browser確認は Node REPL 側の `windows sandbox failed: spawn setup refresh` で実施できず。静的HTML検査で代替。

## 2026-06-16 Codex — Database教材 中国語混入語の一括修正

- 対象: `fe/technology/database/*.html`
- 内容: databaseセクションの用語説明テーブルに混入していた中国語文字列 `的那样` を `とは` に置換。
- 対象ファイル: 12件
  - `db-basic-1.html`
  - `db-basic-2.html`
  - `db-operation.html`
  - `db-performance.html`
  - `rest-api.html`
  - `security-1.html`
  - `security-3.html`
  - `sql-basic.html`
  - `webapp-link-1.html`
  - `webserver-2.html`
  - `webserver-3.html`
  - `webserver-4.html`
- 置換件数: 86件。
- 検証:
  - `rg -n "的那样" fe` で残存0件。
  - database配下の差分は86 insertions / 86 deletionsで、混入語置換のみ。
- 補足: 既存のAlgorithm/Cloud等の未コミット差分は別作業由来のため未変更。

## 2026-06-16 Codex — FE教材 ASCII図解→SVG変換 Computer C

- 対象仕事票: `docs/ai-team-queue/active/task-2026-06-16-svg-convert-computer-c-codex.md`
- 対象ファイル5件の `<pre>` 図解を全確認し、状態遷移・層構造・フロー・比較・分類を表すASCII図11件をSVGへ置換。
- 修正ファイル:
  - `fe/technology/computer/process-scheduling.html`
  - `fe/technology/computer/software-classification.html`
  - `fe/technology/computer/tech-evolution.html`
  - `fe/technology/computer/virtual-memory-storage.html`
  - `fe/technology/computer/virtualization.html`
- 補修:
  - `process-scheduling.html` のコンテキストスイッチ表にあった誤った `</td>` / `<tr>` を修正。
  - `tech-evolution.html` のIC用語表とLSI/VLSI時代表のタグ崩れを修正。
  - `virtualization.html` のVM表・組込みコンピュータ表の閉じタグ漏れを修正。
- 検証:
  - 対象5ファイルで `<pre>` / `</pre>` / Mermaid / `flowchart` / `timeline` / `<style>` は検出なし。
  - 対象5ファイルで既知のタグ崩れパターンは検出なし。
  - `git diff --check` OK。
- 補足: in-app Browser確認は Node REPL 側の `windows sandbox failed: spawn setup refresh` で実施できず。ローカル静的検査と差分確認で代替。

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
