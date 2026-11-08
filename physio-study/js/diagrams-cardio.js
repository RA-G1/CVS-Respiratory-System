/* Interactive SVG diagrams for Lecture 19 — Cardiovascular System */
window.DIAGRAMS = window.DIAGRAMS || {};

/* =====================================================================
   1. Interactive Heart Flow (Chambers, Valves & Vessels — 10 steps)
   ===================================================================== */
window.DIAGRAMS.heartFlow = function (mount) {
  const steps = [
    { id: "vc", name: { en: "1. Superior & Inferior Vena Cava", ar: "1. الوريدان الأجوفان العلوي والسفلي" },
      desc: { en: "Large veins that return <b>deoxygenated blood</b> (low O₂, high CO₂) from the upper and lower body to the right atrium.",
              ar: "وريدان كبيران يعيدان <b>الدم غير المؤكسج</b> (منخفض O₂، مرتفع CO₂) من الجزء العلوي والسفلي للجسم إلى الأذين الأيمن." } },
    { id: "ra", name: { en: "2. Right Atrium (RA)", ar: "2. الأذين الأيمن" },
      desc: { en: "Receives deoxygenated blood from the body via the venae cavae and pumps it through the tricuspid valve into the right ventricle.",
              ar: "يستقبل الدم غير المؤكسج من الجسم عبر الوريدين الأجوفين ويدفعه عبر الصمام ثلاثي الشرف إلى البطين الأيمن." } },
    { id: "tv", name: { en: "3. Tricuspid Valve (Right A-V Valve)", ar: "3. الصمام ثلاثي الشرف" },
      desc: { en: "Located between the right atrium and right ventricle. Prevents backflow of blood into the right atrium during ventricular systole.",
              ar: "يقع بين الأذين الأيمن والبطين الأيمن. يمنع ارتجاع الدم إلى الأذين الأيمن أثناء انقباض البطين." } },
    { id: "rv", name: { en: "4. Right Ventricle (RV)", ar: "4. البطين الأيمن" },
      desc: { en: "Pumps deoxygenated blood through the pulmonary semilunar valve into the pulmonary artery towards the lungs.",
              ar: "يضخ الدم غير المؤكسج عبر الصمام الهلالي الرئوي إلى الشريان الرئوي باتجاه الرئتين." } },
    { id: "pv_valve", name: { en: "5. Pulmonary Semilunar Valve", ar: "5. الصمام الرئوي الهلالي" },
      desc: { en: "At the exit of the right ventricle. Opens in systole to let blood enter the pulmonary artery; closes in diastole to prevent backflow.",
              ar: "عند مخرج البطين الأيمن. يفتح أثناء الانقباض ليمر الدم إلى الشريان الرئوي، ويغلق أثناء الانبساط لمنع رجوعه." } },
    { id: "pa", name: { en: "6. Pulmonary Artery → Lungs", ar: "6. الشريان الرئوي ← الرئتين" },
      desc: { en: "Carries <b>deoxygenated blood AWAY from the heart</b> to the lungs, where CO₂ is dropped off and O₂ is picked up.",
              ar: "يحمل <b>الدم غير المؤكسج بعيدًا عن القلب</b> إلى الرئتين، حيث يتخلص من CO₂ ويحصل على O₂." } },
    { id: "pvein", name: { en: "7. Pulmonary Veins (from Lungs)", ar: "7. الأوردة الرئوية (من الرئتين)" },
      desc: { en: "Four veins that bring freshly <b>oxygenated blood</b> from the lungs back TO the left atrium of the heart.",
              ar: "أربعة أوردة تعيد <b>الدم المؤكسج</b> من الرئتين إلى الأذين الأيسر للقلب." } },
    { id: "la", name: { en: "8. Left Atrium (LA)", ar: "8. الأذين الأيسر" },
      desc: { en: "Receives oxygenated blood from the pulmonary veins and delivers it through the mitral (bicuspid) valve into the left ventricle.",
              ar: "يستقبل الدم المؤكسج من الأوردة الرئوية ويمرره عبر الصمام التاجي (ثنائي الشرف) إلى البطين الأيسر." } },
    { id: "mv", name: { en: "9. Mitral (Bicuspid) Valve", ar: "9. الصمام التاجي (ثنائي الشرف)" },
      desc: { en: "Left A-V valve between left atrium and left ventricle. Prevents backflow into the left atrium during ventricular systole.",
              ar: "الصمام الأذيني البطيني الأيسر. يمنع ارتجاع الدم إلى الأذين الأيسر أثناء الانقباض البطيني." } },
    { id: "lv_aorta", name: { en: "10. Left Ventricle → Aortic Valve → Aorta", ar: "10. البطين الأيسر ← الصمام الأبهري ← الأبهر" },
      desc: { en: "The thick-walled <b>left ventricle</b> pumps oxygenated blood through the <b>aortic semilunar valve</b> into the <b>aorta</b> to supply the entire body.",
              ar: "يضخ <b>البطين الأيسر</b> ذو الجدار السميك الدم المؤكسج عبر <b>الصمام الأبهري الهلالي</b> إلى <b>الشريان الأبهر</b> لتغذية الجسم كله." } }
  ];

  let cur = 0;
  let timer = null;

  mount.innerHTML = `
    <div class="diagram-grid">
      <div>
        <svg class="diagram-svg" viewBox="0 0 440 330" aria-label="Interactive heart diagram">
          <defs>
            <marker id="arr-b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9 z" fill="#93c5fd"/>
            </marker>
            <marker id="arr-r" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0,1 L9,5 L0,9 z" fill="#fecaca"/>
            </marker>
          </defs>
          <!-- Background badge -->
          <rect x="6" y="6" width="428" height="318" rx="16" fill="#0f172a"/>
          <text x="20" y="26" fill="#94a3b8" font-size="11" font-weight="600">ANATOMICAL VIEW (Right of body = Left of screen)</text>

          <!-- Vena Cavae (Step 0) -->
          <g class="clickable hf-part" data-idx="0">
            <path d="M105,35 L105,115 M105,235 L105,305" stroke="#2563eb" stroke-width="24" stroke-linecap="round"/>
            <path d="M105,45 L105,100" stroke="#93c5fd" stroke-width="2.5" marker-end="url(#arr-b)"/>
            <path d="M105,295 L105,250" stroke="#93c5fd" stroke-width="2.5" marker-end="url(#arr-b)"/>
            <text x="64" y="55" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="end">Superior Vena Cava</text>
            <text x="64" y="295" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="end">Inferior Vena Cava</text>
          </g>

          <!-- Pulmonary Artery (Step 5) -->
          <g class="clickable hf-part" data-idx="5">
            <path d="M195,140 C195,70 165,55 135,55" stroke="#1d4ed8" stroke-width="20" fill="none" stroke-linecap="round"/>
            <path d="M190,125 C188,80 168,60 142,56" stroke="#93c5fd" stroke-width="2.2" fill="none" marker-end="url(#arr-b)"/>
            <text x="145" y="40" fill="#60a5fa" font-size="10.5" font-weight="700">Pulmonary Artery → Lungs</text>
          </g>

          <!-- Aorta (Step 9) -->
          <g class="clickable hf-part" data-idx="9">
            <path d="M235,145 C235,45 295,45 305,105" stroke="#dc2626" stroke-width="22" fill="none" stroke-linecap="round"/>
            <path d="M237,130 C240,60 285,55 300,95" stroke="#fecaca" stroke-width="2.2" fill="none" marker-end="url(#arr-r)"/>
            <text x="315" y="52" fill="#f87171" font-size="11" font-weight="800">Aorta → Body</text>
          </g>

          <!-- Pulmonary Veins (Step 6) -->
          <g class="clickable hf-part" data-idx="6">
            <path d="M350,115 L395,100 M350,138 L395,135" stroke="#ef4444" stroke-width="14" stroke-linecap="round"/>
            <path d="M390,102 L356,113" stroke="#fecaca" stroke-width="2" marker-end="url(#arr-r)"/>
            <text x="400" y="122" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="end">Pulmonary Veins</text>
          </g>

          <!-- Right Atrium (Step 1) -->
          <g class="clickable hf-part" data-idx="1">
            <path d="M95,110 C75,130 75,180 110,190 L165,185 L160,115 Z" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
            <text x="122" y="152" fill="#fff" font-size="12" font-weight="800" text-anchor="middle">RA</text>
            <text x="122" y="166" fill="#bfdbfe" font-size="9" text-anchor="middle">Right Atrium</text>
          </g>

          <!-- Right Ventricle (Step 3) -->
          <g class="clickable hf-part" data-idx="3">
            <path d="M110,196 C105,245 145,285 215,295 L210,185 L165,190 Z" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2"/>
            <path d="M145,215 C155,250 185,250 192,190" stroke="#93c5fd" stroke-width="2.2" fill="none" marker-end="url(#arr-b)" class="flow-dash"/>
            <text x="162" y="255" fill="#fff" font-size="12" font-weight="800" text-anchor="middle">RV</text>
          </g>

          <!-- Left Atrium (Step 7) -->
          <g class="clickable hf-part" data-idx="7">
            <path d="M265,112 L345,105 C365,125 360,175 330,185 L265,182 Z" fill="#b91c1c" stroke="#fca5a5" stroke-width="2"/>
            <text x="312" y="148" fill="#fff" font-size="12" font-weight="800" text-anchor="middle">LA</text>
            <text x="312" y="162" fill="#fecaca" font-size="9" text-anchor="middle">Left Atrium</text>
          </g>

          <!-- Left Ventricle (Step 9) -->
          <g class="clickable hf-part" data-idx="9">
            <path d="M222,185 L328,190 C340,245 290,295 222,298 Z" fill="#dc2626" stroke="#fca5a5" stroke-width="4"/>
            <path d="M295,210 C285,255 255,255 245,190" stroke="#fecaca" stroke-width="2.2" fill="none" marker-end="url(#arr-r)" class="flow-dash"/>
            <text x="278" y="255" fill="#fff" font-size="12" font-weight="800" text-anchor="middle">LV</text>
          </g>

          <!-- Septum -->
          <rect x="210" y="182" width="12" height="114" rx="5" fill="#7f1d1d"/>

          <!-- Tricuspid Valve (Step 2) -->
          <g class="clickable hf-part" data-idx="2">
            <rect x="115" y="183" width="44" height="12" rx="6" fill="#facc15" stroke="#0f172a" stroke-width="1.5"/>
            <text x="137" y="192" fill="#0f172a" font-size="8.5" font-weight="800" text-anchor="middle">Tricuspid</text>
          </g>

          <!-- Pulmonary Valve (Step 4) -->
          <g class="clickable hf-part" data-idx="4">
            <rect x="176" y="142" width="38" height="12" rx="6" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5"/>
            <text x="195" y="151" fill="#0f172a" font-size="8" font-weight="800" text-anchor="middle">Pulm. V</text>
          </g>

          <!-- Mitral Valve (Step 8) -->
          <g class="clickable hf-part" data-idx="8">
            <rect x="275" y="181" width="44" height="12" rx="6" fill="#facc15" stroke="#0f172a" stroke-width="1.5"/>
            <text x="297" y="190" fill="#0f172a" font-size="8.5" font-weight="800" text-anchor="middle">Mitral</text>
          </g>

          <!-- Aortic Valve (Step 9) -->
          <g class="clickable hf-part" data-idx="9">
            <rect x="220" y="142" width="38" height="12" rx="6" fill="#fb7185" stroke="#0f172a" stroke-width="1.5"/>
            <text x="239" y="151" fill="#0f172a" font-size="8" font-weight="800" text-anchor="middle">Aortic V</text>
          </g>
        </svg>
        <div class="legend">
          <span><i style="background:#2563eb"></i>Deoxygenated (Right side)</span>
          <span><i style="background:#dc2626"></i>Oxygenated (Left side)</span>
          <span><i style="background:#facc15"></i>A-V Valves</span>
        </div>
      </div>

      <div>
        <div class="info-panel" id="hf-info"></div>
        <div class="btn-row" style="margin-top:12px">
          <button class="btn sm" id="hf-prev">← Prev</button>
          <button class="btn sm primary" id="hf-play">▶ Auto-Trace</button>
          <button class="btn sm" id="hf-next">Next →</button>
        </div>
      </div>
    </div>
  `;

  const info = mount.querySelector("#hf-info");
  const parts = mount.querySelectorAll(".hf-part");
  const playBtn = mount.querySelector("#hf-play");

  function render() {
    const s = steps[cur];
    info.innerHTML = `
      <span class="step-badge">Step ${cur + 1} / ${steps.length}</span>
      <h4><span class="en">${s.name.en}</span><span class="ar">${s.name.ar}</span></h4>
      <div class="bi"><span class="en">${s.desc.en}</span><span class="ar">${s.desc.ar}</span></div>
    `;
    parts.forEach(p => {
      const idx = Number(p.dataset.idx);
      p.classList.toggle("sel", idx === cur);
    });
  }

  parts.forEach(p => p.addEventListener("click", () => {
    stop();
    cur = Number(p.dataset.idx);
    render();
  }));

  function stop() {
    if (timer) { clearInterval(timer); timer = null; playBtn.textContent = "▶ Auto-Trace"; }
  }

  mount.querySelector("#hf-prev").addEventListener("click", () => { stop(); cur = (cur - 1 + steps.length) % steps.length; render(); });
  mount.querySelector("#hf-next").addEventListener("click", () => { stop(); cur = (cur + 1) % steps.length; render(); });
  playBtn.addEventListener("click", () => {
    if (timer) { stop(); return; }
    playBtn.textContent = "⏸ Pause";
    timer = setInterval(() => { cur = (cur + 1) % steps.length; render(); }, 2200);
  });

  render();
};

