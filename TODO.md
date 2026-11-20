# Angels Display Solutions — TODO

## Homepage shell, navigation, and brand treatment

- [x] Build a homepage with sections in this order: Hero; service highlights; About Us; What We Are Into; Our Services; Gallery preview; Why Us?; Contact; Footer.
- [x] Use the supplied Angels Display Solutions artwork at the far left of the header and in the footer; do not invent a different brand identity.
- [x] Provide primary navigation links Home, About Us, Services, Gallery, Contact. Home targets the top of the homepage; About Us, Services, and Contact target homepage sections; Gallery opens the separate Gallery page.
- [x] Show a transparent header over the hero, transition it on scroll to a logo-complementary dark background, keep the logo and navigation readable, and provide an accessible mobile menu with a clear open/closed state.
- [x] Organize replaceable images, captions, alt text, placeholder company content, social URLs, and contact information in easy-to-find data sections.

## Hero carousel and calls to action

- [x] Show the exact headline “Designing spaces that make jewellery shine” above a large carousel.
- [x] Include a short editable supporting placeholder, showroom/display/packaging imagery, captions, previous/next arrows, slide indicators, and a pause/stop control.
- [x] Advance automatically every 5 seconds by default; pause while hovered or focused; support touch swipes and manual controls; remain usable under reduced-motion preferences.
- [x] Provide prominent View Our Work and Get a Quote buttons. View Our Work leads to the homepage Gallery preview or full Gallery page; Get a Quote leads to Contact.

## About, services, gallery preview, and placeholders

- [x] Add four light service highlights: Premium Jewellery Display; Showroom Interiors; Visual Merchandising; Packaging Solutions.
- [x] Pair the existing About Us image with the supplied company description and supporting focus, approach, capability, and process content.
- [x] Add a new “What We Are Into” section directly after About Us with 11 animated offering cards covering showroom design, display, trays, custom solutions, packaging, VM, branding, feature walls, boutique design, 3D development, and corporate/retail displays.
- [x] Give About Us an immersive editorial composition with layered hierarchy, reveal-on-scroll motion, pointer-responsive light, image movement, and a more readable content rhythm rather than a static copy block.
- [x] Give What We Are Into a premium hi-tech/classy presentation with varied card spans, staggered reveal, hover signal motion, orbit details, and reduced-motion support.
- [x] Show four editorial service cards: Jewellery Showroom Design; Display and Visual Merchandising; Jewellery Packaging; Custom Display Solutions.
- [x] Make every service card expand inline with an accessible keyboard/screen-reader cue and clearly marked editable placeholder copy.
- [x] Add a curated gallery preview with varied editorial image sizing and a link to the separate Gallery page.
- [x] Add the supplied 4×5 jewellery display sheet as 20 separate boundary-aligned Display gallery panels, preserving each panel's original jewellery image and caption strip without added labels or edits.
- [x] Remove the Featured Projects section from the homepage.
- [x] Add Why Us? with editable placeholders for differentiators, values, and reasons to work with the company; do not invent claims.

## Gallery page and accessible lightbox

- [x] Create a separate Gallery page with balanced editorial image offsets and temporary images emphasizing showroom interiors, display stands, fixtures, furniture, packaging, and related work.
- [x] Remove the six pre-supplied placeholder Gallery images and keep the supplied 20-panel Display collection as the Gallery Display source.
- [x] Preserve the original Gallery category filters—All, Showroom, Display, Packaging, and Furniture—while keeping the supplied Display collection inside the Display category.
- [x] Make each gallery image selectable; open a large close-up lightbox with title and short caption.
- [x] Provide a visible upper-right close × control, Escape-to-close, previous/next controls, outside-click close, keyboard access, background scroll lock, and focus return to the selected image.
- [x] Add category filters only where they improve browsing without cluttering the design.

## Storefront prototype and cart

- [x] Include a polished storefront experience for jewellery-retailer display stands and fixtures, showroom furniture, packaging, and related presentation products, not finished jewellery.
- [x] Show sample product images, names, descriptions, categories, and clearly marked sample prices, with useful category browsing and search.
- [x] Provide a functional front-end cart: add items, change quantities, remove items, subtotal, and empty-cart state.
- [x] Clearly label checkout as a prototype/integration placeholder until payment, shipping, tax, and order handling are configured; do not collect or store real card details or imply orders are placed.
- [x] Integrate access to the storefront naturally while retaining the requested main navigation.

