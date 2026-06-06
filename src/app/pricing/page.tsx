import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <header className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-emerald-400">{`{`}</span>
            SafeJSON
            <span className="text-emerald-400">{`}`}</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Simple,{" "}
            <span className="text-emerald-400">privacy-first</span> pricing
          </h1>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Core JSON formatting is free forever. Advanced tools for developers
            who debug JSON every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Free tier */}
          <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <h2 className="text-lg font-semibold mb-1">Free</h2>
            <p className="text-4xl font-bold mb-6">
              $0
              <span className="text-base font-normal text-zinc-500">
                /forever
              </span>
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "JSON Formatter & Validator",
                "Tree view with collapse",
                "Error detection (line + column)",
                "Dark mode",
                "Copy & Download",
                "100% client-side privacy",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-emerald-400 shrink-0 mt-0.5">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="block w-full text-center py-3 rounded-xl border border-zinc-700 text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              Use Free
            </Link>
          </div>

          {/* Pro tier */}
          <div className="p-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 relative">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-emerald-400 text-black text-xs font-semibold">
              Pro
            </div>
            <h2 className="text-lg font-semibold mb-1 mt-1">Pro</h2>
            <p className="text-4xl font-bold mb-1">
              $5
              <span className="text-base font-normal text-zinc-500">
                /month
              </span>
            </p>
            <p className="text-xs text-zinc-600 mb-6">
              or $39/year (save 35%)
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Free",
                "JSON Diff Checker",
                "JWT Decoder",
                "JSONPath Query (coming soon)",
                "Schema Validator (coming soon)",
                "Priority support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-emerald-400 shrink-0 mt-0.5">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors"
            >
              Get Pro
            </a>
            <p className="text-xs text-zinc-600 text-center mt-3">
              Cancel anytime. No questions asked.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed">
            All tools run entirely in your browser. We never see your data.
            Payment is handled securely by Stripe — we never see your payment
            details either.
          </p>
        </div>
      </main>
    </div>
  );
}
