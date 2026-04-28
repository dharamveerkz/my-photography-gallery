import { useState } from "react";

const sections = [
  {
    type: "content",
    title: "Welcome to Photography!",
    content: "Photography means 'drawing with light'. It's the art of capturing moments and turning them into lasting memories.",
    points: [
      "You can use any camera — phone, DSLR, or mirrorless",
      "Great photography is about seeing light and moments",
      "Practice is more important than expensive gear",
    ],
    icon: "📷",
  },
  {
    type: "quiz",
    title: "Quick Check #1",
    questions: [
      {
        question: "What does photography literally mean?",
        options: ["Drawing with light", "Taking pictures", "Making art", "Recording video"],
        correct: 0,
      },
      {
        question: "What's most important for great photography?",
        options: ["Expensive camera", "Practice and seeing light", "Big lens", "Flash"],
        correct: 1,
      },
    ],
  },
  {
    type: "content",
    title: "Your Camera Basics",
    content: "Every camera has the same basic parts. Understanding them helps you take better photos.",
    points: [
      "Shutter button — takes the photo",
      "Screen/Viewfinder — shows what you're photographing",
      "Lens — focuses the light",
      "Mode dial — changes camera settings",
    ],
    icon: "📸",
  },
  {
    type: "content",
    title: "Understanding Aperture",
    content: "Aperture controls how much light enters your camera and how much of your photo is in focus.",
    points: [
      "Low f-number (f/1.8) = Blurry background",
      "High f-number (f/16) = Everything sharp",
      "Think of it like your eye's pupil — bigger in dark, smaller in bright light",
    ],
    icon: "🔍",
  },
  {
    type: "quiz",
    title: "Quick Check #2",
    questions: [
      {
        question: "What aperture creates a blurry background?",
        options: ["f/16", "f/1.8", "f/11", "f/22"],
        correct: 1,
      },
      {
        question: "Aperture is like what part of your body?",
        options: ["Your ear", "Your eye's pupil", "Your hand", "Your mouth"],
        correct: 1,
      },
    ],
  },
  {
    type: "content",
    title: "Shutter Speed",
    content: "Shutter speed controls how long your camera sees the scene. Fast freezes action, slow creates blur.",
    points: [
      "Fast (1/500) — Freezes running, sports",
      "Slow (1/30) — Creates motion blur",
      "Too slow = shaky photos (use tripod!)",
    ],
    icon: "⚡",
  },
  {
    type: "content",
    title: "ISO — Light Sensitivity",
    content: "ISO controls how sensitive your camera is to light. Low ISO for bright light, high ISO for dark.",
    points: [
      "ISO 100–400 — Bright daylight (best quality)",
      "ISO 800–1600 — Indoor/overcast",
      "ISO 3200+ — Very dark (more grain/noise)",
    ],
    icon: "💡",
  },
  {
    type: "quiz",
    title: "Quick Check #3",
    questions: [
      {
        question: "What shutter speed freezes a running person?",
        options: ["1/30", "1 second", "1/500", "1/10"],
        correct: 2,
      },
      {
        question: "What ISO should you use in bright sunlight?",
        options: ["ISO 3200", "ISO 100", "ISO 1600", "ISO 800"],
        correct: 1,
      },
    ],
  },
  {
    type: "content",
    title: "Camera Modes Made Simple",
    content: "Different modes give you different levels of control. Start simple, then advance!",
    points: [
      "Auto (Green) — Camera does everything",
      "Portrait mode — Blurs background automatically",
      "Sports mode — Freezes action",
      "Manual (M) — You control everything",
    ],
    icon: "🎛️",
  },
  {
    type: "content",
    title: "Rule of Thirds",
    content: "The easiest way to improve your composition. Imagine a tic-tac-toe grid on your photo.",
    points: [
      "Place your subject where lines cross",
      "Put horizon on top or bottom line (not middle)",
      "Creates more interesting photos than centering",
    ],
    icon: "📐",
  },
  {
    type: "quiz",
    title: "Quick Check #4",
    questions: [
      {
        question: "Where should you place your subject using rule of thirds?",
        options: ["Dead center", "Where grid lines cross", "At the edge", "Anywhere"],
        correct: 1,
      },
      {
        question: "Which mode is best for freezing sports action?",
        options: ["Portrait mode", "Sports mode", "Macro mode", "Night mode"],
        correct: 1,
      },
    ],
  },
  {
    type: "content",
    title: "Leading Lines",
    content: "Use natural lines in your scene to guide the viewer's eye to your subject.",
    points: [
      "Roads, paths, fences, rivers",
      "Creates depth in your photo",
      "Draws attention to what matters",
    ],
    icon: "➡️",
  },
  {
    type: "content",
    title: "Lighting — Golden Hour",
    content: "The best light happens just after sunrise and before sunset. Warm, soft, and magical!",
    points: [
      "Golden Hour = 1 hour after sunrise/before sunset",
      "Soft, warm, flattering light",
      "Avoid harsh midday sun when possible",
    ],
    icon: "🌅",
  },
  {
    type: "quiz",
    title: "Quick Check #5",
    questions: [
      {
        question: "What creates leading lines in a photo?",
        options: ["Colors", "Roads and paths", "Shadows", "Clouds"],
        correct: 1,
      },
      {
        question: "When is Golden Hour?",
        options: ["Noon", "Midnight", "After sunrise/before sunset", "Any time"],
        correct: 2,
      },
    ],
  },
  {
    type: "content",
    title: "Your Next Steps",
    content: "You're ready to start your photography journey! Here's how to keep improving.",
    points: [
      "Shoot every day, even just one photo",
      "Analyse photos you love — why do they work?",
      "Join communities like 500px or Reddit r/photography",
      "Experiment freely — the best photos come from risk-taking",
    ],
    icon: "🚀",
  },
  {
    type: "complete",
    title: "Congratulations!",
    content: "You've completed Photography Basics. You now understand the fundamentals to start your photography journey.",
    achievements: [
      "Learned camera basics",
      "Understood exposure (aperture, shutter, ISO)",
      "Mastered composition techniques",
      "Discovered the power of light",
    ],
    nextSteps: [
      "Practice daily — even with your phone",
      "Study photos you love",
      "Join photography communities",
      "Experiment and have fun!",
    ],
  },
];

