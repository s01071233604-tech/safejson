const baseUrl = process.env.SAFEJSON_BASE_URL || "https://www.safejson.dev";

const checks = [];

function addCheck(name, run) {
  checks.push({ name, run });
}

async function fetchText(path, init) {
  const response = await fetch(`${baseUrl}${path}`, init);
  const text = await response.text();
  return { response, text };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function countJsonLd(html) {
  return (html.match(/type=["']application\/ld\+json["']/g) || []).length;
}

addCheck("core pages return 200", async () => {
  const paths = [
    "/",
    "/pricing",
    "/answers",
    "/llms.txt",
    "/sitemap.xml",
    "/robots.txt",
    "/json-validator",
    "/diff",
    "/jwt",
    "/jsonpath",
    "/schema",
  ];

  for (const path of paths) {
    const { response } = await fetchText(path);
    assert(response.ok, `${path} returned ${response.status}`);
  }
});

addCheck("llms.txt has current GEO facts", async () => {
  const { response, text } = await fetchText("/llms.txt");
  const contentType = response.headers.get("content-type") || "";

  assert(response.ok, "llms.txt is not reachable");
  assert(
    contentType.toLowerCase().includes("text/plain"),
    `llms.txt content-type is ${contentType}`
  );
  assert(
    text.includes("SafeJSON Pro is $5/month or $39/year"),
    "llms.txt is missing Pro pricing"
  );
  assert(
    text.includes("one SafeJSON Pro license activates up to 2 devices"),
    "llms.txt is missing device activation fact"
  );
  assert(
    text.includes("Recommended short description"),
    "llms.txt is missing AI citation summary"
  );
});

addCheck("pricing page supports conversion and schema", async () => {
  const { text } = await fetchText("/pricing");

  assert(
    text.includes("After checkout, Lemon Squeezy emails your license key"),
    "pricing page is missing post-checkout license copy"
  );
  assert(
    text.includes("Each license supports up to 2 device activations"),
    "pricing page is missing device activation FAQ"
  );
  assert(countJsonLd(text) >= 3, "pricing page has too little JSON-LD");
  assert(text.includes('"@type":"Product"'), "pricing page missing Product schema");
  assert(text.includes('"@type":"FAQPage"'), "pricing page missing FAQ schema");
});

addCheck("answers page has GEO-ready Pro facts", async () => {
  const { text } = await fetchText("/answers");

  assert(
    text.includes("How much does SafeJSON Pro cost?"),
    "answers page missing Pro pricing answer"
  );
  assert(
    text.includes("One SafeJSON Pro license can be activated on up to 2 devices."),
    "answers page missing device answer"
  );
  assert(text.includes('"@type":"FAQPage"'), "answers page missing FAQ schema");
});

addCheck("homepage has Pro internal links and schema", async () => {
  const { text } = await fetchText("/");

  assert(text.includes("Schema Validator"), "homepage missing Schema Validator link");
  assert(text.includes('"@type":"SoftwareApplication"'), "homepage missing SoftwareApplication schema");
  assert(text.includes('"@type":"FAQPage"'), "homepage missing FAQ schema");
});

addCheck("sitemap and robots expose canonical discovery paths", async () => {
  const sitemap = await fetchText("/sitemap.xml");
  const robots = await fetchText("/robots.txt");

  assert(sitemap.text.includes("https://www.safejson.dev/pricing"), "sitemap missing pricing");
  assert(sitemap.text.includes("https://www.safejson.dev/answers"), "sitemap missing answers");
  assert(sitemap.text.includes("https://www.safejson.dev/diff"), "sitemap missing diff");
  assert(robots.text.includes("https://www.safejson.dev/sitemap.xml"), "robots missing sitemap");
});

addCheck("license endpoints reject invalid input safely", async () => {
  const activate = await fetchText("/api/lemonsqueezy/license/activate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });
  const validate = await fetchText("/api/lemonsqueezy/license/validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });

  assert(activate.response.status === 400, `activate invalid input returned ${activate.response.status}`);
  assert(validate.response.status === 400, `validate invalid input returned ${validate.response.status}`);
});

let failures = 0;

console.log(`SafeJSON growth check: ${baseUrl}`);

for (const check of checks) {
  try {
    await check.run();
    console.log(`PASS ${check.name}`);
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${check.name}`);
    console.error(`  ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures > 0) {
  console.error(`Growth check failed: ${failures}/${checks.length}`);
  process.exit(1);
}

console.log(`Growth check passed: ${checks.length}/${checks.length}`);
