# ING & YVE Gallery

Create a high-end, luxury "Digital Art Gallery & E-commerce" web application for ING & YVE (Sculptural Lighting & Handcrafted Design Objects from the Netherlands). 

CRITICAL REQUIREMENT - CONCEPT SWITCHER:

Include a subtle, sticky Top Admin Bar/Banner with a "Concept Switcher" toggle that instantly switches the dynamic CSS theme/color palette across all pages. The 3 themes are:

1. "Concept 1: Dark Luxury" (Primary: Graphite #2A2D31, Accent: Gold Leaf #C9A03D, Secondary: Matte Grey #565861 & Warm Taupe #7A746B).

2. "Concept 2: Light Natural" (Primary: Linen #DAD4C7, Greige #A69E91, Soft Warm Taupe #7A746B, Off-white background).

3. "Concept 3: Ode to Iris" (Primary: Ocean #1E4A5A, Accent: Sea Blue #5FA7B9, Sand/Pearl #F2EFEA, Gold Leaf details).

DESIGN & TYPOGRAPHY SYSTEM:

- Mood: Ultra-luxurious, calm, editorial, spatial, high-end gallery aesthetic. No aggressive commercial elements, no "SALE" badges, no bright buy buttons.

- Fonts: 'Playfair Display' for headlines/editorial statements, 'Montserrat' (Light/Regular/Medium with wide letter-spacing) for navigation, buttons, configurator UI, and body text.

- Layout: Generous white/dark space, large full-bleed imagery, refined thin borders, elegant micro-interactions.

PAGINA STRUCTUUR & ROUTING:

1. HEADER & NAVIGATION:

- Minimalist header with logo "ING & YVE - Sculptural Lighting".

- Compact menu: COLLECTIONS | BESPOKE / MAATWERK | OUR CRAFT | ABOUT | CONTACT.

- Subtle right-side top icons: Search, Account, Mini-Cart (with subtle gold accent badge).

2. HOMEPAGE ('/'):

- Hero Section: Full-screen editorial visual with text overlay "Sculptural Lighting Objects. Handcrafted in the Netherlands. Made to last, meant to be loved."

- Brand Statement: Clean gallery introduction paragraph about slow design and Dutch craftsmanship.

- Featured Collections Cards: 3 large visual cards ('Ode to Iris', 'The Rock', 'Bespoke Studio').

- Bespoke Teaser Section: Highlight custom lampshades with photo upload preview call-to-action.

- Our Craft Teaser: Close-up material highlights (double-stitched leather piping, ceramics, wool felt).

- Minimalist Footer: Includes copyright, quick links, and small secondary links:

  "Also discover: KLEInlicht — voor een warme herinnering ↗" and "Yvette Pen — Ceramic Art ↗".

3. COLLECTIONS PAGE ('/collections'):

- Editorial gallery grid layout (max 2-3 large product items per row).

- Minimal filters: Category (Table Lamps, Pendant Lights, Custom), Material (Ceramics, Felt, Wood).

- Product Cards showing high-res imagery, clean title (e.g., 'The Rock No. 1'), material, and subtle price.

- Include a banner for the special "KiKa Actie - Karst the Friesian Collection" (10% to KiKa charity).

4. PRODUCT DETAIL PAGE ('/product/1'):

- Large visual layout (left side main image + close-up gallery; right side sticky product info).

- Title, dimensions, materials, price, estimated lead time.

- Configurator options (e.g. Shade size, Fabric color selector, Base material).

- Craftsmanship & Story accordion sections below (detailing the double-stitched leather bies and Dutch sourcing).

5. BESPOKE / MAATWERK PAGE ('/bespoke'):

- Interactive 4-step custom ordering flow:

  - Step 1: Select lamp shape & size (Round / Oval 20cm, 30cm, 50cm).

  - Step 2: Photo Upload Simulator (Drag & drop image upload box with dummy preview crop box and a simulated "High Resolution Verified" status badge).

  - Step 3: Select finish & piping options.

  - Step 4: Live updated price calculation + Notice: "Je ontvangt altijd eerst een digitale proef ter goedkeuring per e-mail/WhatsApp vóór start productie." + 'Voeg toe aan winkelmand' button.

6. OUR CRAFT PAGE ('/our-craft'):

- Storytelling layout focusing on: 99% Dutch materials, sustainable circular production, double-stitched leather trim signature, ceramic bases, and felt texturing.

7. ABOUT & CONTACT PAGE ('/about'):

- Story of founders Ing (Hat maker & Lampshade designer) & Yve (Couture designer trained at Vivienne Westwood & Ceramic artist).

- Contact form for bespoke consultations and interior design professionals.

Please generate a complete, responsive, visually stunning React application using Tailwind CSS and Lucide icons that implements all these pages and the theme switcher seamlessly.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ing-yve-gallery.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5da348ee-34da-4b29-8b78-c4ffb0e61d46).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
