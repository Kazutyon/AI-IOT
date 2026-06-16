# CURRENT — AI-IOT FE Study Portal

最終更新: 2026-06-16 / Codex（Database教材 中国語混入語修正）

## 状態
active

## 目的
基本情報技術者試験対策用の学習ポータルを、分野別教材ページとして読みやすく保守する。

## 現在地
- FE教材ページのHTML化が進行中。
- 2026-06-16: Database教材12ファイルで、中国語混入文字列 `的那样` 86件を `とは` に置換。`rg -n "的那样" fe` で残存0件。
- 2026-06-16: Computer C 5ファイルで `<pre>` 内ASCII図解11件をSVGへ置換。対象: `process-scheduling.html` / `software-classification.html` / `tech-evolution.html` / `virtual-memory-storage.html` / `virtualization.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Computer B 5ファイルで `<pre>` 内ASCII図解10件をSVGへ置換。対象: `filesystem.html` / `io-devices-bus.html` / `io-scheduling-dma.html` / `memory-cache.html` / `memory-management.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Computer A 5ファイルで `<pre>` 内ASCII図解12件をSVGへ置換。対象: `bios-os-types.html` / `cloud-mobile-iot.html` / `computer-history.html` / `cpu-architecture.html` / `device-management.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Algorithm / Computer / Management の6ファイルで、日本語入りASCII箱図の崩れを修正。構造図はSVG化し、トレース表はHTML表へ置換済み。

## 次にやること
1. database配下の用語説明テーブルには既存のHTMLタグ崩れが複数見えるため、別タスクとして構造修正を検討する。
2. 既存の別作業差分（Algorithm/Cloud等）が残っているため、担当者の完了・コミット状況を確認する。
3. スマホ実機またはブラウザでSVG図の横幅・文字収まりを確認する。

## 前回AIが残した次の一手
- Database教材の `的那样` は全86件修正済み。次はdatabase配下の既存HTMLタグ崩れ（例: `</td>` / `<tr>` / `</table>` 混入）を別タスクとして直すか判断する。

## 触るな
- `data/curriculum.json` と `assets/app.js` は今回のSVG化では更新不要。教材追加・ステータス変更がある場合のみ触る。
