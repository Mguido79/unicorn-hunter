const tabs = [
  "executive",
  "markets",
  "annuities",
  "life",
  "features",
  "rates",
  "retail",
  "risk",
  "regulation",
  "filings",
  "companies",
  "sentiment"
];

function resizeDashboardCharts() {
  if (!window.Chart || typeof Chart.getChart !== "function") return;
  document.querySelectorAll(".chart-wrap canvas").forEach((canvas) => {
    const chart = Chart.getChart(canvas);
    if (chart) chart.resize();
  });
}

function activateTab(name) {
  tabs.forEach((t) => {
    document.getElementById(t).classList.add("hidden");
    document.getElementById("tab-" + t).classList.remove("active");
  });
  document.getElementById(name).classList.remove("hidden");
  const btn = document.getElementById("tab-" + name);
  btn.classList.add("active");
  if (typeof btn.scrollIntoView === "function") {
    btn.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
  }
  requestAnimationFrame(resizeDashboardCharts);
}

function inferMarket(item) {
  const explicit = item && (item.market || item.ticker);
  if (explicit) {
    const key = String(explicit).toLowerCase();
    if (key.startsWith("jp") || key.includes("japan")) return "JP";
    if (key.includes("global")) return "Global";
    if (key.startsWith("us") || key.includes("united")) return "US";
  }
  const blob = [
    item.jurisdiction,
    item.owner,
    item.ticker,
    item.sector,
    item.label,
    item.name,
    item.title
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  if (/\b(japan|nisa|kampo|jgb|fsa|liaj)\b/.test(blob) || blob.includes("jp ") || blob.startsWith("jp")) {
    return "JP";
  }
  if (/\b(global|iais|ics)\b/.test(blob)) return "Global";
  return "US";
}

function applyMarketFilter(group, market) {
  document.querySelectorAll(`.market-section[data-group="${group}"]`).forEach((el) => {
    const sectionMarket = el.dataset.market;
    const show =
      market === "all" ||
      sectionMarket === market ||
      sectionMarket === "Global";
    el.classList.toggle("hidden", !show);
  });
}

function wireMarketToggles() {
  document.querySelectorAll(".market-toggle[data-group]").forEach((root) => {
    root.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-market]");
      if (!btn || !root.contains(btn)) return;
      root.querySelectorAll("[data-market]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyMarketFilter(root.dataset.group, btn.dataset.market);
    });
  });
}

function card(label, value, extra) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${label}</h3>
    <div class="value">${value}</div>
    ${extra ? `<div class="meta">${extra}</div>` : ""}
  `;
  return div;
}

function threatCard(item) {
  const market = inferMarket(item);
  const marketLabel = market === "JP" ? "Japan" : market === "US" ? "United States" : "Global";
  const severity = item.severity || "Watch";
  const div = document.createElement("div");
  div.className = "card threat-card";

  const badgeRow = document.createElement("div");
  badgeRow.className = "threat-card-meta";

  const marketBadge = document.createElement("span");
  marketBadge.className = "market-badge " + market.toLowerCase();
  marketBadge.textContent = marketLabel;

  const severityBadge = document.createElement("span");
  severityBadge.className = "badge " + severity.toLowerCase();
  severityBadge.textContent = severity;

  badgeRow.append(marketBadge, severityBadge);

  const title = document.createElement("div");
  title.className = "value";
  title.textContent = item.title;

  const summary = document.createElement("p");
  summary.className = "card-summary";
  summary.textContent = item.summary || "";

  const source = document.createElement("a");
  source.className = "threat-source";
  source.href = item.sourceUrl;
  source.target = "_blank";
  source.rel = "noopener noreferrer";
  source.textContent = item.sourceLabel || "Source";

  div.append(badgeRow, title, summary, source);
  return div;
}

function fillThreats(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = "threat-list";
  el.replaceChildren(...items.map(threatCard));
}

function regulationCard(item) {
  const market = inferMarket(item);
  const summary = item.summary || item.detail || item.body || "";
  const category = item.category ? String(item.category) : "";
  const source = item.sourceUrl
    ? `<a class="threat-source" href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceLabel || "Source"}</a>`
    : "";
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <span class="market-badge ${market.toLowerCase()}">${market === "JP" ? "Japan" : market === "US" ? "United States" : "Global"}</span>
    ${category ? `<span class="market-badge ${category === "retail" ? "global" : "us"}">${category}</span>` : ""}
    <h3>${item.jurisdiction} · ${item.status} · ${item.impact} impact</h3>
    <div class="value">${item.title}</div>
    ${summary ? `<p class="card-summary">${summary}</p>` : ""}
    ${source}
  `;
  return div;
}

function fillGrid(id, nodes) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = "kpi-grid";
  el.replaceChildren(...nodes);
}

function isPublicTicker(ticker) {
  const t = String(ticker || "").trim();
  return Boolean(t) && t !== "Mutual" && t !== "Private";
}

function listingEntry(ticker) {
  if (!isPublicTicker(ticker)) return null;
  return (dashboardData.listingCatalog || {})[ticker] || null;
}

function quoteForTicker(ticker) {
  const entry = listingEntry(ticker);
  if (!entry) return null;
  return (dashboardData.quotes || {})[entry.yahooSymbol] || null;
}

