window.EU_DATA = {
  meta: {
    product_name: "Automotive & Mobility Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 25,
    brief_count: 25,
    editorial_readout: "In Q2 2026, the automotive industry shifted decisively from crisis management to profound structural transformation. Automakers faced severe margin pressures from high commodity costs and intense competition, particularly in the EV sector. The narrative has pivoted from 'growth at all costs' to scale discipline and vertical integration. Meanwhile, hybrid vehicles are serving as a critical profitability bridge amid volatile pure-play EV demand. Top consulting firms emphasize the shift toward AI-driven operational efficiency and the rise of Software-Defined Vehicles (SDVs), while a changing regulatory landscape sets strict Euro 7 emission targets and mandates advanced safety systems (ADAS) globally."
  },
  industry_cards: [
    {
      id: "ev-powertrain",
      db_industry: "Electric Vehicles & Powertrain",
      name: "EV & Powertrain",
      eyebrow: "Margin Pressure & Hybrid Bridge",
      top_trend: "Tough competition and commodity costs squeeze margins, forcing OEMs to lean on hybrids as a profitability bridge.",
      readout: "Q2 2026 earnings show stabilization in EV volume decline but intense pricing wars (especially in China). Companies like Ford see success through operational discipline, while pure-play EV makers focus on cost rationalization.",
      monitored_count: 8,
      core_count: 6,
      context_count: 2,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=ev-powertrain"
    },
    {
      id: "sdv-ai",
      db_industry: "Software-Defined Vehicles & AI",
      name: "SDV & AI Technologies",
      eyebrow: "Cloud-to-Edge Transformation",
      top_trend: "Aggressive pivot towards AI integration and OTA capabilities across vehicle architectures.",
      readout: "McKinsey and BCG report a shift in consumer priority towards tech capability. AI is expected to drive 30% efficiency gains by 2030, with automakers investing heavily in computing architectures.",
      monitored_count: 7,
      core_count: 4,
      context_count: 3,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 2,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=sdv-ai"
    },
    {
      id: "regulatory-safety",
      db_industry: "Regulatory Compliance & Safety",
      name: "Compliance & Safety",
      eyebrow: "Euro 7 & Standardized ADAS",
      top_trend: "Harmonization of global standards pushing for lifetime emission monitoring and mandatory ADAS.",
      readout: "Global regulations in 2026 mandate On-Board Monitoring (OBM), Environmental Vehicle Passports, and stricter Euro 7 pollutant limits. Safety regulations increasingly require ADAS and driver fatigue monitoring.",
      monitored_count: 5,
      core_count: 3,
      context_count: 2,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 3,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=regulatory-safety"
    }
  ],
  industry_pages: {
    "ev-powertrain": {
      id: "ev-powertrain",
      db_industry: "Electric Vehicles & Powertrain",
      name: "EV & Powertrain",
      eyebrow: "Margin Pressure & Hybrid Bridge",
      latest_brief: { brief_id: 101, title: "Q2 EV Margins & Strategy Pivot", brief_date: "2026-08-15", qc_score: 4.8 },
      summary: { 
        top_trend: "Tough competition and commodity costs squeeze margins, forcing OEMs to lean on hybrids as a profitability bridge.",
        readout: "Q2 2026 earnings show stabilization in EV volume decline but intense pricing wars (especially in China). Companies like Ford see success through operational discipline, while pure-play EV makers focus on cost rationalization."
      },
      counts: { industry: 8, monitored_count: 8, core_count: 6, context_count: 2 },
      presentation_mode: "canonical_brief"
    },
    "sdv-ai": {
      id: "sdv-ai",
      db_industry: "Software-Defined Vehicles & AI",
      name: "SDV & AI Technologies",
      eyebrow: "Cloud-to-Edge Transformation",
      latest_brief: { brief_id: 102, title: "AI Integration & SDV Development", brief_date: "2026-08-12", qc_score: 4.9 },
      summary: { 
        top_trend: "Aggressive pivot towards AI integration and OTA capabilities across vehicle architectures.",
        readout: "McKinsey and BCG report a shift in consumer priority towards tech capability. AI is expected to drive 30% efficiency gains by 2030, with automakers investing heavily in computing architectures."
      },
      counts: { industry: 7, monitored_count: 7, core_count: 4, context_count: 3 },
      presentation_mode: "canonical_brief"
    },
    "regulatory-safety": {
      id: "regulatory-safety",
      db_industry: "Regulatory Compliance & Safety",
      name: "Compliance & Safety",
      eyebrow: "Euro 7 & Standardized ADAS",
      latest_brief: { brief_id: 103, title: "Global Emission & Safety Mandates 2026", brief_date: "2026-08-10", qc_score: 4.7 },
      summary: { 
        top_trend: "Harmonization of global standards pushing for lifetime emission monitoring and mandatory ADAS.",
        readout: "Global regulations in 2026 mandate On-Board Monitoring (OBM), Environmental Vehicle Passports, and stricter Euro 7 pollutant limits. Safety regulations increasingly require ADAS and driver fatigue monitoring."
      },
      counts: { industry: 5, monitored_count: 5, core_count: 3, context_count: 2 },
      presentation_mode: "canonical_brief"
    }
  },
  pilot_industries: {
    "ev-powertrain": {
      trends: [
        {
          trend_id: "t1",
          display_order: 1,
          name: "The Hybrid Profitability Bridge",
          tracked_since: "2025-09",
          monthly_change: "IMPROVING",
          momentum: "Accelerating",
          breadth: "Broad",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Automakers are increasingly leaning into hybrid vehicles as a profitability bridge amid pure-play EV margin squeezes. Hybrid sales have outperformed the broader auto market due to cost-conscious consumers seeking fuel efficiency.",
          what_changed: "In Q2 2026, companies reported stabilizing EV demand but significant margin impacts from commodity pricing, accelerating the strategic shift to hybrids.",
          why_it_matters: "Maintains volume and operational cash flow while bridging the gap until EVs achieve better cost parity.",
          confidence: "High",
          conversation_hypothesis: "Advise OEMs to optimize their product mix to include strong hybrid options while strictly controlling pure-EV capital expenditure."
        },
        {
          trend_id: "t2",
          display_order: 2,
          name: "Margin Squeeze & Scale Discipline",
          tracked_since: "2026-01",
          monthly_change: "WORSENING",
          momentum: "Persistent",
          breadth: "Global",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Many automakers faced severe headwinds from rising commodity prices (steel, aluminum, electronics) and geopolitical tensions, squeezing margins. Tesla reported a decline in operating margin to 1.4% in Q2 due to heavy CAPEX.",
          what_changed: "The narrative has fundamentally shifted from 'growth at all costs' to 'scale discipline' and cost rationalization.",
          why_it_matters: "Profitability is taking precedence over volume. Manufacturers must streamline manufacturing and drive down battery costs per kWh.",
          confidence: "High",
          conversation_hypothesis: "Discuss supply chain resilience, multilocal sourcing, and vertical integration strategies with clients."
        }
      ],
      archetypes: [],
      gsi_hypotheses: [],
      watch_items: ["Commodity cost fluctuations", "Chinese market pricing wars", "Battery cost per kWh trends"],
      evidence: { "t1": ["Cox Auto Q2 2026 Insights", "BNEF Hybrid Report"], "t2": ["Tesla Q2 Earnings", "Tata Motors Q2 Outlook"] }
    }
  },
  companies: [
    {
      company_id: 1,
      name: "Tesla, Inc.",
      ticker: "TSLA",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 201,
        title: "Q2 2026 Earnings: CAPEX vs Margin",
        brief_date: "2026-07-25",
        qc_score: 4.8
      },
      aliases: ["Tesla Motors"]
    },
    {
      company_id: 2,
      name: "Ford Motor Company",
      ticker: "F",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 202,
        title: "Q2 2026 Positive Earnings Surprise",
        brief_date: "2026-07-27",
        qc_score: 4.5
      },
      aliases: ["Ford"]
    },
    {
      company_id: 3,
      name: "Tata Motors Limited",
      ticker: "TTM",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "context",
      latest_brief: {
        brief_id: 203,
        title: "Margin Warnings amid Commodity Squeeze",
        brief_date: "2026-08-01",
        qc_score: 4.2
      },
      aliases: ["Tata"]
    },
    {
      company_id: 4,
      name: "Mahindra & Mahindra",
      ticker: "M&M",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "context",
      latest_brief: {
        brief_id: 204,
        title: "Mitigating Inflation via Pricing Actions",
        brief_date: "2026-08-05",
        qc_score: 4.3
      },
      aliases: ["Mahindra"]
    },
    {
      company_id: 5,
      name: "ECARX Holdings Inc.",
      ticker: "ECX",
      industry: "Software-Defined Vehicles & AI",
      industry_role: "core",
      latest_brief: {
        brief_id: 205,
        title: "Strong Margin Improvement to 19.8%",
        brief_date: "2026-08-10",
        qc_score: 4.6
      },
      aliases: ["ECARX"]
    },
    {
      company_id: 6,
      name: "Hyundai Motor Company",
      ticker: "HYMTF",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 206,
        title: "EV Strategy Updates",
        brief_date: "2026-08-01",
        qc_score: 4.5
      },
      aliases: ["Hyundai"]
    },
    {
      company_id: 7,
      name: "Kia Corporation",
      ticker: "KIMTF",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 207,
        title: "Sales Growth and Hybrid Expansion",
        brief_date: "2026-08-02",
        qc_score: 4.4
      },
      aliases: ["Kia"]
    },
    {
      company_id: 8,
      name: "Nissan Motor Co.",
      ticker: "NSANY",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 208,
        title: "Solid State Battery Push",
        brief_date: "2026-08-03",
        qc_score: 4.3
      },
      aliases: ["Nissan"]
    },
    {
      company_id: 9,
      name: "Honda Motor Co.",
      ticker: "HMC",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 209,
        title: "EV Lineup Expansion",
        brief_date: "2026-08-04",
        qc_score: 4.5
      },
      aliases: ["Honda"]
    },
    {
      company_id: 10,
      name: "Renault Group",
      ticker: "RNLSY",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 210,
        title: "European Market Share Adjustments",
        brief_date: "2026-08-05",
        qc_score: 4.2
      },
      aliases: ["Renault"]
    },
    {
      company_id: 11,
      name: "SAIC Motor",
      ticker: "600104",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 211,
        title: "China EV Sales Dominance",
        brief_date: "2026-08-06",
        qc_score: 4.6
      },
      aliases: ["SAIC"]
    },
    {
      company_id: 12,
      name: "Geely Automobile Holdings",
      ticker: "GELYY",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 212,
        title: "Global Brand Integrations",
        brief_date: "2026-08-07",
        qc_score: 4.7
      },
      aliases: ["Geely"]
    },
    {
      company_id: 13,
      name: "Porsche AG",
      ticker: "POAHY",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 213,
        title: "Luxury EV Margins Hold Steady",
        brief_date: "2026-08-08",
        qc_score: 4.8
      },
      aliases: ["Porsche"]
    },
    {
      company_id: 14,
      name: "Ferrari N.V.",
      ticker: "RACE",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 214,
        title: "Exclusivity and Electrification",
        brief_date: "2026-08-09",
        qc_score: 4.9
      },
      aliases: ["Ferrari"]
    },
    {
      company_id: 15,
      name: "Lucid Group, Inc.",
      ticker: "LCID",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "context",
      latest_brief: {
        brief_id: 215,
        title: "Capital Raising and Production Ramp",
        brief_date: "2026-08-10",
        qc_score: 4.1
      },
      aliases: ["Lucid Motors", "Lucid"]
    },
    {
      company_id: 16,
      name: "NIO Inc.",
      ticker: "NIO",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 216,
        title: "Battery Swapping Network Expansion",
        brief_date: "2026-08-11",
        qc_score: 4.5
      },
      aliases: ["NIO"]
    },
    {
      company_id: 17,
      name: "Ola Electric",
      ticker: "OLA",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "context",
      latest_brief: {
        brief_id: 217,
        title: "Two-Wheeler EV Market Penetration",
        brief_date: "2026-08-12",
        qc_score: 4.4
      },
      aliases: ["Ola"]
    },
    {
      company_id: 18,
      name: "Valeo SE",
      ticker: "VLEEY",
      industry: "Regulatory Compliance & Safety",
      industry_role: "core",
      latest_brief: {
        brief_id: 218,
        title: "ADAS Technology Adoption",
        brief_date: "2026-08-13",
        qc_score: 4.6
      },
      aliases: ["Valeo"]
    },
    {
      company_id: 19,
      name: "Continental AG",
      ticker: "CTTAY",
      industry: "Regulatory Compliance & Safety",
      industry_role: "core",
      latest_brief: {
        brief_id: 219,
        title: "Safety Systems and Sensor Innovations",
        brief_date: "2026-08-14",
        qc_score: 4.5
      },
      aliases: ["Continental"]
    },
    {
      company_id: 20,
      name: "ZF Friedrichshafen AG",
      ticker: "ZF",
      industry: "Regulatory Compliance & Safety",
      industry_role: "core",
      latest_brief: {
        brief_id: 220,
        title: "Next-Gen Braking Systems",
        brief_date: "2026-08-15",
        qc_score: 4.4
      },
      aliases: ["ZF"]
    },
    {
      company_id: 21,
      name: "Bosch Automotive",
      ticker: "BOSCH",
      industry: "Software-Defined Vehicles & AI",
      industry_role: "core",
      latest_brief: {
        brief_id: 221,
        title: "AI and Vehicle Compute Platforms",
        brief_date: "2026-08-15",
        qc_score: 4.8
      },
      aliases: ["Bosch"]
    },
    {
      company_id: 22,
      name: "Delphi Technologies",
      ticker: "DLPH",
      industry: "Software-Defined Vehicles & AI",
      industry_role: "context",
      latest_brief: {
        brief_id: 222,
        title: "Propulsion Systems Evolution",
        brief_date: "2026-08-15",
        qc_score: 4.2
      },
      aliases: ["Delphi"]
    },
    {
      company_id: 23,
      name: "Modular Intelligence",
      ticker: "MI",
      industry: "Software-Defined Vehicles & AI",
      industry_role: "context",
      latest_brief: {
        brief_id: 223,
        title: "Modular AI Integration for SDVs",
        brief_date: "2026-08-15",
        qc_score: 4.5
      },
      aliases: ["Modular"]
    },
    {
      company_id: 24,
      name: "Toyota Motor Corporation",
      ticker: "TM",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 224,
        title: "Hybrid Strategy Validation",
        brief_date: "2026-08-15",
        qc_score: 4.8
      },
      aliases: ["Toyota"]
    },
    {
      company_id: 25,
      name: "Volkswagen AG",
      ticker: "VWAGY",
      industry: "Electric Vehicles & Powertrain",
      industry_role: "core",
      latest_brief: {
        brief_id: 225,
        title: "Software Reorganization and EV Platform",
        brief_date: "2026-08-15",
        qc_score: 4.6
      },
      aliases: ["Volkswagen", "VW"]
    }
  ]
};
