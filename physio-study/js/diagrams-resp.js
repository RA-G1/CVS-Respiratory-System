/* Interactive SVG diagrams for Lecture 20 — Respiratory System */
window.DIAGRAMS = window.DIAGRAMS || {};

/* =====================================================================
   1. Tracheobronchial Tree Explorer (Generations 0 → 23)
   ===================================================================== */
window.DIAGRAMS.airwayTree = function (mount) {
  let gen = 0;

  function getDetails(g) {
    if (g === 0) return {
      zone: "Conducting Zone", zAr: "المنطقة الموصلة", color: "#2563eb",
      name: "Trachea (Generation 0)", nameAr: "القصبة الهوائية (الجيل 0)",
      func: "Air conduction, filtration, warming & humidification, protection (NO gas exchange).",
      funcAr: "توصيل الهواء، تنقيته، تدفئته وترطيبه، والحماية (لا يحدث تبادل غازات)."
    };
    if (g === 1) return {
      zone: "Conducting Zone", zAr: "المنطقة الموصلة", color: "#2563eb",
      name: "Primary (Main) Bronchi — Right & Left (Gen 1)", nameAr: "القصبتان الرئيسيتان اليمنى واليسرى (الجيل 1)",
      func: "Conduct air from the trachea into the right and left lungs.",
      funcAr: "توصيل الهواء من القصبة الهوائية إلى الرئتين اليمنى واليسرى."
    };
    if (g <= 4) return {
      zone: "Conducting Zone", zAr: "المنطقة الموصلة", color: "#2563eb",
      name: `Lobar & Segmental Bronchi (Gen ${g})`, nameAr: `القصبات الفصية والقطعية (الجيل ${g})`,
      func: "Air conduction, warming, humidification, and mucociliary protection.",
      funcAr: "توصيل الهواء، تدفئته وترطيبه، والحماية المخاطية الهدبية."
    };
    if (g <= 15) return {
      zone: "Conducting Zone", zAr: "المنطقة الموصلة", color: "#2563eb",
      name: `Bronchioles (Gen ${g})`, nameAr: `القصيبات الهوائية (الجيل ${g})`,
      func: "Small airways without cartilage; smooth muscle regulates airway diameter.",
      funcAr: "ممرات هوائية صغيرة محاطة بعضلات ملساء تتحكم في قطر الممر."
    };
    if (g === 16) return {
      zone: "Conducting Zone (Final Division)", zAr: "المنطقة الموصلة (القسم الأخير)", color: "#1d4ed8",
      name: "Terminal Bronchioles (Gen 16)", nameAr: "القصيبات الطرفية / النهائية (الجيل 16)",
      func: "The LAST structures of the conducting zone — still no alveoli, so no gas exchange.",
      funcAr: "آخر تركيب في المنطقة الموصلة — لا توجد حويصلات بعد، لذا لا يحدث تبادل غازات."
    };
    if (g <= 19) return {
      zone: "Respiratory Zone", zAr: "المنطقة التنفسية", color: "#0891b2",
      name: `Respiratory Bronchioles (Gen ${g})`, nameAr: `القصيبات التنفسية (الجيل ${g})`,
      func: "FIRST part of the respiratory zone! Scattered alveoli appear on the walls → gas exchange begins.",
      funcAr: "أول جزء في المنطقة التنفسية! تبدأ الحويصلات بالظهور على جدرانها ← يبدأ تبادل الغازات."
    };
    if (g <= 22) return {
      zone: "Respiratory Zone", zAr: "المنطقة التنفسية", color: "#0891b2",
      name: `Alveolar Ducts (Gen ${g})`, nameAr: `القنوات السنخية (الجيل ${g})`,
      func: "Passageways completely lined with alveoli → active gas exchange.",
      funcAr: "قنوات مبطنة بالكامل بالحويصلات الهوائية ← تبادل غازات نشط."
    };
    return {
      zone: "Respiratory Zone (End)", zAr: "المنطقة التنفسية (النهاية)", color: "#0e7490",
      name: "Alveolar Sacs & Alveoli (Gen 23)", nameAr: "الأكياس السنخية والحويصلات الهوائية (الجيل 23)",
      func: "Clusters of alveoli (~300 million total) surrounded by pulmonary capillaries — main site of gas exchange!",
      funcAr: "تجمعات من الحويصلات الهوائية محاطة بالشعيرات الدموية الرئوية — الموقع الرئيسي لتبادل الغازات!"
    };
  }

  mount.innerHTML = `
    <div class="range-wrap">
      <span style="font-weight:700;font-size:.85rem">Gen 0 (Trachea)</span>
      <input type="range" min="0" max="23" value="0" id="aw-range"/>
      <span style="font-weight:700;font-size:.85rem">Gen 23 (Alveolar sacs)</span>
    </div>
    <div class="btn-row" style="margin-bottom:10px">
      <button class="btn sm" data-g="0">0: Trachea</button>
      <button class="btn sm" data-g="1">1: Primary Bronchi</button>
      <button class="btn sm" data-g="16">16: Terminal Bronchioles</button>
      <button class="btn sm" data-g="17">17: Respiratory Bronchioles</button>
      <button class="btn sm" data-g="21">21: Alveolar Ducts</button>
      <button class="btn sm" data-g="23">23: Alveolar Sacs</button>
    </div>
    <div class="info-panel" id="aw-info"></div>
  `;

  const rng = mount.querySelector("#aw-range");
  const info = mount.querySelector("#aw-info");
  const qBtns = mount.querySelectorAll("[data-g]");

  function render() {
    rng.value = gen;
    const d = getDetails(gen);
    const branches = gen <= 20 ? Math.pow(2, gen).toLocaleString() : ("~" + Math.round(Math.pow(2, gen) / 1e6) + " million");
    info.innerHTML = `
      <span class="step-badge" style="background:${d.color}">${d.zone} — ${d.zAr}</span>
      <h4><span class="en">${d.name}</span><span class="ar">${d.nameAr}</span></h4>
      <div class="bi">
        <span class="en"><b>Function:</b> ${d.func}<br><small style="color:var(--muted)">Approx. number of tubes at generation ${gen}: <b>${branches}</b></small></span>
        <span class="ar"><b>الوظيفة:</b> ${d.funcAr}</span>
      </div>
    `;
  }

  rng.addEventListener("input", e => { gen = Number(e.target.value); render(); });
  qBtns.forEach(b => b.addEventListener("click", () => { gen = Number(b.dataset.g); render(); }));
  render();
};