## Contact, accessibility, responsive behavior, and delivery

- [x] Provide an accessible contact/quote-request presentation with editable placeholder contact details, labels, feedback state, and no false submission-success claim without a configured destination.
- [x] Include footer logo, editable contact details, WhatsApp link/icon, Instagram link/icon, and email link/icon with visible hover/focus states and sample values such as [ADD WHATSAPP NUMBER], [ADD INSTAGRAM URL], and hello@example.com.
- [x] Keep desktop, tablet, and mobile layouts responsive, with semantic HTML, visible focus states, descriptive alt text, sufficient contrast, reduced-motion support, and a small consistent CSS-variable system.
- [x] Serve `/manus-routes.json` with the complete `/` and `/gallery.html` page routes before starting the dev server.

## Gallery preview edits — b048ad14-7826-4437-92ed-5b62e77faa11

- [x] On `/gallery.html`, set `.heading-note` text to an empty string, clearing “Explore display stands, fixtures, furniture, and packaging. For availability, customization, and project details, contact the Angels Display Solutions team directly.” Preserve the paragraph and surrounding heading.
- [x] Clear only the visible text of product filter buttons 2–5: Display Stands, Fixtures, Showroom Furniture, and Packaging. Preserve all five repeated controls, their category identities, accessible names, active/pressed state, and filtering/search behavior; leave the product “All” label unchanged.
- [x] Change the first gallery filter button text from “All display” to “All ”, retaining its `All` category identity, active state, and the other gallery filters.
- [x] Verify the requested text after an actual page reload and confirm the preserved filter/search behavior. Browser verification passed all six exact text comparisons, product counts of 6/1/2/1/2 by category, active states, search and empty results, repeated-node identity, gallery shelf transitions, and unchanged cart storage. Node syntax and Git whitespace checks passed.

Delivery: create a checkpoint after the completed reload verification. The accepted checkpoint is recorded in Version history.

## Pendant Sets — original uploaded collection

- [x] Add all nine attachments (IMG_5020.PNG, IMG_5026.PNG, IMG_5031.JPG, IMG_5032.PNG, IMG_5034.PNG, IMG_5044.PNG, IMG_5047.PNG, IMG_5048.PNG, IMG_5049.PNG) to Gallery → Display → Pendant Sets; clicking Pendant Sets must show those nine images.
- [x] Include the same nine images in the Gallery All category and retain the adjacent Showroom filter and other existing categories, controls, and previous preview text edits. Keep other Display group data intact without assigning these new images to unrelated groups. Empty legacy groups are hidden and disabled while their definitions remain unchanged.
- [x] Select one supplied image as the Pendant Sets cover only; do not replace the company logo. Use IMG_5032.PNG (V Shape Stand) as the set cover.
- [x] Store and serve exact original file bytes with no resizing, recompression, cropping, edits, clarity changes, color filters, or overlays. Show the entire images, including embedded caption strips, in gallery cards, the set cover, and the lightbox; allow opening the original full-resolution file.
- [x] Verify All → Display → Pendant Sets, original image loading and byte integrity, and lightbox navigation/close behavior. All nine stable Preview responses matched the attachment byte lengths and SHA-256 hashes; browser natural dimensions matched the supplied originals. Final reload verification passed, including safe legacy groups and the previous text edits. Node syntax and Git whitespace checks passed.

Delivery: save the intended source changes after the completed verification.

## Restore approved jewellery Display categories

