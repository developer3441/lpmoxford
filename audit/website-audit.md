LPM Oxford website audit — 1 October 2026
======================================

The website has useful property inventory and recognisable Oxford branding, but its current implementation weakens discovery, trust and enquiries. The most urgent work is to fix crawler access, replace outdated tenancy guidance, repair broken journeys and make the site usable on phones. A visual refresh should follow those corrections.

**Scope and evidence**

Reviewed 21 URLs discovered from the homepage, covering the main navigation, guides, registration/login entry points, valuation, contact, terms and broken destinations. Also inspected three property detail pages, map view, a minimum-bedroom search, robots.txt, the conventional XML sitemap path and availability of the complaints PDF. Captured desktop screenshots at 1440px and four pages in a 390px mobile browser context. Evidence is in `findings.json`, `journeys.json`, saved HTML and PNG files in this directory.

This is a public website audit. It does not establish backend security, account functionality after login, enquiry delivery, live inventory accuracy, traffic, conversion rates, Google indexing status or field Core Web Vitals. No accounts were created and no enquiry forms were submitted. Individual property details were sampled, not exhaustively inspected. The complaints PDF returned HTTP 200; its text was not reviewed. Browser results take precedence over search-engine snapshots, which showed different inventory counts.

**Immediate priorities**

| Priority | Verified issue | Impact | Recommended action |
|---|---|---|---|
| P0 | robots.txt returns `User-agent: *` followed by `Disallow: /` | Compliant crawlers are instructed not to crawl site content | Confirm this is the intended public production site; allow public pages and necessary assets, then verify access in Search Console |
| P0 | Tenant guide describes tenant administration/reference charges, a month's holding deposit and normally six weeks' security deposit | Published guidance conflicts with current rules for covered English tenancies | Have a qualified adviser review and replace tenant and landlord guidance before republishing it |
| P1 | Three homepage featured cards have broken images, zero prices and empty property IDs | Visitors encounter apparent inventory corruption and 404 detail pages | Repair the featured-property query; render only complete records and a deliberate empty state |
| P1 | Homepage Contact Us shortcut points to `/contact`, which returns 404 | An enquiry route ends in an error | Point it to `/contact-us` and redirect the obsolete URL |
| P1 | Map view displays a Google Maps loading error | Location-based property discovery fails | Review Maps configuration and legacy JavaScript; retest with a clean browser |
| P1 | All four mobile samples retain a 980px layout viewport on a 390px device | The desktop layout shrinks, making controls and text difficult to use | Build responsive layouts, add the viewport declaration and test at practical phone sizes |
| P1 | Contact form has a company field marked mandatory but no message field | Residential visitors cannot explain their enquiry naturally | Use name, email or phone, enquiry type and message; remove the company requirement |
| P1 | Terms page contains only a placeholder | Visitors cannot access meaningful terms | Publish reviewed terms and provide clear links to privacy and other relevant policies |
| P2 | Generic titles, empty descriptions, absent canonical links and no detected JSON-LD on audited navigation pages | Weak search presentation and unnecessary URL ambiguity | Implement metadata, canonical rules and appropriate structured data after crawler access is fixed |

