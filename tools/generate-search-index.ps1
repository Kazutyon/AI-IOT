# generate-search-index.ps1
# fe/ 以下の全レッスンページから h2/h3 見出しを抽出して
# assets/search-index.json を自動生成するスクリプト

$root   = "D:\vs_code\projects\AI-IOT"
$feRoot = "$root\fe"
$output = "$root\assets\search-index.json"

# フォルダ名 → タグ名マッピング
$sectionMap = @{
    'basic-theory'      = '基礎理論'
    'network'           = 'ネットワーク'
    'cloud'             = 'クラウド'
    'algorithm'         = 'アルゴリズム'
    'security'          = 'セキュリティ'
    'computer'          = 'コンピュータ概論'
    'management'        = 'マネジメント'
    'business-strategy' = 'ストラテジ'
    'database'          = 'データベース'
    'iot-security'      = 'IoTセキュリティ'
    'legal'             = '法令・契約'
    'digital-society'   = 'デジタル社会'
    'dx'                = 'DX概論'
}

# スキップする見出し（汎用すぎて検索に不要なもの）
$skipTerms = @(
    'まとめ', '確認問題', '練習問題', '参考', '補足', 'ポイント',
    '概要', 'はじめに', '参考文献', 'Quiz', 'クイズ', '演習',
    'このページで覚えること', '出題優先度', '試験に出る用語',
    '出典', '対応ページ', '出典PDF', '補足情報', '注意',
    '学習目標', '学習の目標', '重要', '復習', 'チェック',
    '関連リンク', '次のステップ', '前のステップ'
)

$entries = [System.Collections.Generic.List[object]]::new()
$seen    = [System.Collections.Generic.HashSet[string]]::new()

$files = Get-ChildItem $feRoot -Recurse -Filter "*.html" |
    Where-Object { $_.Name -ne "index.html" } |
    Sort-Object FullName

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw -Encoding UTF8

    # サイトルートからの相対 URL（スラッシュ区切り）
    $url = $f.FullName.Replace($root + "\", "").Replace("\", "/")

    # セクションタグを判定
    $tag = "その他"
    foreach ($key in $sectionMap.Keys) {
        if ($url -match "/$key/") { $tag = $sectionMap[$key]; break }
    }

    # h2 と h3 を順番に取り出す
    $headingMatches = [regex]::Matches(
        $content,
        '<h([23])[^>]*>([\s\S]*?)</h\1>',
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )

    foreach ($m in $headingMatches) {
        # タグ除去・空白整理・番号プレフィックス除去（「1. 」「①」など）
        $term = ($m.Groups[2].Value -replace '<[^>]+>', '' -replace '&[a-z]+;', '' -replace '\s+', ' ').Trim()
        $term = $term -replace '^\d+[\.\)．]\s*', ''   # 先頭の「1. 」「2）」を除去
        $term = $term -replace '^[①-⑳]\s*', ''        # 丸数字を除去
        $term = $term.Trim()

        # 短すぎ・スキップ対象・重複はとばす
        if ($term.Length -lt 4)                              { continue }
        if ($skipTerms | Where-Object { $term -match $_ })  { continue }
        if (-not $seen.Add($term))                           { continue }

        # 見出しの直後にある最初の <p> を要約として使う
        $afterH   = $content.Substring($m.Index + $m.Length)
        $pMatch   = [regex]::Match(
            $afterH,
            '<p[^>]*>([\s\S]*?)</p>',
            [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
        )
        $summary = if ($pMatch.Success) {
            ($pMatch.Groups[1].Value -replace '<[^>]+>', '' -replace '&[a-z]+;', '' -replace '\s+', ' ').Trim()
        } else { "" }

        # 長すぎる要約はカット
        if ($summary.Length -gt 100) { $summary = $summary.Substring(0, 97) + "..." }

        $entries.Add([PSCustomObject]@{
            term    = $term
            summary = $summary
            url     = $url
            tags    = @($tag)
        })
    }
}

# JSON 出力（UTF-8 BOMなし）
$json = $entries | ConvertTo-Json -Depth 3 -Compress:$false
[System.IO.File]::WriteAllText($output, $json, [System.Text.Encoding]::UTF8)

Write-Host "完了: $($entries.Count) エントリ → $output" -ForegroundColor Green
