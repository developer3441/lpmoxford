LPM Residential — redesigned homepage

Open index.html directly in a browser. No build step or installation is needed.
For a local preview: python3 -m http.server 8765 --bind 127.0.0.1
Then open http://127.0.0.1:8765/

Files
  index.html     Semantic homepage markup and sample listings
  styles.css     Responsive design, type, colour and motion
  script.js      Search filters, saved homes and mobile navigation
  assets/        Local imagery, fonts and font licenses
  design/        Three visual references and the design specification
  audit/         Earlier audit of the existing website

Search filters the three featured snapshot listings. It does not connect to a
live property feed. The page explains the snapshot date and links to the
existing LPM site for current property details, the full collection, services
and valuation enquiries. Saved homes are stored only in this browser.

Oxford scene images were created with the built-in image generation tool.
Listing photos belong to their original LPM listings and were not generated.
Generation prompts and intentional design adaptations are in design/spec.json.
Fonts are hosted locally: DM Sans and Instrument Serif, with OFL licenses.

To launch publicly, connect the live inventory feed and update the listing
snapshot. Verify linked production journeys using the earlier website audit.
The homepage itself has not been deployed or connected to an enquiry backend.