/* =====================================================================
   2. Valve Simulator — Ventricular Systole vs Diastole
   ===================================================================== */
window.DIAGRAMS.valves = function (mount) {
  let phase = "systole"; // "systole" | "diastole"

  mount.innerHTML = `
    <div class="btn-row" style="margin-bottom:14px">
      <button class="btn primary" id="v-sys">Ventricular Systole (Contraction) / الانقباض البطيني</button>
      <button class="btn" id="v-dia">Ventricular Diastole (Relaxation) / الانبساط البطيني</button>
    </div>
    <div class="valve-grid" id="v-cards"></div>
    <div class="info-panel" id="v-exp" style="margin-top:12px"></div>
  `;

  const sysBtn = mount.querySelector("#v-sys");
  const diaBtn = mount.querySelector("#v-dia");
  const cards = mount.querySelector("#v-cards");
  const exp = mount.querySelector("#v-exp");

  function render() {
    const isSys = phase === "systole";
    sysBtn.classList.toggle("primary", isSys);
    diaBtn.classList.toggle("primary", !isSys);

    const list = [
      { name: "Tricuspid Valve", ar: "الصمام ثلاثي الشرف", group: "A-V Valve (RA ↔ RV)", open: !isSys },
      { name: "Mitral (Bicuspid) Valve", ar: "الصمام التاجي", group: "A-V Valve (LA ↔ LV)", open: !isSys },
      { name: "Pulmonary Valve", ar: "الصمام الرئوي", group: "Semilunar (RV → PA)", open: isSys },
      { name: "Aortic Valve", ar: "الصمام الأبهري", group: "Semilunar (LV → Aorta)", open: isSys }
    ];

    cards.innerHTML = list.map(v => `
      <div class="valve-card ${v.open ? "open" : "closed"}">
        <svg viewBox="0 0 80 80" width="66" height="66" style="margin:0 auto">
          <circle cx="40" cy="40" r="34" fill="${v.open ? "#dcfce7" : "#fee2e2"}" stroke="${v.open ? "#16a34a" : "#dc2626"}" stroke-width="3"/>
          ${v.open
            ? `<circle cx="40" cy="40" r="18" fill="#16a34a"/><text x="40" y="44" fill="#fff" font-size="10" font-weight="800" text-anchor="middle">FLOW</text>`
            : `<line x1="18" y1="40" x2="62" y2="40" stroke="#dc2626" stroke-width="4"/><line x1="40" y1="18" x2="40" y2="62" stroke="#dc2626" stroke-width="4"/>`}
        </svg>
        <div class="state">${v.open ? "OPEN / مفتوح" : "CLOSED / مغلق"}</div>
        <h5>${v.name}</h5>
        <div class="ar" style="text-align:center;font-size:.82rem">${v.ar}</div>
        <small>${v.group}</small>
      </div>
    `).join("");

    exp.innerHTML = isSys ? `
      <h4><span class="en">During Ventricular Systole (Contraction)</span><span class="ar">أثناء الانقباض البطيني</span></h4>
      <div class="bi">
        <span class="en">• <b>A-V valves (Tricuspid &amp; Mitral) CLOSE</b> to <b>prevent backflow</b> of blood from ventricles to atria.<br>• <b>Semilunar valves (Pulmonary &amp; Aortic) OPEN</b> to eject blood from ventricles into the pulmonary artery and aorta.</span>
        <span class="ar">• <b>تُغلق الصمامات الأذينية البطينية (ثلاثي الشرف والتاجي)</b> <b>لمنع ارتجاع الدم</b> من البطينين إلى الأذينين.<br>• <b>تُفتح الصمامات الهلالية (الرئوي والأبهري)</b> لضخ الدم من البطينين إلى الشريان الرئوي والأبهر.</span>
      </div>
    ` : `
      <h4><span class="en">During Ventricular Diastole (Relaxation &amp; Filling)</span><span class="ar">أثناء الانبساط البطيني (الارتخاء والامتلاء)</span></h4>
      <div class="bi">
        <span class="en">• <b>Semilunar valves (Pulmonary &amp; Aortic) CLOSE</b> to <b>prevent backflow</b> of blood from the aorta and pulmonary artery into the relaxing ventricles.<br>• <b>A-V valves (Tricuspid &amp; Mitral) OPEN</b> so blood flows from atria into ventricles.</span>
        <span class="ar">• <b>تُغلق الصمامات الهلالية (الرئوي والأبهري)</b> <b>لمنع ارتجاع الدم</b> من الأبهر والشريان الرئوي إلى البطينين.<br>• <b>تُفتح الصمامات الأذينية البطينية</b> ليتدفق الدم من الأذينين إلى البطينين.</span>
      </div>
    `;
  }

  sysBtn.addEventListener("click", () => { phase = "systole"; render(); });
  diaBtn.addEventListener("click", () => { phase = "diastole"; render(); });
  render();
};

