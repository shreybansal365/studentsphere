<div align="center">
  <img src="https://raw.githubusercontent.com/shreybansal365/StudentSphere-Autonomous-Identity-Oracle/main/public/muj.svg" alt="StudentSphere Logo" width="140" height="140" />

  <h1 align="center">STUDENTSPHERE</h1>
  
  <p align="center">
    <strong>The Autonomous, Zero-Trust Campus Nervous System.</strong><br>
    <em>An elite integration of decentralized identity, edge-scraping, and context-aware intelligence.</em>
  </p>

  <p align="center">
    <a href="https://studentsphere1234.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/🚀_Explore_The_Deployment-000000?style=for-the-badge&logoColor=white" alt="Deployment" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Firebase-v11-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Groq-AI_Core-f3f4f6?style=for-the-badge&logo=ai&logoColor=black" alt="Groq LLaMA 3.3" />
    <img src="https://img.shields.io/badge/Puppeteer-Edge_Scraping-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white" alt="Edge Scraping" />
  </p>
</div>

<br />

> **“Traditional academic portals are fragmented and inefficient. StudentSphere is an aerospace-grade, context-aware intelligence matrix that rewrites how institutions operate.”**

---

## ⚡ The Immaculate Tier: Core Innovations

### 👁️ Autonomous Faculty Oracle
StudentSphere operates a server-side **Oracle API** (`/api/verify-faculty`) that autonomously scrapes the official university directory to validate faculty credentials in real-time. 
* **Neural Normalization:** Automatically reconciles names and fuzzy-matches titles (stripping "Dr.", "Prof.", etc.).
* **Instant Rejection:** Imposters are locked out at the edge layer, ensuring an uncompromised faculty grid.

### 🛡️ Template-Enforced Zero-Trust Data Matrix
* **Surgical Validation:** Batch-specific constraints (14-digit alphanumeric for 2027; 10-digit numeric for 2028+).
* **Role-Based Access Control:** All database interactions are gated by strict Firestore RBAC policies.

### 🧠 SphereAI: Context-Aware Intelligence
Beyond standard LLM wrappers, SphereAI is fed directly with real-time academic telemetry. 
* **Proactive Interventions:** Calculates attendance shortages and suggests "Safe-Miss" buffer zones.
* **Low-Latency Logic:** Powered by Groq's Llama 3.3 for instantaneous strategic output.

### ⚡ Ghost Protocol: Edge SLCM Synchronization
An asynchronous data extraction engine using `@sparticuz/chromium` to bypass serverless constraints, pulling raw university data in under 3 seconds.

---

## 🛠️ The Technology Engine

| Layer | Engine | Purpose |
| :--- | :--- | :--- |
| **Core** | `Next.js 15` | App Router paradigm for nested layouts and streaming. |
| **Identity** | `Firebase Auth` | Institutional Outlook SSO and Zero-Trust gatekeeping. |
| **Data** | `Firestore` | NoSQL document storage for secure, scalable node profiles. |
| **Scraping**| `Puppeteer-Core` | Headless browser mechanics for SLCM data synthesis. |
| **Physics** | `Framer Motion` | Fluid UI physics bridging React state and DOM animations. |
| **Neural** | `Groq Cloud` | Low-latency Llama 3.3 API powering SphereAI logic. |

---

## 📐 System Architecture

```mermaid
graph TD
    User((Student/Faculty)) -->|Next.js App Router| Terminal[Command-Terminal UI]
    Terminal -->|Firebase Auth| Gatekeeper[Identity Gatekeeper]
    Gatekeeper -->|Unverified Faculty| Oracle[Autonomous Faculty Oracle]
    Oracle -->|Scrapes| Directory[(MUJ Directory)]
    Gatekeeper -->|Verified| Dashboard[Role-Based Dashboards]
    Dashboard -->|API Sync| Scraper[Edge Chromium Scraper]
    Scraper -->|POST| SLCM[University Portal]
    SLCM -->|RAW Data| Scraper
    Scraper -->|Structured JSON| Firestore[(Firestore Core)]
    Dashboard -->|Neural Injection| AI[SphereAI Engine]
```

---

## 📬 Contact & Collaboration

* **Lead Architect:** [Shrey Bansal](https://github.com/shreybansal365)
* **Secure Comm:** [shreybansal365@gmail.com](mailto:shreybansal365@gmail.com)

<p align="center">
  <br />
  <strong>Built with ❤️ by Shrey Bansal — Manipal University Jaipur 2026.</strong>
</p>
