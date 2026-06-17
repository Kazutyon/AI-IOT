# add-favicon.ps1
# fe/ 配下の全 HTML ファイルに favicon link タグを追加する

$root  = "D:\vs_code\projects\AI-IOT"
$feDir = "$root\fe"

$files = Get-ChildItem $feDir -Recurse -Filter "*.html"
$updated = 0
$skipped = 0

foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)

    # すでに favicon がある場合はスキップ
    if ($content -match 'favicon') {
        $skipped++
        continue
    }

    # 深さに応じて相対パスのプレフィックスを決定
    $rel   = $f.FullName.Replace("$root\", "")
    $depth = ($rel -split "\\").Count - 1
    $prefix = if ($depth -eq 2) { "../../" } else { "../../../" }

    $faviconLines = @"
  <link rel="icon" type="image/x-icon" href="${prefix}assets/favicon.ico">
  <link rel="icon" type="image/x-icon" href="${prefix}assets/favicon-16x16.ico" sizes="16x16">
  <link rel="icon" type="image/x-icon" href="${prefix}assets/favicon-32x32.ico" sizes="32x32">
"@

    # </head> の直前に挿入
    $newContent = $content -replace '(\s*</head>)', "`n$faviconLines`$1"

    [System.IO.File]::WriteAllText($f.FullName, $newContent, [System.Text.Encoding]::UTF8)
    $updated++
}

Write-Host "完了: $updated ファイル更新 / $skipped ファイルスキップ（favicon 既存）" -ForegroundColor Green