/* =====================================================================
   2. Alveolus & Surfactant Simulator (Type I vs Type II Pneumocytes)
   ===================================================================== */
window.DIAGRAMS.alveolus = function (mount) {
  let surfOn = true;

  mount.innerHTML = `
    <div class="btn-row" style="margin-bottom:12px">
      <label class="switch">
        <input type="checkbox" id="al-surf" checked/>
        <span class="tr"></span>
        <span>Pulmonary Surfactant (from Type II Pneumocytes — 5%)</span>
      </label>
    </div>
    <div class="diagram-grid">
      <svg class="diagram-svg" viewBox="0 0 380 230" id="al-svg"></svg>
      <div class="info-panel" id="al-info"></div>
    </div>
  `;

  const chk = mount.querySelector("#al-surf");
  const svg = mount.querySelector("#al-svg");
  const info = mount.querySelector("#al-info");

  function render() {
    const r = surfOn ? 74 : 34;
    svg.innerHTML = `
      <rect x="4" y="4" width="372" height="222" rx="14" fill="#f8fafc"/>
      <!-- Pulmonary Capillary -->
      <path d="M35,195 Q190,220 345,195" stroke="#ef4444" stroke-width="22" fill="none" stroke-linecap="round"/>
      <text x="190" y="200" fill="#fff" font-size="10.5" font-weight="700" text-anchor="middle">Pulmonary Capillary (0.5 μm barrier)</text>

      <!-- Alveolus circle -->
      <circle cx="190" cy="100" r="${r}" fill="${surfOn ? "#ecfeff" : "#fee2e2"}" stroke="#0891b2" stroke-width="6"/>
      ${surfOn ? `<circle cx="190" cy="100" r="${r - 7}" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 4"/>` : ""}

      <!-- Type II cells -->
      <circle cx="${190 - r * 0.7}" cy="${100 - r * 0.7}" r="10" fill="#f59e0b" stroke="#fff" stroke-width="2"/>
      <circle cx="${190 + r * 0.7}" cy="${100 - r * 0.7}" r="10" fill="#f59e0b" stroke="#fff" stroke-width="2"/>

      <text x="190" y="96" text-anchor="middle" font-weight="800" font-size="12" fill="#0f172a">
        ${surfOn ? "Expanded Alveolus" : "COLLAPSED!"}
      </text>
      <text x="190" y="112" text-anchor="middle" font-size="10" fill="#475569">
        ${surfOn ? "Low Surface Tension" : "High Surface Tension"}
      </text>
    `;

    info.innerHTML = surfOn ? `
      <span class="step-badge" style="background:#16a34a">With Surfactant — Normal Healthy Alveolus</span>
      <h4><span class="en">Type I (95%) + Type II (5%) Working Together</span><span class="ar">خلايا النوع الأول (95%) والنوع الثاني (5%) تعمل معًا</span></h4>
      <div class="bi">
        <span class="en">• <b>Type I pneumocytes (95%, blue wall)</b>: flat cells that allow rapid diffusion of O₂ and CO₂.<br>• <b>Type II pneumocytes (5%, orange)</b>: secrete <b>pulmonary surfactant</b>, which <b>decreases surface tension</b> and <b>prevents collapse of the alveoli</b>.</span>
        <span class="ar">• <b>خلايا النوع الأول (95%)</b>: خلايا مسطحة تسمح بانتقال الغازات.<br>• <b>خلايا النوع الثاني (5%)</b>: تفرز <b>السورفاكتانت الرئوي</b> الذي <b>يقلل التوتر السطحي ويمنع انخماص الحويصلات</b>.</span>
      </div>
    ` : `
      <span class="step-badge" style="background:#dc2626">No Surfactant — Alveolar Collapse!</span>
      <h4><span class="en">High Surface Tension Collapses the Alveolus</span><span class="ar">ارتفاع التوتر السطحي يؤدي لانخماص الحويصلة</span></h4>
      <div class="bi">
        <span class="en">Without <b>pulmonary surfactant</b> (e.g. in premature infants), the fluid lining the alveoli creates high <b>surface tension</b> that pulls the walls inward and causes the alveoli to <b>collapse</b>.</span>
        <span class="ar">بدون <b>السورفاكتانت الرئوي</b>، يرتفع <b>التوتر السطحي</b> للسائل المبطن للحويصلات مما يؤدي إلى <b>انخماصها (انهيارها)</b> وصعوبة التنفس.</span>
      </div>
    `;
  }

  chk.addEventListener("change", e => { surfOn = e.target.checked; render(); });
  render();
};

/* =====================================================================
   3. Interactive Breathing & Pressures Simulator (Slides 11–14)
   ===================================================================== */
window.DIAGRAMS.breathingSim = function (mount) {
  let phase = "rest"; // "rest" | "insp" | "exp"

  const states = {
    rest: {
      badge: "Before Inspiration (At Rest — Equilibrated)",
      badgeAr: "قبل الشهيق (وقت الراحة — توازن)",
      muscles: "Diaphragm & external intercostals RELAXED",
      musclesAr: "الحجاب الحاجز والعضلات الوربية الخارجية في حالة ارتخاء",
      palv: "0 mmHg (760 mmHg)",
      ipp: "−4 mmHg (756 mmHg)",
      flow: "No net movement of air (Palv = Patm = 760)",
      flowAr: "لا توجد حركة صافية للهواء (الضغط متساوٍ = 760)",
      lungR: 62, diaphY: 185, arrow: ""
    },
    insp: {
      badge: "During Normal Inspiration (ACTIVE Process ⚡)",
      badgeAr: "أثناء الشهيق الطبيعي (عملية نشطة ⚡)",
      muscles: "Diaphragm & external intercostals CONTRACT → thorax expands",
      musclesAr: "انقباض الحجاب الحاجز والعضلات الوربية الخارجية ← توسع الصدر",
      palv: "−1 mmHg (759 mmHg)",
      ipp: "−6 mmHg (754 mmHg) [Slide 14 text: −4 mmHg]",
      flow: "Air flows IN from atmosphere (760) → alveoli (759)",
      flowAr: "يتدفق الهواء للداخل من الجو (760) ← الحويصلات (759)",
      lungR: 78, diaphY: 205, arrow: "in"
    },
    exp: {
      badge: "During Normal Quiet Expiration (PASSIVE Process 🍃)",
      badgeAr: "أثناء الزفير الهادئ الطبيعي (عملية سلبية 🍃)",
      muscles: "Inspiratory muscles RELAX + Elastic recoil of lungs & chest wall",
      musclesAr: "ارتخاء عضلات الشهيق + الارتداد المرن للرئتين وجدار الصدر",
      palv: "+1 mmHg (761 mmHg)",
      ipp: "−4 mmHg (756 mmHg) [Slide 14 text: −6 mmHg]",
      flow: "Air flows OUT from alveoli (761) → atmosphere (760)",
      flowAr: "يتدفق الهواء للخارج من الحويصلات (761) ← الجو (760)",
      lungR: 56, diaphY: 178, arrow: "out"
    }
  };

  mount.innerHTML = `
    <div class="btn-row" style="margin-bottom:12px">
      <button class="btn primary" data-p="rest">1. At Rest (760 / 756)</button>
      <button class="btn" data-p="insp">2. Inspiration (−1 mmHg / 759)</button>
      <button class="btn" data-p="exp">3. Expiration (+1 mmHg / 761)</button>
    </div>
    <div class="diagram-grid">
      <svg class="diagram-svg" viewBox="0 0 360 230" id="br-svg"></svg>
      <div>
        <div class="gauge-row" id="br-gauges" style="margin-bottom:10px"></div>
        <div class="info-panel" id="br-info"></div>
      </div>
    </div>
  `;

  const btns = mount.querySelectorAll("[data-p]");
  const svg = mount.querySelector("#br-svg");
  const gauges = mount.querySelector("#br-gauges");
  const info = mount.querySelector("#br-info");

  function render() {
    const s = states[phase];
    btns.forEach(b => b.classList.toggle("primary", b.dataset.p === phase));

    svg.innerHTML = `
      <rect x="4" y="4" width="352" height="222" rx="14" fill="#f8fafc"/>
      <text x="180" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">Patm = 760 mmHg (0 mmHg)</text>

      <!-- Trachea tube -->
      <rect x="168" y="26" width="24" height="55" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>

      <!-- Pleural sac (outer circle) -->
      <circle cx="180" cy="128" r="${s.lungR + 14}" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
      <!-- Lung / Alveolus (inner circle) -->
      <circle cx="180" cy="128" r="${s.lungR}" fill="#fecdd3" stroke="#e11d48" stroke-width="2.5"/>

      <!-- Airflow arrow -->
      ${s.arrow === "in" ? `<line x1="180" y1="28" x2="180" y2="95" stroke="#dc2626" stroke-width="4" stroke-dasharray="5 3"/><polygon points="180,103 173,90 187,90" fill="#dc2626"/>` : ""}
      ${s.arrow === "out" ? `<line x1="180" y1="100" x2="180" y2="34" stroke="#2563eb" stroke-width="4" stroke-dasharray="5 3"/><polygon points="180,25 173,38 187,38" fill="#2563eb"/>` : ""}

      <text x="180" y="128" text-anchor="middle" font-size="12" font-weight="800" fill="#881337">Palv: ${s.palv.split(" ")[0]}</text>
      <text x="180" y="${128 + s.lungR + 10}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e40af">IPP: ${s.ipp.split(" ")[0]}</text>

      <!-- Diaphragm curve -->
      <path d="M70,210 Q180,${s.diaphY} 290,210" fill="none" stroke="#b45309" stroke-width="5" stroke-linecap="round"/>
      <text x="305" y="212" font-size="10" font-weight="700" fill="#b45309">Diaphragm</text>
    `;

    gauges.innerHTML = `
      <div class="gauge">
        <div class="lbl">Intra-alveolar Pressure</div>
        <div class="val" style="font-size:1.1rem;color:#e11d48">${s.palv}</div>
      </div>
      <div class="gauge">
        <div class="lbl">Intrapleural Pressure (IPP)</div>
        <div class="val" style="font-size:1.1rem;color:#2563eb">${s.ipp.split("[")[0]}</div>
      </div>
    `;

    info.innerHTML = `
      <h4><span class="en">${s.badge}</span><span class="ar">${s.badgeAr}</span></h4>
      <div class="bi">
        <span class="en">• <b>Muscles:</b> ${s.muscles}<br>• <b>Airflow:</b> ${s.flow}</span>
        <span class="ar">• <b>العضلات:</b> ${s.musclesAr}<br>• <b>حركة الهواء:</b> ${s.flowAr}</span>
      </div>
    `;
  }

  btns.forEach(b => b.addEventListener("click", () => { phase = b.dataset.p; render(); }));
  render();
};

/* =====================================================================
   4. Alveolar–Capillary Gas Exchange (Slides 16–18)
   ===================================================================== */
window.DIAGRAMS.gasExchange = function (mount) {
  mount.innerHTML = `
    <div class="diagram-grid">
      <svg class="diagram-svg" viewBox="0 0 420 220">
        <defs>
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563eb"/>
            <stop offset="50%" stop-color="#9333ea"/>
            <stop offset="100%" stop-color="#dc2626"/>
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="412" height="212" rx="14" fill="#0f172a"/>

        <!-- Alveolus -->
        <circle cx="210" cy="82" r="64" fill="#fef9c3" stroke="#facc15" stroke-width="3"/>
        <text x="210" y="48" text-anchor="middle" font-size="12" font-weight="800" fill="#713f12">ALVEOLAR AIR</text>
        <text x="210" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">High PO₂ &amp; Low PCO₂</text>

        <!-- Capillary -->
        <path d="M25,175 Q210,155 395,175" stroke="url(#capGrad)" stroke-width="30" fill="none" stroke-linecap="round"/>
        <text x="75" y="148" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">Blood IN (Pulm. Artery)</text>
        <text x="75" y="160" fill="#bfdbfe" font-size="9.5" text-anchor="middle">Low PO₂, High PCO₂</text>

        <text x="345" y="148" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">Blood OUT (Pulm. Vein)</text>
        <text x="345" y="160" fill="#fecaca" font-size="9.5" text-anchor="middle">High PO₂, Low PCO₂</text>

        <!-- Diffusion arrows -->
        <line x1="185" y1="105" x2="185" y2="165" stroke="#dc2626" stroke-width="4"/>
        <polygon points="185,172 179,160 191,160" fill="#dc2626"/>
        <text x="155" y="132" fill="#dc2626" font-size="12" font-weight="800">O₂ in</text>

        <line x1="235" y1="165" x2="235" y2="105" stroke="#2563eb" stroke-width="4"/>
        <polygon points="235,98 229,110 241,110" fill="#2563eb"/>
        <text x="270" y="132" fill="#2563eb" font-size="12" font-weight="800">CO₂ out</text>

        <text x="210" y="206" fill="#e2e8f0" font-size="10.5" font-weight="600" text-anchor="middle">
          Simple Diffusion down Partial Pressure Gradient across Alveolar–Capillary Membrane
        </text>
      </svg>

      <div class="info-panel">
        <h4><span class="en">Gas Exchange in the Lungs</span><span class="ar">تبادل الغازات في الرئتين</span></h4>
        <div class="bi">
          <span class="en">
            • <b>Mechanism:</b> Simple diffusion down the <b>partial pressure gradient</b> (from high → low partial pressure).<br>
            • <b>Blood entering</b> pulmonary capillaries has <b>low PO₂ &amp; high PCO₂</b>.<br>
            • <b>Alveolar air</b> has <b>high PO₂ &amp; low PCO₂</b>.<br>
            • <b>Result:</b> <b style="color:#dc2626">O₂ diffuses from alveoli → blood</b>, and <b style="color:#2563eb">CO₂ diffuses from blood → alveoli</b> across the alveolar–capillary membrane.
          </span>
          <span class="ar">
            • <b>الآلية:</b> انتشار بسيط مع <b>تدرج الضغط الجزئي</b> (من الضغط الجزئي المرتفع ← المنخفض).<br>
            • <b>الدم الداخل</b> للشعيرات الرئوية ذو <b>PO₂ منخفض و PCO₂ مرتفع</b>.<br>
            • <b>الهواء السنخي</b> ذو <b>PO₂ مرتفع و PCO₂ منخفض</b>.<br>
            • <b>النتيجة:</b> ينتشر <b style="color:#dc2626">O₂ من الحويصلات ← الدم</b>، وينتشر <b style="color:#2563eb">CO₂ من الدم ← الحويصلات</b> عبر الغشاء السنخي الشعيري.
          </span>
        </div>
      </div>
    </div>
  `;
};
