/* Lecture 20 — Physiology: Respiratory System
   All content is bilingual: en = English, ar = Arabic translation. */
window.LECTURES = window.LECTURES || {};

window.LECTURES.resp = {
  id: "resp",
  num: "Lecture 20",
  color: "#0891b2",
  soft: "#cffafe",
  title: { en: "Physiology — Respiratory System", ar: "فسيولوجيا — الجهاز التنفسي" },
  short: { en: "Respiratory System", ar: "الجهاز التنفسي" },
  topics: ["Overview & Functions", "Respiratory Tract", "Conducting vs Respiratory Zone", "23 Airway Divisions", "Alveoli & Surfactant", "The Pleura", "Mechanism of Respiration", "Intra-alveolar & Intrapleural Pressure", "Pulmonary Gas Exchange"],

  sections: [
    /* ---------------------------------------------------------- 1 */
    {
      id: "overview",
      title: { en: "What is the Respiratory System?", ar: "ما هو الجهاز التنفسي؟" },
      blocks: [
        { t: "p",
          en: "The <b>respiratory system</b> is the network of organs and tissues that help you breathe. It includes your <span class='hl'>airways, lungs, and blood vessels</span>.",
          ar: "<b>الجهاز التنفسي</b> هو شبكة من الأعضاء والأنسجة التي تساعدك على التنفس. ويشمل <span class='hl'>الممرات الهوائية، الرئتين، والأوعية الدموية</span>." },
        { t: "p",
          en: "These parts work together to <b>move oxygen throughout the body</b> and <b>clean out waste gases like carbon dioxide (CO₂)</b>.",
          ar: "تعمل هذه الأجزاء معًا <b>لنقل الأكسجين في جميع أنحاء الجسم</b> و<b>التخلص من الغازات العادمة مثل ثاني أكسيد الكربون (CO₂)</b>." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "functions",
      title: { en: "Functions of the Respiratory System", ar: "وظائف الجهاز التنفسي" },
      blocks: [
        { t: "cards", items: [
          { title: { en: "🎯 Primary Functions", ar: "الوظائف الأساسية (الأولية)" },
            en: "• <b>Provides oxygen (O₂)</b> for metabolism in the tissues.<br>• <b>Removes carbon dioxide (CO₂)</b>, a waste product of metabolism.",
            ar: "• <b>يوفر الأكسجين (O₂)</b> لعمليات الأيض (التمثيل الغذائي) في الأنسجة.<br>• <b>يزيل ثاني أكسيد الكربون (CO₂)</b>، وهو ناتج فضلات الأيض." },
          { title: { en: "🛡️ Secondary Functions", ar: "الوظائف الثانوية" },
            en: "1. <b>Protects airways</b> from harmful substances and irritants.<br>2. <b>Maintains body water levels</b> and <b>heat balance</b>.<br>3. <b>Facilitates sense of smell</b> (olfaction).<br>4. <b>Produces speech</b> (phonation).<br>5. <b>Maintains acid–base balance</b>.",
            ar: "1. <b>يحمي الممرات الهوائية</b> من المواد الضارة والمهيجات.<br>2. <b>يحافظ على مستويات الماء</b> في الجسم و<b>التوازن الحراري</b>.<br>3. <b>يسهّل حاسة الشم</b>.<br>4. <b>ينتج الكلام</b> (النطق).<br>5. <b>يحافظ على التوازن الحمضي القاعدي</b>." }
        ]},
        { t: "callout", kind: "tip", title: { en: "High-Yield Exam Tip", ar: "نصيحة مهمة للامتحان" },
          en: "Primary = <b>Gas exchange (O₂ in, CO₂ out)</b>. Everything else (smell, speech, acid-base, heat/water balance, protection) = <b>Secondary</b>.",
          ar: "الأساسية = <b>تبادل الغازات (دخول O₂ وخروج CO₂)</b>. كل الوظائف الأخرى (الشم، الكلام، التوازن الحمضي القاعدي، توازن الماء والحرارة، الحماية) = <b>ثانوية</b>." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "tract",
      title: { en: "Air Passage (Respiratory Tract) & Functional Anatomy", ar: "الممر الهوائي (القناة التنفسية) والتشريح الوظيفي" },
      blocks: [
        { t: "p",
          en: "Anatomically, the air passage is divided into <b>Upper</b> and <b>Lower</b> respiratory tracts. Functionally, the lower tract branches into <b>23 divisions</b> (the tracheobronchial tree) divided into a <b>Conducting zone</b> and a <b>Respiratory zone</b>.",
          ar: "تشريحيًا، ينقسم الممر الهوائي إلى قناة تنفسية <b>علوية</b> و<b>سفلية</b>. وظيفيًا، تتفرع القناة السفلية إلى <b>23 انقسامًا</b> (الشجرة الرغامية القصبية) مقسمة إلى <b>منطقة موصلة</b> و<b>منطقة تنفسية</b>." },
        { t: "cards", items: [
          { title: { en: "1. Upper Air Passage (Upper Respiratory Tract)", ar: "1. الممر الهوائي العلوي (القناة التنفسية العلوية)" },
            en: "Includes the <b>nose (nasal cavity), pharynx (nasopharynx), and larynx</b> (entrance to larynx).",
            ar: "يشمل <b>الأنف (التجويف الأنفي)، البلعوم (البلعوم الأنفي)، والحنجرة</b> (مدخل الحنجرة)." },
          { title: { en: "2. Lower Air Passage (Lower Respiratory Tract)", ar: "2. الممر الهوائي السفلي (القناة التنفسية السفلية)" },
            en: "Starts at the <b>trachea</b> (larynx to alveoli) and branches into <b>23 divisions</b> (tracheobronchial tree) down to the lungs.",
            ar: "يبدأ من <b>القصبة الهوائية (الرغامى)</b> ويتفرع إلى <b>23 انقسامًا</b> (الشجرة الرغامية القصبية) وصولًا إلى الحويصلات في الرئتين." }
        ]},
        { t: "table", head: [
          { en: "Feature", ar: "المقارنة" },
          { en: "A. Conducting Zone (Divisions 0–16)", ar: "أ. المنطقة الموصلة (الانقسامات 0–16)" },
          { en: "B. Respiratory Zone (Divisions 17–23)", ar: "ب. المنطقة التنفسية (الانقسامات 17–23)" }
        ], rows: [
          [ { en: "<b>Structures included</b>", ar: "<b>التراكيب المشمولة</b>" },
            { en: "• Nose, Pharynx, Larynx<br>• Trachea (0)<br>• 2 Primary Bronchi<br>• Lobar &amp; Segmental bronchi<br>• Bronchioles<br>• <b>Terminal bronchioles</b> (end of conducting zone)", ar: "• الأنف، البلعوم، الحنجرة<br>• القصبة الهوائية (0)<br>• القصبتان الرئيسيتان<br>• القصبات الفصية والقطعية<br>• القصيبات<br>• <b>القصيبات الطرفية (النهائية)</b>" },
            { en: "• <b>Respiratory bronchioles</b> (17–19)<br>• <b>Alveolar ducts</b> (20–22)<br>• <b>Alveolar sacs &amp; Alveoli</b> (23)", ar: "• <b>القصيبات التنفسية</b> (17–19)<br>• <b>القنوات السنخية</b> (20–22)<br>• <b>الأكياس السنخية والحويصلات</b> (23)" } ],
          [ { en: "<b>Functions</b>", ar: "<b>الوظائف</b>" },
            { en: "1) <b>Air conduction</b><br>2) <b>Air filtration</b><br>3) <b>Air warming and humidification</b><br>4) <b>Protection</b>", ar: "1) <b>توصيل الهواء</b><br>2) <b>تنقية (فلترة) الهواء</b><br>3) <b>تدفئة وترطيب الهواء</b><br>4) <b>الحماية</b>" },
            { en: "<b>Gas exchange</b> (O₂ &amp; CO₂ diffusion between air and blood)", ar: "<b>تبادل الغازات</b> (انتشار O₂ و CO₂ بين الهواء والدم)" } ]
        ]},
        { t: "diagram", id: "airwayTree", title: { en: "Interactive Tracheobronchial Tree (Generations 0 → 23)", ar: "الشجرة القصبية التفاعلية (الأجيال 0 ← 23)" } }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "alveoli",
      title: { en: "Alveoli & Pulmonary Surfactant", ar: "الحويصلات الهوائية (الأسناخ) ومادة السورفاكتانت" },
      blocks: [
        { t: "p",
          en: "<b>Alveoli</b> are the <span class='hl'>functional units of the respiratory system</span>. Their function is <b>gas exchange</b> with the pulmonary capillaries that surround them. Adjacent alveoli are connected by tiny openings called <b>Pores of Kohn</b>, and wandering <b>alveolar macrophages</b> clean up debris.",
          ar: "<b>الحويصلات الهوائية (الأسناخ)</b> هي <span class='hl'>الوحدات الوظيفية للجهاز التنفسي</span>. وظيفتها هي <b>تبادل الغازات</b> مع الشعيرات الدموية الرئوية المحيطة بها. تتصل الحويصلات المتجاورة بفتحات صغيرة تُسمى <b>مسام كون (Pores of Kohn)</b>، وتقوم <b>الخلايا البلعمية السنخية</b> بتنظيف الشوائب." },
        { t: "p", en: "<b>Lining cells:</b> The alveoli are lined by <b>2 types of cells</b>:", ar: "<b>الخلايا المبطّنة:</b> تُبطَّن الحويصلات الهوائية <b>بنوعين من الخلايا</b>:" },
        { t: "cards", items: [
          { title: { en: "A. Type I Pneumocytes (95%)", ar: "أ. الخلايا الرئوية من النوع الأول (95%)" },
            en: "• <b>Flat (squamous) cells</b> that secrete a minimal quantity of fluid lining the alveoli.<br>• Form the ultra-thin wall (~0.5 μm barrier) that <b>allows transport (diffusion) of gases</b>.",
            ar: "• <b>خلايا مسطحة</b> تفرز كمية ضئيلة جدًا من السوائل التي تبطن الحويصلات.<br>• تشكّل الجدار الرقيق جدًا الذي <b>يسمح بانتقال (انتشار) الغازات</b>." },
          { title: { en: "B. Type II Pneumocytes (5%)", ar: "ب. الخلايا الرئوية من النوع الثاني (5%)" },
            en: "• Secrete <span class='hl'>pulmonary surfactant</span>.<br>• Surfactant <b>decreases the surface tension</b> of the fluid lining the alveoli, so it <b>prevents alveolar collapse</b> (atelectasis).",
            ar: "• تفرز <span class='hl'>مادة السورفاكتانت الرئوي</span> (الفاعل بالسطح).<br>• السورفاكتانت <b>يقلل التوتر السطحي</b> للحويصلات، وبالتالي <b>يمنع انخماص (انهيار) الحويصلات</b>." }
        ]},
        { t: "diagram", id: "alveolus", title: { en: "Interactive Alveolus & Surfactant Simulator", ar: "محاكي الحويصلة الهوائية ومادة السورفاكتانت" } }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "pleura",
      title: { en: "The Pleura", ar: "غشاء الجنب (البلورا)" },
      blocks: [
        { t: "p",
          en: "The <b>pleura</b> is a <span class='hl'>closed sac</span> that covers each lung and <b>separates the lungs from the chest wall</b>.",
          ar: "<b>غشاء الجنب (البلورا)</b> هو <span class='hl'>كيس مغلق</span> يحيط بكل رئة و<b>يفصل الرئتين عن جدار الصدر</b>." },
        { t: "p", en: "<b>The pleura is formed of 3 parts:</b>", ar: "<b>يتكون غشاء الجنب من 3 أجزاء:</b>" },
        { t: "list", num: true, items: [
          { en: "<b>Visceral pleura:</b> adheres directly to the <u>outer surface of the lungs</u>.", ar: "<b>غشاء الجنب الحشوي:</b> يلتصق مباشرة <u>بالسطح الخارجي للرئتين</u>." },
          { en: "<b>Parietal pleura:</b> lines the <u>inner surface of the chest wall</u>.", ar: "<b>غشاء الجنب الجداري:</b> يبطّن <u>السطح الداخلي لجدار الصدر</u>." },
          { en: "<b>Pleural cavity (pleural sac):</b> a <u>potential space</u> between the two layers that contains a <b>very thin film of fluid</b> acting as a <b>lubricant</b> to help sliding of the two layers during breathing.", ar: "<b>التجويف الجنبي (الكيس الجنبي):</b> <u>فراغ كامن</u> يقع بين الطبقتين ويحتوي على <b>طبقة رقيقة جدًا من السائل</b> تعمل <b>كمزلق (مادة تشحيم)</b> تساعد على انزلاق الطبقتين أثناء التنفس." }
        ]}
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "mechanism",
      title: { en: "Mechanism of Respiration", ar: "آلية التنفس" },
      blocks: [
        { t: "cards", items: [
          { title: { en: "1. Normal Inspiration (Active Process ⚡)", ar: "1. الشهيق الطبيعي (عملية نشطة ⚡)" },
            en: "• It is an <span class='hl'>active process</span> (requires muscle contraction &amp; energy).<br>• <b>Contraction of the main inspiratory muscles</b>: the <b>diaphragm</b> (descends/flattens) and <b>external intercostal muscles</b> (elevate ribs).<br>• Thoracic volume increases → lungs expand → intra-alveolar pressure drops → <b>air flows IN from atmosphere into lungs</b>.",
            ar: "• هي <span class='hl'>عملية نشطة</span> (تتطلب انقباض عضلي وطاقة).<br>• <b>انقباض عضلات الشهيق الرئيسية</b>: <b>الحجاب الحاجز</b> (يهبط ويتسطح) و<b>العضلات الوربية الخارجية</b> (ترفع الأضلاع).<br>• يزداد حجم الصدر ← تتوسع الرئتان ← ينخفض الضغط داخل الحويصلات ← <b>يتدفق الهواء للداخل من الجو إلى الرئتين</b>." },
          { title: { en: "2. Normal Quiet Expiration (Passive Process 🍃)", ar: "2. الزفير الهادئ الطبيعي (عملية سلبية 🍃)" },
            en: "• It is a <span class='hl'>passive process</span> (no muscle contraction needed in quiet breathing).<br>• <b>Relaxation of the main inspiratory muscles</b> + <b>elastic recoil of the lungs &amp; chest wall</b>.<br>• Thoracic volume decreases → lungs recoil → intra-alveolar pressure rises → <b>air flows OUT from lungs to atmosphere</b>.",
            ar: "• هي <span class='hl'>عملية سلبية (منفعلة)</span> (لا تحتاج انقباض عضلي في التنفس الهادئ).<br>• <b>ارتخاء عضلات الشهيق الرئيسية</b> + <b>الارتداد المرن للرئتين وجدار الصدر</b>.<br>• يقل حجم الصدر ← ترتد الرئتان ← يرتفع الضغط داخل الحويصلات ← <b>يتدفق الهواء للخارج من الرئتين إلى الجو</b>." }
        ]},
        { t: "callout", kind: "key", title: { en: "Golden Rule", ar: "قاعدة ذهبية" },
          en: "Normal inspiration = <b>ACTIVE</b> (diaphragm + external intercostals contract).<br>Normal quiet expiration = <b>PASSIVE</b> (muscles relax + elastic recoil).",
          ar: "الشهيق الطبيعي = <b>نشط</b> (انقباض الحجاب الحاجز + الوربية الخارجية).<br>الزفير الهادئ الطبيعي = <b>سلبي</b> (ارتخاء العضلات + الارتداد المرن)." }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "pressures",
      title: { en: "Intra-alveolar & Intrapleural Pressures", ar: "الضغط داخل الحويصلات والضغط داخل الجنب" },
      blocks: [
        { t: "p",
          en: "Atmospheric pressure at sea level is <b>760 mmHg</b> (taken as <b>0 mmHg reference</b>). Air moves down a pressure gradient: when intra-alveolar pressure is below atmospheric, air flows IN; when above, air flows OUT.",
          ar: "الضغط الجوي عند سطح البحر هو <b>760 مم زئبق</b> (ويُعتبر <b>0 مم زئبق كمرجع</b>). يتحرك الهواء حسب تدرج الضغط: عندما يكون الضغط داخل الحويصلات أقل من الجوي يدخل الهواء، وعندما يكون أعلى يخرج الهواء." },
        { t: "table", head: [
          { en: "Pressure Type", ar: "نوع الضغط" },
          { en: "Definition", ar: "التعريف" },
          { en: "During Normal Inspiration", ar: "أثناء الشهيق الطبيعي" },
          { en: "During Normal Expiration", ar: "أثناء الزفير الطبيعي" }
        ], rows: [
          [ { en: "<b>Intra-alveolar (Intrapulmonary) pressure (P<sub>alv</sub>)</b>", ar: "<b>الضغط داخل الحويصلات (داخل الرئة)</b>" },
            { en: "Pressure inside the alveoli &amp; alveolar ducts (at rest = 0 mmHg = 760 mmHg).", ar: "الضغط داخل الحويصلات والقنوات السنخية (وقت الراحة = 0 = 760 مم زئبق)." },
            { en: "<b>−1 mmHg</b><br>(759 mmHg) → air flows IN", ar: "<b>−1 مم زئبق</b><br>(759 مم زئبق) ← دخول الهواء" },
            { en: "<b>+1 mmHg</b><br>(761 mmHg) → air flows OUT", ar: "<b>+1 مم زئبق</b><br>(761 مم زئبق) ← خروج الهواء" } ],
          [ { en: "<b>Intrapleural pressure (IPP)</b>", ar: "<b>الضغط داخل الجنب (IPP)</b>" },
            { en: "Pressure inside the pleural cavity. <b>Always negative (subatmospheric)</b> under normal quiet breathing.", ar: "الضغط داخل التجويف الجنبي. <b>دائمًا سالب (أقل من الضغط الجوي)</b> في التنفس الهادئ الطبيعي." },
            { en: "<b>−6 mmHg</b> (754 mmHg)<br><i>Note: Slide 14 text writes −4/−6; Slide 13 diagram shows 756 (−4) pre-inspiration → 754 (−6) during inspiration.</i>", ar: "<b>−4 إلى −6 مم زئبق</b> (754 مم زئبق)<br><i>ملاحظة: نص الشريحة 14 يذكر −4 للشهيق و−6 للزفير، بينما رسم الشريحة 13 يوضح 756 (−4) قبل الشهيق ← 754 (−6) أثناء الشهيق.</i>" },
            { en: "Returns to <b>−4 mmHg</b> (756 mmHg)<br>(Slide 14 text lists −6 mmHg)", ar: "يعود إلى <b>−4 مم زئبق</b> (756 مم زئبق)<br>(نص الشريحة 14 يذكر −6 مم زئبق)" } ]
        ]},
        { t: "callout", kind: "key", title: { en: "Importance of Negative Intrapleural Pressure (IPP)", ar: "أهمية الضغط السلبي داخل الجنب (IPP)" },
          en: "1. <b>It prevents collapse of the lung</b> (keeps lungs expanded against the chest wall).<br>2. <b>It helps venous and lymphatic return</b> to the heart (respiratory pump).",
          ar: "1. <b>يمنع انخماص (انهيار) الرئة</b> (يبقي الرئتين متوسعتين).<br>2. <b>يساعد في العود الوريدي واللمفاوي</b> إلى القلب." },
        { t: "diagram", id: "breathingSim", title: { en: "Interactive Breathing & Pressure Simulator", ar: "محاكي التنفس والضغوط التفاعلي" } }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "gasexchange",
      title: { en: "Pulmonary Blood Flow & Gas Exchange", ar: "تدفق الدم الرئوي وتبادل الغازات" },
      blocks: [
        { t: "p",
          en: "<b>Gas exchange</b> occurs at two levels: the <b>lungs</b> (external respiration) and the <b>tissues</b> (internal respiration). In both places, it occurs by <span class='hl'>simple diffusion down a partial pressure gradient</span> — i.e., <b>from high partial pressure to low partial pressure</b>.",
          ar: "يحدث <b>تبادل الغازات</b> على مستويين: <b>الرئتين</b> و<b>الأنسجة</b>. وفي كلا المكانين يحدث عن طريق <span class='hl'>الانتشار البسيط مع تدرج الضغط الجزئي</span> — أي <b>من الضغط الجزئي المرتفع إلى الضغط الجزئي المنخفض</b>." },
        { t: "list", num: true, items: [
          { en: "Blood entering the <b>pulmonary capillaries</b> (via the pulmonary artery) is venous blood with <b style='color:#2563eb'>low PO₂ &amp; high PCO₂</b>.", ar: "الدم الداخل إلى <b>الشعيرات الدموية الرئوية</b> (عبر الشريان الرئوي) يكون بـ <b style='color:#2563eb'>ضغط أكسجين منخفض (Low PO₂) وضغط ثاني أكسيد كربون مرتفع (High PCO₂)</b>." },
          { en: "It becomes exposed to <b>alveolar air</b>, which has <b style='color:#dc2626'>high PO₂ &amp; low PCO₂</b>.", ar: "يتعرض <b>للهواء السنخي</b> الذي يتميز بـ <b style='color:#dc2626'>ضغط أكسجين مرتفع (High PO₂) وضغط ثاني أكسيد كربون منخفض (Low PCO₂)</b>." },
          { en: "Therefore, across the <b>alveolar–capillary membrane</b>:<br>• <b style='color:#dc2626'>O₂ diffuses from alveoli → blood</b>.<br>• <b style='color:#2563eb'>CO₂ diffuses from blood → alveoli</b>.", ar: "لذلك، عبر <b>الغشاء السنخي الشعيري</b>:<br>• <b style='color:#dc2626'>ينتشر الأكسجين (O₂) من الحويصلات ← الدم</b>.<br>• <b style='color:#2563eb'>ينتشر ثاني أكسيد الكربون (CO₂) من الدم ← الحويصلات</b>." }
        ]},
        { t: "diagram", id: "gasExchange", title: { en: "Alveolar–Capillary Gas Exchange Animation", ar: "محاكاة تبادل الغازات عبر الغشاء السنخي الشعيري" } }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "summary",
      title: { en: "Quick Summary", ar: "ملخص سريع" },
      blocks: [
        { t: "list", items: [
          { en: "Primary function: O₂ for metabolism + remove CO₂. Secondary: airway protection, water/heat balance, smell, speech, acid–base balance.", ar: "الوظيفة الأساسية: توفير O₂ للأيض وإزالة CO₂. الثانوية: حماية الممرات، توازن الماء والحرارة، الشم، الكلام، التوازن الحمضي القاعدي." },
          { en: "Upper tract: nose, nasopharynx, larynx. Lower tract: trachea → 23 divisions.", ar: "القناة العلوية: الأنف، البلعوم الأنفي، الحنجرة. السفلية: القصبة الهوائية ← 23 انقسامًا." },
          { en: "Conducting zone (up to terminal bronchioles): conduction, filtration, warming/humidification, protection.", ar: "المنطقة الموصلة (حتى القصيبات الطرفية): توصيل، تنقية، تدفئة وترطيب، حماية." },
          { en: "Respiratory zone (respiratory bronchioles, alveolar ducts, alveolar sacs): gas exchange.", ar: "المنطقة التنفسية (القصيبات التنفسية، القنوات السنخية، الأكياس السنخية): تبادل الغازات." },
          { en: "Alveoli = functional units. Type I pneumocytes (95%) → flat, gas transport. Type II (5%) → secrete surfactant (↓ surface tension, prevents collapse).", ar: "الحويصلات = الوحدات الوظيفية. خلايا النوع I (95%) ← مسطحة لنقل الغازات. النوع II (5%) ← تفرز السورفاكتانت (يقلل التوتر السطحي ويمنع الانخماص)." },
          { en: "Pleura: visceral (on lung), parietal (on chest wall), pleural cavity (lubricating fluid).", ar: "غشاء الجنب: الحشوي (على الرئة)، الجداري (على جدار الصدر)، التجويف الجنبي (سائل مزلق)." },
          { en: "Normal inspiration = ACTIVE (diaphragm + external intercostals). Normal quiet expiration = PASSIVE (relaxation + recoil).", ar: "الشهيق الطبيعي = نشط (الحجاب الحاجز + الوربية الخارجية). الزفير الهادئ = سلبي (ارتخاء + ارتداد مرن)." },
          { en: "Intra-alveolar P: −1 mmHg (inspiration), +1 mmHg (expiration). Intrapleural P: always negative (−4 to −6 mmHg) → prevents lung collapse & helps venous/lymphatic return.", ar: "الضغط داخل الحويصلات: −1 مم زئبق (شهيق)، +1 (زفير). ضغط الجنب: دائمًا سالب (−4 إلى −6) ← يمنع انخماص الرئة ويساعد العود الوريدي واللمفاوي." },
          { en: "Gas exchange: simple diffusion down partial pressure gradient across alveolar–capillary membrane.", ar: "تبادل الغازات: انتشار بسيط مع تدرج الضغط الجزئي عبر الغشاء السنخي الشعيري." }
        ]}
      ]
    }
  ],

  /* ================================================================ QUIZ */
  quiz: [
    { topic: "Functions", q: { en: "What is the primary function of the respiratory system?", ar: "ما هي الوظيفة الأساسية للجهاز التنفسي؟" },
      o: [ { en: "Produce speech and facilitate smell", ar: "إنتاج الكلام وتسهيل الشم" }, { en: "Provide O₂ for metabolism and remove CO₂", ar: "توفير الأكسجين للأيض وإزالة ثاني أكسيد الكربون" }, { en: "Maintain body water and heat balance", ar: "الحفاظ على توازن الماء والحرارة" }, { en: "Filter blood and excrete urea", ar: "تصفية الدم وإخراج اليوريا" } ], a: 1,
      x: { en: "Providing O₂ for metabolism and removing CO₂ are the primary functions; speech, smell, heat/water and acid-base balance are secondary.", ar: "توفير الأكسجين وإزالة ثاني أكسيد الكربون هما الوظيفتان الأساسيتان، والباقي وظائف ثانوية." } },
    { topic: "Functions", q: { en: "All of the following are secondary functions of the respiratory system EXCEPT:", ar: "جميع ما يلي من الوظائف الثانوية للجهاز التنفسي ما عدا:" },
      o: [ { en: "Maintains acid–base balance", ar: "الحفاظ على التوازن الحمضي القاعدي" }, { en: "Facilitates sense of smell", ar: "تسهيل حاسة الشم" }, { en: "Produces speech", ar: "إنتاج الكلام" }, { en: "Pumps blood to systemic tissues", ar: "ضخ الدم إلى أنسجة الجسم" } ], a: 3,
      x: { en: "Pumping blood is the function of the heart (CVS), not the respiratory system.", ar: "ضخ الدم هو وظيفة القلب وليس الجهاز التنفسي." } },
    { topic: "Tract", q: { en: "The upper respiratory tract includes:", ar: "تشمل القناة التنفسية العلوية:" },
      o: [ { en: "Trachea, bronchi, and lungs", ar: "القصبة الهوائية والقصبات والرئتين" }, { en: "Nose, nasopharynx, and larynx", ar: "الأنف والبلعوم الأنفي والحنجرة" }, { en: "Alveolar ducts and alveolar sacs", ar: "القنوات السنخية والأكياس السنخية" }, { en: "Bronchioles and terminal bronchioles", ar: "القصيبات والقصيبات الطرفية" } ], a: 1,
      x: { en: "Upper air passage = nose, nasopharynx (pharynx), and larynx.", ar: "الممر الهوائي العلوي = الأنف والبلعوم الأنفي والحنجرة." } },
    { topic: "Tract", q: { en: "The lower respiratory tract starts at the ______ and branches into ______ divisions.", ar: "تبدأ القناة التنفسية السفلية من ______ وتتفرع إلى ______ انقسامًا." },
      o: [ { en: "Larynx; 10", ar: "الحنجرة؛ 10" }, { en: "Trachea; 23", ar: "القصبة الهوائية؛ 23" }, { en: "Pharynx; 16", ar: "البلعوم؛ 16" }, { en: "Bronchi; 32", ar: "القصبات؛ 32" } ], a: 1,
      x: { en: "The lower air passage starts at the trachea (generation 0) and branches into 23 divisions (tracheobronchial tree).", ar: "يبدأ الممر السفلي من القصبة الهوائية (الجيل 0) ويتفرع إلى 23 انقسامًا." } },
    { topic: "Zones", q: { en: "Which of the following structures belongs to the CONDUCTING zone?", ar: "أي من التراكيب التالية ينتمي إلى المنطقة الموصلة؟" },
      o: [ { en: "Respiratory bronchioles", ar: "القصيبات التنفسية" }, { en: "Alveolar ducts", ar: "القنوات السنخية" }, { en: "Terminal bronchioles", ar: "القصيبات الطرفية (النهائية)" }, { en: "Alveolar sacs", ar: "الأكياس السنخية" } ], a: 2,
      x: { en: "Terminal bronchioles (generation 16) are the last part of the conducting zone. Respiratory bronchioles start the respiratory zone.", ar: "القصيبات الطرفية (الجيل 16) هي آخر جزء في المنطقة الموصلة، بينما القصيبات التنفسية تبدأ المنطقة التنفسية." } },
    { topic: "Zones", q: { en: "Which of the following is the first structure of the RESPIRATORY zone?", ar: "أيٌّ مما يلي يمثل أول تركيب في المنطقة التنفسية؟" },
      o: [ { en: "Terminal bronchioles", ar: "القصيبات الطرفية" }, { en: "Respiratory bronchioles", ar: "القصيبات التنفسية" }, { en: "Segmental bronchi", ar: "القصبات القطعية" }, { en: "Trachea", ar: "القصبة الهوائية" } ], a: 1,
      x: { en: "Respiratory bronchioles (generations 17–19) mark the beginning of the respiratory zone.", ar: "القصيبات التنفسية (الأجيال 17–19) تمثل بداية المنطقة التنفسية." } },
    { topic: "Zones", q: { en: "Functions of the conducting zone include all of the following EXCEPT:", ar: "تشمل وظائف المنطقة الموصلة كل ما يلي ما عدا:" },
      o: [ { en: "Air conduction", ar: "توصيل الهواء" }, { en: "Air filtration", ar: "تنقية الهواء" }, { en: "Air warming and humidification", ar: "تدفئة وترطيب الهواء" }, { en: "Gas exchange with blood", ar: "تبادل الغازات مع الدم" } ], a: 3,
      x: { en: "Gas exchange occurs only in the respiratory zone (generations 17–23).", ar: "تبادل الغازات يحدث فقط في المنطقة التنفسية (الأجيال 17–23)." } },
    { topic: "Alveoli", q: { en: "What are the functional units of the respiratory system?", ar: "ما هي الوحدات الوظيفية للجهاز التنفسي؟" },
      o: [ { en: "Bronchioles", ar: "القصيبات" }, { en: "Alveoli", ar: "الحويصلات الهوائية (الأسناخ)" }, { en: "Pleural sacs", ar: "الأكياس الجنبية" }, { en: "Nasal cavities", ar: "التجاويف الأنفية" } ], a: 1,
      x: { en: "Alveoli are the functional units of the respiratory system where gas exchange takes place.", ar: "الحويصلات الهوائية هي الوحدات الوظيفية للجهاز التنفسي حيث يتم تبادل الغازات." } },
    { topic: "Alveoli", q: { en: "Type I pneumocytes make up about ______ of alveolar lining cells and function in ______.", ar: "تشكّل الخلايا الرئوية من النوع الأول حوالي ______ من خلايا الحويصلات وتعمل في ______." },
      o: [ { en: "5%; secreting surfactant", ar: "5%؛ إفراز السورفاكتانت" }, { en: "95%; transport of gases", ar: "95%؛ نقل الغازات" }, { en: "50%; phagocytosis", ar: "50%؛ البلعمة" }, { en: "95%; secreting mucus", ar: "95%؛ إفراز المخاط" } ], a: 1,
      x: { en: "Type I pneumocytes (95%) are flat cells that allow transport of gases.", ar: "خلايا النوع الأول (95%) هي خلايا مسطحة تسمح بانتقال الغازات." } },
    { topic: "Alveoli", q: { en: "Pulmonary surfactant is secreted by:", ar: "تُفرَز مادة السورفاكتانت الرئوي بواسطة:" },
      o: [ { en: "Type I pneumocytes (95%)", ar: "الخلايا الرئوية من النوع الأول (95%)" }, { en: "Type II pneumocytes (5%)", ar: "الخلايا الرئوية من النوع الثاني (5%)" }, { en: "Alveolar macrophages", ar: "الخلايا البلعمية السنخية" }, { en: "Goblet cells", ar: "الخلايا الكأسية" } ], a: 1,
      x: { en: "Type II pneumocytes (5%) secrete pulmonary surfactant.", ar: "الخلايا الرئوية من النوع الثاني (5%) تفرز السورفاكتانت الرئوي." } },
    { topic: "Alveoli", q: { en: "What is the main role of pulmonary surfactant?", ar: "ما هو الدور الرئيسي لمادة السورفاكتانت الرئوي؟" },
      o: [ { en: "Increase surface tension to collapse alveoli", ar: "زيادة التوتر السطحي لطيّ الحويصلات" }, { en: "Decrease surface tension of alveoli to prevent their collapse", ar: "تقليل التوتر السطحي للحويصلات لمنع انخماصها (انهيارها)" }, { en: "Transport oxygen in the blood", ar: "نقل الأكسجين في الدم" }, { en: "Contract the bronchioles", ar: "تضييق القصيبات" } ], a: 1,
      x: { en: "Surfactant decreases alveolar surface tension so alveoli do not collapse during expiration.", ar: "يقلل السورفاكتانت التوتر السطحي للحويصلات فيمنع انهيارها." } },
    { topic: "Pleura", q: { en: "Which layer of the pleura adheres directly to the outer surface of the lungs?", ar: "أي طبقة من غشاء الجنب تلتصق مباشرة بالسطح الخارجي للرئتين؟" },
      o: [ { en: "Parietal pleura", ar: "غشاء الجنب الجداري" }, { en: "Visceral pleura", ar: "غشاء الجنب الحشوي" }, { en: "Pericardium", ar: "التامور" }, { en: "Peritoneum", ar: "الصفاق" } ], a: 1,
      x: { en: "Visceral pleura covers the outer surface of the lungs; parietal pleura lines the inner surface of the chest wall.", ar: "غشاء الجنب الحشوي يغطي السطح الخارجي للرئتين، والجداري يبطن جدار الصدر من الداخل." } },
    { topic: "Pleura", q: { en: "The thin film of fluid inside the pleural cavity acts as a:", ar: "الطبقة الرقيقة من السائل داخل التجويف الجنبي تعمل كـ:" },
      o: [ { en: "Site of gas exchange", ar: "موقع لتبادل الغازات" }, { en: "Lubricant that helps sliding of the two pleural layers", ar: "مادة مزلقة تساعد على انزلاق طبقتي الجنب" }, { en: "Source of oxygen", ar: "مصدر للأكسجين" }, { en: "Digestive enzyme", ar: "إنزيم هاضم" } ], a: 1,
      x: { en: "Pleural fluid lubricates the visceral and parietal pleura so they slide smoothly during breathing.", ar: "السائل الجنبي يعمل كمزلق يسهل انزلاق طبقتي الجنب أثناء التنفس." } },
    { topic: "Mechanism", q: { en: "Normal quiet inspiration is an ______ process caused by contraction of the ______.", ar: "الشهيق الطبيعي الهادئ هو عملية ______ تحدث بسبب انقباض ______." },
      o: [ { en: "Active; diaphragm and external intercostal muscles", ar: "نشطة؛ الحجاب الحاجز والعضلات الوربية الخارجية" }, { en: "Passive; abdominal muscles", ar: "سلبية؛ عضلات البطن" }, { en: "Passive; internal intercostal muscles", ar: "سلبية؛ العضلات الوربية الداخلية" }, { en: "Active; smooth muscle of alveoli", ar: "نشطة؛ العضلات الملساء للحويصلات" } ], a: 0,
      x: { en: "Normal inspiration is an active process driven by contraction of the diaphragm and external intercostals.", ar: "الشهيق الطبيعي عملية نشطة تتم بانقباض الحجاب الحاجز والعضلات الوربية الخارجية." } },
    { topic: "Mechanism", q: { en: "Normal quiet expiration is a:", ar: "الزفير الهادئ الطبيعي هو:" },
      o: [ { en: "Active process requiring abdominal contraction", ar: "عملية نشطة تتطلب انقباض البطن" }, { en: "Passive process due to relaxation of inspiratory muscles and elastic recoil of lungs & chest wall", ar: "عملية سلبية نتيجة ارتخاء عضلات الشهيق والارتداد المرن للرئتين وجدار الصدر" }, { en: "Active process driven by the diaphragm", ar: "عملية نشطة يقودها الحجاب الحاجز" }, { en: "Process where air flows into the lungs", ar: "عملية يتدفق فيها الهواء إلى داخل الرئتين" } ], a: 1,
      x: { en: "Quiet expiration is passive: inspiratory muscles relax and the lungs/chest wall recoil.", ar: "الزفير الهادئ عملية سلبية: ترتخي عضلات الشهيق وترتد الرئتان وجدار الصدر." } },
    { topic: "Mechanism", q: { en: "When the diaphragm contracts during inspiration, thoracic volume ______.", ar: "عندما ينقبض الحجاب الحاجز أثناء الشهيق، فإن حجم التجويف الصدري ______." },
      o: [ { en: "Decreases", ar: "يقل" }, { en: "Increases", ar: "يزداد" }, { en: "Remains unchanged", ar: "يبقى دون تغيير" }, { en: "Drops to zero", ar: "يهبط إلى الصفر" } ], a: 1,
      x: { en: "Contraction of the diaphragm flattens it downward, increasing thoracic volume.", ar: "انقباض الحجاب الحاجز يدفعه للأسفل فيزداد حجم التجويف الصدري." } },
    { topic: "Pressures", q: { en: "During normal inspiration, intra-alveolar pressure becomes approximately:", ar: "أثناء الشهيق الطبيعي، يصبح الضغط داخل الحويصلات حوالي:" },
      o: [ { en: "+1 mmHg (761 mmHg)", ar: "+1 مم زئبق (761 مم زئبق)" }, { en: "−1 mmHg (759 mmHg)", ar: "−1 مم زئبق (759 مم زئبق)" }, { en: "0 mmHg (760 mmHg)", ar: "0 مم زئبق (760 مم زئبق)" }, { en: "+10 mmHg", ar: "+10 مم زئبق" } ], a: 1,
      x: { en: "During normal inspiration, intra-alveolar pressure drops to −1 mmHg (759 mmHg), drawing air into the lungs.", ar: "أثناء الشهيق الطبيعي ينخفض الضغط داخل الحويصلات إلى −1 مم زئبق (759 مم زئبق) فيدخل الهواء." } },
    { topic: "Pressures", q: { en: "During normal expiration, intra-alveolar pressure is:", ar: "أثناء الزفير الطبيعي، يكون الضغط داخل الحويصلات:" },
      o: [ { en: "−1 mmHg", ar: "−1 مم زئبق" }, { en: "+1 mmHg", ar: "+1 مم زئبق" }, { en: "−4 mmHg", ar: "−4 مم زئبق" }, { en: "−6 mmHg", ar: "−6 مم زئبق" } ], a: 1,
      x: { en: "Lung recoil compresses alveolar air to +1 mmHg (761 mmHg), pushing air out.", ar: "ارتداد الرئة يضغط الهواء السنخي إلى +1 مم زئبق (761 مم زئبق) فيخرج الهواء." } },
    { topic: "Pressures", q: { en: "Under normal quiet breathing, intrapleural pressure (IPP) is:", ar: "في التنفس الهادئ الطبيعي، يكون الضغط داخل الجنب (IPP):" },
      o: [ { en: "Always positive", ar: "موجبًا دائمًا" }, { en: "Always negative (subatmospheric)", ar: "سالبًا دائمًا (أقل من الضغط الجوي)" }, { en: "Equal to atmospheric pressure (0 mmHg)", ar: "مساويًا للضغط الجوي (0 مم زئبق)" }, { en: "Positive in inspiration and negative in expiration", ar: "موجبًا في الشهيق وسالبًا في الزفير" } ], a: 1,
      x: { en: "IPP is always negative (subatmospheric, around −4 to −6 mmHg) during normal quiet breathing.", ar: "الضغط داخل الجنب سالب دائمًا (حوالي −4 إلى −6 مم زئبق) أثناء التنفس الهادئ." } },
    { topic: "Pressures", q: { en: "Why is negative intrapleural pressure (IPP) important?", ar: "لماذا يُعدّ الضغط السالب داخل الجنب (IPP) مهمًا؟" },
      o: [ { en: "It collapses the lungs during expiration", ar: "يسبب انخماص الرئتين أثناء الزفير" }, { en: "It prevents lung collapse and helps venous & lymphatic return", ar: "يمنع انخماص الرئة ويساعد في العود الوريدي واللمفاوي" }, { en: "It stops blood flow to the heart", ar: "يوقف تدفق الدم إلى القلب" }, { en: "It increases alveolar surface tension", ar: "يزيد التوتر السطحي للحويصلات" } ], a: 1,
      x: { en: "Importance of IPP: 1) prevents collapse of the lung, 2) helps venous and lymphatic return.", ar: "أهمية IPP: 1) يمنع انخماص الرئة، 2) يساعد في العود الوريدي واللمفاوي." } },
    { topic: "Gas Exchange", q: { en: "Gas exchange in the lungs and tissues occurs by:", ar: "يحدث تبادل الغازات في الرئتين والأنسجة عن طريق:" },
      o: [ { en: "Active transport using ATP", ar: "النقل النشط باستخدام ATP" }, { en: "Simple diffusion down a partial pressure gradient", ar: "الانتشار البسيط مع تدرج الضغط الجزئي" }, { en: "Osmosis of water", ar: "الأسموزية" }, { en: "Endocytosis", ar: "الابتلاع الخلوي" } ], a: 1,
      x: { en: "Gases move passively by simple diffusion from high partial pressure to low partial pressure.", ar: "تنتقل الغازات بالانتشار البسيط من منطقة الضغط الجزئي المرتفع إلى المنخفض." } },
    { topic: "Gas Exchange", q: { en: "Blood entering the pulmonary capillaries has:", ar: "الدم الداخل إلى الشعيرات الدموية الرئوية يتميز بـ:" },
      o: [ { en: "High PO₂ & low PCO₂", ar: "PO₂ مرتفع و PCO₂ منخفض" }, { en: "Low PO₂ & high PCO₂", ar: "PO₂ منخفض و PCO₂ مرتفع" }, { en: "High PO₂ & high PCO₂", ar: "PO₂ مرتفع و PCO₂ مرتفع" }, { en: "Zero CO₂", ar: "انعدام CO₂" } ], a: 1,
      x: { en: "Deoxygenated venous blood arriving from tissues has low PO₂ and high PCO₂.", ar: "الدم الوريدي القادم من الأنسجة يكون منخفض الأكسجين (Low PO₂) ومرتفع ثاني أكسيد الكربون (High PCO₂)." } },
    { topic: "Gas Exchange", q: { en: "Across the alveolar–capillary membrane in the lungs:", ar: "عبر الغشاء السنخي الشعيري في الرئتين:" },
      o: [ { en: "O₂ diffuses from blood to alveoli", ar: "ينتشر O₂ من الدم إلى الحويصلات" }, { en: "O₂ diffuses from alveoli to blood, and CO₂ from blood to alveoli", ar: "ينتشر O₂ من الحويصلات إلى الدم، و CO₂ من الدم إلى الحويصلات" }, { en: "CO₂ diffuses from alveoli to blood", ar: "ينتشر CO₂ من الحويصلات إلى الدم" }, { en: "No gas movement occurs", ar: "لا يحدث انتقال للغازات" } ], a: 1,
      x: { en: "Alveolar air has high PO₂ & low PCO₂ → O₂ diffuses into blood and CO₂ diffuses into alveoli.", ar: "الهواء السنخي ذو PO₂ مرتفع و PCO₂ منخفض ← ينتشر O₂ إلى الدم وينتشر CO₂ إلى الحويصلات." } }
  ],

  /* ================================================================ FLASHCARDS */
  flashcards: [
    { f: { en: "Respiratory system definition", ar: "تعريف الجهاز التنفسي" }, b: { en: "Network of organs and tissues (airways, lungs, blood vessels) that move O₂ into the body and clean out waste gases like CO₂.", ar: "شبكة من الأعضاء والأنسجة (الممرات الهوائية، الرئتين، الأوعية الدموية) تنقل O₂ للجسم وتتخلص من الغازات العادمة مثل CO₂." } },
    { f: { en: "Primary functions of respiratory system", ar: "الوظائف الأساسية للجهاز التنفسي" }, b: { en: "1) Provides O₂ for tissue metabolism. 2) Removes CO₂ (waste product of metabolism).", ar: "1) يوفر الأكسجين لأيض الأنسجة. 2) يزيل ثاني أكسيد الكربون الناتج عن الأيض." } },
    { f: { en: "5 Secondary functions of respiratory system", ar: "الوظائف الثانوية الخمس للجهاز التنفسي" }, b: { en: "1) Protects airways, 2) Maintains water & heat balance, 3) Sense of smell, 4) Produces speech, 5) Acid–base balance.", ar: "1) حماية الممرات الهوائية، 2) توازن الماء والحرارة، 3) حاسة الشم، 4) إنتاج الكلام، 5) التوازن الحمضي القاعدي." } },
    { f: { en: "Upper respiratory tract", ar: "القناة التنفسية العلوية" }, b: { en: "Includes the nose (nasal cavity), pharynx (nasopharynx), and larynx.", ar: "تشمل الأنف (التجويف الأنفي)، البلعوم (البلعوم الأنفي)، والحنجرة." } },
    { f: { en: "Lower respiratory tract", ar: "القناة التنفسية السفلية" }, b: { en: "Starts at the trachea and branches into 23 divisions (tracheobronchial tree) down to the alveoli.", ar: "تبدأ من القصبة الهوائية وتتفرع إلى 23 انقسامًا (الشجرة الرغامية القصبية) حتى الحويصلات." } },
    { f: { en: "Conducting zone structures (Divisions 0–16)", ar: "تراكيب المنطقة الموصلة (0–16)" }, b: { en: "Nose, pharynx, larynx, trachea, 2 bronchi, segmental bronchi, bronchioles, terminal bronchioles.", ar: "الأنف، البلعوم، الحنجرة، القصبة الهوائية، القصبتان، القصبات القطعية، القصيبات، القصيبات الطرفية." } },
    { f: { en: "4 Functions of the conducting zone", ar: "وظائف المنطقة الموصلة الأربع" }, b: { en: "1) Air conduction, 2) Air filtration, 3) Air warming & humidification, 4) Protection.", ar: "1) توصيل الهواء، 2) تنقية الهواء، 3) تدفئة وترطيب الهواء، 4) الحماية." } },
    { f: { en: "Respiratory zone structures (Divisions 17–23)", ar: "تراكيب المنطقة التنفسية (17–23)" }, b: { en: "Respiratory bronchioles (17–19), alveolar ducts (20–22), alveolar sacs (23). Function: Gas exchange.", ar: "القصيبات التنفسية (17–19)، القنوات السنخية (20–22)، الأكياس السنخية (23). الوظيفة: تبادل الغازات." } },
    { f: { en: "Alveoli", ar: "الحويصلات الهوائية (الأسناخ)" }, b: { en: "Functional units of the respiratory system; site of gas exchange with pulmonary capillaries.", ar: "الوحدات الوظيفية للجهاز التنفسي؛ موقع تبادل الغازات مع الشعيرات الدموية الرئوية." } },
    { f: { en: "Type I pneumocytes (95%)", ar: "الخلايا الرئوية من النوع الأول (95%)" }, b: { en: "Flat cells lining the alveoli; secrete minimal fluid and allow transport (diffusion) of gases.", ar: "خلايا مسطحة تبطن الحويصلات؛ تفرز كمية ضئيلة من السوائل وتسمح بانتقال الغازات." } },
    { f: { en: "Type II pneumocytes (5%)", ar: "الخلايا الرئوية من النوع الثاني (5%)" }, b: { en: "Secrete pulmonary surfactant, which decreases surface tension and prevents alveolar collapse.", ar: "تفرز السورفاكتانت الرئوي الذي يقلل التوتر السطحي ويمنع انخماص الحويصلات." } },
    { f: { en: "Visceral vs Parietal pleura", ar: "غشاء الجنب الحشوي مقابل الجداري" }, b: { en: "Visceral adheres to the outer surface of the lung; Parietal lines the inner surface of the chest wall.", ar: "الحشوي يلتصق بالسطح الخارجي للرئة؛ الجداري يبطن السطح الداخلي لجدار الصدر." } },
    { f: { en: "Pleural cavity (pleural sac)", ar: "التجويف الجنبي (الكيس الجنبي)" }, b: { en: "Potential space between visceral & parietal pleura containing a thin film of lubricating fluid for smooth sliding.", ar: "فراغ كامن بين طبقتي الجنب يحتوي على طبقة رقيقة من سائل مزلق لتسهيل الانزلاق." } },
    { f: { en: "Mechanism of normal inspiration", ar: "آلية الشهيق الطبيعي" }, b: { en: "ACTIVE process: contraction of diaphragm & external intercostal muscles → thoracic volume ↑ → air flows into lungs.", ar: "عملية نشطة: انقباض الحجاب الحاجز والعضلات الوربية الخارجية ← زيادة حجم الصدر ← دخول الهواء للرئتين." } },
    { f: { en: "Mechanism of normal quiet expiration", ar: "آلية الزفير الهادئ الطبيعي" }, b: { en: "PASSIVE process: relaxation of inspiratory muscles + elastic recoil of lungs & chest wall → air flows out.", ar: "عملية سلبية: ارتخاء عضلات الشهيق + الارتداد المرن للرئتين وجدار الصدر ← خروج الهواء." } },
    { f: { en: "Intra-alveolar pressure (P_alv)", ar: "الضغط داخل الحويصلات" }, b: { en: "Pressure inside alveoli. Rest = 0 mmHg (760). Inspiration = −1 mmHg (759). Expiration = +1 mmHg (761).", ar: "الضغط داخل الحويصلات. الراحة = 0 (760). الشهيق = −1 مم زئبق (759). الزفير = +1 مم زئبق (761)." } },
    { f: { en: "Intrapleural pressure (IPP)", ar: "الضغط داخل الجنب (IPP)" }, b: { en: "Pressure inside pleural cavity. Always negative (subatmospheric, −4 to −6 mmHg) in quiet breathing.", ar: "الضغط داخل التجويف الجنبي. دائمًا سالب (أقل من الجوي، −4 إلى −6 مم زئبق) في التنفس الهادئ." } },
    { f: { en: "Importance of Intrapleural Pressure (IPP)", ar: "أهمية الضغط داخل الجنب (IPP)" }, b: { en: "1) Prevents collapse of the lung. 2) Helps venous and lymphatic return to the heart.", ar: "1) يمنع انخماص الرئة. 2) يساعد في العود الوريدي واللمفاوي إلى القلب." } },
    { f: { en: "Pulmonary gas exchange mechanism", ar: "آلية تبادل الغازات الرئوي" }, b: { en: "Simple diffusion down partial pressure gradient across the alveolar–capillary membrane: O₂ alveoli → blood; CO₂ blood → alveoli.", ar: "انتشار بسيط مع تدرج الضغط الجزئي عبر الغشاء السنخي الشعيري: O₂ من الحويصلات للدم، و CO₂ من الدم للحويصلات." } }
  ]
};
