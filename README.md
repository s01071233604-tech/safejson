# SafeJSON - The JSON tool that never sees your data

SafeJSON is a privacy-first JSON formatter and developer toolkit. Format,
validate, view, compare, decode, and query JSON entirely in your browser.

Website: https://www.safejson.dev

## Why SafeJSON exists

Developers paste sensitive JSON into online tools every day: API responses,
JWTs, credentials, config files, logs, webhooks, and production payloads.

SafeJSON is built around a simple promise: your JSON should not leave your
browser.

You do not have to trust that promise. You can verify it:

1. Open https://www.safejson.dev
2. Open DevTools
3. Open the Network tab
4. Paste JSON and use the formatter
5. Confirm that pasted JSON is processed without data-upload requests

## Tools

### Free tools

- JSON Formatter
- JSON Validator
- JSON Beautifier
- JSON Viewer
- JSON Parser
- CSV to JSON
- JSON to CSV

### Pro tools

- JSON Diff Checker
- JWT Decoder
- JSONPath Query
- JSON Schema Validator

SafeJSON Pro is $5/month or $39/year. One license activates up to 2 devices.
Payment and license delivery are handled by Lemon Squeezy.

Pricing: https://www.safejson.dev/pricing

## Large JSON support

SafeJSON is designed for 50MB+ JSON files in formatter, beautifier, viewer, and
parser workflows. Large JSON is parsed with a Web Worker so the UI stays
responsive.

## Key pages

- JSON Formatter: https://www.safejson.dev/
- JSON Validator: https://www.safejson.dev/json-validator
- JSON Beautifier: https://www.safejson.dev/json-beautifier
- JSON Viewer: https://www.safejson.dev/json-viewer
- JSON Parser: https://www.safejson.dev/json-parser
- JSON Diff: https://www.safejson.dev/diff
- JWT Decoder: https://www.safejson.dev/jwt
- JSONPath Query: https://www.safejson.dev/jsonpath
- JSON Schema Validator: https://www.safejson.dev/schema
- SafeJSON Answers: https://www.safejson.dev/answers
- SafeJSON vs jsonformatter.org: https://www.safejson.dev/vs/jsonformatter-org

## Comparison

| Feature | SafeJSON | Server-side JSON tools |
| --- | --- | --- |
| Client-side JSON processing | Yes | Usually no |
| Pasted JSON leaves your browser | No | Often yes |
| Verifiable with DevTools Network | Yes | Usually no |
| Open source | Yes | Usually no |
| Ads | No | Often yes |
| JSON Diff | Yes | Varies |
| JWT Decoder | Yes | Varies |
| JSONPath | Yes | Varies |
| Schema Validator | Yes | Varies |

## Browser extension

SafeJSON also includes a browser extension for formatting raw JSON responses.

Manual install:

1. Clone this repository
2. Open `chrome://extensions` or `edge://extensions`
3. Enable developer mode
4. Click "Load unpacked"
5. Select the `extension/` folder

## Tech stack

- Next.js 16
- React 19
- Tailwind CSS
- Phosphor Icons
- Vercel
- Lemon Squeezy License API

## Development

```bash
npm install
npm run dev
```

## License

MIT
