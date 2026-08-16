window.EU_DATA = {
  meta: {
    product_name: "Insurance Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 25,
    brief_count: 25,
    editorial_readout: "In Q2 2026, the global insurance sector demonstrated strong cyclical performance, with estimated global premiums reaching $7.1 trillion according to Bain & Company. However, leading firms like BCG and McKinsey note this momentum masks structural challenges, notably eroding operating leverage and investor skepticism around durable long-term growth. Life and Health (L&H) are emerging as preferred investor segments over Property and Casualty (P&C) due to more stable risk profiles amid ongoing climate-related property pressures.\n\nSimultaneously, the regulatory landscape has seen massive shifts, especially with the operationalization of the Sabka Bima Sabki Raksha (SBSR) Act and a push toward 100% FDI in key emerging markets like India. A core theme across Q2 earnings calls (from QBE, Travelers, and Aflac) is the necessity of agentic AI integration—not just for cost reduction, but to redefine claims processing, lower the 'cost of risk', and expand coverage accessibility."
  },
  industry_cards: [
    {
      id: "property-casualty",
      db_industry: "Property & Casualty",
      name: "Property & Casualty",
      eyebrow: "Margin Pressure vs Premium Growth",
      top_trend: "Insurers are struggling with climate-driven loss ratios despite premium hikes. BCG highlights a shift in investor preference away from P&C toward more predictable segments.",
      readout: "Q2 2026 earnings from Travelers and QBE indicate solid top-line growth but highlight persistent pressures in property business lines and casualty segments. Operational efficiency through AI is the primary focus to lower the cost of claims.",
      monitored_count: 6,
      core_count: 6,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 2,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=property-casualty"
    },
    {
      id: "life-health",
      db_industry: "Life & Health",
      name: "Life & Health",
      eyebrow: "Investor Preference Shift",
      top_trend: "Rising investor preference for L&H over P&C as noted by BCG's 2026 Value Creators Report, driven by steadier long-term returns and digital modernization.",
      readout: "Aflac's Q2 2026 call highlighted a massive 46.8% increase in net earnings per share. Regulatory shifts removing age limits for health insurance in key markets are acting as significant growth catalysts.",
      monitored_count: 5,
      core_count: 5,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 2,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=life-health"
    },
    {
      id: "reinsurance",
      db_industry: "Reinsurance",
      name: "Reinsurance",
      eyebrow: "Capital Restructuring",
      top_trend: "McKinsey notes that while premium pools are growing, reinsurers must leverage agentic AI to better model systemic risks and improve operating leverage.",
      readout: "Assured Guaranty and Hamilton Insurance Q2 reports reflect steady operating incomes but underscore the need to mitigate property-related pressures and revamp capital allocation strategies.",
      monitored_count: 4,
      core_count: 4,
      context_count: 0,
      readout_as_of: "2026-08-16",
      freshness_status: "CURRENT",
      freshness_age_days: 3,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=reinsurance"
    }
  ],
  industry_pages: {
     "property-casualty": {
        id: "property-casualty",
        db_industry: "Property & Casualty",
        name: "Property & Casualty",
        eyebrow: "Margin Pressure vs Premium Growth",
        latest_brief: { brief_id: 101, title: "QBE and Travelers Q2 2026 Margins", brief_date: "2026-08-14", qc_score: 4.8 },
        summary: { top_trend: "Climate-driven loss ratios despite premium hikes.", readout: "Earnings indicate solid top-line growth but highlight persistent pressures in property business lines." },
        counts: { industry: 6, monitored_count: 6, core_count: 6, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "life-health": {
        id: "life-health",
        db_industry: "Life & Health",
        name: "Life & Health",
        eyebrow: "Investor Preference Shift",
        latest_brief: { brief_id: 102, title: "Aflac Q2 2026 Earnings Surge", brief_date: "2026-08-07", qc_score: 4.9 },
        summary: { top_trend: "Rising investor preference for L&H over P&C.", readout: "Aflac highlighted a massive 46.8% increase in net earnings per share." },
        counts: { industry: 5, monitored_count: 5, core_count: 5, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "reinsurance": {
        id: "reinsurance",
        db_industry: "Reinsurance",
        name: "Reinsurance",
        eyebrow: "Capital Restructuring",
        latest_brief: { brief_id: 103, title: "Assured Guaranty Operating Adjustments", brief_date: "2026-08-07", qc_score: 4.7 },
        summary: { top_trend: "Leveraging agentic AI to better model systemic risks.", readout: "Focus on mitigating property-related pressures and revamping capital allocation." },
        counts: { industry: 4, monitored_count: 4, core_count: 4, context_count: 0 },
        presentation_mode: "canonical_brief"
     }
  },
  pilot_industries: {
      "property-casualty": {
          trends: [
             {
                trend_id: "t1",
                display_order: 1,
                name: "Agentic AI in Claims Processing",
                tracked_since: "2026-01",
                monthly_change: "IMPROVING",
                momentum: "Accelerating",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "McKinsey's July 2026 report indicates competitive advantage goes to carriers embedding AI to lower the 'cost of risk'. In Q2 calls, P&C leaders committed to scaling AI to offset human capital costs.",
                what_changed: "Transitioned from pilot AI projects to core system integrations in Q2 2026.",
                why_it_matters: "Addresses the 20-year erosion of operating leverage in the sector.",
                confidence: "High",
                conversation_hypothesis: "Advise clients on shifting IT spend from legacy maintenance to agentic AI deployment to defend margins."
             },
             {
                trend_id: "t2",
                display_order: 2,
                name: "Regulatory Simplification & FDI",
                tracked_since: "2026-02",
                monthly_change: "STABLE",
                momentum: "Persistent",
                breadth: "Regional Focus",
                evidence_strength: "STRONG_REGULATORY_BACKING",
                current_readout: "The Sabka Bima Sabki Raksha Act and 100% FDI allowances in markets like India are easing capital restructuring and M&A activities.",
                what_changed: "Final operationalization of the SBSR Act in H1 2026.",
                why_it_matters: "Opens up new massive growth markets for multinational P&C carriers struggling with saturated Western markets.",
                confidence: "High",
                conversation_hypothesis: "Explore M&A and market-entry strategies for Western carriers into newly deregulated Asian markets."
             }
          ],
          archetypes: [],
          gsi_hypotheses: [],
          watch_items: ["Climate-related loss ratios in Q3", "Ind AS 117 compliance costs"],
          evidence: { "t1": ["McKinsey AI and Economic Outlook July 2026", "Travelers Q2 Earnings Transcript"], "t2": ["IRDAI SBSR Act 2026", "Bain Global Insurance Report 2026"] }
      }
  },
  companies: [
      {
          company_id: 1,
          name: "QBE Insurance Group",
          ticker: "QBIEY",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 1,
             title: "Q2 2026 Earnings insights",
             brief_date: "2026-08-13",
             qc_score: 4.8
          },
          aliases: ["QBE"]
      },
      {
          company_id: 2,
          name: "The Travelers Companies",
          ticker: "TRV",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 2,
             title: "Q2 2026 Margin pressures",
             brief_date: "2026-07-20",
             qc_score: 4.5
          },
          aliases: ["Travelers"]
      },
      {
          company_id: 3,
          name: "Aflac Incorporated",
          ticker: "AFL",
          industry: "Life & Health",
          industry_role: "core",
          latest_brief: {
             brief_id: 3,
             title: "Q2 2026 Earnings Surge",
             brief_date: "2026-08-07",
             qc_score: 4.9
          },
          aliases: ["Aflac"]
      },
      {
          company_id: 4,
          name: "Assured Guaranty",
          ticker: "AGO",
          industry: "Reinsurance",
          industry_role: "core",
          latest_brief: {
             brief_id: 4,
             title: "Q2 2026 Operating Adjustments",
             brief_date: "2026-08-07",
             qc_score: 4.6
          },
          aliases: ["Assured"]
      },
      {
          company_id: 5,
          name: "Hamilton Insurance",
          ticker: "HG",
          industry: "Reinsurance",
          industry_role: "core",
          latest_brief: {
             brief_id: 5,
             title: "Q2 Property Line Updates",
             brief_date: "2026-08-14",
             qc_score: 4.4
          },
          aliases: ["Hamilton"]
      },
      {
          company_id: 6,
          name: "Hartford Financial Services",
          ticker: "HIG",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 6,
             title: "Q2 2026 Core Earnings",
             brief_date: "2026-07-25",
             qc_score: 4.7
          },
          aliases: ["The Hartford"]
      },
      {
          company_id: 7,
          name: "The Allstate Corporation",
          ticker: "ALL",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 7,
             title: "Q2 2026 Catastrophe Losses",
             brief_date: "2026-08-01",
             qc_score: 4.5
          },
          aliases: ["Allstate"]
      },
      {
          company_id: 8,
          name: "Liberty Mutual Group",
          ticker: "PRIVATE",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 8,
             title: "Q2 2026 Restructuring Update",
             brief_date: "2026-08-05",
             qc_score: 4.6
          },
          aliases: ["Liberty Mutual"]
      },
      {
          company_id: 9,
          name: "Berkshire Hathaway (Insurance)",
          ticker: "BRK.A",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 9,
             title: "Q2 2026 Underwriting Profit",
             brief_date: "2026-08-08",
             qc_score: 4.9
          },
          aliases: ["Berkshire", "Geico"]
      },
      {
          company_id: 10,
          name: "Markel Group",
          ticker: "MKL",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 10,
             title: "Q2 2026 Investment Income",
             brief_date: "2026-07-30",
             qc_score: 4.8
          },
          aliases: ["Markel"]
      },
      {
          company_id: 11,
          name: "Assurant, Inc.",
          ticker: "AIZ",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 11,
             title: "Q2 2026 Global Housing Segment",
             brief_date: "2026-08-04",
             qc_score: 4.5
          },
          aliases: ["Assurant"]
      },
      {
          company_id: 12,
          name: "Arch Capital Group",
          ticker: "ACGL",
          industry: "Reinsurance",
          industry_role: "core",
          latest_brief: {
             brief_id: 12,
             title: "Q2 2026 Premium Growth",
             brief_date: "2026-07-28",
             qc_score: 4.7
          },
          aliases: ["Arch Capital"]
      },
      {
          company_id: 13,
          name: "RenaissanceRe Holdings",
          ticker: "RNR",
          industry: "Reinsurance",
          industry_role: "core",
          latest_brief: {
             brief_id: 13,
             title: "Q2 2026 Validus Integration",
             brief_date: "2026-07-24",
             qc_score: 4.6
          },
          aliases: ["RenRe"]
      },
      {
          company_id: 14,
          name: "Everest Group",
          ticker: "EG",
          industry: "Reinsurance",
          industry_role: "core",
          latest_brief: {
             brief_id: 14,
             title: "Q2 2026 Reinsurance Renewals",
             brief_date: "2026-07-29",
             qc_score: 4.8
          },
          aliases: ["Everest Re"]
      },
      {
          company_id: 15,
          name: "Hannover Re",
          ticker: "HNR1.DE",
          industry: "Reinsurance",
          industry_role: "core",
          latest_brief: {
             brief_id: 15,
             title: "H1 2026 Net Income Target",
             brief_date: "2026-08-06",
             qc_score: 4.5
          },
          aliases: ["Hannover Re"]
      },
      {
          company_id: 16,
          name: "SCOR SE",
          ticker: "SCR.PA",
          industry: "Reinsurance",
          industry_role: "core",
          latest_brief: {
             brief_id: 16,
             title: "Q2 2026 L&H Reserve Review",
             brief_date: "2026-07-26",
             qc_score: 4.3
          },
          aliases: ["SCOR"]
      },
      {
          company_id: 17,
          name: "Transamerica Corporation",
          ticker: "AEG",
          industry: "Life & Health",
          industry_role: "core",
          latest_brief: {
             brief_id: 17,
             title: "Q2 2026 US Strategic Update",
             brief_date: "2026-08-12",
             qc_score: 4.6
          },
          aliases: ["Aegon", "Transamerica"]
      },
      {
          company_id: 18,
          name: "Principal Financial Group",
          ticker: "PFG",
          industry: "Life & Health",
          industry_role: "core",
          latest_brief: {
             brief_id: 18,
             title: "Q2 2026 Retirement Segment",
             brief_date: "2026-07-23",
             qc_score: 4.7
          },
          aliases: ["Principal"]
      },
      {
          company_id: 19,
          name: "Unum Group",
          ticker: "UNM",
          industry: "Life & Health",
          industry_role: "core",
          latest_brief: {
             brief_id: 19,
             title: "Q2 2026 Group Disability Gains",
             brief_date: "2026-07-31",
             qc_score: 4.6
          },
          aliases: ["Unum"]
      },
      {
          company_id: 20,
          name: "Oscar Health",
          ticker: "OSCR",
          industry: "Life & Health",
          industry_role: "core",
          latest_brief: {
             brief_id: 20,
             title: "Q2 2026 Tech Platform Expansion",
             brief_date: "2026-08-07",
             qc_score: 4.8
          },
          aliases: ["Oscar"]
      },
      {
          company_id: 21,
          name: "Centene Corporation",
          ticker: "CNC",
          industry: "Life & Health",
          industry_role: "core",
          latest_brief: {
             brief_id: 21,
             title: "Q2 2026 Medicaid RFPs",
             brief_date: "2026-07-26",
             qc_score: 4.5
          },
          aliases: ["Centene"]
      },
      {
          company_id: 22,
          name: "Molina Healthcare",
          ticker: "MOH",
          industry: "Life & Health",
          industry_role: "core",
          latest_brief: {
             brief_id: 22,
             title: "Q2 2026 Medical Margin",
             brief_date: "2026-07-24",
             qc_score: 4.4
          },
          aliases: ["Molina"]
      },
      {
          company_id: 23,
          name: "Root Insurance",
          ticker: "ROOT",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 23,
             title: "Q2 2026 Loss Ratio Improvement",
             brief_date: "2026-08-05",
             qc_score: 4.7
          },
          aliases: ["Root"]
      },
      {
          company_id: 24,
          name: "Progressive Corporation",
          ticker: "PGR",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 24,
             title: "Q2 2026 Policy Count Growth",
             brief_date: "2026-07-16",
             qc_score: 4.9
          },
          aliases: ["Progressive"]
      },
      {
          company_id: 25,
          name: "Chubb Limited",
          ticker: "CB",
          industry: "Property & Casualty",
          industry_role: "core",
          latest_brief: {
             brief_id: 25,
             title: "Q2 2026 Commercial P&C Pricing",
             brief_date: "2026-07-23",
             qc_score: 4.8
          },
          aliases: ["Chubb"]
      }
  ]
};
