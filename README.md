<div align="center">
  <img src="https://raw.githubusercontent.com/shreybansal365/studentsphere/main/public/muj.svg" alt="StudentSphere Logo" width="140" height="140" />

  <h1 align="center">STUDENTSPHERE</h1>
  
  <p align="center">
    <strong>The Autonomous, Zero-Trust Campus Nervous System.</strong><br>
    <em>A masterclass in decentralized identity, edge-scraping, and context-aware AI.</em>
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

> **“Traditional academic portals are fragmented, static, and highly inefficient. StudentSphere is not a dashboard—it is an aerospace-grade, context-aware intelligence matrix that rewrites how institutions operate.”**

---

## 🔥 The Immaculate Tier: Core Innovations

### 👁️ Autonomous Faculty Oracle
No more manual verification. StudentSphere operates a server-side **Oracle API** (`/api/verify-faculty`) that autonomously parses and scrapes the official university directory to validate faculty credentials in real-time. 
* **Neural Normalization:** Automatically reconciles names and fuzzy-matches titles (stripping "Dr.", "Prof.", etc.).
* **Instant Rejection:** Imposters are locked out at the edge layer, ensuring an uncompromised faculty grid.
* **Frictionless Onboarding:** True Zero-Touch provisioning for verified academic staff.

### 🛡️ Template-Enforced Zero-Trust Data Matrix
Inputs on StudentSphere aren't just strings; they are strict, hardware-level identity vectors.
* **Surgical Validation Matrices:** Batch 2027 constraints enforce 14-digit alphanumeric caps; Batches 2028+ are locked to strict 10-digit numeric codes. 
* **Firestore RBAC Edge:** Database interactions are gated by severe role-based access control (RBAC). The database is entirely invisible to unregistered entities.

### 🧠 SphereAI: Context-Aware Intelligence
Beyond standard LLM wrappers, SphereAI is an intelligence core injected directly with real-time academic telemetry. 
* **Proactive Interventions:** It calculates attendance shortages before you do.
* **Ultra-Low Latency:** Powered by Groq's Llama 3.3 inferencing, it formulates buffer zones, project strategies, and study plans instantaneously.

### ⚡ Edge SLCM Synchronization (The Ghost Protocol)
A devastatingly fast, asynchronous data extraction engine leveraging `@sparticuz/chromium`. By bypassing serverless memory limitations, StudentSphere acts as an invisible browser, pulling raw attendance and timetable data directly from legacy university SLCM portals in under 3 seconds.

---

## 🛠️ The Technology Engine

| Layer Framework | Technology Engine | Architectural Purpose & Execution |
| :--- | :--- | :--- |
| **Core Framework** | `Next.js 15` | App Router paradigm for nested layouts, server-side Oracle execution, and optimal edge streaming. |
| **Identity Guard** | `Firebase Auth` | Institutional SSO integration with strict loop-verification protocols and Zero-Trust policies. |
| **Data Matrix** | `Firestore` | Schemaless, scalable NoSQL document storage for exceptionally flexible and secure node profiles. |
| **Scraping Core**| `Puppeteer-Core` | Headless Chromium mechanics optimized for Vercel Serverless SLCM data synthesis. |
| **Physics & UI** | `Framer Motion` | Fluid, hardware-accelerated UI physics bridging React state and DOM animations seamlessly. |
| **Neural Logic** | `Groq Cloud` | Ultra-low-latency Llama 3.3 API powering the deep reasoning of the SphereAI framework. |

---

## 📐 System Architecture Matrix

```mermaid
graph TD
    %% Core Users
    User((Student / Faculty)) -->|Next.js App Router| Terminal[Command-Terminal UI]

    %% Identity & Gateway
    Terminal -->|Firebase Auth| Gatekeeper{Identity Gatekeeper}
    Gatekeeper -->|Unverified Faculty| Oracle[Autonomous Faculty Oracle]
    Oracle -->|Scrapes via cheerio| Directory[(Institutional Directory)]
    Directory -->|Identity Verified| Gatekeeper

    %% Dashboards & Data Engine
    Gatekeeper -->|Authorized| Dashboard[Role-Based Grid]
    Dashboard -->|API Sync Request| Scraper[Edge Chromium Scraper]
    Scraper -->|POST Request| SLCM[Legacy SLCM Portal]
    SLCM -->|RAW DOM Data| Scraper
    Scraper -->|Structured JSON| Firestore[(Firestore Core)]
    
    %% AI Overlay
    Firestore -->|Live Telemetry Injection| AI[SphereAI Engine]
    AI -->|Strategic Output| Dashboard
```

---

## 🗺️ The Genesis Roadmap

- [x] **Phase 1: Foundations** - Auth, Command-Terminal aesthetics, Core Scraping logic.
- [x] **Phase 2: Faculty Hub** - Real-time Attendance, Assignments, and Marks management.
- [x] **Phase 3: Intelligence** - SphereAI context-aware neural integration.
- [x] **Phase 4: Identity Hardening** - Autonomous Faculty Oracle implementation and Grid Symmetry.
- [x] **Phase 5: Production Deployment** - Vercel Edge configuration and Firestore security publication.
- [ ] **Phase 6: Collaborative Core** - Encrypted peer-to-peer forum and batch broadcasts.

---

## 📬 Contact & Collaboration

Architectural deep-dives, access provisioning, and system metrics are available upon request.

* **Lead Architect:** Shrey Bansal
* **Secure Comm:** [shreybansal365@gmail.com](mailto:shreybansal365@gmail.com)
* **GitHub Core:** [@shreybansal365](https://github.com/shreybansal365)

<p align="center">
  <br />
  <strong>Made with ❤️ by Shrey Bansal — Manipal University Jaipur 2026.</strong>
</p>
