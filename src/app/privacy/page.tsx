export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <header className="border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <a href="/" className="text-lg font-bold tracking-tight">
            <span className="text-emerald-400">{`{`}</span>
            SafeJSON
            <span className="text-emerald-400">{`}`}</span>
          </a>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Last updated: June 3, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Data Collection</h2>
          <p className="text-zinc-400 leading-relaxed">
            SafeJSON does not collect, store, transmit, or process any user
            data on any server. All JSON formatting, validation, and processing
            happens entirely in your browser using client-side JavaScript. No
            data ever leaves your device.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            Chrome Extension Permissions
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-3">
            The SafeJSON Chrome extension requests the following permissions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>
              <strong>storage</strong>: Used only to save your theme preference
              (dark/light mode) locally in your browser. No data is synced or
              transmitted.
            </li>
            <li>
              <strong>clipboardWrite</strong>: Used only when you explicitly
              click the "Copy" button to copy formatted JSON to your clipboard.
            </li>
            <li>
              <strong>Content script on all URLs</strong>: The extension reads
              the current page content only to detect and format JSON responses.
              No page content is stored, transmitted, or sent anywhere.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Third Parties</h2>
          <p className="text-zinc-400 leading-relaxed">
            SafeJSON uses Google Analytics to measure anonymous page views
            (through a privacy-safe implementation with IP anonymization). No
            personal data or JSON content is ever sent to third parties. We do
            not use advertising networks, tracking scripts, or data brokers.
            There are no marketing cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Open Source</h2>
          <p className="text-zinc-400 leading-relaxed">
            SafeJSON is open source. You can audit every line of code on GitHub
            to verify these privacy claims independently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-zinc-400 leading-relaxed">
            For questions about this privacy policy, open an issue on our GitHub
            repository.
          </p>
        </section>
      </main>
    </div>
  );
}
