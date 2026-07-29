/* ─────────────────────────────────────────────────────────────────────────
   ENERGY INTELLIGENCE · data.js
   Independent public-source research for the Energy & Utilities sector
   ───────────────────────────────────────────────────────────────────────── */

window.EI_DATA = {
  meta: {
    edition: "July 2026",
    updated: "2026-07-29",
    tagline: "Independent Energy & Utilities Intelligence",
    description: "Public-source company and sector research for the global energy industry."
  },

  sectors: [
    { id: "oil-gas",        label: "Oil & Gas",             icon: "⛽", color: "#f59e0b" },
    { id: "renewables",     label: "Renewables",            icon: "☀️", color: "#22c55e" },
    { id: "utilities",      label: "Utilities",             icon: "⚡", color: "#3b82f6" },
    { id: "nuclear",        label: "Nuclear",               icon: "⚛️", color: "#8b5cf6" },
    { id: "lng",            label: "LNG & Pipelines",       icon: "🔧", color: "#06b6d4" },
    { id: "storage",        label: "Energy Storage",        icon: "🔋", color: "#10b981" },
    { id: "hydrogen",       label: "Hydrogen",              icon: "💧", color: "#6366f1" },
    { id: "grid",           label: "Grid & Transmission",   icon: "🔌", color: "#f97316" }
  ],

  companies: [
    /* ── Oil & Gas ────────────────────────────────────────────────── */
    {
      id: "shell", name: "Shell plc", ticker: "SHEL", exchange: "NYSE",
      sector: "oil-gas", hq: "London, UK", founded: 1907,
      summary: "Integrated energy major with significant LNG, refining, and renewables positions. Executing an accelerated energy transition strategy.",
      marketCap: "$200B", employees: "86,000",
      tags: ["integrated", "lng", "upstream", "downstream"],
      reports: [
        { date: "2026-07-15", type: "Earnings", title: "Q2 2026 Results: Adjusted earnings $4.8B on stronger gas margins", sentiment: "positive" },
        { date: "2026-06-20", type: "Strategy", title: "Shell accelerates Powering Progress – targets 10 GW renewables by 2030", sentiment: "positive" },
        { date: "2026-05-10", type: "M&A", title: "Shell acquires solar portfolio in Spain for $1.2B", sentiment: "positive" }
      ]
    },
    {
      id: "exxon", name: "ExxonMobil", ticker: "XOM", exchange: "NYSE",
      sector: "oil-gas", hq: "Spring, TX, USA", founded: 1999,
      summary: "Largest US oil major. Pioneer acquisition transforms upstream profile; carbon capture and low-emission fuels are strategic bets.",
      marketCap: "$460B", employees: "61,500",
      tags: ["integrated", "upstream", "carbon-capture"],
      reports: [
        { date: "2026-07-26", type: "Earnings", title: "Q2 2026: Record downstream earnings; upstream volumes up 15% post-Pioneer", sentiment: "positive" },
        { date: "2026-06-15", type: "Strategy", title: "ExxonMobil expands low-carbon hydrogen plant in Baytown, TX", sentiment: "neutral" },
        { date: "2026-05-22", type: "Regulatory", title: "EPA approves Phase 2 of Baytown CCS project", sentiment: "positive" }
      ]
    },
    {
      id: "bp", name: "BP plc", ticker: "BP", exchange: "NYSE",
      sector: "oil-gas", hq: "London, UK", founded: 1909,
      summary: "UK energy major repositioning toward gas and low-carbon. CEO Murray Auchincloss refocused on capital discipline after Looney-era overshooting.",
      marketCap: "$95B", employees: "87,000",
      tags: ["integrated", "gas", "renewables"],
      reports: [
        { date: "2026-07-22", type: "Earnings", title: "Q2 2026: Underlying RC profit $2.3B; dividend maintained at $0.08", sentiment: "neutral" },
        { date: "2026-06-05", type: "Strategy", title: "BP trims renewables ambition, doubles down on Gulf of Mexico deepwater", sentiment: "mixed" },
        { date: "2026-04-30", type: "M&A", title: "BP divests wind assets in Scotland to focus on core oil portfolio", sentiment: "mixed" }
      ]
    },
    {
      id: "chevron", name: "Chevron Corporation", ticker: "CVX", exchange: "NYSE",
      sector: "oil-gas", hq: "San Ramon, CA, USA", founded: 1879,
      summary: "US major with strong Permian and Kazakhstan positions. Hess acquisition adds Guyana exposure and long-term growth optionality.",
      marketCap: "$285B", employees: "45,000",
      tags: ["integrated", "permian", "guyana"],
      reports: [
        { date: "2026-07-25", type: "Earnings", title: "Q2 2026: EPS $2.97, Permian production hits 1.0 MMboe/d milestone", sentiment: "positive" },
        { date: "2026-06-30", type: "M&A", title: "Chevron-Hess integration on track; first Guyana cargo delivered", sentiment: "positive" }
      ]
    },
    {
      id: "totalenergies", name: "TotalEnergies SE", ticker: "TTE", exchange: "NYSE",
      sector: "oil-gas", hq: "Courbevoie, France", founded: 1924,
      summary: "French supermajor with the most ambitious renewables buildout among oil majors. LNG leadership and solar/wind portfolio growing rapidly.",
      marketCap: "$150B", employees: "101,000",
      tags: ["integrated", "lng", "renewables", "solar"],
      reports: [
        { date: "2026-07-25", type: "Earnings", title: "Q2 2026: Net income $4.0B; renewables generation now 25 TWh/year", sentiment: "positive" },
        { date: "2026-05-28", type: "Strategy", title: "TotalEnergies commits $5B to offshore wind in North Sea by 2028", sentiment: "positive" }
      ]
    },

    /* ── Renewables ───────────────────────────────────────────────── */
    {
      id: "nextera", name: "NextEra Energy", ticker: "NEE", exchange: "NYSE",
      sector: "renewables", hq: "Juno Beach, FL, USA", founded: 1925,
      summary: "World's largest generator of renewable energy from wind and solar. Florida Power & Light subsidiary provides stable regulated earnings base.",
      marketCap: "$155B", employees: "16,000",
      tags: ["wind", "solar", "regulated", "utility"],
      reports: [
        { date: "2026-07-23", type: "Earnings", title: "Q2 2026: Adj. EPS $1.04; 3.5 GW new renewables contracted in H1", sentiment: "positive" },
        { date: "2026-06-12", type: "Strategy", title: "NextEra targets 100 GW clean energy backlog by 2030", sentiment: "positive" },
        { date: "2026-05-14", type: "Regulatory", title: "FPL rate case settlement approved; $2.5B grid hardening plan begins", sentiment: "positive" }
      ]
    },
    {
      id: "orsted", name: "Ørsted A/S", ticker: "ORSTED", exchange: "CPH",
      sector: "renewables", hq: "Fredericia, Denmark", founded: 2006,
      summary: "Global leader in offshore wind. Navigating challenging macro – US offshore cancellations impacted 2024-25 but pipeline remains globally diversified.",
      marketCap: "$28B", employees: "8,700",
      tags: ["offshore-wind", "wind", "europe"],
      reports: [
        { date: "2026-07-10", type: "Earnings", title: "H1 2026: EBITDA DKK 13.2B; Taiwan and German projects commissioning on track", sentiment: "neutral" },
        { date: "2026-06-01", type: "Strategy", title: "Ørsted rebalances US offshore portfolio after 2025 impairments", sentiment: "mixed" }
      ]
    },
    {
      id: "iberdrola", name: "Iberdrola S.A.", ticker: "IBE", exchange: "BME",
      sector: "renewables", hq: "Bilbao, Spain", founded: 1901,
      summary: "Top-3 global renewables company. Expanding aggressively in US (Avangrid), UK (ScottishPower), and Brazil. Networks and offshore wind are growth drivers.",
      marketCap: "$110B", employees: "41,000",
      tags: ["wind", "solar", "networks", "offshore-wind"],
      reports: [
        { date: "2026-07-16", type: "Earnings", title: "H1 2026 net profit €2.9B, up 12% – US networks and offshore key drivers", sentiment: "positive" },
        { date: "2026-05-20", type: "M&A", title: "Iberdrola acquires PNM Resources for $8.3B, boosting US regulated footprint", sentiment: "positive" }
      ]
    },
    {
      id: "enel", name: "Enel S.p.A.", ticker: "ENEL", exchange: "BIT",
      sector: "renewables", hq: "Rome, Italy", founded: 1962,
      summary: "Europe's largest utility by capacity. Multi-country renewables, retail, and networks business. Executing portfolio rationalisation for debt reduction.",
      marketCap: "$68B", employees: "65,000",
      tags: ["wind", "solar", "networks", "utility"],
      reports: [
        { date: "2026-07-18", type: "Earnings", title: "H1 2026: EBITDA €10.3B; 4 GW new renewables commissioned ytd", sentiment: "positive" },
        { date: "2026-06-08", type: "Strategy", title: "Enel completes €3B asset disposal programme ahead of schedule", sentiment: "positive" }
      ]
    },

    /* ── Utilities ────────────────────────────────────────────────── */
    {
      id: "duke", name: "Duke Energy", ticker: "DUK", exchange: "NYSE",
      sector: "utilities", hq: "Charlotte, NC, USA", founded: 1904,
      summary: "One of the largest US regulated utilities. Significant rate cases ongoing. Transitioning coal fleet to gas and renewables under IRP.",
      marketCap: "$82B", employees: "28,000",
      tags: ["regulated", "electric", "gas", "carolinas"],
      reports: [
        { date: "2026-07-08", type: "Earnings", title: "Q2 2026: EPS $1.18; confirms 5-7% EPS CAGR through 2028", sentiment: "positive" },
        { date: "2026-05-30", type: "Regulatory", title: "NC Utilities Commission approves $4.0B Duke grid modernisation filing", sentiment: "positive" }
      ]
    },
    {
      id: "southern", name: "Southern Company", ticker: "SO", exchange: "NYSE",
      sector: "utilities", hq: "Atlanta, GA, USA", founded: 1945,
      summary: "Georgia Power parent. Vogtle Units 3 & 4 nuclear milestone achieved in 2024. Clean energy transition with hydrogen and CCS investments accelerating.",
      marketCap: "$92B", employees: "30,000",
      tags: ["regulated", "nuclear", "electric", "gas"],
      reports: [
        { date: "2026-07-17", type: "Earnings", title: "Q2 2026: EPS $0.89; Vogtle contributing to base load reliability", sentiment: "positive" },
        { date: "2026-06-22", type: "Strategy", title: "Southern Power signs 1.2 GW solar PPA with Google for Georgia data centres", sentiment: "positive" }
      ]
    },
    {
      id: "dominion", name: "Dominion Energy", ticker: "D", exchange: "NYSE",
      sector: "utilities", hq: "Richmond, VA, USA", founded: 1983,
      summary: "Mid-Atlantic regulated utility refocused post-Questar and gas transmission divestitures. Virginia offshore wind and regulated solar key growth planks.",
      marketCap: "$45B", employees: "16,200",
      tags: ["regulated", "electric", "offshore-wind", "virginia"],
      reports: [
        { date: "2026-07-20", type: "Earnings", title: "Q2 2026: Operating EPS $0.67; CVOW project Phase 1 turbines now operating", sentiment: "positive" },
        { date: "2026-06-18", type: "Regulatory", title: "Virginia SCC approves second tranche of Coastal Virginia Offshore Wind", sentiment: "positive" }
      ]
    },

    /* ── Nuclear ──────────────────────────────────────────────────── */
    {
      id: "constellation", name: "Constellation Energy", ticker: "CEG", exchange: "NASDAQ",
      sector: "nuclear", hq: "Baltimore, MD, USA", founded: 2022,
      summary: "Largest clean energy company in the US. Pure-play nuclear fleet of 21 GW powers AI hyperscalers via landmark Microsoft and Google PPAs. Three Mile Island Unit 1 restarted.",
      marketCap: "$90B", employees: "12,500",
      tags: ["nuclear", "clean-energy", "ppa", "ai-datacenters"],
      reports: [
        { date: "2026-07-22", type: "Earnings", title: "Q2 2026: Adj. EBITDA $1.65B; TMI-1 running above 90% capacity factor", sentiment: "positive" },
        { date: "2026-07-01", type: "M&A", title: "Constellation signs 20-year nuclear PPA with Amazon Web Services for 2 GW", sentiment: "positive" },
        { date: "2026-06-15", type: "Strategy", title: "Constellation files Crane Clean Energy Center SMR application", sentiment: "positive" }
      ]
    },
    {
      id: "kairos", name: "Kairos Power", ticker: "Private", exchange: "—",
      sector: "nuclear", hq: "Alameda, CA, USA", founded: 2016,
      summary: "Advanced nuclear startup deploying fluoride salt-cooled high-temperature reactor. DOE loan guarantee and Google partnership de-risk commercialisation path.",
      marketCap: "Private", employees: "600",
      tags: ["smr", "advanced-nuclear", "startup"],
      reports: [
        { date: "2026-07-03", type: "Regulatory", title: "NRC issues construction permit for Hermes 2 demonstration reactor", sentiment: "positive" },
        { date: "2026-05-25", type: "Strategy", title: "Kairos Power raises $500M Series D to accelerate Hermes build-out", sentiment: "positive" }
      ]
    },

    /* ── LNG & Pipelines ──────────────────────────────────────────── */
    {
      id: "cheniere", name: "Cheniere Energy", ticker: "LNG", exchange: "NYSE",
      sector: "lng", hq: "Houston, TX, USA", founded: 2001,
      summary: "Largest US LNG exporter. Sabine Pass and Corpus Christi trains operating at high utilisation. Corpus Christi Stage 3 FID taken.",
      marketCap: "$45B", employees: "1,900",
      tags: ["lng", "export", "natural-gas", "infrastructure"],
      reports: [
        { date: "2026-07-24", type: "Earnings", title: "Q2 2026: Consolidated Adj. EBITDA $1.45B; all trains running above nameplate", sentiment: "positive" },
        { date: "2026-06-20", type: "Strategy", title: "Cheniere progresses Sabine Pass expansion; mid-scale trains FID expected Q4", sentiment: "positive" }
      ]
    },
    {
      id: "kinder", name: "Kinder Morgan", ticker: "KMI", exchange: "NYSE",
      sector: "lng", hq: "Houston, TX, USA", founded: 1997,
      summary: "Largest natural gas pipeline operator in North America. Tennessee Gas Pipeline and El Paso Natural Gas backbones serve industrial, LNG, and power demand.",
      marketCap: "$25B", employees: "10,800",
      tags: ["pipeline", "natural-gas", "midstream", "infrastructure"],
      reports: [
        { date: "2026-07-17", type: "Earnings", title: "Q2 2026: DCF $1.18B; $3B project backlog on AI data-centre gas demand", sentiment: "positive" },
        { date: "2026-05-15", type: "Strategy", title: "Kinder Morgan greenfields 500 MMcf/d capacity in Gulf Coast LNG corridor", sentiment: "positive" }
      ]
    },

    /* ── Energy Storage ───────────────────────────────────────────── */
    {
      id: "fluence", name: "Fluence Energy", ticker: "FLNC", exchange: "NASDAQ",
      sector: "storage", hq: "Arlington, VA, USA", founded: 2018,
      summary: "Leading grid-scale battery storage company (Siemens/AES JV). AI-driven Mosaic OS platform optimises dispatch across global fleet.",
      marketCap: "$3.2B", employees: "900",
      tags: ["bess", "grid-storage", "ai", "software"],
      reports: [
        { date: "2026-07-08", type: "Earnings", title: "FQ3 2026: Revenue $490M; backlog hits $4.9B as utility demand surges", sentiment: "positive" },
        { date: "2026-06-25", type: "Strategy", title: "Fluence launches next-gen Gridstack product with 6-hour duration", sentiment: "positive" }
      ]
    },
    {
      id: "form-energy", name: "Form Energy", ticker: "Private", exchange: "—",
      sector: "storage", hq: "Weirton, WV, USA", founded: 2017,
      summary: "Developing 100-hour iron-air battery technology for multi-day grid storage. First commercial plant in Georgia in commissioning. GE Vernova partnership announced.",
      marketCap: "Private", employees: "800",
      tags: ["iron-air", "long-duration", "startup"],
      reports: [
        { date: "2026-06-30", type: "Strategy", title: "Form Energy signs 500 MWh deployment agreement with Georgia Power", sentiment: "positive" },
        { date: "2026-05-15", type: "Strategy", title: "Form Energy raises $450M Series F to scale Weirton manufacturing", sentiment: "positive" }
      ]
    },

    /* ── Hydrogen ─────────────────────────────────────────────────── */
    {
      id: "air-products", name: "Air Products", ticker: "APD", exchange: "NYSE",
      sector: "hydrogen", hq: "Allentown, PA, USA", founded: 1940,
      summary: "Industrial gas leader pivoting to clean hydrogen mega-projects. NEOM Green Hydrogen in Saudi Arabia and Alberta Clean Hydrogen are flagship developments.",
      marketCap: "$52B", employees: "22,000",
      tags: ["green-hydrogen", "industrial-gas", "infrastructure"],
      reports: [
        { date: "2026-07-26", type: "Earnings", title: "Q3 FY2026: Adj. EPS $3.30; NEOM construction 70% complete", sentiment: "positive" },
        { date: "2026-06-10", type: "Strategy", title: "Air Products secures EU hydrogen banking facility for $1.5B", sentiment: "positive" }
      ]
    },
    {
      id: "plug-power", name: "Plug Power", ticker: "PLUG", exchange: "NASDAQ",
      sector: "hydrogen", hq: "Latham, NY, USA", founded: 1997,
      summary: "Fuel cell and green hydrogen leader. Navigating capital constraints while commissioning US electrolyser gigafactory. DOE loan guarantee critical lifeline.",
      marketCap: "$2.1B", employees: "3,500",
      tags: ["green-hydrogen", "fuel-cells", "electrolyser"],
      reports: [
        { date: "2026-07-10", type: "Earnings", title: "Q2 2026: Revenue $150M; DOE loan drawdown begins, liquidity stabilising", sentiment: "neutral" },
        { date: "2026-05-22", type: "Regulatory", title: "DOE finalises $1.6B loan guarantee enabling Georgia electrolyser plant", sentiment: "positive" }
      ]
    },

    /* ── Grid & Transmission ──────────────────────────────────────── */
    {
      id: "ge-vernova", name: "GE Vernova", ticker: "GEV", exchange: "NYSE",
      sector: "grid", hq: "Cambridge, MA, USA", founded: 2024,
      summary: "Grid equipment, gas power, and wind leader spun off from GE. Electrification business capturing AI data-centre grid surge. Order backlog at all-time highs.",
      marketCap: "$88B", employees: "80,000",
      tags: ["grid", "turbines", "wind", "electrification"],
      reports: [
        { date: "2026-07-23", type: "Earnings", title: "Q2 2026: Revenue $9.0B, orders $18B; Electrification backlog up 40% yoy", sentiment: "positive" },
        { date: "2026-06-20", type: "Strategy", title: "GE Vernova accelerates transformer capacity expansion for grid buildout", sentiment: "positive" },
        { date: "2026-05-10", type: "M&A", title: "GE Vernova acquires grid software firm GridUnity to boost automation", sentiment: "positive" }
      ]
    },
    {
      id: "abb", name: "ABB Ltd", ticker: "ABB", exchange: "NYSE",
      sector: "grid", hq: "Zürich, Switzerland", founded: 1988,
      summary: "Electrification and automation leader. Power grids, HVDC, and EV charging segments driven by global decarbonisation capex supercycle.",
      marketCap: "$82B", employees: "105,000",
      tags: ["hvdc", "electrification", "automation", "grid"],
      reports: [
        { date: "2026-07-18", type: "Earnings", title: "Q2 2026: Revenue $8.4B; Electrification orders up 18%, EBITA margin 19.5%", sentiment: "positive" },
        { date: "2026-06-14", type: "Strategy", title: "ABB wins $600M HVDC contract for North Sea Wind interconnector", sentiment: "positive" }
      ]
    }
  ],

  intelligence: [
    /* ── Macro Themes ─────────────────────────────────────────────── */
    {
      id: "ai-power-demand", date: "2026-07-28", type: "Macro Theme",
      title: "AI Data Centres Drive Unprecedented US Power Demand Surge",
      sectors: ["utilities", "grid", "nuclear"],
      summary: "US electricity demand expected to grow 4.7% in 2026, the fastest pace in two decades, driven almost entirely by hyperscale AI data centres. Utility companies are filing emergency capacity additions and seeking regulatory fast-tracks for new gas peakers and nuclear PPAs.",
      keyFacts: [
        "US data centre power demand projected at 35 GW by 2030, up from 17 GW in 2023",
        "PJM, ERCOT, and MISO all reporting capacity shortfalls in their 10-year outlooks",
        "Constellation, Vistra, and Talen Energy have signed nuclear PPAs totalling >5 GW",
        "Grid interconnection queue exceeded 2,600 GW of projects as of June 2026"
      ],
      companies: ["constellation", "ge-vernova", "duke", "nextera"]
    },
    {
      id: "offshore-wind-reset", date: "2026-07-25", type: "Macro Theme",
      title: "Offshore Wind Navigates Cost Reset: Survivors and Casualties",
      sectors: ["renewables"],
      summary: "Rising supply-chain costs, higher rates, and US policy uncertainty have forced a sector-wide renegotiation. European developers with established supply chains (Ørsted, Vattenfall) are recovering, while US offshore remains challenged absent federal support.",
      keyFacts: [
        "US offshore wind pipeline reduced by ~12 GW of cancelled/paused projects since 2023",
        "European offshore LCOE recovering toward $80–90/MWh with long-term contracts",
        "UK CfD auction results show offshore wind competitive without subsidy in select markets",
        "Jones Act waiver discussions renewed as US offshore supply chain lags"
      ],
      companies: ["orsted", "dominion", "iberdrola"]
    },
    {
      id: "nuclear-renaissance", date: "2026-07-22", type: "Macro Theme",
      title: "Nuclear Renaissance: SMRs, Restarts, and the AI Catalyst",
      sectors: ["nuclear", "utilities"],
      summary: "Global nuclear capacity additions are accelerating for the first time in 40 years. AI-driven power demand, carbon-free reliability, and government loan guarantees are combining to create a commercial renaissance for both large-scale and small modular reactors.",
      keyFacts: [
        "US NRC received 12 SMR applications in H1 2026 alone",
        "Three Mile Island Unit 1 achieved commercial restart milestone in January 2026",
        "UK, France, and Canada each announced multi-unit nuclear expansion programmes",
        "SMR levelised cost projected at $80–120/MWh; cost curve declining with learning rates"
      ],
      companies: ["constellation", "kairos", "southern", "ge-vernova"]
    },
    {
      id: "hydrogen-scaling", date: "2026-07-20", type: "Macro Theme",
      title: "Green Hydrogen: Scaling Challenges Separate Leaders from Laggards",
      sectors: ["hydrogen"],
      summary: "Green hydrogen production costs remain above $4/kg in most markets, constraining off-take. Projects with integrated supply chains, government incentives, and industrial anchor buyers are advancing; speculative plays face capital markets pressure.",
      keyFacts: [
        "IRA Section 45V hydrogen PTC finalised at $3/kg for sub-0.45 kgCO2e projects",
        "NEOM Green Hydrogen project on track for 2026 first production at 650 t/day",
        "EU Hydrogen Bank allocated €3.2B in first competitive auction",
        "Blue hydrogen with CCS at $2–3/kg remains competitive near-term bridge"
      ],
      companies: ["air-products", "plug-power", "shell"]
    },
    {
      id: "grid-bottleneck", date: "2026-07-18", type: "Macro Theme",
      title: "Grid Buildout Bottleneck: Transformers, Permitting, and Capital",
      sectors: ["grid", "utilities"],
      summary: "Transmission and distribution investment is the binding constraint for the energy transition. Transformer lead times of 2-3 years, permitting bottlenecks, and $4T+ estimated global grid investment need are creating a decade-long capex supercycle.",
      keyFacts: [
        "US transmission investment needs estimated at $900B through 2035 (LBNL)",
        "Large power transformer lead times extended to 3 years in many markets",
        "FERC Order 1920 mandates long-range transmission planning at regional scale",
        "HVDC technology enabling 2,000 km+ transmission corridors for offshore wind"
      ],
      companies: ["ge-vernova", "abb", "nextEra", "dominion"]
    },
    {
      id: "lng-geopolitics", date: "2026-07-15", type: "Macro Theme",
      title: "LNG Geopolitics: Europe's Re-Routing and New Supply Wave",
      sectors: ["lng", "oil-gas"],
      summary: "European LNG imports from the US and Qatar have replaced Russian pipeline gas. A new wave of US LNG export capacity (2026-2030) is creating surplus concerns in mid-decade, with Asia becoming the key swing market for price formation.",
      keyFacts: [
        "European LNG import capacity expanded by 120 bcm since 2022",
        "US LNG export capacity to reach 150 Mtpa by 2030, vs 95 Mtpa today",
        "JKM-TTF spread narrowing as markets re-equilibrate post-Russia shock",
        "Qatar NFS expansion adds 48 Mtpa by 2027, tightest competition in history"
      ],
      companies: ["cheniere", "shell", "totalenergies", "kinder"]
    },
    {
      id: "battery-storage-boom", date: "2026-07-12", type: "Macro Theme",
      title: "Grid-Scale Battery Storage Boom: BESS Becomes Utility-Grade Infrastructure",
      sectors: ["storage", "renewables"],
      summary: "Battery energy storage deployments broke records in H1 2026 globally. Declining lithium-ion costs, IRA incentives, and renewable integration requirements are driving BESS from niche to mainstream grid asset class.",
      keyFacts: [
        "US BESS deployments hit 8 GW in Q1 2026 alone, exceeding full-year 2023",
        "4-hour BESS LCOE fell below $150/MWh in select US markets",
        "Long-duration storage (>10 hours) receiving $6B+ federal grant support",
        "BESS now co-located with >40% of new US utility-scale solar projects"
      ],
      companies: ["fluence", "form-energy", "nextera", "enel"]
    }
  ],

  reportTypes: ["Earnings", "Strategy", "M&A", "Regulatory", "Research", "Macro Theme"],

  sentimentLabels: {
    "positive": { label: "Positive", color: "#22c55e" },
    "neutral":  { label: "Neutral",  color: "#94a3b8" },
    "mixed":    { label: "Mixed",    color: "#f59e0b" },
    "negative": { label: "Negative", color: "#ef4444" }
  }
};
