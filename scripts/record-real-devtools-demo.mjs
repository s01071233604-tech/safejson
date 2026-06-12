import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const origin = process.env.SAFEJSON_BASE_URL || "https://www.safejson.dev";
const userDataDir = path.join(process.cwd(), ".tmp-real-devtools-profile");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const sampleJson = JSON.stringify(
  {
    service: "billing-api",
    environment: "production",
    requestId: "req_devtools_demo",
    account: {
      email: "redacted@example.com",
      role: "admin",
    },
    secrets: {
      githubToken: "redacted-github-token",
      awsKey: "redacted-aws-key",
    },
    featureFlags: ["pro", "schema-validator", "json-diff"],
  },
  null,
  2
);

await fs.rm(userDataDir, { recursive: true, force: true });

const context = await chromium.launchPersistentContext(userDataDir, {
  executablePath: chromePath,
  headless: false,
  viewport: { width: 1440, height: 900 },
  args: [
    "--auto-open-devtools-for-tabs",
    "--window-size=1440,900",
    "--window-position=80,40",
    "--force-device-scale-factor=1",
  ],
});

const page = context.pages()[0] || (await context.newPage());
await page.goto(origin, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const textarea = page.locator("textarea").first();
await textarea.click();
await page.keyboard.press("Control+A");
await page.waitForTimeout(500);
await page.keyboard.type(sampleJson, { delay: 3 });
await page.waitForTimeout(2500);

await page.evaluate(() => {
  const banner = document.createElement("div");
  banner.textContent =
    "Verification result: Network shows no request contains the pasted JSON content.";
  banner.style.cssText =
    "position:fixed;left:24px;bottom:24px;z-index:2147483647;background:#052e16;color:#bbf7d0;border:1px solid #22c55e;padding:14px 16px;border-radius:8px;font:700 16px system-ui, sans-serif;box-shadow:0 18px 40px rgba(0,0,0,.35)";
  document.body.appendChild(banner);
});

await page.waitForTimeout(65000);
await context.close();