/* =====================================================================
   3. Blood Vessels Explorer
   ===================================================================== */
window.DIAGRAMS.vessels = function (mount) {
  const items = [
    { name: { en: "Arteries (& Arterioles)", ar: "الشرايين (والشُرَيّنات)" }, color: "#dc2626",
      en: "Carry blood <b>AWAY from the heart</b> under high pressure to supply tissues.",
      ar: "تحمل الدم <b>بعيدًا عن القلب</b> تحت ضغط مرتفع لتغذية الأنسجة." },
    { name: { en: "Capillaries", ar: "الشعيرات الدموية" }, color: "#9333ea",
      en: "Microscopic thin-walled vessels where <b>nutrient and gas exchange</b> occur between blood and tissues.",
      ar: "أوعية مجهرية رقيقة الجدران يحدث فيها <b>تبادل المواد الغذائية والغازات</b> بين الدم والأنسجة." },
    { name: { en: "Veins (& Venules)", ar: "الأوردة (والوُرَيدات)" }, color: "#2563eb",
      en: "Carry blood <b>TOWARDS the heart</b> after it has passed through the tissues.",
      ar: "تحمل الدم <b>نحو القلب</b> بعد مروره عبر الأنسجة." }
  ];
  let idx = 0;

  mount.innerHTML = `
    <div class="diagram-grid">
      <svg class="diagram-svg" viewBox="0 0 420 150">
        <!-- Artery -->
        <g class="clickable vs-node" data-i="0">
          <rect x="12" y="35" width="115" height="65" rx="14" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
          <text x="70" y="65" text-anchor="middle" font-weight="800" font-size="13" fill="#991b1b">Arteries</text>
          <text x="70" y="83" text-anchor="middle" font-size="10" fill="#b91c1c">Away from Heart →</text>
        </g>
        <!-- Capillaries -->
        <g class="clickable vs-node" data-i="1">
          <rect x="152" y="25" width="116" height="85" rx="14" fill="#f3e8ff" stroke="#9333ea" stroke-width="3"/>
          <path d="M162,55 H258 M162,70 H258 M162,85 H258" stroke="#9333ea" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="210" y="45" text-anchor="middle" font-weight="800" font-size="13" fill="#6b21a8">Capillaries</text>
          <text x="210" y="102" text-anchor="middle" font-size="9.5" fill="#7e22ce">O₂ / Nutrients ⇄ CO₂</text>
        </g>
        <!-- Veins -->
        <g class="clickable vs-node" data-i="2">
          <rect x="293" y="35" width="115" height="65" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
          <text x="350" y="65" text-anchor="middle" font-weight="800" font-size="13" fill="#1e40af">Veins</text>
          <text x="350" y="83" text-anchor="middle" font-size="10" fill="#1d4ed8">→ Towards Heart</text>
        </g>
        <path d="M129,67 H150 M270,67 H291" stroke="#64748b" stroke-width="3"/>
      </svg>
      <div class="info-panel" id="vs-info"></div>
    </div>
  `;

  const info = mount.querySelector("#vs-info");
  const nodes = mount.querySelectorAll(".vs-node");
  function render() {
    const it = items[idx];
    info.innerHTML = `
      <h4 style="color:${it.color}"><span class="en">${it.name.en}</span><span class="ar">${it.name.ar}</span></h4>
      <div class="bi"><span class="en">${it.en}</span><span class="ar">${it.ar}</span></div>
    `;
    nodes.forEach((n, i) => n.classList.toggle("sel", i === idx));
  }
  nodes.forEach(n => n.addEventListener("click", () => { idx = Number(n.dataset.i); render(); }));
  render();
};

