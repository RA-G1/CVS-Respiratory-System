/* Lecture 19 — Introduction to Cardiovascular System
   All content is bilingual: en = English, ar = Arabic translation. */
window.LECTURES = window.LECTURES || {};

window.LECTURES.cardio = {
  id: "cardio",
  num: "Lecture 19",
  color: "#e11d48",
  soft: "#ffe4e6",
  title: { en: "Introduction to Cardiovascular System", ar: "مقدمة في الجهاز القلبي الوعائي" },
  short: { en: "Cardiovascular System", ar: "الجهاز القلبي الوعائي" },
  topics: ["Functions of CVS", "Heart chambers", "Cardiac valves", "Circulation", "Blood vessels", "Cardiac muscle", "Autorhythmicity", "Conductivity", "Contractility", "E-C coupling"],

  sections: [
    /* ---------------------------------------------------------- 1 */
    {
      id: "function",
      title: { en: "What is the function of the CVS?", ar: "ما هي وظيفة الجهاز القلبي الوعائي؟" },
      blocks: [
        { t: "p",
          en: "The <b>heart</b> and <b>blood vessels</b> together form a <span class='hl'>closed system</span> through which blood circulates. Because blood moves around in a closed loop, this system is also called the <b>Circulatory system</b>.",
          ar: "يشكّل <b>القلب</b> و<b>الأوعية الدموية</b> معًا <span class='hl'>نظامًا مغلقًا</span> يدور الدم من خلاله. ولأن الدم يتحرك في حلقة مغلقة، يُسمّى هذا النظام أيضًا <b>الجهاز الدوري</b>." },
        { t: "p", en: "<b>The circulatory system does two main jobs:</b>", ar: "<b>يقوم الجهاز الدوري بوظيفتين رئيسيتين:</b>" },
        { t: "list", items: [
          { en: "<span class='u'>Supplies</span> <b>O₂ &amp; nutrients</b> to the tissues.", ar: "<span class='u'>يزوّد</span> الأنسجة <b>بالأكسجين والمواد الغذائية</b>." },
          { en: "<span class='u'>Returns</span> <b>CO₂ to the lungs</b> (to be exhaled) and <b>waste products to the kidneys</b> (to be excreted).", ar: "<span class='u'>يعيد</span> <b>ثاني أكسيد الكربون إلى الرئتين</b> (لطرده مع الزفير) و<b>الفضلات إلى الكليتين</b> (لإخراجها)." }
        ]},
        { t: "p", en: "The circulatory system has <b>two components</b>:", ar: "يتكون الجهاز الدوري من <b>مكوّنين</b>:" },
        { t: "cards", items: [
          { title: { en: "❤️ Heart", ar: "القلب" },
            en: "Acts as the <b>pump</b> that gives <b>pressure</b> to blood for its flow to the tissues.",
            ar: "يعمل <b>كمضخة</b> تعطي الدم <b>الضغط</b> اللازم لتدفقه إلى الأنسجة." },
          { title: { en: "🩸 Blood vessels", ar: "الأوعية الدموية" },
            en: "Act as the <b>passageways</b> through which blood is <u>distributed</u> from the heart to all parts of the body &amp; <u>returned</u> again to the heart.",
            ar: "تعمل <b>كممرات</b> يتم من خلالها <u>توزيع</u> الدم من القلب إلى جميع أجزاء الجسم ثم <u>إعادته</u> مرة أخرى إلى القلب." }
        ]},
        { t: "callout", kind: "tip", title: { en: "Remember", ar: "تذكّر" },
          en: "Heart = <b>Pump</b> &nbsp;|&nbsp; Blood vessels = <b>Passageways (pipes)</b>.",
          ar: "القلب = <b>مضخة</b> &nbsp;|&nbsp; الأوعية الدموية = <b>ممرات (أنابيب)</b>." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "heart",
      title: { en: "The Heart — Chambers & Great Vessels", ar: "القلب — الحجرات والأوعية الكبرى" },
      blocks: [
        { t: "p",
          en: "The heart has <span class='hl'>four chambers</span>: <b>2 atria</b> (upper, receiving chambers) and <b>2 ventricles</b> (lower, pumping chambers). The right side handles <b style='color:#2563eb'>deoxygenated</b> blood, the left side handles <b style='color:#dc2626'>oxygenated</b> blood.",
          ar: "يتكوّن القلب من <span class='hl'>أربع حجرات</span>: <b>أذينان</b> (علويان، حجرتا استقبال) و<b>بطينان</b> (سفليان، حجرتا ضخ). الجانب الأيمن يتعامل مع الدم <b style='color:#2563eb'>غير المؤكسج</b>، والجانب الأيسر مع الدم <b style='color:#dc2626'>المؤكسج</b>." },
        { t: "cards", items: [
          { title: { en: "Veins", ar: "الأوردة" },
            en: "Bring blood <b>TO the heart</b>.<br>• <b>Venae cavae</b> (superior &amp; inferior) bring blood from the <u>body</u> → right atrium.<br>• <b>Pulmonary veins</b> bring blood from the <u>lungs</u> → left atrium.",
            ar: "تحمل الدم <b>إلى القلب</b>.<br>• <b>الوريدان الأجوفان</b> (العلوي والسفلي) يحملان الدم من <u>الجسم</u> ← الأذين الأيمن.<br>• <b>الأوردة الرئوية</b> تحمل الدم من <u>الرئتين</u> ← الأذين الأيسر." },
          { title: { en: "Arteries", ar: "الشرايين" },
            en: "Carry blood <b>AWAY from the heart</b>.<br>• <b>Pulmonary artery</b>: right ventricle → lungs.<br>• <b>Aorta</b>: left ventricle → whole body.",
            ar: "تحمل الدم <b>بعيدًا عن القلب</b>.<br>• <b>الشريان الرئوي</b>: البطين الأيمن ← الرئتين.<br>• <b>الشريان الأبهر (الأورطي)</b>: البطين الأيسر ← الجسم كله." }
        ]},
        { t: "diagram", id: "heartFlow", title: { en: "Interactive Heart — Follow the blood", ar: "قلب تفاعلي — تتبّع مسار الدم" } },
        { t: "p", en: "<b>Other structures</b> labelled on the anatomical heart diagram:", ar: "<b>تراكيب أخرى</b> موضّحة في رسم القلب التشريحي:" },
        { t: "table", head: [ { en: "Structure", ar: "التركيب" }, { en: "What it is", ar: "ما هو" } ], rows: [
          [ { en: "Interventricular septum", ar: "الحاجز بين البطينين" }, { en: "Muscular wall separating the right and left ventricles.", ar: "جدار عضلي يفصل بين البطين الأيمن والأيسر." } ],
          [ { en: "Myocardium", ar: "عضلة القلب" }, { en: "The thick muscular layer of the heart wall (cardiac muscle).", ar: "الطبقة العضلية السميكة في جدار القلب (العضلة القلبية)." } ],
          [ { en: "Chordae tendineae", ar: "الحبال الوترية" }, { en: "Tendon-like cords attaching the A-V valve cusps to the ventricle wall; stop the valves from turning inside-out.", ar: "حبال تشبه الأوتار تربط شُرَف الصمامات الأذينية البطينية بجدار البطين؛ تمنع انقلاب الصمامات." } ],
          [ { en: "Visceral pericardium", ar: "التامور الحشوي" }, { en: "The thin membrane covering the outer surface of the heart.", ar: "الغشاء الرقيق الذي يغطي السطح الخارجي للقلب." } ],
          [ { en: "Fossa ovalis", ar: "الحفرة البيضوية" }, { en: "A small depression in the wall between the atria (remnant of the fetal foramen ovale).", ar: "منخفض صغير في الجدار بين الأذينين (بقايا الثقبة البيضوية الجنينية)." } ]
        ]}
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "valves",
      title: { en: "Cardiac Valves", ar: "صمامات القلب" },
      blocks: [
        { t: "p",
          en: "There are <span class='hl'>4 sets of valves</span>. Valves maintain <b>unidirectional</b> (one-way) blood flow, i.e. they <b>prevent backflow</b>.",
          ar: "يوجد <span class='hl'>4 مجموعات من الصمامات</span>. تحافظ الصمامات على تدفق الدم في <b>اتجاه واحد</b>، أي أنها <b>تمنع الارتجاع</b> (رجوع الدم للخلف)." },
        { t: "table", head: [ { en: "Valve", ar: "الصمام" }, { en: "Location (between)", ar: "الموقع (بين)" }, { en: "Group", ar: "المجموعة" } ], rows: [
          [ { en: "<b>1. Tricuspid valve</b>", ar: "<b>1. الصمام ثلاثي الشُرَف</b>" }, { en: "Right atrium &amp; right ventricle", ar: "الأذين الأيمن والبطين الأيمن" }, { en: "A-V valve", ar: "صمام أذيني بطيني" } ],
          [ { en: "<b>2. Mitral (bicuspid) valve</b>", ar: "<b>2. الصمام التاجي (ثنائي الشُرَف)</b>" }, { en: "Left atrium &amp; left ventricle", ar: "الأذين الأيسر والبطين الأيسر" }, { en: "A-V valve", ar: "صمام أذيني بطيني" } ],
          [ { en: "<b>3. Pulmonary valve</b>", ar: "<b>3. الصمام الرئوي</b>" }, { en: "Right ventricle &amp; pulmonary artery", ar: "البطين الأيمن والشريان الرئوي" }, { en: "Semilunar", ar: "صمام هلالي" } ],
          [ { en: "<b>4. Aortic valve</b>", ar: "<b>4. الصمام الأبهري</b>" }, { en: "Left ventricle &amp; aorta", ar: "البطين الأيسر والشريان الأبهر" }, { en: "Semilunar", ar: "صمام هلالي" } ]
        ]},
        { t: "cards", items: [
          { title: { en: "Atrioventricular (A-V) valves", ar: "الصمامات الأذينية البطينية" },
            en: "= <b>Tricuspid + Mitral</b>.<br>They <b>prevent backflow of blood from the ventricles to the atria during ventricular systole</b> (contraction).",
            ar: "= <b>ثلاثي الشرف + التاجي</b>.<br>تمنع <b>ارتجاع الدم من البطينين إلى الأذينين أثناء الانقباض البطيني</b>." },
          { title: { en: "Semilunar valves", ar: "الصمامات الهلالية" },
            en: "= <b>Pulmonary + Aortic</b>.<br>• Present at the <b>exit of the ventricles</b>.<br>• Allow blood to flow <b>only from ventricle → artery</b>.<br>• <b>Prevent backflow from the aorta &amp; pulmonary artery into the ventricles during diastole</b> (relaxation).",
            ar: "= <b>الرئوي + الأبهري</b>.<br>• توجد عند <b>مخارج البطينين</b>.<br>• تسمح بمرور الدم <b>فقط من البطين ← الشريان</b>.<br>• <b>تمنع ارتجاع الدم من الأبهر والشريان الرئوي إلى البطينين أثناء الانبساط</b>." }
        ]},
        { t: "diagram", id: "valves", title: { en: "Valve Simulator — Systole vs Diastole", ar: "محاكي الصمامات — الانقباض مقابل الانبساط" } },
        { t: "callout", kind: "key", title: { en: "Exam key", ar: "مفتاح الامتحان" },
          en: "A-V valves close during <b>ventricular systole</b>. Semilunar valves close during <b>diastole</b>. Mitral = <b>bicuspid</b> (2 cusps), Tricuspid = 3 cusps.",
          ar: "الصمامات الأذينية البطينية تُغلق أثناء <b>الانقباض البطيني</b>. الصمامات الهلالية تُغلق أثناء <b>الانبساط</b>. التاجي = <b>ثنائي الشرف</b>، وثلاثي الشرف = 3 شُرَف." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "circulation",
      title: { en: "Pulmonary & Systemic Circulation", ar: "الدورة الرئوية والدورة الجهازية" },
      blocks: [
        { t: "p",
          en: "Blood passes through the heart <b>twice</b> on each complete trip around the body: once through the <b>pulmonary circulation</b> (heart ⇄ lungs) and once through the <b>systemic circulation</b> (heart ⇄ body).",
          ar: "يمر الدم عبر القلب <b>مرتين</b> في كل دورة كاملة حول الجسم: مرة عبر <b>الدورة الرئوية</b> (القلب ⇄ الرئتين) ومرة عبر <b>الدورة الجهازية</b> (القلب ⇄ الجسم)." },
        { t: "table", head: [ { en: "", ar: "" }, { en: "Pulmonary circulation", ar: "الدورة الرئوية (الصغرى)" }, { en: "Systemic circulation", ar: "الدورة الجهازية (الكبرى)" } ], rows: [
          [ { en: "<b>Starts in</b>", ar: "<b>تبدأ من</b>" }, { en: "Right ventricle", ar: "البطين الأيمن" }, { en: "Left ventricle", ar: "البطين الأيسر" } ],
          [ { en: "<b>Leaving artery</b>", ar: "<b>الشريان الخارج</b>" }, { en: "Pulmonary artery (deoxygenated blood!)", ar: "الشريان الرئوي (دم غير مؤكسج!)" }, { en: "Aorta (oxygenated blood)", ar: "الأبهر (دم مؤكسج)" } ],
          [ { en: "<b>Capillaries of</b>", ar: "<b>شعيرات</b>" }, { en: "Lungs — blood picks up O₂, gives off CO₂", ar: "الرئتين — يأخذ الدم O₂ ويطرد CO₂" }, { en: "Body tissues (head, limbs, organs) — blood gives O₂, picks up CO₂", ar: "أنسجة الجسم — يعطي الدم O₂ ويأخذ CO₂" } ],
          [ { en: "<b>Returning vein</b>", ar: "<b>الوريد العائد</b>" }, { en: "Pulmonary veins (oxygenated blood!)", ar: "الأوردة الرئوية (دم مؤكسج!)" }, { en: "Superior &amp; inferior venae cavae", ar: "الوريدان الأجوفان العلوي والسفلي" } ],
          [ { en: "<b>Ends in</b>", ar: "<b>تنتهي في</b>" }, { en: "Left atrium", ar: "الأذين الأيسر" }, { en: "Right atrium", ar: "الأذين الأيمن" } ]
        ]},
        { t: "callout", kind: "warn", title: { en: "Classic trick question", ar: "سؤال خادع شائع" },
          en: "Arteries are defined by direction (<b>away</b> from heart), not by oxygen content. So the <b>pulmonary artery carries deoxygenated blood</b> and the <b>pulmonary veins carry oxygenated blood</b>.",
          ar: "تُعرَّف الشرايين حسب الاتجاه (<b>بعيدًا</b> عن القلب) وليس حسب محتوى الأكسجين. لذلك <b>الشريان الرئوي يحمل دمًا غير مؤكسج</b> و<b>الأوردة الرئوية تحمل دمًا مؤكسجًا</b>." },
        { t: "callout", kind: "note", title: { en: "Note on the slide's labels", ar: "ملاحظة على مسميات الشريحة" },
          en: "The circulation diagram in the lecture uses <i>anterior</i> / <i>posterior</i> vena cava — these are the same as the <b>superior</b> / <b>inferior</b> vena cava in humans.",
          ar: "رسم الدورة الدموية في المحاضرة يستخدم مصطلح الوريد الأجوف <i>الأمامي</i> / <i>الخلفي</i> — وهما نفس الوريد الأجوف <b>العلوي</b> / <b>السفلي</b> في الإنسان." }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "vessels",
      title: { en: "Blood Vessels", ar: "الأوعية الدموية" },
      blocks: [
        { t: "p", en: "The cardiovascular system has <span class='hl'>3 types</span> of blood vessels:", ar: "يحتوي الجهاز القلبي الوعائي على <span class='hl'>3 أنواع</span> من الأوعية الدموية:" },
        { t: "cards", items: [
          { title: { en: "Arteries (& arterioles)", ar: "الشرايين (والشُرَيّنات)" }, en: "Carry blood <b>away</b> from the heart.", ar: "تحمل الدم <b>بعيدًا</b> عن القلب." },
          { title: { en: "Capillaries", ar: "الشعيرات الدموية" }, en: "Where <b>nutrient and gas exchange</b> occur.", ar: "حيث يحدث <b>تبادل المواد الغذائية والغازات</b>." },
          { title: { en: "Veins (& venules)", ar: "الأوردة (والوُرَيدات)" }, en: "Carry blood <b>towards</b> the heart.", ar: "تحمل الدم <b>نحو</b> القلب." }
        ]},
        { t: "diagram", id: "vessels", title: { en: "Vessel Pathway — click each vessel", ar: "مسار الأوعية — اضغط على كل وعاء" } }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "muscle",
      title: { en: "Cardiac Muscle", ar: "العضلة القلبية" },
      blocks: [
        { t: "p",
          en: "<b>Cardiac muscle = Striated muscle</b> (like skeletal muscle), but it differs from skeletal muscle in being:",
          ar: "<b>العضلة القلبية = عضلة مخططة</b> (مثل العضلة الهيكلية)، لكنها تختلف عن العضلة الهيكلية في كونها:" },
        { t: "list", items: [
          { en: "<b>Involuntary</b> — not under conscious control.", ar: "<b>لا إرادية</b> — لا تخضع للتحكم الواعي." },
          { en: "<b>Acts as a single unit</b> (a functional <span class='hl'>syncytium</span>) — <i>due to the presence of <u>intercalated discs</u></i> which connect cells so the excitation spreads from cell to cell.", ar: "<b>تعمل كوحدة واحدة</b> (<span class='hl'>مخلوي وظيفي</span>) — <i>بسبب وجود <u>الأقراص البينية (المقحمة)</u></i> التي تربط الخلايا ببعضها فتنتشر الإثارة من خلية لأخرى." }
        ]},
        { t: "p", en: "Cardiac muscle fibers are of two kinds:", ar: "ألياف العضلة القلبية نوعان:" },
        { t: "diagram", id: "fibers", title: { en: "Cardiac Muscle Composition", ar: "تركيب العضلة القلبية" } },
        { t: "callout", kind: "key", title: { en: "Summary", ar: "الخلاصة" },
          en: "<b>99% contractile</b> fibers → pumping (atria &amp; ventricles).<br><b>1% non-contractile</b> fibers → initiation &amp; conduction of the excitation wave: <b>autorhythmic (pacemaker) cells</b> initiate impulses, <b>conducting cells</b> conduct impulses.",
          ar: "<b>99% ألياف انقباضية</b> ← الضخ (الأذينان والبطينان).<br><b>1% ألياف غير انقباضية</b> ← بدء وتوصيل موجة الإثارة: <b>خلايا الإيقاع الذاتي (ناظمة الخطى)</b> تبدأ النبضات، و<b>الخلايا الموصلة</b> توصل النبضات." }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "properties",
      title: { en: "Properties of Cardiac Muscle", ar: "خصائص العضلة القلبية" },
      blocks: [
        { t: "p", en: "Cardiac muscle has <span class='hl'>4 properties</span>:", ar: "للعضلة القلبية <span class='hl'>4 خصائص</span>:" },
        { t: "list", num: true, items: [
          { en: "<b>Autorhythmicity</b> (automaticity) — initiates its own impulses.", ar: "<b>الإيقاع الذاتي</b> (التلقائية) — تبدأ نبضاتها بنفسها." },
          { en: "<b>Excitability</b> — responds to a stimulus.", ar: "<b>الاستثارة (القابلية للتهيج)</b> — تستجيب للمنبّه." },
          { en: "<b>Conductivity</b> — conducts impulses through the heart.", ar: "<b>التوصيل</b> — توصل النبضات عبر القلب." },
          { en: "<b>Contractility</b> — generates force (contracts).", ar: "<b>الانقباضية</b> — تولّد القوة (تنقبض)." }
        ]},
        { t: "callout", kind: "tip", title: { en: "Mnemonic", ar: "طريقة للحفظ" },
          en: "<b>\"A Excellent Cardiac Contraction\"</b> → <b>A</b>utorhythmicity, <b>E</b>xcitability, <b>C</b>onductivity, <b>C</b>ontractility.",
          ar: "تذكّر الأحرف <b>A – E – C – C</b>: الإيقاع الذاتي، الاستثارة، التوصيل، الانقباضية." },
        { t: "callout", kind: "note", title: { en: "Excitability (brief)", ar: "الاستثارة (باختصار)" },
          en: "The slides list excitability without detail. In short: it is the ability of cardiac muscle to <b>respond to a stimulus by generating an action potential</b>.",
          ar: "الشرائح تذكر الاستثارة دون تفصيل. باختصار: هي قدرة العضلة القلبية على <b>الاستجابة للمنبّه بتوليد جهد فعل</b>." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "autorhythmicity",
      title: { en: "1. Autorhythmicity", ar: "1. الإيقاع الذاتي" },
      blocks: [
        { t: "callout", kind: "key", title: { en: "Definition", ar: "التعريف" },
          en: "It is the ability of cardiac muscle to <b>initiate impulses</b> (= action potentials) <b>spontaneously</b> and <b>regularly</b>, <i>independent of any nerve supply</i>.",
          ar: "هي قدرة العضلة القلبية على <b>بدء النبضات</b> (= جهود الفعل) <b>تلقائيًا</b> و<b>بانتظام</b>، <i>بشكل مستقل عن أي إمداد عصبي</i>." },
        { t: "p", en: "<b>Cause:</b> the presence of <b>Autorhythmic cells = Pacemaker cells</b>. They are <i>modified cardiac muscle fibers</i>:", ar: "<b>السبب:</b> وجود <b>خلايا الإيقاع الذاتي = خلايا ناظمة الخطى</b>. وهي <i>ألياف عضلية قلبية معدّلة</i>:" },
        { t: "table", head: [ { en: "Pacemaker tissue", ar: "النسيج الناظم" }, { en: "Discharge rate", ar: "معدل التفريغ" }, { en: "Rhythm name", ar: "اسم الإيقاع" } ], rows: [
          [ { en: "<b>S</b>ino<b>A</b>trial <b>N</b>ode (SAN)", ar: "العقدة الجيبية الأذينية (SAN)" }, { en: "<b>90–120</b> beats/min", ar: "<b>90–120</b> نبضة/دقيقة" }, { en: "<b>Sinus rhythm</b>", ar: "<b>الإيقاع الجيبي</b>" } ],
          [ { en: "<b>A</b>trio<b>V</b>entricular <b>N</b>ode (AVN)", ar: "العقدة الأذينية البطينية (AVN)" }, { en: "<b>60–90</b> beats/min", ar: "<b>60–90</b> نبضة/دقيقة" }, { en: "<b>Nodal rhythm</b>", ar: "<b>الإيقاع العُقدي</b>" } ],
          [ { en: "Purkinje fibers", ar: "ألياف بركنجي" }, { en: "<b>20–40</b> beats/min", ar: "<b>20–40</b> نبضة/دقيقة" }, { en: "<b>Idioventricular rhythm</b>", ar: "<b>الإيقاع البطيني الذاتي</b>" } ]
        ]},
        { t: "callout", kind: "note", title: { en: "Why is the SA node the normal pacemaker?", ar: "لماذا العقدة الجيبية هي الناظم الطبيعي؟" },
          en: "Because it has the <b>highest discharge rate</b>. It fires first and drives the rest of the heart before the slower tissues can fire on their own. If the SAN fails, the next fastest (AVN) takes over, and so on.",
          ar: "لأن لديها <b>أعلى معدل تفريغ</b>. فهي تُطلق أولًا وتقود بقية القلب قبل أن تتمكن الأنسجة الأبطأ من الإطلاق بمفردها. إذا فشلت العقدة الجيبية، تتولى الأسرع التالية (العقدة الأذينية البطينية) القيادة، وهكذا." },
        { t: "diagram", id: "pacemaker", title: { en: "Pacemaker Lab — switch nodes on/off", ar: "مختبر ناظم الخطى — شغّل/أوقف العقد" } }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "conductivity",
      title: { en: "2. Conductivity", ar: "2. التوصيل" },
      blocks: [
        { t: "p", en: "Conduction occurs through a <b>specialized conductive system</b>:", ar: "يحدث التوصيل من خلال <b>جهاز توصيل متخصص</b>:" },
        { t: "list", items: [
          { en: "<b>SA node</b> → impulse spreads over the atria via the <b>internodal pathways</b>.", ar: "<b>العقدة الجيبية الأذينية</b> ← تنتشر النبضة عبر الأذينين من خلال <b>المسارات بين العقدية</b>." },
          { en: "<b>AV node</b> = <span class='hl'>the only conducting pathway between atria and ventricles</span>.", ar: "<b>العقدة الأذينية البطينية</b> = <span class='hl'>المسار الوحيد للتوصيل بين الأذينين والبطينين</span>." },
          { en: "<b>Bundle of His (AV bundle)</b> → gives the <b>left bundle branch (LBB)</b> &amp; <b>right bundle branch (RBB)</b>.", ar: "<b>حزمة هيس (الحزمة الأذينية البطينية)</b> ← تعطي <b>الفرع الأيسر للحزمة (LBB)</b> و<b>الفرع الأيمن للحزمة (RBB)</b>." },
          { en: "<b>Purkinje system</b> = has the <span class='hl'>fastest conduction velocity</span>.", ar: "<b>جهاز بركنجي</b> = لديه <span class='hl'>أسرع سرعة توصيل</span>." }
        ]},
        { t: "callout", kind: "key", title: { en: "Why is fast Purkinje conduction important?", ar: "لماذا يُعدّ التوصيل السريع في ألياف بركنجي مهمًا؟" },
          en: "Because it excites the <b>whole ventricle as one unit</b>, leading to a <b>powerful ventricular contraction</b>.",
          ar: "لأنه يثير <b>البطين بأكمله كوحدة واحدة</b>، مما يؤدي إلى <b>انقباض بطيني قوي</b>." },
        { t: "diagram", id: "conductionOrder", title: { en: "Mini-game — Put the conduction pathway in order", ar: "لعبة صغيرة — رتّب مسار التوصيل" } }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "contractility",
      title: { en: "3. Contractility & Excitation–Contraction Coupling", ar: "3. الانقباضية واقتران الإثارة بالانقباض" },
      blocks: [
        { t: "callout", kind: "key", title: { en: "Definition", ar: "التعريف" },
          en: "It is the ability of cardiac muscle to <b>generate force</b> in response to its stimulation.",
          ar: "هي قدرة العضلة القلبية على <b>توليد القوة</b> استجابةً لتنبيهها." },
        { t: "p",
          en: "The heart is a strong muscular pump that contracts and relaxes all the time, day and night, and its stoppage means <b style='color:#dc2626'>death</b>.",
          ar: "القلب مضخة عضلية قوية تنقبض وتنبسط طوال الوقت ليلًا ونهارًا، وتوقفها يعني <b style='color:#dc2626'>الموت</b>." },
        { t: "p", en: "<b>Q: What is meant by Excitation–Contraction Coupling?</b> — It is the sequence of events linking the <b>electrical excitation</b> (action potential) to the <b>mechanical contraction</b> of the muscle:", ar: "<b>س: ما المقصود باقتران الإثارة بالانقباض؟</b> — هو تسلسل الأحداث الذي يربط <b>الإثارة الكهربائية</b> (جهد الفعل) <b>بالانقباض الميكانيكي</b> للعضلة:" },
        { t: "list", num: true, items: [
          { en: "The excitation wave reaches inside the muscle fiber <b>along the membrane of the T-tubules</b>.", ar: "تصل موجة الإثارة إلى داخل الليف العضلي <b>على طول غشاء الأنيبيبات المستعرضة (T-tubules)</b>." },
          { en: "It induces contraction <b>by increasing intracellular calcium</b>.", ar: "تُحدث الانقباض <b>بزيادة الكالسيوم داخل الخلية</b>." },
          { en: "Increased cytosolic Ca²⁺ causes <b>binding of actin to myosin</b> with shortening of sarcomeres → muscle contraction.", ar: "زيادة الكالسيوم في السيتوبلازم تسبب <b>ارتباط الأكتين بالميوسين</b> مع قِصَر القسيمات العضلية ← انقباض العضلة." },
          { en: "Relaxation occurs by <b>removal of Ca²⁺</b> &amp; decreasing cytosolic calcium.", ar: "يحدث الارتخاء <b>بإزالة الكالسيوم</b> وخفض الكالسيوم في السيتوبلازم." }
        ]},
        { t: "diagram", id: "ecc", title: { en: "E-C Coupling — 10 steps, step by step", ar: "اقتران الإثارة بالانقباض — 10 خطوات خطوة بخطوة" } },
        { t: "callout", kind: "tip", title: { en: "Calcium-induced calcium release", ar: "تحرير الكالسيوم المُحفَّز بالكالسيوم" },
          en: "In cardiac muscle, a <b>small</b> amount of Ca²⁺ entering from outside (through voltage-gated L-type channels) triggers a <b>large</b> release of Ca²⁺ from the <b>sarcoplasmic reticulum</b> through <b>ryanodine receptors</b>.",
          ar: "في العضلة القلبية، كمية <b>صغيرة</b> من الكالسيوم الداخل من الخارج (عبر القنوات الحساسة للجهد) تُحفّز تحرير كمية <b>كبيرة</b> من الكالسيوم من <b>الشبكة الساركوبلازمية</b> عبر <b>مستقبلات الريانودين</b>." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "summary",
      title: { en: "Quick Summary", ar: "ملخص سريع" },
      blocks: [
        { t: "list", items: [
          { en: "CVS = heart (pump) + blood vessels (passageways) → closed circulatory system.", ar: "الجهاز القلبي الوعائي = القلب (مضخة) + الأوعية (ممرات) ← جهاز دوري مغلق." },
          { en: "4 chambers: 2 atria + 2 ventricles. Veins → to heart; arteries → away from heart.", ar: "4 حجرات: أذينان + بطينان. الأوردة ← إلى القلب؛ الشرايين ← بعيدًا عن القلب." },
          { en: "A-V valves (tricuspid, mitral) prevent backflow in ventricular systole; semilunar (pulmonary, aortic) prevent backflow in diastole.", ar: "الصمامات الأذينية البطينية (ثلاثي الشرف، التاجي) تمنع الارتجاع أثناء الانقباض البطيني؛ والهلالية (الرئوي، الأبهري) تمنعه أثناء الانبساط." },
          { en: "Arteries & arterioles: away; capillaries: exchange; veins & venules: towards heart.", ar: "الشرايين والشُرَيّنات: بعيدًا؛ الشعيرات: تبادل؛ الأوردة والوُرَيدات: نحو القلب." },
          { en: "Cardiac muscle: striated, involuntary, functional syncytium (intercalated discs). 99% contractile, 1% non-contractile.", ar: "العضلة القلبية: مخططة، لا إرادية، مخلوي وظيفي (أقراص بينية). 99% انقباضية، 1% غير انقباضية." },
          { en: "Properties: autorhythmicity, excitability, conductivity, contractility.", ar: "الخصائص: الإيقاع الذاتي، الاستثارة، التوصيل، الانقباضية." },
          { en: "SAN 90–120 (sinus) > AVN 60–90 (nodal) > Purkinje 20–40 (idioventricular).", ar: "SAN ‏90–120 (جيبي) > AVN ‏60–90 (عُقدي) > بركنجي 20–40 (بطيني ذاتي)." },
          { en: "AV node = only pathway atria→ventricles; Purkinje = fastest conduction.", ar: "العقدة الأذينية البطينية = المسار الوحيد من الأذينين للبطينين؛ بركنجي = أسرع توصيل." },
          { en: "E-C coupling: AP along T-tubules → ↑ intracellular Ca²⁺ → actin–myosin binding → contraction; Ca²⁺ removal → relaxation.", ar: "اقتران الإثارة بالانقباض: جهد الفعل عبر الأنيبيبات المستعرضة ← ↑ الكالسيوم داخل الخلية ← ارتباط الأكتين بالميوسين ← انقباض؛ إزالة الكالسيوم ← ارتخاء." }
        ]},
        { t: "callout", kind: "note", title: { en: "Reference", ar: "المرجع" },
          en: "Sherwood — <i>Human Physiology: From Cells to Systems</i>.",
          ar: "شيروود — <i>فسيولوجيا الإنسان: من الخلايا إلى الأجهزة</i>." }
      ]
    }
  ],

  /* ================================================================ QUIZ */
  quiz: [
    { topic: "Function", q: { en: "The heart and blood vessels together constitute a closed system called the:", ar: "يشكّل القلب والأوعية الدموية معًا نظامًا مغلقًا يُسمّى:" },
      o: [ { en: "Circulatory system", ar: "الجهاز الدوري" }, { en: "Lymphatic system", ar: "الجهاز اللمفاوي" }, { en: "Respiratory system", ar: "الجهاز التنفسي" }, { en: "Nervous system", ar: "الجهاز العصبي" } ], a: 0,
      x: { en: "Heart & blood vessels form a closed system through which blood circulates = the circulatory system.", ar: "القلب والأوعية يشكّلان نظامًا مغلقًا يدور فيه الدم = الجهاز الدوري." } },
    { topic: "Function", q: { en: "Which of the following is a function of the circulatory system?", ar: "أيٌّ مما يلي من وظائف الجهاز الدوري؟" },
      o: [ { en: "Returns CO₂ to the kidneys", ar: "إعادة CO₂ إلى الكليتين" }, { en: "Supplies O₂ & nutrients to tissues", ar: "تزويد الأنسجة بالأكسجين والمواد الغذائية" }, { en: "Returns waste products to the lungs", ar: "إعادة الفضلات إلى الرئتين" }, { en: "Produces hormones for digestion", ar: "إنتاج هرمونات الهضم" } ], a: 1,
      x: { en: "It supplies O₂ & nutrients to tissues and returns CO₂ to the LUNGS and waste products to the KIDNEYS.", ar: "يزوّد الأنسجة بالأكسجين والغذاء، ويعيد CO₂ إلى الرئتين والفضلات إلى الكليتين." } },
    { topic: "Function", q: { en: "The heart acts as the ______ that gives pressure to blood for its flow to tissues.", ar: "يعمل القلب كـ ______ تعطي الدم الضغط اللازم لتدفقه إلى الأنسجة." },
      o: [ { en: "Passageway", ar: "ممر" }, { en: "Filter", ar: "مرشّح" }, { en: "Pump", ar: "مضخة" }, { en: "Reservoir", ar: "خزان" } ], a: 2,
      x: { en: "Heart = pump; blood vessels = passageways.", ar: "القلب = مضخة؛ الأوعية الدموية = ممرات." } },
    { topic: "Heart", q: { en: "How many chambers does the human heart have?", ar: "كم عدد حجرات قلب الإنسان؟" },
      o: [ { en: "2", ar: "2" }, { en: "3", ar: "3" }, { en: "4", ar: "4" }, { en: "6", ar: "6" } ], a: 2,
      x: { en: "4 chambers: 2 atria + 2 ventricles.", ar: "4 حجرات: أذينان + بطينان." } },
    { topic: "Heart", q: { en: "Which vessels bring blood from the lungs to the heart?", ar: "ما الأوعية التي تحمل الدم من الرئتين إلى القلب؟" },
      o: [ { en: "Pulmonary arteries", ar: "الشرايين الرئوية" }, { en: "Pulmonary veins", ar: "الأوردة الرئوية" }, { en: "Venae cavae", ar: "الوريدان الأجوفان" }, { en: "Aorta", ar: "الأبهر" } ], a: 1,
      x: { en: "Veins bring blood TO the heart; the pulmonary veins bring blood from the lungs to the left atrium.", ar: "الأوردة تحمل الدم إلى القلب؛ والأوردة الرئوية تحمل الدم من الرئتين إلى الأذين الأيسر." } },
    { topic: "Heart", q: { en: "Deoxygenated blood from the body first enters which chamber?", ar: "يدخل الدم غير المؤكسج القادم من الجسم أولًا إلى أي حجرة؟" },
      o: [ { en: "Left atrium", ar: "الأذين الأيسر" }, { en: "Right ventricle", ar: "البطين الأيمن" }, { en: "Right atrium", ar: "الأذين الأيمن" }, { en: "Left ventricle", ar: "البطين الأيسر" } ], a: 2,
      x: { en: "The superior & inferior venae cavae drain into the right atrium.", ar: "الوريدان الأجوفان العلوي والسفلي يصبّان في الأذين الأيمن." } },
    { topic: "Heart", q: { en: "Which vessel carries oxygenated blood from the left ventricle to the body?", ar: "ما الوعاء الذي يحمل الدم المؤكسج من البطين الأيسر إلى الجسم؟" },
      o: [ { en: "Pulmonary artery", ar: "الشريان الرئوي" }, { en: "Superior vena cava", ar: "الوريد الأجوف العلوي" }, { en: "Aorta", ar: "الأبهر" }, { en: "Pulmonary vein", ar: "الوريد الرئوي" } ], a: 2,
      x: { en: "The aorta leaves the left ventricle and distributes oxygenated blood to the systemic circulation.", ar: "يخرج الأبهر من البطين الأيسر ويوزّع الدم المؤكسج على الدورة الجهازية." } },
    { topic: "Circulation", q: { en: "The pulmonary artery carries:", ar: "يحمل الشريان الرئوي:" },
      o: [ { en: "Oxygenated blood to the lungs", ar: "دمًا مؤكسجًا إلى الرئتين" }, { en: "Deoxygenated blood to the lungs", ar: "دمًا غير مؤكسج إلى الرئتين" }, { en: "Oxygenated blood to the heart", ar: "دمًا مؤكسجًا إلى القلب" }, { en: "Deoxygenated blood to the body", ar: "دمًا غير مؤكسج إلى الجسم" } ], a: 1,
      x: { en: "It's an artery (away from the heart) but carries deoxygenated blood from the right ventricle to the lungs.", ar: "هو شريان (بعيدًا عن القلب) لكنه يحمل دمًا غير مؤكسج من البطين الأيمن إلى الرئتين." } },
    { topic: "Circulation", q: { en: "The pulmonary circulation ends in the:", ar: "تنتهي الدورة الرئوية في:" },
      o: [ { en: "Right atrium", ar: "الأذين الأيمن" }, { en: "Left atrium", ar: "الأذين الأيسر" }, { en: "Left ventricle", ar: "البطين الأيسر" }, { en: "Right ventricle", ar: "البطين الأيمن" } ], a: 1,
      x: { en: "RV → pulmonary artery → lungs → pulmonary veins → LEFT ATRIUM.", ar: "البطين الأيمن ← الشريان الرئوي ← الرئتين ← الأوردة الرئوية ← الأذين الأيسر." } },
    { topic: "Valves", q: { en: "How many sets of valves are present in the heart?", ar: "كم مجموعة من الصمامات توجد في القلب؟" },
      o: [ { en: "2", ar: "2" }, { en: "3", ar: "3" }, { en: "4", ar: "4" }, { en: "5", ar: "5" } ], a: 2,
      x: { en: "Tricuspid, mitral, pulmonary and aortic = 4.", ar: "ثلاثي الشرف، التاجي، الرئوي، الأبهري = 4." } },
    { topic: "Valves", q: { en: "The tricuspid valve lies between:", ar: "يقع الصمام ثلاثي الشرف بين:" },
      o: [ { en: "Left atrium & left ventricle", ar: "الأذين الأيسر والبطين الأيسر" }, { en: "Right ventricle & pulmonary artery", ar: "البطين الأيمن والشريان الرئوي" }, { en: "Right atrium & right ventricle", ar: "الأذين الأيمن والبطين الأيمن" }, { en: "Left ventricle & aorta", ar: "البطين الأيسر والأبهر" } ], a: 2,
      x: { en: "Tricuspid = right A-V valve (RA ↔ RV).", ar: "ثلاثي الشرف = الصمام الأذيني البطيني الأيمن (الأذين الأيمن ↔ البطين الأيمن)." } },
    { topic: "Valves", q: { en: "The mitral valve is also known as the:", ar: "يُعرف الصمام التاجي أيضًا باسم:" },
      o: [ { en: "Tricuspid valve", ar: "الصمام ثلاثي الشرف" }, { en: "Bicuspid valve", ar: "الصمام ثنائي الشرف" }, { en: "Pulmonary valve", ar: "الصمام الرئوي" }, { en: "Semilunar valve", ar: "الصمام الهلالي" } ], a: 1,
      x: { en: "The mitral valve (between LA & LV) has 2 cusps → bicuspid valve.", ar: "الصمام التاجي (بين الأذين والبطين الأيسرين) له شرفتان ← ثنائي الشرف." } },
    { topic: "Valves", q: { en: "Tricuspid and mitral valves are called:", ar: "يُسمّى الصمامان ثلاثي الشرف والتاجي:" },
      o: [ { en: "Semilunar valves", ar: "الصمامات الهلالية" }, { en: "Atrioventricular (A-V) valves", ar: "الصمامات الأذينية البطينية" }, { en: "Venous valves", ar: "الصمامات الوريدية" }, { en: "Aortic valves", ar: "الصمامات الأبهرية" } ], a: 1, x: { en: "They lie between atria and ventricles → A-V valves.", ar: "يقعان بين الأذينين والبطينين ← صمامات أذينية بطينية." } },
    { topic: "Valves", q: { en: "A-V valves prevent backflow of blood from:", ar: "تمنع الصمامات الأذينية البطينية ارتجاع الدم من:" },
      o: [ { en: "Atria to ventricles during diastole", ar: "الأذينين إلى البطينين أثناء الانبساط" }, { en: "Ventricles to atria during ventricular systole", ar: "البطينين إلى الأذينين أثناء الانقباض البطيني" }, { en: "Aorta to ventricles during diastole", ar: "الأبهر إلى البطينين أثناء الانبساط" }, { en: "Veins to the atria", ar: "الأوردة إلى الأذينين" } ], a: 1,
      x: { en: "When ventricles contract (systole), A-V valves close so blood doesn't go back into the atria.", ar: "عندما ينقبض البطينان، تُغلق الصمامات الأذينية البطينية حتى لا يرجع الدم إلى الأذينين." } },
    { topic: "Valves", q: { en: "Semilunar valves prevent backflow of blood from the aorta & pulmonary artery into the ventricles during:", ar: "تمنع الصمامات الهلالية ارتجاع الدم من الأبهر والشريان الرئوي إلى البطينين أثناء:" },
      o: [ { en: "Ventricular systole", ar: "الانقباض البطيني" }, { en: "Atrial systole", ar: "الانقباض الأذيني" }, { en: "Diastole", ar: "الانبساط" }, { en: "Inspiration", ar: "الشهيق" } ], a: 2,
      x: { en: "In diastole the ventricles relax and their pressure falls; the semilunar valves close to stop arterial blood flowing back.", ar: "في الانبساط يرتخي البطينان وينخفض ضغطهما؛ فتُغلق الصمامات الهلالية لمنع رجوع الدم الشرياني." } },
    { topic: "Valves", q: { en: "Which valve is located between the left ventricle and the aorta?", ar: "أي صمام يقع بين البطين الأيسر والأبهر؟" },
      o: [ { en: "Mitral valve", ar: "الصمام التاجي" }, { en: "Pulmonary valve", ar: "الصمام الرئوي" }, { en: "Aortic valve", ar: "الصمام الأبهري" }, { en: "Tricuspid valve", ar: "الصمام ثلاثي الشرف" } ], a: 2, x: { en: "Aortic semilunar valve: LV ↔ aorta.", ar: "الصمام الأبهري الهلالي: البطين الأيسر ↔ الأبهر." } },
    { topic: "Valves", q: { en: "The main function of all heart valves is to:", ar: "الوظيفة الرئيسية لجميع صمامات القلب هي:" },
      o: [ { en: "Generate the heartbeat", ar: "توليد ضربات القلب" }, { en: "Maintain unidirectional blood flow", ar: "المحافظة على تدفق الدم في اتجاه واحد" }, { en: "Oxygenate the blood", ar: "أكسجة الدم" }, { en: "Conduct impulses", ar: "توصيل النبضات" } ], a: 1, x: { en: "Valves maintain unidirectional blood flow, i.e. prevent backflow.", ar: "الصمامات تحافظ على تدفق الدم باتجاه واحد، أي تمنع الارتجاع." } },
    { topic: "Vessels", q: { en: "Nutrient and gas exchange occurs in the:", ar: "يحدث تبادل المواد الغذائية والغازات في:" },
      o: [ { en: "Arteries", ar: "الشرايين" }, { en: "Veins", ar: "الأوردة" }, { en: "Capillaries", ar: "الشعيرات الدموية" }, { en: "Arterioles", ar: "الشُرَيّنات" } ], a: 2, x: { en: "Capillaries are where nutrient and gas exchange occur.", ar: "الشعيرات الدموية هي مكان تبادل الغذاء والغازات." } },
    { topic: "Vessels", q: { en: "Veins and venules carry blood:", ar: "تحمل الأوردة والوُرَيدات الدم:" },
      o: [ { en: "Away from the heart", ar: "بعيدًا عن القلب" }, { en: "Towards the heart", ar: "نحو القلب" }, { en: "Only to the lungs", ar: "إلى الرئتين فقط" }, { en: "Only to the kidneys", ar: "إلى الكليتين فقط" } ], a: 1, x: { en: "Veins (& venules) → towards the heart.", ar: "الأوردة (والوُرَيدات) ← نحو القلب." } },
    { topic: "Cardiac muscle", q: { en: "Cardiac muscle differs from skeletal muscle in being:", ar: "تختلف العضلة القلبية عن العضلة الهيكلية في كونها:" },
      o: [ { en: "Striated and voluntary", ar: "مخططة وإرادية" }, { en: "Involuntary and acts as a functional syncytium", ar: "لا إرادية وتعمل كمخلوي وظيفي" }, { en: "Non-striated", ar: "غير مخططة" }, { en: "Under conscious control", ar: "تحت التحكم الواعي" } ], a: 1,
      x: { en: "Both are striated, but cardiac muscle is involuntary and acts as a single unit (functional syncytium).", ar: "كلاهما مخطط، لكن العضلة القلبية لا إرادية وتعمل كوحدة واحدة (مخلوي وظيفي)." } },
    { topic: "Cardiac muscle", q: { en: "Cardiac muscle acts as a functional syncytium due to the presence of:", ar: "تعمل العضلة القلبية كمخلوي وظيفي بسبب وجود:" },
      o: [ { en: "T-tubules", ar: "الأنيبيبات المستعرضة" }, { en: "Intercalated discs", ar: "الأقراص البينية" }, { en: "Chordae tendineae", ar: "الحبال الوترية" }, { en: "Sarcoplasmic reticulum", ar: "الشبكة الساركوبلازمية" } ], a: 1, x: { en: "Intercalated discs connect cardiac cells so they act as one unit.", ar: "الأقراص البينية تربط الخلايا القلبية فتعمل كوحدة واحدة." } },
    { topic: "Cardiac muscle", q: { en: "What percentage of cardiac muscle fibers are contractile?", ar: "ما نسبة الألياف الانقباضية في العضلة القلبية؟" },
      o: [ { en: "1%", ar: "1%" }, { en: "50%", ar: "50%" }, { en: "75%", ar: "75%" }, { en: "99%", ar: "99%" } ], a: 3, x: { en: "99% contractile (pumping), 1% non-contractile (initiation & conduction).", ar: "99% انقباضية (ضخ)، 1% غير انقباضية (بدء وتوصيل)." } },
    { topic: "Cardiac muscle", q: { en: "Non-contractile cardiac fibers are responsible for:", ar: "الألياف القلبية غير الانقباضية مسؤولة عن:" },
      o: [ { en: "The pumping action of the heart", ar: "عملية الضخ في القلب" }, { en: "Initiation and conduction of the excitation wave", ar: "بدء وتوصيل موجة الإثارة" }, { en: "Secreting hormones", ar: "إفراز الهرمونات" }, { en: "Forming the heart valves", ar: "تكوين صمامات القلب" } ], a: 1, x: { en: "The 1% non-contractile fibers = autorhythmic (pacemaker) cells + conducting cells.", ar: "الـ1% غير الانقباضية = خلايا ناظمة الخطى + خلايا موصلة." } },
    { topic: "Properties", q: { en: "Which is NOT one of the 4 properties of cardiac muscle listed in the lecture?", ar: "أيٌّ مما يلي ليس من خصائص العضلة القلبية الأربع المذكورة في المحاضرة؟" },
      o: [ { en: "Autorhythmicity", ar: "الإيقاع الذاتي" }, { en: "Conductivity", ar: "التوصيل" }, { en: "Elasticity", ar: "المرونة" }, { en: "Contractility", ar: "الانقباضية" } ], a: 2, x: { en: "The 4 properties: autorhythmicity, excitability, conductivity, contractility.", ar: "الخصائص الأربع: الإيقاع الذاتي، الاستثارة، التوصيل، الانقباضية." } },
    { topic: "Autorhythmicity", q: { en: "Autorhythmicity is the ability of cardiac muscle to initiate impulses:", ar: "الإيقاع الذاتي هو قدرة العضلة القلبية على بدء النبضات:" },
      o: [ { en: "Only when stimulated by the vagus nerve", ar: "فقط عند تنبيهها بالعصب المبهم" }, { en: "Spontaneously and regularly, independent of any nerve supply", ar: "تلقائيًا وبانتظام وبشكل مستقل عن أي إمداد عصبي" }, { en: "Only during exercise", ar: "فقط أثناء التمرين" }, { en: "Irregularly in response to hormones", ar: "بشكل غير منتظم استجابة للهرمونات" } ], a: 1, x: { en: "Definition: initiate impulses spontaneously & regularly, independent of nerve supply.", ar: "التعريف: بدء النبضات تلقائيًا وبانتظام بشكل مستقل عن الإمداد العصبي." } },
    { topic: "Autorhythmicity", q: { en: "The cause of autorhythmicity is the presence of:", ar: "سبب الإيقاع الذاتي هو وجود:" },
      o: [ { en: "Contractile fibers", ar: "الألياف الانقباضية" }, { en: "Pacemaker (autorhythmic) cells", ar: "خلايا ناظمة الخطى (الإيقاع الذاتي)" }, { en: "Sympathetic nerves", ar: "الأعصاب الودية" }, { en: "Chordae tendineae", ar: "الحبال الوترية" } ], a: 1, x: { en: "Autorhythmic cells = pacemaker cells (SAN, AVN, Purkinje) — modified cardiac muscle fibers.", ar: "خلايا الإيقاع الذاتي = خلايا ناظمة الخطى (SAN، AVN، بركنجي) — ألياف عضلية قلبية معدّلة." } },
    { topic: "Autorhythmicity", q: { en: "The discharge rate of the SA node is:", ar: "معدل تفريغ العقدة الجيبية الأذينية هو:" },
      o: [ { en: "20–40 beats/min", ar: "20–40 نبضة/دقيقة" }, { en: "60–90 beats/min", ar: "60–90 نبضة/دقيقة" }, { en: "90–120 beats/min", ar: "90–120 نبضة/دقيقة" }, { en: "150–200 beats/min", ar: "150–200 نبضة/دقيقة" } ], a: 2, x: { en: "SAN = 90–120/min → sinus rhythm (per lecture slides).", ar: "العقدة الجيبية = 90–120/دقيقة ← الإيقاع الجيبي (حسب شرائح المحاضرة)." } },
    { topic: "Autorhythmicity", q: { en: "If the SA node fails, the AV node takes over producing a rhythm called:", ar: "إذا فشلت العقدة الجيبية، تتولى العقدة الأذينية البطينية القيادة منتجةً إيقاعًا يُسمّى:" },
      o: [ { en: "Sinus rhythm", ar: "الإيقاع الجيبي" }, { en: "Nodal rhythm (60–90/min)", ar: "الإيقاع العُقدي (60–90/دقيقة)" }, { en: "Idioventricular rhythm", ar: "الإيقاع البطيني الذاتي" }, { en: "Atrial fibrillation", ar: "الرجفان الأذيني" } ], a: 1, x: { en: "AVN discharges at 60–90/min → nodal rhythm.", ar: "العقدة الأذينية البطينية تفرغ بمعدل 60–90/دقيقة ← إيقاع عُقدي." } },
    { topic: "Autorhythmicity", q: { en: "Idioventricular rhythm (20–40 beats/min) originates from:", ar: "الإيقاع البطيني الذاتي (20–40 نبضة/دقيقة) ينشأ من:" },
      o: [ { en: "SA node", ar: "العقدة الجيبية الأذينية" }, { en: "AV node", ar: "العقدة الأذينية البطينية" }, { en: "Purkinje fibers", ar: "ألياف بركنجي" }, { en: "Atrial muscle", ar: "عضلة الأذين" } ], a: 2, x: { en: "Purkinje fibers have the slowest intrinsic rate (20–40/min).", ar: "ألياف بركنجي لها أبطأ معدل ذاتي (20–40/دقيقة)." } },
    { topic: "Autorhythmicity", q: { en: "The SA node is the normal pacemaker of the heart because it:", ar: "العقدة الجيبية الأذينية هي الناظم الطبيعي للقلب لأنها:" },
      o: [ { en: "Is the largest node", ar: "أكبر العقد حجمًا" }, { en: "Has the highest discharge rate", ar: "لديها أعلى معدل تفريغ" }, { en: "Has the fastest conduction velocity", ar: "لديها أسرع سرعة توصيل" }, { en: "Is located in the ventricle", ar: "تقع في البطين" } ], a: 1, x: { en: "Highest rate (90–120/min) → fires first and drives the heart. (Fastest CONDUCTION is Purkinje — don't mix them up!)", ar: "أعلى معدل (90–120/دقيقة) ← تُطلق أولًا وتقود القلب. (أسرع توصيل هو بركنجي — لا تخلط بينهما!)" } },
    { topic: "Conductivity", q: { en: "The only conducting pathway between the atria and ventricles is the:", ar: "المسار الوحيد للتوصيل بين الأذينين والبطينين هو:" },
      o: [ { en: "SA node", ar: "العقدة الجيبية الأذينية" }, { en: "AV node", ar: "العقدة الأذينية البطينية" }, { en: "Purkinje fibers", ar: "ألياف بركنجي" }, { en: "Internodal pathways", ar: "المسارات بين العقدية" } ], a: 1, x: { en: "AV node = the only conducting pathway between atria and ventricles.", ar: "العقدة الأذينية البطينية = المسار الوحيد للتوصيل بين الأذينين والبطينين." } },
    { topic: "Conductivity", q: { en: "The bundle of His divides into:", ar: "تنقسم حزمة هيس إلى:" },
      o: [ { en: "SA and AV nodes", ar: "العقدتين الجيبية والأذينية البطينية" }, { en: "Left and right bundle branches", ar: "الفرعين الأيسر والأيمن للحزمة" }, { en: "Internodal pathways", ar: "المسارات بين العقدية" }, { en: "Pulmonary arteries", ar: "الشرايين الرئوية" } ], a: 1, x: { en: "Bundle of His → LBB & RBB.", ar: "حزمة هيس ← الفرع الأيسر (LBB) والفرع الأيمن (RBB)." } },
    { topic: "Conductivity", q: { en: "Which part of the conducting system has the fastest conduction velocity?", ar: "أي جزء من جهاز التوصيل له أسرع سرعة توصيل؟" },
      o: [ { en: "AV node", ar: "العقدة الأذينية البطينية" }, { en: "SA node", ar: "العقدة الجيبية الأذينية" }, { en: "Purkinje system", ar: "جهاز بركنجي" }, { en: "Atrial muscle", ar: "عضلة الأذين" } ], a: 2, x: { en: "Purkinje fibers conduct fastest → excite the whole ventricle as one unit.", ar: "ألياف بركنجي الأسرع توصيلًا ← تثير البطين كله كوحدة واحدة." } },
    { topic: "Conductivity", q: { en: "Fast conduction in Purkinje fibers is important because it:", ar: "التوصيل السريع في ألياف بركنجي مهم لأنه:" },
      o: [ { en: "Slows the heart rate", ar: "يبطئ معدل القلب" }, { en: "Excites the whole ventricle as one unit → powerful contraction", ar: "يثير البطين كله كوحدة واحدة ← انقباض قوي" }, { en: "Allows atria to fill", ar: "يسمح بامتلاء الأذينين" }, { en: "Closes the semilunar valves", ar: "يغلق الصمامات الهلالية" } ], a: 1, x: { en: "Simultaneous excitation of all ventricular fibers → powerful ventricular contraction.", ar: "إثارة جميع الألياف البطينية في آن واحد ← انقباض بطيني قوي." } },
    { topic: "Conductivity", q: { en: "Correct order of impulse conduction is:", ar: "الترتيب الصحيح لتوصيل النبضة هو:" },
      o: [ { en: "AVN → SAN → Bundle of His → Purkinje", ar: "AVN ← SAN ← حزمة هيس ← بركنجي" }, { en: "SAN → AVN → Bundle of His → Bundle branches → Purkinje", ar: "SAN ← AVN ← حزمة هيس ← فروع الحزمة ← بركنجي" }, { en: "SAN → Purkinje → AVN → Bundle of His", ar: "SAN ← بركنجي ← AVN ← حزمة هيس" }, { en: "Purkinje → Bundle branches → AVN → SAN", ar: "بركنجي ← فروع الحزمة ← AVN ← SAN" } ], a: 1, x: { en: "SAN → internodal pathways → AVN → bundle of His → LBB/RBB → Purkinje fibers.", ar: "SAN ← المسارات بين العقدية ← AVN ← حزمة هيس ← الفروع ← ألياف بركنجي." } },
    { topic: "Contractility", q: { en: "Contractility is the ability of cardiac muscle to:", ar: "الانقباضية هي قدرة العضلة القلبية على:" },
      o: [ { en: "Initiate impulses", ar: "بدء النبضات" }, { en: "Conduct impulses", ar: "توصيل النبضات" }, { en: "Generate force in response to its stimulation", ar: "توليد القوة استجابةً لتنبيهها" }, { en: "Respond to hormones only", ar: "الاستجابة للهرمونات فقط" } ], a: 2, x: { en: "Contractility = generate force in response to stimulation.", ar: "الانقباضية = توليد القوة استجابة للتنبيه." } },
    { topic: "E-C coupling", q: { en: "The excitation wave reaches the inside of the cardiac muscle fiber along the:", ar: "تصل موجة الإثارة إلى داخل الليف العضلي القلبي عبر:" },
      o: [ { en: "Intercalated discs", ar: "الأقراص البينية" }, { en: "Membrane of T-tubules", ar: "غشاء الأنيبيبات المستعرضة" }, { en: "Mitochondria", ar: "الميتوكوندريا" }, { en: "Nucleus", ar: "النواة" } ], a: 1, x: { en: "The action potential spreads inward along the T-tubule membranes.", ar: "ينتشر جهد الفعل إلى الداخل على طول أغشية الأنيبيبات المستعرضة." } },
    { topic: "E-C coupling", q: { en: "Excitation induces cardiac muscle contraction by:", ar: "تُحدث الإثارة انقباض العضلة القلبية عن طريق:" },
      o: [ { en: "Decreasing intracellular Ca²⁺", ar: "خفض الكالسيوم داخل الخلية" }, { en: "Increasing intracellular Ca²⁺", ar: "زيادة الكالسيوم داخل الخلية" }, { en: "Increasing intracellular K⁺", ar: "زيادة البوتاسيوم داخل الخلية" }, { en: "Blocking Na⁺ channels", ar: "إغلاق قنوات الصوديوم" } ], a: 1, x: { en: "↑ cytosolic Ca²⁺ → actin binds myosin → sarcomeres shorten.", ar: "↑ الكالسيوم السيتوبلازمي ← يرتبط الأكتين بالميوسين ← تقصر القسيمات العضلية." } },
    { topic: "E-C coupling", q: { en: "Ca²⁺ ions initiate contraction by binding to:", ar: "تبدأ أيونات الكالسيوم الانقباض بالارتباط بـ:" },
      o: [ { en: "Myosin", ar: "الميوسين" }, { en: "Troponin", ar: "التروبونين" }, { en: "Actin directly", ar: "الأكتين مباشرة" }, { en: "ATP", ar: "ATP" } ], a: 1, x: { en: "Step 6: Ca²⁺ ions bind to troponin to initiate contraction.", ar: "الخطوة 6: ترتبط أيونات الكالسيوم بالتروبونين لبدء الانقباض." } },
    { topic: "E-C coupling", q: { en: "Ca²⁺ is released from the sarcoplasmic reticulum through:", ar: "يُحرَّر الكالسيوم من الشبكة الساركوبلازمية عبر:" },
      o: [ { en: "Na⁺-K⁺ ATPase", ar: "مضخة الصوديوم-البوتاسيوم" }, { en: "Ryanodine receptor channels (RyR)", ar: "قنوات مستقبلات الريانودين (RyR)" }, { en: "Intercalated discs", ar: "الأقراص البينية" }, { en: "Gap junctions", ar: "الوصلات الفجوية" } ], a: 1, x: { en: "Ca²⁺ entering the cell induces Ca²⁺ release through ryanodine receptor channels (calcium-induced calcium release).", ar: "الكالسيوم الداخل للخلية يحفّز تحرير الكالسيوم عبر مستقبلات الريانودين (تحرير الكالسيوم المحفّز بالكالسيوم)." } },
    { topic: "E-C coupling", q: { en: "Relaxation of cardiac muscle occurs when:", ar: "يحدث ارتخاء العضلة القلبية عندما:" },
      o: [ { en: "Ca²⁺ increases in the cytosol", ar: "يزداد الكالسيوم في السيتوبلازم" }, { en: "Ca²⁺ is removed & cytosolic calcium decreases", ar: "يُزال الكالسيوم وينخفض الكالسيوم السيتوبلازمي" }, { en: "More action potentials arrive", ar: "تصل جهود فعل أكثر" }, { en: "Actin binds myosin", ar: "يرتبط الأكتين بالميوسين" } ], a: 1, x: { en: "Ca²⁺ unbinds troponin, is pumped back into SR and exchanged with Na⁺ across the membrane.", ar: "ينفصل الكالسيوم عن التروبونين، ويُضخ إلى الشبكة الساركوبلازمية ويُستبدل بالصوديوم عبر الغشاء." } },
    { topic: "E-C coupling", q: { en: "The Na⁺ gradient used by the Na⁺/Ca²⁺ exchanger is maintained by:", ar: "يُحافَظ على تدرّج الصوديوم المستخدم في مبادل الصوديوم/الكالسيوم بواسطة:" },
      o: [ { en: "Ryanodine receptors", ar: "مستقبلات الريانودين" }, { en: "Na⁺-K⁺-ATPase", ar: "مضخة الصوديوم-البوتاسيوم ATPase" }, { en: "Troponin", ar: "التروبونين" }, { en: "L-type Ca²⁺ channels", ar: "قنوات الكالسيوم من النوع L" } ], a: 1, x: { en: "Step 10: Na⁺ gradient is maintained by the Na⁺-K⁺-ATPase.", ar: "الخطوة 10: يُحافَظ على تدرّج الصوديوم بواسطة مضخة الصوديوم-البوتاسيوم." } }
  ],

  /* ================================================================ FLASHCARDS */
  flashcards: [
    { f: { en: "Circulatory system", ar: "الجهاز الدوري" }, b: { en: "Heart + blood vessels forming a closed system through which blood circulates.", ar: "القلب + الأوعية الدموية تشكّل نظامًا مغلقًا يدور فيه الدم." } },
    { f: { en: "2 functions of the circulatory system", ar: "وظيفتا الجهاز الدوري" }, b: { en: "1) Supplies O₂ & nutrients to tissues. 2) Returns CO₂ to lungs and waste products to kidneys.", ar: "1) يزوّد الأنسجة بالأكسجين والغذاء. 2) يعيد CO₂ للرئتين والفضلات للكليتين." } },
    { f: { en: "Role of the heart", ar: "دور القلب" }, b: { en: "A pump that gives pressure to blood for its flow to tissues.", ar: "مضخة تعطي الدم الضغط اللازم لتدفقه إلى الأنسجة." } },
    { f: { en: "Role of blood vessels", ar: "دور الأوعية الدموية" }, b: { en: "Passageways that distribute blood from the heart to all body parts and return it to the heart.", ar: "ممرات توزّع الدم من القلب إلى أجزاء الجسم وتعيده إلى القلب." } },
    { f: { en: "Chambers of the heart", ar: "حجرات القلب" }, b: { en: "4 chambers: 2 atria + 2 ventricles.", ar: "4 حجرات: أذينان + بطينان." } },
    { f: { en: "Venae cavae", ar: "الوريدان الأجوفان" }, b: { en: "Veins bringing deoxygenated blood from the body to the right atrium.", ar: "أوردة تحمل الدم غير المؤكسج من الجسم إلى الأذين الأيمن." } },
    { f: { en: "Pulmonary veins", ar: "الأوردة الرئوية" }, b: { en: "Bring OXYGENATED blood from the lungs to the left atrium.", ar: "تحمل دمًا مؤكسجًا من الرئتين إلى الأذين الأيسر." } },
    { f: { en: "Pulmonary artery", ar: "الشريان الرئوي" }, b: { en: "Carries DEOXYGENATED blood from the right ventricle to the lungs.", ar: "يحمل دمًا غير مؤكسج من البطين الأيمن إلى الرئتين." } },
    { f: { en: "Aorta", ar: "الأبهر" }, b: { en: "Largest artery; carries oxygenated blood from the left ventricle to the body.", ar: "أكبر شريان؛ يحمل الدم المؤكسج من البطين الأيسر إلى الجسم." } },
    { f: { en: "Tricuspid valve", ar: "الصمام ثلاثي الشرف" }, b: { en: "A-V valve between the right atrium & right ventricle.", ar: "صمام أذيني بطيني بين الأذين الأيمن والبطين الأيمن." } },
    { f: { en: "Mitral (bicuspid) valve", ar: "الصمام التاجي (ثنائي الشرف)" }, b: { en: "A-V valve between the left atrium & left ventricle.", ar: "صمام أذيني بطيني بين الأذين الأيسر والبطين الأيسر." } },
    { f: { en: "Pulmonary valve", ar: "الصمام الرئوي" }, b: { en: "Semilunar valve between the right ventricle & pulmonary artery.", ar: "صمام هلالي بين البطين الأيمن والشريان الرئوي." } },
    { f: { en: "Aortic valve", ar: "الصمام الأبهري" }, b: { en: "Semilunar valve between the left ventricle & aorta.", ar: "صمام هلالي بين البطين الأيسر والأبهر." } },
    { f: { en: "Function of A-V valves", ar: "وظيفة الصمامات الأذينية البطينية" }, b: { en: "Prevent backflow from ventricles to atria during ventricular systole.", ar: "تمنع ارتجاع الدم من البطينين إلى الأذينين أثناء الانقباض البطيني." } },
    { f: { en: "Function of semilunar valves", ar: "وظيفة الصمامات الهلالية" }, b: { en: "At ventricular exits; allow flow ventricle → artery only; prevent backflow into ventricles during diastole.", ar: "عند مخارج البطينين؛ تسمح بالتدفق من البطين ← الشريان فقط؛ تمنع الارتجاع للبطينين أثناء الانبساط." } },
    { f: { en: "Arteries & arterioles", ar: "الشرايين والشُرَيّنات" }, b: { en: "Carry blood AWAY from the heart.", ar: "تحمل الدم بعيدًا عن القلب." } },
    { f: { en: "Capillaries", ar: "الشعيرات الدموية" }, b: { en: "Site of nutrient and gas exchange.", ar: "موقع تبادل المواد الغذائية والغازات." } },
    { f: { en: "Veins & venules", ar: "الأوردة والوُرَيدات" }, b: { en: "Carry blood TOWARDS the heart.", ar: "تحمل الدم نحو القلب." } },
    { f: { en: "Cardiac muscle vs skeletal muscle", ar: "العضلة القلبية مقابل الهيكلية" }, b: { en: "Both striated; cardiac is INVOLUNTARY and acts as a single unit (functional syncytium).", ar: "كلاهما مخطط؛ القلبية لا إرادية وتعمل كوحدة واحدة (مخلوي وظيفي)." } },
    { f: { en: "Intercalated discs", ar: "الأقراص البينية" }, b: { en: "Junctions between cardiac cells that make cardiac muscle act as a functional syncytium.", ar: "وصلات بين الخلايا القلبية تجعل العضلة القلبية تعمل كمخلوي وظيفي." } },
    { f: { en: "Contractile fibers (99%)", ar: "الألياف الانقباضية (99%)" }, b: { en: "Responsible for the pumping action; present in atria and ventricles.", ar: "مسؤولة عن عملية الضخ؛ موجودة في الأذينين والبطينين." } },
    { f: { en: "Non-contractile fibers (1%)", ar: "الألياف غير الانقباضية (1%)" }, b: { en: "Initiate and conduct the excitation wave: autorhythmic (pacemaker) cells + conducting cells.", ar: "تبدأ وتوصل موجة الإثارة: خلايا ناظمة الخطى + خلايا موصلة." } },
    { f: { en: "4 properties of cardiac muscle", ar: "خصائص العضلة القلبية الأربع" }, b: { en: "Autorhythmicity, Excitability, Conductivity, Contractility.", ar: "الإيقاع الذاتي، الاستثارة، التوصيل، الانقباضية." } },
    { f: { en: "Autorhythmicity", ar: "الإيقاع الذاتي" }, b: { en: "Ability to initiate impulses (APs) spontaneously & regularly, independent of any nerve supply.", ar: "القدرة على بدء النبضات تلقائيًا وبانتظام بشكل مستقل عن أي إمداد عصبي." } },
    { f: { en: "SA node rate & rhythm", ar: "معدل وإيقاع العقدة الجيبية" }, b: { en: "90–120 beats/min → Sinus rhythm (normal pacemaker).", ar: "90–120 نبضة/دقيقة ← الإيقاع الجيبي (الناظم الطبيعي)." } },
    { f: { en: "AV node rate & rhythm", ar: "معدل وإيقاع العقدة الأذينية البطينية" }, b: { en: "60–90 beats/min → Nodal rhythm.", ar: "60–90 نبضة/دقيقة ← الإيقاع العُقدي." } },
    { f: { en: "Purkinje rate & rhythm", ar: "معدل وإيقاع ألياف بركنجي" }, b: { en: "20–40 beats/min → Idioventricular rhythm.", ar: "20–40 نبضة/دقيقة ← الإيقاع البطيني الذاتي." } },
    { f: { en: "AV node (conduction)", ar: "العقدة الأذينية البطينية (التوصيل)" }, b: { en: "The ONLY conducting pathway between atria and ventricles.", ar: "المسار الوحيد للتوصيل بين الأذينين والبطينين." } },
    { f: { en: "Bundle of His", ar: "حزمة هيس" }, b: { en: "AV bundle that gives the left bundle branch (LBB) & right bundle branch (RBB).", ar: "الحزمة الأذينية البطينية التي تعطي الفرعين الأيسر والأيمن." } },
    { f: { en: "Purkinje system", ar: "جهاز بركنجي" }, b: { en: "Fastest conduction velocity → excites the whole ventricle as one unit → powerful contraction.", ar: "أسرع سرعة توصيل ← يثير البطين كله كوحدة ← انقباض قوي." } },
    { f: { en: "Contractility", ar: "الانقباضية" }, b: { en: "Ability of cardiac muscle to generate force in response to its stimulation.", ar: "قدرة العضلة القلبية على توليد القوة استجابةً لتنبيهها." } },
    { f: { en: "Excitation–contraction coupling", ar: "اقتران الإثارة بالانقباض" }, b: { en: "AP along T-tubules → ↑ intracellular Ca²⁺ → Ca²⁺ binds troponin → actin–myosin binding → contraction.", ar: "جهد الفعل عبر الأنيبيبات ← ↑ الكالسيوم ← يرتبط بالتروبونين ← ارتباط الأكتين بالميوسين ← انقباض." } },
    { f: { en: "Ryanodine receptor (RyR)", ar: "مستقبل الريانودين" }, b: { en: "Channel on the sarcoplasmic reticulum that releases Ca²⁺ when triggered by entering Ca²⁺.", ar: "قناة على الشبكة الساركوبلازمية تحرّر الكالسيوم عند تحفيزها بالكالسيوم الداخل." } },
    { f: { en: "How does cardiac muscle relax?", ar: "كيف ترتخي العضلة القلبية؟" }, b: { en: "Ca²⁺ unbinds troponin; pumped back into SR (ATP) and exchanged with Na⁺ out of the cell → ↓ cytosolic Ca²⁺.", ar: "ينفصل الكالسيوم عن التروبونين؛ يُضخ إلى الشبكة الساركوبلازمية ويُستبدل بالصوديوم خارج الخلية ← ↓ الكالسيوم." } }
  ]
};
