<div align="center">
  <img src="https://studentsphere-docs.vercel.app/muj-logo.png" alt="StudentSphere Logo" width="120" height="120" />
  
  <h1 align="center">StudentSphere</h1>
  <p align="center">
    <strong>The Autonomous, Zero-Trust Campus Nervous System</strong>
    <br />
    <br />
    <a href="https://studentsphere1234.vercel.app/"><strong>Explore the Deployment »</strong></a>
    <br />
    <br />
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://firebase.google.com/"><img src="https://img.shields.io/badge/Firebase-v11-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  </p>
</div>

---

## ⚡ The Paradigm Shift

Traditional academic portals are fragmented, static, and highly inefficient. **StudentSphere** was architected to be the definitive **"System of Record"** for the modern academic institution. 

Engineered with an aerospace-grade, high-fidelity command-terminal aesthetic, StudentSphere transcends standard dashboards. It acts as a context-aware academic nervous system—bridging the gap between raw institutional data and actionable student intelligence in real-time.

---

## 🚀 The Immaculate Tier: Core Innovations

### 👁️ Autonomous Faculty Oracle
No more manual verification. StudentSphere operates a server-side **Oracle API** (`/api/verify-faculty`) that autonomously parses and scrapes the official university directory to validate faculty credentials in real-time. 
* **Neural Normalization:** Automatically reconciles names and fuzzy-matches titles (stripping "Dr.", "Prof.", etc.).
* **Instant Rejection:** Imposters are locked out at the edge layer, ensuring an uncompromised faculty grid.

### 🛡️ Template-Enforced Zero-Trust Data Matrix
Inputs on StudentSphere aren't just strings; they are strict identity vectors.
* **Surgical Validation Matrices:** Batch 2027 constraints enforce 14-digit alphanumeric caps; Batches 2028+ are locked to 10-digit numeric codes. 
* **Firestore RBAC Edge:** Database interactions are gated by strict role-based access control. The database is invisible to unregistered entities.

### 🧠 SphereAI: Context-Aware Intelligence
Beyond standard LLM wrappers, SphereAI is an intelligence core injected directly with real-time academic telemetry. 
* **Proactive Interventions:** It calculates attendance shortages before you do.
* **Low-Latency Logic:** Powered by Groq's Llama 3.3 inferencing, it formulates buffer zones, project strategies, and study plans instantaneously.

### 🕵️ Edge SLCM Synchronization
An asynchronous data extraction engine leveraging `@sparticuz/chromium`. By bypassing serverless memory constraints, StudentSphere pulls raw attendance and timetable data directly from standard university SLCM portals in under 3 seconds.

---

## 🛠️ The Technology Engine

| Layer | Technology | Architectural Purpose |
| :--- | :--- | :--- |
| **Core Framework** | `Next.js 15` | App Router paradigm for nested layouts, server-side Oracle execution, and optimal edge streaming. |
| **Identity Guard** | `Firebase Auth` | Institutional SSO integration with strict loop-verification protocols. |
| **Data Matrix** | `Firestore` | NoSQL document storage for exceptionally flexible and secure node profiles. |
| **Scraping Engine**| `Puppeteer-Core` | Headless browser mechanics optimized for serverless SLCM data synthesis. |
| **Physics & UI** | `Framer Motion` | Fluid, hardware-accelerated UI physics bridging React state and DOM animations. |
| **Neural Core** | `Groq Cloud` | Ultra-low-latency Llama inference powering the SphereAI logical framework. |

---

## 📐 System Architecture

```mermaid
graph TD
    User((Student/Faculty)) -->|Next.js App Router| Terminal[Command-Terminal UI]
    Terminal -->|Firebase Auth| Gatekeeper[Identity Gatekeeper]
    Gatekeeper -->|Unverified Faculty| Oracle[Autonomous Faculty Oracle]
    Oracle -->|Scrapes| Directory[(Institutional Directory)]
    Gatekeeper -->|Verified| Dashboard[Role-Based Dashboards]
    Dashboard -->|API Sync| Scraper[Edge Chromium Scraper]
    Scraper -->|POST| SLCM[University SLCM Portal]
    SLCM -->|RAW Data| Scraper
    Scraper -->|Structured JSON| Firestore[(Firestore Core)]
    Firestore -->|Data Binding| Dashboard
    Dashboard -->|Telemetry Injection| AI[SphereAI Engine]
```

---

## 🗺️ Genesis Roadmap

- [x] **Phase 1: Foundations** - Auth, Command-Terminal layout, Core Scraping logic.
- [x] **Phase 2: Faculty Hub** - Real-time Attendance, Assignments, and Marks management.
- [x] **Phase 3: Intelligence** - SphereAI context-aware neural integration.
- [x] **Phase 4: Identity Hardening** - Autonomous Oracle implementation and Grid Symmetry.
- [x] **Phase 5: Production Deployment** - Vercel Edge configuration and Firestore security publication.
- [ ] **Phase 6: Collaborative Core** - Encrypted peer-to-peer forum and batch broadcasts.

---

## 📬 Contact & Collaboration

System metrics and architectural deep-dives are available upon request.

- **Lead Architect:** Shrey Bansal
- **Secure Comm:** [shreybansal365@gmail.com](mailto:shreybansal365@gmail.com)
- **GitHub Core:** [@shreybansal365](https://github.com/shreybansal365)

<p align="center">
  <br />
  <sub>Architected with ❤️ by Shrey Bansal — Manipal University Jaipur 2026.</sub>
</p>