- [x] Restore the 12 numbered jewellery Display categories: Pendant Sets; Bangles Stands; Bridal Set; Chains & Bracelets; Chokers; Earrings & Jhumkas; M Sutra Stands; Necks; Ring Stands; Stock Trays; Top Stands; Visual Merchandise (VM). Replace the unrelated 8 display-style groups only; do not roll back the whole website.
- [x] Keep the nine existing original pendant images, their exact URLs and quality-preservation settings, their All/Display visibility, and the V Shape Stand cover unchanged.
- [x] Keep all 12 category controls visible and selectable. Categories without supplied images must clearly show “Images coming soon” and let visitors return to Pendant Sets, Display, or All without errors or misassigned images.
- [x] Preserve the adjacent Showroom filter, other gallery categories, previous text edits, contact details, storefront, and company logo. Verify the restored categories after reload before saving. Browser verification passed all 12 category labels, all 11 empty states, return to Pendant Sets and All, the nine images and unchanged cover, and lightbox navigation. Source comparison confirmed every non-Display-category content field remained unchanged; syntax and whitespace checks passed.

## Visual Merchandise (VM) — original uploaded collection

- [x] Add all 24 attachments from the current request (8 JPG, 4 PNG, and 12 WebP files) to Gallery → Display → Visual Merchandise (VM), with all 24 visible when that set is selected and also present in All.
- [x] Select IMG_4832.PNG as the VM cover only; do not change the company logo or the Pendant Sets cover.
- [x] Upload and serve exact original bytes with original dimensions and formats. Do not crop, resize, re-encode, recolor, sharpen, overlay, or reduce clarity. Use the existing full-frame gallery and lightbox behavior with original-file links.
- [x] Keep the other 11 Display categories unchanged, including Pendant Sets' nine images and all empty category states. Preserve All/Showroom/Display/Packaging/Furniture order, current numbering, previous edits, and all unrelated website content and behavior.
- [x] Verify VM selection, All inclusion, unchanged Pendant Sets and category definitions, full-resolution asset integrity, and lightbox navigation after reload before saving. All 24 served files matched original byte lengths and SHA-256 hashes. Browser reload checks passed VM count 24, All count 33, original natural dimensions, uncropped cover, full-frame lightbox and original link, next/previous controls, preserved Pendant count 9 and cover, and empty-set behavior. Source comparison confirmed the prior gallery prefix, all non-VM category definitions, and unrelated site data were unchanged; syntax and whitespace checks passed.

## Bangles Stands — original uploaded collection

- [x] Add IMG_4823.PNG, IMG_5024.PNG, and IMG_5030.PNG to Gallery → Display → Bangles Stands and also include them in All, retaining Showroom beside All.
- [x] Use IMG_4823.PNG as the Bangles Stands cover only. Preserve the company logo and every other Display set, image, cover, category number, and empty state.
- [x] Preserve exact original file bytes, PNG formats, dimensions, colors, clarity, and embedded caption strips. Do not crop, compress, resize, re-encode, or add effects; reuse the existing full-frame gallery/lightbox and original-file links. Do not re-view the attached images with file tools.
- [x] Verify the three-image Bangles Stands view, All inclusion, original-file integrity, lightbox navigation, and unchanged Pendant Sets and VM after reload. The three served PNG files matched their attachment byte lengths and SHA-256 hashes. Browser checks passed Bangles count 3, All count 36, Pendant count 9, VM count 24, original dimensions, full-frame styling, cover, lightbox and original link, and existing empty states. Source comparison proved all 33 earlier images, all other Display definitions, and unrelated site content unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after the completed verification.

## Bridal Set — original uploaded collection

- [x] Add IMG_5023.PNG, IMG_5034.PNG, and IMG_5037.JPG to Gallery → Display → Bridal Set and also include them in All, with Showroom still beside All.
- [x] Use IMG_5037.JPG as the Bridal Set cover only. Preserve all other Display sets and covers, including the existing IMG_5034.PNG placement inside Pendant Sets; reuse its identical stored original without altering that prior entry.
- [x] Preserve exact original bytes, PNG/JPG formats, dimensions, colors, clarity, and embedded caption strips. No cropping, resizing, recompression, retouching, overlays, or filters. Keep the full-frame lightbox and original-file link. Do not use file tools to view the attachments again.
- [x] Verify the three-image Bridal Set collection, All inclusion, original asset integrity, lightbox navigation, and unchanged other Display sets after reload before saving. All three stored files matched the attachment byte lengths and SHA-256 hashes. Browser checks passed Bridal count 3, All count 39, original dimensions and appearance, cover, original-file link, lightbox next/previous, Pendant count 9, Bangles count 3, VM count 24, and existing empty states. Source comparison confirmed all 36 earlier gallery entries and all non-Bridal category definitions remained unchanged; syntax and whitespace checks passed.

