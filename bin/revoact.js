#!/usr/bin/env node

// ──────────────────────────────────────────────────────────────
//  Revoact — Vibe Coding Skill Pack Installer
//  Zero dependencies · Works with npx out of the box
// ──────────────────────────────────────────────────────────────

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const os = require("os");

// ── Constants ────────────────────────────────────────────────

const SKILLS_SOURCE = path.join(__dirname, "..", "skills");

const TARGETS = {
  claude: {
    label: "Claude Code",
    dir: path.join(os.homedir(), ".claude", "skills"),
  },
  gemini: {
    label: "Antigravity / Gemini Agents",
    dir: path.join(os.homedir(), ".gemini", "config", "skills"),
  },
  project: {
    label: "Current project (.agents/skills)",
    dir: path.join(process.cwd(), ".agents", "skills"),
  },
};

const SKILL_NAMES = [
  "prd-doc",
  "architecture-doc",
  "design-doc",
  "roadmap-doc",
  "readme-doc",
  "security-doc",
];

// ── Helpers ──────────────────────────────────────────────────

const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const GREEN = "\x1b[32m";
const CYAN = "\x1b[36m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const MAGENTA = "\x1b[35m";

function banner() {
  console.log();
  console.log(
    `${MAGENTA}${BOLD}  ╔══════════════════════════════════════════╗${RESET}`
  );
  console.log(
    `${MAGENTA}${BOLD}  ║       Revoact — Vibe Coding Pack         ║${RESET}`
  );
  console.log(
    `${MAGENTA}${BOLD}  ║   AI Documentation Skills Installer      ║${RESET}`
  );
  console.log(
    `${MAGENTA}${BOLD}  ╚══════════════════════════════════════════╝${RESET}`
  );
  console.log();
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// ── Argument parsing ─────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const flags = {};

  for (const arg of args) {
    if (arg === "--claude" || arg === "-c") flags.target = "claude";
    else if (arg === "--gemini" || arg === "-g") flags.target = "gemini";
    else if (arg === "--project" || arg === "-p") flags.target = "project";
    else if (arg === "--yes" || arg === "-y") flags.yes = true;
    else if (arg === "--help" || arg === "-h") flags.help = true;
    else if (arg === "--list" || arg === "-l") flags.list = true;
    else if (arg === "--path") flags.customPath = true;
    else if (flags.customPath === true) {
      flags.customPath = arg;
      flags.target = "custom";
    }
  }

  return flags;
}

function showHelp() {
  console.log(`${BOLD}Usage:${RESET}  npx revoact [options]`);
  console.log();
  console.log(`${BOLD}Options:${RESET}`);
  console.log(`  ${CYAN}--claude,  -c${RESET}    Install to Claude Code   ${DIM}(~/.claude/skills)${RESET}`);
  console.log(`  ${CYAN}--gemini,  -g${RESET}    Install to Antigravity   ${DIM}(~/.gemini/config/skills)${RESET}`);
  console.log(`  ${CYAN}--project, -p${RESET}    Install to current project ${DIM}(.agents/skills)${RESET}`);
  console.log(`  ${CYAN}--path <dir>${RESET}     Install to a custom directory`);
  console.log(`  ${CYAN}--yes,     -y${RESET}    Skip confirmation prompt`);
  console.log(`  ${CYAN}--list,    -l${RESET}    List included skills and exit`);
  console.log(`  ${CYAN}--help,    -h${RESET}    Show this help message`);
  console.log();
  console.log(`${BOLD}Examples:${RESET}`);
  console.log(`  ${DIM}$${RESET} npx revoact                ${DIM}# interactive mode${RESET}`);
  console.log(`  ${DIM}$${RESET} npx revoact --claude       ${DIM}# direct install to Claude${RESET}`);
  console.log(`  ${DIM}$${RESET} npx revoact -g -y          ${DIM}# install to Gemini, skip prompt${RESET}`);
  console.log(`  ${DIM}$${RESET} npx revoact --path ./my-skills`);
  console.log();
}

function showSkillList() {
  console.log(`${BOLD}Included Skills (6):${RESET}`);
  console.log();
  console.log(`  ${GREEN}📋  prd-doc${RESET}            Product Requirements Document`);
  console.log(`  ${GREEN}🏗️  architecture-doc${RESET}   System Architecture Documentation`);
  console.log(`  ${GREEN}🎨  design-doc${RESET}         Technical Design Specification`);
  console.log(`  ${GREEN}🗺️  roadmap-doc${RESET}        Product Roadmap & Phased Milestones`);
  console.log(`  ${GREEN}📝  readme-doc${RESET}         Developer-Friendly README`);
  console.log(`  ${GREEN}🛡️  security-doc${RESET}       Security & Compliance Review`);
  console.log();
}

// ── Main ─────────────────────────────────────────────────────

async function main() {
  const flags = parseArgs();

  banner();

  if (flags.help) {
    showHelp();
    process.exit(0);
  }

  if (flags.list) {
    showSkillList();
    process.exit(0);
  }

  // Verify source skills exist
  if (!fs.existsSync(SKILLS_SOURCE)) {
    console.error(
      `${RED}Error:${RESET} Skills source directory not found at ${SKILLS_SOURCE}`
    );
    console.error(`This usually means the package was not installed correctly.`);
    process.exit(1);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let targetKey = flags.target;
  let targetDir;

  // ── Select target ──────────────────────────────────────────
  if (!targetKey) {
    console.log(`${BOLD}  Where would you like to install the skills?${RESET}`);
    console.log();
    console.log(`    ${CYAN}1)${RESET}  Claude Code          ${DIM}~/.claude/skills${RESET}`);
    console.log(`    ${CYAN}2)${RESET}  Antigravity / Gemini  ${DIM}~/.gemini/config/skills${RESET}`);
    console.log(`    ${CYAN}3)${RESET}  Current project       ${DIM}.agents/skills${RESET}`);
    console.log(`    ${CYAN}4)${RESET}  Custom path`);
    console.log();

    const choice = await ask(rl, `  ${BOLD}Select (1-4):${RESET} `);

    switch (choice.trim()) {
      case "1":
        targetKey = "claude";
        break;
      case "2":
        targetKey = "gemini";
        break;
      case "3":
        targetKey = "project";
        break;
      case "4": {
        const customDir = await ask(rl, `  ${BOLD}Enter path:${RESET} `);
        targetDir = path.resolve(customDir.trim());
        targetKey = "custom";
        break;
      }
      default:
        console.log(`\n${RED}  Invalid selection. Exiting.${RESET}\n`);
        rl.close();
        process.exit(1);
    }
  }

  if (targetKey === "custom") {
    targetDir = targetDir || flags.customPath;
  } else {
    targetDir = TARGETS[targetKey].dir;
  }

  console.log();
  console.log(`  ${BOLD}Target:${RESET}  ${targetDir}`);
  console.log(`  ${BOLD}Skills:${RESET}  ${SKILL_NAMES.join(", ")}`);
  console.log();

  // ── Confirm ────────────────────────────────────────────────
  if (!flags.yes) {
    const confirm = await ask(rl, `  ${YELLOW}Proceed with installation? (Y/n):${RESET} `);
    if (confirm.trim().toLowerCase() === "n") {
      console.log(`\n  ${DIM}Installation cancelled.${RESET}\n`);
      rl.close();
      process.exit(0);
    }
  }

  rl.close();

  // ── Install ────────────────────────────────────────────────
  console.log();
  let installed = 0;
  let skipped = 0;

  for (const skill of SKILL_NAMES) {
    const src = path.join(SKILLS_SOURCE, skill);
    const dest = path.join(targetDir, skill);

    if (!fs.existsSync(src)) {
      console.log(`  ${YELLOW}⚠${RESET}  Skipped ${skill} ${DIM}(source not found)${RESET}`);
      skipped++;
      continue;
    }

    try {
      copyDirSync(src, dest);
      console.log(`  ${GREEN}✔${RESET}  Installed ${BOLD}${skill}${RESET}`);
      installed++;
    } catch (err) {
      console.log(`  ${RED}✖${RESET}  Failed ${skill}: ${err.message}`);
      skipped++;
    }
  }

  // ── Summary ────────────────────────────────────────────────
  console.log();
  console.log(
    `${GREEN}${BOLD}  ✅ Done!${RESET} ${installed} skill${installed !== 1 ? "s" : ""} installed${skipped > 0 ? `, ${skipped} skipped` : ""}.`
  );
  console.log(`  ${DIM}Location: ${targetDir}${RESET}`);
  console.log();
  console.log(`${BOLD}  Quick start:${RESET}`);
  console.log(`  ${DIM}Ask your AI assistant:${RESET} "Create a PRD for my project"`);
  console.log();
}

main().catch((err) => {
  console.error(`${RED}Error:${RESET} ${err.message}`);
  process.exit(1);
});
