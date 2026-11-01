إنت هتشتغل معايا على متجر Shopify اسمه Cotton Hub
(admin.shopify.com/store/e68c5a-9a) عن طريق موصّل Shopify.

## قواعد مهمة
1. أول خطوة: شغّل get-shop-info واتأكد إن المتجر المتوصل هو Cotton Hub.
   لو طلع متجر تاني (زي mazal) استخدم switch-shop وحوّل لـ Cotton Hub، ومتعملش أي تعديل غير لما تتأكد.
2. موصّل SMART Functions كان متوصل بمتجر تاني (mazal)، فمتستخدموش لـ Cotton Hub غير لما تتأكد إنه اتربط بيه.
3. أي تعديل جماعي (أكتر من 5 منتجات، أو تغيير منيو أو كولكشن أو خصم) اعرضه عليا الأول واستنى موافقتي.
4. متمسحش أي منتج أو كولكشن. لو فيه حاجة مكررة، اقترح أرشفتها بس.
5. اكتبلي بالعربي (عامية مصرية) ومختصر.

## مرجع المنيو (الإكسيل النهائي Mega_Menu_Fainal.xlsx)
المنيو كله موجود في آخر الرسالة دي، تحت عنوان "ملحق: المنيو الكامل". هو المرجع لأسماء الأقسام بالإنجليزي والعربي وترتيبها.

ملخص هيكله:
- الجمهور (أعلى مستوى في المنيو): Men، Women، Boys، Girls، Baby & Toddler، Home & Bath.
- تحت كل جمهور: Categories (زي Tops، Bottoms، Loungewear، Sleepwear & Pajamas، Underwear، Socks، Sportswear، Swimwear، Ihram Clothing، Value Packs & Bundles)، وتحت كل واحد SUB Categories.
- عمود "SUB Categories 2" في الإكسيل **للفلتر بس** (زي Short-Sleeve / Long-Sleeve / Sleeveless، وSweat Shorts / Wide Leg Shorts). مش عناصر منيو، وهتزيد مع المنتجات الجديدة، فمكانها الطبيعي Metafield اسمه product_style.
- البراندات (شيت Brand Categories): JIL (اللي اتقال عليه Geel في الاجتماع)، COTTONIL، DISNEY / MARVEL، RIPPLES، RED COTTON. كل براند ليه صفحة كولكشن واحدة، وجواها أقسام حسب الجمهور زي ما هي في الإكسيل.

## الخلفية (اجتماع 28 أكتوبر 2026)
- الإكسيل النهائي هو المرجع لأسماء الأقسام وصورها وترتيبها.
- صفحة كولكشن واحدة لكل براند، وجواها فلترة حسب الجمهور والقسم.
- كل منتج ليه صفحة واحدة بس، ويظهر في كل الأقسام اللي ليها علاقة بيه من غير تكرار.
- الكاتالوج كله يظهر مؤقتاً للمراجعة، بما فيه المنتجات اللي خلصت (Out of stock).
- عروض الـ Bundles تظهر كبنرات بتوجه العميل يختار المنتجات بنفسه، مش ككروت منتجات عادية.
- دمج أقسام التيشرتات المتشابهة، وإضافة فلتر Product Style جوه الكولكشن.

## المهام بالترتيب

### المهمة 1: فحص الكاتالوج (قراءة بس، من غير أي تعديل) ← ابدأ بيها دلوقتي
- عدد المنتجات: كام Active وكام Draft وكام Archived.
- كام منتج مش منشور على قناة Online Store.
- كل الكولكشنات: نوعها (Manual / Smart)، وشروطها، وعدد المنتجات في كل واحد.
- التاجات والـ Product Types والـ Vendors الموجودة حالياً.
- فيه منتجات مكررة (نفس المنتج في أكتر من صفحة)؟
- السبب: ليه البنطلونات والقمصان بس اللي ظاهرة في الموقع؟
- المنيو الرئيسي (Main menu): العناصر وترتيبها.
- **مقارنة بالإكسيل:** أنهي أقسام في الإكسيل ملهاش كولكشن، وأنهي كولكشنات موجودة ومش في الإكسيل.
- اطلعلي تقرير مختصر بالنتايج واقتراح للتصليح، واستنى موافقتي.

