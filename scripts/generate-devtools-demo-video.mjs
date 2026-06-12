import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const origin = process.env.SAFEJSON_BASE_URL || "https://www.safejson.dev";
const outputDir = path.join(process.cwd(), "growth", "assets");
const outputFile = path.join(outputDir, "safejson-devtools-verification-demo.webm");

const sampleJson = JSON.stringify(
  {
    service: "billing-api",
    environment: "production",
    requestId: "req_7f3a91",
    user: {
      id: 1842,
      email: "redacted@example.com",
      role: "admin",
    },
    tokens: ["redacted-github-token", "redacted-aws-key"],
    payload: {
      plan: "pro",
      seats: 2,
      active: true,
    },
  },
  null,
  2
);

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: {
    dir: outputDir,
    size: { width: 1280, height: 720 },
  },
});

const page = await context.newPage();
const networkEvents = [];
let captureRuntime = false;

page.on("request", (request) => {
  if (!captureRuntime) return;
  const postData = request.postData() || "";
  const containsPastedContent =
    postData.includes("redacted-github-token") ||
    postData.includes("redacted-aws-key") ||
    postData.includes("billing-api");

  networkEvents.push({
    method: request.method(),
    url: request.url(),
    containsPastedContent,
  });
});

await page.goto(origin, { waitUntil: "networkidle" });

await page.addStyleTag({
  content: `
    @keyframes pulseSafeJson {
      0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.35); }
      50% { box-shadow: 0 0 0 12px rgba(34, 197, 94, 0); }
    }
  `,
});

await page.evaluate(() => {
  const root = document.createElement("div");
  root.id = "safejson-demo-overlay";
  root.innerHTML = `
    <div class="sj-title">SafeJSON DevTools Verification</div>
    <div class="sj-subtitle">Paste JSON. Watch Network. Confirm no request contains pasted content.</div>
    <div class="sj-panel">
      <div class="sj-panel-title">DevTools-style Network check</div>
      <div class="sj-row"><span>Requests containing pasted JSON</span><strong id="sj-sensitive">0</strong></div>
      <div class="sj-row"><span>Pasted-content uploads</span><strong id="sj-upload">0</strong></div>
      <div class="sj-ok" id="sj-status">Ready to verify</div>
    </div>
  `;
  root.style.cssText = `
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 2147483647;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: white;
  `;

  const style = document.createElement("style");
  style.textContent = `
    #safejson-demo-overlay .sj-title {
      position: absolute;
      left: 32px;
      top: 26px;
      padding: 8px 12px;
      border: 1px solid rgba(255,255,255,.18);
      background: rgba(0,0,0,.78);
      border-radius: 8px;
      font-size: 22px;
      font-weight: 750;
      letter-spacing: 0;
    }
    #safejson-demo-overlay .sj-subtitle {
      position: absolute;
      left: 32px;
      top: 78px;
      max-width: 680px;
      padding: 8px 12px;
      background: rgba(0,0,0,.62);
      border-radius: 8px;
      font-size: 15px;
    }
    #safejson-demo-overlay .sj-panel {
      position: absolute;
      right: 28px;
      top: 96px;
      width: 356px;
      padding: 16px;
      border-radius: 8px;
      background: rgba(3,7,18,.92);
      border: 1px solid rgba(148,163,184,.28);
      box-shadow: 0 18px 42px rgba(0,0,0,.38);
    }
    #safejson-demo-overlay .sj-panel-title {
      font-size: 14px;
      font-weight: 700;
      color: #93c5fd;
      margin-bottom: 12px;
    }
    #safejson-demo-overlay .sj-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(148,163,184,.18);
      padding: 10px 0;
      font-size: 13px;
    }
    #safejson-demo-overlay .sj-row strong {
      color: #86efac;
      font-size: 18px;
    }
    #safejson-demo-overlay .sj-ok {
      margin-top: 10px;
      padding: 11px 12px;
      border-radius: 8px;
      background: rgba(22,163,74,.18);
      border: 1px solid rgba(74,222,128,.38);
      color: #bbf7d0;
      font-weight: 750;
      animation: pulseSafeJson 1.8s infinite;
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(root);
});

await page.waitForTimeout(2000);

const textarea = page.locator("textarea").first();
await textarea.click();
await page.keyboard.press(process.platform === "darwin" ? "Meta+A" : "Control+A");
captureRuntime = true;
await page.keyboard.type(sampleJson, { delay: 2 });
await page.waitForTimeout(1500);

const sensitive = networkEvents.filter((event) => event.containsPastedContent).length;

await page.evaluate(
  ({ sensitive }) => {
    const sensitiveEl = document.getElementById("sj-sensitive");
    const uploadEl = document.getElementById("sj-upload");
    const statusEl = document.getElementById("sj-status");
    if (sensitiveEl) sensitiveEl.textContent = String(sensitive);
    if (uploadEl) uploadEl.textContent = String(sensitive);
    if (statusEl) {
      statusEl.textContent =
        sensitive === 0
          ? "Verified: no request contains pasted content"
          : "Warning: pasted content appeared in a request";
    }
  },
  { sensitive }
);

await page.waitForTimeout(4000);

await page.evaluate(() => {
  const subtitle = document.querySelector("#safejson-demo-overlay .sj-subtitle");
  if (subtitle) {
    subtitle.textContent =
      "That is the point: you do not need to trust SafeJSON. You can verify it.";
  }
});

await page.waitForTimeout(4000);

const video = page.video();
await context.close();
await browser.close();

if (!video) {
  throw new Error("Playwright did not produce a video.");
}

const tempPath = await video.path();
await fs.copyFile(tempPath, outputFile);

console.log(JSON.stringify({ outputFile, checkedRequestsAfterPaste: networkEvents.length, pastedContentRequests: sensitive }, null, 2));
