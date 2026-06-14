"use client";

import { sendGAEvent } from "@next/third-parties/google";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function inputSizeBucket(text: string): string {
  const bytes = new TextEncoder().encode(text).length;

  if (bytes < 1_024) return "<1kb";
  if (bytes < 100 * 1_024) return "1kb-100kb";
  if (bytes < 1024 * 1024) return "100kb-1mb";
  if (bytes < 10 * 1024 * 1024) return "1mb-10mb";
  return "10mb+";
}

export function trackEvent(
  name: string,
  params: AnalyticsParams = {},
): void {
  if (typeof window === "undefined") return;

  const searchParams = new URLSearchParams(window.location.search);
  const utmParams = Object.fromEntries(
    UTM_KEYS.map((key) => [key, searchParams.get(key) || undefined]),
  );
  let referrerHost: string | undefined;
  try {
    referrerHost = document.referrer
      ? new URL(document.referrer).hostname
      : undefined;
  } catch {
    referrerHost = undefined;
  }

  sendGAEvent("event", name, {
    app: "safejson",
    event_version: 1,
    page_path: window.location.pathname,
    page_title: document.title,
    referrer_host: referrerHost,
    ...utmParams,
    ...params,
  });
}
