import React, { useState } from "react";

const PhotographyBasics = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);

  const sections = [
    {
      type: "content",
      title: "Welcome to Photography!",
      content: "Photography means 'drawing with light'. It's the art of capturing moments and turning them into lasting memories.",
      points: [
        "You can use any camera - phone, DSLR, or mirrorless",
        "Great photography is about seeing light and moments",
        "Practice is more important than expensive gear"
      ],
      icon: "📷"
    },
    {
      type: "quiz",
      title: "Quick Check #1",
      questions: [
        {
          question: "What does photography literally mean?",
          options: ["Drawing with light", "Taking pictures", "Making art", "Recording video"],
          correct: 0
        },
        {
          question: "What's most important for great photography?",
          options: ["Expensive camera", "Practice and seeing light", "Big lens", "Flash"],
          correct: 1
        }
      ]
    },
    {
      type: "content",
      title: "Your Camera Basics",
      content: "Every camera has the same basic parts. Understanding them helps you take better photos.",
      points: [
        "Shutter button - takes the photo",
        "Screen/Viewfinder - shows what you're photographing",
        "Lens - focuses the light",
        "Mode dial - changes camera settings"
      ],
      icon: "📸"
    },
    {
      type: "content",
      title: "Understanding Aperture",
      content: "Aperture controls how much light enters your camera and how much of your photo is in focus.",
      points: [
        "Low f-number (f/1.8) = Blurry background",
        "High f-number (f/16) = Everything sharp",
        "Think of it like your eye's pupil - bigger in dark, smaller in bright light"
      ],
      icon: "🔍"
    },
    {
      type: "quiz",
      title: "Quick Check #2",
      questions: [
        {
          question: "What aperture creates a blurry background?",
          options: ["f/16", "f/1.8", "f/11", "f/22"],
          correct: 1
        },
        {
          question: "Aperture is like what part of your body?",
          options: ["Your ear", "Your eye's pupil", "Your hand", "Your mouth"],
          correct: 1
        }
      ]
    },
    {
      type: "content",
      title: "Shutter Speed",
      content: "Shutter speed controls how long your camera sees the scene. Fast freezes action, slow creates blur.",
      points: [
        "Fast (1/500) - Freezes running, sports",
        "Slow (1/30) - Creates motion blur",
        "Too slow = shaky photos (use tripod!)"
      ],
      icon: "⚡"
    },
    {
      type: "content",
      title: "ISO - Light Sensitivity",
      content: "ISO controls how sensitive your camera is to light. Low ISO for bright light, high ISO for dark.",
      points: [
        "ISO 100-400 - Bright daylight (best quality)",
        "ISO 800-1600 - Indoor/overcast",
        "ISO 3200+ - Very dark (more grain/noise)"
      ],
      icon: "💡"
    },
    {
      type: "quiz",
      title: "Quick Check #3",
      questions: [
        {
          question: "What shutter speed freezes a running person?",
          options: ["1/30", "1 second", "1/500", "1/10"],
          correct: 2
        },
        {
          question: "What ISO should you use in bright sunlight?",
          options: ["ISO 3200", "ISO 100", "ISO 1600", "ISO 800"],
          correct: 1
        }
      ]
    },
    {
      type: "content",
      title: "Camera Modes Made Simple",
      content: "Different modes give you different levels of control. Start simple, then advance!",
      points: [
        "Auto (Green) - Camera does everything",
        "Portrait mode - Blurs background automatically",
        "Sports mode - Freezes action",
        "Manual (M) - You control everything"
      ],
      icon: "🎛️"
    },
    {
      type: "content",
      title: "Rule of Thirds",
      content: "The easiest way to improve your composition. Imagine a tic-tac-toe grid on your photo.",
      points: [
        "Place your subject where lines cross",
        "Put horizon on top or bottom line (not middle)",
        "Creates more interesting photos than centering"
      ],
      icon: "📐"
    },
    {
      type: "quiz",
      title: "Quick Check #4",
      questions: [
        {
          question: "Where should you place your subject using rule of thirds?",
          options: ["Dead center", "Where grid lines cross", "At the edge", "Anywhere"],
          correct: 1
        },
        {
          question: "Which mode is best for freezing sports action?",
          options: ["Portrait mode", "Sports mode", "Macro mode", "Night mode"],
          correct: 1
        }
      ]
    },
    {
      type: "content",
      title: "Leading Lines",
      content: "Use natural lines in your scene to guide the viewer's eye to your subject.",
      points: [
        "Roads, paths, fences, rivers",
        "Creates depth in your photo",
        "Draws attention to what matters"
      ],
      icon: "➡️"
    },
    {
      type: "content",
      title: "Lighting - Golden Hour",
      content: "The best light happens just after sunrise and before sunset. Warm, soft, and magical!",
      points: [
        "Golden Hour = 1 hour after sunrise/before sunset",
        "Soft, warm, flattering light",
        "Avoid harsh midday sun when possible"
      ],
      icon: "🌅"
    },
    {
      type: "quiz",
      title: "Quick Check #5",
      questions: [
        {
          question: "What creates leading lines in a photo?",
          options: ["Colors", "Roads and paths", "Shadows", "Clouds"],
          correct: 1
        },
        {
          question: "When is Golden Hour?",
          options: ["Noon", "Midnight", "After sunrise/before sunset", "Any time"],
          correct: 2
        }
      ]
    },
    {
      type: "complete",
      title: "🎉 Congratulations!",
      content: "You've completed the Photography Basics course! You now understand the fundamentals to start your photography journey.",
      achievements: [
        "✓ Learned camera basics",
        "✓ Understood exposure (aperture, shutter, ISO)",
        "✓ Mastered composition techniques",
        "✓ Discovered the power of light"
      ],
      nextSteps: [
        "Practice daily - even with your phone",
        "Study photos you love",
        "Join photography communities",
        "Experiment and have fun!"
      ]
    }
  ];

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex });
  };

  const calculateScore = () => {
    const currentQuiz = sections[currentSection];
    if (!currentQuiz.questions) return;
    
    let correct = 0;
    currentQuiz.questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) correct++;
    });
    
    setQuizScore(correct);
    if (correct === currentQuiz.questions.length && !completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setQuizAnswers({});
      setQuizScore(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setQuizAnswers({});
      setQuizScore(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentData = sections[currentSection];
  const progress = ((currentSection + 1) / sections.length) * 100;
  const isQuiz = currentData.type === "quiz";
  const isComplete = currentData.type === "complete";

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Progress Bar */}
      <div className="sticky top-0 z-50 bg-white border-b-4 border-amber-500 shadow-md">
        <div className="w-full h-2 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-white p-2 rounded-lg">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">Photography Basics</p>
              <p className="text-sm text-blue-600 font-medium">Section {currentSection + 1} of {sections.length}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-amber-600">{Math.round(progress)}% Complete</p>
            {completedSections.length > 0 && (
              <p className="text-xs text-green-600 font-semibold">✓ {completedSections.length} quizzes passed</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Completion Section */}
        {isComplete ? (
          <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="text-7xl mb-6">🏆</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{currentData.title}</h2>
            <p className="text-xl mb-10 text-white/95">{currentData.content}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
              <div className="bg-white/25 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
                <h3 className="font-bold mb-4 text-2xl text-white">What You Learned:</h3>
                <ul className="space-y-3">
                  {currentData.achievements.map((item, idx) => (
                    <li key={idx} className="text-white text-base flex items-center gap-2">
                      <span className="text-yellow-300">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/25 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
                <h3 className="font-bold mb-4 text-2xl text-white">Next Steps:</h3>
                <ul className="space-y-3">
                  {currentData.nextSteps.map((step, idx) => (
                    <li key={idx} className="text-white text-base flex items-center gap-2">
                      <span className="text-yellow-300">▸</span> {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 inline-block">
              <p className="text-xl font-bold text-white">Keep creating amazing photos! 📸</p>
            </div>
          </div>
        ) : (
          <>
            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-200 overflow-hidden">
              {/* Section Header */}
              <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-lg">
                    <span className="text-4xl">{currentData.icon}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{currentData.title}</h2>
                </div>
              </div>

              {/* Section Body */}
              <div className="p-6 md:p-10">
                {!isQuiz ? (
                  /* Content Section */}
                  <div className="space-y-8">
                    <p className="text-xl text-gray-800 leading-relaxed font-medium">
                      {currentData.content}
                    </p>
                    
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8 border-4 border-amber-300">
                      <h3 className="font-bold text-amber-800 mb-6 flex items-center gap-3 text-xl">
                        <span className="bg-amber-500 text-white p-2 rounded-lg text-2xl">💡</span> 
                        Key Points:
                      </h3>
                      <ul className="space-y-4">
                        {currentData.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-gray-800 bg-white p-4 rounded-xl shadow-sm border-2 border-amber-100">
                            <span className="text-amber-500 font-bold text-2xl leading-none">▸</span>
                            <span className="leading-relaxed text-lg">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tip Box */}
                    <div className="bg-blue-50 border-l-8 border-blue-500 p-6 rounded-r-2xl shadow-md">
                      <p className="text-gray-800 text-lg">
                        <span className="font-bold text-blue-600 text-xl">Pro Tip:</span> 
                        <span className="text-gray-700 ml-2"> Don't worry about getting everything perfect. Photography is about practice and having fun!</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Quiz Section */}
                  <div className="space-y-8">
                    <div className="bg-blue-50 border-4 border-blue-300 rounded-2xl p-6">
                      <p className="text-blue-800 font-bold text-xl flex items-center gap-3">
                        <span className="text-2xl">📝</span> Answer both questions to continue:
                      </p>
                    </div>

                    {currentData.questions.map((q, qIdx) => (
                      <div key={qIdx} className="bg-gray-50 rounded-2xl p-6 md:p-8 border-4 border-gray-200">
                        <p className="font-bold text-gray-900 mb-6 text-xl">
                          <span className="bg-amber-500 text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3 text-base">
                            {qIdx + 1}
                          </span>
                          {q.question}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {q.options.map((option, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleQuizAnswer(qIdx, oIdx)}
                              disabled={quizScore !== null}
                              className={`p-5 rounded-xl text-left font-bold text-lg transition-all border-4 ${
                                quizAnswers[qIdx] === oIdx
                                  ? 'bg-amber-500 border-amber-500 text-white shadow-xl scale-105'
                                  : 'bg-white border-gray-200 hover:border-amber-400 hover:bg-amber-50'
                              } ${
                                quizScore !== null && oIdx === q.correct
                                  ? 'bg-green-500 border-green-500 text-white shadow-xl'
                                  : ''
                              } ${
                                quizScore !== null && quizAnswers[qIdx] === oIdx && oIdx !== q.correct
                                  ? 'bg-red-500 border-red-500 text-white shadow-xl'
                                  : ''
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}

                    {quizScore === null ? (
                      <button
                        onClick={calculateScore}
                        disabled={Object.keys(quizAnswers).length < currentData.questions.length}
                        className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 disabled:from-gray-300 disabled:via-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:scale-105 text-xl"
                      >
                        Check My Answers ✓
                      </button>
                    ) : (
                      <div className={`text-center p-8 rounded-2xl border-4 ${
                        quizScore === currentData.questions.length 
                          ? 'bg-green-50 border-green-400' 
                          : 'bg-yellow-50 border-yellow-400'
                      }`}>
                        <p className="text-4xl font-bold mb-3">
                          {quizScore === currentData.questions.length ? '🎉 Perfect!' : '👍 Good Try!'}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mb-3">
                          Score: {quizScore}/{currentData.questions.length}
                        </p>
                        <p className="text-gray-700 text-lg">
                          {quizScore === currentData.questions.length 
                            ? "You're ready for the next section!" 
                            : "Review the material and try again if you want!"}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 gap-4">
              <button
                onClick={prevSection}
                disabled={currentSection === 0}
                className="flex-1 md:flex-none px-8 py-4 bg-white border-4 border-amber-400 text-amber-600 font-bold rounded-2xl hover:bg-amber-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg text-lg"
              >
                ← Previous
              </button>
              
              <button
                onClick={nextSection}
                disabled={isQuiz && quizScore === null}
                className="flex-1 md:flex-none px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 disabled:from-gray-300 disabled:via-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold rounded-2xl shadow-xl transition-all transform hover:scale-105 text-lg"
              >
                {currentSection === sections.length - 2 ? 'Finish Course 🎉' : 'Next Section'} →
              </button>
            </div>
          </>
        )}

        {/* Progress Dots */}
        <div className="mt-12 flex justify-center gap-3 flex-wrap">
          {sections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSection(idx);
                setQuizAnswers({});
                setQuizScore(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-4 h-4 rounded-full transition-all border-2 ${
                idx === currentSection 
                  ? 'bg-amber-500 border-amber-600 w-10' 
                  : completedSections.includes(idx)
                  ? 'bg-green-500 border-green-600'
                  : 'bg-gray-200 border-gray-300 hover:bg-amber-300'
              }`}
              aria-label={`Go to section ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographyBasics;