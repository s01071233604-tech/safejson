# SafeJSON YouTube Content Cluster

**Channel:** SafeJSON
**First video:** https://www.youtube.com/watch?v=Jlks9EU9I3Q (published 2026-06-14)
**Strategy:** 3-video cluster covering the core verification + tool workflow. One video per month.

---

## Video 1: How to Verify Any JSON Formatter Is Safe ✅ PUBLISHED

**Title:** How to Verify Any JSON Formatter Is Safe (30-Second Test)

**Target keyword:** verify JSON formatter safe, client-side JSON formatter

**Chapters:**
- 0:00 — The problem
- 0:30 — 30-second DevTools test
- 1:00 — Client-side vs server-side
- 1:30 — SafeJSON walkthrough
- 2:30 — How to verify yourself

**Pinned comment:**
```
Put this to the test yourself: open DevTools → Network tab while using
any JSON formatter. If you see requests containing your data, find a
client-side tool instead.

SafeJSON: https://www.safejson.dev
Source: https://github.com/Json-Lee-git/SafeJSON
```

**CTA:** Try SafeJSON → https://www.safejson.dev

**Embed on:** `/support` page

---

## Video 2: Compare JSON Files Without Uploading Data (Plan)

**Title:** How to Compare Two JSON Files Without Uploading Them — SafeJSON Diff

**Target keyword:** JSON diff tool local, compare JSON without upload, client-side JSON diff

**Description template:**
```
Comparing two JSON objects should not require uploading your data to a
server. Most online JSON diff tools process your data server-side — but
there is a better way.

This video shows how SafeJSON Diff compares two JSON objects entirely in
your browser, with no pasted-content upload.

⏱ Chapters:
0:00 — Why server-side diff tools are a privacy risk
0:45 — SafeJSON Diff walkthrough
1:30 — Color-coded results: added, removed, changed
2:00 — Deep comparison of nested objects
2:30 — Large file diff with Web Workers (50MB+)
3:00 — How to verify no upload with DevTools Network tab

🔗 Links:
SafeJSON Diff: https://www.safejson.dev/diff
Website: https://www.safejson.dev

📋 Tags: json diff, compare json files, json diff tool, client-side json diff,
no upload json diff, developer tools, SafeJSON
```

**Pinned comment:**
```
Test it: open DevTools → Network tab while running a diff on SafeJSON.
No request contains your pasted JSON — it is all local.

Try it: https://www.safejson.dev/diff
```

**CTA:** Try SafeJSON Diff → https://www.safejson.dev/diff

**Embed on:** `/diff` page

---

## Video 3: Decode JWT Locally Without Leaking Tokens (Plan)

**Title:** Decode JWT Tokens Without Sending Them to a Server — SafeJSON JWT Decoder

**Target keyword:** JWT decoder local, decode JWT without upload, client-side JWT decoder, safe JWT tool

**Description template:**
```
Never paste a production JWT into a server-side decoder. When you decode
a JWT on a remote server, that server sees every claim — user ID, email,
permissions, expiration.

This video shows how SafeJSON JWT Decoder decodes tokens entirely in your
browser, with no token upload.

⏱ Chapters:
0:00 — The problem with server-side JWT decoders
0:45 — How JWT decoding works client-side
1:30 — Header, payload, and signature explained
2:00 — Production token safety
2:30 — How to verify no upload with DevTools Network tab

🔗 Links:
SafeJSON JWT Decoder: https://www.safejson.dev/jwt
Website: https://www.safejson.dev

📋 Tags: jwt decoder, decode jwt local, jwt tool, client-side jwt, safe jwt
decoder, no upload jwt, developer tools, SafeJSON
```

**Pinned comment:**
```
Never paste a production JWT into a server-side decoder. SafeJSON
decodes JWTs locally — verify with DevTools Network tab.

Try it: https://www.safejson.dev/jwt
```

**CTA:** Try SafeJSON JWT Decoder → https://www.safejson.dev/jwt

**Embed on:** `/jwt` page

---

## Production Notes

- Screen recording: OBS or similar, 1920×1080
- No face cam needed — screen + voiceover is sufficient for dev tools
- Each video: 2–4 minutes
- Publish as "unlisted" first, verify description/links, then set public
- Cross-link all 3 videos in end screens and descriptions
- Post each video to DEV.to as a companion article