## Chains & Bracelets — original uploaded collection

- [x] Add IMG_5012.PNG through IMG_5019.PNG and IMG_5028.JPG (nine originals) to Gallery → Display → Chains & Bracelets and also include them in All, retaining Showroom beside All.
- [x] Use IMG_5014.PNG as the Chains & Bracelets cover only. Keep all other Display sets, their images, covers, numbering, empty states, and the company logo unchanged.
- [x] Serve the exact original bytes, formats, dimensions, colors, clarity, and any embedded caption strips. No cropping, resizing, re-encoding, compression, sharpening, or overlays. Reuse full-frame gallery/lightbox rendering and original-file links. Do not view the image attachments again with file tools.
- [x] Verify all nine originals after reload, All inclusion, unchanged other sets, full-frame cover, original dimensions and file integrity, and lightbox controls. All nine served files matched attachment byte lengths and SHA-256 hashes. Reload checks passed Chains & Bracelets count 9, All count 48, original dimensions and appearance, cover, lightbox and original-file link, and preserved Pendant/Bangles/Bridal/VM collections and empty states. Source comparison confirmed all 39 earlier gallery entries and all non-Chains category definitions were unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Chokers — original uploaded collection

- [x] Add all 32 attachments IMG_0600 through IMG_0631, in their supplied JPG/WebP formats, to Gallery → Display → Chokers and also include them in All, retaining Showroom beside All.
- [x] Select IMG_0600.jpg as the Chokers cover only; preserve the company logo and all other Display sets, images, covers, numbering, and empty states.
- [x] Preserve exact original bytes, formats, native dimensions, colors, clarity, and any embedded text. No image resizing, conversion, compression, cropping, sharpening, or overlays. Use the existing full-frame gallery/lightbox and original-file links.
- [x] Verify 32 images under Chokers, their All inclusion, original-file integrity and dimensions, full-frame cover and lightbox behavior, and unchanged existing collections after reload. All 32 served files matched original byte lengths and SHA-256 hashes. Reload checks passed Chokers count 32, All count 80, all original dimensions and full-frame styling, the Round Choker Bust cover, lightbox next/previous and original-file link, and preserved earlier collections and empty states. Source comparison proved all 48 prior gallery entries and non-Chokers Display definitions unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Earrings & Jhumkas — original uploaded collection

- [x] Add the 15 unique supplied originals (eee3fd2f-b7d9-43fb-b0c7-6703aaff82ba.jpg; IMG_4806.WEBP; IMG_4807.webp; IMG_4819.PNG; IMG_4821.PNG; IMG_4822.PNG; IMG_4825.PNG; IMG_4826.PNG; IMG_4828.PNG; IMG_4829.PNG; IMG_4830.PNG; IMG_5022.PNG; IMG_5025.PNG; IMG_5036.PNG; IMG_5038.PNG) to Gallery → Display → Earrings & Jhumkas and All. Repeated references to the same attachments must not create duplicate gallery entries.
- [x] Use IMG_4806.WEBP as this set's cover only. Preserve Showroom beside All, every other Display set, their images and covers, numbering, empty states, and the company logo.
- [x] Preserve exact file bytes, original formats and dimensions, colors, clarity, full image frames, and embedded caption strips. No resizing, conversion, compression, cropping, sharpening, or overlays. Retain full-frame lightbox and original-file links. Do not use file tools to view these attachments again.
- [x] Verify the 15-image set, All inclusion, original-file integrity and dimensions, selected cover, lightbox controls, and unchanged other sets after reload before saving. All 15 served files matched attachment byte lengths and SHA-256 hashes. Reload checks passed 15 unique set entries, All count 95, original dimensions and full-frame styling, cover, lightbox next/previous and original-file link, and preserved earlier collections and empty states. Source comparison confirmed all 80 prior gallery entries and all non-Earrings category definitions remained unchanged; syntax and whitespace checks passed.

## M Sutra Stands — original uploaded collection