/* =====================================================================
   4. Cardiac Muscle Fibers (99% Contractile vs 1% Non-contractile)
   ===================================================================== */
window.DIAGRAMS.fibers = function (mount) {
  let sel = 0;
  const data = [
    { title: { en: "99% Contractile Fibers", ar: "99% ألياف انقباضية" },
      en: "• Responsible for the <b>pumping action</b> of the heart.<br>• Present in the walls of the <b>atria and ventricles</b>.<br>• Connected by <b>intercalated discs</b> so the muscle contracts as a single unit (<b>functional syncytium</b>).",
      ar: "• مسؤولة عن <b>عملية الضخ</b> في القلب.<br>• موجودة في جدران <b>الأذينين والبطينين</b>.<br>• متصلة بواسطة <b>الأقراص البينية</b> لتعمل العضلة كوحدة واحدة (<b>مخلوي وظيفي</b>)." },
    { title: { en: "1% Non-Contractile Fibers (Conductive System)", ar: "1% ألياف غير انقباضية (جهاز التوصيل)" },
      en: "• Specialized modified fibers responsible for <b>initiation and conduction of the excitation wave</b> to all parts of the cardiac muscle.<br>• Divided into:<br>&nbsp;&nbsp;1. <b>Autorhythmic (Pacemaker) cells</b> — initiate impulses (SAN, AVN, Purkinje).<br>&nbsp;&nbsp;2. <b>Conducting cells</b> — rapidly conduct impulses through the heart.",
      ar: "• ألياف معدلة مسؤولة عن <b>بدء وتوصيل موجة الإثارة</b> إلى جميع أجزاء العضلة القلبية.<br>• تنقسم إلى:<br>&nbsp;&nbsp;1. <b>خلايا الإيقاع الذاتي (ناظمة الخطى)</b> — تبدأ النبضات.<br>&nbsp;&nbsp;2. <b>الخلايا الموصلة</b> — توصل النبضات بسرعة عبر القلب." }
  ];

  mount.innerHTML = `
    <div class="diagram-grid">
      <div class="donut-legend">
        <button class="on" data-i="0">
          <b>99% Contractile Fibers</b> — Pumping action (atria &amp; ventricles)
          <span class="ar">99% ألياف انقباضية — مسؤولة عن ضخ الدم</span>
        </button>
        <button data-i="1">
          <b>1% Non-Contractile Fibers</b> — Pacemaker + Conducting cells
          <span class="ar">1% ألياف غير انقباضية — خلايا ناظمة الخطى والخلايا الموصلة</span>
        </button>
      </div>
      <div class="info-panel" id="fb-info"></div>
    </div>
  `;

  const btns = mount.querySelectorAll(".donut-legend button");
  const info = mount.querySelector("#fb-info");
  function render() {
    const d = data[sel];
    btns.forEach((b, i) => b.classList.toggle("on", i === sel));
    info.innerHTML = `
      <h4><span class="en">${d.title.en}</span><span class="ar">${d.title.ar}</span></h4>
      <div class="bi"><span class="en">${d.en}</span><span class="ar">${d.ar}</span></div>
    `;
  }
  btns.forEach(b => b.addEventListener("click", () => { sel = Number(b.dataset.i); render(); }));
  render();
};

