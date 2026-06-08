import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Diff Checker - Compare JSON Online | SafeJSON",
  description:
    "Compare two JSON objects side by side with color-coded differences. Client-side JSON diff with no data upload and verifiable zero-request processing.",
  openGraph: {
    title: "JSON Diff Checker - SafeJSON",
    description:
      "Compare two JSON objects side by side. All processing happens in your browser.",
    url: "/diff",
  },
  alternates: {
    canonical: "/diff",
  },
};

export default function DiffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
