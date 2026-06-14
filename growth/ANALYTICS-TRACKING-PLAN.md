# SafeJSON Analytics Tracking Plan

Last updated: 2026-06-14

## Measurement Goal

Measure the full path from discovery to paid activation without collecting pasted JSON, JWTs, schemas, JSONPath queries, formatted output, license keys, clipboard content, or page content.

SafeJSON analytics may record tool names, page paths, button actions, input size buckets, plan names, prices, UTM parameters, and high-level success/failure states. It must never record pasted content.

## Current Stack

| Tool | Purpose |
| --- | --- |
| GA4 | Pageviews, source/medium, campaign attribution, product funnel events |
| Lemon Squeezy | Checkout, license key generation, payment/refund/subscription events |
| SafeJSON event wrapper | Sends privacy-safe client-side events through `trackEvent` |

## Standard Event Context

Every SafeJSON event should include:

| Parameter | Example | Notes |
| --- | --- | --- |
| `app` | `safejson` | Static app identifier |
| `event_version` | `1` | Increment only when event shape changes |
| `page_path` | `/pricing` | Path only; never include query content |
| `page_title` | `Pricing - SafeJSON Pro...` | Useful while GA page-title reports are noisy |
| `referrer_host` | `dev.to` | Host only, not full URL |
| `utm_source` | `youtube` | From URL when present |
| `utm_medium` | `social` | From URL when present |
| `utm_campaign` | `launch_wave_001` | From URL when present |
| `utm_content` | `video_demo_description` | From URL when present |
| `utm_term` | `safe_json_formatter` | Optional |

## Events

| Event | Description | Properties | Trigger |
| --- | --- | --- | --- |
| `tool_run` | User runs a formatter or Pro tool | `tool`, `input_size_bucket`, `pro_unlocked`, `free_usage_count` where applicable | Tool action |
| `tool_success` | Tool completes successfully | `tool`, `input_size_bucket` | Successful output |
| `tool_sample_loaded` | User loads the sample JSON | `tool` | Sample button |
| `tool_output_copy` | User copies output | `tool` | Copy button |
| `tool_output_download` | User downloads output | `tool` | Download button |
| `pro_tool_viewed` | Pro tool page initializes | `tool`, `pro_unlocked`, `free_usage_count` | Pro tool page load |
| `pro_limit_reached` | Free usage limit reached | `tool`, `free_limit` | Limit threshold |
| `pro_banner_pricing_click` | Pro banner pricing link clicked | `tool` | Pro banner CTA |
| `pro_limit_pricing_click` | Limit notice pricing link clicked | `tool` | Limit CTA |
| `pricing_viewed` | Pricing page viewed | `surface` | Pricing page load |
| `checkout_click` | Lemon Squeezy checkout link clicked | `plan`, `price_usd` | Monthly/yearly checkout CTA |
| `checkout_return` | User returns to `/unlock?paid=1` | `paid`, `surface` | Checkout redirect |
| `unlock_viewed` | Unlock page viewed | `surface` | Unlock page load |
| `license_activation_success` | License activation succeeds | `activation_usage`, `activation_limit`, `variant` | Successful activation |
| `license_activation_failed` | License activation fails | `reason` | Failed activation |

## GA4 Key Events

Mark these as key events in GA4:

| Key event | Why |
| --- | --- |
| `checkout_click` | Highest-intent pre-payment action visible on-site |
| `checkout_return` | Payment flow returned to SafeJSON |
| `license_activation_success` | Paid user successfully activated Pro |
| `pro_limit_reached` | Strong product-qualified lead signal |

Do not mark `tool_run` as a key event. It is a product usage signal, not a business conversion.

## UTM Rules

Use this pattern for external links:

```text
https://www.safejson.dev/?utm_source=<platform>&utm_medium=<channel>&utm_campaign=launch_wave_001&utm_content=<placement>
```

Recommended links:

| Platform | URL |
| --- | --- |
| DEV.to profile/article | `https://www.safejson.dev/?utm_source=devto&utm_medium=community&utm_campaign=launch_wave_001&utm_content=article_body` |
| YouTube description | `https://www.safejson.dev/?utm_source=youtube&utm_medium=video&utm_campaign=launch_wave_001&utm_content=demo_description` |
| Product Hunt | `https://www.safejson.dev/?utm_source=producthunt&utm_medium=directory&utm_campaign=launch_wave_001&utm_content=product_listing` |
| SaaSHub | `https://www.safejson.dev/?utm_source=saashub&utm_medium=directory&utm_campaign=launch_wave_001&utm_content=listing` |
| Indie Hackers | `https://www.safejson.dev/?utm_source=indiehackers&utm_medium=community&utm_campaign=launch_wave_001&utm_content=product_page` |
| GitHub Discussion | `https://www.safejson.dev/?utm_source=github&utm_medium=community&utm_campaign=launch_wave_001&utm_content=discussion_1` |
| Edge Add-ons | `https://www.safejson.dev/?utm_source=edge_addons&utm_medium=extension_store&utm_campaign=launch_wave_001&utm_content=listing` |

## Weekly Review

Review these views every Friday:

1. Acquisition: users and sessions by source/medium/campaign.
2. Activation: `tool_run`, `tool_success`, and `pro_tool_viewed` by page path.
3. Revenue intent: `pro_limit_reached`, `checkout_click`, `checkout_return`, `license_activation_success`.
4. Content: landing pages by `page_path`, not only `page_title`.
5. Data quality: internal/test traffic, bot-looking data centers, missing UTM traffic.

Decision rules:

- If traffic is mostly direct, improve UTM tagging before changing product copy.
- If UTM traffic lands but does not run a tool, improve landing-page clarity or route visitors to a specific tool.
- If users run Pro tools but do not hit the limit, do not optimize pricing yet.
- If `pro_limit_reached` grows but `checkout_click` stays flat, improve Pro CTA and pricing proof.
- If `checkout_click` grows but `checkout_return` stays flat, inspect Lemon Squeezy checkout.
- If `checkout_return` grows but activation fails, improve license email/unlock instructions.