/* =====================================================================
   5. Pacemaker Lab — SAN vs AVN vs Purkinje
   ===================================================================== */
window.DIAGRAMS.pacemaker = function (mount) {
  let sanOn = true;
  let avnOn = true;

  mount.innerHTML = `
    <div class="btn-row" style="margin-bottom:12px">
      <label class="switch"><input type="checkbox" id="pm-san" checked><span class="tr"></span><span>SA Node (90–120/min)</span></label>
      <label class="switch"><input type="checkbox" id="pm-avn" checked><span class="tr"></span><span>AV Node (60–90/min)</span></label>
      <span class="chip" style="background:#f1f5f9;color:#334155">Purkinje (20–40/min) — always backup</span>
    </div>
    <div class="diagram-grid">
      <div class="gauge-row" id="pm-gauges"></div>
      <div class="info-panel" id="pm-info"></div>
    </div>
  `;

  const sanChk = mount.querySelector("#pm-san");
  const avnChk = mount.querySelector("#pm-avn");
  const gauges = mount.querySelector("#pm-gauges");
  const info = mount.querySelector("#pm-info");

  function render() {
    let active, rate, rhythmEn, rhythmAr, beatDur, descEn, descAr;
    if (sanOn) {
      active = "Sinoatrial Node (SAN)";
      rate = "90–120";
      rhythmEn = "Sinus Rhythm (Normal)";
      rhythmAr = "الإيقاع الجيبي (الطبيعي)";
      beatDur = "0.58s";
      descEn = "Because the <b>SA node has the fastest discharge rate (90–120 beats/min)</b>, it fires before the AV node or Purkinje fibers can reach threshold, making it the <b>normal pacemaker of the heart</b>.";
      descAr = "لأن <b>العقدة الجيبية الأذينية (SAN) لها أعلى معدل تفريغ (90–120 نبضة/دقيقة)</b>، فإنها تطلق النبضة قبل غيرها وتكون هي <b>الناظم الطبيعي للقلب</b>.";
    } else if (avnOn) {
      active = "Atrioventricular Node (AVN)";
      rate = "60–90";
      rhythmEn = "Nodal Rhythm";
      rhythmAr = "الإيقاع العُقدي";
      beatDur = "0.8s";
      descEn = "With the SA node disabled, the next fastest pacemaker — the <b>AV node (60–90 beats/min)</b> — takes over and drives the heart in a <b>Nodal Rhythm</b>.";
      descAr = "عند تعطل العقدة الجيبية، تتولى الأسرع التالية وهي <b>العقدة الأذينية البطينية (60–90 نبضة/دقيقة)</b> قيادة القلب في <b>إيقاع عُقدي</b>.";
    } else {
      active = "Purkinje Fibers";
      rate = "20–40";
      rhythmEn = "Idioventricular Rhythm";
      rhythmAr = "الإيقاع البطيني الذاتي";
      beatDur = "2.0s";
      descEn = "When both SA and AV nodes fail/block, the <b>Purkinje fibers (20–40 beats/min)</b> fire at their slow intrinsic rate, producing an <b>Idioventricular Rhythm</b>.";
      descAr = "عند تعطل العقدتين الجيبية والأذينية البطينية، تعمل <b>ألياف بركنجي (20–40 نبضة/دقيقة)</b> بمعدلها البطيء منتجةً <b>الإيقاع البطيني الذاتي</b>.";
    }

    gauges.innerHTML = `
      <div class="gauge">
        <div class="lbl">Active Pacemaker</div>
        <div class="val" style="font-size:1.1rem;color:var(--accent)">${active}</div>
        <div class="sub">${rhythmEn}</div>
      </div>
      <div class="gauge">
        <div class="lbl">Discharge Rate</div>
        <div class="val"><span class="heart-beat" style="--beat:${beatDur}">❤️</span> ${rate}</div>
        <div class="sub">beats / min</div>
      </div>
    `;

    info.innerHTML = `
      <h4><span class="en">${rhythmEn}</span><span class="ar">${rhythmAr}</span></h4>
      <div class="bi"><span class="en">${descEn}</span><span class="ar">${descAr}</span></div>
    `;
  }

  sanChk.addEventListener("change", e => { sanOn = e.target.checked; render(); });
  avnChk.addEventListener("change", e => { avnOn = e.target.checked; render(); });
  render();
};