### المهمة 2: إظهار الكاتالوج كله (بعد موافقتي)
- المنتجات تبقى Active ومنشورة على Online Store.
- المنتجات اللي خلصت تفضل ظاهرة وتترتب في آخر الكولكشن.
- تصليح شروط الكولكشنات اللي فيها غلط.

### المهمة 3: تصميم البيانات (اعرض الخطة عليا قبل التنفيذ)
اقترح نظام تاجات وMetafields يخلّي كل الكولكشنات أوتوماتيك (Smart):
- `custom.audience`: Men / Women / Boys / Girls / Baby & Toddler / Home & Bath.
- `custom.category` و`custom.sub_category`: حسب الإكسيل.
- `custom.product_style`: قيم عمود SUB Categories 2.
- Vendor = البراند.

المنتج الواحد ممكن ياخد أكتر من قيمة، عشان يظهر في كذا قسم (مثلاً تيشيرت يظهر في Tops وLoungewear). بعدها قولي الخطوات اللي هعملها بإيدي في تطبيق Search & Discovery عشان أضيف الفلاتر.

### المهمة 4: الكولكشنات
- كولكشن Smart لكل SUB Category في الإكسيل، والـ handle يبقى بالشكل ده: `men-tops-polo-shirts`.
- كولكشن Smart لكل براند (الشرط: Vendor)، وجواه فلترة حسب الجمهور.
- دمج أقسام التيشرتات المتشابهة.
- اعرض عليا قائمة الكولكشنات اللي هتتعمل قبل ما تنشئها.

### المهمة 5: المنيو
- بناء الـ Main menu (Mega menu) بنفس ترتيب الإكسيل وأسمائه، ونفس الكلام للنسخة العربي.
- صور الأقسام: مستنية إبراهيم يبعتها. لما توصل هترتفع كصور للكولكشنات.

### المهمة 6: عروض الـ Bundles (قسم Value Packs & Bundles)
- اقترح طريقة للعرض (مثلاً "أي 3 بوكسرات بسعر X"): Automatic discount، أو SMART Functions، أو تطبيق Shopify Bundles.
- اقترح كولكشن "اختار الباكدج بتاعك" وبنر في الثيم يوديك عليه.

### المهمة 7: دليل تحديث المنتجات
- دليل بالعربي، خطوة بخطوة: إزاي تعدّل سعر منتج، ومقاساته، وصوره، وجدول المقاسات، والـ Metafields في Shopify. ده هيتبعت لإبراهيم.

### ملحوظة
- ربط شحن QuickUp هعمله أنا من الداشبورد بتاعتهم، مش مطلوب منك.

### ملاحظات على الإكسيل (متصلحهاش من غير ما تسألني)
- "DISNEY / MARVIL" المفروض تبقى MARVEL.
- في شيت Women، قيم فلتر البيجامات جت قدام Shorts، والمفروض تيجي تحت Sleepwear.
- في Baby & Toddler، قسم "Boys Underwear Sets" متكرر مرتين.

ابدأ دلوقتي بالقاعدة 1 وبعدها المهمة 1.

---

## ملحق: المنيو الكامل
الترتيب هو ترتيب الإكسيل. التنسيق: القسم الرئيسي: الأقسام الفرعية بالترتيب (English — عربي).

