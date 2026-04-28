import { useState } from "react";

const sections = [
  // ... (your sections array remains exactly as you wrote it)
];

/* ─── Complete Inline Styles ─── */
const styles = {
  body: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#fff",
    color: "#1a1a2e",
    minHeight: "100vh",
    margin: 0,
  },
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
  main: {
    padding: "72px 24px 64px",
    maxWidth: 640,
    margin: "0 auto",
  },
  sIcon: { fontSize: "2rem", display: "block", marginBottom: 18 },
  sTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(1.7rem, 5vw, 2.2rem)",
    fontWeight: 400,
    lineHeight: 1.2,
    marginBottom: 8,
    margin: 0,
  },
  sContent: {
    fontSize: "1.05rem",
    lineHeight: 1.6,
    color: "#3a3a5a",
    marginBottom: 20,
  },
  pointsList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 24px 0",
  },
  pointsItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "10px 0",
    fontSize: "1rem",
    color: "#3a3a5a",
    lineHeight: 1.5,
  },
  pointsItemFirst: { paddingTop: 0 },
  pointDot: {
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#b87d1a",
    marginTop: 7,
    flexShrink: 0,
  },
  tip: {
    background: "#fff8e6",
    borderLeft: "3px solid #e8a838",
    padding: "12px 16px",
    borderRadius: "0 8px 8px 0",
    fontSize: ".95rem",
    margin: "24px 0",
    color: "#5a5a7a",
  },
  divider: {
    height: 1,
    background: "linear-gradient(90deg, transparent, #ebebeb, transparent)",
    margin: "24px 0",
  },
  // Navigation
  navRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    paddingTop: 20,
    borderTop: "1px solid #ebebeb",
  },
  navBtn: {
    background: "#fff",
    border: "1px solid #d0d0e0",
    color: "#1a1a2e",
    padding: "10px 20px",
    borderRadius: 8,
    fontSize: ".95rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all .2s ease",
  },
  navBtnDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  navBtnPrimary: {
    background: "#b87d1a",
    borderColor: "#b87d1a",
    color: "#fff",
  },
  // Quiz styles
  quizIntro: {
    fontSize: ".95rem",
    color: "#6b6b80",
    marginBottom: 24,
    fontStyle: "italic",
  },
  qSep: { height: 20 },
  qLabel: {
    fontSize: ".8rem",
    fontWeight: 600,
    color: "#b87d1a",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "0 0 6px 0",
  },
  qText: {
    fontSize: "1.1rem",
    fontWeight: 500,
    margin: "0 0 14px 0",
    lineHeight: 1.4,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 20,
  },
  optBase: {
    textAlign: "left",
    padding: "12px 16px",
    border: "2px solid #d0d0e0",
    borderRadius: 10,
    background: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all .15s ease",
    color: "#1a1a2e",
  },
  optSelected: {
    borderColor: "#b87d1a",
    background: "#fffaf0",
    fontWeight: 500,
  },
  optCorrect: {
    borderColor: "#22c55e",
    background: "#f0fdf4",
    fontWeight: 600,
  },
  optWrong: {
    borderColor: "#ef4444",
    background: "#fef2f2",
    textDecoration: "line-through",
    opacity: 0.8,
  },
  btnCheck: {
    width: "100%",
    padding: "14px",
    background: "#b87d1a",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background .2s ease",
  },
  btnCheckDisabled: {
    background: "#d0d0e0",
    cursor: "not-allowed",
  },
  scoreRow: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "16px",
    background: "#f8fafc",
    borderRadius: 12,
    marginBottom: 24,
    border: "1px solid #ebebeb",
  },
  scoreEmoji: { fontSize: "1.5rem" },
  scoreNum: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#1a1a2e",
  },
  scoreSubtext: {
    margin: "4px 0 0 0",
    fontSize: ".9rem",
    color: "#6b6b80",
  },
  // Completion styles
  completeIcon: {
    fontSize: "3rem",
    display: "block",
    textAlign: "center",
    marginBottom: 12,
  },
  completeTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(1.8rem, 6vw, 2.4rem)",
    textAlign: "center",
    margin: "0 0 12px 0",
    color: "#1a1a2e",
  },
  completeSub: {
    textAlign: "center",
    fontSize: "1.05rem",
    color: "#3a3a5a",
    lineHeight: 1.6,
    marginBottom: 28,
  },
  completeGroupLabel: {
    fontSize: ".85rem",
    fontWeight: 600,
    color: "#6b6b80",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "24px 0 12px 0",
  },
  completeList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  completeItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "10px 0",
    fontSize: "1rem",
    color: "#3a3a5a",
  },
  completeItemFirst: { paddingTop: 0 },
  completeCheck: {
    color: "#22c55e",
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginTop: 2,
  },
  completeFooter: {
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: 500,
    color: "#b87d1a",
    marginTop: 32,
    paddingTop: 24,
    borderTop: "1px solid #ebebeb",
  },
  // Progress dots
  dotsWrap: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: 40,
    paddingTop: 24,
    borderTop: "1px solid #ebebeb",
  },
  dotBase: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    border: "2px solid #d0d0e0",
    background: "#fff",
    cursor: "pointer",
    transition: "all .2s ease",
    padding: 0,
  },
  dotActive: {
    borderColor: "#b87d1a",
    background: "#b87d1a",
    transform: "scale(1.15)",
  },
  dotDone: {
    background: "#22c55e",
    borderColor: "#22c55e",
  },
};

/* ─── Helper Components ─── */
function NavRow({ current, total, nextDisabled, onPrev, onNext }) {
  return (
    <div style={styles.navRow}>
      <button
        style={{
          ...styles.navBtn,
          ...(current === 0 ? styles.navBtnDisabled : {}),
        }}
        disabled={current === 0}
        onClick={onPrev}
      >
        ← Previous
      </button>
      <span style={{ fontSize: ".9rem", color: "#6b6b80" }}>
        {current + 1} / {total}
      </span>
      <button
        style={{
          ...styles.navBtn,
          ...styles.navBtnPrimary,
          ...(nextDisabled ? styles.navBtnDisabled : {}),
        }}
        disabled={nextDisabled}
        onClick={onNext}
      >
        {current === total - 1 ? "Finish" : "Next"} →
      </button>
    </div>
  );
}

function ContentSection({ section, current, total, onPrev, onNext }) {
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

/* ─── Main Component ─── */
export default function PhotographyBasics() {
  const [current, setCurrent] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  const [completed, setCompleted] = useState([]);

  const total = sections.length;
  const section = sections[current];
  const pct = Math.round(((current + 1) / total) * 100);

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

  // Auto-mark content sections as completed on view
  // Note: In production, consider using useEffect to avoid render-side effects
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

      {/* Top bar */}
      <div style={styles.topbar}>
        <div style={styles.progLine(pct)} />
        <div style={styles.topbarInner}>
          <div style={styles.brand}>
            <span style={styles.brandIcon}>📷</span>
            <div>
              <h1 style={styles.brandH1}>Photography Basics</h1>
              <p style={styles.brandP}>Section {current + 1} of {total}</p>
            </div>
          </div>
          <span style={styles.progLabel}>{pct}%</span>
        </div>
      </div>

      {/* Main content */}
      <main style={styles.main} key={current}>
        {section.type === "complete" && <CompleteSection section={section} />}
        {section.type === "content" && (
          <ContentSection
            section={section}
            current={current}
            total={total}
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

        {/* Progress dots */}
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
}