window.EU_DATA = {
  meta: {
    product_name: "Aerospace & Defense Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 31,
    brief_count: 31,
    editorial_readout: "The Aerospace & Defense (A&D) sector in Q2 2026 is defined by a critical tension: historic levels of demand versus persistent, systemic constraints in production and supply chain capacity. Industry leaders like GE Aerospace reported robust top- and bottom-line growth (adjusted revenue up 24%, EPS up 22%), prompting full-year guidance raises. However, the ability to translate record backlogs into cash flow is hindered by workforce pressures and supply chain bottlenecks, which Bain & Company notes is the leading obstacle for nearly 90% of defense programs.\n\nStrategically, the industry is pivoting toward an 'AI-First' operational model and modular defense tech stacks. Capital expenditure is flowing into capability, capacity, and execution certainty—particularly in agentic AI, autonomy, and munitions. Furthermore, new regulations such as the FAA's drone operation restrictions near critical infrastructure and the DoD's Executive Order 14415 on securing domestic supply chains underscore a rigorous environment focusing on both security and rapid modernization."
  },
  industry_cards: [
    {
      id: "defense-technology",
      db_industry: "Defense Technology",
      name: "Defense Technology",
      eyebrow: "AI & Modular Systems",
      top_trend: "Shift to 'AI-first' operations and modular, multidomain defense tech stacks rather than legacy integrated systems (McKinsey/BCG).",
      readout: "Q2 2026 earnings highlight strong defense spending but with a shift toward speed and agility. DoD's FY2026 NDAA reforms aim to streamline procurement for emerging tech, while executive orders mandate stricter domestic supply chain mapping.",
      monitored_count: 6,
      core_count: 6,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=defense-technology"
    },
    {
      id: "commercial-aerospace",
      db_industry: "Commercial Aerospace",
      name: "Commercial Aerospace",
      eyebrow: "Scaling Under Constraint",
      top_trend: "Record order books face persistent supply chain bottlenecks and labor shortages, making output scaling the primary competitive advantage (Bain).",
      readout: "Companies like GE Aerospace and ATI are raising guidance amid surging demand, but operational resilience is tested by constrained production capacity and FAA scrutiny on certification and airworthiness directives.",
      monitored_count: 5,
      core_count: 5,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=commercial-aerospace"
    },
    {
      id: "nextgen-autonomous",
      db_industry: "Next-Gen & Autonomous Systems",
      name: "Next-Gen & Autonomous Systems",
      eyebrow: "Agentic AI & Drone Expansion",
      top_trend: "Rapid evolution of unmanned systems and 'end-to-end physical AI' platforms, heavily supported by M&A and venture capital.",
      readout: "Firms like Archer Aviation are expanding through acquisitions (e.g., Wisk Aero) to build physical AI platforms. Concurrently, the FAA is establishing strict Unmanned Aircraft Flight Restrictions near critical infrastructure to balance growth with security.",
      monitored_count: 4,
      core_count: 4,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=nextgen-autonomous"
    }
  ],
  industry_pages: {
     "defense-technology": {
        id: "defense-technology",
        db_industry: "Defense Technology",
        name: "Defense Technology",
        eyebrow: "AI & Modular Systems",
        latest_brief: { brief_id: 1, title: "Q2 2026 Defense Tech Update", brief_date: "2026-08-16", qc_score: 4.8 },
        summary: { top_trend: "Shift to 'AI-first' operations and modular, multidomain defense tech stacks rather than legacy integrated systems (McKinsey/BCG).", readout: "Q2 2026 earnings highlight strong defense spending but with a shift toward speed and agility. DoD's FY2026 NDAA reforms aim to streamline procurement for emerging tech, while executive orders mandate stricter domestic supply chain mapping." },
        counts: { industry: 6, monitored_count: 6, core_count: 6, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "commercial-aerospace": {
        id: "commercial-aerospace",
        db_industry: "Commercial Aerospace",
        name: "Commercial Aerospace",
        eyebrow: "Scaling Under Constraint",
        latest_brief: { brief_id: 2, title: "Q2 2026 Commercial Aero Update", brief_date: "2026-08-16", qc_score: 4.7 },
        summary: { top_trend: "Record order books face persistent supply chain bottlenecks and labor shortages, making output scaling the primary competitive advantage (Bain).", readout: "Companies like GE Aerospace and ATI are raising guidance amid surging demand, but operational resilience is tested by constrained production capacity and FAA scrutiny on certification and airworthiness directives." },
        counts: { industry: 5, monitored_count: 5, core_count: 5, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "nextgen-autonomous": {
        id: "nextgen-autonomous",
        db_industry: "Next-Gen & Autonomous Systems",
        name: "Next-Gen & Autonomous Systems",
        eyebrow: "Agentic AI & Drone Expansion",
        latest_brief: { brief_id: 3, title: "Q2 2026 Autonomy Update", brief_date: "2026-08-16", qc_score: 4.9 },
        summary: { top_trend: "Rapid evolution of unmanned systems and 'end-to-end physical AI' platforms, heavily supported by M&A and venture capital.", readout: "Firms like Archer Aviation are expanding through acquisitions (e.g., Wisk Aero) to build physical AI platforms. Concurrently, the FAA is establishing strict Unmanned Aircraft Flight Restrictions near critical infrastructure to balance growth with security." },
        counts: { industry: 4, monitored_count: 4, core_count: 4, context_count: 0 },
        presentation_mode: "canonical_brief"
     }
  },
  pilot_industries: {
      "defense-technology": {
          trends: [
             {
                trend_id: "t1",
                display_order: 1,
                name: "AI-First Defense Operations",
                tracked_since: "2026-01",
                monthly_change: "ACCELERATING",
                momentum: "High",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "AI has moved from proof-of-concept to mission-scale deployment. BCG notes that success is driven by C-suite integration of AI into manufacturing, while DoD's 'GenAI.mil' accelerates deployment in the field.",
                what_changed: "Significant shift from isolated AI pilots to enterprise-wide 'trusted deployment' for autonomous systems.",
                why_it_matters: "Determines which contractors win next-gen DoD contracts emphasizing agility and software-centric capabilities.",
                confidence: "High",
                conversation_hypothesis: "Engage clients on how they are integrating AI across their supply chain and manufacturing floors to meet DoD's rapid acquisition pathways."
             },
             {
                trend_id: "t2",
                display_order: 2,
                name: "Modular Defense Stacks & Agility",
                tracked_since: "2025-08",
                monthly_change: "STABLE",
                momentum: "Persistent",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "Bain highlights that modern operational needs evolve in months, whereas legacy programs take 12 years. McKinsey emphasizes a pivot toward modular, multidomain tech stacks over vertically integrated behemoths.",
                what_changed: "DoD FY2026 NDAA acquisition reforms actively favor modularity and smaller software-centric firms.",
                why_it_matters: "Incumbents face valuation pressure and must adapt via M&A or internal restructuring to compete with venture-backed defense tech startups.",
                confidence: "High",
                conversation_hypothesis: "Challenge prime contractors on their speed-to-deployment and openness to modular, interoperable architectures."
             },
             {
                trend_id: "t3",
                display_order: 3,
                name: "Domestic Supply Chain Mandates",
                tracked_since: "2026-07",
                monthly_change: "WORSENING",
                momentum: "High",
                breadth: "Medium",
                evidence_strength: "STRONG_REGULATORY",
                current_readout: "Executive Order 14415 (July 2026) mandates stricter sourcing waivers for 'covered materials' and requires comprehensive supply chain mapping by Jan 2027.",
                what_changed: "The regulatory bar for supply chain transparency has been abruptly raised, creating near-term compliance hurdles.",
                why_it_matters: "Firms failing to illuminate their sub-tier suppliers risk losing DoD eligibility and face severe operational bottlenecks.",
                confidence: "Very High",
                conversation_hypothesis: "Assess client readiness for Jan 2027 sourcing waivers and their capabilities in multi-tier supply chain mapping."
             }
          ],
          archetypes: [],
          gsi_hypotheses: [],
          watch_items: ["Jan 2027 Sourcing Waiver Deadline", "GenAI.mil integration success", "Impact of VC capital on traditional primes"],
          evidence: { "t1": ["BCG 2026 Defense Tech Report", "DoD GenAI.mil announcement"], "t2": ["Bain 2026 A&D Insights", "McKinsey Modular Defense Stacks Report"], "t3": ["Executive Order 14415"] }
      }
  },
  companies: [
      {
          company_id: 1,
          name: "GE Aerospace",
          ticker: "GE",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 1, title: "Q2 2026 Earnings: Strong Demand & Raised Guidance", brief_date: "2026-07-28", qc_score: 4.8 },
          aliases: ["GE"]
      },
      {
          company_id: 2,
          name: "Applied Aerospace & Defense",
          ticker: "AADX",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 2, title: "Q2 2026: Record Backlog but Free Cash Flow Scrutiny", brief_date: "2026-08-10", qc_score: 4.2 },
          aliases: ["AADX"]
      },
      {
          company_id: 3,
          name: "ATI Inc.",
          ticker: "ATI",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 3, title: "Q2 2026: Exceeds Guidance with 22.6% EBITDA Margin", brief_date: "2026-08-05", qc_score: 4.7 },
          aliases: ["Allegheny Technologies"]
      },
      {
          company_id: 4,
          name: "Archer Aviation",
          ticker: "ACHR",
          industry: "Next-Gen & Autonomous Systems",
          industry_role: "core",
          latest_brief: { brief_id: 4, title: "Q2 2026: End-to-End Physical AI via Wisk Acquisition", brief_date: "2026-08-12", qc_score: 4.6 },
          aliases: ["Archer"]
      },
      {
          company_id: 5,
          name: "Volatus Aerospace",
          ticker: "VOL",
          industry: "Next-Gen & Autonomous Systems",
          industry_role: "core",
          latest_brief: { brief_id: 5, title: "Q2 2026: Transitioning to Sovereign A&D Platform", brief_date: "2026-08-14", qc_score: 4.4 },
          aliases: ["Volatus"]
      },
      {
          company_id: 6,
          name: "Lockheed Martin",
          ticker: "LMT",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 6, title: "Q2 2026 Earnings & Supply Chain Resiliency", brief_date: "2026-07-21", qc_score: 4.5 },
          aliases: ["Lockheed"]
      },
      {
          company_id: 7,
          name: "RTX Corporation",
          ticker: "RTX",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 7, title: "Q2 2026 Earnings Update", brief_date: "2026-07-25", qc_score: 4.6 },
          aliases: ["Raytheon", "Raytheon Technologies"]
      },
      {
          company_id: 8,
          name: "Boeing",
          ticker: "BA",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 8, title: "Q2 2026: Supply Chain & FAA Compliance", brief_date: "2026-07-31", qc_score: 4.1 },
          aliases: ["The Boeing Company"]
      },
      {
          company_id: 9,
          name: "Northrop Grumman",
          ticker: "NOC",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 9, title: "Q2 2026 Space & Aeronautics Update", brief_date: "2026-07-25", qc_score: 4.5 },
          aliases: ["Northrop"]
      },
      {
          company_id: 10,
          name: "General Dynamics",
          ticker: "GD",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 10, title: "Q2 2026 Earnings", brief_date: "2026-07-24", qc_score: 4.6 },
          aliases: ["GD"]
      },
      {
          company_id: 11,
          name: "Airbus SE",
          ticker: "AIR",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 11, title: "Q2 2026: Deliveries & Production Scaling", brief_date: "2026-07-29", qc_score: 4.7 },
          aliases: ["Airbus"]
      },
      {
          company_id: 12,
          name: "L3Harris Technologies",
          ticker: "LHX",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 12, title: "Q2 2026 Defense Stacks Update", brief_date: "2026-07-26", qc_score: 4.5 },
          aliases: ["L3Harris"]
      },
      {
          company_id: 13,
          name: "Safran SA",
          ticker: "SAF",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 13, title: "Q2 2026 Propulsion & AD Compliance", brief_date: "2026-07-28", qc_score: 4.4 },
          aliases: ["Safran"]
      },
      {
          company_id: 14,
          name: "Anduril Industries",
          ticker: "PRIVATE",
          industry: "Next-Gen & Autonomous Systems",
          industry_role: "core",
          latest_brief: { brief_id: 14, title: "Mid-2026 Defense Tech Momentum", brief_date: "2026-08-01", qc_score: 4.8 },
          aliases: ["Anduril"]
      },
      {
          company_id: 15,
          name: "Joby Aviation",
          ticker: "JOBY",
          industry: "Next-Gen & Autonomous Systems",
          industry_role: "core",
          latest_brief: { brief_id: 15, title: "Q2 2026 eVTOL Progress", brief_date: "2026-08-05", qc_score: 4.5 },
          aliases: ["Joby"]
      },
      {
          company_id: 16,
          name: "Spirit AeroSystems",
          ticker: "SPR",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 16, title: "Q2 2026: Supply Chain & Assembly Upgrades", brief_date: "2026-08-04", qc_score: 4.4 },
          aliases: ["Spirit Aero"]
      },
      {
          company_id: 17,
          name: "TransDigm Group",
          ticker: "TDG",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 17, title: "Q2 2026 Earnings: Strong Aftermarket Demand", brief_date: "2026-08-06", qc_score: 4.7 },
          aliases: ["TransDigm"]
      },
      {
          company_id: 18,
          name: "Hexcel Corporation",
          ticker: "HXL",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 18, title: "Q2 2026: Advanced Composites Revenue Growth", brief_date: "2026-07-22", qc_score: 4.6 },
          aliases: ["Hexcel"]
      },
      {
          company_id: 19,
          name: "HEICO Corporation",
          ticker: "HEI",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 19, title: "Q2 2026: Robust Flight Support Operations", brief_date: "2026-08-20", qc_score: 4.8 },
          aliases: ["HEICO"]
      },
      {
          company_id: 20,
          name: "Curtiss-Wright",
          ticker: "CW",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 20, title: "Q2 2026: Defense Electronics Resiliency", brief_date: "2026-08-05", qc_score: 4.5 },
          aliases: ["Curtiss-Wright Corp"]
      },
      {
          company_id: 21,
          name: "Kratos Defense & Security Solutions",
          ticker: "KTOS",
          industry: "Next-Gen & Autonomous Systems",
          industry_role: "core",
          latest_brief: { brief_id: 21, title: "Q2 2026: Unmanned Systems Expansion", brief_date: "2026-08-06", qc_score: 4.6 },
          aliases: ["Kratos Defense", "Kratos"]
      },
      {
          company_id: 22,
          name: "Aerojet Rocketdyne",
          ticker: "AJRD",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 22, title: "Q2 2026: Propulsion Systems & Hypersonics", brief_date: "2026-07-29", qc_score: 4.5 },
          aliases: ["Aerojet", "L3Harris Aerojet"]
      },
      {
          company_id: 23,
          name: "Moog Inc.",
          ticker: "MOG.A",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 23, title: "Q2 2026: Space and Defense Controls", brief_date: "2026-07-24", qc_score: 4.4 },
          aliases: ["Moog"]
      },
      {
          company_id: 24,
          name: "Woodward, Inc.",
          ticker: "WWD",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 24, title: "Q2 2026: Aerospace Segment Growth", brief_date: "2026-07-31", qc_score: 4.6 },
          aliases: ["Woodward"]
      },
      {
          company_id: 25,
          name: "Teledyne Technologies",
          ticker: "TDY",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 25, title: "Q2 2026: Digital Imaging & Defense Electronics", brief_date: "2026-07-22", qc_score: 4.7 },
          aliases: ["Teledyne"]
      },
      {
          company_id: 26,
          name: "BWX Technologies",
          ticker: "BWXT",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 26, title: "Q2 2026: Nuclear Components Outlook", brief_date: "2026-08-04", qc_score: 4.5 },
          aliases: ["BWXT"]
      },
      {
          company_id: 27,
          name: "Mercury Systems",
          ticker: "MRCY",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 27, title: "Q2 2026: Edge Computing for Defense", brief_date: "2026-08-11", qc_score: 4.3 },
          aliases: ["Mercury Systems"]
      },
      {
          company_id: 28,
          name: "Elbit Systems",
          ticker: "ESLT",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 28, title: "Q2 2026: Unmanned Systems & EW", brief_date: "2026-08-18", qc_score: 4.6 },
          aliases: ["Elbit"]
      },
      {
          company_id: 29,
          name: "Leonardo DRS",
          ticker: "DRS",
          industry: "Defense Technology",
          industry_role: "core",
          latest_brief: { brief_id: 29, title: "Q2 2026: Integrated Sensing & Cyber", brief_date: "2026-08-05", qc_score: 4.5 },
          aliases: ["Leonardo", "DRS Technologies"]
      },
      {
          company_id: 30,
          name: "CAE Inc.",
          ticker: "CAE",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 30, title: "Q2 2026: Defense & Civil Training Revenue", brief_date: "2026-08-12", qc_score: 4.4 },
          aliases: ["CAE"]
      },
      {
          company_id: 31,
          name: "Textron Aviation",
          ticker: "TXT",
          industry: "Commercial Aerospace",
          industry_role: "core",
          latest_brief: { brief_id: 31, title: "Q2 2026: Bizjet Demand & Deliveries", brief_date: "2026-07-23", qc_score: 4.6 },
          aliases: ["Textron", "Cessna", "Beechcraft"]
      }
  ]
};
