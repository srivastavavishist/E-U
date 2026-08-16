(function() {
    if (!window.EU_DATA) return;
    const d = window.EU_DATA;

    const sectors = (d.industry_cards || []).map((c, i) => {
        const colors = ['#2563eb', '#16a34a', '#d97706', '#dc2626', '#7c3aed', '#0891b2', '#be123c', '#ca8a04', '#059669', '#e11d48'];
        return {
            id: c.id,
            label: c.name || c.db_industry,
            dbIndustry: c.db_industry || c.name,
            icon: c.icon || '📊',
            color: colors[i % colors.length]
        };
    });

    // Companies carry the canonical `industry` string (matches industry_cards'
    // db_industry, not the shorter display `name`) — match on that first so a
    // card's display label can differ from the raw industry value without
    // silently misfiling every one of its companies into sectors[0].
    const getSectorId = (industry) => {
        const s = sectors.find(sec => sec.dbIndustry === industry) || sectors.find(sec => sec.label === industry);
        if (s) return s.id;
        return null;
    };

    const companies = (d.companies || []).map(c => {
        const rep = c.latest_brief ? [{
            date: c.latest_brief.brief_date || d.meta.publication_date || "2026-08-16",
            type: 'Brief',
            title: c.latest_brief.title || "Quarterly Update",
            summary: c.latest_brief.summary || "",
            sentiment: c.latest_brief.qc_score > 4.5 ? 'POSITIVE' : 'NEUTRAL'
        }] : [];

        return {
            id: String(c.company_id || c.ticker || Math.random()),
            name: c.name,
            ticker: c.ticker || "N/A",
            exchange: c.exchange || null,
            sector: getSectorId(c.industry),
            hq: c.hq || null,
            marketCap: c.market_cap || null,
            employees: c.employees || null,
            founded: c.founded || null,
            summary: c.summary || ('Tracked participant in ' + c.industry + '.'),
            tags: c.aliases || [],
            reports: rep
        };
    });

    const intel = [];
    if (d.pilot_industries) {
        Object.keys(d.pilot_industries).forEach(sectorId => {
            const pi = d.pilot_industries[sectorId];
            if (pi.trends) {
                pi.trends.forEach((t) => {
                    intel.push({
                        id: t.trend_id || ('t' + Math.random()),
                        type: 'Macro Trend',
                        date: d.meta.publication_date || "2026-08-16",
                        sectors: [sectorId],
                        title: t.name || t.top_trend || 'Industry Trend',
                        summary: t.current_readout || t.what_changed || t.why_it_matters || "",
                        companies: [],
                        keyFacts: [
                            t.what_changed ? "What changed: " + t.what_changed : null,
                            t.why_it_matters ? "Why it matters: " + t.why_it_matters : null,
                            t.conversation_hypothesis ? "Hypothesis: " + t.conversation_hypothesis : null
                        ].filter(Boolean)
                    });
                });
            }
        });
    }

    if (intel.length === 0) {
        (d.industry_cards || []).forEach((c, i) => {
            intel.push({
                id: 'intel-' + c.id + '-' + i,
                type: 'Sector Readout',
                date: c.readout_as_of || d.meta.publication_date || "2026-08-16",
                sectors: [c.id],
                title: c.eyebrow || c.top_trend || 'Sector Update',
                summary: c.readout || c.top_trend || "",
                companies: [],
                keyFacts: []
            });
        });
    }

    window.EI_DATA = {
        meta: {
            edition: d.meta.edition || "August 2026",
            description: d.meta.editorial_readout || d.meta.product_name || "Industry Intelligence Report",
            productName: d.meta.product_name || "Industry",
            updated: d.meta.publication_date || "2026-08-16",
        },
        sectors: sectors,
        intelligence: intel,
        companies: companies,
        sentimentLabels: {
            POSITIVE: { label: 'Positive', color: '#16a34a' },
            NEUTRAL: { label: 'Neutral', color: '#94a3b8' },
            NEGATIVE: { label: 'Negative', color: '#dc2626' }
        }
    };
})();
