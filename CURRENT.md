# CURRENT — AI-IOT FE Study Portal

最終更新: 2026-06-16 / Codex（FE教材 ASCII図解→SVG変換 Computer C）

## 状態
active

## 目的
基本情報技術者試験対策用の学習ポータルを、分野別教材ページとして読みやすく保守する。

## 現在地
- FE教材ページのHTML化が進行中。
- 2026-06-16: Computer C 5ファイルで `<pre>` 内ASCII図解11件をSVGへ置換。対象: `process-scheduling.html` / `software-classification.html` / `tech-evolution.html` / `virtual-memory-storage.html` / `virtualization.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Computer B 5ファイルで `<pre>` 内ASCII図解10件をSVGへ置換。対象: `filesystem.html` / `io-devices-bus.html` / `io-scheduling-dma.html` / `memory-cache.html` / `memory-management.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Computer A 5ファイルで `<pre>` 内ASCII図解12件をSVGへ置換。対象: `bios-os-types.html` / `cloud-mobile-iot.html` / `computer-history.html` / `cpu-architecture.html` / `device-management.html`。対象5ファイルで `<pre>` 残存なし。
- 2026-06-16: Algorithm / Computer / Management の6ファイルで、日本語入りASCII箱図の崩れを修正。構造図はSVG化し、トレース表はHTML表へ置換済み。

## 次にやること
1. Codex担当の残りASCII図解→SVG変換バッチ（Algorithm A/B、Cloud A/B）を順に処理する。
2. スマホ実機またはブラウザでSVG図の横幅・文字収まりを確認する。

## 前回AIが残した次の一手
- Computer Cは対象5ファイルで `<pre>` 0件。次は `task-2026-06-16-svg-convert-algorithm-a-codex.md` 以降のCodex担当バッチを続行する。

## 触るな
- `data/curriculum.json` と `assets/app.js` は今回のSVG化では更新不要。教材追加・ステータス変更がある場合のみ触る。
