# AI-IOT FE Study Portal

基本情報技術者試験対策用の学習ポータルです。

このリポジトリでは、ハロートレーニングの教材PDFを日付別ノートではなく、試験分野別の教材ページとして整理していきます。

## 方針

- トップページは、作成済み・作成中・未作成の教材をまとめて見られるポータルにする
- 教材ページは、テクノロジ / マネジメント / ストラテジの分野別に増やす
- 教材の一覧と状態は `data/curriculum.json` で管理する
- 未作成ページは `coming-soon.html` に案内する

## 初回公開内容

- `index.html`: FE試験対策ポータル
- `assets/style.css`: 共通スタイル
- `assets/app.js`: ポータル表示ロジック
- `data/curriculum.json`: 教材マップ
- `coming-soon.html`: 未作成ページ用の案内