- [x] Add the nine unique originals IMG_5002.PNG, IMG_5003.PNG, IMG_5004.PNG, IMG_5005.PNG, IMG_5006.PNG, IMG_5007.PNG, IMG_5008.PNG, IMG_5009.PNG, and IMG_5011.PNG to Gallery → Display → M Sutra Stands and All. Repeated attachment references must not create duplicates; keep Showroom beside All.
- [x] Use IMG_5008.PNG as the M Sutra cover only. Preserve every other Display set, its images, cover, numbering, empty state, and the company logo.
- [x] Preserve exact original PNG bytes, dimensions, colors, clarity, and full frames. No cropping, resizing, conversion, compression, retouching, sharpening, filters, or overlays. Keep the full-frame lightbox and original-file links. Do not use file tools to view these images again.
- [x] Verify the nine-image M Sutra collection, All inclusion, original-file integrity and dimensions, set cover, lightbox controls, and unchanged other sets after reload. All nine served PNG files matched attachment byte lengths and SHA-256 hashes. Reload checks passed 9 unique set images, All count 104, original dimensions and full-frame styling, selected cover, lightbox and original-file link, next/previous controls, and preserved earlier collections and empty states. Source comparison confirmed all 95 prior gallery entries and non-M-Sutra category definitions remained unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Necks — original uploaded collection

- [x] Add all 32 unique originals IMG_4897.webp through IMG_4928.webp to Gallery → Display → Necks and All, retaining Showroom beside All.
- [x] Use IMG_4897.webp (Side Curve Bust) as the Necks cover only. Preserve the company logo and every other Display set, its images, cover, numbering, and empty state.
- [x] Preserve exact original WebP bytes, dimensions, colors, clarity, complete frames, embedded labels, and printed product dimensions. No cropping, resizing, conversion, compression, sharpening, retouching, filters, or overlays. Keep full-frame gallery/lightbox rendering and original-file links.
- [x] Verify 32 unique Necks images, All inclusion, original-file integrity and dimensions, selected cover, lightbox controls, and unchanged other sets after reload. All 32 served files matched attachment byte lengths and SHA-256 hashes. Reload checks passed 32 unique set images, All count 136, all original dimensions and full-frame styling, the Side Curve Bust cover, lightbox next/previous and original-file link, and preserved earlier collections and empty states. Source comparison confirmed all 104 prior gallery entries and all non-Necks category definitions remained unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Ring Stands — original uploaded collection

- [x] Add the six unique supplied originals (51905a0a-6fe0-4e96-af57-8f1ac75b5492.jpg; IMG_4820.PNG; IMG_5021.PNG; IMG_5027.PNG; IMG_5029.JPG; IMG_5033.JPG) to Gallery → Display → Ring Stands and All. Repeated references to the same files must not create duplicate gallery entries. Keep Showroom beside All.
- [x] Use IMG_4820.PNG (Cone Ring Stand) as this set's cover only; preserve the company logo and every other Display set, its images, cover, numbering, and empty state.
- [x] Preserve exact original JPG/PNG bytes, dimensions, colors, clarity, complete image frames, and embedded labels. No cropping, resizing, conversion, compression, retouching, sharpening, filters, or overlays. Retain full-frame lightbox and original-file links. Do not use file tools to view these attachments again.
- [x] Verify six unique Ring Stands images, All inclusion, original-file integrity and dimensions, selected cover, lightbox controls, and unchanged other collections after reload. All six served files matched attachment byte lengths and SHA-256 hashes. Reload checks passed six unique set images, All count 142, original dimensions and full-frame styling, selected cover, lightbox and original-file link, next/previous controls, and preserved earlier collections and empty states. Source comparison confirmed all 136 prior gallery entries and all non-Ring category definitions remained unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Stock Trays — original uploaded collection