function formatQuotePrice(price, currency) {
  if (price == null || price === "" || Number.isNaN(Number(price))) return "n/a";
  const n = Number(price);
  if (currency === "JPY") {
    return Number.isInteger(n)
      ? n.toLocaleString("en-US")
      : n.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  }
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatSignedNumber(value, digits) {
  if (value == null || value === "" || Number.isNaN(Number(value))) return "n/a";
  const n = Number(value);
  const sign = n > 0 ? "+" : "";
  return sign + n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function changeClass(value) {
  const n = Number(value);
  if (value == null || Number.isNaN(n) || n === 0) return "chg-flat";
  return n > 0 ? "chg-up" : "chg-down";
}

function quoteLine(ticker) {
  if (!isPublicTicker(ticker)) return "";
  const entry = listingEntry(ticker) || {};
  const q = quoteForTicker(ticker);
  if (!q || q.price == null) return "n/a";
  const ccy = q.currency || entry.currency || "";
  const asOf = q.asOf ? ` · ${q.asOf}` : "";
  const changeBit =
    q.change != null && q.pct != null
      ? ` · ${formatSignedNumber(q.change, 2)} (${formatSignedNumber(q.pct, 2)}%)`
      : "";
  return `${formatQuotePrice(q.price, ccy)}${changeBit} ${ccy}${asOf}`.trim();
}

function financeLinks(rowOrTicker) {
  const ticker = typeof rowOrTicker === "string" ? rowOrTicker : (rowOrTicker && rowOrTicker.ticker) || "";
  const entry = listingEntry(ticker);
  const yahoo = (rowOrTicker && rowOrTicker.yahooUrl) || (entry && entry.yahooUrl);
  const google = (rowOrTicker && rowOrTicker.googleUrl) || (entry && entry.googleUrl);
  if (!yahoo && !google) return "";
  const yahooLink = yahoo
    ? `<a class="filing-link" href="${yahoo}" target="_blank" rel="noopener noreferrer">Yahoo</a>`
    : "";
  const googleLink = google
    ? `<a class="filing-link" href="${google}" target="_blank" rel="noopener noreferrer">Google</a>`
    : "";
  return `<div class="meta listing-links">${[yahooLink, googleLink].filter(Boolean).join(" · ")}</div>`;
}

function listingCell(row) {
  const listing = row.listing || "";
  const ticker = isPublicTicker(row.ticker) ? row.ticker : "";
  if (!listing && !ticker) return "n/a";
  if (!ticker) return listing || "n/a";
  const entry = listingEntry(ticker);
  const exchange = row.exchange || (entry && entry.exchange) || "";
  const q = quoteForTicker(ticker);
  const priceText = q && q.price != null ? quoteLine(ticker) : ticker ? "n/a" : "n/a";
  return `<div class="listing-cell">${ticker}<div class="meta">${listing}${exchange ? " · " + exchange : ""}</div><div class="meta">${priceText}</div>${financeLinks(row)}</div>`;
}

function htmlTable(headers, rowHtml, tableClass) {
  return `
    <div class="table-scroll">
      <table class="${tableClass || "rank-table"}">
        <thead>
          <tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr>
        </thead>
        <tbody>${rowHtml}</tbody>
      </table>
    </div>`;
}

function rankTable(rows, valueHeader, valueFn) {
  return htmlTable(
    ["#", "Carrier", "Group", "Listing", valueHeader, "Focus"],
    rows
      .map(
        (row) => `
            <tr>
              <td>${row.rank}</td>
              <td>${row.company}</td>
              <td>${row.parent}</td>
              <td>${listingCell(row)}</td>
              <td>${valueFn(row)}</td>
              <td>${row.focus}</td>
            </tr>`
      )
      .join("")
  );
}

function riskRows(items) {
  return items
    .map((item) => {
      const link = item.url
        ? `<a class="filing-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.sourceLabel || "Source"}</a><div class="meta">${item.justification || ""}</div>`
        : item.justification || "n/a";
      return `
    <tr>
      <td>${item.name}</td>
      <td>${item.owner}</td>
      <td><span class="badge ${item.severity.toLowerCase()}">${item.severity}</span></td>
      <td>${item.score}</td>
      <td>${link}</td>
    </tr>`;
    })
    .join("");
}

tabs.forEach((tab) => {
  document.getElementById("tab-" + tab).addEventListener("click", () => {
    activateTab(tab);
  });
});

wireMarketToggles();

document.getElementById("executive-brief").textContent = dashboardData.briefing;
document.getElementById("source-note").textContent = dashboardData.sources.join(" ");

fillGrid(
  "executive-kpis",
  dashboardData.executive.map((kpi) => card(kpi.label, kpi.value))
);

function renderExecutiveWatchlist() {
  const apo = quoteLine("APO") || "n/a";
  const eqh = quoteLine("EQH") || "n/a";
  const crbg = quoteLine("CRBG") || "n/a";
  const afl = quoteLine("AFL") || "n/a";
  fillGrid("executive-watchlist-us", [
    card("US annuity #1", "Athene", `Private · parent APO · ${apo} · LIMRA 2025 YE · $34.5B`),
    card("US annuity #2", "New York Life", "Mutual · $30.6B · also top life mutual"),
    card("US deal to watch", "EQH–CRBG", `EQH ${eqh} · CRBG ${crbg} · All-stock combination · stockholder-approved · close targeted YE 2026`)
  ]);
  fillGrid("executive-watchlist-jp", [
    card("JP annuity #1", "Nippon Life", "Mutual · ~4.0M individual annuity policies"),
    card("JP life foreign", "Aflac Japan", `Listed parent AFL · ${afl} · Largest foreign life franchise`)
  ]);
}
renderExecutiveWatchlist();

function commentaryCard(item) {
  const wrap = document.createElement("div");
  wrap.className = "card commentary-card";
  const market = inferMarket(item);
  const marketLabel = market === "JP" ? "Japan" : market === "US" ? "United States" : "Global";

  const badge = document.createElement("span");
  badge.className = "market-badge " + market.toLowerCase();
  badge.textContent = marketLabel;

  const kicker = document.createElement("h3");
  kicker.textContent = (item.kicker || "Local market commentary") + (item.asOf ? " · " + item.asOf : "");

  const title = document.createElement("div");
  title.className = "value";
  title.textContent = item.title || "";

  wrap.append(badge, kicker, title);

  (item.paragraphs || []).forEach((text) => {
    const p = document.createElement("p");
    p.className = "card-summary";
    p.textContent = text;
    wrap.append(p);
  });

  const sourceRow = document.createElement("div");
  sourceRow.className = "commentary-sources";
  (item.sources || []).forEach((src) => {
    const a = document.createElement("a");
    a.className = "threat-source";
    a.href = src.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = src.label;
    sourceRow.append(a);
  });
  wrap.append(sourceRow);
  return wrap;
}

function fillCommentary(id, item) {
  const el = document.getElementById(id);
  if (!el || !item) return;
  el.replaceChildren(commentaryCard(item));
}

function fillCommentaryList(id, items) {
  const el = document.getElementById(id);
  if (!el || !items || !items.length) return;
  el.className = "commentary-list";
  el.replaceChildren(...items.map(commentaryCard));
}

fillCommentaryList("executive-us-merger", dashboardData.usMergerEvaluation || []);
fillCommentary("executive-jp-commentary", dashboardData.japanLocalCommentary);

const usThreats = dashboardData.usMarketThreats || dashboardData.usThreats || [];
const jpThreats = dashboardData.japanMarketThreats || dashboardData.japanThreats || [];
fillThreats("executive-threats-us", usThreats);
fillThreats("executive-threats-jp", jpThreats);
const usThreatSection = document.getElementById("executive-threats-us-section");
if (usThreatSection && !usThreats.length) {
  usThreatSection.classList.add("hidden");
}
if (document.getElementById("fred-brief") && dashboardData.fred) {
  document.getElementById("fred-brief").textContent = dashboardData.fred.brief;
}

fillGrid("risk-content", [
  card("Market", dashboardData.risk.market),
  card("Volatility", dashboardData.risk.volatility),
  card("Regulatory", dashboardData.risk.regulatory),
  card("Critical", dashboardData.risk.critical)
]);

const usRisk = dashboardData.riskItems.filter((item) => inferMarket(item) === "US");
const jpRisk = dashboardData.riskItems.filter((item) => inferMarket(item) === "JP");
document.getElementById("risk-table-us").innerHTML = riskRows(usRisk);
document.getElementById("risk-table-jp").innerHTML = riskRows(jpRisk);

document.getElementById("regulation-summary").textContent =
  "Conduct, solvency, and product-illustration rules, split by United States vs Japan and by insurance vs retail investing. Each item has a public source.";

const filingsMeta = dashboardData.filingsMeta || {};
const filingsRows = dashboardData.filings || [];
if (document.getElementById("filings-brief")) {
  document.getElementById("filings-brief").textContent = filingsMeta.brief || "";
}
if (document.getElementById("filings-serff-note")) {
  document.getElementById("filings-serff-note").textContent = filingsMeta.serffNote || "";
}

const filingsEdgar = filingsRows.filter((row) => /edgar|sec/i.test(row.jurisdiction));
const filingsSerff = filingsRows.filter((row) => /serff|state|iiprc/i.test(row.jurisdiction));
const filingsPending = filingsRows.filter((row) => row.status.toLowerCase() === "pending");
fillGrid("filings-kpis", [
  card("Filings listed", String(filingsRows.length), `As of ${filingsMeta.asOf || "—"}`),
  card("SEC EDGAR", String(filingsEdgar.length), "Confirmed accession numbers only"),
  card("SERFF / state", String(filingsSerff.length), "Iowa SFA chosen — no public tracking numbers returned"),
  card("Still pending", String(filingsPending.length), "N-4 / 485APOS not yet effective")
]);

function filingStatusClass(status) {
  const key = String(status || "").toLowerCase();
  if (key === "pending") return "pending";
  if (key === "withdrawn") return "critical";
  return "effective";
}

function renderFilings() {
  const body = document.getElementById("filings-table");
  if (!body) return;
  const statusBtn = document.querySelector("#filings-status-filter [data-status].active");
  const jurBtn = document.querySelector("#filings-jurisdiction-filter [data-jurisdiction].active");
  const status = statusBtn ? statusBtn.dataset.status : "all";
  const jur = jurBtn ? jurBtn.dataset.jurisdiction : "all";
  const q = ((document.getElementById("filings-search") || {}).value || "").trim().toLowerCase();

  const rows = filingsRows.filter((row) => {
    if (status !== "all" && row.status.toLowerCase() !== status) return false;
    if (jur === "EDGAR" && !/edgar|sec/i.test(row.jurisdiction)) return false;
    if (jur === "SERFF" && !/serff|state|iiprc/i.test(row.jurisdiction)) return false;
    if (
      q &&
      ![row.company, row.parent, row.product, row.productType, row.form, row.filingType, row.summary, row.accession]
        .join(" ")
        .toLowerCase()
        .includes(q)
    ) {
      return false;
    }
    return true;
  });

  body.innerHTML = rows.length
    ? rows
        .map(
          (row) => `
    <tr>
      <td>${row.company}<div class="meta">${row.parent || ""}</div></td>
      <td>${row.product}<div class="meta">${row.productType}</div></td>
      <td>${row.filingType}</td>
      <td>${row.form}</td>
      <td>${row.date}</td>
      <td><span class="badge ${filingStatusClass(row.status)}">${row.status}</span></td>
      <td>${row.jurisdiction}</td>
      <td>${row.summary}</td>
      <td><a class="filing-link" href="${row.url}" target="_blank" rel="noopener noreferrer">${/serff|state|iiprc/i.test(row.jurisdiction) ? "SERFF" : "EDGAR"}</a><div class="meta">${row.accession || ""}</div></td>
    </tr>`
        )
        .join("")
    : `<tr><td colspan="9">No filings match these filters. Iowa / TX / NC / OH public SFA did not return confirmed life or annuity tracking numbers.</td></tr>`;
}

function wireFilingsFilters(rootId, attr) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.addEventListener("click", (event) => {
    const btn = event.target.closest(`[${attr}]`);
    if (!btn || !root.contains(btn)) return;
    root.querySelectorAll(`[${attr}]`).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderFilings();
  });
}
wireFilingsFilters("filings-status-filter", "data-status");
wireFilingsFilters("filings-jurisdiction-filter", "data-jurisdiction");
if (document.getElementById("filings-search")) {
  document.getElementById("filings-search").addEventListener("input", renderFilings);
}
renderFilings();

const regulationItems = dashboardData.regulation || [];
function fillRegulation(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = "trend-list";
  el.replaceChildren(...items.map(regulationCard));
}
fillRegulation(
  "regulatory-us-insurance",
  regulationItems.filter((item) => inferMarket(item) === "US" && item.category === "insurance")
);
fillRegulation(
  "regulatory-us-retail",
  regulationItems.filter((item) => inferMarket(item) === "US" && item.category === "retail")
);
fillRegulation(
  "regulatory-jp-insurance",
  regulationItems.filter((item) => inferMarket(item) === "JP" && item.category === "insurance")
);
fillRegulation(
  "regulatory-jp-retail",
  regulationItems.filter((item) => inferMarket(item) === "JP" && item.category === "retail")
);
fillRegulation(
  "regulatory-global",
  regulationItems.filter((item) => inferMarket(item) === "Global")
);

function renderCarrierTables() {
  document.getElementById("us-annuity-table").innerHTML = htmlTable(
    ["#", "Carrier", "Listing / quote", "2025 sales ($B)", "Top-selling / flagship", "VA / index strategies", "Focus"],
    dashboardData.usAnnuities
      .map(
        (row) => `
              <tr>
                <td>${row.rank}</td>
                <td>${row.company}<div class="meta">${row.parent}</div></td>
                <td>${listingCell(row)}</td>
                <td>${row.sales.toFixed(2)}</td>
                <td>${row.topProduct || "n/a"}</td>
                <td>${
                  row.strategyUrl
                    ? `<a class="filing-link" href="${row.strategyUrl}" target="_blank" rel="noopener noreferrer">${row.strategies || "n/a"}</a>`
                    : row.strategies || "n/a"
                }</td>
                <td>${row.focus}</td>
              </tr>`
      )
      .join(""),
    "rank-table annuity-table"
  );
  document.getElementById("jp-annuity-table").innerHTML = htmlTable(
    ["#", "Carrier", "Listing / quote", "Scale", "Currency", "Top-selling / flagship", "Focus"],
    dashboardData.japanAnnuities
      .map(
        (row) => `
              <tr>
                <td>${row.rank}</td>
                <td>${row.company}<div class="meta">${row.parent}</div></td>
                <td>${listingCell(row)}</td>
                <td>${row.metric}</td>
                <td>${row.currency || "n/a"}</td>
                <td>${row.topProduct || "n/a"}</td>
                <td>${row.focus}</td>
              </tr>`
      )
      .join(""),
    "rank-table annuity-table"
  );
  document.getElementById("us-life-table").innerHTML = htmlTable(
    ["#", "Carrier", "Listing / quote", "Sales volume", "In-force", "Focus"],
    dashboardData.usLife
      .map(
        (row) => `
              <tr>
                <td>${row.rank}</td>
                <td>${row.company}<div class="meta">${row.parent}</div></td>
                <td>${listingCell(row)}</td>
                <td>${row.salesVolume || row.metric}</td>
                <td>${row.inForce || "n/a"}</td>
                <td>${row.focus}</td>
              </tr>`
      )
      .join(""),
    "rank-table"
  );
  document.getElementById("jp-life-table").innerHTML = htmlTable(
    ["#", "Carrier", "Listing / quote", "Sales volume", "In-force", "Focus"],
    dashboardData.japanLife
      .map(
        (row) => `
              <tr>
                <td>${row.rank}</td>
                <td>${row.company}<div class="meta">${row.parent}</div></td>
                <td>${listingCell(row)}</td>
                <td>${row.salesVolume || row.metric}</td>
                <td>${row.inForce || "n/a"}</td>
                <td>${row.focus}</td>
              </tr>`
      )
      .join(""),
    "rank-table"
  );
}
renderCarrierTables();

const ratesMeta = dashboardData.rates || {};
if (document.getElementById("rates-brief")) {
  document.getElementById("rates-brief").textContent = ratesMeta.brief || "";
}
function ratesTable(rows, includeCurrency) {
  const headers = includeCurrency
    ? ["Carrier", "Currency", "FA/MYGA 3/5/7", "FIA cap/par", "VA M&E", "RILA buffer/cap", "GLWB/GMIB", "As of", "Source"]
    : ["Carrier", "FA/MYGA 3/5/7", "FIA cap/par", "VA M&E", "RILA buffer/cap", "GLWB/GMIB", "As of", "Source"];
  return htmlTable(
    headers,
    rows
      .map((row) => {
        const source = row.url
          ? `<a class="filing-link" href="${row.url}" target="_blank" rel="noopener noreferrer">${row.source || "Source"}</a>`
          : row.source || "n/a";
        const currency = includeCurrency ? `<td>${row.currency || "n/a"}</td>` : "";
        return `
            <tr>
              <td>${row.company}</td>
              ${currency}
              <td>${row.fa}</td>
              <td>${row.fia}</td>
              <td>${row.va}</td>
              <td>${row.rila}</td>
              <td>${row.glwb}</td>
              <td>${row.asOf}</td>
              <td>${source}</td>
            </tr>`;
      })
      .join(""),
    "rates-table"
  );
}
if (document.getElementById("rates-us")) {
  document.getElementById("rates-us").innerHTML = ratesTable(ratesMeta.us || [], false);
}
if (document.getElementById("rates-jp")) {
  document.getElementById("rates-jp").innerHTML = ratesTable(ratesMeta.japan || [], true);
}

function featureTable(rows) {
  return `
    <div class="table-scroll">
      <table class="feature-table">
        <thead>
          <tr>
            <th>Carrier</th>
            <th>Distinctive feature(s)</th>
            <th>Description</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
            <tr>
              <td>${row.company}</td>
              <td>${row.feature}</td>
              <td>${row.description}</td>
              <td><a class="filing-link" href="${row.url}" target="_blank" rel="noopener noreferrer">${row.source}</a></td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

const featureLists = dashboardData.features || {};
document.getElementById("features-us-life").innerHTML = featureTable(featureLists.usLife || []);
document.getElementById("features-us-annuity").innerHTML = featureTable(featureLists.usAnnuity || []);
document.getElementById("features-jp-life").innerHTML = featureTable(featureLists.japanLife || []);
document.getElementById("features-jp-annuity").innerHTML = featureTable(featureLists.japanAnnuity || []);

const retailKpis = dashboardData.retail.kpis || [];
fillGrid(
  "retail-us-kpis",
  retailKpis.filter((kpi) => inferMarket(kpi) === "US").map((kpi) => card(kpi.label, kpi.value, kpi.extra))
);
fillGrid(
  "retail-jp-kpis",
  retailKpis.filter((kpi) => inferMarket(kpi) === "JP").map((kpi) => card(kpi.label, kpi.value, kpi.extra))
);

function fillTrends(id, items) {
  const wrap = document.getElementById(id);
  if (!wrap) return;
  wrap.className = "trend-list";
  wrap.replaceChildren(...items.map((item) => card("Trend", item.title, item.detail)));
}
fillTrends("retail-us", dashboardData.retail.usTrends);
fillTrends("retail-jp", dashboardData.retail.japanTrends);

function listingTable(rows) {
  if (!rows.length) {
    return htmlTable(
      ["#", "Carrier", "Group", "Sector", "Status", "Ticker", "Exchange", "Price", "Ccy", "As of", "Quote"],
      `<tr><td colspan="11">No matches</td></tr>`,
      "rank-table listing-table"
    );
  }
  return htmlTable(
    ["#", "Carrier", "Group", "Sector", "Status", "Ticker", "Exchange", "Price", "Ccy", "As of", "Quote"],
    rows
      .map((item) => {
        const ticker = isPublicTicker(item.ticker) ? item.ticker : "";
        const entry = listingEntry(ticker);
        const q = quoteForTicker(ticker);
        const ccy = (q && q.currency) || item.quoteCurrency || (entry && entry.currency) || "";
        const price =
          q && q.price != null
            ? formatQuotePrice(q.price, ccy) +
              (q.change != null && q.pct != null
                ? ` ${formatSignedNumber(q.change, 2)} (${formatSignedNumber(q.pct, 2)}%)`
                : "")
            : ticker
              ? "n/a"
              : "n/a";
        const asOf = (q && q.asOf) || item.priceAsOf || (ticker ? "n/a" : "n/a");
        return `
            <tr>
              <td>${String(item.signal || "").replace("#", "")}</td>
              <td>${item.company}</td>
              <td>${item.parent || ""}</td>
              <td>${item.sector}</td>
              <td>${item.listing || ""}</td>
              <td>${ticker || item.listing || "n/a"}</td>
              <td>${item.exchange || (entry && entry.exchange) || "n/a"}</td>
              <td>${price}</td>
              <td>${ccy || "n/a"}</td>
              <td>${asOf}</td>
              <td>${ticker ? financeLinks(item) : "n/a"}</td>
            </tr>`;
      })
      .join(""),
    "rank-table listing-table"
  );
}

function fillCompanyGrid(id, rows) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = listingTable(rows);
}

function renderCompanies(query) {
  const q = (query || "").trim().toLowerCase();
  const match = (item) =>
    [
      item.company,
      item.parent,
      item.ticker,
      item.listing,
      item.sector,
      item.signal,
      item.volatility,
      item.exchange,
      item.quoteCurrency
    ]
      .join(" ")
      .toLowerCase()
      .includes(q);
  const rows = dashboardData.companies.filter(match);
  fillCompanyGrid(
    "company-us",
    rows.filter((item) => inferMarket(item) === "US")
  );
  fillCompanyGrid(
    "company-jp",
    rows.filter((item) => inferMarket(item) === "JP")
  );
}

renderCompanies("");
document.getElementById("company-search").addEventListener("input", (event) => {
  renderCompanies(event.target.value);
});

const sentimentData = dashboardData.sentiment || {};
if (document.getElementById("sentiment-brief")) {
  document.getElementById("sentiment-brief").textContent = sentimentData.brief || "";
}
if (document.getElementById("sentiment-method")) {
  document.getElementById("sentiment-method").textContent = sentimentData.method || "";
}
if (document.getElementById("sentiment-ratings-method")) {
  document.getElementById("sentiment-ratings-method").textContent = sentimentData.ratingsMethod || "";
}
if (document.getElementById("sentiment-boards")) {
  document.getElementById("sentiment-boards").textContent = sentimentData.boards || "";
}

function sentimentTone(value) {
  const key = String(value || "mixed").toLowerCase();
  if (key === "pos" || key === "positive") return { cls: "positive", label: "Positive" };
  if (key === "neg" || key === "negative") return { cls: "critical", label: "Negative" };
  return { cls: "mixed", label: "Mixed" };
}

function chatterClass(value) {
  const key = String(value || "").toLowerCase();
  if (key === "high") return "high";
  if (key === "thin") return "thin";
  return "mixed";
}

function vocScore(carrier) {
  let pos = 0;
  let neg = 0;
  let mixed = 0;
  (carrier.items || []).forEach((item) => {
    const key = String(item.sentiment || "mixed").toLowerCase();
    if (key === "pos" || key === "positive") pos += 1;
    else if (key === "neg" || key === "negative") neg += 1;
    else mixed += 1;
  });
  const decided = pos + neg;
  return {
    pos,
    neg,
    mixed,
    decided,
    score: decided ? Math.round((100 * pos) / decided) : null
  };
}

function vocScoreClass(score, decided) {
  if (score === null || !decided) return "thin";
  if (score >= 60) return "positive";
  if (score < 40) return "critical";
  return "mixed";
}

function carrierRatings(carrier) {
  const book = sentimentData.ratingBook || {};
  return carrier.ratings || book[carrier.company] || {};
}

function ratingValue(block, keys) {
  if (!block) return "n/a";
  for (const key of keys) {
    if (block[key] !== undefined && block[key] !== null && block[key] !== "") return String(block[key]);
  }
  return "n/a";
}

function ratingsChip(label, value, url) {
  const isNa = !value || value === "n/a";
  const el = url && !isNa ? document.createElement("a") : document.createElement("span");
  el.className = "ratings-chip" + (isNa ? " na" : "");
  if (url && !isNa) {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }
  const lab = document.createElement("span");
  lab.className = "ratings-label";
  lab.textContent = label;
  const val = document.createElement("span");
  val.className = "ratings-value";
  val.textContent = isNa ? "n/a" : value;
  el.append(lab, val);
  return el;
}

function ratingsStrip(carrier) {
  const ratings = carrierRatings(carrier);
  const wrap = document.createElement("div");
  wrap.className = "ratings-strip";
  wrap.setAttribute("aria-label", "Financial-strength ratings");
  const market = inferMarket(carrier);
  wrap.append(
    ratingsChip("AM Best", ratingValue(ratings.ambest, ["fsr"]), ratings.ambest && ratings.ambest.url),
    ratingsChip("S&P", ratingValue(ratings.sp, ["value"]), ratings.sp && ratings.sp.url),
    ratingsChip("Moody's", ratingValue(ratings.moodys, ["value"]), ratings.moodys && ratings.moodys.url),
    ratingsChip("Fitch", ratingValue(ratings.fitch, ["value"]), ratings.fitch && ratings.fitch.url),
    ratingsChip("Comdex", ratingValue(ratings.comdex, ["value"]), ratings.comdex && ratings.comdex.url)
  );
  if (market === "JP") {
    wrap.append(
      ratingsChip("JCR", ratingValue(ratings.jcr, ["value"]), ratings.jcr && ratings.jcr.url),
      ratingsChip("R&I", ratingValue(ratings.ri, ["value"]), ratings.ri && ratings.ri.url)
    );
  } else {
    wrap.append(
      ratingsChip("Weiss", ratingValue(ratings.weiss, ["value"]), ratings.weiss && ratings.weiss.url),
      ratingsChip("J.D. Power", ratingValue(ratings.jdPower, ["value"]), ratings.jdPower && ratings.jdPower.url),
      ratingsChip("BBB", ratingValue(ratings.bbb, ["value"]), ratings.bbb && ratings.bbb.url)
    );
  }
  return wrap;
}

function sentimentCard(carrier) {
  const wrap = document.createElement("article");
  wrap.className = "card sentiment-card";

  const meta = document.createElement("div");
  meta.className = "threat-card-meta";

  const market = inferMarket(carrier);
  const marketBadge = document.createElement("span");
  marketBadge.className = "market-badge " + market.toLowerCase();
  marketBadge.textContent = market === "JP" ? "Japan" : "United States";

  const overall = sentimentTone(carrier.overall);
  const overallBadge = document.createElement("span");
  overallBadge.className = "badge " + overall.cls;
  overallBadge.textContent = overall.label;

  const chatterBadge = document.createElement("span");
  chatterBadge.className = "badge " + chatterClass(carrier.chatter);
  chatterBadge.textContent = (carrier.chatter || "n/a") + " chatter";

  meta.append(marketBadge, overallBadge, chatterBadge);

  const title = document.createElement("div");
  title.className = "value";
  title.textContent = carrier.company;

  wrap.append(meta, title);

  const voc = vocScore(carrier);
  const scoreRow = document.createElement("div");
  scoreRow.className = "sentiment-score-row";
  const scoreEl = document.createElement("div");
  scoreEl.className = "sentiment-score " + vocScoreClass(voc.score, voc.decided);
  scoreEl.textContent = voc.score === null ? "n/a" : String(voc.score);
  const counts = document.createElement("div");
  counts.className = "sentiment-counts";
  counts.textContent =
    voc.score === null
      ? "VOC n/a — " + voc.mixed + " mixed, 0 decided (theme-count, not NPS)"
      : "VOC " + voc.score + " = " + voc.pos + " pos / (" + voc.pos + "+" + voc.neg + " decided) · " + voc.mixed + " mixed";
  scoreRow.append(scoreEl, counts);
  wrap.append(scoreRow);
  wrap.append(ratingsStrip(carrier));

  if (carrier.note) {
    const note = document.createElement("p");
    note.className = "card-summary";
    note.textContent = carrier.note;
    wrap.append(note);
  }

  const list = document.createElement("ul");
  list.className = "sentiment-list";
  (carrier.items || []).forEach((item) => {
    const li = document.createElement("li");

    const head = document.createElement("div");
    head.className = "sentiment-item-head";

    const product = document.createElement("span");
    product.className = "badge";
    product.textContent = item.product || "n/a";

    const tone = sentimentTone(item.sentiment);
    const sent = document.createElement("span");
    sent.className = "badge " + tone.cls;
    sent.textContent = tone.label;

    head.append(product, sent);

    const theme = document.createElement("p");
    theme.className = "card-summary";
    theme.textContent = item.theme;

    const source = document.createElement("a");
    source.className = "threat-source";
    source.href = item.url;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = (item.source || "Source") + (item.date ? " · " + item.date : "");

    li.append(head, theme, source);
    list.append(li);
  });
  wrap.append(list);
  return wrap;
}

function fillSentimentTables() {
  const all = []
    .concat((sentimentData.us || []).map((c) => Object.assign({ market: "US" }, c)))
    .concat((sentimentData.japan || []).map((c) => Object.assign({ market: "JP" }, c)));

  const scoreTable = document.getElementById("sentiment-score-table");
  if (scoreTable) {
    scoreTable.innerHTML =
      "<thead><tr><th>Market</th><th>Carrier</th><th>VOC</th><th>Pos</th><th>Neg</th><th>Mixed</th><th>Chatter</th></tr></thead>";
    const body = document.createElement("tbody");
    all
      .map((carrier) => ({ carrier, voc: vocScore(carrier) }))
      .sort((a, b) => {
        if (a.voc.score === null && b.voc.score === null) return a.carrier.company.localeCompare(b.carrier.company);
        if (a.voc.score === null) return 1;
        if (b.voc.score === null) return -1;
        return b.voc.score - a.voc.score;
      })
      .forEach(({ carrier, voc }) => {
        const tr = document.createElement("tr");
        [inferMarket(carrier), carrier.company, voc.score === null ? "n/a" : voc.score, voc.pos, voc.neg, voc.mixed, carrier.chatter || "n/a"].forEach(
          (cell) => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.append(td);
          }
        );
        body.append(tr);
      });
    scoreTable.append(body);
  }

  const ratingsTable = document.getElementById("sentiment-ratings-table");
  if (ratingsTable) {
    ratingsTable.innerHTML =
      "<thead><tr><th>Market</th><th>Carrier</th><th>Entity</th><th>AM Best</th><th>S&P</th><th>Moody's</th><th>Fitch</th><th>Comdex</th><th>JCR</th><th>R&I</th><th>J.D. Power</th><th>BBB</th></tr></thead>";
    const body = document.createElement("tbody");
    all.forEach((carrier) => {
      const r = carrierRatings(carrier);
      const tr = document.createElement("tr");
      [
        inferMarket(carrier),
        carrier.company,
        r.entity || "n/a",
        ratingValue(r.ambest, ["fsr"]),
        ratingValue(r.sp, ["value"]),
        ratingValue(r.moodys, ["value"]),
        ratingValue(r.fitch, ["value"]),
        ratingValue(r.comdex, ["value"]),
        ratingValue(r.jcr, ["value"]),
        ratingValue(r.ri, ["value"]),
        ratingValue(r.jdPower, ["value"]),
        ratingValue(r.bbb, ["value"])
      ].forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.append(td);
      });
      body.append(tr);
    });
    ratingsTable.append(body);
  }

  const scored = all.map((c) => vocScore(c));
  const decided = scored.filter((v) => v.score !== null);
  const usDecided = all.filter((c) => inferMarket(c) === "US").map(vocScore).filter((v) => v.score !== null);
  const jpDecided = all.filter((c) => inferMarket(c) === "JP").map(vocScore).filter((v) => v.score !== null);
  const median = (arr) => {
    if (!arr.length) return "n/a";
    const vals = arr.map((v) => v.score).sort((a, b) => a - b);
    const mid = Math.floor(vals.length / 2);
    return vals.length % 2 ? vals[mid] : Math.round((vals[mid - 1] + vals[mid]) / 2);
  };
  fillGrid("sentiment-kpis", [
    card("Names on tab", String(all.length), sentimentData.asOf ? "As of " + sentimentData.asOf : ""),
    card("US median VOC", String(median(usDecided)), usDecided.length + " decided names"),
    card("JP median VOC", String(median(jpDecided)), jpDecided.length + " decided names"),
    card("Decided themes", String(scored.reduce((n, v) => n + v.decided, 0)), "pos+neg; mixed excluded from score")
  ]);
}

function emptySentimentCard() {
  return card("No matches", "—", "Try another carrier, theme, or product");
}

function fillSentiment(id, carriers) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = "sentiment-grid";
  el.replaceChildren(...(carriers.length ? carriers.map(sentimentCard) : [emptySentimentCard()]));
}

function renderSentiment(query) {
  const q = (query || "").trim().toLowerCase();
  const match = (carrier) => {
    if (!q) return true;
    const blob = [
      carrier.company,
      carrier.note,
      carrier.chatter,
      carrier.overall,
      JSON.stringify(carrierRatings(carrier)),
      ...(carrier.items || []).flatMap((item) => [item.theme, item.product, item.source, item.sentiment])
    ]
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  };
  fillSentiment("sentiment-us", (sentimentData.us || []).filter(match));
  fillSentiment("sentiment-jp", (sentimentData.japan || []).filter(match));
}

fillSentimentTables();
renderSentiment("");
if (document.getElementById("sentiment-search")) {
  document.getElementById("sentiment-search").addEventListener("input", (event) => {
    renderSentiment(event.target.value);
  });
}

if (document.getElementById("markets-brief") && dashboardData.markets.brief) {
  document.getElementById("markets-brief").textContent = dashboardData.markets.brief;
}
const limra = dashboardData.limra || {};
if (document.getElementById("markets-kpis")) {
  fillGrid("markets-kpis", [
    card("Q2 2026 industry", "$" + (limra.q2Total || "—") + "B", limra.latestLabel || "LIMRA final"),
    card("H1 2026", "$" + (limra.h1Total || "—") + "B", "First-half record · " + (limra.coverage || "")),
    card("2024 calendar YE", "$434B", "LIMRA record year"),
    card(
      "Mix source",
      "Q2 2026",
      limra.url
        ? "Final public LIMRA print"
        : "Latest labeled LIMRA"
    )
  ]);
}

const isNarrow = window.matchMedia("(max-width: 768px)").matches;
const isPhone = window.matchMedia("(max-width: 480px)").matches;

const chartDefaults = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: isPhone ? 1.15 : isNarrow ? 1.35 : 2,
  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
        boxWidth: isNarrow ? 10 : 12,
        font: { size: isNarrow ? 11 : 12 }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: "#94a3b8",
        maxRotation: isNarrow ? 50 : 0,
        autoSkip: true,
        maxTicksLimit: isPhone ? 6 : undefined
      },
      grid: { color: "#1e293b" }
    },
    y: { ticks: { color: "#94a3b8" }, grid: { color: "#1e293b" } }
  }
};

new Chart(document.getElementById("marketsChart"), {
  type: "bar",
  data: {
    labels: dashboardData.markets.labels,
    datasets: [
      {
        type: "bar",
        label: "US individual annuity sales ($B)",
        data: dashboardData.markets.performance,
        backgroundColor: "rgba(37, 99, 235, 0.55)",
        borderColor: "#2563eb",
        yAxisID: "y"
      },
      {
        type: "line",
        label: "S&P 500 year-end (FRED SP500)",
        data: dashboardData.markets.spxYearEnd,
        borderColor: "#e2e8f0",
        backgroundColor: "transparent",
        tension: 0.25,
        spanGaps: true,
        yAxisID: "y1"
      },
      {
        type: "line",
        label: "10Y Treasury % (FRED DGS10)",
        data: dashboardData.markets.dgs10YearEnd,
        borderColor: "#f97316",
        backgroundColor: "transparent",
        tension: 0.25,
        spanGaps: true,
        yAxisID: "y2"
      }
    ]
  },
  options: {
    ...chartDefaults,
    scales: {
      x: chartDefaults.scales.x,
      y: {
        ticks: { color: "#94a3b8" },
        grid: { color: "#1e293b" },
        title: { display: !isNarrow, text: "Annuity sales $B", color: "#94a3b8" }
      },
      y1: {
        position: "right",
        ticks: { color: "#e2e8f0" },
        grid: { drawOnChartArea: false },
        title: { display: !isNarrow, text: "S&P 500", color: "#e2e8f0" }
      },
      y2: {
        position: "right",
        ticks: { color: "#f97316" },
        grid: { drawOnChartArea: false },
        title: { display: !isNarrow, text: "10Y %", color: "#f97316" }
      }
    }
  }
});

if (document.getElementById("usAnnuityMixChart") && limra.mixQ2) {
  new Chart(document.getElementById("usAnnuityMixChart"), {
    type: "bar",
    data: {
      labels: limra.mixQ2.map((row) => row.label),
      datasets: [
        {
          label: "Q2 2026 sales ($B)",
          data: limra.mixQ2.map((row) => row.value),
          backgroundColor: ["#1d4ed8", "#2563eb", "#38bdf8", "#818cf8", "#22c55e", "#a3e635"]
        }
      ]
    },
    options: {
      ...chartDefaults,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "VA / FA / FIA / RILA mix — LIMRA Q2 2026 final",
          color: "#e2e8f0"
        }
      }
    }
  });
}

new Chart(document.getElementById("usAnnuityShareChart"), {
  type: "bar",
  data: {
    labels: dashboardData.usAnnuities.map((row) =>
      row.company.replace(" Annuity & Life", "").replace(" Financial Group", "").replace(" of North America", "")
    ),
    datasets: [
      {
        label: "2025 sales ($B)",
        data: dashboardData.usAnnuities.map((row) => row.sales),
        backgroundColor: "#2563eb"
      }
    ]
  },
  options: {
    ...chartDefaults,
    plugins: { legend: { display: false } }
  }
});

if (document.getElementById("fredChart") && dashboardData.fred) {
  new Chart(document.getElementById("fredChart"), {
    type: "line",
    data: {
      labels: dashboardData.fred.labels,
      datasets: [
        {
          label: "S&P 500 year-end (SP500)",
          data: dashboardData.fred.sp500,
          borderColor: "#e2e8f0",
          backgroundColor: "transparent",
          tension: 0.25,
          yAxisID: "y"
        },
        {
          label: "10Y Treasury % (DGS10)",
          data: dashboardData.fred.dgs10,
          borderColor: "#f97316",
          backgroundColor: "transparent",
          tension: 0.25,
          yAxisID: "y1"
        }
      ]
    },
    options: {
      ...chartDefaults,
      scales: {
        x: chartDefaults.scales.x,
        y: {
          ticks: { color: "#e2e8f0" },
          grid: { color: "#1e293b" },
          title: { display: !isNarrow, text: "S&P 500", color: "#e2e8f0" }
        },
        y1: {
          position: "right",
          ticks: { color: "#f97316" },
          grid: { drawOnChartArea: false },
          title: { display: !isNarrow, text: "10Y %", color: "#f97316" }
        }
      }
    }
  });
}

if (document.getElementById("creditSpreadChart") && dashboardData.fred) {
  new Chart(document.getElementById("creditSpreadChart"), {
    type: "line",
    data: {
      labels: dashboardData.fred.labels,
      datasets: [
        {
          label: "IG OAS % (BAMLC0A0CM)",
          data: dashboardData.fred.igOas,
          borderColor: "#38bdf8",
          backgroundColor: "transparent",
          tension: 0.25
        },
        {
          label: "HY OAS % (BAMLH0A0HYM2)",
          data: dashboardData.fred.hyOas,
          borderColor: "#f59e0b",
          backgroundColor: "transparent",
          tension: 0.25
        }
      ]
    },
    options: {
      ...chartDefaults,
      scales: {
        x: chartDefaults.scales.x,
        y: {
          ticks: { color: "#94a3b8" },
          grid: { color: "#1e293b" },
          title: { display: !isNarrow, text: "OAS %", color: "#94a3b8" }
        }
      }
    }
  });
}

new Chart(document.getElementById("riskChart"), {
  type: "radar",
  data: {
    labels: ["Market", "Volatility", "Regulatory", "Critical"],
    datasets: [
      {
        label: "Risk posture",
        data: [
          dashboardData.risk.market,
          dashboardData.risk.volatility,
          dashboardData.risk.regulatory,
          dashboardData.risk.critical * 20
        ],
        borderColor: "#f97316",
        backgroundColor: "rgba(249, 115, 22, 0.2)"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: isPhone ? 1 : isNarrow ? 1.1 : 1.6,
    plugins: { legend: { labels: { color: "#ffffff" } } },
    scales: {
      r: {
        angleLines: { color: "#1e293b" },
        grid: { color: "#1e293b" },
        pointLabels: {
          color: "#94a3b8",
          font: { size: isNarrow ? 11 : 12 }
        },
        ticks: { display: false }
      }
    }
  }
});

function applyQuotesToRows() {
  const catalog = dashboardData.listingCatalog || {};
  const quotes = dashboardData.quotes || {};
  const lists = [
    dashboardData.usAnnuities,
    dashboardData.japanAnnuities,
    dashboardData.usLife,
    dashboardData.japanLife,
    dashboardData.companies
  ];
  lists.forEach((list) => {
    (list || []).forEach((row) => {
      if (!isPublicTicker(row.ticker)) return;
      const entry = catalog[row.ticker];
      if (!entry) return;
      const q = quotes[entry.yahooSymbol];
      row.exchange = entry.exchange;
      row.yahooSymbol = entry.yahooSymbol;
      row.quoteCurrency = entry.currency;
      row.yahooUrl = entry.yahooUrl;
      row.googleUrl = entry.googleUrl;
      row.stockPrice = q && q.price != null ? q.price : null;
      row.priceAsOf = q && q.asOf ? q.asOf : null;
    });
  });
}

function formatQuoteAsOf(unix) {
  if (!unix) return "";
  const d = new Date(Number(unix) * 1000);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

function formatQuoteDateTime(unix) {
  if (!unix) return "";
  const d = new Date(Number(unix) * 1000);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().replace("T", " ").slice(0, 16) + " UTC";
}

function renderListingSurfaces() {
  applyQuotesToRows();
  renderExecutiveWatchlist();
  renderCarrierTables();
  const search = document.getElementById("company-search");
  renderCompanies(search ? search.value : "");
}

const LIVE_REFRESH_MS = (dashboardData.liveMarkets && dashboardData.liveMarkets.refreshMs) || 90000;

const CORS_PATHS = [
  { id: "direct", wrap: (url) => url },
  { id: "allorigins", wrap: (url) => "https://api.allorigins.win/raw?url=" + encodeURIComponent(url) },
  { id: "corsproxy", wrap: (url) => "https://corsproxy.io/?" + encodeURIComponent(url) }
];

let preferredCorsId = null;
let liveQuoteInFlight = false;
let lastLiveQuoteAt = 0;
let liveQuoteTimer = null;
let lastLivePath = "";
let lastLiveError = "";

function fredApiKey() {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("fredKey") || params.get("fred_api_key");
    if (fromQuery) {
      window.localStorage.setItem("FRED_API_KEY", fromQuery);
      return fromQuery;
    }
    return window.localStorage.getItem("FRED_API_KEY") || "";
  } catch (err) {
    return "";
  }
}

async function fetchText(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs || 12000);
  try {
    const res = await fetch(url, { cache: "no-store", signal: controller.signal });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

function looksLikeHtml(text) {
  return /^\s*<(!DOCTYPE|html|head|body)/i.test(String(text || ""));
}

async function fetchViaCors(url) {
  const ordered = CORS_PATHS.slice();
  if (preferredCorsId) {
    ordered.sort((a, b) => (a.id === preferredCorsId ? -1 : b.id === preferredCorsId ? 1 : 0));
  }
  let lastErr = null;
  for (const path of ordered) {
    try {
      const text = await fetchText(path.wrap(url), path.id === "direct" ? 8000 : 14000);
      if (!text || looksLikeHtml(text)) throw new Error(path.id + " returned HTML");
      if (!preferredCorsId) preferredCorsId = path.id;
      lastLivePath = path.id;
      return { text, path: path.id };
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error("Yahoo CORS blocked and proxies failed");
}

async function mapPool(items, limit, worker) {
  const out = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      out[index] = await worker(items[index], index);
    }
  }
  const n = Math.min(limit, items.length) || 0;
  await Promise.all(Array.from({ length: n }, run));
  return out;
}

function parseYahooChart(data, symbol) {
  const result = ((((data || {}).chart || {}).result || [])[0]) || {};
  const meta = result.meta || {};
  const price = meta.regularMarketPrice;
  if (price == null || Number.isNaN(Number(price))) return null;
  const prev =
    meta.chartPreviousClose != null
      ? meta.chartPreviousClose
      : meta.previousClose != null
        ? meta.previousClose
        : null;
  const change = prev != null ? Number(price) - Number(prev) : null;
  const pct = prev ? (change / Number(prev)) * 100 : null;
  return {
    price: Number(price),
    previous: prev != null ? Number(prev) : null,
    change,
    pct,
    currency: meta.currency || "",
    asOf: formatQuoteAsOf(meta.regularMarketTime),
    asOfFull: formatQuoteDateTime(meta.regularMarketTime),
    source: "Yahoo Finance",
    symbol: meta.symbol || symbol
  };
}

async function fetchYahooChart(symbol) {
  const encoded = encodeURIComponent(symbol);
  const urls = [
    `https://query1.finance.yahoo.com/v8/finance/chart/${encoded}?interval=1d&range=5d`,
    `https://query2.finance.yahoo.com/v8/finance/chart/${encoded}?interval=1d&range=5d`
  ];
  for (const url of urls) {
    try {
      const { text } = await fetchViaCors(url);
      const data = JSON.parse(text);
      const quote = parseYahooChart(data, symbol);
      if (quote) return quote;
    } catch (err) {
      lastLiveError = String((err && err.message) || err);
    }
  }
  return null;
}

