<div align="center">
  <img src="./public/muj.svg" alt="Logo" width="80" height="80">
  <h1 align="center">StudentSphere</h1>
  <p align="center">
    <strong>The Next-Generation Decentralized Campus Portal</strong>
    <br />
    Architected, designed, and engineered from scratch by <strong>Shrey Bansal</strong>.
  </p>

  <p align="center">
    <a href="#vision--problem-statement">Vision</a> •
    <a href="#core-innovations">Features</a> •
    <a href="#system-architecture">Architecture</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#contact">Contact</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Firebase-v11-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

## ⚡ Vision & Problem Statement

Modern university students are forced to endure highly fragmented digital experiences. Checking timetables, submitting assignments, tracking attendance, and keeping up with college announcements typically requires bouncing between four or five different outdated platforms.

**StudentSphere changes that.** 

I built StudentSphere from the ground up to solve this exact problem. It is a deeply integrated, lightning-fast "nervous system" for the entire academic journey. Every pixel of the UI has been custom-designed by me to prioritize modern aesthetics, and the backend has been rigorously engineered to handle sensitive data securely. 

---

## 🚀 Core Innovations

### 🎨 Custom "Glassmorphism" Design System
Unlike boilerplate layouts, the entire StudentSphere UI is a custom implementation designed with extreme attention to detail.
- **Dark Mode Native:** Conceptualized initially in dark mode to reduce eye strain during late-night study sessions.
- **Micro-Animations:** Heavy integration of **Framer Motion** and **GSAP** brings the application to life with fluid transitions, hover states, and dynamic mounting effects.
- **Responsive Purity:** Complete rendering flawless execution across all breakpoints—from ultra-wide monitors to the smallest mobile screens.

### 🧠 SphereAI: Context-Aware Intelligence
StudentSphere features a proprietary built-in AI logic that doesn't just answer generic queries. By reading a student's *actual* scraped attendance, timetable, and assignment data, SphereAI acts as a personalized academic strategist—predicting risk factors, suggesting buffer zones for attendance, and planning study schedules.

### 📚 The Dual-Role Academic Hub
- **Student Dashboard:** An immersive control center where students view live timetables, visually track assignment due dates (with urgency color-coding), access academic materials directly, and monitor deep attendance analytics (including "safe-miss" projections).
- **Faculty "Admin" Dashboard:** A highly robust administrative suite. Faculty members can seamlessly push new assignments, manage course materials, update live attendance, and instantly broadcast urgent announcements to specific batches—all protected by strict Role-Based Access Control (RBAC).

### 💬 Decentralized Peer Forum
A structured, automated peer-to-peer discussion forum. With auto-categorized topic sorting and robust role-based guardrails, students can discuss academic material, collaborate on projects, and seek real-time help securely.

---

## 🏗️ System Architecture

StudentSphere operates via a highly optimized, dual-engine serverless architecture:

1. **The Edge Scraping Engine (`@sparticuz/chromium` + `puppeteer-core`)**
   Bypassing Vercel's strict 50MB serverless function limits is notoriously difficult. I engineered a specialized, lightweight headless Chromium instance that scrapes real-time timetable and attendance data on the fly, rendering it directly to the dashboard without overloading memory quotas.

2. **Secure Database Layer (Firebase Firestore & Auth)**
   StudentSphere is deeply protected. The platform runs on **Production Firestore Security Rules**. Every single database interaction is gated by rigid backend checks verifying `request.auth.uid`. Students can only modify their personal files, and faculty data modifications are strictly hard-locked to verified Admin/Faculty accounts.

---

## 🛠️ Deep Tech Stack

### Frontend Architecture
- **Framework:** Next.js 15 (App Router paradigm)
- **Library:** React 19
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS, Radix UI primitives
- **Motion & Physics:** Framer Motion, GSAP

### Backend & Infrastructure
- **Database Architecture:** Firebase Firestore (NoSQL Document Store)
- **Identity Provider:** Firebase Authentication
- **Data Scraping & Structuring:** Puppeteer, Cheerio
- **Deployment & Edge Computing:** Vercel (CI/CD Integrated)

---

## 🔒 Security & Authentication
StudentSphere respects zero-trust principles. All data reads/writes enforce strict Role-Based Access Control (RBAC). Bypassing frontend UI limits will immediately be blocked at the database edge.

---

## 📬 Let's Connect

This project stands as a testament to my ability to identify a real-world problem and design, architect, and deploy a full-scale, robust engineering solution—entirely solo.

- **Developer:** Shrey Bansal
- **Email:** shrey.23fe10cse00848@muj.manipal.edu
- **GitHub:** [@shreybansal365](https://github.com/shreybansal365)

<p align="center">
  <i>StudentSphere — Empowering Students, Elevating Campus Life.</i>
</p>
