# FE試験対策サイト ポータルリデザイン 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** FE試験対策サイトをクラスメート公開に向けてリデザインし、今日の一問・頻出度バッジ・用語検索・学習進捗の4機能を追加する

**Architecture:** 静的サイト（GitHub Pages）のまま。localStorage でユーザーデータを保持。JS は `assets/app.js` 1ファイルに集約。fetch() を使うためローカル確認は VS Code の Live Server（または `npx serve`）を使うこと。

**Tech Stack:** HTML / CSS / Vanilla JS / localStorage / GitHub Pages

---

## ファイル構成

| ファイル | 種別 | 責務 |
|---|---|---|
| `assets/style.css` | 修正 | ボトムナビ・頻出バッジ・進捗バー・完了ボタン等の新CSSクラス追加 |
| `assets/app.js` | 新規 | 今日の一問・進捗保存・検索・最近のページ（全JS） |
| `assets/search-index.json` | 新規 | 手動作成の用語データ（20〜30語） |
| `index.html` | 修正 | ポータル全面改修（対象者・バッジ・今日の一問・最近のページ・ボトムナビ・フッター） |
| `quiz-data.json` | 新規 | 今日の一問データ（10問〜） |
| `search.html` | 新規 | 用語検索ページ |
| `progress.html` | 新規 | 学習進捗ページ |

---

## Task 1: redesign ブランチを作成

**Files:** なし（git操作のみ）

- [ ] **Step 1: ブランチ作成**

```bash
git checkout -b redesign
```

Expected: `Switched to a new branch 'redesign'`

- [ ] **Step 2: 確認**

```bash
git branch
```

Expected: `* redesign` が表示される

---

## Task 2: CSS — 新クラスを style.css に追加

**Files:**
- Modify: `assets/style.css`（末尾に追記）

- [ ] **Step 1: style.css の末尾に以下を追記**

```css
/* ===== ポータルリデザイン追加クラス ===== */

/* 対象者セクション */
.target-audience {
  background: #eef4ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 28px;
  font-size: 0.95rem;
  color: #1e3a5f;
}
.target-audience p { margin: 0; color: #1e3a5f; }

/* 頻出度バッジ */
.freq-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  margin-top: 8px;
  letter-spacing: .02em;
}
.freq-badge--high { background: #fef2f2; color: #dc2626; }
.freq-badge--mid  { background: #fff7ed; color: #d97706; }
.freq-badge--low  { background: #f0fdf4; color: #16a34a; }

/* 今日の一問ウィジェット */
.quiz-widget {
  background: var(--paper);
  border: 1px solid var(--line);
  border-left: 4px solid var(--teal);
  border-radius: 8px;
  padding: 18px;
  margin-bottom: 24px;
}
.quiz-widget h3 { margin-bottom: 10px; font-size: 1rem; color: var(--teal); }
.quiz-widget__question { font-weight: 700; margin-bottom: 14px; font-size: 1rem; }
.quiz-widget__toggle {
  background: none;
  border: 1px solid var(--teal);
  color: var(--teal);
  border-radius: 6px;
  padding: 7px 16px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.9rem;
}
.quiz-widget__toggle:hover { background: #f0fdfa; }
.quiz-widget__answer {
  display: none;
  margin-top: 12px;
  padding: 12px;
  background: #f0fdf4;
  border-radius: 6px;
  font-size: 0.95rem;
  border: 1px solid #bbf7d0;
}
.quiz-widget__answer.is-visible { display: block; }
.quiz-widget__source {
  display: block;
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--muted);
}

/* 最近見たページ */
.recent-pages { display: grid; gap: 8px; margin-top: 8px; }
.recent-item {
  display: block;
  padding: 10px 14px;
  background: #fbfcff;
  border: 1px solid var(--line);
  border-radius: 8px;
  text-decoration: none;
  color: var(--ink);
  font-size: 0.92rem;
  font-weight: 600;
}
.recent-item:hover { border-color: var(--teal); color: var(--teal); }

/* 完了ボタン（各レッスンページ） */
.complete-btn {
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 24px auto 0;
  padding: 13px 20px;
  background: var(--teal);
  color: #fff;
  border: none;
  border-radius: 8px;
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
}
.complete-btn:hover { background: #0d6460; }
.complete-btn.is-done {
  background: #dcfce7;
  color: var(--green);
  cursor: default;
  pointer-events: none;
}

/* 進捗バー（progress.html） */
.progress-section { margin-bottom: 20px; }
.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 0.9rem;
  font-weight: 700;
}
.progress-bar {
  height: 10px;
  background: var(--line);
  border-radius: 999px;
  overflow: hidden;
}
.progress-bar__fill {
  height: 100%;
  background: var(--teal);
  border-radius: 999px;
  transition: width 0.4s ease;
}

/* 検索ページ */
.search-input-wrap { position: relative; margin-bottom: 20px; }
.search-input {
  width: 100%;
  padding: 12px 16px;
  font: inherit;
  font-size: 1rem;
  border: 2px solid var(--line);
  border-radius: 10px;
  outline: none;
  background: #fff;
}
.search-input:focus { border-color: var(--teal); }
.search-results { display: grid; gap: 10px; }
.search-result-item {
  display: grid;
  gap: 2px;
  padding: 14px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  text-decoration: none;
  color: var(--ink);
}
.search-result-item:hover { border-color: var(--teal); }
.search-result-item strong { font-size: 1rem; color: var(--blue); }
.search-result-item span { font-size: 0.9rem; color: var(--muted); }
.search-result-item small { font-size: 0.78rem; color: #9aa5b4; }
.search-popular { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.search-popular a {
  padding: 5px 12px;
  background: #eef4ff;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--blue);
  text-decoration: none;
}

/* サイトフッター */
.site-footer {
  margin-top: 48px;
  padding: 20px;
  border-top: 1px solid var(--line);
  text-align: center;
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.7;
}

/* ボトムナビ（スマホのみ） */
.bottom-nav {
  display: none;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: 56px;
  background: #fff;
  border-top: 1px solid var(--line);
  z-index: 200;
  box-shadow: 0 -2px 8px rgba(24,34,48,.08);
}
.bottom-nav__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--muted);
  font-size: 0.65rem;
  font-weight: 600;
  gap: 2px;
  border: none;
  background: none;
  cursor: pointer;
}
.bottom-nav__item.is-active { color: var(--teal); }
.bottom-nav__icon { font-size: 1.25rem; line-height: 1; }

@media (max-width: 760px) {
  .bottom-nav { display: flex; }
  body { padding-bottom: 56px; }
}

/* おすすめコース */
.course-steps {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}
.course-step {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  text-decoration: none;
  color: var(--ink);
  font-weight: 600;
  font-size: 0.95rem;
}
.course-step:hover { border-color: var(--teal); }
.course-step__num {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--teal);
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
```

