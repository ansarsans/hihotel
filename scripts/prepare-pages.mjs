import { execSync } from "node:child_process";
import { cpSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function detectRepositoryName() {
  try {
    const remoteUrl = execSync("git config --get remote.origin.url", {
      encoding: "utf8",
    }).trim();

    const sshMatch = remoteUrl.match(/github\.com:([^/]+)\/(.+?)(?:\.git)?$/);
    if (sshMatch) {
      return sshMatch[2];
    }

    const httpsMatch = remoteUrl.match(/github\.com\/([^/]+)\/(.+?)(?:\.git)?$/);
    if (httpsMatch) {
      return httpsMatch[2];
    }
  } catch {
    // Ignore and fallback.
  }

  try {
    const packageJsonPath = resolve(process.cwd(), "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
    return packageJson.name;
  } catch {
    return "site";
  }
}

const repositoryName = process.env.GITHUB_PAGES_REPO || detectRepositoryName();

const env = {
  ...process.env,
  GITHUB_PAGES: "true",
  GITHUB_PAGES_REPO: repositoryName,
};

try {
  execSync("npm run build", { stdio: "inherit", env });
} catch {
  process.exit(1);
}

rmSync("docs", { recursive: true, force: true });
cpSync("out", "docs", { recursive: true });
writeFileSync("docs/.nojekyll", "");

console.log(`[pages] Export complete: docs/ (basePath: /${repositoryName})`);
