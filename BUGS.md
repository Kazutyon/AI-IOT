# BUGS — AI-IOT FE Study Portal

## 2026-06-16 ASCII箱図（罫線+日本語混在）のスマホ崩壊 → 19件の仕事票でSVG化（最も時間がかかった修正）

- 症状:
  - `│日本語テキスト│` 形式のASCII箱図で、スマホ・PCともに右端の`│`がずれて崩壊。
- 発生条件:
  - PDF→HTML変換時、図解を`<pre>`内のASCII箱図として生成した教材すべてで発生。
- 原因:
  - ASCII罫線文字（`│`等）は表示幅1、日本語文字は表示幅2のため、フォント表示上で位置がズレる。
- 規模:
  - basic-theory / network / strategy / security / management / computer（A/B/C）/ algorithm の全セクションで発生し、`docs\ai-team-queue\done\` に **19件** の `svg-fix` / `svg-convert` 仕事票が発生。HTML化作業全体で最も時間がかかった修正。
- 修正内容:
  - 構造図・フロー図は`<svg>`へ置換、単純な縦リスト・ツリー（箱なし）のみASCII継続を許可。
  - 全図を`<figure class="wide-diagram"><figcaption>`で囲む。
- 教訓・予防策:
  - 次回のPDF→HTML化では、図解を最初からSVGまたはHTML表で作成し、ASCII箱図を生成しない。`HTMLIZATION-STATUS-RULES.md` に予防ルールとDone Checklist項目を追記済み。
- 関連ログ:
  - `LOG.md` の `2026-06-16 Codex — FE教材 ASCII図解→SVG変換` 各エントリ
  - `docs\ai-team-queue\done\task-2026-06-16-svg-*`（19件）

## 2026-06-16（頻発パターン）HTML表タグの閉じ忘れ・取り違え

- 症状:
  - `<td><td>`、`</table><th>`、`<tr>`と`<table>`の混同、`</tr>`欠落などの表タグ崩れが、ほぼ毎回のHTML化・修正タスクで個別に発見・修正されている。
- 発生条件:
  - AI生成のHTML表全般（database, computer, algorithm等、複数セクションで独立に発生）。
- 原因:
  - 表構造を行ごとに生成する際、開始・終了タグの対応関係が自動チェックされていなかった。
- 教訓・予防策:
  - HTML化・修正作業の完了条件に「`<tr>`/`</tr>`、`<table>`/`</table>`の出現数一致を確認する」をDone Checklistに追加済み（`HTMLIZATION-STATUS-RULES.md`）。
- 関連ログ:
  - `LOG.md` の各SVG変換エントリ内「補修」項目

## 2026-06-16 Database教材の用語表・比較表に中国語混入語とHTML崩れ

- 症状:
  - `page-generation-1.html` 以降のDatabase教材で、「試験に出る用語」表の説明文が `<td>` に入らず、`那样` / `-than` / `とは` などを挟んで表セル外に出ていた。
  - 一部の比較表・説明表でも `<td>` を `</th>` で閉じる、`<table>` が `<tr>` や `</table>` になる、`</tr>` が欠けるなどの崩れがあった。
- 発生条件:
  - AI生成または変換時に、用語と説明の区切りが中国語・英語断片として残り、HTML表セルへ変換されなかった。
- 原因:
  - 混入文字列を単語として扱って置換しただけでは、表の列境界とHTMLタグ構造が復元されないため。
- 修正内容:
  - 混入文字列を削除せず、直後の説明文を `<td>...</td>` に入れて意味が通る3列表へ復元。
  - 同ページ内の比較表・説明表もセル単位で閉じタグと行・表タグを修正。
- 関連ファイル:
  - `fe/technology/database/page-generation-1.html`
  - `fe/technology/database/page-generation-2.html`
  - `fe/technology/database/rest-api.html`
  - `fe/technology/database/security-1.html`
  - `fe/technology/database/security-2.html`
  - `fe/technology/database/security-3.html`
  - `fe/technology/database/sql-basic.html`
  - `fe/technology/database/webapp-link-1.html`
  - `fe/technology/database/webserver-1.html`
  - `fe/technology/database/webserver-2.html`
  - `fe/technology/database/webserver-3.html`
  - `fe/technology/database/webserver-4.html`
- 未解決点:
  - in-app Browser確認は環境側エラーで未実施。静的検査では混入文字列・既知崩れパターン・タグ数は解消済み。
- 参照ログ:
  - `LOG.md` の `2026-06-16 Codex — Database教材 用語表・比較表の中国語混入とHTML崩れ修正`
