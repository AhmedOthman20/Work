# Copying the Black Friday discounts to global (levaiandloris-intl)

Source configs: `black-friday-egypt.json` (read from the Egyptian store's SMART Functions).

Checked on global's SMART Functions on 2026-10-30:

- **Black Friday offer** already exists on global (id 1685225636146, inactive). It matches the
  Egyptian one except `applyToFirst` is `"2"` on global and empty (all eligible items) in Egypt.
- Collections that exist on global with the same handle: `basic-colors`, `loud-colors`,
  `collaborations`, `trucker-caps-rubber-edition`, `premium-caps-bag`, `leather-wallets`,
  `bucket-hats`, `t-shirts`.
- **Missing on global**: `cooling-fabric-t-shirts`, `t-shirts-1`, `washed-stressed-t-shirts`
  (used by the T-Shirt offer). Only `t-shirts` exists.
- All 10 wallet products and 3 card holders exist. Global has two products titled
  "Trifold Baron Wallet - Dark Brown" (`trifold-baron-wallet-dark-brown` and
  `trifold-baron-wallet-dark-brown-1`).

Create every discount inactive, with `startsAt`/`endsAt` in the past (the Egyptian dates).
