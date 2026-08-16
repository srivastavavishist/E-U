/* ─────────────────────────────────────────────────────────────────────────
   INDUSTRY INTELLIGENCE · app.js
   Shared SPA-style reader — used by all 9 industry sub-sites
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

(function () {
  const D = window.EI_DATA;
  if (!D) { document.getElementById('main-content').textContent = 'Data failed to load.'; return; }

  /* ── Helpers ────────────────────────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, cls, attrs = {}) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    Object.entries(attrs).forEach(([k, v]) => { if (k === 'html') e.innerHTML = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v); });
    return e;
  };
  const fmtDate = s => {
    const d = new Date(s + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  /* ── Sector lookup ──────────────────────────────────────────────────────── */
  const sectorMap = Object.fromEntries(D.sectors.map(s => [s.id, s]));
  const companyMap = Object.fromEntries(D.companies.map(c => [c.id, c]));

  function getSectorColor(sectorId) {
    return sectorMap[sectorId]?.color || 'var(--brand-primary)';
  }
  function getSectorIcon(sectorId) {
    return sectorMap[sectorId]?.icon || '⚡';
  }

  /* ── Router ─────────────────────────────────────────────────────────────── */
  const page = document.body.dataset.page || 'home';

  /* ── Render ─────────────────────────────────────────────────────────────── */
  if (page === 'home') renderHome();
  if (page === 'companies') renderCompanies();

  /* ════════════════════════════════════════════════════════════════════════ */
  /*  HOME                                                                    */
  /* ════════════════════════════════════════════════════════════════════════ */
  function renderHome() {
    const main = $('#main-content');

    /* ── Hero ─────────────────────────────────────────────────────────────── */
    const hero = el('section', 'hero');
    hero.innerHTML = `
      <div class="hero-badge">Live Intelligence · ${D.meta.edition}</div>
      <h1 class="hero-heading">
        ${D.meta.productName} Intelligence Reader
      </h1>
      <p class="hero-sub">${D.meta.description} Covering ${D.companies.length} companies across ${D.sectors.length} sectors — updated continuously from public sources.</p>
      <div class="hero-meta">
        <span class="hero-meta-item">🗓 Updated ${fmtDate(D.meta.updated)}</span>
        <span class="hero-meta-sep">·</span>
        <span class="hero-meta-item">🔍 ${D.intelligence.length} macro themes</span>
        <span class="hero-meta-sep">·</span>
        <span class="hero-meta-item">🏢 ${D.companies.length} companies</span>
      </div>`;
    main.appendChild(hero);

    /* ── Stats strip ──────────────────────────────────────────────────────── */
    const stats = el('div', 'stats-strip');
    const totalReports = D.companies.reduce((a, c) => a + c.reports.length, 0);
    const statsData = [
      { value: D.companies.length,  label: 'Companies' },
      { value: D.sectors.length,    label: 'Sectors' },
      { value: D.intelligence.length, label: 'Macro Themes' },
      { value: totalReports,        label: 'Reports' },
    ];
    stats.innerHTML = `<div class="stats-inner">${statsData.map(s =>
      `<div class="stat-item"><span class="stat-value">${s.value}</span><span class="stat-label">${s.label}</span></div>`
    ).join('')}</div>`;
    main.appendChild(stats);

    /* ── Sectors ──────────────────────────────────────────────────────────── */
    const secSection = el('div', 'section');
    secSection.id = 'industries';
    secSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">Sectors</h2>
        <a class="section-link" href="companies.html">All Companies →</a>
      </div>`;
    const chipGrid = el('div', 'sector-grid');
    let activeFilter = null;

    D.sectors.forEach(s => {
      const chip = el('button', 'sector-chip');
      chip.style.setProperty('--chip-color', s.color);
      chip.innerHTML = `<span class="sector-icon">${s.icon}</span><span class="sector-label">${s.label}</span>`;
      chip.addEventListener('click', () => {
        const isSame = activeFilter === s.id;
        activeFilter = isSame ? null : s.id;
        $$('.sector-chip').forEach(c => c.classList.remove('active'));
        if (!isSame) chip.classList.add('active');
        filterContent(activeFilter);
      });
      chipGrid.appendChild(chip);
    });
    secSection.appendChild(chipGrid);
    main.appendChild(secSection);
    main.appendChild(el('hr', 'divider'));

    /* ── Intelligence feed ────────────────────────────────────────────────── */
    const intelSection = el('div', 'section');
    intelSection.id = 'intelligence';
    intelSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">Macro Intelligence</h2>
      </div>`;
    const intelFeed = el('div', 'intel-feed');
    intelFeed.id = 'intel-feed';

    D.intelligence.forEach(item => {
      const card = buildIntelCard(item);
      intelFeed.appendChild(card);
    });
    intelSection.appendChild(intelFeed);
    main.appendChild(intelSection);
    main.appendChild(el('hr', 'divider'));

    /* ── Recent reports ────────────────────────────────────────────────────── */
    const recentSection = el('div', 'section');
    recentSection.id = 'recent-reports';
    recentSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">Recent Company Reports</h2>
        <a class="section-link" href="companies.html">All Companies →</a>
      </div>`;
    const recentList = el('div', 'reports-list');
    recentList.id = 'recent-list';

    // Flatten and sort all reports
    const allReports = D.companies.flatMap(c =>
      c.reports.map(r => ({ ...r, company: c }))
    ).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 14);

    allReports.forEach(r => {
      const row = buildReportRow(r);
      recentList.appendChild(row);
    });
    recentSection.appendChild(recentList);
    main.appendChild(recentSection);
    main.appendChild(el('hr', 'divider'));

    /* ── Companies highlights ─────────────────────────────────────────────── */
    const coSection = el('div', 'section');
    coSection.id = 'companies-highlight';
    coSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">Featured Companies</h2>
        <a class="section-link" href="companies.html">View All ${D.companies.length} →</a>
      </div>`;
    const coGrid = el('div', 'companies-grid');
    coGrid.id = 'featured-companies';
    D.companies.slice(0, 9).forEach(c => coGrid.appendChild(buildCompanyCard(c)));
    coSection.appendChild(coGrid);
    main.appendChild(coSection);

    /* ── Filter function ─────────────────────────────────────────────────── */
    function filterContent(sectorId) {
      // Filter intel feed
      $$('.intel-card', intelFeed).forEach(card => {
        if (!sectorId) { card.classList.remove('hidden'); return; }
        const sectors = (card.dataset.sectors || '').split(',');
        card.classList.toggle('hidden', !sectors.includes(sectorId));
      });
      // Filter companies
      $$('.company-card', coGrid).forEach(card => {
        if (!sectorId) { card.classList.remove('hidden'); return; }
        card.classList.toggle('hidden', card.dataset.sector !== sectorId);
      });
      // Filter reports
      $$('.report-row', recentList).forEach(row => {
        if (!sectorId) { row.classList.remove('hidden'); return; }
        const co = companyMap[row.dataset.companyId];
        row.classList.toggle('hidden', co?.sector !== sectorId);
      });
    }
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /*  COMPANIES PAGE                                                          */
  /* ════════════════════════════════════════════════════════════════════════ */
  function renderCompanies() {
    const main = $('#main-content');
    const header = el('div', 'companies-page-header');
    header.innerHTML = `
      <h1 class="companies-page-title">Company Directory</h1>
      <p class="companies-page-sub">${D.companies.length} companies across ${D.sectors.length} sectors tracked in this edition.</p>`;
    main.appendChild(header);

    const body = el('div', 'section');
    body.style.paddingTop = '0';

    // Filter bar
    const filterBar = el('div', 'companies-filter-bar');
    const allBtn = el('button', 'filter-btn active');
    allBtn.textContent = 'All';
    allBtn.id = 'filter-all';
    filterBar.appendChild(allBtn);

    D.sectors.forEach(s => {
      const btn = el('button', 'filter-btn');
      btn.textContent = `${s.icon} ${s.label}`;
      btn.dataset.sector = s.id;
      filterBar.appendChild(btn);
    });
    body.appendChild(filterBar);

    // Grid
    const grid = el('div', 'companies-grid');
    grid.id = 'co-grid';
    D.companies.forEach(c => grid.appendChild(buildCompanyCard(c)));
    body.appendChild(grid);
    main.appendChild(body);

    // Filter logic
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('button');
      if (!btn) return;
      $$('.filter-btn', filterBar).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sector = btn.dataset.sector;
      $$('.company-card', grid).forEach(card => {
        card.classList.toggle('hidden', !!(sector && card.dataset.sector !== sector));
      });
    });
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /*  BUILDERS                                                                */
  /* ════════════════════════════════════════════════════════════════════════ */

  function buildIntelCard(item) {
    const color = item.sectors?.length ? getSectorColor(item.sectors[0]) : 'var(--brand-primary)';
    const card = el('div', 'intel-card');
    card.dataset.sectors = (item.sectors || []).join(',');
    card.style.setProperty('--accent-color', color);

    const sectorTags = (item.sectors || []).map(sid => {
      const s = sectorMap[sid];
      if (!s) return '';
      return `<span class="intel-sector-tag" style="color:${s.color};border-color:${s.color}30;background:${s.color}12">${s.icon} ${s.label}</span>`;
    }).join('');

    const coTags = (item.companies || []).map(cid => {
      const c = companyMap[cid];
      return c ? `<span class="intel-co-tag">${c.ticker === 'Private' ? c.name : c.ticker}</span>` : '';
    }).join('');

    const factsList = (item.keyFacts || []).map(f =>
      `<li>${f}</li>`
    ).join('');

    card.innerHTML = `
      <div class="intel-card-meta">
        <span class="intel-type">${item.type}</span>
        <span class="intel-date">${fmtDate(item.date)}</span>
        ${sectorTags}
      </div>
      <button class="intel-expand-btn" aria-label="Expand">+ Details</button>
      <h3 class="intel-title">${item.title}</h3>
      <p class="intel-summary">${item.summary}</p>
      <div class="intel-companies">${coTags}</div>
      <div class="intel-key-facts">
        <div class="intel-facts-title">Key Facts</div>
        <ul class="intel-facts-list">${factsList}</ul>
      </div>`;

    // Expand toggle
    const expandBtn = card.querySelector('.intel-expand-btn');
    card.addEventListener('click', e => {
      if (e.target === expandBtn || expandBtn.contains(e.target)) {
        const isExpanded = card.classList.toggle('expanded');
        expandBtn.textContent = isExpanded ? '− Collapse' : '+ Details';
      }
    });

    return card;
  }

  function buildCompanyCard(company) {
    const color = getSectorColor(company.sector);
    const sector = sectorMap[company.sector];
    const latestReport = company.reports[0];

    const card = el('div', 'company-card');
    card.dataset.sector = company.sector;
    card.dataset.id = company.id;
    card.style.setProperty('--sector-color', color);

    const metaItems = [
      company.hq ? `📍 ${company.hq}` : '',
      company.marketCap ? `💰 ${company.marketCap}` : '',
      company.employees ? `👥 ${company.employees}` : '',
    ].filter(Boolean);

    card.innerHTML = `
      <div class="company-header">
        <div class="company-name">${company.name}</div>
        <div class="company-ticker">${company.ticker}</div>
      </div>
      ${metaItems.length ? `<div class="company-meta">${metaItems.map(m => `<span class="company-meta-item">${m}</span>`).join('')}</div>` : ''}
      <div class="company-sector-badge">
        <span>${sector?.icon || '📊'}</span> ${sector?.label || 'Uncategorized'}
      </div>
      <p class="company-summary">${company.summary}</p>
      ${company.tags?.length ? `<div class="company-tags">${company.tags.map(t => `<span class="company-tag">${t}</span>`).join('')}</div>` : ''}
      ${latestReport ? `
        <div class="company-latest-report">
          <div class="company-latest-label">Latest · ${fmtDate(latestReport.date)}</div>
          <div class="company-latest-title">${latestReport.title}</div>
        </div>` : ''}`;

    card.addEventListener('click', () => openCompanyModal(company));
    return card;
  }

  function buildReportRow(r) {
    const sentiment = D.sentimentLabels[r.sentiment] || { label: r.sentiment, color: '#94a3b8' };
    const color = getSectorColor(r.company.sector);
    const row = el('div', 'report-row');
    row.dataset.companyId = r.company.id;
    row.innerHTML = `
      <span class="report-date">${fmtDate(r.date)}</span>
      <span class="report-type" style="color:${color}">${r.type}</span>
      <span class="report-title"><strong style="color:var(--text-primary);font-size:11px;">${r.company.ticker === 'Private' ? r.company.name : r.company.ticker}</strong> — ${r.title}</span>
      <span class="report-sentiment" style="color:${sentiment.color};background:${sentiment.color}18;border:1px solid ${sentiment.color}30">${sentiment.label}</span>`;
    row.addEventListener('click', () => openCompanyModal(r.company));
    return row;
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /*  MODAL                                                                   */
  /* ════════════════════════════════════════════════════════════════════════ */
  let modalOverlay = null;

  function openCompanyModal(company) {
    closeModal();
    const color = getSectorColor(company.sector);
    const sector = sectorMap[company.sector];

    const overlay = el('div', 'modal-overlay');
    const modal = el('div', 'modal');

    const reportRows = company.reports.map(r => {
      const s = D.sentimentLabels[r.sentiment] || { label: r.sentiment, color: '#94a3b8' };
      return `
        <div class="report-row report-row-detailed">
          <div class="report-row-head">
            <span class="report-date">${fmtDate(r.date)}</span>
            <span class="report-type" style="color:${color}">${r.type}</span>
            <span class="report-title">${r.title}</span>
            <span class="report-sentiment" style="color:${s.color};background:${s.color}18;border:1px solid ${s.color}30">${s.label}</span>
          </div>
          ${r.summary ? `<p class="report-body">${r.summary}</p>` : ''}
        </div>`;
    }).join('');

    const tickerLine = [company.ticker, company.exchange].filter(Boolean).join(' · ');

    const statDefs = [
      ['Market Cap', company.marketCap],
      ['Employees', company.employees],
      ['Founded', company.founded],
      ['Sector', sector?.label],
      ['HQ', company.hq],
    ].filter(([, v]) => v !== null && v !== undefined && v !== '');

    modal.innerHTML = `
      <button class="modal-close" aria-label="Close" id="modal-close">✕</button>
      <div class="modal-ticker-row">
        <span class="modal-sector-icon">${sector?.icon}</span>
        <span class="modal-co-name">${company.name}</span>
        ${tickerLine ? `<span class="modal-ticker" style="color:${color};background:${color}18;border:1px solid ${color}30">${tickerLine}</span>` : ''}
      </div>
      <p class="modal-summary">${company.summary}</p>
      ${statDefs.length ? `
      <div class="modal-stats">
        ${statDefs.map(([label, value]) => `<div class="modal-stat"><div class="modal-stat-label">${label}</div><div class="modal-stat-value">${value}</div></div>`).join('')}
      </div>` : ''}
      <div class="modal-reports-title">Intelligence & Reports</div>
      <div class="reports-list">${reportRows}</div>`;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    modalOverlay = overlay;

    requestAnimationFrame(() => overlay.classList.add('open'));
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    $('#modal-close', modal).addEventListener('click', closeModal);
    document.addEventListener('keydown', onEscKey);
  }

  function closeModal() {
    if (!modalOverlay) return;
    // Capture this specific overlay rather than reading the shared
    // `modalOverlay` variable inside the timeout — if a new modal opens
    // before this fade-out finishes, that variable already points at the
    // new overlay, so removing/nulling via the shared reference would
    // delete the wrong element and leave this one orphaned in the DOM.
    const ov = modalOverlay;
    ov.classList.remove('open');
    setTimeout(() => { ov.remove(); if (modalOverlay === ov) modalOverlay = null; }, 400);
    document.removeEventListener('keydown', onEscKey);
  }

  function onEscKey(e) { if (e.key === 'Escape') closeModal(); }

  /* ════════════════════════════════════════════════════════════════════════ */
  /*  SEARCH                                                                  */
  /* ════════════════════════════════════════════════════════════════════════ */
  const searchPanel = $('#search-panel');

  function openSearch() {
    if (!searchPanel) return;
    searchPanel.removeAttribute('hidden');
    // Build panel UI on first open
    if (!searchPanel.dataset.built) {
      buildSearchPanel();
      searchPanel.dataset.built = '1';
    }
    const inp = $('#search-panel-input');
    if (inp) { inp.value = ''; renderSearchResults(''); inp.focus(); }
  }
  function closeSearch() {
    searchPanel?.setAttribute('hidden', '');
  }

  function buildSearchPanel() {
    searchPanel.innerHTML = `
      <div class="search-panel-inner">
        <div class="search-panel-input-wrap">
          <span class="search-panel-icon" aria-hidden="true"></span>
          <input class="search-panel-input" id="search-panel-input" type="search" placeholder="Search company, ticker, sector…" autocomplete="off" aria-label="Search">
          <span class="search-panel-esc">Esc</span>
        </div>
        <div class="search-results" id="search-results-list"></div>
      </div>`;
    searchPanel.addEventListener('click', e => { if (e.target === searchPanel) closeSearch(); });
    $('#search-panel-input').addEventListener('input', e => renderSearchResults(e.target.value));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSearch();
    });
    renderSearchResults('');
  }

  function renderSearchResults(query) {
    const list = $('#search-results-list');
    if (!list) return;
    const q = query.trim().toLowerCase();

    if (!q) {
      list.innerHTML = `<div class="search-results-empty">Start typing to search companies, sectors, or intelligence…</div>`;
      return;
    }

    const matchedCompanies = D.companies.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.ticker.toLowerCase().includes(q) ||
      c.sector.includes(q) ||
      c.hq.toLowerCase().includes(q) ||
      c.tags?.some(t => t.includes(q))
    );

    const matchedIntel = D.intelligence.filter(i =>
      i.title.toLowerCase().includes(q) ||
      i.summary.toLowerCase().includes(q) ||
      i.type.toLowerCase().includes(q)
    );

    const matchedSectors = D.sectors.filter(s =>
      s.label.toLowerCase().includes(q) || s.id.includes(q)
    );

    if (!matchedCompanies.length && !matchedIntel.length && !matchedSectors.length) {
      list.innerHTML = `<div class="search-results-empty">No results for "<strong>${query}</strong>"</div>`;
      return;
    }

    let html = '';
    if (matchedSectors.length) {
      html += `<div class="search-result-group-label">Sectors</div>`;
      matchedSectors.slice(0, 4).forEach(s => {
        html += `<div class="search-result-item" data-type="sector" data-id="${s.id}">
          <span class="search-result-icon">${s.icon}</span>
          <div><div class="search-result-name">${s.label}</div><div class="search-result-sub">Sector</div></div>
        </div>`;
      });
    }
    if (matchedCompanies.length) {
      html += `<div class="search-result-group-label">Companies</div>`;
      matchedCompanies.slice(0, 8).forEach(c => {
        const color = getSectorColor(c.sector);
        html += `<div class="search-result-item" data-type="company" data-id="${c.id}">
          <span class="search-result-icon">${getSectorIcon(c.sector)}</span>
          <div>
            <div class="search-result-name">${c.name} <span style="color:${color};font-size:11px;font-weight:700;">${c.ticker}</span></div>
            <div class="search-result-sub">${sectorMap[c.sector]?.label} · ${c.hq}</div>
          </div>
        </div>`;
      });
    }
    if (matchedIntel.length) {
      html += `<div class="search-result-group-label">Intelligence</div>`;
      matchedIntel.slice(0, 4).forEach(i => {
        html += `<div class="search-result-item" data-type="intel" data-id="${i.id}">
          <span class="search-result-icon">📊</span>
          <div>
            <div class="search-result-name">${i.title.length > 60 ? i.title.slice(0, 60) + '…' : i.title}</div>
            <div class="search-result-sub">${i.type} · ${fmtDate(i.date)}</div>
          </div>
        </div>`;
      });
    }

    list.innerHTML = html;

    // Click handlers
    $$('.search-result-item', list).forEach(item => {
      item.addEventListener('click', () => {
        const type = item.dataset.type;
        const id = item.dataset.id;
        closeSearch();
        if (type === 'company') {
          const c = companyMap[id];
          if (c) openCompanyModal(c);
        } else if (type === 'intel') {
          const card = document.querySelector(`.intel-card[data-id="${id}"]`);
          card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (type === 'sector') {
          const chipEl = document.querySelector(`.sector-chip`);
          if (chipEl) { document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }); }
        }
      });
    });
  }

  /* ── Keyboard shortcut Ctrl+K / Cmd+K ─────────────────────────────────── */
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchPanel?.hasAttribute('hidden')) openSearch(); else closeSearch();
    }
  });

  // Also wire header search input click
  const headerSearch = $('#global-search');
  if (headerSearch) {
    headerSearch.addEventListener('focus', e => { e.preventDefault(); e.target.blur(); openSearch(); });
    headerSearch.parentElement.addEventListener('click', () => openSearch());
  }

  /* ── Toast helper ────────────────────────────────────────────────────────── */
  function showToast(msg) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }

})();

