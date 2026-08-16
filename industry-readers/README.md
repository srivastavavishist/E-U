# Industry Intelligence Hub

**Created by:** Vishist Srivastava  
**Last Updated:** August 16, 2026  
**Purpose:** Enterprise sales enablement — macro trend analysis across 9 global industries

## Overview

A static HTML intelligence platform built for IT consulting sales teams. Each industry sub-site delivers:
- Macro trend readouts from Q2 2026 earnings calls
- Analyst insights from McKinsey, BCG, and Bain
- Regulatory updates and sector news
- 25+ company profiles per industry

## Industries Covered

| Folder | Industry | Badge |
|:---|:---|:---|
| `energy-utilities/` | Energy & Utilities | E·U |
| `aerospace-defense/` | Aerospace & Defense | A·D |
| `automotive-mobility/` | Automotive & Mobility | A·M |
| `banking/` | Banking | B·K |
| `healthcare-lifesciences/` | Healthcare & Life Sciences | H·L |
| `insurance/` | Insurance | I·N |
| `public-sector/` | Public Sector & Government | P·S |
| `technology-software/` | Technology & Software | T·S |
| `telecom/` | Telecom | T·C |

## Deployment

### Deploy to Vercel (Recommended)

Each industry folder is an independent static site with its own `vercel.json`.

**Option A — Deploy the entire hub as one Vercel project:**
```bash
cd industry-readers
vercel --prod
```

**Option B — Deploy each industry as a separate Vercel project:**
```bash
cd industry-readers/banking
vercel --prod
```

### Deploy to GitHub Pages

Push the entire `industry-readers/` folder to a GitHub repo and enable Pages from the `main` branch root.

## Local Development

Open any `index.html` directly in your browser — no build step required.

```bash
# macOS / Linux
open energy-utilities/index.html

# Windows
start energy-utilities/index.html
```

## File Structure

```
industry-readers/
├── index.html              ← Hub landing page (links all 9)
├── vercel.json
├── .gitignore
├── README.md
│
├── energy-utilities/
│   ├── index.html
│   ├── companies.html
│   ├── trust.html
│   ├── vercel.json
│   └── assets/
│       ├── app.js
│       ├── styles.css
│       └── data.js
│
├── banking/                ← Same structure as above
├── aerospace-defense/
├── automotive-mobility/
├── healthcare-lifesciences/
├── insurance/
├── public-sector/
├── technology-software/
└── telecom/
```

## Data Sources

- Q2 2026 earnings call transcripts
- McKinsey Global Institute reports
- BCG industry perspectives (2026)
- Bain & Company macro reports
- Regulatory filings (FDA, FCC, FAA, DoD, Basel Committee, EU AI Act)