/* =====================================================================
   6. Conduction Pathway Ordering Mini-Game
   ===================================================================== */
window.DIAGRAMS.conductionOrder = function (mount) {
  const correct = [
    { id: 0, en: "1. SA Node (SAN)", ar: "العقدة الجيبية (SAN)" },
    { id: 1, en: "2. Internodal Pathways", ar: "المسارات بين العقدية" },
    { id: 2, en: "3. AV Node (only pathway to ventricles)", ar: "العقدة الأذينية البطينية (AVN)" },
    { id: 3, en: "4. Bundle of His (AV Bundle)", ar: "حزمة هيس" },
    { id: 4, en: "5. Left & Right Bundle Branches", ar: "فرعا الحزمة الأيسر والأيمن" },
    { id: 5, en: "6. Purkinje Fibers (fastest velocity)", ar: "ألياف بركنجي (الأسرع توصيلًا)" }
  ];

  let placed = [];
  let pool = [...correct].sort(() => Math.random() - 0.5);

  mount.innerHTML = `
    <div class="order-game">
      <div class="bi"><span class="en">Click the structures in the <b>exact order</b> an impulse travels through the heart:</span><span class="ar">اضغط على التراكيب <b>بالترتيب الصحيح</b> لانتقال النبضة الكهربائية عبر القلب:</span></div>
      <div class="order-answer" id="co-ans"></div>
      <div class="order-pool" id="co-pool"></div>
      <div class="btn-row">
        <button class="btn sm" id="co-reset">↻ Reset</button>
        <span id="co-msg" style="font-weight:700;color:var(--ok)"></span>
      </div>
    </div>
  `;

  const ansEl = mount.querySelector("#co-ans");
  const poolEl = mount.querySelector("#co-pool");
  const msgEl = mount.querySelector("#co-msg");

  function render() {
    ansEl.innerHTML = placed.map(it => `<span class="order-item placed">${it.en.replace(/^\d+\.\s*/, "")}</span>`).join("");
    poolEl.innerHTML = pool.map(it => `<button class="order-item" data-id="${it.id}">${it.en.replace(/^\d+\.\s*/, "")}</button>`).join("");
    msgEl.textContent = placed.length === correct.length ? "✅ Perfect! Whole ventricle excited as one unit!" : "";

    poolEl.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        if (id === placed.length) {
          const item = pool.find(x => x.id === id);
          placed.push(item);
          pool = pool.filter(x => x.id !== id);
          render();
        } else {
          btn.classList.add("wrong");
          setTimeout(() => btn.classList.remove("wrong"), 400);
        }
      });
    });
  }

  mount.querySelector("#co-reset").addEventListener("click", () => {
    placed = [];
    pool = [...correct].sort(() => Math.random() - 0.5);
    render();
  });

  render();
};