/* ─── Inline styles (mirrors the HTML CSS exactly) ─── */
const styles = {
  // fonts injected via <link> in index.html or use @import in global CSS
  body: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#fff",
    color: "#1a1a2e",
    minHeight: "100vh",
    margin: 0,
  },

  // topbar
  topbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "#fff",
    borderBottom: "1px solid #ebebeb",
  },
  progLine: (pct) => ({
    height: 3,
    background: "linear-gradient(90deg, #b87d1a, #e8a838)",
    width: `${pct}%`,
    transition: "width .5s ease",
  }),
  topbarInner: {
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  brandIcon: { fontSize: 20, lineHeight: 1 },
  brandH1: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1rem",
    fontWeight: 400,
    color: "#1a1a2e",
    margin: 0,
  },
  brandP: { fontSize: ".72rem", color: "#6b6b80", marginTop: 1, margin: 0 },
  progLabel: { fontSize: ".78rem", fontWeight: 600, color: "#b87d1a" },

  // main
  main: {
    padding: "72px 24px 64px",
    maxWidth: 640,
    margin: "0 auto",
  },

  // content
  sIcon: { fontSize: "2rem", display: "block", marginBottom: 18 },
  sTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(1.7rem, 5vw, 2.2rem)",
    fontWeight: 400,
    lineHeight: 1.2,
    marginBottom: 8,
    margin: 0,
  },
  divider: { width: 36, height: 2, background: "#e8a838", margin: "16px 0 20px" },
  sContent: {
    fontSize: ".97rem",
    color: "#6b6b80",
    lineHeight: 1.75,
    marginBottom: 32,
    margin: "0 0 32px",
  },

  // points list
  pointsList: { listStyle: "none", marginBottom: 36, padding: 0 },
  pointsItem: {
    fontSize: ".94rem",
    color: "#1a1a2e",
    lineHeight: 1.6,
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "14px 0",
    borderBottom: "1px solid #ebebeb",
  },
  pointsItemFirst: {
    borderTop: "1px solid #ebebeb",
  },
  pointDot: {
    width: 5,
    height: 5,
    background: "#e8a838",
    borderRadius: "50%",
    flexShrink: 0,
    marginTop: 8,
  },

  // tip
  tip: {
    fontSize: ".87rem",
    color: "#6b6b80",
    lineHeight: 1.65,
    paddingLeft: 14,
    borderLeft: "2px solid #e8a838",
    marginBottom: 40,
    margin: "0 0 40px",
  },

  // quiz
  quizIntro: {
    fontSize: ".78rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: ".08em",
    color: "#6b6b80",
    marginBottom: 32,
    margin: "0 0 32px",
  },
  qSep: { height: 1, background: "#ebebeb", margin: "30px 0" },
  qLabel: {
    fontSize: ".72rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: ".08em",
    color: "#b87d1a",
    marginBottom: 8,
    margin: "0 0 8px",
  },
  qText: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.15rem",
    fontWeight: 400,
    color: "#1a1a2e",
    marginBottom: 16,
    lineHeight: 1.4,
    margin: "0 0 16px",
  },
  options: { display: "flex", flexDirection: "column", gap: 8 },
  optBase: {
    background: "#fff",
    border: "1px solid #ebebeb",
    borderRadius: 8,
    padding: "13px 16px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ".91rem",
    color: "#1a1a2e",
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    transition: "border-color .18s, color .18s",
  },
  optSelected: { borderColor: "#e8a838", color: "#b87d1a" },
  optCorrect:  { borderColor: "#4caf7d", color: "#1e7a4a" },
  optWrong:    { borderColor: "#e05c5c", color: "#a02020" },

  // check button
  btnCheck: {
    width: "100%",
    marginTop: 28,
    padding: 14,
    background: "#1a1a2e",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ".92rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity .2s",
  },
  btnCheckDisabled: { opacity: .28, cursor: "not-allowed" },

  // score
  scoreRow: {
    marginTop: 28,
    paddingTop: 24,
    borderTop: "1px solid #ebebeb",
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  scoreEmoji: { fontSize: "1.8rem", flexShrink: 0 },
  scoreNum: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.25rem",
    color: "#1a1a2e",
    margin: 0,
  },
  scoreSubtext: { fontSize: ".84rem", color: "#6b6b80", marginTop: 2, margin: 0 },

  // nav
  navRow: {
    display: "flex",
    gap: 10,
    marginTop: 40,
    paddingTop: 24,
    borderTop: "1px solid #ebebeb",
  },
  btnPrev: {
    flex: 1,
    padding: "13px 16px",
    borderRadius: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ".9rem",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    background: "#f4f4f4",
    color: "#1a1a2e",
    transition: "background .2s",
  },
  btnNext: {
    flex: 1,
    padding: "13px 16px",
    borderRadius: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ".9rem",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    background: "#e8a838",
    color: "#fff",
    transition: "background .2s",
  },
  btnDisabled: { opacity: .28, cursor: "not-allowed" },

  // dots
  dotsWrap: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 40,
  },
  dotBase: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#ddd",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "all .2s",
  },
  dotActive: { width: 22, borderRadius: 4, background: "#e8a838" },
  dotDone:   { background: "#4caf7d" },

  // complete
  completeIcon:  { fontSize: "2.8rem", display: "block", marginBottom: 16 },
  completeTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
    fontWeight: 400,
    marginBottom: 10,
    margin: 0,
  },
  completeSub: {
    fontSize: ".95rem",
    color: "#6b6b80",
    lineHeight: 1.75,
    marginBottom: 36,
    margin: "0 0 36px",
  },
  completeGroupLabel: {
    fontSize: ".72rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: ".08em",
    color: "#b87d1a",
    marginBottom: 12,
    margin: "0 0 12px",
  },
  completeList: { listStyle: "none", marginBottom: 36, padding: 0 },
  completeItem: {
    fontSize: ".93rem",
    color: "#1a1a2e",
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "12px 0",
    borderBottom: "1px solid #ebebeb",
    lineHeight: 1.5,
  },
  completeItemFirst: { borderTop: "1px solid #ebebeb" },
  completeCheck: { color: "#4caf7d", fontWeight: 700, fontSize: ".82rem", flexShrink: 0, marginTop: 2 },
  completeFooter: {
    fontSize: ".88rem",
    color: "#6b6b80",
    paddingTop: 24,
    borderTop: "1px solid #ebebeb",
    margin: 0,
  },
};

