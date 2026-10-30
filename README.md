# Work — ثيمات Shopify

مشروع Shopify CLI لإدارة ثيمات متجرين:

| البيئة | المتجر | مجلد الثيم |
|---|---|---|
| `levai` | `levaiandloris-intl.myshopify.com` (global.levaiandloris.com) | `themes/levaiandloris-intl` |
| `dz` | `u26d27-dz.myshopify.com` (levaiandloris.com) | `themes/u26d27-dz` |

## التثبيت

```bash
npm install
```

## تسجيل الدخول

**على جهازك:** شغّل أي أمر، وسيفتح المتصفح لتسجيل الدخول إلى Shopify.

**في سيرفر أو بيئة سحابية (بدون متصفح):** ثبّت تطبيق
[Theme Access](https://apps.shopify.com/theme-access) في كل متجر، وأنشئ كلمة مرور
(تبدأ بـ `shptka_`)، ثم عيّنها في متغيرات البيئة:

```bash
export LEVAI_THEME_TOKEN=shptka_...
export DZ_THEME_TOKEN=shptka_...
```

لا تحفظ كلمات المرور في git (ملف `.env` مستثنى في `.gitignore`).

## الأوامر

```bash
npm run levai:list            # عرض ثيمات المتجر
npm run levai:pull -- --live  # تنزيل الثيم المنشور
npm run levai:dev             # معاينة محلية مع رفع التغييرات مباشرة
npm run levai:push -- --unpublished  # رفع كثيم جديد غير منشور
npm run levai:check           # فحص أخطاء Liquid
```

نفس الأوامر للمتجر الثاني باستبدال `levai` بـ `dz`.
أي أمر آخر: `node scripts/theme.mjs <levai|dz> <command> [args...]`.