function parseFredObservations(rows, seriesId) {
  const clean = (rows || [])
    .map((row) => ({
      date: row.date || row.DATE || "",
      value: row.value != null ? row.value : row[seriesId]
    }))
    .filter((row) => row.date && row.value != null && row.value !== "" && row.value !== ".");
  if (!clean.length) return null;
  const last = clean[clean.length - 1];
  const prev = clean.length > 1 ? clean[clean.length - 2] : null;
  const price = Number(last.value);
  if (Number.isNaN(price)) return null;
  const previous = prev ? Number(prev.value) : null;
  const change = previous != null && !Number.isNaN(previous) ? price - previous : null;
  const pct = previous ? (change / previous) * 100 : null;
  return {
    price,
    previous,
    change,
    pct,
    currency: "",
    asOf: last.date,
    asOfFull: last.date,
    source: "FRED " + seriesId,
    symbol: seriesId
  };
}

function parseFredCsv(text, seriesId) {
  const lines = String(text || "")
    .trim()
    .split(/\r?\n/)
    .filter(Boolean);
  if (lines.length < 2) return null;
  const header = lines[0].split(",");
  const dateIdx = header.findIndex((h) => /date/i.test(h));
  const valueIdx = header.findIndex((h) => h && !/date/i.test(h));
  if (dateIdx < 0 || valueIdx < 0) return null;
  const rows = lines.slice(1).map((line) => {
    const cols = line.split(",");
    return { date: cols[dateIdx], value: cols[valueIdx] };
  });
  return parseFredObservations(rows, seriesId);
}

