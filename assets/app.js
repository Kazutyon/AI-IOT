const fallbackCurriculum = {
  sections: [
    {
      id: "basic-theory",
      title: "基礎理論",
      category: "technology",
      status: "done",
      description: "進数、論理、確率、情報理論、オートマトンを扱う土台の分野。全11教材ページ完成。",
      href: "fe/technology/basic-theory/index.html",
      items: [
        { title: "進数・基数変換と補数表現", href: "fe/technology/basic-theory/radix-complement.html", status: "done" },
        { title: "浮動小数点・誤差・文字コード", href: "fe/technology/basic-theory/float-error-code.html", status: "done" },
        { title: "論理演算と論理回路", href: "fe/technology/basic-theory/logic-circuit.html", status: "done" },
        { title: "集合と関係", href: "fe/technology/basic-theory/sets-relations.html", status: "done" },
        { title: "確率の基礎と期待値", href: "fe/technology/basic-theory/probability-statistics.html", status: "done" },
        { title: "分散・標準偏差・頻度分布", href: "fe/technology/basic-theory/variance-statistics.html", status: "done" },
        { title: "情報量とエントロピー", href: "fe/technology/basic-theory/information-entropy.html", status: "done" },
        { title: "ハフマン符号と通信路容量", href: "fe/technology/basic-theory/huffman-channel.html", status: "done" },
        { title: "情報理論の応用", href: "fe/technology/basic-theory/infotheory-application.html", status: "done" },
        { title: "形式言語とオートマトン", href: "fe/technology/basic-theory/automaton-regex.html", status: "done" },
        { title: "DFAと状態遷移図", href: "fe/technology/basic-theory/dfa-state-transition.html", status: "done" }
      ]
    },
    {
      id: "algorithm",
      title: "アルゴリズム",
      category: "technology",
      status: "done",
      description: "データ構造、探索、整列、計算量、擬似言語問題の対策。全8ページ完成。",
      href: "fe/technology/algorithm/index.html",
      items: [
        { title: "木構造と探索（二分木・BST・DFS/BFS）", href: "fe/technology/algorithm/algo-tree-search.html", status: "done" },
        { title: "探索アルゴリズム（線形探索・二分探索）", href: "fe/technology/algorithm/algo-search.html", status: "done" },
        { title: "整列（ソート）アルゴリズム", href: "fe/technology/algorithm/algo-sort.html", status: "done" },
        { title: "フローチャート・再帰・計算量", href: "fe/technology/algorithm/algo-recursion.html", status: "done" },
        { title: "データ構造（配列・リスト・スタック・キュー・ハッシュ）", href: "fe/technology/algorithm/algo-data-structure.html", status: "done" },
        { title: "グラフ構造（DFS・BFS・ダイクストラ・最小全域木）", href: "fe/technology/algorithm/algo-graph.html", status: "done" },
        { title: "アルゴリズム基本（擬似言語・Big-O・評価基準）", href: "fe/technology/algorithm/algo-basic.html", status: "done" },
        { title: "制御構造（順次・選択・反復・擬似言語・トレース）", href: "fe/technology/algorithm/algo-control.html", status: "done" }
      ]
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
      status: "done",
      description: "脅威、暗号、認証、アクセス制御、ネットワーク防御、アプリケーション対策、リスク管理。全22教材ページ完成。",
      href: "fe/technology/security/index.html",
      items: [
        { title: "情報セキュリティの基礎", href: "fe/technology/security/security-basics.html", status: "done" },
        { title: "マルウェアとランサムウェア", href: "fe/technology/security/malware-ransomware.html", status: "done" },
        { title: "APTとソーシャルエンジニアリング", href: "fe/technology/security/apt-social-engineering.html", status: "done" },
        { title: "フィッシングとWebアプリ脅威", href: "fe/technology/security/phishing-web-threats.html", status: "done" },
        { title: "サーバーとIoTの脅威", href: "fe/technology/security/server-iot-threats.html", status: "done" },
        { title: "クラウド・AI脅威と最新動向", href: "fe/technology/security/cloud-ai-threats.html", status: "done" },
        { title: "暗号技術の基礎", href: "fe/technology/security/cryptography-basics.html", status: "done" },
        { title: "RSA公開鍵暗号 実験室", href: "fe/technology/security/rsa-lab.html", status: "done" },
        { title: "TLSとPKIの仕組み", href: "fe/technology/security/tls-pki.html", status: "done" },
        { title: "認証技術の基礎", href: "fe/technology/security/authentication-basics.html", status: "done" },
        { title: "高度な認証とプロトコル", href: "fe/technology/security/advanced-auth-protocols.html", status: "done" },
        { title: "アクセス制御の仕組み", href: "fe/technology/security/access-control.html", status: "done" },
        { title: "ネットワーク防御の基礎", href: "fe/technology/security/network-defense-basics.html", status: "done" },
        { title: "ネットワーク分離とゼロトラスト", href: "fe/technology/security/segmentation-zero-trust.html", status: "done" },
        { title: "アプリケーションセキュリティの基礎", href: "fe/technology/security/application-security-basics.html", status: "done" },
        { title: "データ保護とセキュリティテスト", href: "fe/technology/security/data-protection-security-testing.html", status: "done" },
        { title: "APIセキュリティとXSS対策", href: "fe/technology/security/api-security-xss.html", status: "done" },
        { title: "サーバーセキュリティの基礎", href: "fe/technology/security/server-security-basics.html", status: "done" },
        { title: "組み込み・IoTセキュリティ", href: "fe/technology/security/embedded-iot-security.html", status: "done" },
        { title: "リスクマネジメント", href: "fe/technology/security/risk-management.html", status: "done" },
        { title: "セキュリティポリシーとインシデント管理", href: "fe/technology/security/security-policy-incident-management.html", status: "done" },
        { title: "セキュリティ監査と事業継続計画", href: "fe/technology/security/security-audit-bcp.html", status: "done" },
        { title: "物理的セキュリティ", href: "fe/technology/security/physical-security.html", status: "done" }
      ]
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
      id: "computer",
      title: "コンピュータ概論",
      category: "technology",
      status: "planned",
      description: "コンピュータ構成、OS、ソフトウェア、ハードウェア基礎を扱う分野。",
      href: "fe/technology/computer/index.html",
      items: []
    },
    {
      id: "iot-security",
      title: "IoTセキュリティ",
      category: "technology",
      status: "planned",
      description: "AI・IoTの脅威、組込み機器の脆弱性、対策、関連制度を扱う分野。",
      href: "fe/technology/iot-security/index.html",
      items: []
    },
    {
      id: "management",
      title: "マネジメント",
      category: "management",
      status: "done",
      description: "プロジェクト管理、開発モデル、PMBOK、WBS、スケジュール、コスト、品質、リスク、変更、調達。全20教材ページ完成。",
      href: "fe/technology/management/index.html",
      items: [
        { title: "プロジェクトの基礎・開発モデル", href: "fe/technology/management/project-basics-development-models.html", status: "done" },
        { title: "開発モデルの分類と選定基準", href: "fe/technology/management/development-model-selection.html", status: "done" },
        { title: "ウォーターフォールモデル（詳細）", href: "fe/technology/management/waterfall-model.html", status: "done" },
        { title: "アジャイル開発とスクラム", href: "fe/technology/management/agile-scrum.html", status: "done" },
        { title: "スクラムのレビュー・レトロスペクティブ・比較", href: "fe/technology/management/scrum-review-retrospective.html", status: "done" },
        { title: "PMBOK概要・10の管理領域（前半）", href: "fe/technology/management/pmbok-overview.html", status: "done" },
        { title: "10の管理領域（後半）・スコープ管理詳細", href: "fe/technology/management/pmbok-scope-management.html", status: "done" },
        { title: "WBS（作業分解構造）", href: "fe/technology/management/wbs.html", status: "done" },
        { title: "スケジュール管理・ガントチャート", href: "fe/technology/management/schedule-gantt.html", status: "done" },
        { title: "依存関係（FS/SS/FF）", href: "fe/technology/management/dependency-relationships.html", status: "done" },
        { title: "クリティカルパス", href: "fe/technology/management/critical-path.html", status: "done" },
        { title: "進捗管理", href: "fe/technology/management/progress-management.html", status: "done" },
        { title: "コスト管理", href: "fe/technology/management/cost-management.html", status: "done" },
        { title: "品質管理・QC七つ道具", href: "fe/technology/management/quality-management-qc-tools.html", status: "done" },
        { title: "コミュニケーション管理", href: "fe/technology/management/communication-management.html", status: "done" },
        { title: "リスク管理", href: "fe/technology/management/risk-management.html", status: "done" },
        { title: "課題管理", href: "fe/technology/management/issue-management.html", status: "done" },
        { title: "変更管理（前編）", href: "fe/technology/management/change-management-1.html", status: "done" },
        { title: "変更管理（後編）", href: "fe/technology/management/change-management-2.html", status: "done" },
        { title: "調達管理", href: "fe/technology/management/procurement-management.html", status: "done" }
      ]
    },
    {
      id: "strategy",
      title: "ストラテジ",
      category: "strategy",
      status: "planned",
      description: "経営戦略、法務、標準化、デジタル社会の制度を扱う分野。",
      href: "fe/strategy/index.html",
      items: [
        { title: "経営・戦略", href: "fe/strategy/business-strategy/index.html", status: "planned" },
        { title: "関連法令・契約", href: "fe/strategy/legal/index.html", status: "planned" },
        { title: "デジタル社会の形成", href: "fe/strategy/digital-society/index.html", status: "planned" }
      ]
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
      status: "HTML化済み",
      next: "全22ページGitHub Pages反映用に登録済み"
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
      status: "HTML化済み",
      next: "全8ページ（木構造・探索・整列・再帰計算量・データ構造・グラフ・基本・制御構造）をGitHub Pages反映用に登録済み"
    },
    {
      title: "1_マネジメント.pdf",
      category: "マネジメント",
      status: "HTML化済み",
      next: "p1-p179を20教材ページとしてGitHub Pages反映用に登録済み"
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
