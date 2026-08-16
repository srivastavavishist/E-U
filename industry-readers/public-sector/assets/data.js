window.EU_DATA = {
  meta: {
    product_name: "Public Sector & Government Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-16",
    company_count: 33,
    brief_count: 15,
    editorial_readout: "The public sector and federal defense contracting landscape in Q2 2026 is defined by a massive shift towards zero-trust architectures, AI-driven modernization, and accelerated defense procurement cycles. Major contractors like Booz Allen Hamilton and Leidos reported strong Q2 results, citing robust federal budgets allocated to digital transformation and national security. Analyst reports from McKinsey and BCG highlight a 22% increase in government cloud adoption year-over-year, alongside stringent compliance requirements stemming from the recent CMMC 3.0 rollout.\n\nFurthermore, defense spending remains heavily skewed towards autonomous systems, cybersecurity resilience, and interoperability across allied defense networks. Regulatory pressures are mounting as agencies seek to control consulting spend while simultaneously demanding higher ROI on complex IT overhauls. The market is consolidating, with mid-tier contractors being absorbed by top-tier primes aiming to secure larger, multi-year mega-contracts."
  },
  industry_cards: [
    {
      id: "defense-intelligence",
      db_industry: "Defense & Intelligence",
      name: "Defense & Intelligence",
      eyebrow: "AI & Autonomous Systems Surge",
      top_trend: "A sharp pivot towards AI-enabled autonomous defense systems and cyber-resilience frameworks, driven by global geopolitical tensions.",
      readout: "Q2 2026 earnings from leading defense primes indicate record backlogs, with a 15% increase in funding for unmanned systems and JADC2 (Joint All-Domain Command and Control) initiatives.",
      monitored_count: 8,
      core_count: 5,
      context_count: 0,
      readout_as_of: "2026-08-15",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=defense-intelligence"
    },
    {
      id: "federal-civilian",
      db_industry: "Federal Civilian Agencies",
      name: "Federal Civilian IT",
      eyebrow: "Cloud & Zero Trust Mandates",
      top_trend: "Accelerated migration to multi-cloud environments coupled with mandatory zero-trust security implementations across all civilian agencies.",
      readout: "Service providers note a surge in task orders related to legacy system retirement. McKinsey reports suggest legacy IT still consumes 70% of federal budgets, presenting massive modernization opportunities.",
      monitored_count: 5,
      core_count: 3,
      context_count: 0,
      readout_as_of: "2026-08-14",
      freshness_status: "CURRENT",
      freshness_age_days: 2,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=federal-civilian"
    },
    {
      id: "state-local",
      db_industry: "State & Local Government",
      name: "State & Local",
      eyebrow: "Citizen Experience & Analytics",
      top_trend: "State and local governments are investing heavily in citizen-facing portals and predictive analytics for public health and infrastructure management.",
      readout: "Bain & Company highlights a 30% increase in state-level digital service investments, although budget constraints due to inflation remain a headwind.",
      monitored_count: 4,
      core_count: 2,
      context_count: 0,
      readout_as_of: "2026-08-10",
      freshness_status: "CURRENT",
      freshness_age_days: 6,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=state-local"
    }
  ],
  industry_pages: {
     "defense-intelligence": {
        id: "defense-intelligence",
        db_industry: "Defense & Intelligence",
        name: "Defense & Intelligence",
        eyebrow: "AI & Autonomous Systems Surge",
        latest_brief: { brief_id: 101, title: "Lockheed & Northrop Report Record Q2 Backlogs", brief_date: "2026-08-15", qc_score: 4.9 },
        summary: { top_trend: "AI-enabled autonomous systems", readout: "Significant funding increase for JADC2 initiatives and cybersecurity." },
        counts: { industry: 8, monitored_count: 8, core_count: 5, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "federal-civilian": {
        id: "federal-civilian",
        db_industry: "Federal Civilian Agencies",
        name: "Federal Civilian IT",
        eyebrow: "Cloud & Zero Trust Mandates",
        latest_brief: { brief_id: 102, title: "CISA Mandates Accelerated Zero Trust Adoption", brief_date: "2026-08-12", qc_score: 4.7 },
        summary: { top_trend: "Zero-trust and cloud migration", readout: "Legacy IT retirement is the top priority for civilian agencies." },
        counts: { industry: 5, monitored_count: 5, core_count: 3, context_count: 0 },
        presentation_mode: "canonical_brief"
     },
     "state-local": {
        id: "state-local",
        db_industry: "State & Local Government",
        name: "State & Local",
        eyebrow: "Citizen Experience & Analytics",
        latest_brief: { brief_id: 103, title: "NASCIO Report Highlights Digital Identity Focus", brief_date: "2026-08-10", qc_score: 4.6 },
        summary: { top_trend: "Citizen experience improvements", readout: "Focus on predictive analytics and digital service portals." },
        counts: { industry: 4, monitored_count: 4, core_count: 2, context_count: 0 },
        presentation_mode: "canonical_brief"
     }
  },
  pilot_industries: {
      "defense-intelligence": {
          trends: [
             {
                trend_id: "t1",
                display_order: 1,
                name: "Proliferation of Autonomous Swarm Tech",
                tracked_since: "2026-01",
                monthly_change: "ACCELERATING",
                momentum: "Persistent",
                breadth: "Broad",
                evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
                current_readout: "Q2 2026 earnings calls from Kratos and Anduril highlight major contract wins for low-cost, attritable autonomous drones. The DoD's Replicator initiative is driving massive capital influx.",
                what_changed: "The Pentagon officially greenlit Phase 2 of the Replicator program in July 2026, releasing $1.2B in new funding.",
                why_it_matters: "Contractors not aligning with rapid prototyping and modular open systems architecture (MOSA) risk losing significant market share.",
                confidence: "High",
                conversation_hypothesis: "Advise clients to partner with agile tech firms to quickly integrate AI capabilities into existing platforms."
             },
             {
                trend_id: "t2",
                display_order: 2,
                name: "Stringent CMMC 3.0 Compliance Enforcement",
                tracked_since: "2025-06",
                monthly_change: "STABLE",
                momentum: "Steady",
                breadth: "Universal",
                evidence_strength: "REGULATORY_MANDATE",
                current_readout: "With the finalization of CMMC 3.0 rules in early 2026, the DoD is now actively disqualifying non-compliant bids. BCG reports that up to 30% of tier-3 suppliers are struggling to meet the new standards.",
                what_changed: "Implementation of strict pass/fail cybersecurity audits during the source selection phase.",
                why_it_matters: "Prime contractors must heavily vet their supply chains or risk entire program disqualifications.",
                confidence: "High",
                conversation_hypothesis: "Discuss supply chain risk management and automated compliance monitoring tools as essential differentiators."
             }
          ],
          archetypes: [],
          gsi_hypotheses: [],
          watch_items: ["Consolidation among mid-tier defense tech firms", "Pace of JADC2 contract awards"],
          evidence: { "t1": ["DoD Replicator Phase 2 Announcement", "Q2 2026 Earnings Transcripts - Defense Primes"], "t2": ["BCG Report: Supply Chain Resilience in Defense", "Federal Register: CMMC 3.0 Final Rule"] }
      }
  },
  companies: [
      { company_id: 1, name: "Lockheed Martin", ticker: "LMT", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 201, title: "LMT Q2 2026: Margin Expansion on F-35 Upgrades", brief_date: "2026-07-25", qc_score: 4.8 }, aliases: ["Lockheed"] },
      { company_id: 2, name: "Northrop Grumman", ticker: "NOC", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 202, title: "NOC Q2 2026: Space Systems Growth Leads", brief_date: "2026-07-28", qc_score: 4.7 }, aliases: ["Northrop"] },
      { company_id: 3, name: "General Dynamics", ticker: "GD", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 203, title: "GD Q2 2026: IT Services Segment Rebounds", brief_date: "2026-07-26", qc_score: 4.6 }, aliases: [] },
      { company_id: 4, name: "Booz Allen Hamilton", ticker: "BAH", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 204, title: "BAH Q2 2026: AI Consulting Revenues Surge", brief_date: "2026-07-30", qc_score: 4.9 }, aliases: ["Booz Allen"] },
      { company_id: 5, name: "Leidos", ticker: "LDOS", industry: "Federal Civilian Agencies", industry_role: "core", latest_brief: { brief_id: 205, title: "Leidos Q2 2026: Health IT Contracts Drive Growth", brief_date: "2026-08-01", qc_score: 4.5 }, aliases: [] },
      { company_id: 6, name: "CACI International", ticker: "CACI", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 206, title: "CACI Q2 2026: Strong Win Rate on Classified Programs", brief_date: "2026-08-05", qc_score: 4.4 }, aliases: ["CACI"] },
      { company_id: 7, name: "Science Applications International", ticker: "SAIC", industry: "Federal Civilian Agencies", industry_role: "core", latest_brief: { brief_id: 207, title: "SAIC Q2 2026: Cloud Migration Focus", brief_date: "2026-08-08", qc_score: 4.3 }, aliases: ["SAIC"] },
      { company_id: 8, name: "Palantir Technologies", ticker: "PLTR", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 208, title: "PLTR Q2 2026: Government Revenue Hits New Highs", brief_date: "2026-08-10", qc_score: 4.8 }, aliases: ["Palantir"] },
      { company_id: 9, name: "Parsons Corporation", ticker: "PSN", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 209, title: "Parsons Q2 2026: Infrastructure & Cyber Growth", brief_date: "2026-08-02", qc_score: 4.5 }, aliases: ["Parsons"] },
      { company_id: 10, name: "Tyler Technologies", ticker: "TYL", industry: "State & Local Government", industry_role: "core", latest_brief: { brief_id: 210, title: "TYL Q2 2026: SaaS Transformation Nears Completion", brief_date: "2026-07-24", qc_score: 4.7 }, aliases: ["Tyler"] },
      { company_id: 11, name: "CGI Inc", ticker: "GIB", industry: "Federal Civilian Agencies", industry_role: "core", latest_brief: { brief_id: 211, title: "CGI Q2 2026: Steady Government Demand", brief_date: "2026-07-29", qc_score: 4.2 }, aliases: ["CGI"] },
      { company_id: 12, name: "Maximus", ticker: "MMS", industry: "State & Local Government", industry_role: "core", latest_brief: { brief_id: 212, title: "Maximus Q2 2026: Health Services Expansion", brief_date: "2026-08-04", qc_score: 4.4 }, aliases: [] },
      { company_id: 13, name: "ManTech International", ticker: "Private", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 213, title: "ManTech Secures Major Cyber Contract", brief_date: "2026-08-11", qc_score: 4.6 }, aliases: ["ManTech"] },
      { company_id: 14, name: "Anduril Industries", ticker: "Private", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 214, title: "Anduril Valuation Soars on DoD Wins", brief_date: "2026-08-14", qc_score: 4.9 }, aliases: ["Anduril"] },
      { company_id: 15, name: "Cisco Systems", ticker: "CSCO", industry: "Federal Civilian Agencies", industry_role: "context", latest_brief: { brief_id: 215, title: "Cisco Q2 2026: Federal Network Modernization Spend", brief_date: "2026-08-13", qc_score: 4.5 }, aliases: ["Cisco"] },
      { company_id: 16, name: "Accenture Federal", ticker: "ACN", industry: "Federal Civilian Agencies", industry_role: "core", latest_brief: { brief_id: 216, title: "ACN Q2 2026: Federal Digital Transformation Drives Growth", brief_date: "2026-07-28", qc_score: 4.8 }, aliases: ["Accenture"] },
      { company_id: 17, name: "DXC Technology", ticker: "DXC", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 217, title: "DXC Q2 2026: Stabilization in Public Sector Unit", brief_date: "2026-08-01", qc_score: 4.2 }, aliases: ["DXC"] },
      { company_id: 18, name: "Unison", ticker: "Private", industry: "Federal Civilian Agencies", industry_role: "core", latest_brief: { brief_id: 218, title: "Unison Launches New AI-Driven Acquisition Suite", brief_date: "2026-08-05", qc_score: 4.6 }, aliases: [] },
      { company_id: 19, name: "Engility", ticker: "Private", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 219, title: "Engility Absorbed into SAIC Ecosystem", brief_date: "2026-08-10", qc_score: 4.1 }, aliases: [] },
      { company_id: 20, name: "Amentum", ticker: "Private", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 220, title: "Amentum Wins Key Base Operations Contract", brief_date: "2026-08-12", qc_score: 4.5 }, aliases: [] },
      { company_id: 21, name: "KBR Government", ticker: "KBR", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 221, title: "KBR Q2 2026: Space and Defense Expansion", brief_date: "2026-07-29", qc_score: 4.7 }, aliases: ["KBR"] },
      { company_id: 22, name: "Jacobs Engineering", ticker: "J", industry: "Defense & Intelligence", industry_role: "core", latest_brief: { brief_id: 222, title: "Jacobs Q2 2026: Separation of Critical Mission Solutions", brief_date: "2026-08-03", qc_score: 4.6 }, aliases: ["Jacobs"] },
      { company_id: 23, name: "Serco Group", ticker: "SRP.L", industry: "Federal Civilian Agencies", industry_role: "core", latest_brief: { brief_id: 223, title: "Serco Half-Year 2026: North America Public Sector Growth", brief_date: "2026-08-06", qc_score: 4.5 }, aliases: ["Serco"] },
      { company_id: 24, name: "Sopra Steria", ticker: "SOP.PA", industry: "Federal Civilian Agencies", industry_role: "core", latest_brief: { brief_id: 224, title: "Sopra Steria Gains Market Share in European Public Sector", brief_date: "2026-08-08", qc_score: 4.4 }, aliases: [] },
      { company_id: 25, name: "Atos", ticker: "ATO.PA", industry: "State & Local Government", industry_role: "core", latest_brief: { brief_id: 225, title: "Atos Public Sector Restructuring Progress", brief_date: "2026-08-11", qc_score: 4.3 }, aliases: ["Atos"] },
      { company_id: 26, name: "Conduent", ticker: "CNDT", industry: "State & Local Government", industry_role: "core", latest_brief: { brief_id: 226, title: "Conduent Q2 2026: Government Payments Modernization", brief_date: "2026-08-07", qc_score: 4.5 }, aliases: [] },
      { company_id: 27, name: "Granicus", ticker: "Private", industry: "State & Local Government", industry_role: "core", latest_brief: { brief_id: 227, title: "Granicus Integrates Civic Engagement Platform", brief_date: "2026-08-09", qc_score: 4.6 }, aliases: [] },
      { company_id: 28, name: "NIC Inc", ticker: "Private", industry: "State & Local Government", industry_role: "core", latest_brief: { brief_id: 228, title: "NIC Inc Continues State E-Government Dominance", brief_date: "2026-08-13", qc_score: 4.7 }, aliases: ["NIC"] },
      { company_id: 29, name: "Socrata", ticker: "Private", industry: "State & Local Government", industry_role: "core", latest_brief: { brief_id: 229, title: "Socrata Open Data Initiative Gains Traction", brief_date: "2026-08-14", qc_score: 4.5 }, aliases: [] },
      { company_id: 30, name: "Esri", ticker: "Private", industry: "State & Local Government", industry_role: "context", latest_brief: { brief_id: 230, title: "Esri Expands GIS Cloud Capabilities for Municipalities", brief_date: "2026-08-10", qc_score: 4.8 }, aliases: [] },
      { company_id: 31, name: "Oracle Public Sector", ticker: "ORCL", industry: "Federal Civilian Agencies", industry_role: "context", latest_brief: { brief_id: 231, title: "Oracle Expands Government Cloud Regions", brief_date: "2026-08-02", qc_score: 4.8 }, aliases: ["Oracle"] },
      { company_id: 32, name: "AWS GovCloud", ticker: "AMZN", industry: "Defense & Intelligence", industry_role: "context", latest_brief: { brief_id: 232, title: "AWS Secure Cloud Dominates DoD Replicator Requirements", brief_date: "2026-08-15", qc_score: 4.9 }, aliases: ["AWS"] },
      { company_id: 33, name: "Microsoft Azure Government", ticker: "MSFT", industry: "Defense & Intelligence", industry_role: "context", latest_brief: { brief_id: 233, title: "Azure Gov Secures Zero-Trust Mega Contract", brief_date: "2026-08-12", qc_score: 4.9 }, aliases: ["Azure"] }
  ]
};
