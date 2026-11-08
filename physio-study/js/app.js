/* Main SPA Router, Bilingual Switcher, Lecture Renderer, Quiz & Flashcards Engine */
(function () {
  const app = document.getElementById("app");
  const topnav = document.getElementById("topnav");
  const toastEl = document.getElementById("toast");

  /* -------------------- Persistent State -------------------- */
  const STORE_KEY = "physiolab_state_v1";
  let state = { lang: "both", bestScores: {}, knownCards: {} };
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
    state = Object.assign(state, saved);
  } catch (_) {}

  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  /* -------------------- Language Switcher -------------------- */
  const langBtns = document.querySelectorAll(".lang-switch button");
  function applyLang(lang) {
    state.lang = lang;
    saveState();
    document.body.classList.remove("lang-en", "lang-ar", "lang-both");
    document.body.classList.add("lang-" + lang);
    langBtns.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  }
  langBtns.forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  applyLang(state.lang || "both");

  /* -------------------- Helpers -------------------- */
  function bi(obj) {
    if (!obj) return "";
    return `<span class="en">${obj.en || ""}</span><span class="ar">${obj.ar || ""}</span>`;
  }

  /* -------------------- Router -------------------- */
  function route() {
    const hash = (location.hash || "#/").replace(/^#/, "");
    const parts = hash.split("/").filter(Boolean);

    document.body.classList.remove("theme-resp", "theme-exam");
    topnav.querySelectorAll("a").forEach(a => a.classList.remove("active"));

    if (parts.length === 0) {
      topnav.querySelector('[data-nav="home"]')?.classList.add("active");
      renderHome();
      window.scrollTo({ top: 0 });
      return;
    }

    if (parts[0] === "exam") {
      document.body.classList.add("theme-exam");
      topnav.querySelector('[data-nav="exam"]')?.classList.add("active");
      renderCombinedExam();
      window.scrollTo({ top: 0 });
      return;
    }

    if (parts[0] === "lecture") {
      const id = parts[1] || "cardio";
      const tab = parts[2] || "study"; // study | quiz | flashcards
      const lec = window.LECTURES[id];
      if (!lec) { renderHome(); return; }
      if (id === "resp") document.body.classList.add("theme-resp");
      topnav.querySelector(`[data-nav="${id}"]`)?.classList.add("active");
      renderLecture(lec, tab);
      window.scrollTo({ top: 0 });
      return;
    }

    renderHome();
  }

  window.addEventListener("hashchange", route);

  /* =====================================================================
     HOME VIEW
     ===================================================================== */
  function renderHome() {
    const cardio = window.LECTURES.cardio;
    const resp = window.LECTURES.resp;
    const cBest = state.bestScores.cardio;
    const rBest = state.bestScores.resp;
    const eBest = state.bestScores.exam;

    app.innerHTML = `
      <section class="hero">
        <h1>
          <span class="en">PhysioLab — Interactive Medical Physiology</span>
          <span class="ar">مختبر الفسيولوجيا التفاعلي — القلب والجهاز التنفسي</span>
        </h1>
        <p class="bi">
          <span class="en">Master every concept from your Cardiovascular &amp; Respiratory Physiology lectures with clear bilingual explanations (English + Arabic), interactive diagrams, comprehensive quizzes, and 3D flashcards.</span>
          <span class="ar">أتقن جميع مفاهيم محاضرتي الجهاز القلبي الوعائي والجهاز التنفسي مع شرح واضح باللغتين الإنجليزية والعربية، رسومات تفاعلية، اختبارات شاملة، وبطاقات استذكار (فلاش كاردز).</span>
        </p>
        <div class="hero-features">
          <span class="chip">🌐 English + ترجمة عربية</span>
          <span class="chip">🫀 11 Interactive Diagrams</span>
          <span class="chip">📝 ${cardio.quiz.length + resp.quiz.length} Quiz Questions</span>
          <span class="chip">🗂️ ${cardio.flashcards.length + resp.flashcards.length} Flashcards</span>
        </div>
        <svg class="hero-ecg" viewBox="0 0 600 120" fill="none">
          <path d="M0 60 H140 L165 20 L190 100 L215 10 L240 95 L265 45 L285 60 H600" stroke="#fb7185" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </section>

      <div class="lecture-grid">
        ${renderLectureCard(cardio, cBest, "❤️")}
        ${renderLectureCard(resp, rBest, "🫁")}
      </div>

      <div class="card" style="margin-top:24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;border-left:6px solid #7c3aed">
        <div>
          <div style="font-size:.78rem;font-weight:800;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">Comprehensive Assessment</div>
          <h2 style="margin:4px 0">
            <span class="en">🏆 Combined Final Exam (Both Lectures)</span>
            <span class="ar">🏆 الاختبار النهائي الشامل (المحاضرتان معًا)</span>
          </h2>
          <div class="bi" style="margin:0;color:var(--muted)">
            <span class="en">Test yourself on all ${cardio.quiz.length + resp.quiz.length} questions from Cardiovascular &amp; Respiratory Physiology${eBest !== undefined ? ` — Best Score: <b>${eBest}%</b>` : ""}.</span>
            <span class="ar">اختبر نفسك في جميع أسئلة المحاضرتين (${cardio.quiz.length + resp.quiz.length} سؤالًا) مع التصحيح الفوري والشرح.</span>
          </div>
        </div>
        <a href="#/exam" class="btn primary" style="background:#7c3aed;border-color:#7c3aed">Start Final Exam →</a>
      </div>
    `;
  }

  function renderLectureCard(lec, best, emoji) {
    const knownCount = Object.keys(state.knownCards[lec.id] || {}).length;
    return `
      <article class="lecture-card" style="--c:${lec.color};--cs:${lec.soft}">
        <div class="lc-head">
          <div class="lc-icon" style="font-size:2rem">${emoji}</div>
          <div>
            <div class="num">${lec.num}</div>
            <h2>${bi(lec.title)}</h2>
          </div>
        </div>
        <div class="lc-topics">
          ${lec.topics.map(t => `<span>${t}</span>`).join("")}
        </div>
        <div class="lc-progress">
          <span>📚 <b>${lec.sections.length}</b> Sections</span>
          <span>❓ <b>${lec.quiz.length}</b> MCQs ${best !== undefined ? `(Best: <b>${best}%</b>)` : ""}</span>
          <span>🗂️ <b>${knownCount}/${lec.flashcards.length}</b> Cards Mastered</span>
        </div>
        <div class="lc-actions">
          <a class="primary" href="#/lecture/${lec.id}/study">📖 Study</a>
          <a href="#/lecture/${lec.id}/quiz">📝 Quiz (${lec.quiz.length})</a>
          <a href="#/lecture/${lec.id}/flashcards">🗂️ Flashcards (${lec.flashcards.length})</a>
        </div>
      </article>
    `;
  }

  /* =====================================================================
     LECTURE VIEW (Study / Quiz / Flashcards tabs)
     ===================================================================== */
  function renderLecture(lec, tab) {
    app.innerHTML = `
      <div class="lec-header">
        <div>
          <div class="kicker">${lec.num}</div>
          <h1>${bi(lec.title)}</h1>
        </div>
        <div class="lec-tabs">
          <a href="#/lecture/${lec.id}/study" class="${tab === "study" ? "active" : ""}">📖 Study &amp; Diagrams</a>
          <a href="#/lecture/${lec.id}/quiz" class="${tab === "quiz" ? "active" : ""}">📝 Quiz (${lec.quiz.length})</a>
          <a href="#/lecture/${lec.id}/flashcards" class="${tab === "flashcards" ? "active" : ""}">🗂️ Flashcards (${lec.flashcards.length})</a>
        </div>
      </div>
      <div id="lec-stage"></div>
    `;

    const stage = document.getElementById("lec-stage");
    if (tab === "study") renderStudyTab(lec, stage);
    else if (tab === "quiz") renderQuizTab(lec.quiz, lec.id, stage, lec.short);
    else if (tab === "flashcards") renderFlashcardsTab(lec, stage);
  }

  /* -------------------- STUDY TAB -------------------- */
  function renderStudyTab(lec, stage) {
    stage.innerHTML = `
      <div class="lec-body">
        <aside class="toc">
          <h4>Contents / المحتويات</h4>
          ${lec.sections.map((s, i) => `
            <a href="#sec-${s.id}" data-sec="${s.id}">
              <span class="en">${i + 1}. ${s.title.en}</span>
              <span class="ar">${i + 1}. ${s.title.ar}</span>
            </a>
          `).join("")}
        </aside>
        <div class="sections">
          ${lec.sections.map((s, i) => `
            <section class="section" id="sec-${s.id}">
              <div class="section-title">
                <div class="section-num">${i + 1}</div>
                <h2>${bi(s.title)}</h2>
              </div>
              ${s.blocks.map(renderBlock).join("")}
            </section>
          `).join("")}
          <div class="card end-cta">
            <h3>
              <span class="en">Finished reading ${lec.short.en}? Test your knowledge!</span>
              <span class="ar">هل أنهيت مراجعة ${lec.short.ar}؟ اختبر معلوماتك الآن!</span>
            </h3>
            <a class="btn primary" href="#/lecture/${lec.id}/quiz">📝 Take Lecture Quiz (${lec.quiz.length} Qs)</a>
            <a class="btn" href="#/lecture/${lec.id}/flashcards">🗂️ Review Flashcards (${lec.flashcards.length})</a>
          </div>
        </div>
      </div>
    `;

    // Mount interactive diagrams
    stage.querySelectorAll("[data-diagram]").forEach(el => {
      const id = el.dataset.diagram;
      if (window.DIAGRAMS && typeof window.DIAGRAMS[id] === "function") {
        window.DIAGRAMS[id](el);
      }
    });

    // Smooth TOC scroll
    stage.querySelectorAll(".toc a").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        const target = document.getElementById("sec-" + a.dataset.sec);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderBlock(b) {
    if (b.t === "p") {
      return `<div class="bi"><span class="en">${b.en}</span><span class="ar">${b.ar}</span></div>`;
    }
    if (b.t === "list") {
      return `<ul class="blist ${b.num ? "num" : ""}">
        ${b.items.map(it => `<li><span class="en">${it.en}</span><span class="ar">${it.ar}</span></li>`).join("")}
      </ul>`;
    }
    if (b.t === "cards") {
      return `<div class="two-col">
        ${b.items.map(c => `
          <div class="info-card">
            <h4>${bi(c.title)}</h4>
            <div class="bi"><span class="en">${c.en}</span><span class="ar">${c.ar}</span></div>
          </div>
        `).join("")}
      </div>`;
    }
    if (b.t === "callout") {
      return `<div class="callout ${b.kind || "note"}">
        <b class="t">${bi(b.title)}</b>
        <div class="bi" style="margin:0"><span class="en">${b.en}</span><span class="ar">${b.ar}</span></div>
      </div>`;
    }
    if (b.t === "table") {
      return `<div class="tbl-wrap"><table class="tbl">
        <thead><tr>${b.head.map(h => `<th>${bi(h)}</th>`).join("")}</tr></thead>
        <tbody>
          ${b.rows.map(r => `<tr>${r.map(cell => `<td>${bi(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table></div>`;
    }
    if (b.t === "diagram") {
      return `<div class="diagram">
        <div class="diagram-head">
          <h3>${bi(b.title)}</h3>
          <span class="diagram-hint">Interactive • تفاعلي</span>
        </div>
        <div data-diagram="${b.id}"></div>
      </div>`;
    }
    return "";
  }

  /* =====================================================================
     QUIZ ENGINE (Per-Lecture & Combined Final Exam)
     ===================================================================== */
  function renderCombinedExam() {
    const allQs = [
      ...window.LECTURES.cardio.quiz.map(q => Object.assign({}, q, { topic: "CVS • " + q.topic })),
      ...window.LECTURES.resp.quiz.map(q => Object.assign({}, q, { topic: "Resp • " + q.topic }))
    ];
    app.innerHTML = `
      <div class="lec-header">
        <div>
          <div class="kicker">Lectures 19 &amp; 20</div>
          <h1>
            <span class="en">🏆 Comprehensive Final Exam</span>
            <span class="ar">🏆 الاختبار النهائي الشامل للمحاضرتين</span>
          </h1>
        </div>
        <a href="#/" class="btn" style="background:#fff;color:#0f172a">← Back Home</a>
      </div>
      <div id="exam-stage"></div>
    `;
    renderQuizTab(allQs, "exam", document.getElementById("exam-stage"), {
      en: "Cardiovascular & Respiratory Physiology",
      ar: "فسيولوجيا القلب والجهاز التنفسي"
    });
  }

  function renderQuizTab(questions, scoreKey, stage, titleObj) {
    let pool = [...questions];
    let cur = 0;
    let answers = {}; // idx -> chosen option index

    function startQuiz(shuffle) {
      pool = [...questions];
      if (shuffle) pool.sort(() => Math.random() - 0.5);
      cur = 0;
      answers = {};
      drawQuestion();
    }

    function drawQuestion() {
      if (cur >= pool.length) { drawResults(); return; }
      const q = pool[cur];
      const chosen = answers[cur];
      const letters = ["A", "B", "C", "D"];

      stage.innerHTML = `
        <div class="quiz-wrap">
          <div class="qbar">
            <span class="count">Question ${cur + 1} / ${pool.length}</span>
            <div class="track"><div style="width:${((cur + 1) / pool.length) * 100}%"></div></div>
            <button class="btn sm" id="q-shuffle" title="Restart & Shuffle">🔀 Shuffle</button>
          </div>

          <div class="card qcard">
            <div class="qtopic">${q.topic}</div>
            <div class="qtext">${bi(q.q)}</div>
            <div class="qopts">
              ${q.o.map((opt, idx) => {
                let cls = "";
                if (chosen !== undefined) {
                  if (idx === q.a) cls = "correct";
                  else if (idx === chosen) cls = "wrong";
                }
                return `
                  <button class="qopt ${cls}" data-idx="${idx}" ${chosen !== undefined ? "disabled" : ""}>
                    <span class="letter">${letters[idx]}</span>
                    <span class="txt">${bi(opt)}</span>
                  </button>
                `;
              }).join("")}
            </div>

            ${chosen !== undefined ? `
              <div class="qexplain">
                <b class="t">${chosen === q.a ? "✅ Correct! / إجابة صحيحة!" : "❌ Incorrect / إجابة غير صحيحة"}</b>
                <div class="bi" style="margin:4px 0 0">${bi(q.x)}</div>
              </div>
            ` : ""}

            <div class="qnav">
              <button class="btn" id="q-prev" ${cur === 0 ? "disabled" : ""}>← Previous</button>
              <button class="btn primary" id="q-next">
                ${cur === pool.length - 1 ? "Finish & See Score 🏆" : "Next Question →"}
              </button>
            </div>
          </div>
        </div>
      `;

      stage.querySelectorAll(".qopt").forEach(btn => {
        btn.addEventListener("click", () => {
          answers[cur] = Number(btn.dataset.idx);
          drawQuestion();
        });
      });

      stage.querySelector("#q-prev").addEventListener("click", () => { if (cur > 0) { cur--; drawQuestion(); } });
      stage.querySelector("#q-next").addEventListener("click", () => { cur++; drawQuestion(); });
      stage.querySelector("#q-shuffle").addEventListener("click", () => startQuiz(true));
    }

    function drawResults() {
      let correctCount = 0;
      pool.forEach((q, i) => { if (answers[i] === q.a) correctCount++; });
      const pct = Math.round((correctCount / pool.length) * 100);
      const prevBest = state.bestScores[scoreKey] || 0;
      if (pct >= prevBest) { state.bestScores[scoreKey] = pct; saveState(); }

      stage.innerHTML = `
        <div class="quiz-wrap">
          <div class="card quiz-start">
            <h2>
              <span class="en">Quiz Completed — ${titleObj.en}</span>
              <span class="ar">اكتمل الاختبار — ${titleObj.ar}</span>
            </h2>
            <div style="font-size:3rem;font-weight:800;color:var(--accent);margin:10px 0">${pct}%</div>
            <p style="font-weight:600;color:var(--muted)">You scored <b>${correctCount}</b> out of <b>${pool.length}</b></p>
            <div class="btn-row" style="justify-content:center;margin-top:16px">
              <button class="btn primary" id="q-retry">↻ Retry Quiz</button>
              <button class="btn" id="q-retry-shuf">🔀 Retry Shuffled</button>
            </div>
          </div>

          <h3 style="margin-top:26px">Review Answers / مراجعة الإجابات</h3>
          ${pool.map((q, i) => {
            const u = answers[i];
            const ok = u === q.a;
            return `
              <div class="review-item ${ok ? "good" : "bad"}">
                <div class="qtopic">${i + 1}. ${q.topic}</div>
                <div style="font-weight:700">${bi(q.q)}</div>
                <div class="ans">
                  ${ok
                    ? `<div class="c">✔ Correct: ${q.o[q.a].en} — ${q.o[q.a].ar}</div>`
                    : `<div class="y">✖ Your answer: ${u !== undefined ? q.o[u].en : "Skipped"}</div>
                       <div class="c">✔ Correct answer: ${q.o[q.a].en} — ${q.o[q.a].ar}</div>`}
                </div>
                <div class="bi" style="margin-top:6px;font-size:.88rem;color:var(--muted)">${bi(q.x)}</div>
              </div>
            `;
          }).join("")}
        </div>
      `;

      stage.querySelector("#q-retry").addEventListener("click", () => startQuiz(false));
      stage.querySelector("#q-retry-shuf").addEventListener("click", () => startQuiz(true));
    }

    startQuiz(false);
  }

  /* =====================================================================
     FLASHCARDS ENGINE (3D Flip + Known/Review Tracking + Keyboard)
     ===================================================================== */
  function renderFlashcardsTab(lec, stage) {
    let cards = lec.flashcards.map((c, idx) => Object.assign({ idx }, c));
    let cur = 0;
    let flipped = false;
    state.knownCards[lec.id] = state.knownCards[lec.id] || {};

    function draw() {
      const c = cards[cur];
      const knownMap = state.knownCards[lec.id];
      const knownTotal = Object.keys(knownMap).length;

      stage.innerHTML = `
        <div class="fc-wrap">
          <div class="fc-toolbar">
            <div>
              <b>Card ${cur + 1} / ${cards.length}</b>
              <span style="color:var(--muted);margin-left:10px">Mastered: <b>${knownTotal}/${lec.flashcards.length}</b></span>
            </div>
            <div class="btn-row">
              <button class="btn sm" id="fc-shuf">🔀 Shuffle</button>
              <button class="btn sm" id="fc-reset">↻ Reset Progress</button>
            </div>
          </div>

          <div class="fc-stage">
            <div class="fc-card ${flipped ? "flipped" : ""}" id="fc-card">
              <div class="fc-face fc-front">
                <span class="tag">${lec.num} • TERM / QUESTION</span>
                <div class="term">${bi(c.f)}</div>
                <span class="tap">Click or press <span class="kbd">Space</span> to flip ↻</span>
              </div>
              <div class="fc-face fc-back">
                <span class="tag">ANSWER / EXPLANATION</span>
                <div class="def">${bi(c.b)}</div>
                <span class="tap">Click to flip back ↺</span>
              </div>
            </div>
          </div>

          <div class="fc-controls">
            <button class="btn" id="fc-prev">← Prev</button>
            <button class="btn again" id="fc-again">⏳ Needs Review</button>
            <button class="btn primary" id="fc-flip">↻ Flip Card</button>
            <button class="btn know" id="fc-know">✔ Got It!</button>
            <button class="btn" id="fc-next">Next →</button>
          </div>

          <div class="fc-dots">
            ${cards.map((item, i) => {
              const st = knownMap[item.idx];
              return `<span class="${i === cur ? "cur" : ""} ${st === true ? "k" : st === false ? "a" : ""}" data-i="${i}"></span>`;
            }).join("")}
          </div>
        </div>
      `;

      const cardEl = stage.querySelector("#fc-card");
      cardEl.addEventListener("click", () => { flipped = !flipped; cardEl.classList.toggle("flipped", flipped); });
      stage.querySelector("#fc-flip").addEventListener("click", () => { flipped = !flipped; cardEl.classList.toggle("flipped", flipped); });
      stage.querySelector("#fc-prev").addEventListener("click", () => { flipped = false; cur = (cur - 1 + cards.length) % cards.length; draw(); });
      stage.querySelector("#fc-next").addEventListener("click", () => { flipped = false; cur = (cur + 1) % cards.length; draw(); });

      stage.querySelector("#fc-know").addEventListener("click", () => {
        knownMap[c.idx] = true;
        saveState();
        flipped = false;
        cur = (cur + 1) % cards.length;
        draw();
      });

      stage.querySelector("#fc-again").addEventListener("click", () => {
        knownMap[c.idx] = false;
        saveState();
        flipped = false;
        cur = (cur + 1) % cards.length;
        draw();
      });

      stage.querySelector("#fc-shuf").addEventListener("click", () => {
        cards.sort(() => Math.random() - 0.5);
        cur = 0;
        flipped = false;
        draw();
        showToast("Flashcards shuffled!");
      });

      stage.querySelector("#fc-reset").addEventListener("click", () => {
        state.knownCards[lec.id] = {};
        saveState();
        flipped = false;
        draw();
        showToast("Progress reset");
      });

      stage.querySelectorAll(".fc-dots span").forEach(dot => {
        dot.addEventListener("click", () => {
          cur = Number(dot.dataset.i);
          flipped = false;
          draw();
        });
      });
    }

    draw();
  }

  // Initial route
  route();
})();
