import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - SafeJSON Pro | Client-side JSON Tools for Developers",
  description:
    "Simple, privacy-first pricing. Core JSON formatting is free forever. Pro tools include JSON Diff, JWT Decoder, JSONPath, Schema Validator, and 50MB+ local file support.",
  openGraph: {
    title: "SafeJSON Pro Pricing",
    description:
      "Get JSON Diff, JWT Decoder, JSONPath, Schema Validator, and large file support. All client-side.",
    url: "/pricing",
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