### Men
- Tops — ملابس علوية: All Tops — جميع الملابس العلوية | T-Shirts & Tops — تيشيرتات وتوبات | Polo Shirts — تيشيرتات بولو | Shirts — قمصان | Hoodies & Sweatshirts — هوديز وسويت شيرتات | Sweaters & Cardigans — كنزات وكارديجان | Jackets & Coats — جاكيتات ومعاطف
- Bottoms — ملابس سفلية: All Bottoms — جميع الملابس السفلية | Jeans — جينز | Shorts — شورتات | Joggers & Sweatpants — بناطيل رياضية وجوجرز | Pants & Chinos — بناطيل وتشينو
- Loungewear — ملابس منزلية مريحة: All Loungewear — جميع الملابس المنزلية | Summer Sets — أطقم ملابس صيفية | Winter Sets — أطقم ملابس شتوية | T-Shirts & Tops — تيشيرتات وتوبات | Shorts — شورتات منزلية | Joggers & Sweatpants — بناطيل رياضية وجوجرز | Hoodies & Sweatshirts — هوديز وسويت شيرتات منزلية
- Sleepwear & Pajamas — ملابس نوم وبيجامات: All Sleepwear & Pajamas — جميع ملابس النوم والبيجامات | Pajama Pants Sets — أطقم بيجامات ببنطلون | Pajama Shorts Sets — أطقم بيجامات بشورت | Pajama Pants — بناطيل بيجامات | Pajama Shorts — شورتات بيجامات | Sleep Robes — أرواب منزلية للنوم
- Underwear — ملابس داخلية: All Underwear — جميع الملابس الداخلية | All Undershirts — جميع الفانلات الداخلية | Sleeveless Undershirts — فانلات داخلية بدون أكمام | Cut-Sleeve Undershirts — فانلات داخلية كت | Short-Sleeve Undershirts — فانلات داخلية نصف كم | Long-Sleeve Undershirts — فانلات داخلية كم طويل | All Boxers & Briefs — جميع البوكسرات والسليب | Briefs — سليب | Trunks — ترانك | Boxer Briefs — بوكسر بريف | Boxer Shorts — بوكسر شورت | Long Boxer Briefs — بوكسر بريف طويل | Underwear Sets — أطقم ملابس داخلية | All Thermal Underwear — ملابس داخلية حرارية | Thermal Tops — فانلات حرارية | Thermal Bottoms — بناطيل حرارية | Thermal Sets — أطقم ملابس حرارية
- Socks — جوارب: All Socks — جميع الجوارب | Full-Cushion Socks — جوارب فوطة كاملة | Half-Cushion Socks — جوارب نصف فوطة | Classic Socks — جوارب كلاسيكية | Sports Ankle Socks — جوارب رياضية للكاحل | Classic Ankle Socks — جوارب كلاسيكية للكاحل | Low-Cut Socks (Mini Socks) — جوارب قصيرة | No-Show Socks (Liner Socks) — جوارب مخفية للقدم
- Sportswear — ملابس رياضية: All Sportswear — جميع الملابس الرياضية | Sports T-Shirts — تيشيرتات رياضية | Sports Shorts — شورتات رياضية | Track Pants & Joggers — بناطيل رياضية وجوجرز | Tracksuits & Sports Sets — تريننج وأطقم رياضية
- Swimwear — ملابس سباحة: All Swimwear — جميع ملابس السباحة
- Ihram Clothing — ملابس إحرام: All Ihram Clothing — جميع ملابس الإحرام
- Value Packs & Bundles — عبوات اقتصادية ومجموعات: All Value Packs & Bundles — جميع العبوات والمجموعات | Underwear Multipacks — عبوات ملابس داخلية | Undershirt Multipacks — عبوات فانلات داخلية | Socks Multipacks — عبوات جوارب | Clothing Bundles — مجموعات ملابس
قيم الفلتر (product_style):
- T-Shirts & Tops — تيشيرتات وتوبات: Sleeveless T-Shirts — تيشيرتات بدون أكمام | Short-Sleeve T-Shirts — تيشيرتات نصف كم | Long-Sleeve T-Shirts — تيشيرتات كم طويل
- Shorts — شورتات: Sweat Shorts — شورتات سويت | Contrast-Trim Shorts — شورتات بحواف متباينة اللون | Wide Leg Shorts — شورتات واسعة الأرجل
- Hoodies & Sweatshirts — هوديز وسويت شيرتات منزلية: Sleeveless Hoodies — هوديز بدون أكمام | Short-Sleeve Hoodies — هوديز نصف كم
- Pajama Shorts Sets — أطقم بيجامات بشورت: Pajama Shorts Sets — أطقم بيجامات بشورت | Pajama Bermuda Sets — اطقم بيجاما برمودا
- Sleeveless Undershirts — فانلات داخلية بدون أكمام: Sleeveless Undershirts — فانلات داخلية بدون أكمام | Ribbed Sleeveless Undershirts — فانلات داخلية بدون أكمام مضلعة

