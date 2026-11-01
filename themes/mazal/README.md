# Mazal theme — product page

Files added to the **copy 29/10** theme (Horizon) on `mazal-cpmhc506.myshopify.com`
(theme id 189654565168), built from Figma `Mazal` (desktop 1:1386, mobile 6:2738).

| File | What it is |
|---|---|
| `sections/mazal-product.liquid` | Main product section: gallery, title + wishlist, Judge.me rating, price, size buttons, colors / stripes / checks swatches, details + care accordions, quantity + Buy now + Add to cart, related products, share |
| `sections/mazal-recommendations.liquid` | "You might also like" cards (Shopify recommendations, fallback collection) |
| `sections/mazal-reviews.liquid` | Wraps the Judge.me review widget app block and restyles it to the design |
| `snippets/mazal-stars.liquid` | Star rating (partial fill) |
| `snippets/mazal-swatch.liquid` | Swatch fill: option swatch → "Name: #hex" list → `swatch-<name>.png` in Files |
| `assets/mazal-icon-*.svg` | Icons exported from the Figma file |
| `templates/product.json` | main → recommendations → reviews (Judge.me block) → `mazal-follow-us` (same as home) |

Product metafields used: `custom.related_products` (list of products), `custom.care_instructions` (multi-line text).
Judge.me fills `reviews.rating` / `reviews.rating_count`.