- [x] Add all 60 unique JPG originals supplied in the current Stock Trays request, in attachment order, to Gallery → Display → Stock Trays and All. The explicit validated input manifest contains only this request's files, from 0d4015fc-0ecc-46b5-93f9-ea710bc479b4.jpg through fa243a63-afea-40cd-9cda-9b4126f31420.jpg. Keep Showroom beside All and do not create duplicate entries for repeated attachment references.
- [x] Use 0d4015fc-0ecc-46b5-93f9-ea710bc479b4.jpg (Burgundy Earring Stock Tray) as this set's cover only; preserve the company logo and all other Display sets, their images, covers, numbering, and empty states.
- [x] Preserve exact original JPG bytes, native dimensions, colors, clarity, full frames, embedded labels, and original markings. No resizing, conversion, recompression, cropping, sharpening, retouching, filters, or overlays. Keep full-frame gallery/lightbox rendering and original-file links.
- [x] Verify 60 unique Stock Trays images, All inclusion, original-file integrity and dimensions, selected cover, lightbox controls, and unchanged other collections after reload. All 60 served originals matched attachment byte lengths and SHA-256 hashes. Reload checks passed 60 unique set images, All count 202, all original dimensions and full-frame styling, selected cover, lightbox and original-file link, next/previous controls, and preserved earlier collections and empty states. Source comparison confirmed all 142 prior gallery entries and every non-Stock-Trays category definition remained unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Top Stands — original uploaded collection

- [x] Add the three unique originals IMG_4808.WEBP, IMG_4824.PNG, and IMG_4827.PNG to Gallery → Display → Top Stands and All. Repeated references to these files must not create duplicates. Keep Showroom beside All.
- [x] Use IMG_4808.WEBP as the Top Stands cover only; preserve the company logo and every other Display set, its images, cover, numbering, and existing behavior.
- [x] Preserve exact original WebP/PNG bytes, native dimensions, colors, clarity, and complete image frames. No resizing, conversion, recompression, cropping, sharpening, retouching, filters, or overlays. Retain full-frame gallery/lightbox rendering and original-file links. Do not use file tools to view the attachments again.
- [x] Verify three unique Top Stands images, All inclusion, original-file integrity and dimensions, selected cover, lightbox controls, and unchanged other collections after reload. All three served files matched attachment byte lengths and SHA-256 hashes. Reload checks passed three unique set images, All count 205, original dimensions and full-frame styling, selected cover, lightbox and original-file link, next/previous controls, and preserved all earlier collections. Source comparison confirmed all 202 prior gallery entries and every non-Top-Stands category definition remained unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Furniture — original uploaded sofa collection

- [x] Add the five unique supplied originals IMG_5201.WEBP, IMG_5202.WEBP, IMG_5203.WEBP, IMG_5204.WEBP, and IMG_5205.WEBP, in attachment order, to the existing Gallery → Furniture tab and All. Repeated attachment references must not create duplicate entries. Keep Packaging beside Furniture and preserve the other gallery tabs.
- [x] Keep Display unchanged: preserve all 12 sets, their images, covers, numbering, and behavior. Preserve previous gallery entries, company logo, and existing Furniture group data; do not create a Furniture set inside Display.
- [x] Preserve exact original WebP bytes, 1024 × 572 dimensions, colors, clarity, complete frames, and embedded markings. No conversion, resizing, recompression, cropping, sharpening, retouching, filters, or overlays. Retain full-frame lightbox and original-file links. Do not use file tools to view the attachments again.
- [x] Verify five unique Furniture images, All inclusion, original-file integrity and dimensions, lightbox controls, Packaging adjacency, and unchanged Display collections after reload. All five served originals matched attachment byte lengths and SHA-256 hashes. Reload checks passed five unique Furniture images, All count 210, original 1024 × 572 dimensions, full-frame styling, lightbox original-file link and next/previous controls, Packaging adjacency, and unchanged membership/counts of all 12 Display sets. Source comparison confirmed all 205 previous gallery entries, Display data, Furniture group data, and every other site-data field remained unchanged; syntax and whitespace checks passed.

Delivery: save only the intended content changes after verification.

## Remove Furniture placeholder groups

- [x] Remove Furniture Type 01, Furniture Type 02, Furniture Type 03, and Furniture Type 04 from the Furniture tab.
- [x] Keep all remaining things unchanged: preserve the five original Furniture images and their quality, All membership, Packaging adjacency, all Display sets and covers, the company logo, other gallery tabs, products, and existing lightbox behavior.
- [x] Verify the four controls are absent after reload, Furniture still shows five images, All still shows 210 images, and source comparison confirms no other site data changed before saving. Reload verification passed: zero Furniture placeholder controls or labels, five Furniture images, 210 All images, 205 Display images, 12 Display sets, unchanged tabs/Packaging adjacency, and working lightbox navigation. Source comparison proved every site-data field except furnitureTypes was identical to the prior saved version; syntax and whitespace checks passed.

