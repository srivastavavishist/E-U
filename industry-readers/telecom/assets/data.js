window.EU_DATA = {
  meta: {
    product_name: "Global Telecommunications Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 5,
    brief_count: 24,
    editorial_readout: "The global telecommunications sector in Q2 2026 is marked by a structural pivot from traditional utility-based connectivity toward AI-native 'techco' models. Based on recent Q2 earnings from AT&T, Verizon, T-Mobile, Deutsche Telekom, and Vodafone, capital expenditure is increasingly stabilizing as early 5G build-outs conclude, redirecting investment toward edge computing, Open RAN, and Agentic AI integration. Bain and McKinsey reports from 2026 highlight a widening gap between 'leaders' who deploy self-healing autonomous networks and 'laggards' stuck in pilot purgatory.\n\nRegulators are also reshaping the playing field. The EU's newly proposed Digital Networks Act (DNA) is establishing a 'Single Passport Procedure' to reduce cross-border fragmentation and mandate a shift from copper to fiber by 2035. Concurrently, the US FCC has overhauled satellite licensing to accelerate Non-Terrestrial Network (NTN) integration, prioritizing supply chain security. As commoditization pressures consumer wireless margins, growth is decisively shifting to B2B enterprise solutions, sovereign cloud, and cybersecurity services."
  },
  industry_cards: [
    {
      id: "wireless-mobility",
      db_industry: "Wireless & Mobility",
      name: "Wireless & Consumer Mobility",
      eyebrow: "5G Monetization & Consumer Agentic AI",
      top_trend: "Transition from GenAI chatbots to 'Agentic AI' for proactive customer lifecycle management and autonomous support.",
      readout: "Q2 2026 earnings reveal intense competition in postpaid phone net additions, with T-Mobile leading but AT&T and Verizon showing strong retention driven by AI-optimized churn prediction models.",
      monitored_count: 12,
      core_count: 5,
      context_count: 3,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=wireless-mobility"
    },
    {
      id: "b2b-enterprise",
      db_industry: "B2B Enterprise Solutions",
      name: "B2B Enterprise & IoT",
      eyebrow: "Growth Beyond Connectivity",
      top_trend: "Telcos pivoting to higher stack layers (intelligence, cybersecurity, and IoT) to offset consumer connectivity commoditization.",
      readout: "According to McKinsey's 2026 telco outlook, operators successfully bundling Private 5G with edge-compute and zero-trust security are capturing 40% higher ARPU in the enterprise segment.",
      monitored_count: 15,
      core_count: 7,
      context_count: 4,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=b2b-enterprise"
    },
    {
      id: "infrastructure-cloud",
      db_industry: "Network Infrastructure",
      name: "Infrastructure, Edge & Sovereign Cloud",
      eyebrow: "Autonomous Networks & O-RAN",
      top_trend: "Deployment of intent-based orchestration where networks sense, adapt, and heal autonomously without manual intervention.",
      readout: "The European Commission's Digital Networks Act (DNA) is accelerating infrastructure overhaul, mandating a transition to fiber by 2035, while the FCC's new satellite licensing rules are spurring LEO-satellite/terrestrial network convergence.",
      monitored_count: 18,
      core_count: 6,
      context_count: 5,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=infrastructure-cloud"
    }
  ],
  industry_pages: {
    "wireless-mobility": {
      id: "wireless-mobility",
      db_industry: "Wireless & Mobility",
      name: "Wireless & Consumer Mobility",
      eyebrow: "5G Monetization & Consumer Agentic AI",
      latest_brief: { brief_id: 101, title: "T-Mobile & Verizon Q2 2026 Postpaid Growth and AI Retention", brief_date: "2026-07-24", qc_score: 4.8 },
      summary: { 
        top_trend: "Transition from GenAI chatbots to 'Agentic AI' for proactive customer lifecycle management.", 
        readout: "Q2 2026 earnings show stabilization in consumer ARPU, but growth is heavily reliant on reduced churn via predictive AI models rather than raw subscriber acquisition." 
      },
      counts: { industry: 12, monitored_count: 12, core_count: 5, context_count: 3 },
      presentation_mode: "canonical_brief"
    },
    "b2b-enterprise": {
      id: "b2b-enterprise",
      db_industry: "B2B Enterprise Solutions",
      name: "B2B Enterprise & IoT",
      eyebrow: "Growth Beyond Connectivity",
      latest_brief: { brief_id: 102, title: "McKinsey 2026 Report: The Enterprise Stack Pivot", brief_date: "2026-08-05", qc_score: 4.9 },
      summary: { 
        top_trend: "Pivoting to intelligence, cybersecurity, and IoT.", 
        readout: "Enterprise segments are the primary growth engine for Q2 2026, offsetting stagnant consumer mobility revenues." 
      },
      counts: { industry: 15, monitored_count: 15, core_count: 7, context_count: 4 },
      presentation_mode: "canonical_brief"
    },
    "infrastructure-cloud": {
      id: "infrastructure-cloud",
      db_industry: "Network Infrastructure",
      name: "Infrastructure, Edge & Sovereign Cloud",
      eyebrow: "Autonomous Networks & O-RAN",
      latest_brief: { brief_id: 103, title: "EU Digital Networks Act & FCC Satellite Modernization", brief_date: "2026-08-10", qc_score: 4.7 },
      summary: { 
        top_trend: "Intent-based orchestration and LEO satellite convergence.", 
        readout: "Regulatory tailwinds in the EU (DNA single passport) and US (FCC default-to-yes satellite licensing) are accelerating infrastructure modernization and cross-border scale." 
      },
      counts: { industry: 18, monitored_count: 18, core_count: 6, context_count: 5 },
      presentation_mode: "canonical_brief"
    }
  },
  pilot_industries: {
    "infrastructure-cloud": {
      trends: [
        {
          trend_id: "t1",
          display_order: 1,
          name: "Agentic AI & Autonomous 'Self-Healing' Networks",
          tracked_since: "2025-11",
          monthly_change: "IMPROVING",
          momentum: "Accelerating",
          breadth: "Broad",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "BCG and Bain 2026 reports emphasize that telcos are moving beyond isolated GenAI pilots into 'Agentic AI'—autonomous agents capable of executing complex workflows, such as predictive network maintenance and self-healing operations without human intervention. The performance gap between AI-native operators and legacy operators is visibly widening in Q2 OPEX metrics.",
          what_changed: "Operators have shifted from standard LLM chatbots for customer service to deploying multi-agent systems directly into network orchestration layers.",
          why_it_matters: "This structural reset drastically lowers network maintenance OPEX, reduces downtime, and is deemed a prerequisite for managing the complexity of dynamic 5G slicing and edge compute workloads.",
          confidence: "High",
          conversation_hypothesis: "Advise enterprise clients that network reliability SLAs will soon be dictated by the carrier's underlying Agentic AI capabilities; those lacking autonomous orchestration will struggle to meet modern sovereign cloud demands."
        },
        {
          trend_id: "t2",
          display_order: 2,
          name: "Regulatory Overhaul: EU DNA & FCC Satellite Convergence",
          tracked_since: "2026-01",
          monthly_change: "STABLE",
          momentum: "Persistent",
          breadth: "Global",
          evidence_strength: "STRONG_REGULATORY_ACTION",
          current_readout: "In Europe, the European Commission's newly proposed Digital Networks Act (DNA) introduced a 'Single Passport Procedure' allowing providers to register in one Member State and operate EU-wide, while mandating a copper-to-fiber transition by 2035. Concurrently, the US FCC approved a major overhaul of its satellite licensing regime in July 2026 with a 'default to yes' policy to speed up Non-Terrestrial Network (NTN) integration.",
          what_changed: "Regulatory environments are actively removing red tape for LEO satellite constellations while simultaneously enforcing strict supply chain security measures (FCC's Covered List expansions).",
          why_it_matters: "Reduces cross-border fragmentation in the EU, enabling paneuropean scale. In the US, it accelerates the convergence of standard mobility with satellite direct-to-device connectivity.",
          confidence: "Very High",
          conversation_hypothesis: "Discuss how the EU's Single Passport allows for rapid cross-border infrastructure deployment, and how the FCC's streamlined satellite licensing opens immediate joint-venture opportunities between traditional telcos and aerospace firms."
        }
      ],
      archetypes: [],
      gsi_hypotheses: [],
      watch_items: ["FCC Part 100 rules implementation for satellites", "EU BEREC expanded governance over the DNA", "Supply chain equipment bans affecting O-RAN vendors"],
      evidence: { 
        "t1": ["BCG 2026 Telecom AI Report", "Bain 2026 'Structural Reset' Telecom Outlook", "AT&T Q2 2026 Earnings Transcript"],
        "t2": ["EC Digital Networks Act Proposal 2026", "FCC July 2026 Satellite Licensing Order"]
      }
    }
  },
  companies: [
    {
      company_id: 1,
      name: "AT&T Inc.",
      ticker: "T",
      industry: "Wireless & Mobility",
      industry_role: "core",
      latest_brief: {
        brief_id: 201,
        title: "AT&T Q2 2026: Solid Wireless Retention amid AI Investments",
        brief_date: "2026-07-22",
        qc_score: 4.6
      },
      aliases: ["ATT"]
    },
    {
      company_id: 2,
      name: "Verizon Communications Inc.",
      ticker: "VZ",
      industry: "Wireless & Mobility",
      industry_role: "core",
      latest_brief: {
        brief_id: 202,
        title: "Verizon Q2 2026: Edge Compute & Enterprise Momentum",
        brief_date: "2026-07-24",
        qc_score: 4.5
      },
      aliases: ["Verizon"]
    },
    {
      company_id: 3,
      name: "T-Mobile US, Inc.",
      ticker: "TMUS",
      industry: "Wireless & Mobility",
      industry_role: "core",
      latest_brief: {
        brief_id: 203,
        title: "T-Mobile Q2 2026: Outpacing Rivals in Postpaid Phone Net Adds",
        brief_date: "2026-07-23",
        qc_score: 4.8
      },
      aliases: ["TMUS", "T-Mobile"]
    },
    {
      company_id: 4,
      name: "Deutsche Telekom AG",
      ticker: "DTEGY",
      industry: "Network Infrastructure",
      industry_role: "core",
      latest_brief: {
        brief_id: 204,
        title: "Deutsche Telekom Q2 2026: Preparing for the EU Digital Networks Act",
        brief_date: "2026-08-10",
        qc_score: 4.7
      },
      aliases: ["DT", "Deutsche Telekom"]
    },
    {
      company_id: 5,
      name: "Vodafone Group Plc",
      ticker: "VOD",
      industry: "Network Infrastructure",
      industry_role: "core",
      latest_brief: {
        brief_id: 205,
        title: "Vodafone Q2 2026: O-RAN Deployments and B2B Security Focus",
        brief_date: "2026-08-12",
        qc_score: 4.4
      },
      aliases: ["Vodafone"]
    }
  ]
};
