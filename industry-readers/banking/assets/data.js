window.EU_DATA = {
  meta: {
    product_name: "Banking & Financial Services Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 7,
    brief_count: 7,
    editorial_readout: "Q2 2026 marked a pivotal quarter for the global banking sector. Major US institutions (JPM, BAC, C, GS, MS, WFC) delivered resilient earnings, while disruptors like Nubank crossed the $1B net income threshold. Strategically, consulting leaders (McKinsey, BCG, Bain) observe a definitive pivot from defensive cost-cutting to structural redesign, heavily leveraging Generative AI to shift spend from 'run-the-bank' to 'change-the-bank'. Concurrently, regulatory pressures are evolving; the controversial Basel III Endgame was re-proposed in early 2026, and agencies are adopting a more risk-focused, outcome-based supervisory approach."
  },
  industry_cards: [
    {
      id: "us-megabanks",
      db_industry: "US Megabanks",
      name: "US Megabanks",
      eyebrow: "Resilient Core Earnings",
      top_trend: "Structural redesign and GenAI integration for structural productivity.",
      readout: "Earnings were strong across the board (e.g., GS EPS $20.98, JPM EPS $6.14, MS EPS $3.46). Focus remains on navigating market volatility while shifting tech spend toward innovation.",
      monitored_count: 6,
      core_count: 6,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=us-megabanks"
    },
    {
      id: "digital-neobanks",
      db_industry: "Digital Neobanks",
      name: "Digital Neobanks",
      eyebrow: "Profitability at Scale",
      top_trend: "Agile operating models challenging traditional incumbents.",
      readout: "Digital disruptors are proving their business models at scale. Nubank reported a milestone of over $1B in net income with gross revenue reaching $5.9B in Q2 2026.",
      monitored_count: 1,
      core_count: 1,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=digital-neobanks"
    },
    {
      id: "regulatory-capital",
      db_industry: "Regulatory & Capital",
      name: "Regulatory & Capital",
      eyebrow: "Basel III Re-Proposal",
      top_trend: "Risk-focused supervisory approach.",
      readout: "The 2023 Basel III Endgame was formally rescinded and re-proposed in March 2026. Regulators (Fed, OCC, FDIC) are shifting toward a more commercial, outcomes-based supervisory framework.",
      monitored_count: 0,
      core_count: 0,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=regulatory-capital"
    }
  ],
  industry_pages: {
     "us-megabanks": {
        id: "us-megabanks",
        db_industry: "US Megabanks",
        name: "US Megabanks",
        eyebrow: "Resilient Core Earnings",
        latest_brief: { brief_id: 1, title: "Q2 2026 U.S. Bank Earnings Review", brief_date: "2026-07-15", qc_score: 4.9 },
        summary: { top_trend: "GenAI structural integration.", readout: "Banks like GS and JPM reported robust earnings per share, balancing market volatility with strategic investments in technology." },
        counts: { industry: 6, monitored_count: 6, core_count: 6, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "digital-neobanks": {
        id: "digital-neobanks",
        db_industry: "Digital Neobanks",
        name: "Digital Neobanks",
        eyebrow: "Profitability at Scale",
        latest_brief: { brief_id: 2, title: "Nubank Q2 2026 Milestones", brief_date: "2026-08-13", qc_score: 4.8 },
        summary: { top_trend: "Sustained hyper-growth and profitability.", readout: "Nubank achieved its first $1B net income quarter." },
        counts: { industry: 1, monitored_count: 1, core_count: 1, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "regulatory-capital": {
        id: "regulatory-capital",
        db_industry: "Regulatory & Capital",
        name: "Regulatory & Capital",
        eyebrow: "Basel III Re-Proposal",
        latest_brief: { brief_id: 3, title: "2026 Basel III and Regulatory Updates", brief_date: "2026-06-18", qc_score: 4.7 },
        summary: { top_trend: "Outcomes-focused supervision.", readout: "Fed, OCC, and FDIC proposed an Expanded Risk-Based Approach, stepping back from the strict 2023 Basel III Endgame." },
        counts: { industry: 0, monitored_count: 0, core_count: 0, context_count: 0 },
        presentation_mode: "canonical_brief"
     }
  },
  pilot_industries: {
      "us-megabanks": {
          trends: [
             {
                trend_id: "t1",
                display_order: 1,
                name: "Generative AI for Structural Productivity",
                tracked_since: "2026-01",
                monthly_change: "STABLE",
                momentum: "Accelerating",
                breadth: "Universal",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "According to BCG and McKinsey, banks are shifting budgets from run-the-bank to change-the-bank, aiming for structural redesigns rather than simple cost-cutting. Earnings call transcripts across JPM and GS confirm large-scale technology and AI investments.",
                what_changed: "Moved from experimental LLM pilots to enterprise-wide productivity rollouts in Q2 2026.",
                why_it_matters: "Determines long-term cost-to-income ratios and ability to compete with fintechs.",
                confidence: "Very High",
                conversation_hypothesis: "How are you scaling AI to achieve structural cost take-outs while improving customer experience?"
             },
             {
                trend_id: "t2",
                display_order: 2,
                name: "Private Credit Discipline",
                tracked_since: "2026-03",
                monthly_change: "WORSENING",
                momentum: "Persistent",
                breadth: "Targeted",
                evidence_strength: "MODERATE",
                current_readout: "Bain's Q2 2026 reporting highlighted a complex private market environment. Despite AI euphoria in public markets, private credit is seeing more disciplined deal-making with a focus on senior secured, floating-rate loans.",
                what_changed: "Increased focus on credit quality and portfolio rotation amidst market volatility.",
                why_it_matters: "Impacts yields and risk profiles for alternative asset managers and bank lending arms.",
                confidence: "High",
                conversation_hypothesis: "In the face of mixed economic signals, how are you ensuring credit quality in your private market portfolios?"
             }
          ],
          archetypes: [],
          gsi_hypotheses: [],
          watch_items: ["Global STEM Talent Mobility for AI", "Basel III Final Rule Implementation Timeline"],
          evidence: { "t1": ["BCG Future of Finance 2026", "McKinsey Global Banking Annual Review 2026", "GS Q2 Earnings Transcript"], "t2": ["Bain Capital Specialty Finance Q2 Update"] }
      }
  },
  companies: [
      {
          company_id: 1,
          name: "JPMorgan Chase",
          ticker: "JPM",
          industry: "US Megabanks",
          industry_role: "core",
          latest_brief: { brief_id: 101, title: "Q2 2026 Earnings (EPS: $6.14)", brief_date: "2026-07-14", qc_score: 4.9 },
          aliases: ["JPMorgan"]
      },
      {
          company_id: 2,
          name: "Bank of America",
          ticker: "BAC",
          industry: "US Megabanks",
          industry_role: "core",
          latest_brief: { brief_id: 102, title: "Q2 2026 Earnings (EPS: $1.21)", brief_date: "2026-07-14", qc_score: 4.7 },
          aliases: ["BofA"]
      },
      {
          company_id: 3,
          name: "Citigroup",
          ticker: "C",
          industry: "US Megabanks",
          industry_role: "core",
          latest_brief: { brief_id: 103, title: "Q2 2026 Earnings (EPS: $3.15)", brief_date: "2026-07-14", qc_score: 4.6 },
          aliases: ["Citi"]
      },
      {
          company_id: 4,
          name: "Wells Fargo",
          ticker: "WFC",
          industry: "US Megabanks",
          industry_role: "core",
          latest_brief: { brief_id: 104, title: "Q2 2026 Earnings (EPS: $1.96)", brief_date: "2026-07-14", qc_score: 4.5 },
          aliases: []
      },
      {
          company_id: 5,
          name: "Goldman Sachs",
          ticker: "GS",
          industry: "US Megabanks",
          industry_role: "core",
          latest_brief: { brief_id: 105, title: "Q2 2026 Earnings (EPS: $20.98)", brief_date: "2026-07-14", qc_score: 4.8 },
          aliases: []
      },
      {
          company_id: 6,
          name: "Morgan Stanley",
          ticker: "MS",
          industry: "US Megabanks",
          industry_role: "core",
          latest_brief: { brief_id: 106, title: "Q2 2026 Earnings (EPS: $3.46)", brief_date: "2026-07-15", qc_score: 4.8 },
          aliases: []
      },
      {
          company_id: 7,
          name: "Nubank",
          ticker: "NU",
          industry: "Digital Neobanks",
          industry_role: "core",
          latest_brief: { brief_id: 107, title: "Q2 2026 Earnings (Net Income >$1B)", brief_date: "2026-08-13", qc_score: 4.9 },
          aliases: ["Nu Holdings"]
      }
  ]
};