## Compact Display collection layouts and server recovery

- [x] Restore the existing development server on 0.0.0.0:3000 and verify Home, Gallery, and the route manifest respond successfully. All three returned HTTP 200; the Node listener remains running as a resident service.
- [x] Arrange images attractively with compact spacing in all 12 Display subcategories: Pendant Sets, Bangles Stands, Bridal Set, Chains & Bracelets, Chokers, Earrings & Jhumkas, M Sutra Stands, Necks, Ring Stands, Stock Trays, Top Stands, and Visual Merchandise (VM). Remove uneven empty grid-row gaps using one shared full-frame masonry layout; keep 12px desktop/tablet and 8px narrow-mobile gutters. Desktop vertical gaps previously reached 165px; all measured inter-image gaps now stay at 12px or 8px according to viewport.
- [x] Keep each original image's bytes, URL, colors, clarity, full frame, embedded labels, and native aspect ratio unchanged, with no cropping, recompression, distortion, or effects. Preserve collection counts, memberships, covers, data/source order, keyboard access, lightbox navigation, and original-file links. Content data and asset URLs are unchanged; full-frame ratio/effect checks and lightbox next/original-link checks passed.
- [x] Provide a responsive three-column desktop, two-column tablet, and one-column narrow-mobile layout. Tighten the Display category shelf and make all 12 category names readable without truncation. Preserve other gallery tabs, Furniture images, removed Furniture placeholders, storefront, logo, and unrelated page behavior. Verified at 1280px, 768px, and 390px with no horizontal overflow; all 12 names wrap cleanly.
- [x] Verify all 12 categories and representative desktop/tablet/mobile layouts after reload and confirm no content data changed. All, Display, every subcategory, initial/reloaded All, tab transitions, and source order passed the deterministic geometry checks at all three viewport sizes. Loaded desktop/mobile visual checks and independent read-only implementation review passed; CSS parsing, JavaScript syntax, and whitespace checks passed.

- [x] Apply the same compact full-frame arrangement to the All gallery, both on initial load/reload and when returning from another tab. Preserve all 210 image entries and source order; retain prior Furniture, Showroom, and Packaging layouts and behavior. All retains 210 images; Display retains 205 images and 12 sets; Furniture retains its five originals and prior grid layout without placeholder groups.

Delivery: save only the intended layout updates after verification.

## Number-wise ordering — Chokers, Necks, and Stock Trays

- [x] In Display only, arrange Chokers, Necks, and Stock Trays by the catalogue/product number printed in each image, in ascending numeric order. Do not sort by filename, dimensions, or the existing generic upload titles. Printed caption numbers were recognised locally and visually verified for all 124 images; the Chokers 24 caption was corrected in the extraction audit before sorting.
- [x] Place images with no printed catalogue number after all numbered images. Preserve existing relative order among unnumbered images and among images sharing the same catalogue number; do not add numbers onto the originals. Chokers and Necks retain 32 numbered originals each; Stock Trays retains 59 numbered originals and its one unnumbered original last. Same-number variants remain in their original relative order.
- [x] Make the visible masonry order and lightbox next/previous sequence follow the same sorted order. Preserve existing image nodes/listeners, original bytes, URLs, clarity, full frames, and compact spacing. Browser checks verified actual node order and every lightbox next/previous step, wraparound, original-file links, and reuse of original nodes.
- [x] Preserve all counts, memberships, covers, the other nine Display sets, All order, Furniture/Showroom/Packaging, logo, and unrelated content. Only the three requested subcategory orders should change. Source comparison confirmed every gallery object and all non-order data were identical to the previous saved version; all covers and memberships are unchanged.
- [x] Verify printed-number recognition, actual displayed order after reload, lightbox navigation, return-to-All order, and unchanged remaining content before saving. The targeted browser checks passed all three sorted sets, the other nine sets, Furniture order, and restoration of the original 210-image All order; JavaScript syntax and whitespace checks passed.

## Homepage carousel — supplied three-slide order

