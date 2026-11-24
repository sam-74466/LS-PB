# Leakage Specialist — static website

A responsive, single-page thermal scanning and leakage investigation website.

## Files
- `index.html` — page structure, SEO metadata, local business schema
- `styles.css` — responsive premium navy/orange/cyan design
- `script.js` — mobile navigation, scroll reveals, comparison slider and WhatsApp booking flow
- `assets/` — original SVG favicon and social preview image

## Deploy to GitHub Pages
1. Create or open the repository connected to `leakagespecialist.com`.
2. Upload `index.html`, `styles.css`, `script.js`, and the complete `assets` folder to the repository root.
3. In GitHub: **Settings → Pages**, select the correct branch and `/ (root)` folder, then save.
4. In Hostinger DNS, point the domain to the GitHub Pages records shown in your repository's Pages settings. Enable HTTPS after DNS verification.
5. Keep `CNAME` in the repository root containing exactly `leakagespecialist.com` if GitHub Pages requires it.

## Booking form behaviour (important)
This is a static GitHub Pages site and does not contain a private backend. The booking form validates required fields and opens WhatsApp with the entered details pre-filled. The customer must review and press **Send** in WhatsApp. A selected image is not uploaded automatically; the customer must attach it in the WhatsApp chat.

For automatic form storage, email notifications, or secure photo uploads, connect a backend service (for example Supabase Edge Functions or a form provider) and keep all secret keys server-side. Do not place secret API keys in `script.js`.

## Before publishing
- Confirm the business phone, email and address.
- Replace illustrative thermal graphics with genuine inspection photos only when available and authorized.
- Confirm whether inspection reports are included in each service; the FAQ intentionally avoids promising a specific report format.
- Test phone, WhatsApp, email and booking links on mobile.
- Add a real Google Maps embed only after confirming the exact business map pin.
- Add `sitemap.xml` and `robots.txt` when the final canonical deployment URL is live.

## Brands and industry ecosystem section
The page now includes an external brand-reference strip and an industry-network card grid. The displayed marks are text-based visual identifiers, not copied official logo artwork. No partnership or endorsement is claimed. The Pune Waterproofing link used is `https://punewaterproof.in/`, identified in web research as a Pune Waterproofing website; verify that this is the exact business/site you intended before publishing.

## Legal and website support pages added
- `privacy-policy.html`
- `terms-and-conditions.html`
- `disclaimer.html`
- `cookie-policy.html`
- `404.html`
- Updated `sitemap.xml` and homepage footer links

The policy pages describe the current implementation: the enquiry form prepares a WhatsApp message and does not submit to a site database; selected photos are not uploaded by the website; the page currently has no first-party analytics tracker. Revisit these statements if the site is later connected to a backend, CRM, analytics, advertising pixels, embedded maps or automatic uploads.

**Legal review:** These are practical starter templates, not legal advice or a guarantee of compliance with every applicable law. Have an India-qualified lawyer review the wording, especially the service terms, liability wording, data-handling practices and any future booking/payment arrangements before relying on them as binding legal documents.