### Women
- Tops — ملابس علوية: All Tops — جميع الملابس العلوية | T-Shirts & Tops — تيشيرتات وتوبات | Shirts & Blouses — قمصان وبلوزات | Hoodies & Sweatshirts — هوديز وسويت شيرتات | Sweaters & Cardigans — كنزات وكارديجان | Jackets & Coats — جاكيتات ومعاطف
- Bottoms — ملابس سفلية: All Bottoms — جميع الملابس السفلية | Jeans — جينز | Shorts — شورتات | Joggers & Sweatpants — بناطيل رياضية وجوجرز | Pants & Trousers — بناطيل | Leggings — ليجنز | Skirts — تنانير
- Dresses & Jumpsuits — فساتين وقطع كاملة: All Dresses & Jumpsuits — جميع الفساتين والقطع الكاملة | Dresses — فساتين | Jumpsuits — جمبسوت | Overalls & Dungarees — أوفرول ودنغري
- Loungewear — ملابس منزلية مريحة: All Loungewear — جميع الملابس المنزلية | Summer Sets — أطقم ملابس صيفية | Winter Sets — أطقم ملابس شتوية | T-Shirts & Tops — تيشيرتات وتوبات | Shorts — شورتات | Joggers & Sweatpants — بناطيل رياضية وجوجرز | Leggings — ليجنز منزلي | Dresses — فساتين منزلية | Hoodies & Sweatshirts — هوديز وسويت شيرتات منزلية
- Sleepwear & Pajamas — ملابس نوم وبيجامات: All Sleepwear & Pajamas — جميع ملابس النوم والبيجامات | Pajama Pants Sets — أطقم بيجامات ببنطلون | Pajama Shorts Sets — أطقم بيجامات بشورت | Nightgowns & Sleepshirts — قمصان نوم | Sleep Robes — أرواب نوم
- Underwear — ملابس داخلية: All Underwear — جميع الملابس الداخلية | All Underwear Tops — جميع الملابس الداخلية العلوية | Bras & Bralettes — حمالات صدر وبراليت | Sports Bras — حمالات صدر رياضية | Camisoles — توبات وكاميسول داخلية | Sleeveless Undershirts — فانلات داخلية بدون أكمام | Short-Sleeve Undershirts — فانلات داخلية نصف كم | Long-Sleeve Undershirts — فانلات داخلية كم طويل | Bodysuits — بودي سوت | All Panties — جميع الكيلوتات | Cheeky Panties — كيلوت تشيكي | Bikini Panties — كيلوت بكيني | Briefs — كيلوت كلاسيك | High-Rise Briefs — كيلوت بخصر مرتفع | Boyshorts — بوي شورت | Long Boyshorts — بوي شورت طويل | Bermuda Shorts — برمودا شورت | Leggings — ليجنز | Underwear Sets — أطقم ملابس داخلية | All Thermal Underwear — جميع الملابس الداخلية الحرارية | Thermal Tops — فانلات حرارية | Thermal Bottoms — بناطيل حرارية | Thermal Sets — أطقم ملابس حرارية
- Lingerie — لانجري: All Lingerie — جميع اللانجري | Lingerie Sets — أطقم لانجري | Chemises & Babydolls — قمصان لانجري وبيبي دول
- Socks — جوارب: All Socks — جميع الجوارب | Full-Cushion Socks — جوارب فوطة كاملة | Sports Ankle Socks — جوارب رياضية للكاحل | Classic Ankle Socks — جوارب كلاسيكية للكاحل | Low-Cut Socks (Mini Socks) — جوارب قصيرة | No-Show Socks (Liner Socks) — جوارب مخفية للقدم
- Sportswear — ملابس رياضية: All Sportswear — جميع الملابس الرياضية | Sports T-Shirts & Tops — تيشيرتات وتوبات رياضية | Sports Shorts — شورتات رياضية | Sports Leggings — ليجنز رياضي | Track Pants & Joggers — بناطيل رياضية وجوجرز | Sports Sets — أطقم رياضية
- Swimwear — ملابس سباحة: All Swimwear — جميع ملابس السباحة
- Value Packs & Bundles — عبوات اقتصادية ومجموعات: All Value Packs & Bundles — جميع العبوات والمجموعات | Panty Multipacks — عبوات كيلوتات متعددة | Undershirt Multipacks — عبوات فانلات داخلية متعددة | Socks Multipacks — عبوات جوارب متعددة | Clothing Bundles — مجموعات ملابس
قيم الفلتر (product_style):
- T-Shirts & Tops — تيشيرتات وتوبات: Short-Sleeve T-Shirts — تيشيرتات نصف كم | Long-Sleeve T-Shirts — تيشيرتات كم طويل
- Shorts — شورتات: Pajama Pants Sets — أطقم بيجامات ببنطلون | Pajama Leggings Sets — أطقم بيجامات ليجنز | Pajama Pants & Shorts Sets — أطقم بيجامات ببنطلون وشورت
- Pajama Shorts Sets — أطقم بيجامات بشورت: Pajama Shorts Sets — أطقم بيجامات بشورت | Pajama Bermuda Sets — اطقم بيجاما برمودا