- [ ] **Step 2: ブラウザで確認（Live Server で index.html を開く）**

CSSのみの変更なので表示崩れがないことを確認。

- [ ] **Step 3: コミット**

```bash
git add assets/style.css
git commit -m "style: ポータルリデザイン用CSSクラス追加"
```

---

## Task 3: quiz-data.json を作成

**Files:**
- Create: `quiz-data.json`

- [ ] **Step 1: quiz-data.json を作成**

```json
[
  {
    "question": "OSI参照モデルで、IPアドレスを使ったルーティングを担うのは第何層か？",
    "answer": "第3層（ネットワーク層）。IPプロトコルが動作する層で、異なるネットワーク間のパケット転送を行う。",
    "source": "ネットワーク",
    "url": "fe/technology/network/index.html"
  },
  {
    "question": "二分探索の計算量（最悪の場合）はどれか？",
    "answer": "O(log n)。データが半分ずつ減るため、n個のデータに対して最大 log₂n 回の比較で済む。",
    "source": "アルゴリズム",
    "url": "fe/technology/algorithm/algo-search.html"
  },
  {
    "question": "CPUがデバイスを待ち続けずにI/Oを行う仕組みを何というか？",
    "answer": "割り込み（インタラプト）。デバイスが処理完了時にCPUに通知するため、CPUは他の処理を続けられる。",
    "source": "コンピュータ概論",
    "url": "fe/technology/computer/io-devices-bus.html"
  },
  {
    "question": "AES・RSAの違いを一言で言うと？",
    "answer": "AESは共通鍵暗号（高速・同じ鍵を共有）、RSAは公開鍵暗号（鍵配送問題を解決）。実際はRSAでAESの鍵を安全に交換するハイブリッド方式が多い。",
    "source": "セキュリティ",
    "url": "fe/technology/security/index.html"
  },
  {
    "question": "クラウドの IaaS / PaaS / SaaS の違いは？",
    "answer": "IaaS=インフラ提供（VM・ストレージ）、PaaS=開発基盤提供（OS・ミドルウェア）、SaaS=アプリ提供（メール・オフィス）。ユーザーが管理する範囲が順に狭くなる。",
    "source": "クラウド",
    "url": "fe/technology/cloud/index.html"
  },
  {
    "question": "スタックとキューの違いは？",
    "answer": "スタックはLIFO（後入れ先出し）、キューはFIFO（先入れ先出し）。スタックは関数呼び出し管理、キューはプリンタ待ち行列などに使われる。",
    "source": "アルゴリズム",
    "url": "fe/technology/algorithm/algo-data-structure.html"
  },
  {
    "question": "SQLのトランザクションの4つの性質（ACID特性）は？",
    "answer": "原子性（Atomicity）・一貫性（Consistency）・独立性（Isolation）・永続性（Durability）。すべて満たすことでデータの信頼性が保証される。",
    "source": "データベース",
    "url": "fe/technology/database/index.html"
  },
  {
    "question": "ページング方式の仮想記憶でページフォールトが発生するのはどんな時？",
    "answer": "アクセスしたページが主記憶にない時。OSがディスクからページを読み込む（スワップイン）処理が発生し、一時的に処理が止まる。",
    "source": "コンピュータ概論",
    "url": "fe/technology/computer/virtual-memory-storage.html"
  },
  {
    "question": "ファイアウォールとWAFの違いは？",
    "answer": "ファイアウォールはIPアドレス・ポート単位で通信を制御（L3〜L4）。WAFはHTTP内容を解析してSQLインジェクション等を検知・遮断（L7）。",
    "source": "セキュリティ",
    "url": "fe/technology/security/index.html"
  },
  {
    "question": "プロジェクトのスケジュール管理で使われる「クリティカルパス」とは？",
    "answer": "プロジェクト完了までに必ず通る、余裕ゼロの作業経路。クリティカルパス上の作業が遅れると全体が遅延するため、重点管理が必要。",
    "source": "マネジメント",
    "url": "fe/technology/management/index.html"
  }
]
```