function fredLookbackDate() {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);
  return start.toISOString().slice(0, 10);
}

async function fetchFredSeries(seriesId) {
  const key = fredApiKey();
  const since = fredLookbackDate();
  if (key) {
    const api =
      "https://api.stlouisfed.org/fred/series/observations?series_id=" +
      encodeURIComponent(seriesId) +
      "&api_key=" +
      encodeURIComponent(key) +
      "&file_type=json&observation_start=" +
      encodeURIComponent(since) +
      "&sort_order=desc&limit=30";
    try {
      const { text } = await fetchViaCors(api);
      const data = JSON.parse(text);
      const quote = parseFredObservations((data.observations || []).slice().reverse(), seriesId);
      if (quote) return quote;
    } catch (err) {
      lastLiveError = String((err && err.message) || err);
    }
  }
  const csv =
    "https://fred.stlouisfed.org/graph/fredgraph.csv?id=" +
    encodeURIComponent(seriesId) +
    "&cosd=" +
    encodeURIComponent(since);
  try {
    const { text } = await fetchViaCors(csv);
    return parseFredCsv(text, seriesId);
  } catch (err) {
    lastLiveError = String((err && err.message) || err);
    return null;
  }
}

function liveMarketRows(kind) {
  const live = dashboardData.liveMarkets || {};
  return kind === "rates" ? live.rates || [] : live.indices || [];
}

