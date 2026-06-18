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
  { id: 'basic-theory',      label: '基礎理論',        total: 11 },
  { id: 'network',           label: 'ネットワーク',     total: 12 },
  { id: 'cloud',             label: 'クラウド',         total: 9 },
  { id: 'algorithm',         label: 'アルゴリズム',     total: 8 },
  { id: 'security',          label: 'セキュリティ',     total: 23 },
  { id: 'computer',          label: 'コンピュータ概論', total: 15 },
  { id: 'management',        label: 'マネジメント',     total: 20 },
  { id: 'business-strategy', label: 'ストラテジ',       total: 12 },
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
