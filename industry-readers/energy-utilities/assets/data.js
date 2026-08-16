window.EU_DATA = {
  meta: {
    product_name: "Energy & Utilities Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 28,
    brief_count: 40,
    editorial_readout: "The Energy & Utilities sector in August 2026 is navigating one of the most consequential transitions in its history. The power demand supercycle, driven by AI data center buildout, EV adoption, and industrial reshoring, has fundamentally altered the investment calculus for utilities globally. According to McKinsey's Power 2026 report, global electricity demand is on track to grow 3.5% annually through 2030 — double the historic rate — creating extraordinary pressure on generation capacity and grid infrastructure. Simultaneously, the energy transition is accelerating: wind, solar, and battery storage investments reached $1.9 trillion globally in 2025, with Q2 2026 earnings from NextEra, Enel, and Orsted confirming robust project pipelines despite persistent permitting delays.\n\nFor oil majors, Q2 2026 earnings reflect disciplined capital allocation and shareholder returns despite moderating crude prices (Brent averaging $74/bbl in Q2). ExxonMobil, Shell, and BP all exceeded consensus earnings estimates, with integrated LNG portfolios providing a meaningful earnings buffer. The global LNG market remains structurally undersupplied through at least 2028, driving premium pricing for long-term offtake contracts. BCG's Energy Transition Index highlights that incumbents with diversified portfolios — spanning traditional hydrocarbons, renewables, and grid services — are outperforming pure-play renewables on total shareholder return by 12 percentage points over the past 18 months.\n\nRegulatory and policy tailwinds remain supportive in most jurisdictions. The US Inflation Reduction Act continues to deploy capital into clean energy manufacturing and grid modernization, while the EU's REPowerEU targets have driven record renewable auction activity across Germany, Spain, and Poland. However, grid interconnection queues remain a critical bottleneck: in the US alone, over 2,600 GW of proposed projects are waiting for interconnection studies, according to the Lawrence Berkeley National Laboratory. The strategic imperative for IT consulting — spanning grid modernization, AI-driven asset management, digital twin deployment, and cybersecurity for critical infrastructure — has never been more acute."
  },
  industry_cards: [
    {
      id: "integrated-oils",
      db_industry: "Integrated Oil & Gas",
      name: "Integrated Oil & Gas",
      eyebrow: "Discipline Amid Moderation",
      top_trend: "Supermajors maintain capital discipline and strong buybacks as Brent hovers at $72-76/bbl; LNG portfolios provide structural earnings floor.",
      readout: "Q2 2026 earnings from ExxonMobil ($2.14 EPS), Shell ($1.68/share), and Chevron ($2.93 EPS) beat consensus on integrated LNG and chemical margins. BCG notes that majors are prioritizing high-return brownfield expansions over frontier exploration.",
      monitored_count: 6, core_count: 5, context_count: 2,
      readout_as_of: "2026-08-16", freshness_status: "CURRENT", freshness_age_days: 0,
      presentation_mode: "canonical_brief", href: "industry.html?id=integrated-oils"
    },
    {
      id: "renewables-transition",
      db_industry: "Renewables & Energy Transition",
      name: "Renewables & Energy Transition",
      eyebrow: "Power Demand Supercycle",
      top_trend: "AI data center power demand is creating a generational investment opportunity; US grid interconnection queue exceeds 2,600 GW.",
      readout: "NextEra Energy raised FY2026 adjusted EPS guidance to $3.45-3.70, driven by record renewable project deliveries. Orsted and RWE both cited strong long-term PPA pricing in Q2 results, with corporate offtakers (hyperscalers) signing 10-20 year PPAs at premium rates to secure clean power for AI data centers.",
      monitored_count: 7, core_count: 6, context_count: 2,
      readout_as_of: "2026-08-16", freshness_status: "CURRENT", freshness_age_days: 0,
      presentation_mode: "canonical_brief", href: "industry.html?id=renewables-transition"
    },
    {
      id: "utilities-grid",
      db_industry: "Regulated Utilities & Grid",
      name: "Regulated Utilities & Grid",
      eyebrow: "Grid Modernization Imperative",
      top_trend: "Regulated utilities face rate case pressure as grid hardening capex surges; AI-driven grid management becomes core strategic capability.",
      readout: "Duke Energy and Southern Company are filing aggressive rate cases citing $50B+ grid modernization programs through 2030. Bain's Utilities 2026 report identifies digital twin and predictive asset management as top IT priorities, directly creating consulting opportunity.",
      monitored_count: 5, core_count: 4, context_count: 1,
      readout_as_of: "2026-08-16", freshness_status: "CURRENT", freshness_age_days: 0,
      presentation_mode: "canonical_brief", href: "industry.html?id=utilities-grid"
    },
    {
      id: "natural-gas-lng",
      db_industry: "Natural Gas & LNG",
      name: "Natural Gas & LNG",
      eyebrow: "Structural LNG Undersupply",
      top_trend: "Global LNG demand exceeds supply through 2028; US LNG export capacity expansion reshaping geopolitical energy flows.",
      readout: "US LNG exports are on track to reach 16.5 Bcf/d by year-end 2026, cementing US position as world's largest LNG exporter. Cheniere Energy and Venture Global posted record EBITDA in Q2 2026 driven by strong Asian spot demand and European contract premiums.",
      monitored_count: 4, core_count: 3, context_count: 1,
      readout_as_of: "2026-08-16", freshness_status: "CURRENT", freshness_age_days: 0,
      presentation_mode: "canonical_brief", href: "industry.html?id=natural-gas-lng"
    },
    {
      id: "energy-tech-services",
      db_industry: "Energy Technology & Services",
      name: "Energy Technology & Services",
      eyebrow: "AI & Digital Transformation",
      top_trend: "Oilfield services companies pivot to AI-driven well optimization and carbon capture tech; digital services margins outpace traditional segment.",
      readout: "SLB (Schlumberger) reported AI-driven efficiency gains reducing per-well costs by 12-18% in Q2 2026. Halliburton launched its iEnergy platform with integrated AI forecasting. McKinsey estimates $50-80B in addressable IT services value in energy digitization through 2030.",
      monitored_count: 4, core_count: 3, context_count: 1,
      readout_as_of: "2026-08-16", freshness_status: "CURRENT", freshness_age_days: 0,
      presentation_mode: "canonical_brief", href: "industry.html?id=energy-tech-services"
    }
  ],
  industry_pages: {},
  pilot_industries: {
    "integrated-oils": {
      trends: [
        {
          trend_id: "t_eu_01",
          name: "LNG Portfolio as Earnings Stabilizer",
          tracked_since: "2025-01",
          current_readout: "Supermajors with integrated LNG exposure (Shell, TotalEnergies, ExxonMobil) are delivering 15-20% earnings premium over pure-play upstream peers in volatile oil price environments.",
          what_changed: "Q2 2026 Brent averaged $74/bbl — below 2025 peaks — yet integrated majors beat consensus due to LNG spot pricing strength in Asia.",
          why_it_matters: "Creates strategic rationale for IT transformation in LNG trading, scheduling, and cargo optimization — a direct consulting entry point.",
          conversation_hypothesis: "How is your LNG trading desk leveraging AI for real-time cargo optimization and price discovery?"
        },
        {
          trend_id: "t_eu_02",
          name: "Scope 3 Emissions Reporting Pressure",
          tracked_since: "2025-06",
          current_readout: "SEC's climate disclosure rule and EU CSRD are forcing oil majors to accelerate Scope 3 measurement infrastructure, creating significant data management and technology investment cycles.",
          what_changed: "BP and Shell both committed to third-party verification of Scope 3 data in Q2 2026 investor presentations, signaling enterprise-wide data quality programs.",
          why_it_matters: "Emissions data management, supply chain carbon accounting, and ESG reporting platforms are multi-year IT investments.",
          conversation_hypothesis: "What is your current Scope 3 data architecture, and how are you managing third-party verification requirements?"
        }
      ]
    },
    "renewables-transition": {
      trends: [
        {
          trend_id: "t_eu_03",
          name: "Hyperscaler Power Purchase Agreements",
          tracked_since: "2024-09",
          current_readout: "Microsoft, Google, Amazon, and Meta are collectively signing 40-60 GW of new renewable PPAs annually to meet AI data center power commitments — creating a structurally premium offtake market for wind and solar developers.",
          what_changed: "Google signed a 1.5 GW nuclear PPA with Constellation Energy in Q1 2026; Microsoft secured 3 GW of offshore wind in a record-breaking deal in July 2026.",
          why_it_matters: "Energy asset developers need sophisticated PPA management, energy trading, and portfolio analytics platforms — addressable by IT consulting.",
          conversation_hypothesis: "How are you structuring your long-duration offtake strategy to capture the AI power premium?"
        }
      ]
    },
    "utilities-grid": {
      trends: [
        {
          trend_id: "t_eu_04",
          name: "Grid Modernization & Digital Twin Deployment",
          tracked_since: "2025-03",
          current_readout: "US utilities are deploying advanced metering infrastructure (AMI 2.0), AI-driven outage prediction, and digital twin platforms at scale, with $120B+ in grid capex planned through 2030.",
          what_changed: "FERC Order 2023 reforms are unlocking interconnection queue backlogs, accelerating the pace of renewable integration and requiring real-time grid data platforms.",
          why_it_matters: "Grid orchestration, asset performance management (APM), and cybersecurity for operational technology (OT) are high-margin consulting opportunities.",
          conversation_hypothesis: "Have you quantified the ROI of your digital twin program on outage reduction and regulatory rate case support?"
        }
      ]
    }
  },
  companies: [
    { company_id: 1, name: "ExxonMobil", ticker: "XOM", industry: "Integrated Oil & Gas", aliases: ["Exxon"], latest_brief: { title: "Q2 2026 Earnings Beat on LNG Margins", brief_date: "2026-08-02", qc_score: 4.8 } },
    { company_id: 2, name: "Shell", ticker: "SHEL", industry: "Integrated Oil & Gas", aliases: ["Royal Dutch Shell"], latest_brief: { title: "Q2 2026 Integrated Portfolio Strength", brief_date: "2026-08-01", qc_score: 4.7 } },
    { company_id: 3, name: "Chevron", ticker: "CVX", industry: "Integrated Oil & Gas", aliases: [], latest_brief: { title: "Q2 2026 Permian Output at Record", brief_date: "2026-08-03", qc_score: 4.6 } },
    { company_id: 4, name: "TotalEnergies", ticker: "TTE", industry: "Integrated Oil & Gas", aliases: ["Total"], latest_brief: { title: "Q2 2026 LNG & Renewables Mix", brief_date: "2026-07-29", qc_score: 4.7 } },
    { company_id: 5, name: "BP", ticker: "BP", industry: "Integrated Oil & Gas", aliases: ["British Petroleum"], latest_brief: { title: "Q2 2026 Strategy Reset Update", brief_date: "2026-07-30", qc_score: 4.5 } },
    { company_id: 6, name: "Equinor", ticker: "EQNR", industry: "Integrated Oil & Gas", aliases: ["Statoil"], latest_brief: { title: "Q2 2026 North Sea Operations", brief_date: "2026-07-25", qc_score: 4.6 } },
    { company_id: 7, name: "NextEra Energy", ticker: "NEE", industry: "Renewables & Energy Transition", aliases: [], latest_brief: { title: "Q2 2026 Guidance Raised on Renewables", brief_date: "2026-07-23", qc_score: 4.9 } },
    { company_id: 8, name: "Orsted", ticker: "ORSTED", industry: "Renewables & Energy Transition", aliases: [], latest_brief: { title: "Q2 2026 Offshore Wind Delivery Update", brief_date: "2026-08-07", qc_score: 4.6 } },
    { company_id: 9, name: "RWE", ticker: "RWE", industry: "Renewables & Energy Transition", aliases: [], latest_brief: { title: "Q2 2026 European Renewables Pipeline", brief_date: "2026-08-13", qc_score: 4.7 } },
    { company_id: 10, name: "Enel", ticker: "ENEL", industry: "Renewables & Energy Transition", aliases: [], latest_brief: { title: "Q2 2026 Green Power Growth", brief_date: "2026-07-31", qc_score: 4.7 } },
    { company_id: 11, name: "Iberdrola", ticker: "IBE", industry: "Renewables & Energy Transition", aliases: [], latest_brief: { title: "Q2 2026 US & European Grid Investment", brief_date: "2026-07-24", qc_score: 4.8 } },
    { company_id: 12, name: "Vestas Wind Systems", ticker: "VWS", industry: "Renewables & Energy Transition", aliases: ["Vestas"], latest_brief: { title: "Q2 2026 Order Backlog & Margins", brief_date: "2026-08-09", qc_score: 4.5 } },
    { company_id: 13, name: "First Solar", ticker: "FSLR", industry: "Renewables & Energy Transition", aliases: [], latest_brief: { title: "Q2 2026 IRA Manufacturing Benefit", brief_date: "2026-07-30", qc_score: 4.8 } },
    { company_id: 14, name: "Duke Energy", ticker: "DUK", industry: "Regulated Utilities & Grid", aliases: [], latest_brief: { title: "Q2 2026 Grid Capex Rate Case Filing", brief_date: "2026-08-06", qc_score: 4.6 } },
    { company_id: 15, name: "Southern Company", ticker: "SO", industry: "Regulated Utilities & Grid", aliases: [], latest_brief: { title: "Q2 2026 Vogtle Unit 4 Operations", brief_date: "2026-08-01", qc_score: 4.7 } },
    { company_id: 16, name: "Dominion Energy", ticker: "D", industry: "Regulated Utilities & Grid", aliases: [], latest_brief: { title: "Q2 2026 Grid Hardening Program", brief_date: "2026-07-31", qc_score: 4.5 } },
    { company_id: 17, name: "Consolidated Edison", ticker: "ED", industry: "Regulated Utilities & Grid", aliases: ["ConEd"], latest_brief: { title: "Q2 2026 NYC Grid Reliability", brief_date: "2026-07-29", qc_score: 4.4 } },
    { company_id: 18, name: "National Grid", ticker: "NG", industry: "Regulated Utilities & Grid", aliases: [], latest_brief: { title: "Q2 2026 UK & US Operations", brief_date: "2026-08-08", qc_score: 4.6 } },
    { company_id: 19, name: "Exelon", ticker: "EXC", industry: "Regulated Utilities & Grid", aliases: [], latest_brief: { title: "Q2 2026 Nuclear Fleet Performance", brief_date: "2026-08-05", qc_score: 4.7 } },
    { company_id: 20, name: "Cheniere Energy", ticker: "LNG", industry: "Natural Gas & LNG", aliases: [], latest_brief: { title: "Q2 2026 Record LNG EBITDA", brief_date: "2026-08-07", qc_score: 4.9 } },
    { company_id: 21, name: "Venture Global LNG", ticker: "VG", industry: "Natural Gas & LNG", aliases: [], latest_brief: { title: "Q2 2026 Calcasieu Pass 2 Update", brief_date: "2026-08-01", qc_score: 4.6 } },
    { company_id: 22, name: "Kinder Morgan", ticker: "KMI", industry: "Natural Gas & LNG", aliases: [], latest_brief: { title: "Q2 2026 Pipeline Volumes & Tariffs", brief_date: "2026-07-18", qc_score: 4.5 } },
    { company_id: 23, name: "Williams Companies", ticker: "WMB", industry: "Natural Gas & LNG", aliases: [], latest_brief: { title: "Q2 2026 Gathering & Processing", brief_date: "2026-08-03", qc_score: 4.6 } },
    { company_id: 24, name: "SLB (Schlumberger)", ticker: "SLB", industry: "Energy Technology & Services", aliases: ["Schlumberger"], latest_brief: { title: "Q2 2026 AI Well Optimization Results", brief_date: "2026-07-19", qc_score: 4.8 } },
    { company_id: 25, name: "Halliburton", ticker: "HAL", industry: "Energy Technology & Services", aliases: [], latest_brief: { title: "Q2 2026 iEnergy Platform Launch", brief_date: "2026-07-23", qc_score: 4.6 } },
    { company_id: 26, name: "Baker Hughes", ticker: "BKR", industry: "Energy Technology & Services", aliases: [], latest_brief: { title: "Q2 2026 Gas Technology Orders", brief_date: "2026-07-24", qc_score: 4.7 } },
    { company_id: 27, name: "Constellation Energy", ticker: "CEG", industry: "Regulated Utilities & Grid", aliases: [], latest_brief: { title: "Q2 2026 Nuclear PPA Wins with Hyperscalers", brief_date: "2026-08-08", qc_score: 4.9 } },
    { company_id: 28, name: "AES Corporation", ticker: "AES", industry: "Renewables & Energy Transition", aliases: [], latest_brief: { title: "Q2 2026 Battery Storage Deployments", brief_date: "2026-07-31", qc_score: 4.6 } }
  ]
};