- [x] Replace the homepage carousel images, in this exact order: first IMG_5223.WEBP (showroom), second 135ace33-7aed-4e4c-b152-b792b7e20c27.jpg (display showcase), third IMG_5207.WEBP (sofa seating). Repeated references to the same attachments must not create extra slides.
- [x] Reuse exact original file bytes and formats without resizing, conversion, recompression, or edits. Do not use file tools to view the attachments again. All three served files matched original attachment SHA-256 hashes; native dimensions remain 1024×572, 1600×900, and 1024×572 respectively.
- [x] Keep exactly three slides and preserve existing slide titles/captions, homepage content, logo, gallery ordering and images, carousel controls, timing, autoplay/pause, keyboard/touch behavior, and the rest of the site. Source comparison confirmed only the three image URLs and matching alt text changed; carousel code, styles, markup, other content, and gallery data remain untouched.
- [x] Verify the three original sources and order after reload, carousel navigation and wrapping, exact original-file integrity, and unchanged unrelated data before saving. Browser checks passed three correctly ordered decoded images, all three indicators, next/previous wrapping, pause/resume, ARIA state, and unchanged titles; syntax and whitespace checks passed.

## About Studio — original image replacement

- [x] Replace only the About Studio image with IMG_5224.WEBP, using the exact original uploaded file and accurate alt text. Keep its original 572×1024 resolution and clarity without recompression, conversion, artificial enhancement, or edits. Do not use file tools to view the attachment again. The served 645230-byte file matched the attachment SHA-256 hash and native dimensions.
- [x] Preserve all About Studio text, labels, section/grid structure, carousel images and order, gallery images/number sorting, company logo, and unrelated website behavior. Use only image-scoped presentation adjustments if needed to preserve the complete clear original. The new image alone uses its natural aspect ratio, no enlargement beyond source width, and no tint/hover zoom; all previous CSS remains intact.
- [x] Verify the new image loads after reload, original file integrity and dimensions, clear full-frame rendering, and unchanged unrelated source before saving. Reloaded Preview and 1280px/390px checks passed natural 572:1024 aspect ratio, full-frame rendering, filter none, transform none (including hover), and source-width limits. Exact markup normalization proved no surrounding HTML changed; content data, carousel/gallery code, logo, and gallery page are untouched; CSS parsing and whitespace checks passed.

## Homepage carousel — full original framing and unobstructed artwork

- [x] Correct cropping of the first and third homepage slides and display all three exact original images in full, at their native proportions, on desktop and mobile. Fit the carousel to the wide image aspect ratio; remove forced minimum heights, scale/pan zoom, and image-darkening overlays. Do not crop, distort, or rewrite the artwork. All three images passed full-boundary, ratio, native-width, and no-transform checks at 1920px, 1280px, and 390px; desktop first-slide and mobile third-slide visual checks passed.
- [x] Remove the website's small lower-left slide descriptions so they cannot overlap the supplied artwork. Preserve the embedded lettering/logos that are part of the originals; preserve the three-slide order, arrows, indicators, autoplay/pause, touch behavior, and other homepage content. Description nodes and bindings were removed, while next/previous wraparound, indicators, touch navigation, and pause/resume checks passed.
- [x] Preserve the original image bytes and clarity. First/third sources are 1024×572 and the second is 1600×900, not native 4K. Do not enlarge them and falsely claim genuine 4K detail; cap display width at the smallest original's 1024px and keep full originals. True 4K clarity requires higher-resolution original files. Image URLs and files remain unchanged; only website framing and effects changed.
- [x] Keep About Studio, gallery images and sorting, company logo, and all unrelated content unchanged. Verify complete image framing, no overlay descriptions/effects, original-source integrity, and working controls after reload on desktop/mobile before saving. Exact markup comparison confirmed only the carousel description block was removed; all content data and prior CSS are intact, with new styles scoped to the homepage carousel. CSS parsing, JavaScript syntax, and whitespace checks passed.
- [ ] Genuine 4K image clarity: pending higher-resolution original artwork (ideally at least 3840 pixels wide). The current supplied files cannot provide native 4K detail without interpolation or generated changes; preserve exact originals until suitable masters are provided.
