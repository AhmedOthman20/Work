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
→ `mazal-about-split` → `mazal-follow-us`. Images are in Content > Files as `mazal-about-*.png/jpg`.
