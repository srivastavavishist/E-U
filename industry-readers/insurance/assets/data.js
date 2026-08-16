window.EU_DATA = {
  meta: {
    product_name: "Insurance Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 25,
    brief_count: 25,
    editorial_readout: "In Q2 2026, the global insurance sector demonstrated strong cyclical performance, with estimated global premiums reaching $7.1 trillion according to Bain & Company. However, leading firms like BCG and McKinsey note this momentum masks structural challenges, notably eroding operating leverage and investor skepticism around durable long-term growth. Life and Health (L&H) are emerging as preferred investor segments over Property and Casualty (P&C) due to more stable risk profiles amid ongoing climate-related property pressures.\n\nSimultaneously, the regulatory landscape has seen massive shifts, especially with the operationalization of the Sabka Bima Sabki Raksha (SBSR) Act and a push toward 100% FDI in key emerging markets like India. A core theme across Q2 earnings calls (from QBE, Travelers, and Aflac) is the necessity of agentic AI integrationâ€”not just for cost reduction, but to redefine claims processing, lower the 'cost of risk', and expand coverage accessibility."
  },
  industry_cards: [
    {
      id: "property-casualty",
      db_industry: "Property & Casualty",
      name: "Property & Casualty",
      icon: "🏠",
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
      icon: "❤️",
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
      icon: "🔄",
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
          hq: "Sydney, Australia",
          exchange: "ASX",
          market_cap: "$26B",
          employees: "~13,000",
          founded: "1886",
          summary: "QBE is a major Australian-headquartered global general insurer and reinsurer, underwriting commercial, specialty, and personal lines risk across Australia Pacific, International, and North America divisions.",
          latest_brief: {
             brief_id: 1,
             title: "Q2 2026 Earnings insights",
             brief_date: "2026-08-13",
             qc_score: 4.8,
             summary: "QBE's first-half 2026 results showed continued underwriting discipline, with management pointing to improved combined ratios in its International and North America divisions as rate increases outpaced loss cost inflation. The insurer flagged catastrophe and property loss activity as an ongoing watch item, while emphasizing expense-ratio improvement through digital claims and underwriting automation. Investment income remained a tailwind given the higher-for-longer rate environment."
          },
          aliases: ["QBE"]
      },
      {
          company_id: 2,
          name: "The Travelers Companies",
          ticker: "TRV",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "New York, NY, USA",
          exchange: "NYSE",
          market_cap: "$70B",
          employees: "~34,000",
          founded: "1853",
          summary: "Travelers is one of the largest U.S. property-casualty insurers, writing personal, business, and specialty coverage and a Dow Jones Industrial Average component.",
          latest_brief: {
             brief_id: 2,
             title: "Q2 2026 Margin pressures",
             brief_date: "2026-07-20",
             qc_score: 4.5,
             summary: "Travelers' Q2 2026 results reflected elevated catastrophe losses and continued pressure in its personal auto and homeowners lines, even as commercial pricing held firm. Management reiterated a focus on rate adequacy over volume growth, particularly in coastal property exposure, while pointing to reserve strengthening in select casualty lines. The company continues to lean on technology-driven claims handling to offset rising loss-adjustment expenses."
          },
          aliases: ["Travelers"]
      },
      {
          company_id: 3,
          name: "Aflac Incorporated",
          ticker: "AFL",
          industry: "Life & Health",
          industry_role: "core",
          hq: "Columbus, Georgia, USA",
          exchange: "NYSE",
          market_cap: "$60B",
          employees: "~11,000",
          founded: "1955",
          summary: "Aflac is a leading supplemental health and life insurer, the dominant player in Japan's supplemental insurance market alongside its core U.S. voluntary-benefits business.",
          latest_brief: {
             brief_id: 3,
             title: "Q2 2026 Earnings Surge",
             brief_date: "2026-08-07",
             qc_score: 4.9,
             summary: "Aflac's Q2 2026 results were driven by strong net earnings per share growth, aided by continued share buybacks, favorable benefit ratios, and resilient sales in both its Japan and U.S. segments. Management highlighted the Japan third-sector cancer and medical insurance lines as a stable earnings base, while U.S. group life and disability products continue to diversify revenue away from Japan-yen sensitivity. The company also pointed to digital enrollment tools as a driver of U.S. voluntary benefits growth."
          },
          aliases: ["Aflac"]
      },
      {
          company_id: 4,
          name: "Assured Guaranty",
          ticker: "AGO",
          industry: "Reinsurance",
          industry_role: "core",
          hq: "Hamilton, Bermuda",
          exchange: "NYSE",
          market_cap: "$3.7B",
          employees: "~420",
          founded: "1988",
          summary: "Assured Guaranty is the largest remaining financial guaranty (bond) insurer, providing credit protection on U.S. municipal bonds and international infrastructure debt.",
          latest_brief: {
             brief_id: 4,
             title: "Q2 2026 Operating Adjustments",
             brief_date: "2026-08-07",
             qc_score: 4.6,
             summary: "Assured Guaranty's Q2 2026 update centered on steady operating income and continued opportunistic share repurchases, supported by low claims activity in its insured municipal bond portfolio. Management flagged a modest pickup in new business written as municipal issuance volumes recovered, along with disciplined capital allocation given the niche, monoline nature of financial guaranty risk. The company continues to monitor state and local government credit conditions rather than catastrophe-driven property exposure."
          },
          aliases: ["Assured"]
      },
      {
          company_id: 5,
          name: "Hamilton Insurance",
          ticker: "HG",
          industry: "Reinsurance",
          industry_role: "core",
          hq: "Pembroke, Bermuda",
          exchange: "NYSE",
          market_cap: "$3.2B",
          employees: "~600",
          founded: "2013",
          summary: "Hamilton Insurance Group is a Bermuda-based specialty insurer and reinsurer underwriting property, casualty, and specialty risks through Lloyd's, Bermuda, and U.S. platforms.",
          latest_brief: {
             brief_id: 5,
             title: "Q2 Property Line Updates",
             brief_date: "2026-08-14",
             qc_score: 4.4,
             summary: "Hamilton's Q2 2026 property book benefited from firm reinsurance pricing at the mid-year renewals, even as competition began to soften rate momentum in certain international property-catastrophe layers. Management emphasized disciplined risk selection and portfolio diversification across its Bermuda, Lloyd's, and U.S. platforms to manage volatility from severe convective storm and hurricane exposure. The company reiterated its focus on combined-ratio improvement as its newer specialty lines mature."
          },
          aliases: ["Hamilton"]
      },
      {
          company_id: 6,
          name: "Hartford Financial Services",
          ticker: "HIG",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Hartford, Connecticut, USA",
          exchange: "NYSE",
          market_cap: "$39B",
          employees: "~18,500",
          founded: "1810",
          summary: "The Hartford is a major U.S. insurer offering property-casualty, group benefits, and mutual fund products, with a strong middle-market and small-commercial business franchise.",
          latest_brief: {
             brief_id: 6,
             title: "Q2 2026 Core Earnings",
             brief_date: "2026-07-25",
             qc_score: 4.7,
             summary: "The Hartford's Q2 2026 core earnings were supported by continued strength in its commercial lines and group benefits segments, with underlying combined ratios holding near historically strong levels. Management pointed to disciplined pricing in small commercial and middle-market business as a buffer against social inflation and elevated litigation trends. Group benefits results also benefited from favorable disability and life claims experience."
          },
          aliases: ["The Hartford"]
      },
      {
          company_id: 7,
          name: "The Allstate Corporation",
          ticker: "ALL",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Northbrook, Illinois, USA",
          exchange: "NYSE",
          market_cap: "$66B",
          employees: "~50,000",
          founded: "1931",
          summary: "Allstate is one of the largest U.S. personal-lines insurers, known for auto and homeowners insurance sold through agents and direct channels under the Allstate and Esurance-descended brands.",
          latest_brief: {
             brief_id: 7,
             title: "Q2 2026 Catastrophe Losses",
             brief_date: "2026-08-01",
             qc_score: 4.5,
             summary: "Allstate's Q2 2026 results were weighed down by an active severe-weather quarter, with elevated catastrophe losses from wind, hail, and wildfire events pressuring its homeowners combined ratio. Management noted that prior-year auto insurance rate actions continued to earn in, helping offset property-line volatility, while non-catastrophe losses remained largely in line with expectations. The company reiterated its strategy of shrinking property exposure in the highest-risk geographies while growing auto policy counts."
          },
          aliases: ["Allstate"]
      },
      {
          company_id: 8,
          name: "Liberty Mutual Group",
          ticker: "PRIVATE",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Boston, Massachusetts, USA",
          exchange: "Private",
          market_cap: "N/A (mutual company)",
          employees: "~40,000",
          founded: "1912",
          summary: "Liberty Mutual is a large U.S. mutual insurer offering personal and commercial property-casualty coverage globally, ranking among the largest P&C insurers by written premium.",
          latest_brief: {
             brief_id: 8,
             title: "Q2 2026 Restructuring Update",
             brief_date: "2026-08-05",
             qc_score: 4.6,
             summary: "Liberty Mutual's Q2 2026 update outlined continued portfolio simplification following its multi-year restructuring, including further pruning of underperforming international and specialty units to focus capital on core U.S. personal and commercial lines. Management pointed to improving underwriting margins in personal auto after several years of rate increases, alongside ongoing expense-reduction initiatives. As a mutual insurer, the company emphasized policyholder-focused capital strength over short-term earnings volatility."
          },
          aliases: ["Liberty Mutual"]
      },
      {
          company_id: 9,
          name: "Berkshire Hathaway (Insurance)",
          ticker: "BRK.A",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Omaha, Nebraska, USA",
          exchange: "NYSE",
          market_cap: "$1.1T",
          employees: "~390,000",
          founded: "1839",
          summary: "Berkshire Hathaway's insurance operations, including GEICO, General Re, and Berkshire Hathaway Reinsurance Group, form one of the world's largest insurance and reinsurance floats within Warren Buffett's diversified conglomerate.",
          latest_brief: {
             brief_id: 9,
             title: "Q2 2026 Underwriting Profit",
             brief_date: "2026-08-08",
             qc_score: 4.9,
             summary: "Berkshire's insurance segment posted another quarter of solid underwriting profit in Q2 2026, with GEICO continuing its multi-year turnaround through improved claims discipline and expense-ratio gains. General Re and the reinsurance group benefited from favorable large-loss experience and continued rate adequacy in property-catastrophe lines. Investment income from the group's substantial float remained a major profit contributor amid still-elevated short-term interest rates."
          },
          aliases: ["Berkshire", "Geico"]
      },
      {
          company_id: 10,
          name: "Markel Group",
          ticker: "MKL",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Glen Allen, Virginia, USA",
          exchange: "NYSE",
          market_cap: "$23B",
          employees: "~19,000",
          founded: "1930",
          summary: "Markel Group is a diversified holding company built around a specialty insurance and reinsurance business (often compared to a smaller Berkshire Hathaway), alongside Markel Ventures industrial and services operations.",
          latest_brief: {
             brief_id: 10,
             title: "Q2 2026 Investment Income",
             brief_date: "2026-07-30",
             qc_score: 4.8,
             summary: "Markel's Q2 2026 results were bolstered by higher investment income as its equity and fixed-income portfolios benefited from a favorable rate and market environment. The specialty insurance segment showed continued rate discipline in E&S lines, while Markel Ventures contributed steady operating earnings from its non-insurance industrial and consumer businesses. Management highlighted this diversified, Berkshire-style capital allocation model as a buffer against P&C underwriting cyclicality."
          },
          aliases: ["Markel"]
      },
      {
          company_id: 11,
          name: "Assurant, Inc.",
          ticker: "AIZ",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Atlanta, Georgia, USA",
          exchange: "NYSE",
          market_cap: "$15B",
          employees: "~15,000",
          founded: "1892",
          summary: "Assurant is a global specialty insurer best known for lender-placed homeowners insurance and mobile device protection plans, operating through Global Housing and Global Lifestyle segments.",
          latest_brief: {
             brief_id: 11,
             title: "Q2 2026 Global Housing Segment",
             brief_date: "2026-08-04",
             qc_score: 4.5,
             summary: "Assurant's Global Housing segment saw mixed results in Q2 2026, with lender-placed insurance volumes benefiting from continued mortgage-servicing relationships even as catastrophe losses from severe weather events pressured underwriting margins. Management pointed to renters insurance growth and multifamily housing partnerships as diversification away from catastrophe-exposed lender-placed risk. The Global Lifestyle segment's device protection business continued to provide steadier, fee-based earnings as a counterbalance."
          },
          aliases: ["Assurant"]
      },
      {
          company_id: 12,
          name: "Arch Capital Group",
          ticker: "ACGL",
          industry: "Reinsurance",
          industry_role: "core",
          hq: "Pembroke, Bermuda",
          exchange: "NASDAQ",
          market_cap: "$35B",
          employees: "~8,000",
          founded: "2000",
          summary: "Arch Capital Group is a Bermuda-based specialty insurer, reinsurer, and mortgage insurer, known for cycle-disciplined underwriting across insurance, reinsurance, and mortgage segments.",
          latest_brief: {
             brief_id: 12,
             title: "Q2 2026 Premium Growth",
             brief_date: "2026-07-28",
             qc_score: 4.7,
             summary: "Arch Capital reported continued gross premium growth in Q2 2026, led by its insurance and reinsurance segments as the company redeployed capital into still-attractive property and specialty lines following recent hard-market years. Mortgage insurance results remained a stable earnings contributor given low delinquency rates in the current housing and employment environment. Management reiterated its opportunistic, cycle-management approach to capital allocation across the three segments."
          },
          aliases: ["Arch Capital"]
      },
      {
          company_id: 13,
          name: "RenaissanceRe Holdings",
          ticker: "RNR",
          industry: "Reinsurance",
          industry_role: "core",
          hq: "Pembroke, Bermuda",
          exchange: "NYSE",
          market_cap: "$13B",
          employees: "~1,100",
          founded: "1993",
          summary: "RenaissanceRe is a leading global property-catastrophe reinsurer, which significantly expanded its casualty and specialty reinsurance footprint after acquiring Validus Re from AIG in 2023.",
          latest_brief: {
             brief_id: 13,
             title: "Q2 2026 Validus Integration",
             brief_date: "2026-07-24",
             qc_score: 4.6,
             summary: "RenaissanceRe's Q2 2026 update highlighted continued progress integrating the Validus Re book acquired in 2023, with management citing realized underwriting synergies and an expanded casualty and specialty reinsurance platform alongside its core property-catastrophe business. The company noted firm-but-moderating property-catastrophe pricing at recent renewals after several years of hard-market rate gains. Capital partners and third-party capital vehicles remain a key part of RenaissanceRe's risk-distribution strategy."
          },
          aliases: ["RenRe"]
      },
      {
          company_id: 14,
          name: "Everest Group",
          ticker: "EG",
          industry: "Reinsurance",
          industry_role: "core",
          hq: "Hamilton, Bermuda",
          exchange: "NYSE",
          market_cap: "$14B",
          employees: "~3,000",
          founded: "1973",
          summary: "Everest Group (formerly Everest Re) is a global reinsurance and insurance underwriter, originally founded as a Prudential subsidiary and renamed after Mount Everest, operating across the U.S., Bermuda, and Europe.",
          latest_brief: {
             brief_id: 14,
             title: "Q2 2026 Reinsurance Renewals",
             brief_date: "2026-07-29",
             qc_score: 4.8,
             summary: "Everest's Q2 2026 update covered the mid-year reinsurance renewals, where the company reported disciplined risk selection amid moderating property-catastrophe rates following several profitable hard-market years. Management flagged continued growth in its insurance segment as a diversification lever alongside the core reinsurance book, while reiterating caution on casualty reserve adequacy given persistent social-inflation trends. The company also highlighted capital management actions, including buybacks, supported by strong renewal-season capital levels."
          },
          aliases: ["Everest Re"]
      },
      {
          company_id: 15,
          name: "Hannover Re",
          ticker: "HNR1.DE",
          industry: "Reinsurance",
          industry_role: "core",
          hq: "Hannover, Germany",
          exchange: "Frankfurt Stock Exchange (XETRA)",
          market_cap: "$34B",
          employees: "~4,100",
          founded: "1966",
          summary: "Hannover Re is the world's third-largest reinsurer, writing life & health and property-casualty reinsurance globally with roughly EUR 33 billion in gross written premium.",
          latest_brief: {
             brief_id: 15,
             title: "H1 2026 Net Income Target",
             brief_date: "2026-08-06",
             qc_score: 4.5,
             summary: "Hannover Re's H1 2026 results kept the group on track toward its full-year net income guidance, supported by stable property-catastrophe reinsurance pricing and continued growth in its life & health reinsurance segment. Management pointed to disciplined underwriting at the January and mid-year renewals as key to protecting margins amid a moderating, though still favorable, pricing cycle. The group also cited strong investment returns as a supplementary driver of net income alongside underwriting profit."
          },
          aliases: ["Hannover Re"]
      },
      {
          company_id: 16,
          name: "SCOR SE",
          ticker: "SCR.PA",
          industry: "Reinsurance",
          industry_role: "core",
          hq: "Paris, France",
          exchange: "Euronext Paris",
          market_cap: "$6.4B",
          employees: "~3,800",
          founded: "1970",
          summary: "SCOR SE is a major global reinsurer offering property-casualty and life & health reinsurance, one of the top-five reinsurance groups worldwide by premium.",
          latest_brief: {
             brief_id: 16,
             title: "Q2 2026 L&H Reserve Review",
             brief_date: "2026-07-26",
             qc_score: 4.3,
             summary: "SCOR's Q2 2026 update centered on an ongoing review of life & health reserve adequacy, an area the reinsurer has flagged in prior periods amid mortality and morbidity trend uncertainty in certain long-duration blocks. Management reiterated confidence in the P&C reinsurance segment's underwriting momentum, supported by firm property-catastrophe pricing at recent renewals. The company continues to prioritize capital strength and reserve conservatism in L&H as part of its broader risk-appetite framework."
          },
          aliases: ["SCOR"]
      },
      {
          company_id: 17,
          name: "Transamerica Corporation",
          ticker: "AEG",
          industry: "Life & Health",
          industry_role: "core",
          hq: "The Hague, Netherlands (parent Aegon relocating to the US)",
          exchange: "NYSE / Euronext Amsterdam",
          market_cap: "$10B",
          employees: "~22,000",
          founded: "1844",
          summary: "Transamerica is the U.S. life insurance and retirement brand of Aegon N.V., which is in the process of relocating its headquarters and legal seat from the Netherlands to the United States and rebranding the holding company as Transamerica.",
          latest_brief: {
             brief_id: 17,
             title: "Q2 2026 US Strategic Update",
             brief_date: "2026-08-12",
             qc_score: 4.6,
             summary: "Transamerica's Q2 2026 strategic update detailed progress on parent company Aegon's plan to relocate its headquarters and legal domicile to the United States, part of a broader effort to align the group's identity with its largest and fastest-growing market. Management highlighted continued growth in U.S. individual life, annuities, and workplace retirement solutions as core priorities. The transition is expected to simplify group structure and better position the combined entity for U.S. capital markets and regulatory alignment."
          },
          aliases: ["Aegon", "Transamerica"]
      },
      {
          company_id: 18,
          name: "Principal Financial Group",
          ticker: "PFG",
          industry: "Life & Health",
          industry_role: "core",
          hq: "Des Moines, Iowa, USA",
          exchange: "NASDAQ",
          market_cap: "$22B",
          employees: "~19,700",
          founded: "1879",
          summary: "Principal Financial Group is a global retirement, asset management, and life insurance provider, with a leading position in U.S. small and mid-sized business retirement plans.",
          latest_brief: {
             brief_id: 18,
             title: "Q2 2026 Retirement Segment",
             brief_date: "2026-07-23",
             qc_score: 4.7,
             summary: "Principal's Q2 2026 results were supported by steady net cash flows into its Retirement and Income Solutions segment, driven by continued strength in small and mid-sized business 401(k) plan sales. Management pointed to rising account values from favorable equity markets as a tailwind for fee-based asset management revenue. The company also highlighted growth in its specialty benefits and international pension businesses as complements to its core U.S. retirement franchise."
          },
          aliases: ["Principal"]
      },
      {
          company_id: 19,
          name: "Unum Group",
          ticker: "UNM",
          industry: "Life & Health",
          industry_role: "core",
          hq: "Chattanooga, Tennessee, USA",
          exchange: "NYSE",
          market_cap: "$14B",
          employees: "~11,000",
          founded: "1848",
          summary: "Unum Group is a leading provider of group and individual income-protection insurance, including disability, life, and long-term care coverage, across the U.S., U.K., and Poland.",
          latest_brief: {
             brief_id: 19,
             title: "Q2 2026 Group Disability Gains",
             brief_date: "2026-07-31",
             qc_score: 4.6,
             summary: "Unum's Q2 2026 results showed continued improvement in its group disability business, with favorable claims incidence and recovery trends supporting a stronger benefit ratio. Management cited healthy sales momentum in group life and voluntary benefits as employers continue to expand workplace benefit offerings. The legacy long-term care block remained a smaller but closely watched area given persistent reserve and claims-cost scrutiny across the industry."
          },
          aliases: ["Unum"]
      },
      {
          company_id: 20,
          name: "Oscar Health",
          ticker: "OSCR",
          industry: "Life & Health",
          industry_role: "core",
          hq: "New York, NY, USA",
          exchange: "NYSE",
          market_cap: "$9B",
          employees: "~2,700",
          founded: "2012",
          summary: "Oscar Health is a technology-driven health insurer focused primarily on the individual ACA marketplace, built around a proprietary member-engagement and care-navigation technology platform.",
          latest_brief: {
             brief_id: 20,
             title: "Q2 2026 Tech Platform Expansion",
             brief_date: "2026-08-07",
             qc_score: 4.8,
             summary: "Oscar Health's Q2 2026 update highlighted continued expansion of its proprietary +Oscar technology platform, which the company licenses to health plan partners as well as using internally to manage medical costs and member engagement. Management pointed to membership growth in the ACA individual marketplace and improving medical loss ratios as evidence the platform is scaling profitably. The company also discussed AI-assisted care navigation tools as a differentiator against larger, legacy health insurers."
          },
          aliases: ["Oscar"]
      },
      {
          company_id: 21,
          name: "Centene Corporation",
          ticker: "CNC",
          industry: "Life & Health",
          industry_role: "core",
          hq: "St. Louis, Missouri, USA",
          exchange: "NYSE",
          market_cap: "$10B",
          employees: "~58,000",
          founded: "1984",
          summary: "Centene is one of the largest U.S. managed-care organizations, specializing in government-sponsored health programs including Medicaid, Medicare, and ACA marketplace plans.",
          latest_brief: {
             brief_id: 21,
             title: "Q2 2026 Medicaid RFPs",
             brief_date: "2026-07-26",
             qc_score: 4.5,
             summary: "Centene's Q2 2026 update focused on the state Medicaid RFP (request-for-proposal) cycle, where the company has been defending and pursuing contract renewals and new-state awards central to its managed-care growth strategy. Management addressed ongoing pressure from elevated Medicaid medical cost trends and acuity mix shifts following pandemic-era eligibility redeterminations. The company continues to emphasize rate adequacy negotiations with state partners as key to restoring margins in its core government-sponsored business."
          },
          aliases: ["Centene"]
      },
      {
          company_id: 22,
          name: "Molina Healthcare",
          ticker: "MOH",
          industry: "Life & Health",
          industry_role: "core",
          hq: "Long Beach, California, USA",
          exchange: "NYSE",
          market_cap: "$12B",
          employees: "~17,000",
          founded: "1980",
          summary: "Molina Healthcare is a managed-care organization focused almost exclusively on government-sponsored health programs, primarily Medicaid, with growing Medicare and marketplace segments.",
          latest_brief: {
             brief_id: 22,
             title: "Q2 2026 Medical Margin",
             brief_date: "2026-07-24",
             qc_score: 4.4,
             summary: "Molina's Q2 2026 medical margin update reflected the ongoing industry-wide challenge of matching Medicaid premium rates to elevated post-redetermination acuity and utilization trends. Management highlighted targeted state rate actions and medical-cost management initiatives aimed at restoring margins toward the company's target range. Growth in Medicare and ACA marketplace membership continued to provide diversification against Medicaid-specific cost pressure."
          },
          aliases: ["Molina"]
      },
      {
          company_id: 23,
          name: "Root Insurance",
          ticker: "ROOT",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Columbus, Ohio, USA",
          exchange: "NASDAQ",
          market_cap: "$3B",
          employees: "~750",
          founded: "2015",
          summary: "Root Insurance is a technology-driven, direct-to-consumer auto insurer that uses telematics and mobile-app-based driver behavior scoring to underwrite and price personal auto policies.",
          latest_brief: {
             brief_id: 23,
             title: "Q2 2026 Loss Ratio Improvement",
             brief_date: "2026-08-05",
             qc_score: 4.7,
             summary: "Root's Q2 2026 results showed continued loss-ratio improvement as its telematics-based underwriting and several years of rate and risk-selection refinements matured into better-performing policy vintages. Management pointed to growth in embedded and partner-channel distribution, alongside direct channels, as a lower customer-acquisition-cost complement to its app-based model. The company reiterated a path toward sustained profitability as it scales written premium while maintaining underwriting discipline."
          },
          aliases: ["Root"]
      },
      {
          company_id: 24,
          name: "Progressive Corporation",
          ticker: "PGR",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Mayfield Village, Ohio, USA",
          exchange: "NYSE",
          market_cap: "$145B",
          employees: "~66,000",
          founded: "1937",
          summary: "Progressive is one of the largest U.S. personal auto insurers and a pioneer of usage-based (telematics) pricing, having grown into the number-two or number-one U.S. auto insurer by direct written premium alongside Allstate and State Farm.",
          latest_brief: {
             brief_id: 24,
             title: "Q2 2026 Policy Count Growth",
             brief_date: "2026-07-16",
             qc_score: 4.9,
             summary: "Progressive's Q2 2026 results featured continued double-digit policy count growth in personal auto, as competitive rate positioning following its earlier hard-market pricing actions drew market share from slower-moving peers. Management highlighted disciplined expense management and strong combined ratios well below 96, supporting continued marketing investment to capture new business. The company's direct and independent-agency channel mix, along with growing homeowners bundling through its Property segment, continued to underpin retention gains."
          },
          aliases: ["Progressive"]
      },
      {
          company_id: 25,
          name: "Chubb Limited",
          ticker: "CB",
          industry: "Property & Casualty",
          industry_role: "core",
          hq: "Zurich, Switzerland",
          exchange: "NYSE",
          market_cap: "$105B",
          employees: "~40,000",
          founded: "1882",
          summary: "Chubb Limited is the world's largest publicly traded property-casualty insurer by market capitalization, formed through the 2016 ACE-Chubb merger and offering commercial and personal P&C, A&H, and reinsurance products globally.",
          latest_brief: {
             brief_id: 25,
             title: "Q2 2026 Commercial P&C Pricing",
             brief_date: "2026-07-23",
             qc_score: 4.8,
             summary: "Chubb's Q2 2026 results reflected a moderating but still-rational commercial P&C pricing environment, with the company citing continued rate-above-loss-trend discipline in North American commercial lines even as competitive pressure builds. Management highlighted strong growth in its international and high-net-worth personal lines businesses as diversification against U.S. commercial cyclicality. The company also pointed to robust investment income growth given its large, high-quality fixed-income portfolio."
          },
          aliases: ["Chubb"]
      }
  ]
};
