import { useState } from "react";

/* ─── Course Data ─── */
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

/* ─── Navigation Row Component ─── */
function NavRow({ current, total, nextDisabled, onPrev, onNext }) {
  const isLast = current >= total - 2; // Check if we are at the second to last section (since last is 'complete')
  
  return (
    <div className="flex gap-2 mt-10 pt-6 border-t border-gray-100">
      <button
        disabled={current === 0}
        onClick={onPrev}
        className="flex-1 py-3 px-4 rounded-lg text-sm font-semibold bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        ← Back
      </button>
      <button
        disabled={nextDisabled}
        onClick={onNext}
        className="flex-1 py-3 px-4 rounded-lg text-sm font-semibold bg-amber-400 text-white hover:bg-amber-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        {isLast ? "Finish →" : "Next →"}
      </button>
    </div>
  );
}

/* ─── Content Section Component ─── */
function ContentSection({ section, current, total, onPrev, onNext }) {
  return (
    <>
      <span className="text-3xl block mb-4">{section.icon}</span>
      <h2 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 leading-tight mb-2">
        {section.title}
      </h2>
      <div className="w-9 h-0.5 bg-amber-400 my-4" />
      <p className="text-gray-500 leading-relaxed mb-8">{section.content}</p>

      <ul className="mb-9 divide-y divide-gray-100 border-t border-gray-100">
        {section.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 py-3.5 text-sm text-gray-800 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 leading-relaxed pl-3 border-l-2 border-amber-400 mb-10">
        <strong className="text-amber-700 font-semibold">Pro tip:</strong>{" "}
        Don't worry about getting everything perfect. Photography is about practice and having fun!
      </p>

      <NavRow current={current} total={total} nextDisabled={false} onPrev={onPrev} onNext={onNext} />
    </>
  );
}

/* ─── Quiz Section Component ─── */
function QuizSection({ section, current, total, quizAnswers, quizScore, onAnswer, onCheck, onPrev, onNext }) {
  const allAnswered = Object.keys(quizAnswers).length >= section.questions.length;

  function optClass(qi, oi, correct) {
    const base = "w-full text-left px-4 py-3 rounded-lg text-sm border transition-colors cursor-pointer disabled:cursor-not-allowed ";
    if (quizScore !== null) {
      if (oi === correct) return base + "border-green-400 text-green-800 bg-green-50";
      if (quizAnswers[qi] === oi) return base + "border-red-400 text-red-800 bg-red-50";
      return base + "border-gray-200 text-gray-400 bg-white";
    }
    if (quizAnswers[qi] === oi) return base + "border-amber-400 text-amber-800";
    return base + "border-gray-200 text-gray-800 bg-white hover:border-amber-300";
  }

  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 leading-tight mb-2">
        {section.title}
      </h2>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
        Answer all questions to continue
      </p>

      {section.questions.map((q, qi) => (
        <div key={qi}>
          {qi > 0 && <div className="h-px bg-gray-100 my-7" />}
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            Question {qi + 1}
          </p>
          <p className="font-serif text-lg text-gray-900 leading-snug mb-4">{q.question}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                disabled={quizScore !== null}
                onClick={() => onAnswer(qi, oi)}
                className={optClass(qi, oi, q.correct)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      {quizScore === null ? (
        <button
          disabled={!allAnswered}
          onClick={onCheck}
          className="w-full mt-7 py-3.5 rounded-lg text-sm font-semibold bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Check answers
        </button>
      ) : (
        <>
          <div className="mt-7 pt-6 border-t border-gray-100 flex items-center gap-4">
            <span className="text-3xl">
              {quizScore === section.questions.length ? "🎉" : "👍"}
            </span>
            <div>
              <p className="font-serif text-xl text-gray-900">
                {quizScore}/{section.questions.length} correct
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                {quizScore === section.questions.length
                  ? "Perfect — ready to continue!"
                  : "Keep going — you can review later."}
              </p>
            </div>
          </div>
          <NavRow current={current} total={total} nextDisabled={false} onPrev={onPrev} onNext={onNext} />
        </>
      )}
    </>
  );
}

/* ─── Complete Section Component ─── */
function CompleteSection({ section }) {
  return (
    <>
      <span className="text-5xl block mb-5">🏆</span>
      <h2 className="text-3xl sm:text-4xl font-serif font-normal text-gray-900 mb-3">{section.title}</h2>
      <p className="text-gray-500 leading-relaxed mb-9">{section.content}</p>

      <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">
        What you learned
      </p>
      <ul className="mb-9 divide-y divide-gray-100 border-t border-gray-100">
        {section.achievements.map((a, i) => (
          <li key={i} className="flex items-start gap-3 py-3 text-sm text-gray-800 leading-relaxed">
            <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
            {a}
          </li>
        ))}
      </ul>

      <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">
        Next steps
      </p>
      <ul className="divide-y divide-gray-100 border-t border-gray-100">
        {section.nextSteps.map((s, i) => (
          <li key={i} className="flex items-start gap-3 py-3 text-sm text-gray-800 leading-relaxed">
            <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
            {s}
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-400 mt-8 pt-6 border-t border-gray-100">
        Keep creating amazing photos 📸
      </p>
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
  if (section.type === "content" && !completed.includes(current)) {
    markCompleted(current);
  }

  function handleAnswer(qi, oi) {
    setQuizAnswers((prev) => ({ ...prev, [qi]: oi }));
  }

  function handleCheck() {
    let correct = 0;
    section.questions.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++;
    });
    setQuizScore(correct);
    if (correct === section.questions.length) markCompleted(current);
  }

  return (
    // ✅ pt-20 adds ~80px top padding to clear your fixed Navbar
    <div className="bg-white min-h-screen pt-20 pb-12">
      
      {/* ── Progress Bar (Scrolls with content, NOT fixed) ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-8">
        <div className="border-b border-gray-100">
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 transition-all duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-xs text-gray-400 font-medium">
              Section {current + 1} of {total}
            </span>
            <span className="text-xs font-semibold text-amber-700">{pct}%</span>
          </div>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6" key={current}>
        
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

        {/* ── Progress Dots ── */}
        <div className="flex justify-center flex-wrap gap-2 mt-12 pb-8">
          {sections.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to section ${i + 1}`}
              onClick={() => goTo(i)}
              className={[
                "h-2 rounded-full border-none cursor-pointer transition-all duration-200",
                i === current
                  ? "w-6 bg-amber-400"
                  : completed.includes(i)
                  ? "w-2 bg-green-400"
                  : "w-2 bg-gray-200 hover:bg-gray-300",
              ].join(" ")}
            />
          ))}
        </div>

      </div>
    </div>
  );
}