- [ ] **Step 2: コミット**

```bash
git add quiz-data.json
git commit -m "feat: 今日の一問データ（quiz-data.json）追加 10問"
```

---

## Task 4: app.js を作成

**Files:**
- Create: `assets/app.js`

- [ ] **Step 1: assets/app.js を作成**

```javascript
/* =============================================
   app.js — FE試験対策サイト 共通JS
   ============================================= */

const STORAGE_KEY = 'fe-completed-pages';

// ── 進捗：保存・取得 ──────────────────────────

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function markComplete(pageId, pageTitle, pageUrl) {
  const completed = getCompleted();
  if (completed.find(p => p.id === pageId)) return;
  completed.unshift({
    id: pageId,
    title: pageTitle,
    url: pageUrl,
    date: new Date().toISOString()
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

// ── 完了ボタン（各レッスンページ） ──────────────

function initCompleteButton() {
  const btn = document.querySelector('[data-complete]');
  if (!btn) return;

  const pageId = btn.dataset.complete;
  const completed = getCompleted();

  if (completed.find(p => p.id === pageId)) {
    btn.textContent = '✅ 学習済み';
    btn.classList.add('is-done');
    btn.disabled = true;
    return;
  }

  btn.addEventListener('click', () => {
    markComplete(pageId, document.title, window.location.href);
    btn.textContent = '✅ 学習済み';
    btn.classList.add('is-done');
    btn.disabled = true;
  });
}

// ── 最近見たページ（ポータルに表示） ─────────────

function renderRecentPages() {
  const container = document.getElementById('recent-pages');
  if (!container) return;

  const completed = getCompleted().slice(0, 5);
  if (completed.length === 0) {
    container.innerHTML = '<p style="color:var(--muted);font-size:.9rem;margin:0">まだ学習済みのページがありません。各ページ下部のボタンで記録できます。</p>';
    return;
  }

  container.innerHTML = completed.map(p =>
    `<a href="${p.url}" class="recent-item">📄 ${p.title}</a>`
  ).join('');
}

// ── 今日の一問 ───────────────────────────────

function getDailyQuestion(questions) {
  const d = new Date();
  const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  return questions[seed % questions.length];
}

function initDailyQuestion() {
  const widget = document.getElementById('daily-question');
  if (!widget) return;

  // quiz-data.json のパスはサイトルートからの相対パス
  const jsonPath = widget.dataset.jsonPath || 'quiz-data.json';

  fetch(jsonPath)
    .then(r => r.json())
    .then(questions => {
      const q = getDailyQuestion(questions);
      widget.querySelector('.quiz-widget__question').textContent = q.question;
      widget.querySelector('.quiz-widget__answer').textContent = q.answer;
      const src = widget.querySelector('.quiz-widget__source');
      if (src) {
        src.innerHTML = `出典: <a href="${q.url}">${q.source}</a>`;
      }
    })
    .catch(() => {
      widget.querySelector('.quiz-widget__question').textContent = '（問題の読み込みに失敗しました）';
    });

  const toggleBtn = widget.querySelector('.quiz-widget__toggle');
  const answerEl = widget.querySelector('.quiz-widget__answer');
  if (toggleBtn && answerEl) {
    toggleBtn.addEventListener('click', () => {
      answerEl.classList.toggle('is-visible');
      toggleBtn.textContent = answerEl.classList.contains('is-visible') ? '答えを隠す ▲' : '答えを見る ▼';
    });
  }
}

// ── 用語検索 ─────────────────────────────────

let searchData = [];

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  const jsonPath = input.dataset.jsonPath || 'assets/search-index.json';

  fetch(jsonPath)
    .then(r => r.json())
    .then(data => { searchData = data; });

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 1) {
      results.innerHTML = '';
      return;
    }

    const matches = searchData.filter(item =>
      item.term.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.tags.some(t => t.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      results.innerHTML = '<p style="color:var(--muted);margin:0">見つかりませんでした。</p>';
      return;
    }

    results.innerHTML = matches.map(item =>
      `<a href="${item.url}" class="search-result-item">
        <strong>${item.term}</strong>
        <span>${item.summary}</span>
        <small>${item.tags.map(t => `#${t}`).join(' ')}</small>
      </a>`
    ).join('');
  });

  // 人気ワードをクリックで入力
  document.querySelectorAll('.search-popular a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      input.value = a.textContent;
      input.dispatchEvent(new Event('input'));
    });
  });
}

// ── 進捗ページ ───────────────────────────────

const SECTIONS = [
  { id: 'basic-theory',  label: '基礎理論',      total: 6 },
  { id: 'network',       label: 'ネットワーク',   total: 6 },
  { id: 'cloud',         label: 'クラウド',       total: 5 },
  { id: 'algorithm',     label: 'アルゴリズム',   total: 8 },
  { id: 'security',      label: 'セキュリティ',   total: 8 },
  { id: 'computer',      label: 'コンピュータ概論', total: 15 },
  { id: 'management',    label: 'マネジメント',   total: 7 },
];

function renderProgress() {
  const container = document.getElementById('progress-list');
  if (!container) return;

  const completed = getCompleted();

  container.innerHTML = SECTIONS.map(sec => {
    const done = completed.filter(p => p.id.startsWith(sec.id)).length;
    const capped = Math.min(done, sec.total);
    const pct = Math.round((capped / sec.total) * 100);
    return `
      <div class="progress-section">
        <div class="progress-label">
          <span>${sec.label}</span>
          <span>${capped} / ${sec.total} ページ（${pct}%）</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar__fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }).join('');

  // リセットボタン
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('学習履歴をすべてリセットしますか？')) {
        localStorage.removeItem(STORAGE_KEY);
        renderProgress();
        renderRecentPages();
      }
    });
  }
}

