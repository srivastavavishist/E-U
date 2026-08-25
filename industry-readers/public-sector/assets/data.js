window.EU_DATA = {
  meta: {
    product_name: "Public Sector Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-25",
    company_count: 26,
    brief_count: 26,
    // Refocused on Europe and APAC public sector markets, non-defense —
    // the reader no longer covers the US federal / defense-and-intelligence
    // contracting base.
    editorial_readout: "The European and APAC public sector technology market in Q2 2026 is defined by a decisive shift toward sovereign, AI-ready digital infrastructure. National and municipal governments across the EU and Asia-Pacific are accelerating cloud migration under sovereignty and data-residency requirements — the EU's Digital Decade targets and Singapore's Smart Nation 2.0 blueprint are both pushing agencies to modernize legacy case-management, tax, and welfare systems using AI copilots layered on strong data foundations.\n\nMcKinsey and BCG both note that citizen-facing digitization (digital ID, e-government portals, unified benefits platforms) is now table stakes, and the differentiator has moved to AI-powered legacy modernization — replatforming decades-old mainframe systems in health, tax, and welfare administration without disrupting service continuity. Sovereignty and resilience concerns are also reshaping vendor selection, with European and Asia-Pacific governments favoring providers who can guarantee in-region cloud and AI infrastructure, in line with the EU AI Act's public-sector provisions and APAC data-localization rules."
  },
  priorities: [
    { name: "AI Impact with strong Data Foundations", icon: "🧠" },
    { name: "Sovereignty & Resilience for Cloud and AI", icon: "🛰️" },
    { name: "AI-powered legacy modernization", icon: "🔁" }
  ],
  industry_cards: [
    {
      id: "government",
      db_industry: "Government",
      name: "Government",
      icon: "🏛️",
      eyebrow: "Digital ID & Sovereign AI",
      top_trend: "National governments across Europe and APAC are standing up sovereign cloud and AI infrastructure to underpin digital ID and e-government platforms.",
      readout: "Q2 2026 activity shows sustained investment in national digital-government platforms, with sovereignty requirements shaping vendor and infrastructure choices across the EU and Asia-Pacific.",
      monitored_count: 4,
      core_count: 4,
      context_count: 0,
      readout_as_of: "2026-08-15",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=government"
    },
    {
      id: "education-research",
      db_industry: "Education & Research",
      name: "Education & Research",
      icon: "🎓",
      eyebrow: "AI-Assisted Learning & Assessment",
      top_trend: "European and Japanese education providers are embedding AI tutoring and assessment tools while research institutions modernize data infrastructure.",
      readout: "Q2 2026 results from education technology and publishing groups point to steady adoption of AI-assisted learning platforms across school systems in the UK, Nordics, and Japan.",
      monitored_count: 4,
      core_count: 4,
      context_count: 0,
      readout_as_of: "2026-08-13",
      freshness_status: "CURRENT",
      freshness_age_days: 3,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=education-research"
    },
    {
      id: "healthcare",
      db_industry: "Healthcare",
      name: "Healthcare",
      icon: "🏥",
      eyebrow: "Public Health System Modernization",
      top_trend: "Public hospital networks and national health systems in Europe and APAC are replatforming patient records onto AI-ready, sovereign cloud infrastructure.",
      readout: "National health bodies continue multi-year electronic health record modernization programs, with AI-assisted clinical workflows moving from pilot to scaled deployment.",
      monitored_count: 5,
      core_count: 5,
      context_count: 0,
      readout_as_of: "2026-08-14",
      freshness_status: "CURRENT",
      freshness_age_days: 2,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=healthcare"
    },
    {
      id: "public-admin",
      db_industry: "Public Administration",
      name: "Public Admin",
      icon: "🏢",
      eyebrow: "Municipal & Civil Service Modernization",
      top_trend: "Local and regional administrations are consolidating case-management and back-office systems onto shared, AI-augmented platforms.",
      readout: "Municipal and regional government IT providers report growing demand for unified administration platforms that reduce legacy system sprawl across European and APAC public bodies.",
      monitored_count: 5,
      core_count: 5,
      context_count: 0,
      readout_as_of: "2026-08-12",
      freshness_status: "CURRENT",
      freshness_age_days: 4,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=public-admin"
    },
    {
      id: "public-security-police",
      db_industry: "Public Security & Police",
      name: "Public Security & Police",
      icon: "🚓",
      eyebrow: "Civil Safety, Identity & Forensics",
      top_trend: "Civil policing and public-safety agencies are adopting AI-assisted video analytics, biometric identity, and forensics platforms under strict EU/APAC data-governance rules.",
      readout: "Public safety technology providers in Europe and APAC report expanding deployments of biometric identity and video-analytics platforms for civil policing and emergency response, distinct from military or intelligence programs.",
      monitored_count: 4,
      core_count: 4,
      context_count: 0,
      readout_as_of: "2026-08-11",
      freshness_status: "CURRENT",
      freshness_age_days: 5,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=public-security-police"
    },
    {
      id: "tax-welfare",
      db_industry: "Tax & Welfare",
      name: "Tax & Welfare",
      icon: "💶",
      eyebrow: "Legacy Modernization at National Scale",
      top_trend: "National tax authorities and welfare agencies are replacing decades-old mainframe systems with AI-augmented, cloud-native platforms.",
      readout: "Nordic and broader European tax and welfare modernization programs continue to be a bellwether for large-scale legacy replatforming, with APAC agencies following a similar path.",
      monitored_count: 4,
      core_count: 4,
      context_count: 0,
      readout_as_of: "2026-08-10",
      freshness_status: "CURRENT",
      freshness_age_days: 6,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=tax-welfare"
    }
  ],
  industry_pages: {
     "government": {
        id: "government", db_industry: "Government", name: "Government", eyebrow: "Digital ID & Sovereign AI",
        latest_brief: { brief_id: 101, title: "GovTech Singapore Expands Sovereign AI Stack", brief_date: "2026-08-15", qc_score: 4.7 },
        summary: { top_trend: "Sovereign cloud and AI infrastructure underpinning digital ID and e-government platforms.", readout: "Sustained EU/APAC investment in national digital-government platforms." },
        counts: { industry: 4, monitored_count: 4, core_count: 4, context_count: 0 }, presentation_mode: "canonical_brief"
     },
     "education-research": {
        id: "education-research", db_industry: "Education & Research", name: "Education & Research", eyebrow: "AI-Assisted Learning & Assessment",
        latest_brief: { brief_id: 102, title: "Benesse Holdings Scales AI Tutoring Platform", brief_date: "2026-08-13", qc_score: 4.5 },
        summary: { top_trend: "AI tutoring and assessment adoption across European and Japanese school systems.", readout: "Steady adoption of AI-assisted learning platforms in Q2 2026." },
        counts: { industry: 4, monitored_count: 4, core_count: 4, context_count: 0 }, presentation_mode: "canonical_brief"
     },
     "healthcare": {
        id: "healthcare", db_industry: "Healthcare", name: "Healthcare", eyebrow: "Public Health System Modernization",
        latest_brief: { brief_id: 103, title: "NHS England Accelerates EHR Modernization", brief_date: "2026-08-14", qc_score: 4.6 },
        summary: { top_trend: "Public hospital networks replatforming records onto sovereign, AI-ready cloud.", readout: "Multi-year EHR modernization programs moving from pilot to scale." },
        counts: { industry: 5, monitored_count: 5, core_count: 5, context_count: 0 }, presentation_mode: "canonical_brief"
     },
     "public-admin": {
        id: "public-admin", db_industry: "Public Administration", name: "Public Admin", eyebrow: "Municipal & Civil Service Modernization",
        latest_brief: { brief_id: 104, title: "Civica Wins Multi-Council Case Management Deal", brief_date: "2026-08-12", qc_score: 4.4 },
        summary: { top_trend: "Consolidation of case-management and back-office systems onto shared platforms.", readout: "Growing demand for unified administration platforms across EU/APAC." },
        counts: { industry: 5, monitored_count: 5, core_count: 5, context_count: 0 }, presentation_mode: "canonical_brief"
     },
     "public-security-police": {
        id: "public-security-police", db_industry: "Public Security & Police", name: "Public Security & Police", eyebrow: "Civil Safety, Identity & Forensics",
        latest_brief: { brief_id: 105, title: "IDEMIA Expands Civil Biometric ID Programs", brief_date: "2026-08-11", qc_score: 4.5 },
        summary: { top_trend: "AI-assisted video analytics and biometric identity for civil policing.", readout: "Expanding EU/APAC deployments under strict data-governance rules." },
        counts: { industry: 4, monitored_count: 4, core_count: 4, context_count: 0 }, presentation_mode: "canonical_brief"
     },
     "tax-welfare": {
        id: "tax-welfare", db_industry: "Tax & Welfare", name: "Tax & Welfare", eyebrow: "Legacy Modernization at National Scale",
        latest_brief: { brief_id: 106, title: "Netcompany Delivers Danish Customs Platform Milestone", brief_date: "2026-08-10", qc_score: 4.6 },
        summary: { top_trend: "Replacement of legacy mainframe tax/welfare systems with cloud-native platforms.", readout: "Nordic modernization programs continue to lead, APAC agencies following." },
        counts: { industry: 4, monitored_count: 4, core_count: 4, context_count: 0 }, presentation_mode: "canonical_brief"
     }
  },
  pilot_industries: {
      "government": {
          trends: [
             {
                trend_id: "t1",
                display_order: 1,
                name: "Sovereign Cloud Mandates Reshape Vendor Selection",
                tracked_since: "2025-11",
                priorities: ["Sovereignty & Resilience for Cloud and AI"],
                monthly_change: "ACCELERATING",
                momentum: "High",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "EU member states and APAC governments are increasingly requiring in-region cloud and AI infrastructure for citizen data, favoring vendors that can demonstrate sovereignty and resilience guarantees.",
                what_changed: "The EU AI Act's public-sector provisions and Singapore's Smart Nation 2.0 blueprint have tightened data-residency and AI-governance requirements for government IT contracts awarded since early 2026.",
                why_it_matters: "Vendors without credible in-region sovereign cloud offerings risk exclusion from national digital-government procurement.",
                confidence: "High",
                conversation_hypothesis: "Assess whether the client's public sector accounts have a sovereign cloud and AI governance story that meets EU/APAC procurement bars."
             },
             {
                trend_id: "t2",
                display_order: 2,
                name: "AI Copilots on Strong Data Foundations",
                tracked_since: "2026-02",
                priorities: ["AI Impact with strong Data Foundations"],
                monthly_change: "ACCELERATING",
                momentum: "High",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "Governments are moving AI copilots for caseworkers and citizen services from pilot to production, contingent on first cleaning up fragmented legacy data estates.",
                what_changed: "Agencies that invested early in unified data platforms are now the ones successfully scaling AI copilots in 2026; agencies without that foundation are stalling in pilot.",
                why_it_matters: "Data-foundation readiness, not the AI model itself, is now the gating factor for public sector AI programs.",
                confidence: "High",
                conversation_hypothesis: "Lead with data-foundation and governance readiness assessments before proposing AI copilot programs to public sector clients."
             },
             {
                trend_id: "t3",
                display_order: 3,
                name: "Legacy Mainframe Replatforming at National Scale",
                tracked_since: "2025-06",
                priorities: ["AI-powered legacy modernization"],
                monthly_change: "STABLE",
                momentum: "Persistent",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "National tax, welfare, and health agencies continue multi-year programs to replace decades-old mainframe systems with cloud-native, AI-augmented platforms without disrupting service continuity.",
                what_changed: "Several flagship Nordic and Japanese modernization programs passed major go-live milestones in H1 2026, providing reference cases for other agencies.",
                why_it_matters: "Successful replatforming references are accelerating business cases for agencies that had been hesitant to touch mission-critical legacy systems.",
                confidence: "High",
                conversation_hypothesis: "Use recent Nordic/APAC legacy replatforming go-lives as reference cases when proposing modernization roadmaps."
             }
          ],
          archetypes: [],
          gsi_hypotheses: [],
          watch_items: ["EU AI Act public-sector enforcement timeline", "Smart Nation 2.0 procurement cycles", "Pace of Nordic tax/welfare go-lives"],
          evidence: { "t1": ["EU AI Act public-sector provisions", "Singapore Smart Nation 2.0 blueprint"], "t2": ["McKinsey 2026 Government AI Readiness Report", "BCG Public Sector Data Foundations study"], "t3": ["Netcompany H1 2026 results", "NTT Data public sector modernization report"] }
      }
  },
  companies: [
      { company_id: 1, name: "Sopra Steria", ticker: "SOP.PA", industry: "Government", industry_role: "core", hq: "Paris, France", exchange: "Euronext Paris", market_cap: "€3.5B", employees: "~56,000", founded: "1968", priority: "Sovereignty & Resilience for Cloud and AI", summary: "A European IT consulting and digital services group, Sopra Steria delivers systems integration, digital identity, and sovereign cloud programs for national governments across France, the UK, and continental Europe.", latest_brief: { brief_id: 201, title: "Sopra Steria Q2 2026: Sovereign Cloud Wins Across EU", brief_date: "2026-08-08", qc_score: 4.6, summary: "Sopra Steria's public sector division reported continued momentum in Q2 2026 as national governments across the EU awarded new sovereign cloud and digital-identity contracts. The firm's long-standing relationships with European public institutions and its in-region data infrastructure positioned it well against global hyperscaler-led alternatives lacking sovereignty guarantees. Management highlighted digital ID programs as a particularly strong growth area." }, aliases: [] },
      { company_id: 2, name: "CGI Inc", ticker: "GIB", industry: "Government", industry_role: "core", hq: "Montreal, Quebec, Canada", exchange: "NYSE / TSX", market_cap: "€15B", employees: "~94,000", founded: "1976", priority: "AI-powered legacy modernization", summary: "A global IT consulting and outsourcing firm with a large European government practice, CGI provides systems integration, application management, and digital-government modernization services across the EU and APAC.", latest_brief: { brief_id: 202, title: "CGI Q2 2026: European Digital Government Demand Steady", brief_date: "2026-07-29", qc_score: 4.2, summary: "CGI's government services business showed steady demand in Q2 2026, with continued task order growth in European digital-government modernization and legacy application replatforming. The firm's global delivery model and long-tenured government relationships continue to support consistent, if modest, organic growth across its EU and APAC public sector accounts." }, aliases: ["CGI"] },
      { company_id: 3, name: "Fujitsu Limited", ticker: "6702.T", industry: "Government", industry_role: "core", hq: "Tokyo, Japan", exchange: "Tokyo Stock Exchange", market_cap: "¥6.2T (~$41B)", employees: "~124,000", founded: "1935", priority: "Sovereignty & Resilience for Cloud and AI", summary: "Japan's largest IT services company, Fujitsu is a lead systems integrator for the Japanese government's digital administration and sovereign cloud initiatives, and a major public sector technology provider across Asia-Pacific.", latest_brief: { brief_id: 203, title: "Fujitsu Q2 2026: Government Cloud Program Expansion", brief_date: "2026-08-05", qc_score: 4.5, summary: "Fujitsu reported continued expansion of its role in Japan's Government Cloud program in Q2 2026, alongside growing digital administration contracts across other APAC markets. Management emphasized sovereign infrastructure and AI governance capabilities as key differentiators as regional governments tighten data-residency requirements for public sector workloads." }, aliases: ["Fujitsu"] },
      { company_id: 4, name: "GovTech Singapore", ticker: "Public Body", industry: "Government", industry_role: "core", hq: "Singapore", exchange: "N/A (Singapore statutory board)", employees: "~4,000", founded: "2016", priority: "AI Impact with strong Data Foundations", summary: "The technology agency of the Singapore government, GovTech Singapore builds and operates the country's digital government infrastructure, including national digital identity (Singpass) and the Smart Nation 2.0 AI programs.", latest_brief: { brief_id: 204, title: "GovTech Singapore Expands Sovereign AI Stack", brief_date: "2026-08-15", qc_score: 4.7, summary: "GovTech Singapore's Q2 2026 update detailed continued rollout of AI copilots for caseworkers under the Smart Nation 2.0 blueprint, built on a unified whole-of-government data platform. The agency highlighted its position as a reference model for other APAC governments pursuing AI-ready digital infrastructure, with strong emphasis on data governance and sovereign compute capacity." }, aliases: ["GovTech"] },

      { company_id: 5, name: "Pearson plc", ticker: "PSON.L", industry: "Education & Research", industry_role: "core", hq: "London, United Kingdom", exchange: "London Stock Exchange", market_cap: "£7.2B", employees: "~19,000", founded: "1844", priority: "AI-powered legacy modernization", summary: "A global education and assessment company headquartered in the UK, Pearson provides curriculum, testing, and qualification services used extensively by European and Commonwealth public education and research institutions.", latest_brief: { brief_id: 205, title: "Pearson Q2 2026: AI-Assisted Assessment Rollout", brief_date: "2026-08-07", qc_score: 4.4, summary: "Pearson's Q2 2026 results highlighted continued growth in its qualifications and assessment business as European ministries of education adopted AI-assisted marking and personalized-learning tools at scale. Management pointed to modernization of legacy exam-administration systems as a multi-year opportunity across its core European public education markets." }, aliases: [] },
      { company_id: 6, name: "Kahoot!", ticker: "KHOT.OL", industry: "Education & Research", industry_role: "core", hq: "Oslo, Norway", exchange: "Oslo Stock Exchange", market_cap: "NOK 5.4B (~$500M)", employees: "~450", founded: "2012", priority: "AI Impact with strong Data Foundations", summary: "A Norwegian edtech company, Kahoot! provides game-based learning and assessment tools used widely in public school systems across Europe and increasingly in APAC.", latest_brief: { brief_id: 206, title: "Kahoot! Q2 2026: European School Adoption Grows", brief_date: "2026-08-04", qc_score: 4.3, summary: "Kahoot!'s Q2 2026 update reported continued adoption of its AI-personalized learning modules across Nordic and broader European public school systems. The company highlighted new data-analytics dashboards giving teachers classroom-level insight into learning gaps as a key driver of renewed public-sector contracts." }, aliases: [] },
      { company_id: 7, name: "RM plc", ticker: "RM.L", industry: "Education & Research", industry_role: "core", hq: "Abingdon, United Kingdom", exchange: "London Stock Exchange", market_cap: "£120M", employees: "~1,900", founded: "1973", priority: "Sovereignty & Resilience for Cloud and AI", summary: "A UK education technology and assessment company, RM plc supplies exam delivery, classroom technology, and educational resources to schools and public examination boards across the UK and Europe.", latest_brief: { brief_id: 207, title: "RM plc Half-Year 2026: Digital Exams Platform Growth", brief_date: "2026-08-02", qc_score: 4.1, summary: "RM plc's half-year 2026 results reflected growing adoption of its digital exam-delivery platform among UK and European examination boards, as public education bodies continue migrating away from paper-based assessment. Management cited data-security and in-region hosting requirements as a key reason public boards favored RM's UK/EU-based infrastructure." }, aliases: [] },
      { company_id: 8, name: "Benesse Holdings", ticker: "9783.T", industry: "Education & Research", industry_role: "core", hq: "Okayama, Japan", exchange: "Tokyo Stock Exchange", market_cap: "¥250B (~$1.7B)", employees: "~15,000", founded: "1955", priority: "AI-powered legacy modernization", summary: "A major Japanese education services company, Benesse Holdings provides correspondence learning, assessment, and research services used across Japan's public education system and increasingly other APAC markets.", latest_brief: { brief_id: 208, title: "Benesse Q2 2026: AI Tutoring Platform Scales", brief_date: "2026-08-13", qc_score: 4.5, summary: "Benesse Holdings reported accelerating adoption of its AI-assisted tutoring platform among Japanese public schools in Q2 2026, as the Ministry of Education continued rolling out national digital-learning standards. The company highlighted partnerships with local boards of education to modernize legacy assessment record systems as a key growth vector." }, aliases: [] },

      { company_id: 9, name: "NHS England", ticker: "Public Body", industry: "Healthcare", industry_role: "core", hq: "London, United Kingdom", exchange: "N/A (UK public body)", employees: "~1,300,000 (NHS workforce)", founded: "1948", priority: "AI-powered legacy modernization", summary: "England's national public health service, NHS England is running one of the largest public-sector legacy modernization programs in Europe, replatforming patient records and clinical systems onto AI-ready, sovereign cloud infrastructure.", latest_brief: { brief_id: 209, title: "NHS England Accelerates EHR Modernization", brief_date: "2026-08-14", qc_score: 4.6, summary: "NHS England's Q2 2026 update detailed continued progress migrating regional trusts onto a unified electronic health record platform, with AI-assisted clinical documentation moving from pilot to scaled deployment in several trusts. Data sovereignty and in-country hosting requirements remain central to the program's vendor selection criteria." }, aliases: ["NHS"] },
      { company_id: 10, name: "Better (Better Collective Health)", ticker: "Private", industry: "Healthcare", industry_role: "core", hq: "Bristol, United Kingdom / Oslo, Norway", exchange: "Private", employees: "~700", founded: "2004", priority: "Sovereignty & Resilience for Cloud and AI", summary: "A European health IT company, Better provides electronic health record and interoperability platforms used by public hospital networks across the UK, Nordics, and other European health systems.", latest_brief: { brief_id: 210, title: "Better Q2 2026: Nordic Public Hospital Rollout", brief_date: "2026-08-09", qc_score: 4.4, summary: "Better's Q2 2026 update highlighted new public hospital network deployments across the Nordics, where regional health authorities are prioritizing in-region hosted, interoperable EHR platforms ahead of tighter EU health-data sovereignty rules taking effect later in 2026." }, aliases: [] },
      { company_id: 11, name: "Assistance Publique – Hôpitaux de Paris (AP-HP)", ticker: "Public Body", industry: "Healthcare", industry_role: "core", hq: "Paris, France", exchange: "N/A (French public hospital system)", employees: "~100,000", founded: "1849", priority: "AI Impact with strong Data Foundations", summary: "Europe's largest public hospital system, AP-HP operates 39 hospitals across the Paris region and is a lead reference site for AI-assisted clinical research and unified patient-data platforms in French public healthcare.", latest_brief: { brief_id: 211, title: "AP-HP Q2 2026: Unified Clinical Data Platform Milestone", brief_date: "2026-08-06", qc_score: 4.5, summary: "AP-HP's Q2 2026 update reported a major milestone in its clinical data warehouse program, which now underpins AI-assisted research and decision-support tools across its 39-hospital network. The program is cited by French health authorities as a model for other regional hospital groups pursuing similar data-foundation investments." }, aliases: ["AP-HP"] },
      { company_id: 12, name: "Nihon Kohden", ticker: "6849.T", industry: "Healthcare", industry_role: "context", hq: "Tokyo, Japan", exchange: "Tokyo Stock Exchange", market_cap: "¥550B (~$3.7B)", employees: "~7,300", founded: "1951", priority: "Sovereignty & Resilience for Cloud and AI", summary: "A leading Japanese medical electronics manufacturer, Nihon Kohden supplies patient-monitoring and diagnostic equipment widely deployed across Japan's public hospital system and other APAC public health networks.", latest_brief: { brief_id: 212, title: "Nihon Kohden Q2 2026: Public Hospital Equipment Demand", brief_date: "2026-08-03", qc_score: 4.3, summary: "Nihon Kohden's Q2 2026 results reflected steady demand from Japanese public hospitals upgrading patient-monitoring infrastructure to support AI-assisted early-warning systems. The company continues to expand its footprint in other APAC public health markets pursuing similar modernization programs." }, aliases: [] },
      { company_id: 13, name: "SingHealth (Singapore Health Services)", ticker: "Public Body", industry: "Healthcare", industry_role: "core", hq: "Singapore", exchange: "N/A (Singapore public healthcare cluster)", employees: "~40,000", founded: "2000", priority: "AI Impact with strong Data Foundations", summary: "Singapore's largest public healthcare group, SingHealth operates the national electronic health record system and is a lead site for AI-assisted diagnostics deployed across the country's public hospitals and polyclinics.", latest_brief: { brief_id: 213, title: "SingHealth Q2 2026: National AI Diagnostics Expansion", brief_date: "2026-08-01", qc_score: 4.6, summary: "SingHealth's Q2 2026 update detailed the expansion of AI-assisted diagnostic tools across its public hospital network, building on the national electronic health record platform. The organization highlighted strong data governance as the foundation enabling rapid, safe scaling of clinical AI tools nationwide." }, aliases: ["SingHealth"] },

      { company_id: 14, name: "Civica", ticker: "Private", industry: "Public Administration", industry_role: "core", hq: "London, United Kingdom", exchange: "Private", employees: "~5,500", founded: "2001", priority: "AI-powered legacy modernization", summary: "A UK-headquartered software company, Civica supplies case-management, revenues and benefits, and back-office administration software used by local councils and public bodies across the UK, Ireland, and Australia.", latest_brief: { brief_id: 214, title: "Civica Wins Multi-Council Case Management Deal", brief_date: "2026-08-12", qc_score: 4.4, summary: "Civica's Q2 2026 update announced a new shared case-management platform contract spanning multiple UK local councils, replacing a patchwork of legacy administration systems. The company highlighted growing demand from local government for consolidated, cloud-native back-office platforms as a route to reducing IT sprawl." }, aliases: [] },
      { company_id: 15, name: "T-Systems International", ticker: "Private (Deutsche Telekom subsidiary)", industry: "Public Administration", industry_role: "core", hq: "Frankfurt, Germany", exchange: "Private", employees: "~26,000", founded: "2000", priority: "Sovereignty & Resilience for Cloud and AI", summary: "The IT services arm of Deutsche Telekom, T-Systems delivers sovereign cloud and digital administration platforms to German federal, state, and municipal public bodies.", latest_brief: { brief_id: 215, title: "T-Systems Q2 2026: German Sovereign Cloud for Public Admin", brief_date: "2026-08-10", qc_score: 4.5, summary: "T-Systems' Q2 2026 update highlighted continued rollout of its sovereign cloud platform for German public administration clients, positioned to meet strict data-residency requirements under evolving EU rules. The unit reported growing demand from state and municipal governments consolidating administrative IT onto in-country infrastructure." }, aliases: ["T-Systems"] },
      { company_id: 16, name: "Bechtle AG", ticker: "BC8.DE", industry: "Public Administration", industry_role: "core", hq: "Neckarsulm, Germany", exchange: "Frankfurt Stock Exchange (XETRA)", market_cap: "€3.9B", employees: "~15,700", founded: "1983", priority: "AI-powered legacy modernization", summary: "A German IT services and systems-integration group, Bechtle is a major supplier of hardware, software, and administration-system modernization services to German and Austrian public administration bodies.", latest_brief: { brief_id: 216, title: "Bechtle Q2 2026: Public Sector IT Modernization", brief_date: "2026-08-08", qc_score: 4.3, summary: "Bechtle's Q2 2026 results reflected continued growth in its public sector segment, driven by German municipal and state government demand for legacy administration system replacement and workplace modernization. Management noted a healthy pipeline of multi-year framework agreements with regional public bodies." }, aliases: [] },
      { company_id: 17, name: "Objective Corporation", ticker: "OCL.AX", industry: "Public Administration", industry_role: "core", hq: "Sydney, Australia", exchange: "Australian Securities Exchange", market_cap: "AU$1.2B (~$780M)", employees: "~750", founded: "1987", priority: "AI Impact with strong Data Foundations", summary: "An Australian govtech company, Objective Corporation supplies records management, regulatory, and case-management software used extensively by Australian and broader APAC public administration bodies.", latest_brief: { brief_id: 217, title: "Objective Corporation Half-Year 2026: APAC Public Admin Growth", brief_date: "2026-08-05", qc_score: 4.4, summary: "Objective Corporation's half-year 2026 results showed continued growth in its core Australian public administration business, alongside expanding contracts with regional government bodies elsewhere in APAC. The company highlighted new AI-assisted document classification features as a key driver of upsell within its existing public sector customer base." }, aliases: [] },
      { company_id: 18, name: "Almaviva S.p.A.", ticker: "Private", industry: "Public Administration", industry_role: "core", hq: "Rome, Italy", exchange: "Private", employees: "~8,000", founded: "1981", priority: "Sovereignty & Resilience for Cloud and AI", summary: "One of Italy's largest IT services companies, Almaviva delivers digital administration, justice, and local-government platforms for Italian public bodies, with an emphasis on sovereign, in-country data hosting.", latest_brief: { brief_id: 218, title: "Almaviva Q2 2026: Italian Public Administration Cloud Program", brief_date: "2026-08-03", qc_score: 4.2, summary: "Almaviva's Q2 2026 update detailed continued expansion of its sovereign cloud offering for Italian public administration clients, including justice-system digitization and regional government case-management platforms. The company positioned its Italy-based data infrastructure as a differentiator amid tightening EU data-residency expectations." }, aliases: [] },

      { company_id: 19, name: "IDEMIA", ticker: "Private", industry: "Public Security & Police", industry_role: "core", hq: "Courbevoie, France", exchange: "Private", employees: "~15,000", founded: "2017", priority: "Sovereignty & Resilience for Cloud and AI", summary: "A French biometric identity and security technology company, IDEMIA supplies civil identity documents, biometric border-control, and civil policing identification systems to governments across Europe and Asia-Pacific.", latest_brief: { brief_id: 219, title: "IDEMIA Expands Civil Biometric ID Programs", brief_date: "2026-08-11", qc_score: 4.5, summary: "IDEMIA's Q2 2026 update highlighted new civil biometric identity and border-management contracts across European and APAC governments, reinforcing its position as a leading non-US supplier of identity infrastructure for civil (non-military) government use cases. Management emphasized compliance with evolving EU biometric-data governance rules as a competitive advantage." }, aliases: [] },
      { company_id: 20, name: "Hexagon AB (Safety, Infrastructure & Geospatial)", ticker: "HEXA-B.ST", industry: "Public Security & Police", industry_role: "core", hq: "Stockholm, Sweden", exchange: "Nasdaq Stockholm", market_cap: "SEK 260B (~$25B, group)", employees: "~24,000 (group)", founded: "1992", priority: "AI Impact with strong Data Foundations", summary: "A Swedish technology group, Hexagon's Safety, Infrastructure & Geospatial division supplies emergency-response dispatch, public-safety analytics, and geospatial platforms used by civil policing and emergency services agencies across Europe and APAC.", latest_brief: { brief_id: 220, title: "Hexagon Q2 2026: Public Safety Analytics Growth", brief_date: "2026-08-09", qc_score: 4.4, summary: "Hexagon's Safety, Infrastructure & Geospatial division reported continued growth in Q2 2026 as European and APAC emergency-response agencies adopted its AI-assisted dispatch and incident-analytics platforms. The division highlighted several new civil (non-military) public-safety agency wins in the Nordics and Australia." }, aliases: ["Hexagon"] },
      { company_id: 21, name: "Genetec Inc.", ticker: "Private", industry: "Public Security & Police", industry_role: "core", hq: "Montreal, Quebec, Canada", exchange: "Private", employees: "~2,500", founded: "1997", priority: "Sovereignty & Resilience for Cloud and AI", summary: "A Canadian public-safety technology company, Genetec supplies video management and unified security platforms widely deployed by civil police forces and municipal safety agencies across Europe and Asia-Pacific.", latest_brief: { brief_id: 221, title: "Genetec Q2 2026: European Municipal Safety Deployments", brief_date: "2026-08-07", qc_score: 4.3, summary: "Genetec's Q2 2026 update reported expanding deployments of its unified video-management platform among European municipal police forces, with several new contracts emphasizing in-region data hosting to satisfy EU data-sovereignty requirements. The company reiterated its focus on civil public-safety use cases rather than military or intelligence markets." }, aliases: [] },
      { company_id: 22, name: "NEC Corporation", ticker: "6701.T", industry: "Public Security & Police", industry_role: "core", hq: "Tokyo, Japan", exchange: "Tokyo Stock Exchange", market_cap: "¥4.5T (~$30B)", employees: "~106,000", founded: "1899", priority: "AI Impact with strong Data Foundations", summary: "A major Japanese technology company, NEC is a global leader in biometric identification and forensic AI systems used by civil policing agencies across Japan, wider APAC, and Europe.", latest_brief: { brief_id: 222, title: "NEC Q2 2026: Biometric Forensics AI Adoption", brief_date: "2026-08-04", qc_score: 4.5, summary: "NEC's Q2 2026 results highlighted continued adoption of its biometric forensics and facial-recognition AI platforms among civil police agencies in Japan and other APAC markets, alongside growing interest from European public-safety agencies. Management stressed strict adherence to civil-use governance frameworks distinguishing these deployments from military applications." }, aliases: [] },

      { company_id: 23, name: "Serco Group", ticker: "SRP.L", industry: "Tax & Welfare", industry_role: "core", hq: "Hook, Hampshire, United Kingdom", exchange: "London Stock Exchange", market_cap: "£3.5B (~$4.5B)", employees: "~50,000", founded: "1929", priority: "AI-powered legacy modernization", summary: "A British multinational outsourcing company, Serco administers welfare-to-work, benefits, and citizen services programs on behalf of UK, European, and Australian government agencies.", latest_brief: { brief_id: 223, title: "Serco Half-Year 2026: Welfare Services Modernization", brief_date: "2026-08-06", qc_score: 4.5, summary: "Serco's half-year 2026 results highlighted continued growth in its welfare and benefits administration contracts across the UK and Australia, as government agencies modernize legacy caseworker systems with AI-assisted triage tools. The company continues to diversify its government services portfolio geographically across Europe and APAC." }, aliases: [] },
      { company_id: 24, name: "Netcompany Group", ticker: "NETC.CO", industry: "Tax & Welfare", industry_role: "core", hq: "Copenhagen, Denmark", exchange: "Nasdaq Copenhagen", market_cap: "DKK 15B (~$2.2B)", employees: "~7,500", founded: "2000", priority: "AI-powered legacy modernization", summary: "A Danish IT services company, Netcompany builds and operates large-scale digital platforms for Nordic and broader European tax, customs, and welfare agencies, known for major national system replatforming programs.", latest_brief: { brief_id: 224, title: "Netcompany Delivers Danish Customs Platform Milestone", brief_date: "2026-08-10", qc_score: 4.6, summary: "Netcompany's Q2 2026 update reported a major go-live milestone in its Danish customs and tax platform modernization program, replacing a decades-old mainframe system with a cloud-native architecture. The company highlighted this program as a reference case for similar large-scale legacy replatforming engagements elsewhere in the Nordics and continental Europe." }, aliases: [] },
      { company_id: 25, name: "Tietoevry", ticker: "TIETO.HE", industry: "Tax & Welfare", industry_role: "core", hq: "Espoo, Finland", exchange: "Nasdaq Helsinki / Stockholm", market_cap: "€1.6B", employees: "~24,000", founded: "1968", priority: "Sovereignty & Resilience for Cloud and AI", summary: "A Nordic IT services company, Tietoevry builds welfare, healthcare, and tax administration systems for Finnish, Swedish, and Norwegian government agencies, with strong emphasis on Nordic data sovereignty.", latest_brief: { brief_id: 225, title: "Tietoevry Q2 2026: Nordic Welfare Platform Renewal", brief_date: "2026-08-02", qc_score: 4.4, summary: "Tietoevry's Q2 2026 results reflected continued renewal activity across its Nordic welfare and tax administration contracts, as government clients prioritized in-region hosted platforms ahead of tightening EU data-sovereignty timelines. The company highlighted new AI-assisted fraud-detection modules as an emerging growth area within its public sector portfolio." }, aliases: [] },
      { company_id: 26, name: "NTT DATA Corporation", ticker: "9613.T", industry: "Tax & Welfare", industry_role: "core", hq: "Tokyo, Japan", exchange: "Tokyo Stock Exchange", market_cap: "¥3.1T (~$21B)", employees: "~190,000", founded: "1988", priority: "AI-powered legacy modernization", summary: "A global IT services company headquartered in Japan, NTT DATA delivers large-scale tax and social-welfare system modernization programs for Japanese and other APAC government agencies, alongside a growing European public sector practice.", latest_brief: { brief_id: 226, title: "NTT Data Q2 2026: APAC Tax Agency Modernization", brief_date: "2026-08-01", qc_score: 4.5, summary: "NTT DATA's Q2 2026 update highlighted continued progress on several APAC national tax agency modernization programs, migrating legacy mainframe systems onto AI-augmented, cloud-native platforms. The company also reported growing momentum in its European public sector practice, particularly around welfare-system data integration projects." }, aliases: ["NTT Data"] }
  ]
};