### Boys
- Tops — ملابس علوية: All Tops — جميع الملابس العلوية | T-Shirts & Tops — تيشيرتات وتوبات | Polo Shirts — تيشيرتات بولو | Shirts — قمصان | Hoodies & Sweatshirts — هوديز وسويت شيرتات | Sweaters & Cardigans — كنزات وكارديجان | Jackets & Coats — جاكيتات ومعاطف
- Bottoms — ملابس سفلية: All Bottoms — جميع الملابس السفلية | Jeans — جينز | Shorts — شورتات | Joggers & Sweatpants — بناطيل رياضية وجوجرز | Pants & Chinos — بناطيل وتشينو
- Loungewear — ملابس منزلية مريحة: All Loungewear — جميع الملابس المنزلية | Summer Sets — أطقم ملابس صيفية | Winter Sets — أطقم ملابس شتوية | T-Shirts & Tops — تيشيرتات وتوبات | Shorts — شورتات منزلية | Joggers & Sweatpants — بناطيل رياضية وجوجرز | Hoodies & Sweatshirts — هوديز وسويت شيرتات منزلية
- Sleepwear & Pajamas — ملابس نوم وبيجامات: All Sleepwear & Pajamas — جميع ملابس النوم والبيجامات | Pajama Pants Sets — أطقم بيجامات ببنطلون | Pajama Shorts Sets — أطقم بيجامات بشورت | Pajama Pants — بناطيل بيجامات | Pajama Shorts — شورتات بيجامات | Sleep Robes — أرواب منزلية للنوم
- Underwear — ملابس داخلية: All Underwear — جميع الملابس الداخلية | All Undershirts — جميع الفانلات الداخلية | Sleeveless Undershirts — فانلات داخلية بدون أكمام | Cut-Sleeve Undershirts — فانلات داخلية كت | Short-Sleeve Undershirts — فانلات داخلية نصف كم | Long-Sleeve Undershirts — فانلات داخلية كم طويل | All Boxers & Briefs — جميع البوكسرات والسليب | Briefs — سليب | Trunks — ترانك | Boxer Briefs — بوكسر بريف | Boxer Shorts — بوكسر شورت | Long Boxer Briefs — بوكسر بريف طويل | Underwear Sets — أطقم ملابس داخلية | All Thermal Underwear — ملابس داخلية حرارية | Thermal Tops — فانلات حرارية | Thermal Bottoms — بناطيل حرارية | Thermal Sets — أطقم ملابس حرارية
- Socks — جوارب: All Socks — جميع الجوارب | High Socks — جوارب طويلة | Crew Socks — جوارب متوسطة الطول | Sports Ankle Socks — جوارب رياضية للكاحل | Classic Ankle Socks — جوارب كلاسيكية للكاحل | Low-Cut Socks (Mini Socks) — جوارب قصيرة | No-Show Socks (Liner Socks) — جوارب مخفية للقدم
- Sportswear — ملابس رياضية: All Sportswear — جميع الملابس الرياضية | Sports T-Shirts — تيشيرتات رياضية | Sports Shorts — شورتات رياضية | Track Pants & Joggers — بناطيل رياضية وجوجرز | Tracksuits & Sports Sets — تريننج وأطقم رياضية
- Swimwear — ملابس سباحة: All Swimwear — جميع ملابس السباحة
- Ihram Clothing — ملابس إحرام: All Ihram Clothing — جميع ملابس الإحرام
- Value Packs & Bundles — عبوات اقتصادية ومجموعات: All Value Packs & Bundles — جميع العبوات والمجموعات | Underwear Multipacks — عبوات ملابس داخلية | Undershirt Multipacks — عبوات فانلات داخلية | Socks Multipacks — عبوات جوارب | Clothing Bundles — مجموعات ملابس

