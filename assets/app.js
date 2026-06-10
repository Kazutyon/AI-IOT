const fallbackCurriculum = {
  sections: [
    {
      id: "basic-theory",
      title: "基礎理論",
      category: "technology",
      status: "in-progress",
      description: "進数、論理、確率、情報理論、オートマトンを扱う土台の分野。",
      href: "fe/technology/basic-theory/index.html",
      items: [
        { title: "進数・基数変換", href: "fe/technology/basic-theory/radix.html", status: "draft" }
      ]
    },
    {
      id: "algorithm",
      title: "アルゴリズム",
      category: "technology",
      status: "planned",
      description: "データ構造、探索、整列、計算量、擬似言語問題の対策。",
      href: "fe/technology/algorithm/index.html",
      items: []
    },
    {
      id: "network",
      title: "ネットワーク",
      category: "technology",
      status: "done",
      description: "OSI/TCP-IP、IPアドレス、DNS、Web、無線、ネットワークセキュリティ。",
      href: "fe/technology/network/index.html",
      items: [
        { title: "ネットワークの基本とデータ伝送", href: "fe/technology/network/network-basic.html", status: "done" },
        { title: "IPアドレス・サブネット", href: "fe/technology/network/ip-subnet.html", status: "planned" }
      ]
    },
    {
      id: "security",
      title: "セキュリティ",
      category: "technology",
      status: "planned",
      description: "認証、暗号、脆弱性、攻撃手法、組織的対策を整理する分野。",
      href: "fe/technology/security/index.html",
      items: []
    },
    {
      id: "database",
      title: "データベース",
      category: "technology",
      status: "planned",
      description: "関係データベース、SQL、正規化、トランザクションを扱う分野。",
      href: "fe/technology/database/index.html",
      items: []
    },
    {
      id: "management",
      title: "マネジメント",
      category: "management",
      status: "in-progress",
      description: "PMBOK、サービスマネジメント、システム監査など。",
      href: "fe/management/index.html",
      items: []
    },
    {
      id: "strategy",
      title: "ストラテジ",
      category: "strategy",
      status: "planned",
      description: "経営戦略、法務、標準化、デジタル社会の制度を扱う分野。",
      href: "fe/strategy/index.html",
      items: []
    }
  ],
  sources: [
    {
      title: "1_基礎理論（数学・論理・情報理論99）.pdf",
      category: "基礎理論",
      status: "作成中",
      next: "既存HTMLを参考に、共通テンプレートへ再構成"
    },
    {
      title: "1_ネットワーク基礎.pdf",
      category: "ネットワーク",
      status: "一部HTML化済み",
      next: "TCP/IP、IPアドレス、DNS/Web/メールを章ごとに精読"
    },
    {
      title: "2_クラウド基礎.pdf",
      category: "ネットワーク / システム構成",
      status: "未作成",
      next: "ネットワーク基礎の後に分野マッピング"
    },
    {
      title: "1_情報セキュリティー.pdf",
      category: "セキュリティ",
      status: "未作成",
      next: "章ごとに精読メモ化"
    }
  ]
};

const statusLabels = {
  done: "作成済み",
  "in-progress": "作成中",
  planned: "未作成"
};

function pageHref(item) {
  return item.status === "done" ? item.href : "coming-soon.html";
}

let curriculum = fallbackCurriculum;
let activeFilter = "all";

async function loadCurriculum() {
  try {
    const response = await fetch("data/curriculum.json", { cache: "no-store" });
    if (!response.ok) return fallbackCurriculum;
    return await response.json();
  } catch {
    return fallbackCurriculum;
  }
}

function countByStatus(sections, status) {
  return sections.filter((section) => section.status === status).length;
}

function renderMetrics() {
  document.getElementById("done-count").textContent = countByStatus(curriculum.sections, "done");
  document.getElementById("progress-count").textContent = countByStatus(curriculum.sections, "in-progress");
  document.getElementById("planned-count").textContent = countByStatus(curriculum.sections, "planned");
}

function renderSections() {
  const grid = document.getElementById("section-grid");
  const sections = activeFilter === "all"
    ? curriculum.sections
    : curriculum.sections.filter((section) => section.status === activeFilter);

  grid.innerHTML = sections.map((section) => {
    const itemCount = section.items?.length ?? 0;
    const href = pageHref(section);
    return `
      <article class="card" data-category="${section.category}">
        <h3>${section.title}</h3>
        <p>${section.description}</p>
        <div class="card-footer">
          <span class="status ${section.status}">${statusLabels[section.status]}</span>
          <a href="${href}">${itemCount}ページ</a>
        </div>
      </article>
    `;
  }).join("");
}

function collectItems() {
  return curriculum.sections.flatMap((section) =>
    (section.items || []).map((item) => ({
      ...item,
      sectionTitle: section.title
    }))
  );
}

function renderLists() {
  const items = collectItems();
  const recent = items.filter((item) => item.status === "done" || item.status === "draft").slice(0, 5);
  const next = items.filter((item) => item.status === "planned").slice(0, 5);

  document.getElementById("recent-list").innerHTML = renderListItems(recent, "まだ作成済み教材は少ないです。");
  document.getElementById("next-list").innerHTML = renderListItems(next, "次の候補はPDF対応表から追加します。");
}

function renderListItems(items, emptyText) {
  if (!items.length) {
    return `<div class="list-item"><p>${emptyText}</p></div>`;
  }

  return items.map((item) => `
    <article class="list-item">
      <h3>${item.title}</h3>
      <p>${item.sectionTitle}</p>
      <a href="${pageHref(item)}">ページを開く</a>
    </article>
  `).join("");
}

function renderSources() {
  const body = document.getElementById("source-table");
  body.innerHTML = curriculum.sources.map((source) => `
    <tr>
      <td>${source.title}</td>
      <td>${source.category}</td>
      <td>${source.status}</td>
      <td>${source.next}</td>
    </tr>
  `).join("");
}

function setupFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderSections();
    });
  });
}

function render() {
  renderMetrics();
  renderSections();
  renderLists();
  renderSources();
}

loadCurriculum().then((data) => {
  curriculum = data;
  setupFilters();
  render();
});
