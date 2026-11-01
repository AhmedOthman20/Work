# Mazal theme — product page

Files added to the **copy 29/10** theme (Horizon) on `mazal-cpmhc506.myshopify.com`
(theme id 189654565168), built from Figma `Mazal` (desktop 1:1386, mobile 6:2738).

| File | What it is |
|---|---|
| `sections/mazal-product.liquid` | Main product section: gallery, title + wishlist, Judge.me rating, price, size buttons, colors / stripes / checks swatches, details + care accordions, quantity + Buy now + Add to cart, related products, share |
| `sections/mazal-recommendations.liquid` | "You might also like" cards (Shopify recommendations, fallback collection) |
| `sections/mazal-reviews.liquid` | Wraps the Judge.me review widget app block and restyles it to the design |
| `snippets/mazal-product-styles.liquid`, `assets/mazal-product.js` | Styles and script for `mazal-product` (incl. sticky add-to-cart bar) |
| `snippets/mazal-stars.liquid` | Star rating (partial fill) |
| `snippets/mazal-swatch.liquid` | Swatch fill: option swatch → "Name: #hex" list → `swatch-<name>.png` in Files |
| `assets/mazal-icon-*.svg` | Icons exported from the Figma file |
| `templates/product.json` | main → recommendations → reviews (Judge.me block) → `mazal-follow-us` (same as home) |

Product metafields used: `custom.related_products` (list of products), `custom.care_instructions` (rich text: paragraphs + bullet lists).
Judge.me fills `reviews.rating` / `reviews.rating_count`.

## Colors

The `Color` option of every Mazal product is linked to Shopify's **Color** category metafield
(`shopify.color-pattern`). Each color is an entry in Content > Metaobjects > Color: a hex color, plus
an image for stripes and checks. `snippets/mazal-swatch.liquid` reads that swatch first; the
"Swatch colors" section setting and `swatch-<name>.png` files are only fallbacks.
To show a different photo for a color, set the image on that variant in the product admin.

## About page

`templates/page.about.json` (page **About Us**, handle `about-us`), Figma desktop 1:1849 / mobile 6:2738-6:3490:
`mazal-about-hero` → `mazal-about-intro` (bold words show black) → `mazal-about-cards` → `mazal-about-values`
→ `mazal-about-split` → `mazal-follow-us`. `sections/header.liquid` (Horizon) has one added condition so this page gets the home page's transparent header over the hero. Images are in Content > Files as `mazal-about-*.png/jpg`.

## Shop (collection) page

`templates/collection.json` → `sections/mazal-collection.liquid` (Figma desktop 1:1312 / mobile 6:2514). The menu's **Shop** link
(`/collections/all`) and every collection use it. Title is the collection title (setting "All Products" for `/collections/all`),
subtitle is the collection description or the section setting. Category links are blocks (collection + label); the current
collection is underlined. **FILTERS** opens a panel under the bar on desktop (a popup with search on phones) with sorting, a price slider and the filters set in the Search & Discovery app.
16 products per load; the next page loads by itself when "Showing X of N products" scrolls into view.

## Policy pages

`templates/page.policy.json` → `sections/mazal-policy.liquid` (Figma 1:1906, 1:1972, 1:2044, 1:2101; mobile 6:3209).
Pages **Terms & Services**, **Privacy Policy**, **Shipping & Delivery**, **Returns & Exchanges** (template "policy").
Write the text in the page editor: Heading 2 = numbered point, Heading 3 = small subheading, then paragraphs / bullets;
links show gold and underlined. "Last Updated" is the page's last edit date. Linked from the "Footer – Customer service" menu.
