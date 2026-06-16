# BUGS — AI-IOT FE Study Portal

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