// ── 更新履歴ページ ────────────────────────────

function renderHistory() {
  const container = document.getElementById('history-list');
  if (!container) return;

  const completed = getCompleted();
  if (completed.length === 0) {
    container.innerHTML = '<p style="color:var(--muted)">まだ学習済みのページがありません。</p>';
    return;
  }

  container.innerHTML = completed.map(p => {
    const d = new Date(p.date);
    const dateStr = `${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
    return `
      <a href="${p.url}" class="recent-item" style="justify-content:space-between;display:flex;align-items:center">
        <span>📄 ${p.title}</span>
        <small style="color:var(--muted);font-size:.78rem;flex-shrink:0;margin-left:8px">${dateStr}</small>
      </a>`;
  }).join('');
}

// ── 初期化 ───────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initDailyQuestion();
  initCompleteButton();
  renderRecentPages();
  initSearch();
  renderProgress();
  renderHistory();
});
```

- [ ] **Step 2: コミット**

```bash
git add assets/app.js
git commit -m "feat: app.js 追加（今日の一問・進捗・検索・更新履歴）"
```

---

## Task 5: index.html — ポータル全面改修

**Files:**
- Modify: `index.html`

- [ ] **Step 1: index.html を以下に書き換える**

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FE試験対策ノート | AI・IoT DXエンジニア養成科</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <header class="site-header">
    <div class="header-inner" style="grid-template-columns: 1fr;">
      <div>
        <h1 style="font-size: clamp(1.6rem, 4.5vw, 2.8rem); margin: 0 0 6px;">AI・IoT DXエンジニア養成科</h1>
        <p class="eyebrow" style="font-size: 0.95rem; margin: 0; opacity: 0.85;">授業ノート — FE試験対策向け整理</p>
      </div>
    </div>
  </header>

  <main style="max-width: 1100px; margin: 0 auto; padding: 28px 20px 48px;">

    <!-- 対象者 -->
    <div class="target-audience">
      📖 このサイトは、基本情報技術者試験（FE）を学ぶ初心者・職業訓練生向けの復習ノートです。
    </div>

    <!-- テクノロジ系 -->
    <section style="margin-bottom: 36px;">
      <h2 class="portal-section-title">テクノロジ系</h2>
      <div class="section-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px;">

        <a class="portal-card portal-card--done" href="fe/technology/basic-theory/index.html">
          <span class="portal-card__label">基礎理論</span>
          <p>進数・補数・浮動小数点・誤差・文字コード・論理演算・集合・確率</p>
          <span class="freq-badge freq-badge--high">★★★ 頻出</span>
        </a>

        <a class="portal-card portal-card--done" href="fe/technology/network/index.html">
          <span class="portal-card__label">ネットワーク</span>
          <p>OSI/TCP-IP・IPアドレス・DNS・Web・メール・無線・セキュリティ</p>
          <span class="freq-badge freq-badge--high">★★★ 頻出</span>
        </a>

        <a class="portal-card portal-card--done" href="fe/technology/cloud/index.html">
          <span class="portal-card__label">クラウド</span>
          <p>SaaS/PaaS/IaaS・仮想化・信頼性設計・クラウドセキュリティ</p>
          <span class="freq-badge freq-badge--mid">★★ 標準</span>
        </a>

        <a class="portal-card portal-card--done" href="fe/technology/algorithm/index.html">
          <span class="portal-card__label">アルゴリズム</span>
          <p>データ構造・探索・整列・計算量・擬似言語・制御構造</p>
          <span class="freq-badge freq-badge--high">★★★ 頻出</span>
        </a>

        <a class="portal-card portal-card--done" href="fe/technology/security/index.html">
          <span class="portal-card__label">セキュリティ</span>
          <p>脅威・暗号・認証・アクセス制御・ネットワーク防御・リスク管理</p>
          <span class="freq-badge freq-badge--high">★★★ 頻出</span>
        </a>

        <a class="portal-card portal-card--planned" href="fe/technology/database/index.html">
          <span class="portal-card__badge">準備中</span>
          <span class="portal-card__label">データベース</span>
          <p>関係DB・SQL・正規化・トランザクション</p>
          <span class="freq-badge freq-badge--high">★★★ 頻出</span>
        </a>

        <a class="portal-card portal-card--done" href="fe/technology/computer/index.html">
          <span class="portal-card__label">コンピュータ概論</span>
          <p>コンピュータ構成・OS・ソフトウェア・ハードウェア基礎</p>
          <span class="freq-badge freq-badge--mid">★★ 標準</span>
        </a>

        <a class="portal-card portal-card--planned" href="fe/technology/iot-security/index.html">
          <span class="portal-card__badge">準備中</span>
          <span class="portal-card__label">IoTセキュリティ</span>
          <p>AI・IoTの脅威・組込み機器・脆弱性・対策</p>
          <span class="freq-badge freq-badge--low">★ 参考</span>
        </a>

      </div>
    </section>

    <!-- マネジメント・ストラテジ系 -->
    <section style="margin-bottom: 36px;">
      <h2 class="portal-section-title">マネジメント・ストラテジ系</h2>
      <div class="section-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px;">

        <a class="portal-card portal-card--done" href="fe/technology/management/index.html">
          <span class="portal-card__label">マネジメント</span>
          <p>プロジェクト管理・PMBOK・WBS・スケジュール・コスト・品質・リスク</p>
          <span class="freq-badge freq-badge--mid">★★ 標準</span>
        </a>

        <a class="portal-card portal-card--planned" href="fe/strategy/index.html">
          <span class="portal-card__badge">準備中</span>
          <span class="portal-card__label">ストラテジ</span>
          <p>経営戦略・法務・標準化・デジタル社会</p>
          <span class="freq-badge freq-badge--mid">★★ 標準</span>
        </a>

      </div>
    </section>

    <!-- おすすめ学習コース -->
    <section style="margin-bottom: 36px;">
      <h2 class="portal-section-title">おすすめ学習コース</h2>
      <div class="course-steps">
        <a href="fe/technology/basic-theory/index.html" class="course-step">
          <span class="course-step__num">1</span>基礎理論（進数・論理演算）から始めよう
        </a>
        <a href="fe/technology/algorithm/index.html" class="course-step">
          <span class="course-step__num">2</span>アルゴリズム（データ構造・探索・整列）
        </a>
        <a href="fe/technology/network/index.html" class="course-step">
          <span class="course-step__num">3</span>ネットワーク（OSI・TCP/IP・DNS）
        </a>
        <a href="fe/technology/security/index.html" class="course-step">
          <span class="course-step__num">4</span>セキュリティ（暗号・認証・脅威対策）
        </a>
        <a href="fe/technology/computer/index.html" class="course-step">
          <span class="course-step__num">5</span>コンピュータ概論（CPU・メモリ・OS）
        </a>
      </div>
    </section>

    <!-- 今日の一問 -->
    <section style="margin-bottom: 36px;">
      <h2 class="portal-section-title">今日の一問</h2>
      <div class="quiz-widget" id="daily-question" data-json-path="quiz-data.json">
        <h3>📝 今日の問題</h3>
        <p class="quiz-widget__question">読み込み中...</p>
        <button class="quiz-widget__toggle">答えを見る ▼</button>
        <div class="quiz-widget__answer">
          <small class="quiz-widget__source"></small>
        </div>
      </div>
    </section>

    <!-- 最近学習したページ -->
    <section style="margin-bottom: 36px;">
      <h2 class="portal-section-title">最近学習したページ</h2>
      <div class="recent-pages" id="recent-pages"></div>
    </section>

    <!-- フッター -->
    <footer class="site-footer">
      本サイトは個人の学習用ノートです。内容に誤りが含まれる可能性があります。<br>
      試験対策では公式資料も必ず確認してください。<br>
      © 2026 Kazutyon
    </footer>

  </main>

  <!-- ボトムナビ（スマホのみ表示） -->
  <nav class="bottom-nav" aria-label="メインナビゲーション">
    <a href="index.html" class="bottom-nav__item is-active">
      <span class="bottom-nav__icon">🏠</span>ホーム
    </a>
    <a href="search.html" class="bottom-nav__item">
      <span class="bottom-nav__icon">🔍</span>検索
    </a>
    <a href="progress.html" class="bottom-nav__item">
      <span class="bottom-nav__icon">📊</span>進捗
    </a>
    <a href="progress.html#history" class="bottom-nav__item">
      <span class="bottom-nav__icon">🕐</span>更新履歴
    </a>
  </nav>

  <script src="assets/app.js"></script>
<script data-goatcounter="https://kazutyon.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
</body>
</html>
```

- [ ] **Step 2: Live Server でブラウザ確認**

チェック項目：
- 対象者セクションが表示される
- 各カードに頻出度バッジ（★★★/★★/★）が表示される
- おすすめコースのステップが表示される
- 「今日の一問」が読み込まれ、「答えを見る」ボタンが動く
- スマホサイズ（devtools の iPhone 表示）でボトムナビが出る
- フッターに免責事項が表示される

- [ ] **Step 3: コミット**

```bash
git add index.html
git commit -m "feat: ポータルリデザイン Phase1（対象者・バッジ・今日の一問・コース・ボトムナビ・免責）"
```

---

## Task 6: search-index.json と search.html を作成

**Files:**
- Create: `assets/search-index.json`
- Create: `search.html`

- [ ] **Step 1: assets/search-index.json を作成**

```json
[
  { "term": "OSI参照モデル", "summary": "通信を7層に分けたモデル。物理・データリンク・ネットワーク・トランスポート・セッション・プレゼンテーション・アプリケーション層。", "url": "fe/technology/network/index.html", "tags": ["ネットワーク", "プロトコル"] },
  { "term": "IPアドレス", "summary": "ネットワーク上の機器を識別する番号。IPv4は32ビット、IPv6は128ビット。", "url": "fe/technology/network/index.html", "tags": ["ネットワーク"] },
  { "term": "TCP", "summary": "信頼性のある通信を提供するトランスポート層プロトコル。3ウェイハンドシェイクで接続確立。", "url": "fe/technology/network/index.html", "tags": ["ネットワーク", "プロトコル"] },
  { "term": "DNS", "summary": "ドメイン名をIPアドレスに変換するシステム。名前解決とも呼ぶ。", "url": "fe/technology/network/index.html", "tags": ["ネットワーク"] },
  { "term": "AES", "summary": "共通鍵暗号方式。同じ鍵で暗号化・復号。高速だが鍵配送問題がある。", "url": "fe/technology/security/index.html", "tags": ["セキュリティ", "暗号"] },
  { "term": "RSA", "summary": "公開鍵暗号方式。公開鍵で暗号化、秘密鍵で復号。鍵配送問題を解決。", "url": "fe/technology/security/index.html", "tags": ["セキュリティ", "暗号"] },
  { "term": "デジタル署名", "summary": "秘密鍵で署名、公開鍵で検証。なりすまし・改ざん防止に使う。", "url": "fe/technology/security/index.html", "tags": ["セキュリティ", "認証"] },
  { "term": "二分探索", "summary": "ソート済みデータを半分ずつ絞り込む探索。計算量O(log n)。", "url": "fe/technology/algorithm/algo-search.html", "tags": ["アルゴリズム", "探索"] },
  { "term": "バブルソート", "summary": "隣接要素を比較・交換するソート。O(n²)。実装が簡単だが遅い。", "url": "fe/technology/algorithm/algo-sort.html", "tags": ["アルゴリズム", "整列"] },
  { "term": "クイックソート", "summary": "ピボットで分割して再帰的にソート。平均O(n log n)。最悪はO(n²)。", "url": "fe/technology/algorithm/algo-sort.html", "tags": ["アルゴリズム", "整列"] },
  { "term": "スタック", "summary": "後入れ先出し（LIFO）のデータ構造。関数呼び出しの管理に使われる。", "url": "fe/technology/algorithm/algo-data-structure.html", "tags": ["アルゴリズム", "データ構造"] },
  { "term": "キュー", "summary": "先入れ先出し（FIFO）のデータ構造。プリンタスプールなどに使われる。", "url": "fe/technology/algorithm/algo-data-structure.html", "tags": ["アルゴリズム", "データ構造"] },
  { "term": "DFS", "summary": "深さ優先探索。行けるところまで深く探索してから戻る。スタックで実装。", "url": "fe/technology/algorithm/algo-tree-search.html", "tags": ["アルゴリズム", "探索"] },
  { "term": "BFS", "summary": "幅優先探索。近い順に探索。キューで実装。最短経路の探索に向く。", "url": "fe/technology/algorithm/algo-tree-search.html", "tags": ["アルゴリズム", "探索"] },
  { "term": "CPU", "summary": "コンピュータの中央処理装置。制御装置・演算装置・レジスタから構成。", "url": "fe/technology/computer/cpu-architecture.html", "tags": ["コンピュータ概論", "ハードウェア"] },
  { "term": "キャッシュメモリ", "summary": "CPUと主記憶の間にある高速メモリ。参照の局所性を利用して高速化。L1/L2/L3の階層構造。", "url": "fe/technology/computer/memory-cache.html", "tags": ["コンピュータ概論", "メモリ"] },
  { "term": "仮想記憶", "summary": "ディスクを主記憶の一部として使う仕組み。ページングでメモリを仮想的に拡張。", "url": "fe/technology/computer/virtual-memory-storage.html", "tags": ["コンピュータ概論", "メモリ"] },
  { "term": "DMA", "summary": "CPUを介さずデバイスが直接メモリにアクセスする方式。CPU負荷を大幅に削減。", "url": "fe/technology/computer/io-scheduling-dma.html", "tags": ["コンピュータ概論", "I/O"] },
  { "term": "RTOS", "summary": "リアルタイムOS。組込みシステムで使われ、タスクの実行時間が保証される。", "url": "fe/technology/computer/bios-os-types.html", "tags": ["コンピュータ概論", "OS"] },
  { "term": "IaaS", "summary": "インフラ（VM・ストレージ・ネットワーク）をクラウドで提供するサービス形態。", "url": "fe/technology/cloud/index.html", "tags": ["クラウド"] },
  { "term": "SaaS", "summary": "アプリケーション全体をクラウドで提供。ユーザーはブラウザで利用するだけ。", "url": "fe/technology/cloud/index.html", "tags": ["クラウド"] },
  { "term": "補数", "summary": "負の数を表現するための方法。コンピュータでは2の補数を使う。", "url": "fe/technology/basic-theory/index.html", "tags": ["基礎理論", "2進数"] },
  { "term": "論理演算", "summary": "AND・OR・NOT・XOR。ビット演算やフラグ制御に使われる。", "url": "fe/technology/basic-theory/index.html", "tags": ["基礎理論"] },
  { "term": "SQLインジェクション", "summary": "悪意あるSQL文を入力してDBを不正操作する攻撃。プリペアドステートメントで対策。", "url": "fe/technology/security/index.html", "tags": ["セキュリティ", "攻撃"] },
  { "term": "クリティカルパス", "summary": "プロジェクト完了までに必ず通る、余裕ゼロの作業経路。遅れると全体が遅延。", "url": "fe/technology/management/index.html", "tags": ["マネジメント", "スケジュール"] }
]
```

- [ ] **Step 2: search.html を作成**

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>用語検索 | FE試験対策ノート</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <header class="site-header">
    <div class="header-inner" style="grid-template-columns: 1fr;">
      <div>
        <p class="eyebrow">用語検索</p>
        <h1 style="font-size: clamp(1.4rem, 4vw, 2rem); margin: 0 0 6px;">🔍 用語を検索</h1>
        <p class="lead">FE試験頻出の用語をすばやく調べる</p>
      </div>
    </div>
  </header>

  <main style="max-width: 720px; margin: 0 auto; padding: 24px 20px 80px;">

    <nav style="margin-bottom: 20px; font-size: 0.9rem;">
      <a href="index.html" style="color: var(--blue); font-weight: 700; text-decoration: none;">← ポータルへ戻る</a>
    </nav>

    <div class="search-input-wrap">
      <input
        type="search"
        id="search-input"
        class="search-input"
        placeholder="例：DFS、AES、クリティカルパス..."
        autocomplete="off"
        data-json-path="assets/search-index.json"
      >
    </div>

    <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 12px;">人気の検索ワード：</p>
    <div class="search-popular">
      <a href="#">DFS</a>
      <a href="#">AES</a>
      <a href="#">TCP</a>
      <a href="#">CPU</a>
      <a href="#">仮想記憶</a>
      <a href="#">クリティカルパス</a>
    </div>

    <div class="search-results" id="search-results"></div>

  </main>

  <nav class="bottom-nav" aria-label="メインナビゲーション">
    <a href="index.html" class="bottom-nav__item">
      <span class="bottom-nav__icon">🏠</span>ホーム
    </a>
    <a href="search.html" class="bottom-nav__item is-active">
      <span class="bottom-nav__icon">🔍</span>検索
    </a>
    <a href="progress.html" class="bottom-nav__item">
      <span class="bottom-nav__icon">📊</span>進捗
    </a>
    <a href="progress.html#history" class="bottom-nav__item">
      <span class="bottom-nav__icon">🕐</span>更新履歴
    </a>
  </nav>

  <script src="assets/app.js"></script>
<script data-goatcounter="https://kazutyon.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
</body>
</html>
```

- [ ] **Step 3: Live Server で search.html を開いて動作確認**

チェック項目：
- 「DFS」と入力すると結果が出る
- 人気ワードをクリックすると検索欄に入力される
- 結果をクリックすると該当ページに飛ぶ

- [ ] **Step 4: コミット**

```bash
git add assets/search-index.json search.html
git commit -m "feat: 用語検索 Phase3（search.html + search-index.json 25語）"
```

---

## Task 7: progress.html と更新履歴を作成

**Files:**
- Create: `progress.html`

- [ ] **Step 1: progress.html を作成**

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>学習進捗 | FE試験対策ノート</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <header class="site-header">
    <div class="header-inner" style="grid-template-columns: 1fr;">
      <div>
        <p class="eyebrow">学習進捗</p>
        <h1 style="font-size: clamp(1.4rem, 4vw, 2rem); margin: 0 0 6px;">📊 学習進捗</h1>
        <p class="lead">「学習済みにする」ボタンを押したページが記録されます</p>
      </div>
    </div>
  </header>

  <main style="max-width: 720px; margin: 0 auto; padding: 24px 20px 80px;">

    <nav style="margin-bottom: 20px; font-size: 0.9rem;">
      <a href="index.html" style="color: var(--blue); font-weight: 700; text-decoration: none;">← ポータルへ戻る</a>
    </nav>

    <!-- 進捗バー -->
    <section style="background: var(--paper); border: 1px solid var(--line); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
      <h2 style="font-size: 1.1rem; margin-bottom: 16px;">セクション別 進捗</h2>
      <div id="progress-list"></div>
      <button id="reset-btn" style="margin-top: 16px; padding: 8px 16px; border: 1px solid var(--rose); color: var(--rose); background: none; border-radius: 6px; font: inherit; cursor: pointer; font-size: 0.85rem;">
        履歴をリセット
      </button>
    </section>

    <!-- 更新履歴 -->
    <section id="history" style="background: var(--paper); border: 1px solid var(--line); border-radius: 8px; padding: 20px;">
      <h2 style="font-size: 1.1rem; margin-bottom: 12px;">🕐 更新履歴</h2>
      <div id="history-list"></div>
    </section>

  </main>

  <nav class="bottom-nav" aria-label="メインナビゲーション">
    <a href="index.html" class="bottom-nav__item">
      <span class="bottom-nav__icon">🏠</span>ホーム
    </a>
    <a href="search.html" class="bottom-nav__item">
      <span class="bottom-nav__icon">🔍</span>検索
    </a>
    <a href="progress.html" class="bottom-nav__item is-active">
      <span class="bottom-nav__icon">📊</span>進捗
    </a>
    <a href="progress.html#history" class="bottom-nav__item">
      <span class="bottom-nav__icon">🕐</span>更新履歴
    </a>
  </nav>

  <script src="assets/app.js"></script>
<script data-goatcounter="https://kazutyon.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
</body>
</html>
```

- [ ] **Step 2: Live Server で progress.html を確認**

チェック項目：
- セクション別の進捗バーが表示される（初期はすべて 0%）
- リセットボタンが表示される
- 更新履歴セクションが表示される

- [ ] **Step 3: コミット**

```bash
git add progress.html
git commit -m "feat: 学習進捗ページ Phase4（progress.html）"
```

---

## Task 8: 各レッスンページに「学習済みにする」ボタンを追加

**Files:**
- Modify: `fe/` 以下の全レッスン HTML（PowerShell スクリプトで一括処理）

- [ ] **Step 1: ページIDのルール確認**

`data-complete` に設定する pageId のルール：
- ファイルパスから `fe/technology/` または `fe/strategy/` を除いた部分
- スラッシュとドットをハイフンに置換
- 例: `fe/technology/algorithm/algo-dfs.html` → `algorithm-algo-dfs`

- [ ] **Step 2: PowerShell スクリプトで一括追加**

PowerShell で以下を実行：

```powershell
$root = "D:\vs_code\projects\AI-IOT\fe"
$files = Get-ChildItem $root -Recurse -Filter "*.html" | Where-Object { $_.Name -ne "index.html" }

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw -Encoding UTF8
    
    # すでにボタンがある場合はスキップ
    if ($content -match 'data-complete=') { continue }
    
    # </main> の直前に挿入する位置を探す
    if (-not ($content -match '</main>')) { continue }
    
    # pageId を生成（feフォルダからの相対パスをハイフン区切りに）
    $rel = $f.FullName.Replace($root + "\", "").Replace("\", "/").Replace(".html", "") -replace "^(technology|strategy)/", ""
    $pageId = $rel -replace "/", "-"
    
    $btnHtml = @"

    <div style="text-align:center; margin: 32px 0 8px;">
      <button class="complete-btn" data-complete="$pageId">このページを学習済みにする</button>
    </div>
    <script src="../../../assets/app.js"></script>
"@
    
    # </main> の直前に挿入
    $newContent = $content -replace '</main>', "$btnHtml`n  </main>"
    Set-Content $f.FullName $newContent -Encoding UTF8 -NoNewline
    Write-Output "Updated: $($f.Name) [id: $pageId]"
}
```

> **注意:** `assets/app.js` への相対パスは `fe/technology/*/` の深さに合わせて `../../../assets/app.js` にしている。フォルダの深さが違うファイルがある場合は手動確認すること。

- [ ] **Step 3: 数ページをブラウザで開いて確認**

チェック項目：
- 「このページを学習済みにする」ボタンが表示される
- クリックすると「✅ 学習済み」に変わる
- progress.html を開くとそのセクションのバーが増える

- [ ] **Step 4: コミット**

```bash
git add fe/
git commit -m "feat: 全レッスンページに学習済みボタン追加 Phase4"
```

---

## Task 9: main へマージ・公開

**Files:** なし（git操作のみ）

- [ ] **Step 1: 最終ブラウザ確認（スマホサイズ）**

Chrome devtools の iPhone 表示で以下を確認：
- ポータル（index.html）全体が読みやすい
- ボトムナビが表示・タップできる
- 今日の一問が動く
- 検索が動く
- 学習済みボタンを押すと progress.html に反映される

- [ ] **Step 2: main にマージ**

```bash
git checkout main
git merge redesign
git push origin main
```

- [ ] **Step 3: redesign ブランチ削除（任意）**

```bash
git branch -d redesign
git push origin --delete redesign
```

---

## 注意事項

- **ローカル確認は必ず Live Server を使うこと。** `file://` プロトコルでは `fetch()` が CORS エラーになり、今日の一問・検索が動かない。VS Code 拡張「Live Server」または `npx serve` を使う。
- `app.js` の `SECTIONS` 配列の `total` 数は実際のページ数に合わせて更新すること。
- 学習済みボタンの `data-complete` ID が重複しないよう、スクリプト実行後に出力を確認すること。