/* ─── Sub-components ─── */

function NavRow({ current, total, nextDisabled, onPrev, onNext }) {
  const isLast = current >= total - 2;
  return (
    <div style={styles.navRow}>
      <button
        style={{ ...styles.btnPrev, ...(current === 0 ? styles.btnDisabled : {}) }}
        disabled={current === 0}
        onClick={onPrev}
      >
        ← Back
      </button>
      <button
        style={{ ...styles.btnNext, ...(nextDisabled ? styles.btnDisabled : {}) }}
        disabled={nextDisabled}
        onClick={onNext}
      >
        {isLast ? "Finish →" : "Next →"}
      </button>
    </div>
  );
}

function ContentSection({ section, current, total, completed, onPrev, onNext }) {
  return (
    <>
      <span style={styles.sIcon}>{section.icon}</span>
      <h2 style={styles.sTitle}>{section.title}</h2>
      <div style={styles.divider} />
      <p style={styles.sContent}>{section.content}</p>

      <ul style={styles.pointsList}>
        {section.points.map((point, i) => (
          <li
            key={i}
            style={{
              ...styles.pointsItem,
              ...(i === 0 ? styles.pointsItemFirst : {}),
            }}
          >
            <span style={styles.pointDot} />
            {point}
          </li>
        ))}
      </ul>

      <p style={styles.tip}>
        <strong style={{ color: "#b87d1a", fontWeight: 600 }}>Pro tip:</strong>{" "}
        Don't worry about getting everything perfect. Photography is about practice and having fun!
      </p>

      <NavRow
        current={current}
        total={total}
        nextDisabled={false}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}

function QuizSection({ section, current, total, quizAnswers, quizScore, onAnswer, onCheck, onPrev, onNext }) {
  const allAnswered = Object.keys(quizAnswers).length >= section.questions.length;

  function getOptStyle(qi, oi, correct) {
    if (quizScore !== null) {
      if (oi === correct) return { ...styles.optBase, ...styles.optCorrect };
      if (quizAnswers[qi] === oi) return { ...styles.optBase, ...styles.optWrong };
    } else if (quizAnswers[qi] === oi) {
      return { ...styles.optBase, ...styles.optSelected };
    }
    return styles.optBase;
  }

  return (
    <>
      <h2 style={{ ...styles.sTitle, marginBottom: 8 }}>{section.title}</h2>
      <p style={styles.quizIntro}>Answer all questions to continue</p>

      {section.questions.map((q, qi) => (
        <div key={qi}>
          {qi > 0 && <div style={styles.qSep} />}
          <p style={styles.qLabel}>Question {qi + 1}</p>
          <p style={styles.qText}>{q.question}</p>
          <div style={styles.options}>
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                style={getOptStyle(qi, oi, q.correct)}
                disabled={quizScore !== null}
                onClick={() => onAnswer(qi, oi)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      {quizScore === null ? (
        <button
          style={{
            ...styles.btnCheck,
            ...(!allAnswered ? styles.btnCheckDisabled : {}),
          }}
          disabled={!allAnswered}
          onClick={onCheck}
        >
          Check answers
        </button>
      ) : (
        <>
          <div style={styles.scoreRow}>
            <span style={styles.scoreEmoji}>
              {quizScore === section.questions.length ? "🎉" : "👍"}
            </span>
            <div>
              <p style={styles.scoreNum}>
                {quizScore}/{section.questions.length} correct
              </p>
              <p style={styles.scoreSubtext}>
                {quizScore === section.questions.length
                  ? "Perfect — ready to continue!"
                  : "Keep going — you can review later."}
              </p>
            </div>
          </div>
          <NavRow
            current={current}
            total={total}
            nextDisabled={false}
            onPrev={onPrev}
            onNext={onNext}
          />
        </>
      )}
    </>
  );
}

function CompleteSection({ section }) {
  return (
    <>
      <span style={styles.completeIcon}>🏆</span>
      <h2 style={styles.completeTitle}>{section.title}</h2>
      <p style={styles.completeSub}>{section.content}</p>

      <p style={styles.completeGroupLabel}>What you learned</p>
      <ul style={styles.completeList}>
        {section.achievements.map((a, i) => (
          <li
            key={i}
            style={{
              ...styles.completeItem,
              ...(i === 0 ? styles.completeItemFirst : {}),
            }}
          >
            <span style={styles.completeCheck}>✓</span>
            {a}
          </li>
        ))}
      </ul>

      <p style={styles.completeGroupLabel}>Next steps</p>
      <ul style={styles.completeList}>
        {section.nextSteps.map((s, i) => (
          <li
            key={i}
            style={{
              ...styles.completeItem,
              ...(i === 0 ? styles.completeItemFirst : {}),
            }}
          >
            <span style={styles.completeCheck}>✓</span>
            {s}
          </li>
        ))}
      </ul>

      <p style={styles.completeFooter}>Keep creating amazing photos 📸</p>
    </>
  );
}

/* ─── Main component ─── */
export default function PhotographyBasics() {
  const [current, setCurrent]       = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore]   = useState(null);
  const [completed, setCompleted]   = useState([]);

  const total   = sections.length;
  const section = sections[current];
  const pct     = Math.round(((current + 1) / total) * 100);

  function goTo(idx) {
    setCurrent(idx);
    setQuizAnswers({});
    setQuizScore(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onPrev() { if (current > 0) goTo(current - 1); }
  function onNext() { if (current < total - 1) goTo(current + 1); }

  function markCompleted(idx) {
    if (!completed.includes(idx)) setCompleted((prev) => [...prev, idx]);
  }

  // Auto-mark content sections as completed
  if (section.type === "content" && !completed.includes(current)) {
    markCompleted(current);
  }

  function handleAnswer(qi, oi) {
    setQuizAnswers((prev) => ({ ...prev, [qi]: oi }));
  }

  function handleCheck() {
    const q = section;
    let correct = 0;
    q.questions.forEach((item, i) => {
      if (quizAnswers[i] === item.correct) correct++;
    });
    setQuizScore(correct);
    if (correct === q.questions.length) markCompleted(current);
  }

  function dotStyle(i) {
    if (i === current) return { ...styles.dotBase, ...styles.dotActive };
    if (completed.includes(i)) return { ...styles.dotBase, ...styles.dotDone };
    return styles.dotBase;
  }

  return (
    <div style={styles.body}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
        rel="stylesheet"
      />

      {/* ── Top bar ── */}
      <div style={styles.topbar}>
        <div style={styles.progLine(pct)} />
        <div style={styles.topbarInner}>
          <div style={styles.brand}>
            <span style={styles.brandIcon}>📷</span>
            <div>
              <h1 style={styles.brandH1}>Photography Basics</h1>
              <p style={styles.brandP}>
                Section {current + 1} of {total}
              </p>
            </div>
          </div>
          <span style={styles.progLabel}>{pct}%</span>
        </div>
      </div>

      {/* ── Main content ── */}
      <main style={styles.main} key={current}>
        {section.type === "complete" && <CompleteSection section={section} />}

        {section.type === "content" && (
          <ContentSection
            section={section}
            current={current}
            total={total}
            completed={completed}
            onPrev={onPrev}
            onNext={onNext}
          />
        )}

        {section.type === "quiz" && (
          <QuizSection
            section={section}
            current={current}
            total={total}
            quizAnswers={quizAnswers}
            quizScore={quizScore}
            onAnswer={handleAnswer}
            onCheck={handleCheck}
            onPrev={onPrev}
            onNext={onNext}
          />
        )}

        {/* ── Progress dots ── */}
        <div style={styles.dotsWrap}>
          {sections.map((_, i) => (
            <button
              key={i}
              style={dotStyle(i)}
              aria-label={`Go to section ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PhotographyBasics;