The robots response was reproduced in two browser runs. This is a crawl block, not proof that every URL has disappeared from Google: URLs can still appear without their content being crawled. See [the site's robots file](https://www.lpmoxford.co.uk/robots.txt) and [Google's explanation](https://developers.google.com/search/docs/crawling-indexing/robots/intro).

For covered tenancies, current government guidance caps holding deposits at one week's rent and generally caps tenancy deposits at five weeks below £50,000 annual rent. Ordinary tenant administration/reference charges are not permitted payments. The site's six-month assured shorthold tenancy guidance also needs review against the changes effective from May 2026. These are findings about published copy, not evidence of what LPM currently charges or how it operates. Sources: [LPM tenant guide](https://www.lpmoxford.co.uk/tenant-guide), [government fee guidance](https://www.gov.uk/guidance/fees-you-can-charge-as-part-of-a-tenancy), [government tenancy overview](https://www.gov.uk/guidance/renters-rights-act-overview-for-tenants).

**Page and journey review**

| Page or feature | Observation | Improvement |
|---|---|---|
| [Homepage](https://www.lpmoxford.co.uk/) and `/home` | Oxford photograph communicates place, but dominates the first screen. Introductory copy is generic. Search is in a narrow sidebar. Featured cards fail. | Put a specific service proposition, search and valuation action near the top. Show genuine available properties and concise proof of local expertise. |
| [About](https://www.lpmoxford.co.uk/about-us) | Body copy still refers to “My Company Property”. No team profiles or concrete track record appeared in the reviewed body. | Replace template copy with verified company history, team photographs, local experience and evidence of service quality. |
| [Property search](https://www.lpmoxford.co.uk/property-search) | Live page returned 20 properties. The two-bedroom minimum filter returned 10. Location dropdown mixes towns, postcodes and counties, including many distant locations. | Retain working filters; make location search understandable, prioritise actual coverage and give users clear sort and availability controls. |
| [Sales results](https://www.lpmoxford.co.uk/property-search~for=1) | Returned no results and suggested broadening criteria. The Buyers menu's Register link incorrectly points here. | Correct the link and offer alerts or a direct enquiry when there is no sales stock. No results alone is not a software defect. |
| [Lettings results](https://www.lpmoxford.co.uk/property-search~for=2) | Photos, prices and property summaries are present, but rows show zero measurements and miscellaneous unknown values. A let property appeared in the broad search. | Hide unknown facts instead of presenting zeroes, distinguish available and let stock, and standardise summaries and imagery. |
| [Map view](https://www.lpmoxford.co.uk/?_s=property-search&map=1) | Google displays an error over a blank map background. | Restore the map and provide a usable list fallback. |
| [Oxford Road detail](https://www.lpmoxford.co.uk/property-search~action=detail,pid=260) | Useful descriptive bullet points and a viewing form are present. Empty features, zero floor area and missing EPC-chart text weaken presentation. | Validate listing completeness and clearly present relevant costs, availability and energy information. Verify which requirements apply to the particular property. |
| [Garsington Road detail](https://www.lpmoxford.co.uk/property-search~action=detail,pid=471) | Description says immediately available while its status says coming soon. Zero floor area and missing EPC-chart text also appear. | Make availability consistent across feed, summary and detail. |
| [Roger Dudman Way detail](https://www.lpmoxford.co.uk/property-search~action=detail,pid=439) | Listed as let, with effectively empty description and no useful gallery content in the sample. | Remove incomplete records from discovery or clearly present an archived listing with alternatives. |
| [Tenants](https://www.lpmoxford.co.uk/tenants) and [tenant guide](https://www.lpmoxford.co.uk/tenant-guide) | Explain the process, but include outdated charges and tenancy language. Tenant page mentions Saturday booking hours that the contact page does not list. | Rewrite against current practice and guidance; distinguish viewing, booking and office hours. Add an obvious repair-reporting route if offered. |
| [Landlord guide](https://www.lpmoxford.co.uk/landlord-guide) | Describes letting and management services, but sales benefits are buried in long guidance. Tenancy and tax wording needs professional review. | Separate service packages from detailed guidance. Explain inclusions, fees and the valuation process. |
| [Buyers](https://www.lpmoxford.co.uk/buyers) and [buyer guide](https://www.lpmoxford.co.uk/buyers-guide) | Basic journey exists but copy is generic, long and sometimes poorly edited. | Make a short overview with useful next actions, local information and reviewed supporting guidance. |
| [Vendors](https://www.lpmoxford.co.uk/vendors) and [vendor guide](https://www.lpmoxford.co.uk/vendor-guide) | Valuation links and selling stages exist. Marketing claims have little concrete supporting evidence. | Show actual photography quality, marketing methods, team involvement and verified recent outcomes. |
| [Valuation](https://www.lpmoxford.co.uk/valuation) | Form has 13 visible entry controls; title and second address line are marked mandatory. | Start with property address, sale/letting intent and contact details. Explain the appointment and realistic response time. |
| [Contact](https://www.lpmoxford.co.uk/contact-us) | Address, phone, email and weekday hours are visible. Five-field form lacks a message box. | Add click-to-call/email, a message field, enquiry routing and a privacy link beside the form. |
| [Registration](https://www.lpmoxford.co.uk/register) | Requires an extensive profile for alerts, including address and telephone. Client-side errors occur on load. | Offer a simple email-and-search-criteria alert flow; collect more information only when needed. Verify registration end to end in an authorised test environment. |
| [Sign in](https://www.lpmoxford.co.uk/myarea) | Public login page is reachable; JavaScript error observed. | Repair the error and test login/recovery separately with authorised credentials. |
| [Terms](https://www.lpmoxford.co.uk/terms) | Only placeholder copy. | Publish complete reviewed content. |
| Sitemap and complaints | `/sitemap` and `/sitemap.xml` both return 404. Linked complaints PDF returns 200. | Fix the footer link and publish a maintained XML sitemap. Make complaint guidance easy to read on mobile. |

**Design, positioning and conversion**

The wood texture, patterned background, lime headings, bright pink buttons and older decorative icons compete for attention. Fixed-width columns, large image shadows and oversized empty spaces make the presentation feel dated. These are visual judgments based on screenshots, separate from the confirmed functional defects.

Keep the Oxford identity and recognisable LPM name. Use a restrained palette, readable typography, generous but purposeful spacing, consistent property photography and clear button hierarchy. A homepage should quickly explain where LPM works and why a landlord or seller should choose it. Avoid unsupported claims; substantiate experience with real people, services and outcomes.

The current site gives account registration considerable prominence while valuation is tucked into submenus. Prioritise the business journeys: find a property, book a viewing, request a valuation and contact the team. Shortening forms and placing useful actions beside relevant information should reduce friction; the size of any conversion improvement requires measurement.

A proposed main navigation is **Buy · Rent · Landlords · Sell · About · Contact**, with **Book a valuation** as the prominent action. Keep existing-tenant support and account access clearly available. Proposed homepage order: local service proposition and search; valuation action; available properties; landlord/seller services; verified reviews and team; local coverage; contact and policy footer.

**SEO, accessibility and implementation**

- Crawl access is the first SEO dependency. Fix it before investing heavily in content expansion. Check Search Console rather than inferring rankings or traffic from this audit.
- Titles such as `Homepage - LPM2` and `property-search - LPM2` are weak. Use descriptive service-and-location titles. The HTML includes empty Description tags; this is different from having no tag at all.
- The 21 audited navigation URLs had no detected canonical link or JSON-LD block. `/` and `/home` both serve the homepage. Establish one preferred homepage and consistent URL rules for search filters and property pages. Absence of JSON-LD does not prove every possible structured-data format is absent.
- Consider accurate business and breadcrumb structured data. Do not promise special property search features merely from adding schema.
- Missing viewport declarations and 980px mobile layout measurements support the responsive-design finding. The observed issue is shrink-to-fit desktop content; horizontal overflow was not recorded in the mobile samples.
- Audited pages have no document language declaration. Contact fields have visible adjacent text but no associated HTML label elements. Repair semantic labels, required-field announcements, input types and keyboard focus, then perform keyboard and screen-reader testing.
- Homepage contact details have no `tel:` or `mailto:` links. Add them for practical phone use.
- The visual style warrants contrast and touch-target testing, but this review did not measure WCAG contrast ratios or certify accessibility.
- Generator metadata identifies Gnomen CMS 4. This is a useful maintenance lead, not proof of its patch level or a vulnerability. Review supported platform options and the property-feed integration with the provider.
- Runtime errors include a homepage syntax error, an undefined map-related symbol on property pages and errors on registration. Gallery screenshots on two sampled details show loading states; those captures alone do not establish a permanent gallery failure. Retest loading and interaction after repairing the scripts.
- Several footer characters are visibly misencoded, and spelling errors appear across the site. Standardise encoding and edit the copy throughout.
- Privacy and cookie policy links were not found in the reviewed main navigation/footer. Check actual data handling and cookies, then provide appropriate notices and controls. Absence from those locations does not establish that no policy exists anywhere.

Performance scores were not collected. Single browser navigation timings are affected by location, cache and third-party services and are not representative Core Web Vitals. Measure mobile performance after functional repairs; inspect imagery, script dependencies and repeated assets based on those results.

**Recommended delivery order and acceptance checks**

1. Repair production crawler configuration, reviewed tenancy copy, broken contact/property links, terms content and map view. Accept when public crawling is permitted as intended, links resolve and the map works without an error overlay.
2. Repair listing validation and availability consistency. Accept when featured cards always have a real ID, meaningful price and usable image, and unavailable records have deliberate presentation.
3. Deliver responsive search, property details, contact and valuation. Accept at 390px without a shrunk desktop layout, with usable navigation, readable content and accessible form labels.
4. Rewrite service and About pages, simplify alerts, add verified trust evidence and complete metadata/sitemap work. Preserve useful URLs and redirect changed ones.
5. Verify enquiry delivery and account flows in an authorised environment; measure search-to-detail, viewing enquiries, valuation enquiries and calls. Establish a baseline before claiming commercial improvement.

Useful evidence: [desktop homepage](home-desktop.png), [mobile homepage](home-mobile.png), [contact form](contact-us-desktop.png), [valuation form](valuation-desktop.png), [map error](index.php-_s-property-search-map-1.png), [browser findings](findings.json), [journey checks](journeys.json).
