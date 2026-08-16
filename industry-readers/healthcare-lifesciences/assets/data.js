window.EU_DATA = {
  meta: {
    product_name: "Healthcare & Life Sciences Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 26,
    brief_count: 15,
    editorial_readout: "In August 2026, the healthcare and life sciences sectors are navigating intense cost pressures while driving heavy investment in innovation and digital transformation. Major consulting firms note an AI-first transformation across the value chain, coupled with a biopharma business model reset in response to pricing reforms. Regulatory shifts, such as the FDA's new QMSR aligning with ISO 13485:2016, and an increasingly flexible 'totality of evidence' approach, are fundamentally changing the compliance and approval landscape. Meanwhile, Q2 earnings from leaders like Johnson & Johnson, Pfizer, Novartis, and Roche demonstrate robust top-line growth and a strategic pivot toward next-generation oncology and neurology assets."
  },
  industry_cards: [
    {
      id: "biopharma-therapeutics",
      db_industry: "Biopharma & Therapeutics",
      name: "Biopharma & Therapeutics",
      eyebrow: "Business Model Reset & AI Integration",
      top_trend: "A 'business model reset' driven by pricing pressures (e.g., MFN) and AI integration.",
      readout: "Companies are doubling down on cost excellence, R&D acceleration via AI, and robust M&A activity focused on marketed assets. J&J and Pfizer both posted strong Q2 2026 earnings, raising their financial outlooks.",
      monitored_count: 8,
      core_count: 8,
      context_count: 2,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=biopharma-therapeutics"
    },
    {
      id: "medtech-devices",
      db_industry: "MedTech & Devices",
      name: "MedTech & Devices",
      eyebrow: "QMSR Compliance & Digital Health",
      top_trend: "Transition to ISO 13485:2016 aligned QMSR and the rise of digital health devices.",
      readout: "Device manufacturers are grappling with the February 2026 FDA QMSR rollout. Simultaneously, 53% of med-tech execs identify AI-enabled platforms as a primary growth driver, accelerating the push toward connected devices.",
      monitored_count: 5,
      core_count: 5,
      context_count: 1,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=medtech-devices"
    },
    {
      id: "providers-payers",
      db_industry: "Providers & Payers",
      name: "Providers & Payers",
      eyebrow: "Capacity Crunch & Retrenchment",
      top_trend: "Metropolitan hospitals leaning into tech transformation, while payers focus on risk retrenchment.",
      readout: "Rising consumer expectations and a clinical capacity crunch are forcing health systems to invest in agentic AI to bridge workforce gaps. Payers are adjusting to policy shifts related to Medicaid and Medicare.",
      monitored_count: 4,
      core_count: 4,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=providers-payers"
    }
  ],
  industry_pages: {
     "biopharma-therapeutics": {
        id: "biopharma-therapeutics",
        db_industry: "Biopharma & Therapeutics",
        name: "Biopharma & Therapeutics",
        eyebrow: "Business Model Reset & AI Integration",
        latest_brief: { brief_id: 1, title: "Q2 2026 Earnings & Regulatory Updates", brief_date: "2026-08-16", qc_score: 4.8 },
        summary: { 
            top_trend: "A 'business model reset' driven by pricing pressures (e.g., MFN) and AI integration.", 
            readout: "Companies are doubling down on cost excellence, R&D acceleration via AI, and robust M&A activity focused on marketed assets. J&J and Pfizer both posted strong Q2 2026 earnings, raising their financial outlooks." 
        },
        counts: { industry: 8, monitored_count: 8, core_count: 8, context_count: 2 },
        presentation_mode: "canonical_brief"
     },
     "medtech-devices": {
        id: "medtech-devices",
        db_industry: "MedTech & Devices",
        name: "MedTech & Devices",
        eyebrow: "QMSR Compliance & Digital Health",
        latest_brief: { brief_id: 2, title: "FDA QMSR Implementation Status", brief_date: "2026-08-16", qc_score: 4.6 },
        summary: { 
            top_trend: "Transition to ISO 13485:2016 aligned QMSR and the rise of digital health devices.", 
            readout: "Device manufacturers are grappling with the February 2026 FDA QMSR rollout. Simultaneously, 53% of med-tech execs identify AI-enabled platforms as a primary growth driver, accelerating the push toward connected devices." 
        },
        counts: { industry: 5, monitored_count: 5, core_count: 5, context_count: 1 },
        presentation_mode: "canonical_brief"
     },
     "providers-payers": {
        id: "providers-payers",
        db_industry: "Providers & Payers",
        name: "Providers & Payers",
        eyebrow: "Capacity Crunch & Retrenchment",
        latest_brief: { brief_id: 3, title: "Payer Risk Retrenchment Strategies", brief_date: "2026-08-16", qc_score: 4.5 },
        summary: { 
            top_trend: "Metropolitan hospitals leaning into tech transformation, while payers focus on risk retrenchment.", 
            readout: "Rising consumer expectations and a clinical capacity crunch are forcing health systems to invest in agentic AI to bridge workforce gaps. Payers are adjusting to policy shifts related to Medicaid and Medicare." 
        },
        counts: { industry: 4, monitored_count: 4, core_count: 4, context_count: 0 },
        presentation_mode: "canonical_brief"
     }
  },
  pilot_industries: {
      "biopharma-therapeutics": {
          trends: [
             {
                trend_id: "t1",
                display_order: 1,
                name: "The AI-First Transformation",
                tracked_since: "2026-01",
                monthly_change: "IMPROVING",
                momentum: "Accelerating",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "Agentic AI is moving from experimental pilots to operational scale across the Biopharma value chain, accelerating drug discovery and streamlining clinical trials.",
                what_changed: "AI integration has moved past proof-of-concept into structural workforce augmentation and R&D acceleration, heavily cited in Q2 earnings.",
                why_it_matters: "Biopharma firms must leverage AI to offset rising clinical costs and pipeline crowding. Fast-movers will achieve a material cost advantage.",
                confidence: "High",
                conversation_hypothesis: "Engage clients on how they are moving AI from pilots to enterprise-scale deployment in R&D and manufacturing."
             },
             {
                trend_id: "t2",
                display_order: 2,
                name: "Reshaping Biopharma Business Models",
                tracked_since: "2025-06",
                monthly_change: "STABLE",
                momentum: "Persistent",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "Pricing reforms (e.g., MFN) are driving a business model reset. Companies are prioritizing cost excellence and pivoting their portfolios to specialized assets.",
                what_changed: "Q2 2026 earnings show companies like Pfizer and J&J successfully raising guidance by aggressively managing costs and prioritizing high-margin oncology/neurology pipelines.",
                why_it_matters: "Margin pressures are a permanent fixture. Companies need structural changes to their commercialization strategies.",
                confidence: "High",
                conversation_hypothesis: "Discuss strategies for portfolio rationalization and commercial optimization in a price-constrained environment."
             },
             {
                trend_id: "t3",
                display_order: 3,
                name: "FDA Regulatory Modernization & Totality of Evidence",
                tracked_since: "2026-02",
                monthly_change: "IMPROVING",
                momentum: "Emerging",
                breadth: "Moderate",
                evidence_strength: "REGULATORY_ANNOUNCEMENTS",
                current_readout: "The FDA is increasingly open to a 'totality of evidence' approach, accepting confirmatory evidence and bespoke pathways alongside traditional clinical trials.",
                what_changed: "Recent FDA guidance updates indicate increased flexibility for novel clinical endpoints and remote data acquisition using digital health tech.",
                why_it_matters: "This allows for faster, potentially cheaper trial designs, but requires proactive, sophisticated regulatory strategy embedded early in development.",
                confidence: "Medium",
                conversation_hypothesis: "How are clients adapting their regulatory submissions to leverage real-world evidence and the FDA's 'totality of evidence' framework?"
             }
          ],
          archetypes: [],
          gsi_hypotheses: [],
          watch_items: ["Most Favored Nation (MFN) Pricing Impacts", "FDA integration of Digital Health Technologies (DHTs) in trials"],
          evidence: { 
            "t1": ["McKinsey Healthcare Trends 2026", "BCG Biopharma Report 2026"],
            "t2": ["Pfizer Q2 2026 Earnings", "J&J Q2 2026 Earnings"],
            "t3": ["FDA Digital Health Guidance 2026"]
          }
      }
  },
  companies: [
      {
          company_id: 1,
          name: "Johnson & Johnson",
          ticker: "JNJ",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 101, title: "Q2 2026 Earnings: Strong Sales & Raised Outlook", brief_date: "2026-07-15", qc_score: 4.8 },
          aliases: ["J&J"]
      },
      {
          company_id: 2,
          name: "Novartis",
          ticker: "NVS",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 102, title: "Q2 2026 Earnings: Growth & Reaffirmed Guidance", brief_date: "2026-07-21", qc_score: 4.6 },
          aliases: ["Novartis AG"]
      },
      {
          company_id: 3,
          name: "Roche",
          ticker: "ROG",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 103, title: "Half-Year 2026 Results: Oncology & Neurology Pipeline Advances", brief_date: "2026-07-23", qc_score: 4.7 },
          aliases: ["Roche Holding AG"]
      },
      {
          company_id: 4,
          name: "Pfizer",
          ticker: "PFE",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 104, title: "Q2 2026 Earnings: Raised Revenue Guidance", brief_date: "2026-08-04", qc_score: 4.5 },
          aliases: ["Pfizer Inc."]
      },
      {
          company_id: 5,
          name: "Bristol-Myers Squibb",
          ticker: "BMY",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 105, title: "Q2 2026 Earnings Updates", brief_date: "2026-07-26", qc_score: 4.5 },
          aliases: ["BMS"]
      },
      {
          company_id: 6,
          name: "Gilead Sciences",
          ticker: "GILD",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 106, title: "Q2 2026 Pipeline Overview", brief_date: "2026-08-05", qc_score: 4.6 },
          aliases: ["Gilead"]
      },
      {
          company_id: 7,
          name: "Regeneron",
          ticker: "REGN",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 107, title: "Q2 2026 Strong Performance", brief_date: "2026-08-01", qc_score: 4.7 },
          aliases: ["Regeneron Pharmaceuticals"]
      },
      {
          company_id: 8,
          name: "Vertex Pharmaceuticals",
          ticker: "VRTX",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 108, title: "Q2 2026 Results", brief_date: "2026-07-30", qc_score: 4.6 },
          aliases: ["Vertex"]
      },
      {
          company_id: 9,
          name: "Moderna",
          ticker: "MRNA",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 109, title: "Q2 2026 Oncology Vaccine Updates", brief_date: "2026-08-02", qc_score: 4.5 },
          aliases: []
      },
      {
          company_id: 10,
          name: "BioNTech",
          ticker: "BNTX",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 110, title: "Q2 2026 Earnings & R&D Strategy", brief_date: "2026-08-06", qc_score: 4.4 },
          aliases: []
      },
      {
          company_id: 11,
          name: "Sanofi",
          ticker: "SNY",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 111, title: "Q2 2026 European Market Updates", brief_date: "2026-07-24", qc_score: 4.6 },
          aliases: []
      },
      {
          company_id: 12,
          name: "AstraZeneca",
          ticker: "AZN",
          industry: "Biopharma & Therapeutics",
          industry_role: "core",
          latest_brief: { brief_id: 112, title: "Q2 2026 Oncology Portfolio Results", brief_date: "2026-07-28", qc_score: 4.8 },
          aliases: ["Astra"]
      },
      {
          company_id: 13,
          name: "Illumina",
          ticker: "ILMN",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 113, title: "Q2 2026 Genomic Sequencing Innovations", brief_date: "2026-08-10", qc_score: 4.5 },
          aliases: []
      },
      {
          company_id: 14,
          name: "Thermo Fisher Scientific",
          ticker: "TMO",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 114, title: "Q2 2026 Earnings Call", brief_date: "2026-07-25", qc_score: 4.7 },
          aliases: ["Thermo Fisher"]
      },
      {
          company_id: 15,
          name: "Danaher",
          ticker: "DHR",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 115, title: "Q2 2026 Biotech Instruments Demand", brief_date: "2026-07-22", qc_score: 4.6 },
          aliases: ["Danaher Corp"]
      },
      {
          company_id: 16,
          name: "Abbott Laboratories",
          ticker: "ABT",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 116, title: "Q2 2026 Diagnostics Growth", brief_date: "2026-07-18", qc_score: 4.6 },
          aliases: ["Abbott"]
      },
      {
          company_id: 17,
          name: "Becton Dickinson",
          ticker: "BDX",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 117, title: "Q3 2026 Results and Guidance", brief_date: "2026-08-01", qc_score: 4.5 },
          aliases: ["BD"]
      },
      {
          company_id: 18,
          name: "Stryker",
          ticker: "SYK",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 118, title: "Q2 2026 Orthopaedics Momentum", brief_date: "2026-07-29", qc_score: 4.7 },
          aliases: ["Stryker Corp"]
      },
      {
          company_id: 19,
          name: "Boston Scientific",
          ticker: "BSX",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 119, title: "Q2 2026 Cardiovascular Updates", brief_date: "2026-07-27", qc_score: 4.8 },
          aliases: []
      },
      {
          company_id: 20,
          name: "Edwards Lifesciences",
          ticker: "EW",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 120, title: "Q2 2026 Structural Heart Progress", brief_date: "2026-07-25", qc_score: 4.6 },
          aliases: ["Edwards"]
      },
      {
          company_id: 21,
          name: "Zimmer Biomet",
          ticker: "ZBH",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 121, title: "Q2 2026 Robotic Surgery Adoption", brief_date: "2026-08-05", qc_score: 4.5 },
          aliases: []
      },
      {
          company_id: 22,
          name: "Hologic",
          ticker: "HOLX",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 122, title: "Q3 2026 Women's Health Diagnostics", brief_date: "2026-08-02", qc_score: 4.6 },
          aliases: []
      },
      {
          company_id: 23,
          name: "Insulet",
          ticker: "PODD",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 123, title: "Q2 2026 Omnipod Adoption", brief_date: "2026-08-08", qc_score: 4.7 },
          aliases: ["Insulet Corp"]
      },
      {
          company_id: 24,
          name: "Align Technology",
          ticker: "ALGN",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 124, title: "Q2 2026 Invisalign Revenue", brief_date: "2026-07-23", qc_score: 4.5 },
          aliases: ["Align"]
      },
      {
          company_id: 25,
          name: "Medtronic",
          ticker: "MDT",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 125, title: "Q1 FY27 Results", brief_date: "2026-08-15", qc_score: 4.7 },
          aliases: []
      },
      {
          company_id: 26,
          name: "Intuitive Surgical",
          ticker: "ISRG",
          industry: "MedTech & Devices",
          industry_role: "core",
          latest_brief: { brief_id: 126, title: "Q2 2026 Da Vinci Procedures", brief_date: "2026-07-17", qc_score: 4.8 },
          aliases: ["Intuitive"]
      }
  ]
};