/* =====================================================================
   7. Excitation–Contraction Coupling (10 steps from Slide 26 & 27)
   ===================================================================== */
window.DIAGRAMS.ecc = function (mount) {
  const steps = [
    { en: "<b>Action potential enters</b> from an adjacent cardiac cell (via intercalated discs) and travels along the <b>sarcolemma &amp; T-tubule membrane</b>.",
      ar: "<b>يدخل جهد الفعل</b> من خلية قلبية مجاورة (عبر الأقراص البينية) وينتقل على طول <b>غشاء الليف والأنيبيبات المستعرضة (T-tubules)</b>." },
    { en: "<b>Voltage-gated Ca²⁺ channels open</b> in the T-tubule membrane → a small amount of extracellular <b>Ca²⁺ enters the cell</b>.",
      ar: "<b>تفتح قنوات الكالسيوم الحساسة للجهد</b> في غشاء الأنيبيب المستعرض ← <b>يدخل الكالسيوم (Ca²⁺) إلى الخلية</b>." },
    { en: "Entering Ca²⁺ induces a much larger <b>Ca²⁺ release from the Sarcoplasmic Reticulum (SR)</b> through <b>ryanodine receptor-channels (RyR)</b> (Calcium-induced Ca²⁺ release).",
      ar: "الكالسيوم الداخل يحفز <b>إفراز كمية أكبر من الكالسيوم من الشبكة الساركوبلازمية (SR)</b> عبر <b>قنوات مستقبلات الريانودين (RyR)</b>." },
    { en: "Local release of Ca²⁺ from the SR causes a <b>Ca²⁺ spark</b>.",
      ar: "الإفراز الموضعي للكالسيوم من الشبكة الساركوبلازمية يسبب <b>شرارة كالسيوم (Ca²⁺ spark)</b>." },
    { en: "Summed Ca²⁺ sparks create a large <b>cytosolic Ca²⁺ signal</b> (increased intracellular calcium).",
      ar: "تتجمع شرارات الكالسيوم لتكوّن <b>إشارة كالسيوم قوية</b> (زيادة الكالسيوم داخل السيتوبلازم)." },
    { en: "<b>Ca²⁺ ions bind to troponin</b> → allows <b>actin to bind to myosin</b> → shortening of sarcomeres → <b>CONTRACTION</b>.",
      ar: "<b>يرتبط الكالسيوم بالتروبونين</b> ← يرتبط <b>الأكتين بالميوسين</b> ← تقصر القسيمات العضلية ← <b>الانقباض</b>." },
    { en: "<b>Relaxation</b> begins when <b>Ca²⁺ unbinds from troponin</b> as cytosolic Ca²⁺ decreases.",
      ar: "يبدأ <b>الارتخاء</b> عندما <b>ينفصل الكالسيوم عن التروبونين</b> مع انخفاض الكالسيوم في السيتوبلازم." },
    { en: "<b>Ca²⁺ is pumped back into the sarcoplasmic reticulum (SR)</b> for storage by an ATP-driven Ca²⁺ pump.",
      ar: "<b>يُضخ الكالسيوم مجددًا إلى داخل الشبكة الساركوبلازمية (SR)</b> للتخزين بواسطة مضخة تعتمد على ATP." },
    { en: "<b>Ca²⁺ is also exchanged with Na⁺</b> across the sarcolemma (1 Ca²⁺ out for 3 Na⁺ in).",
      ar: "<b>يُستبدل الكالسيوم أيضًا بالصوديوم (Na⁺)</b> عبر غشاء الخلية (خروج 1 كالسيوم مقابل دخول 3 صوديوم)." },
    { en: "The <b>Na⁺ gradient is maintained by the Na⁺-K⁺-ATPase</b> pump.",
      ar: "يتم الحفاظ على <b>تدرج الصوديوم بواسطة مضخة الصوديوم-البوتاسيوم (Na⁺-K⁺-ATPase)</b>." }
  ];

  let cur = 0;
  mount.innerHTML = `
    <div class="range-wrap">
      <button class="btn sm" id="ec-prev">← Prev</button>
      <input type="range" min="0" max="9" value="0" id="ec-range"/>
      <button class="btn sm primary" id="ec-next">Next →</button>
    </div>
    <div class="info-panel" id="ec-info"></div>
  `;

  const rng = mount.querySelector("#ec-range");
  const info = mount.querySelector("#ec-info");

  function render() {
    rng.value = cur;
    const isContract = cur <= 5;
    info.innerHTML = `
      <span class="step-badge" style="background:${isContract ? "#e11d48" : "#0891b2"}">
        Step ${cur + 1} / 10 — ${isContract ? "EXCITATION & CONTRACTION" : "RELAXATION & Ca²⁺ REMOVAL"}
      </span>
      <div class="bi" style="margin-top:6px">
        <span class="en">${steps[cur].en}</span>
        <span class="ar">${steps[cur].ar}</span>
      </div>
    `;
  }

  rng.addEventListener("input", e => { cur = Number(e.target.value); render(); });
  mount.querySelector("#ec-prev").addEventListener("click", () => { cur = (cur + 9) % 10; render(); });
  mount.querySelector("#ec-next").addEventListener("click", () => { cur = (cur + 1) % 10; render(); });
  render();
};