### Girls
- Tops — ملابس علوية: All Tops — جميع الملابس العلوية | T-Shirts & Tops — تيشيرتات وتوبات | Shirts & Blouses — قمصان وبلوزات | Hoodies & Sweatshirts — هوديز وسويت شيرتات | Sweaters & Cardigans — كنزات وكارديجان | Jackets & Coats — جاكيتات ومعاطف
- Bottoms — ملابس سفلية: All Bottoms — جميع الملابس السفلية | Jeans — جينز | Shorts — شورتات | Joggers & Sweatpants — جوجرز وبناطيل رياضية | Pants & Trousers — بناطيل وتشينو | Leggings — ليجنز | Skirts — تنانير
- Dresses & Jumpsuits — فساتين وجمبسوت: All Dresses & Jumpsuits — جميع الفساتين والجمبسوت | Dresses — فساتين | Jumpsuits — جمبسوت | Overalls & Dungarees — أوفرول ودنغري
- Loungewear — ملابس منزلية مريحة: All Loungewear — جميع الملابس المنزلية | Summer Sets — أطقم ملابس صيفية | Winter Sets — أطقم ملابس شتوية | T-Shirts & Tops — تيشيرتات وتوبات | Shorts — شورتات | Joggers & Sweatpants — جوجرز وبناطيل رياضية | Leggings — ليجنز منزلي | Dresses — فساتين منزلية | Hoodies & Sweatshirts — هوديز وسويت شيرتات منزلية
- Sleepwear & Pajamas — ملابس نوم وبيجامات: All Sleepwear & Pajamas — جميع ملابس النوم والبيجامات | Pajama Pants Sets — أطقم بيجامات ببنطلون | Pajama Shorts Sets — أطقم بيجامات بشورت | Nightgowns & Sleepshirts — قمصان نوم | Sleep Robes — أرواب نوم
- Underwear — ملابس داخلية: All Underwear — جميع الملابس الداخلية | All Underwear Tops — جميع الملابس الداخلية العلوية | Crop Tops — كروب توب داخلي | Bralettes — براليت | Camisoles — توبات وكاميسول داخلية | Sleeveless Undershirts — فانلات داخلية بدون أكمام | Short-Sleeve Undershirts — فانلات داخلية نصف كم | Long-Sleeve Undershirts — فانلات داخلية كم طويل | Bodysuits — بودي سوت داخلي | All Panties — جميع السراويل الداخلية | Briefs — كيلوت | Boyshorts — بوي شورت | Long Boyshorts — بوي شورت طويل | Bermuda Shorts — برمودا شورت | Leggings — ليجنز | Underwear Sets — أطقم ملابس داخلية | All Thermal Underwear — جميع الملابس الداخلية الحرارية | Thermal Tops — فانلات حرارية | Thermal Bottoms — بناطيل حرارية | Thermal Sets — أطقم ملابس حرارية
- Socks — جوارب: All Socks — جميع الجوارب | High Socks — جوارب طويلة | Crew Socks — جوارب متوسطة الطول | Sports Ankle Socks — جوارب رياضية للكاحل | Classic Ankle Socks — جوارب كلاسيكية للكاحل | Low-Cut Socks (Mini Socks) — جوارب قصيرة | No-Show Socks (Liner Socks) — جوارب مخفية للقدم
- Sportswear — ملابس رياضية: All Sportswear — جميع الملابس الرياضية | Sports T-Shirts & Tops — تيشيرتات وتوبات رياضية | Sports Shorts — شورتات رياضية | Sports Leggings — ليجنز رياضي | Tracksuits & Sports Sets — تريننج وأطقم رياضية
- Swimwear — ملابس سباحة: All Swimwear — جميع ملابس السباحة
- Value Packs & Bundles — عبوات اقتصادية ومجموعات: All Value Packs & Bundles — جميع العبوات والمجموعات | Underwear Multipacks — عبوات ملابس داخلية | Undershirt Multipacks — عبوات فانلات داخلية | Socks Multipacks — عبوات جوارب | Clothing Bundles — مجموعات ملابس

