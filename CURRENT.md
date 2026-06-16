# CURRENT — AI-IOT FE Study Portal

最終更新: 2026-06-16 / Codex（Database教材 用語表・HTML崩れ修正）

## 状態
active

## 目的
基本情報技術者試験対策用の学習ポータルを、分野別教材ページとして読みやすく保守する。

## 現在地
- FE教材ページのHTML化が進行中。
- 2026-06-16: `page-generation-1.html` 以降のDatabase教材12ファイルで、用語表・比較表に残っていた `那样` / `那樣` / `了一样` / `-than` / セル外 `とは` を、意味文を残して `<td>` セルへ復元。対象12ファイルで混入語残存0件、`<tr>` / `<table>` タグ数一致。
- 2026-06-16: Database教材12ファイルで、中国語混入文字列 `的那样` 86件を `とは` に置換。`rg -n "的那样" fe` で残存0件。
- 2026-06-16: Computer C 5ファイルで `<pre>` 内ASCII図解11件をSVGへ置換。対象: `process-scheduling.html` / `software-classification.html` / `tech-evolution.html` / `virtual-memory-storage.html` / `virtualization.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Computer B 5ファイルで `<pre>` 内ASCII図解10件をSVGへ置換。対象: `filesystem.html` / `io-devices-bus.html` / `io-scheduling-dma.html` / `memory-cache.html` / `memory-management.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Computer A 5ファイルで `<pre>` 内ASCII図解12件をSVGへ置換。対象: `bios-os-types.html` / `cloud-mobile-iot.html` / `computer-history.html` / `cpu-architecture.html` / `device-management.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Algorithm / Computer / Management の6ファイルで、日本語入りASCII箱図の崩れを修正。構造図はSVG化し、トレース表はHTML表へ置換済み。

## 次にやること
1. 既存の別作業差分（Algorithm/Cloud等）が残っているため、担当者の完了・コミット状況を確認する。
2. スマホ実機またはブラウザでSVG図・Database表の横幅・文字収まりを確認する。

## 前回AIが残した次の一手
- Database教材の `page-generation-1.html` 以降12ファイルは、混入語と用語表・比較表の既知HTML崩れを修正済み。in-app Browser確認は環境エラーで未実施のため、必要なら別環境で実表示確認する。

## 触るな
- `data/curriculum.json` と `assets/app.js` は今回のSVG化では更新不要。教材追加・ステータス変更がある場合のみ触る。
