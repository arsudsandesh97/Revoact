<p align="center">
  <img src="Revoact%20Logo.png" alt="Revoact Logo" width="380" />
</p>

<h1 align="center">Revoact — Vibe Coding Skill Pack</h1>

<p align="center">
  <strong>Turn raw ideas into production-grade documentation in minutes, not hours.</strong><br />
  Six modular AI skills that interview you first, then generate PRDs, Architecture docs, Technical Designs, Roadmaps, READMEs, and Security reviews — all in clean, industry-standard Markdown.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/Skills-6%20Included-brightgreen.svg" alt="Skills: 6" />
  <img src="https://img.shields.io/badge/Workflow-Interview--First-orange.svg" alt="Interview-First Workflow" />
  <img src="https://img.shields.io/badge/Platform-Claude%20%7C%20Antigravity%20%7C%20Gemini%20%7C%20GPT-purple.svg" alt="Platform Compatibility" />
  <img src="https://img.shields.io/badge/Made%20with-Vibe%20Coding-ff69b4.svg" alt="Vibe Coding" />
</p>

---

## 📚 Table of Contents

- [Why Revoact?](#-why-revoact)
- [Quick Skill Matrix](#-quick-skill-matrix)
- [How It Works — The Interview-First Workflow](#-how-it-works--the-interview-first-workflow)
- [Included Skills — Deep Dive](#-included-skills--deep-dive)
- [Repository Structure](#-repository-structure)
- [Installation](#-installation)
- [Usage Examples](#-usage-examples)
- [Core Features](#-core-features)
- [Contributing](#-contributing)
- [License](#-license)
- [About & Vibe Coding Philosophy](#-about--vibe-coding-philosophy)

---

## 💡 Why Revoact?

Most developers treat documentation as an afterthought — a chore that produces vague specs, incomplete architecture write-ups, and security sections filled with `[TBD]`. Revoact flips the script:

| Traditional Approach | Revoact Approach |
| :--- | :--- |
| ❌ Blank-page paralysis — staring at an empty Markdown file | ✅ Guided interview — the AI asks the right questions first |
| ❌ Inconsistent formatting across teams and projects | ✅ Industry-standard templates (C4, STRIDE, ADR, MoSCoW) |
| ❌ Placeholder-heavy documents nobody reads | ✅ Complete, actionable artifacts ready for stakeholder review |
| ❌ One monolithic "docs" prompt that hallucinates details | ✅ Six focused skills, each a domain expert in its artifact |

> **The result:** Your AI assistant becomes a disciplined engineering partner that gathers context, resolves ambiguity, and produces documents you'd be proud to share with your CTO.

---

## 📦 Quick Skill Matrix

| # | Skill | Folder | Output Artifact | What It Captures |
| :---: | :--- | :--- | :--- | :--- |
| 1 | **PRD Generator** | `skills/prd-doc/` | `PRD.md` | Problem statements · User personas · Functional requirements (MoSCoW) · Success metrics · User stories with acceptance criteria |
| 2 | **Architecture Doc** | `skills/architecture-doc/` | `ARCHITECTURE.md` | C4 diagrams (Context → Component) · Data flow · Infrastructure & deployment · ADRs · Scalability roadmap |
| 3 | **Technical Design Doc** | `skills/design-doc/` | `DESIGN.md` | API contracts · Data models & schemas · Sequence diagrams · Migration plans · Failure modes & edge cases |
| 4 | **Roadmap Builder** | `skills/roadmap-doc/` | `ROADMAP.md` | Phased milestones (Q1–Q4) · Dependencies & critical path · Deliverable schedules · Risk mitigation matrix |
| 5 | **README Generator** | `skills/readme-doc/` | `README.md` | Visual headers & badges · Installation guides · Feature highlights · Env variable specs · Usage & API examples |
| 6 | **Security & Compliance** | `skills/security-doc/` | `SECURITY.md` | STRIDE threat modeling · OWASP Top 10 mitigations · AuthN/AuthZ design · Data encryption · Compliance (GDPR/SOC 2/HIPAA) |

---

## ⚡ How It Works — The Interview-First Workflow

Every Revoact skill follows the same **Interview → Synthesize → Generate** pattern, ensuring your AI never guesses when it can ask:

```mermaid
flowchart LR
    A["🗣️ Your Prompt"] --> B["🔍 Skill Activation"]
    B --> C["🎤 Clarifying Interview\n3–5 Targeted Questions"]
    C --> D["🧠 Context Synthesis\n+ Codebase Scan"]
    D --> E["📄 Production Artifact\nComplete Markdown — Zero Placeholders"]
    E --> F["🔄 Iterate & Refine"]

    style A fill:#1a1a2e,stroke:#e94560,color:#fff
    style B fill:#1a1a2e,stroke:#0f3460,color:#fff
    style C fill:#1a1a2e,stroke:#e94560,color:#fff
    style D fill:#1a1a2e,stroke:#0f3460,color:#fff
    style E fill:#1a1a2e,stroke:#16c79a,color:#fff
    style F fill:#1a1a2e,stroke:#16c79a,color:#fff
```

### Step by Step

| Step | What Happens | Example |
| :---: | :--- | :--- |
| **1. Trigger** | Ask your AI to generate a document | *"Create a PRD for an AI-powered chat app"* |
| **2. Interview** | The skill reviews existing files, then asks 3–5 high-impact questions to clarify missing context | *"Who is the primary user persona? What's the target launch quarter?"* |
| **3. Generate** | A structured, industry-standard Markdown document is produced — no `[TBD]` placeholders | Full PRD with problem statement, user stories, metrics, and risk table |
| **4. Iterate** | Request edits, expansions, or follow-up documents naturally | *"Add a Phase 2 scope section"* or *"Now generate the ARCHITECTURE.md"* |

---

## 🔍 Included Skills — Deep Dive

### 📋 PRD Generator · `skills/prd-doc/`

> *Transforms raw ideas into comprehensive Product Requirements Documents.*

- **Focus:** Defines *what* to build and *why* it matters.
- **Key Sections:** Executive Summary · Problem Statement · Goals & Success Metrics · User Stories with Acceptance Criteria · Functional Requirements (MoSCoW) · Non-Functional Requirements · Assumptions & Risks · Timeline & Milestones
- **Best For:** Kicking off a new feature, aligning stakeholders, writing investor-ready specs.

---

### 🏗️ Architecture Doc Generator · `skills/architecture-doc/`

> *Drafts high-level system architecture documentation for complex software systems.*

- **Focus:** Defines *how components interact at scale*.
- **Key Sections:** System Overview · C4 Diagrams (Context, Container, Component) · Architectural Principles · Data Architecture · Infrastructure & Deployment · Cross-Cutting Concerns (Auth, Logging, Monitoring) · Embedded ADRs · Future Scalability Roadmap
- **Best For:** Onboarding new engineers, preparing for architecture reviews, documenting cloud infrastructure.

---

### 🎨 Technical Design Doc Generator · `skills/design-doc/`

> *Creates feature-level technical specifications prior to writing code.*

- **Focus:** Defines *implementation details for specific features*.
- **Key Sections:** System Interfaces · Data Models & Schemas · API Endpoint Contracts · Sequence Diagrams · Migration Plans · Failure Modes & Edge Cases · Performance Considerations
- **Best For:** Pre-implementation planning, API design sessions, communicating trade-offs to the team.

---

### 🗺️ Product Roadmap Builder · `skills/roadmap-doc/`

> *Structures long-term product strategies and phased release schedules.*

- **Focus:** Defines *when features will be delivered and in what order*.
- **Key Sections:** Strategic Themes · Phased Release Milestones (Q1–Q4 / Phase 1–3) · Dependencies & Critical Path · Deliverables per Phase · Risk Assessment & Mitigation
- **Best For:** Sprint planning, executive presentations, coordinating cross-team dependencies.

---

### 📝 README Generator · `skills/readme-doc/`

> *Generates attractive, developer-friendly repository READMEs.*

- **Focus:** Defines *first impressions and quickstart developer onboarding*.
- **Key Sections:** Visual Header & Badges · Features List · Quick Start & Prerequisites · Installation · Environment Variable Documentation · Usage & API Examples · Contributing Guide · License
- **Best For:** Open-source projects, internal tool launches, developer experience polish.

---

### 🛡️ Security & Compliance Review · `skills/security-doc/`

> *Establishes clear security postures, threat models, and compliance readiness.*

- **Focus:** Defines *how the system is protected against threats*.
- **Key Sections:** STRIDE Threat Model · Security Controls · AuthN/AuthZ Protocols · Data Encryption (at Rest & in Transit) · OWASP Top 10 Mitigations · Compliance Mapping (GDPR, SOC 2, HIPAA) · Incident Response Plan · Vulnerability Management
- **Best For:** Security audits, compliance certifications, investor due diligence, enterprise customer onboarding.

---

## 📁 Repository Structure

```text
Vibe Coding Pack/
├── README.md                    # You are here
├── LICENSE                      # MIT License
├── package.json                 # npm package config (for npx revoact)
├── Revoact Logo.png             # Branding banner
├── bin/
│   └── revoact.js               # CLI installer (zero dependencies)
└── skills/                      # All 6 skills live here
    ├── prd-doc/                  # → PRD.md
    │   └── SKILL.md             #   (462 lines of structured guidance)
    ├── architecture-doc/         # → ARCHITECTURE.md
    │   └── SKILL.md             #   (933 lines — C4, ADR, infra templates)
    ├── design-doc/               # → DESIGN.md
    │   └── SKILL.md             #   (668 lines — API, schema, sequence diagrams)
    ├── roadmap-doc/              # → ROADMAP.md
    │   └── SKILL.md             #   (87 lines — lean & focused)
    ├── readme-doc/               # → README.md
    │   └── SKILL.md             #   (860 lines — badges, env vars, onboarding)
    └── security-doc/             # → SECURITY.md
        └── SKILL.md             #   (781 lines — STRIDE, OWASP, compliance)
```

> **Total:** ~3,800 lines of curated, production-tested prompt engineering across 6 skills.

---

## 🔧 Installation

### One-Command Install (Recommended)

Install all 6 skills to your preferred AI agent with a single command — no cloning required:

```bash
npx revoact-skills
```

The interactive installer will ask where to place the skills:

```
  ╔══════════════════════════════════════════╗
  ║       Revoact — Vibe Coding Pack         ║
  ║   AI Documentation Skills Installer      ║
  ╚══════════════════════════════════════════╝

  Where would you like to install the skills?

    1)  Claude Code          ~/.claude/skills
    2)  Antigravity / Gemini  ~/.gemini/config/skills
    3)  Current project       .agents/skills
    4)  Custom path

  Select (1-4):
```

#### Non-Interactive Flags

Skip the menu with direct flags — perfect for CI, scripts, or quick setups:

```bash
# Install to Claude Code
npx revoact-skills --claude

# Install to Antigravity / Gemini
npx revoact-skills --gemini

# Install to current project
npx revoact-skills --project

# Install to a custom directory
npx revoact-skills --path ./my-custom-skills

# Skip confirmation prompt
npx revoact-skills --claude --yes
```

#### Other CLI Commands

```bash
# List all included skills
npx revoact-skills --list

# Show help
npx revoact-skills --help
```

---

### Manual Install (Alternative)

If you prefer to clone the repo and copy files manually:

<details>
<summary><strong>Claude Code</strong></summary>

**Windows (PowerShell)**
```powershell
xcopy /E /I "skills" "$env:USERPROFILE\.claude\skills"
```

**macOS & Linux**
```bash
cp -r skills/* ~/.claude/skills/
```
</details>

<details>
<summary><strong>Antigravity & Custom Agents</strong></summary>

**Windows (PowerShell)**
```powershell
xcopy /E /I "skills" "$env:USERPROFILE\.gemini\config\skills"
```

**macOS & Linux**
```bash
cp -r skills/* ~/.gemini/config/skills/
```
</details>

<details>
<summary><strong>Project-Scoped</strong></summary>

Copy into `.agents/skills/` at your workspace root:

**Windows (PowerShell)**
```powershell
xcopy /E /I "skills" ".agents\skills"
```

**macOS & Linux**
```bash
cp -r skills/* .agents/skills/
```
</details>

---

## 💬 Usage Examples

Once installed, invoke any skill naturally within your AI conversation:

| Skill | Example Prompt |
| :--- | :--- |
| **PRD** | *"Create a PRD for a real-time collaborative whiteboard app."* |
| **Architecture** | *"Generate an architecture document for a multi-tenant SaaS backend on AWS."* |
| **Design Doc** | *"Write a technical design doc for our OAuth2 + WebAuthn authentication service."* |
| **Roadmap** | *"Build a 4-quarter product roadmap for scaling our e-commerce platform."* |
| **README** | *"Draft a professional README for this open-source Rust CLI tool."* |
| **Security** | *"Generate a SECURITY.md covering threat modeling and GDPR compliance for our healthcare application."* |

### Chaining Skills

Revoact skills are designed to flow naturally from one to the next:

```text
PRD.md  →  ARCHITECTURE.md  →  DESIGN.md  →  ROADMAP.md
  ↕              ↕                  ↕             ↕
README.md ←←←←←←←←←←←←←←←←←←←←←←←←←←←←  SECURITY.md
```

> Start with a PRD to define *what* and *why*, then cascade into architecture, design, and roadmap. Generate the README and security docs in parallel at any stage.

---

## ✨ Core Features

| Feature | Description |
| :--- | :--- |
| 🎯 **Context-Aware Interviewing** | Asks precise, high-impact questions to fill gaps before generating documentation — never guesses. |
| 📐 **Industry-Standard Formatting** | Incorporates C4 diagrams, STRIDE threat matrices, ADR records, MoSCoW prioritization, and OWASP mappings. |
| 🤖 **Cross-LLM Compatibility** | Works seamlessly across Claude, Antigravity, Gemini, GPT, and any SKILL.md-compatible coding agent. |
| ⚡ **Zero-Placeholder Policy** | Generates complete, actionable documents. No generic `[TBD]` fillers — asks you instead. |
| 🛠️ **Modular & Extensible** | Each skill is a standalone `SKILL.md` file. Adapt, extend, or compose them to match your team's standards. |
| 🔗 **Chainable Workflow** | Skills reference each other naturally. Generate a PRD, then cascade into architecture, design, and roadmap. |

---

### Skill Authoring Guidelines

- Follow the YAML frontmatter format (`name`, `description`)
- Include a clear "When to Use" trigger section
- Provide a structured template with all sections
- Add best practices and common mistakes to avoid
- Keep the interview step with 3–5 targeted questions

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

You are free to use, modify, distribute, and build upon these skills in personal and commercial projects.

---

## 🌐 About & Vibe Coding Philosophy

> *"Code is ephemeral now and libraries are over, ask your LLM to change it in whatever way you like."*

Revoact was born from a **vibe coding** experiment — evaluating LLM performance side-by-side during deep technical research. It stands as a practical demonstration that **structured prompts and skill wrappers turn raw LLMs into disciplined engineering partners**.

The philosophy is simple: *don't fight the AI, choreograph it.* Give it domain expertise through well-crafted skill files, guide it with interviews instead of one-shot prompts, and let it produce documents that meet the same bar as a senior engineer's best work.

Feel free to use, fork, and adapt these skills for your own AI workflows.

---

<p align="center">
  <strong>⭐ Star this repo if Revoact saves you time. It helps others discover it.</strong>
</p>

<p align="center">
  <em>Built with ❤️ for the AI-assisted development community</em>
</p>