### Baby & Toddler
- Tops — ملابس علوية: All Tops — جميع الملابس العلوية | T-Shirts & Tops — تيشيرتات وتوبات | Shirts & Blouses — قمصان وبلوزات | Hoodies & Sweatshirts — هوديز وسويت شيرتات | Sweaters & Cardigans — كنزات وكارديجان | Jackets & Coats — جاكيتات ومعاطف
- Bottoms — ملابس سفلية: All Bottoms — جميع الملابس السفلية | Shorts — شورتات | Pants & Leggings — بناطيل وليجنز | Bloomers & Diaper Covers — شورتات بلومر وأغطية حفاضات
- Loungewear — ملابس منزلية مريحة: All Loungewear — جميع الملابس المنزلية | Summer Sets — أطقم ملابس صيفية | Winter Sets — أطقم ملابس شتوية | Tops — تيشيرتات وتوبات منزلية | Shorts — شورتات منزلية | Pants — بناطيل منزلية
- Sleepwear & Pajamas — ملابس نوم وبيجامات: All Sleepwear & Pajamas — جميع ملابس النوم والبيجامات | Pajama Pants Sets — أطقم بيجامات ببنطلون | Pajama Shorts Sets — أطقم بيجامات بشورت | Sleep Gowns — فساتين نوم للرضّع
- Bodysuits — بودي سوت للرضّع: All Bodysuits — جميع قطع البودي سوت | Sleeveless Bodysuits — بودي سوت بدون أكمام | Short-Sleeve Bodysuits — بودي سوت نصف كم | Long-Sleeve Bodysuits — بودي سوت كم طويل | Wrap-Front Bodysuits — بودي سوت بفتحة جانبية أمامية
- Rompers & Jumpsuits — رومبر وقطع من قطعة واحدة: All Rompers & Jumpsuits — جميع الرومبر والقطع الواحدة | Rompers — رومبر | Kimono-Style One-Pieces — قطع قطعة واحدة بتصميم كيمونو | Jumpsuits & Overalls — جمبسوت وأوفرول
- Dresses — فساتين: All Dresses — جميع الفساتين | Baby Dresses — فساتين رضّع | Dress & Leggings Sets — أطقم فستان مع ليجنز | Tutu Dresses — فساتين توتو
- Underwear — ملابس داخلية: All Underwear — جميع الملابس الداخلية | All Undershirts — جميع الفانلات الداخلية | Sleeveless Undershirts — فانلات داخلية بدون أكمام | Cut-Sleeve Undershirts — فانلات داخلية كت | Short-Sleeve Undershirts — فانلات داخلية نصف كم | Long-Sleeve Undershirts — فانلات داخلية كم طويل | All Underwear Bottoms — جميع الملابس الداخلية السفلية | Boys Briefs — سليب أولادي | Boys Boxer Briefs — بوكسر أولادي | Boys Underwear Sets — أطقم ملابس داخلية أولادي | Girls Panties — كيلوت بناتي | Boys Underwear Sets — أطقم ملابس داخلية بناتي | All Thermal Underwear — ملابس داخلية حرارية | Boys Thermal Sets — أطقم ملابس حرارية أولادي | Girls Thermal Sets — أطقم ملابس حرارية بناتي
- Socks & Booties — جوارب وأحذية قماشية للرضّع: All Socks & Booties — جميع الجوارب والأحذية القماشية | Baby Socks — جوارب رضّع | Baby Booties — أحذية قماشية للرضّع | Non-Slip Socks — جوارب مانعة للانزلاق
- Value Packs & Bundles — عبوات اقتصادية ومجموعات: All Value Packs & Bundles — جميع العبوات والمجموعات | Bodysuit Multipacks — عبوات بودي سوت متعددة | Socks Multipacks — عبوات جوارب متعددة | Baby Clothing Bundles — مجموعات ملابس للرضّع

