const fallbackCurriculum = {
  sections: [
    {
      id: "basic-theory",
      title: "基礎理論",
      category: "technology",
      status: "in-progress",
      description: "進数、論理、確率、情報理論、オートマトンを扱う土台の分野。進数・補数・浮動小数点ページを作成済み。",
      href: "fe/technology/basic-theory/index.html",
      items: [
        { title: "進数・基数変換と補数表現", href: "fe/technology/basic-theory/radix-complement.html", status: "done" },
        { title: "浮動小数点・誤差・文字コード", href: "fe/technology/basic-theory/float-error-code.html", status: "done" },
        { title: "論理演算と論理回路", href: "fe/technology/basic-theory/logic-circuit.html", status: "done" },
        { title: "集合と関係", href: "fe/technology/basic-theory/sets-relations.html", status: "done" }
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
      description: "OSI/TCP-IP、IPアドレス、DNS、Web、メール、無線、セキュリティ。全12教材ページ完成。",
      href: "fe/technology/network/index.html",
      items: [
        { title: "ネットワークの基本とデータ伝送", href: "fe/technology/network/network-basic.html", status: "done" },
        { title: "プロトコルとOSI/TCP/IP階層モデル", href: "fe/technology/network/network-protocol.html", status: "done" },
        { title: "IPアドレスとMACアドレス", href: "fe/technology/network/network-ip-mac.html", status: "done" },
        { title: "DHCP・NAT/NAPT・ルーティング・デフォルトGW", href: "fe/technology/network/dhcp-nat-routing.html", status: "done" },
        { title: "ネットワーク機器とパケット交換", href: "fe/technology/network/network-devices-switching.html", status: "done" },
        { title: "サブネットとCIDR", href: "fe/technology/network/ip-subnet.html", status: "done" },
        { title: "ネットワーク接続方式とイーサネット", href: "fe/technology/network/network-connection-ethernet.html", status: "done" },
        { title: "無線LAN・WAN・VLAN・SDN", href: "fe/technology/network/wireless-wan-vlan-sdn.html", status: "done" },
        { title: "インターネット・メール・Webのしくみ", href: "fe/technology/network/dns-web-mail.html", status: "done" },
        { title: "ネットワークプロトコル詳細", href: "fe/technology/network/network-protocols-advanced.html", status: "done" },
        { title: "ネットワークセキュリティ", href: "fe/technology/network/network-security.html", status: "done" },
        { title: "無線・モバイル通信とネットワーク監視", href: "fe/technology/network/wireless-mobile-monitoring.html", status: "done" }
      ]
    },
    {
      id: "cloud",
      title: "クラウド",
      category: "technology",
      status: "done",
      description: "クラウドの定義、SaaS/PaaS/IaaS、仮想化、信頼性設計、セキュリティ。",
      href: "fe/technology/cloud/index.html",
      items: [
        { title: "クラウドの定義と歴史", href: "fe/technology/cloud/cloud-basic-1.html", status: "done" },
        { title: "クラウドの基本特徴", href: "fe/technology/cloud/cloud-basic-2.html", status: "done" },
        { title: "クラウドの種類", href: "fe/technology/cloud/cloud-basic-3.html", status: "done" },
        { title: "IaaS / PaaS / SaaS", href: "fe/technology/cloud/cloud-basic-4.html", status: "done" },
        { title: "仮想化技術", href: "fe/technology/cloud/cloud-basic-5.html", status: "done" },
        { title: "サーバー・ストレージ・ネットワーク", href: "fe/technology/cloud/cloud-basic-6.html", status: "done" },
        { title: "信頼性と障害対策", href: "fe/technology/cloud/cloud-basic-7.html", status: "done" },
        { title: "クラウドセキュリティ", href: "fe/technology/cloud/cloud-basic-8.html", status: "done" },
        { title: "導入メリットと事業者選定", href: "fe/technology/cloud/cloud-basic-9.html", status: "done" }
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
      status: "planned",
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
      status: "一部HTML化済み",
      next: "進数・基数変換・補数をGitHub Pages反映。次は浮動小数点・誤差・文字コード"
    },
    {
      title: "1_2(2)進数のお話.pdf",
      category: "基礎理論",
      status: "一部統合済み",
      next: "進数・基数変換と補数表現ページへ補助資料として統合済み"
    },
    {
      title: "1_ネットワーク基礎.pdf",
      category: "ネットワーク",
      status: "HTML化済み",
      next: "全296ページ 12教材ページHTML化完了。GitHub Pages反映済み"
    },
    {
      title: "2_クラウド基礎.pdf",
      category: "ネットワーク / システム構成",
      status: "HTML化済み",
      next: "全9ページGitHub Pages反映済み"
    },
    {
      title: "1_情報セキュリティー.pdf",
      category: "セキュリティ",
      status: "未作成",
      next: "章ごとに精読メモ化"
    },
    {
      title: "1_2_AIの_IoTセキュリティー.pdf",
      category: "セキュリティ / IoT",
      status: "未作成",
      next: "情報セキュリティ本編と重複を整理してIoTセキュリティページ化"
    },
    {
      title: "コンピュータ概論.pdf",
      category: "テクノロジ基礎",
      status: "未作成",
      next: "FE出題範囲に合わせてコンピュータ構成・OS・ソフトウェアへ分割"
    },
    {
      title: "2_アルゴリズムとデータ構造.pdf",
      category: "アルゴリズム",
      status: "未作成",
      next: "データ構造、探索、整列、計算量、擬似言語へ分割"
    },
    {
      title: "1_マネジメント.pdf",
      category: "マネジメント",
      status: "未作成",
      next: "PMBOK、サービスマネジメント、監査に分けて精読"
    },
    {
      title: "3_経営・戦略.pdf",
      category: "ストラテジ",
      status: "未作成",
      next: "経営戦略、技術戦略、システム戦略、会計へ分割"
    },
    {
      title: "2_関連法令・契約.pdf",
      category: "ストラテジ / 法務",
      status: "未作成",
      next: "知的財産、個人情報保護、セキュリティ関連法規へ分割"
    },
    {
      title: "3_デジタル社会の形成について.pdf",
      category: "ストラテジ / デジタル社会",
      status: "未作成",
      next: "デジタル庁、標準化、ガバメントクラウド、法制度を試験向けに整理"
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
  const items = sections.flatMap((s) => s.items || []);
  if (status === "in-progress") {
    return items.filter((item) => item.status === "in-progress" || item.status === "draft").length;
  }
  return items.filter((item) => item.status === status).length;
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