function formatLiveLevel(row, quote) {
  if (!quote || quote.price == null) return "n/a";
  if (row.kind === "yield") {
    return (
      Number(quote.price).toLocaleString("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
      }) + "%"
    );
  }
  if (row.kind === "fx") {
    return Number(quote.price).toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    });
  }
  return Number(quote.price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function formatLiveChange(row, quote, asPct) {
  if (!quote) return "n/a";
  const value = asPct ? quote.pct : quote.change;
  if (value == null) return "n/a";
  const digits = row.kind === "yield" || row.kind === "fx" ? 3 : 2;
  return asPct ? formatSignedNumber(value, 2) + "%" : formatSignedNumber(value, digits);
}

function yahooQuoteHref(symbol) {
  return "https://finance.yahoo.com/quote/" + encodeURIComponent(symbol);
}

function liveTableHtml(rows) {
  const quotes = dashboardData.marketQuotes || {};
  const body = rows
    .map((row) => {
      const quote = quotes[row.id];
      const last = formatLiveLevel(row, quote);
      const chg = formatLiveChange(row, quote, false);
      const pct = formatLiveChange(row, quote, true);
      const cls = changeClass(quote && quote.change);
      const asOf = (quote && (quote.asOfFull || quote.asOf)) || "n/a";
      const source = quote ? quote.source : "n/a";
      const symbol = row.yahoo || row.fred || "";
      const link = row.yahoo
        ? `<a class="filing-link" href="${yahooQuoteHref(row.yahoo)}" target="_blank" rel="noopener noreferrer">${row.yahoo}</a>`
        : row.fred
          ? `<a class="filing-link" href="https://fred.stlouisfed.org/series/${encodeURIComponent(row.fred)}" target="_blank" rel="noopener noreferrer">${row.fred}</a>`
          : "n/a";
      const note = row.note ? `<div class="live-source">${row.note}</div>` : "";
      return `
        <tr>
          <td>${row.label}<div class="live-source">${link}</div>${note}</td>
          <td>${last}</td>
          <td class="${cls}">${chg}</td>
          <td class="${cls}">${pct}</td>
          <td>${asOf}<div class="live-source">${source}${symbol && quote && quote.symbol && quote.symbol !== symbol ? " · " + quote.symbol : ""}</div></td>
        </tr>`;
    })
    .join("");
  return htmlTable(["Name", "Last", "Change", "% change", "As of"], body, "rank-table live-table");
}

function liveStatusText() {
  const live = dashboardData.liveMarkets || {};
  const quotes = dashboardData.marketQuotes || {};
  const rows = (live.indices || []).concat(live.rates || []);
  const filled = rows.filter((row) => quotes[row.id] && quotes[row.id].price != null).length;
  const when = lastLiveQuoteAt ? new Date(lastLiveQuoteAt).toLocaleString() : "not yet";
  const path = lastLivePath ? ` · via ${lastLivePath}` : "";
  const fred = fredApiKey() ? " · FRED key present" : " · no FRED key (Yahoo Treasuries; overnight/JGB need FRED or CSV)";
  const err = !filled && lastLiveError ? ` · last error: ${lastLiveError}` : "";
  return `${live.brief || ""} Last refresh ${when}${path}. ${filled}/${rows.length} prints in. Interval ${LIVE_REFRESH_MS / 1000}s while this page is visible${fred}${err}`;
}

function renderLiveMarketTables() {
  const indexHtml = liveTableHtml(liveMarketRows("indices"));
  const ratesHtml = liveTableHtml(liveMarketRows("rates"));
  document.querySelectorAll(".live-index-table").forEach((el) => {
    el.innerHTML = indexHtml;
  });
  document.querySelectorAll(".live-rates-table").forEach((el) => {
    el.innerHTML = ratesHtml;
  });
  const status = liveStatusText();
  document.querySelectorAll(".live-markets-status").forEach((el) => {
    el.textContent = status;
  });
}

async function refreshCarrierQuotes() {
  const catalog = dashboardData.listingCatalog || {};
  const symbols = [...new Set(Object.values(catalog).map((item) => item.yahooSymbol).filter(Boolean))];
  const next = { ...(dashboardData.quotes || {}) };
  let updated = false;
  await mapPool(symbols, 5, async (symbol) => {
    const quote = await fetchYahooChart(symbol);
    if (!quote) return;
    next[symbol] = {
      price: quote.price,
      change: quote.change,
      pct: quote.pct,
      currency: quote.currency,
      asOf: quote.asOf,
      source: quote.source
    };
    updated = true;
  });
  if (updated) {
    dashboardData.quotes = next;
    renderListingSurfaces();
  }
}

async function refreshMarketInstrument(row) {
  let quote = null;
  const key = fredApiKey();
  if (row.fred && (key || !row.yahoo)) {
    quote = await fetchFredSeries(row.fred);
  }
  if (!quote && row.yahoo) {
    quote = await fetchYahooChart(row.yahoo);
  }
  if (!quote && row.fred) {
    quote = await fetchFredSeries(row.fred);
  }
  if (quote) {
    dashboardData.marketQuotes[row.id] = quote;
    return true;
  }
  return false;
}

async function refreshLiveMarketQuotes() {
  const live = dashboardData.liveMarkets || {};
  const rows = (live.indices || []).concat(live.rates || []);
  await mapPool(rows, 4, refreshMarketInstrument);
  renderLiveMarketTables();
}

async function refreshAllLiveQuotes() {
  if (liveQuoteInFlight) return;
  liveQuoteInFlight = true;
  try {
    await Promise.all([refreshLiveMarketQuotes(), refreshCarrierQuotes()]);
    lastLiveQuoteAt = Date.now();
    renderLiveMarketTables();
  } finally {
    liveQuoteInFlight = false;
  }
}

function startLiveQuotePolling() {
  renderLiveMarketTables();
  refreshAllLiveQuotes();
  if (liveQuoteTimer) clearInterval(liveQuoteTimer);
  liveQuoteTimer = setInterval(() => {
    if (!document.hidden) refreshAllLiveQuotes();
  }, LIVE_REFRESH_MS);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && Date.now() - lastLiveQuoteAt >= LIVE_REFRESH_MS) {
      refreshAllLiveQuotes();
    }
  });
}

startLiveQuotePolling();

window.addEventListener("resize", resizeDashboardCharts);

activateTab("executive");