### Home & Bath
- Home & Bath — المنزل والحمام: All Home & Bath — جميع منتجات المنزل والحمام | Bathrobes — برانس حمام | Towels — مناشف | Towel Sets — أطقم مناشف | Bundles — مجموعات

### Brand Categories (صفحة كولكشن واحدة لكل براند)
#### JIL
- [Men] Men Undershirts — رجال - الفانلات الداخلية
- [Men] Men Boxers & Briefs — رجال - البوكسرات والسليب
- [Men] Men Loungewear — رجال - الملابس المنزلية
- [Men] Men Sleepwear & Pajamas — رجال - ملابس النوم والبيجامات
- [Women] Women Underwear Tops — نساء - الملابس الداخلية العلوية
- [Women] Women Panties — نساء -  ملابس داخلية وكيلوتات
- [Women] Women Loungewear & Pajamas — نساء - الملابس المنزلية والبيجامات
- [Boys] Boys Underwear — اولاد - الملابس الداخلية
- [Boys] Boys Loungewear & Pajamas — اولاد - الملابس المنزلية والبيجامات
- [Girls] Girls Underwear — بنات - الملابس الداخلية
- [Girls] Girls Loungewear & Pajamas — بنات - الملابس المنزلية والبيجامات
#### COTTONIL
- [Men] Men Mercerise — رجال - مرسريزية
- [Men] Men Cotton Stretch — رجال - قطن استرتش
- [Men] Men Combed — رجال - قطن ممشط
- [Men] Men Derby — رجال - دربي
- [Men] Men Boxers & Briefs — رجال - بوكسرات وسليب
- [Women] Women Tops — نساء - توبات
- [Women] Women Panties — نساء - ملابس داخلية وكيلوتات
- [Boys] Boys Underwear — اولاد - ملابس داخلية
- [Girls] Girls Underwear — بنات - ملابس داخلية
- [Socks] Socks — جوارب
- [Towels & Bathrobe] Towels & Bathrobe — برنس ومناشف
- [Ihram Clothing] Ihram Clothing — أطقم احرام
#### DISNEY / MARVIL
- [Men] Men Collection — مجموعة الرجال
- [Women] Women Collection — مجموعة النساء
- [Boys] Boys Collection — مجموعة ألاولاد
- [Girls] Girls Collection — مجموعة البنات
#### RIPPLES
- [Men] Men Collection — مجموعة الرجال
- [Women] Women Collection — مجموعة النساء
- [Boys] Boys Loungewear & Sleepwear — ملابس منزلية وبيجامات للأولاد
- [Boys] Boys Casualwear — ملابس كاجوال للأولاد
- [Girls] Girls Loungewear & Sleepwear — ملابس منزلية وبيجامات للبنات
- [Girls] Girls Casualwear — ملابس كاجوال للبنات
- [Baby & Toddler] Baby Everyday Wear — ملابس يومية للرضع
- [Baby & Toddler] Baby Essentials & Sleepwear — أساسيات الرضّع وملابس النوم
#### RED COTTON
- [Men] Men Underwear — رجال - الملابس الداخلية
- [Men] Men Loungewear — رجال - الملابس المنزلية
- [Men] Men Sleepwear & Pajamas — رجال - ملابس النوم والبيجامات
- [Women] Women Underwear — نساء - الملابس الداخلية
- [Women] Women Loungewear — نساء - الملابس المنزلية
- [Women] Women Sleepwear & Pajamas — نساء - ملابس النوم والبيجامات
- [Boys] Boys Collection — مجموعة ألاولاد
- [Girls] Girls Collection — مجموعة البنات
- [Socks] Socks — جوارب
- [Towels & Bathrobe] Towels & Bathrobe — برنس ومناشف
- [Ihram Clothing] Ihram Clothing — أطقم احرام
