import React, { useState, useEffect } from "react";

const PhotographyBasics = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  const [matchingPairs, setMatchingPairs] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);

  const sections = [
    {
      title: "Introduction to Photography",
      slides: [
        {
          type: "content",
          title: "What is Photography?",
          content: "Photography comes from Greek words 'photos' (light) and 'graphos' (drawing). It's the art of capturing light to create permanent images.",
          keyPoints: [
            "Drawing with light",
            "Digital vs Film photography",
            "Camera types: DSLR, Mirrorless, Point-and-Shoot, Smartphone"
          ],
          imagePrompt: "Professional photography setup showing different camera types arranged on a wooden table"
        },
        {
          type: "content",
          title: "Camera Types",
          content: "Understanding different camera systems helps you choose the right tool for your photography journey.",
          keyPoints: [
            "DSLR: Digital Single-Lens Reflex with mirror mechanism",
            "Mirrorless: Compact, electronic viewfinder",
            "Point-and-Shoot: Simple, automatic operation",
            "Smartphone: Always accessible, computational photography"
          ]
        }
      ],
      quiz: [
        {
          question: "What does the word 'photography' literally mean?",
          options: ["Drawing with light", "Capturing moments", "Digital imaging", "Film processing"],
          correct: 0
        },
        {
          question: "Which camera type uses a mirror mechanism?",
          options: ["Mirrorless", "Point-and-Shoot", "DSLR", "Smartphone"],
          correct: 2
        }
      ]
    },
    {
      title: "Understanding Your Camera",
      slides: [
        {
          type: "content",
          title: "Key Camera Parts",
          content: "Familiarize yourself with essential camera components to operate your camera effectively.",
          keyPoints: [
            "Viewfinder/LCD Screen - Framing your shot",
            "Shutter Button - Taking the photo",
            "Mode Dial - Selecting shooting modes",
            "Lens Mount - Where lens attaches",
            "Memory Card Slot - Storage",
            "Control Dials/Buttons - Adjusting settings"
          ]
        }
      ],
      quiz: [
        {
          question: "What is the function of the mode dial?",
          options: ["Taking photos", "Selecting shooting modes", "Storing images", "Focusing the lens"],
          correct: 1
        }
      ]
    },
    {
      title: "Exposure Triangle",
      slides: [
        {
          type: "content",
          title: "Aperture (f-stop)",
          content: "Aperture controls the size of the lens opening and affects depth of field.",
          keyPoints: [
            "Measured in f-stops: f/1.4, f/2.8, f/4, f/5.6, f/8, f/11, f/16, f/22",
            "Low f-number = Large opening = More light = Shallow depth of field",
            "High f-number = Small opening = Less light = Deep depth of field",
            "Affects background blur (bokeh)"
          ]
        },
        {
          type: "content",
          title: "Shutter Speed",
          content: "Shutter speed controls how long the sensor is exposed to light.",
          keyPoints: [
            "Measured in seconds/fractions: 1/1000, 1/500, 1/250, 1/60, 1/30, 1\", 5\", 30\"",
            "Fast shutter (1/500+) = Freezes motion",
            "Slow shutter (1/60-) = Creates motion blur",
            "Rule: Minimum 1/focal length to avoid camera shake"
          ]
        },
        {
          type: "content",
          title: "ISO",
          content: "ISO controls sensor sensitivity to light.",
          keyPoints: [
            "Common values: 100, 200, 400, 800, 1600, 3200, 6400+",
            "Low ISO (100-400) = Less sensitive = Better quality = Bright light",
            "High ISO (800+) = More sensitive = More noise/grain = Low light",
            "Trade-off: Higher ISO = More digital noise"
          ]
        }
      ],
      matching: {
        title: "Match the Exposure Settings",
        pairs: [
          { term: "f/1.8", definition: "Shallow depth of field" },
          { term: "1/1000s", definition: "Freezes fast action" },
          { term: "ISO 100", definition: "Best quality, bright light" },
          { term: "f/16", definition: "Deep depth of field" },
          { term: "ISO 3200", definition: "Low light, more noise" },
          { term: "1/30s", definition: "Motion blur possible" }
        ]
      },
      quiz: [
        {
          question: "Which aperture creates more background blur?",
          options: ["f/16", "f/8", "f/2.8", "f/11"],
          correct: 2
        },
        {
          question: "What shutter speed would you use to freeze a running athlete?",
          options: ["1/30s", "1/1000s", "1/60s", "1 second"],
          correct: 1
        },
        {
          question: "What happens when you increase ISO?",
          options: ["Better quality", "Less noise", "More noise", "Darker image"],
          correct: 2
        }
      ]
    },
    {
      title: "Camera Modes",
      slides: [
        {
          type: "content",
          title: "Shooting Modes",
          content: "Different camera modes give you varying levels of control over your settings.",
          keyPoints: [
            "Auto (Green) - Camera makes all decisions",
            "Program (P) - Camera sets aperture & shutter, you control ISO/flash",
            "Aperture Priority (A/Av) - You set aperture, camera sets shutter",
            "Shutter Priority (S/Tv) - You set shutter, camera sets aperture",
            "Manual (M) - Full control over all settings",
            "Scene Modes - Portrait, Landscape, Sports, Macro, etc."
          ]
        }
      ],
      quiz: [
        {
          question: "In Aperture Priority mode, what do you control?",
          options: ["Shutter speed only", "Aperture only", "Both aperture and shutter", "Nothing"],
          correct: 1
        },
        {
          question: "Which mode gives you complete control?",
          options: ["Auto", "Program", "Manual", "Aperture Priority"],
          correct: 2
        }
      ]
    },
    {
      title: "Composition Techniques",
      slides: [
        {
          type: "content",
          title: "Rule of Thirds",
          content: "Divide your frame into 9 equal sections and place important elements along lines or intersections.",
          keyPoints: [
            "Creates more dynamic, interesting images",
            "Place horizon on top or bottom third",
            "Position subjects at intersection points"
          ]
        },
        {
          type: "content",
          title: "Leading Lines",
          content: "Use natural lines to guide the viewer's eye through your image.",
          keyPoints: [
            "Roads, paths, fences, rivers, bridges",
            "Creates depth and direction",
            "Draws attention to your subject"
          ]
        },
        {
          type: "content",
          title: "Framing & Symmetry",
          content: "Use elements to create frames within frames and explore symmetrical compositions.",
          keyPoints: [
            "Framing: Windows, doors, arches, tree branches",
            "Symmetry: Balanced, mirrored compositions",
            "Patterns: Repetitive elements create visual interest"
          ]
        }
      ],
      quiz: [
        {
          question: "How many sections does the rule of thirds divide the frame into?",
          options: ["4", "6", "9", "12"],
          correct: 2
        },
        {
          question: "What do leading lines create in a photograph?",
          options: ["Blur", "Depth and direction", "Color casts", "Noise"],
          correct: 1
        }
      ]
    },
    {
      title: "Focus and Depth of Field",
      slides: [
        {
          type: "content",
          title: "Autofocus Modes",
          content: "Different autofocus modes suit different shooting situations.",
          keyPoints: [
            "AF-S (Single) - For stationary subjects",
            "AF-C (Continuous) - For moving subjects",
            "AF-A (Automatic) - Camera decides",
            "Depth of Field: Area in acceptable focus"
          ]
        },
        {
          type: "content",
          title: "Depth of Field Control",
          content: "Control what's in focus and what's blurred in your images.",
          keyPoints: [
            "Shallow DOF: Isolated subject, blurred background (wide aperture)",
            "Deep DOF: Everything sharp from front to back (narrow aperture)",
            "Affected by aperture, focal length, and distance"
          ]
        }
      ],
      quiz: [
        {
          question: "Which autofocus mode is best for sports?",
          options: ["AF-S", "AF-C", "Manual Focus", "AF-A"],
          correct: 1
        }
      ]
    },
    {
      title: "White Balance & Color",
      slides: [
        {
          type: "content",
          title: "Color Temperature",
          content: "White balance ensures accurate colors under different lighting conditions.",
          keyPoints: [
            "Measured in Kelvin (K)",
            "Warm light (2000-4000K) - Sunrise/sunset, tungsten",
            "Neutral light (4000-5500K) - Midday sun, flash",
            "Cool light (5500-8000K) - Overcast, shade"
          ]
        }
      ],
      matching: {
        title: "Match Color Temperatures",
        pairs: [
          { term: "2000-3000K", definition: "Candlelight/Tungsten" },
          { term: "5500K", definition: "Daylight/Flash" },
          { term: "7000K+", definition: "Overcast/Shade" },
          { term: "4000K", definition: "Fluorescent" }
        ]
      },
      quiz: [
        {
          question: "What color cast does tungsten light create?",
          options: ["Blue", "Orange/Warm", "Green", "Purple"],
          correct: 1
        }
      ]
    },
    {
      title: "Lens Types",
      slides: [
        {
          type: "content",
          title: "Focal Length Guide",
          content: "Different focal lengths serve different photographic purposes.",
          keyPoints: [
            "Wide-angle (10-35mm) - Landscapes, architecture",
            "Standard (35-70mm) - Everyday, street photography",
            "Telephoto (70-200mm+) - Sports, wildlife, portraits",
            "Prime - Fixed focal length, sharper",
            "Zoom - Variable focal length, versatile"
          ]
        }
      ],
      quiz: [
        {
          question: "Which lens is best for wildlife photography?",
          options: ["Wide-angle", "Standard", "Telephoto", "Fisheye"],
          correct: 2
        }
      ]
    },
    {
      title: "Lighting Fundamentals",
      slides: [
        {
          type: "content",
          title: "Natural Light",
          content: "Understanding natural light helps you capture better images.",
          keyPoints: [
            "Golden Hour (sunrise/sunset) - Warm, soft, flattering",
            "Blue Hour (dawn/dusk) - Cool, moody",
            "Midday - Harsh, strong shadows",
            "Overcast - Soft, diffused, even"
          ]
        },
        {
          type: "content",
          title: "Light Direction",
          content: "The direction of light dramatically affects your image.",
          keyPoints: [
            "Front lighting - Even illumination",
            "Side lighting - Texture, depth, drama",
            "Back lighting - Silhouettes, rim light",
            "Hard vs Soft light quality"
          ]
        }
      ],
      quiz: [
        {
          question: "When is the golden hour?",
          options: ["Midday", "Sunrise/Sunset", "Midnight", "Noon"],
          correct: 1
        }
      ]
    },
    {
      title: "File Formats",
      slides: [
        {
          type: "content",
          title: "RAW vs JPEG",
          content: "Choosing the right file format affects your editing flexibility.",
          keyPoints: [
            "JPEG: Compressed, smaller, ready to share, limited editing",
            "RAW: Uncompressed, larger, maximum editing flexibility",
            "RAW: 12-14 bit color depth vs JPEG 8-bit",
            "Recommendation: Shoot RAW+JPEG"
          ]
        }
      ],
      quiz: [
        {
          question: "Which format offers more editing flexibility?",
          options: ["JPEG", "RAW", "Both equal", "Neither"],
          correct: 1
        }
      ]
    }
  ];

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex });
  };

  const calculateScore = () => {
    const currentQuiz = sections[currentSection].quiz;
    let correct = 0;
    currentQuiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) correct++;
    });
    setQuizScore(correct);
    if (correct === currentQuiz.length && !completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
  };

  const handleMatchingClick = (type, item) => {
    if (type === 'term') {
      setSelectedTerm(item);
    } else if (type === 'definition' && selectedTerm) {
      const newPairs = [...matchingPairs, { term: selectedTerm, definition: item }];
      setMatchingPairs(newPairs);
      setSelectedTerm(null);
    }
  };

  const resetMatching = () => {
    setMatchingPairs([]);
    setSelectedTerm(null);
  };

  const nextSlide = () => {
    const section = sections[currentSection];
    if (currentSlide < section.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (section.quiz || section.matching) {
      setCurrentSlide(section.slides.length);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentSlide(0);
      setQuizAnswers({});
      setQuizScore(null);
      resetMatching();
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentSlide(0);
      setQuizAnswers({});
      setQuizScore(null);
      resetMatching();
    }
  };

  const currentSectionData = sections[currentSection];
  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            📷 Photography Basics
          </h1>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-300">Section {currentSection + 1} of {sections.length} • {Math.round(progress)}% Complete</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSection(idx);
                setCurrentSlide(0);
                setQuizAnswers({});
                setQuizScore(null);
                resetMatching();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentSection === idx 
                  ? 'bg-white text-purple-900' 
                  : completedSections.includes(idx)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {completedSections.includes(idx) ? '✓ ' : ''}{section.title}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">{currentSectionData.title}</h2>

          {/* Slides Content */}
          {currentSlide < currentSectionData.slides.length && (
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  {currentSectionData.slides[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  {currentSectionData.slides[currentSlide].content}
                </p>
                
                {currentSectionData.slides[currentSlide].keyPoints && (
                  <ul className="space-y-3">
                    {currentSectionData.slides[currentSlide].keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-3 text-xl">▸</span>
                        <span className="text-gray-200">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {currentSectionData.slides[currentSlide].imagePrompt && (
                  <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400 italic">
                      📸 Visual: {currentSectionData.slides[currentSlide].imagePrompt}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quiz Section */}
          {currentSlide === currentSectionData.slides.length && currentSectionData.quiz && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-green-400">📝 Quick Quiz</h3>
              
              {currentSectionData.quiz.map((q, qIdx) => (
                <div key={qIdx} className="bg-gray-800/50 rounded-xl p-6">
                  <p className="text-lg font-medium mb-4">{qIdx + 1}. {q.question}</p>
                  <div className="space-y-3">
                    {q.options.map((option, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleQuizAnswer(qIdx, oIdx)}
                        className={`w-full text-left p-4 rounded-lg transition-all ${
                          quizAnswers[qIdx] === oIdx
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-700 hover:bg-gray-600'
                        } ${
                          quizScore !== null && oIdx === q.correct
                            ? 'bg-green-600'
                            : ''
                        } ${
                          quizScore !== null && quizAnswers[qIdx] === oIdx && oIdx !== q.correct
                            ? 'bg-red-600'
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
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105"
                >
                  Check Answers
                </button>
              ) : (
                <div className="text-center p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/50">
                  <p className="text-3xl font-bold text-green-400 mb-2">
                    Score: {quizScore}/{currentSectionData.quiz.length}
                  </p>
                  <p className="text-gray-300">
                    {quizScore === currentSectionData.quiz.length 
                      ? '🎉 Perfect! You mastered this section!' 
                      : 'Keep practicing! Review the material and try again.'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Matching Exercise */}
          {currentSlide === currentSectionData.slides.length && currentSectionData.matching && !currentSectionData.quiz && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">🔄 Matching Exercise</h3>
              <p className="text-gray-300 mb-4">Click a term, then click its matching definition</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-yellow-400 mb-3">Terms</h4>
                  {currentSectionData.matching.pairs.map((pair, idx) => (
                    <button
                      key={`term-${idx}`}
                      onClick={() => handleMatchingClick('term', pair.term)}
                      className={`w-full p-4 rounded-lg text-left transition-all ${
                        selectedTerm === pair.term
                          ? 'bg-purple-600 text-white'
                          : matchingPairs.find(p => p.term === pair.term)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {pair.term}
                    </button>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-400 mb-3">Definitions</h4>
                  {currentSectionData.matching.pairs.map((pair, idx) => (
                    <button
                      key={`def-${idx}`}
                      onClick={() => handleMatchingClick('definition', pair.definition)}
                      className={`w-full p-4 rounded-lg text-left transition-all ${
                        matchingPairs.find(p => p.definition === pair.definition)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {pair.definition}
                    </button>
                  ))}
                </div>
              </div>

              {matchingPairs.length === currentSectionData.matching.pairs.length && (
                <div className="text-center p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/50">
                  <p className="text-2xl font-bold text-green-400">🎉 All Matched!</p>
                </div>
              )}

              <button
                onClick={resetMatching}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-xl transition-all"
              >
                Reset Exercise
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            <button
              onClick={prevSection}
              disabled={currentSection === 0}
              className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
            >
              ← Previous Section
            </button>

            <div className="flex gap-3">
              {currentSlide > 0 && (
                <button
                  onClick={prevSlide}
                  className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all font-medium"
                >
                  ← Back
                </button>
              )}
              
              {(currentSlide < currentSectionData.slides.length || currentSectionData.quiz || currentSectionData.matching) && (
                <button
                  onClick={currentSlide < currentSectionData.slides.length ? nextSlide : nextSection}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                >
                  {currentSlide < currentSectionData.slides.length - 1 || (!currentSectionData.quiz && !currentSectionData.matching) 
                    ? 'Next →' 
                    : currentSection === sections.length - 1 
                    ? 'Finish Course' 
                    : 'Next Section →'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="mt-8 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">📋 Quick Settings Reference</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="font-semibold text-blue-400 mb-2">Bright Sunlight</p>
              <p className="text-gray-300">f/8-f/11 • 1/200-1/500s • ISO 100-200</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="font-semibold text-purple-400 mb-2">Portrait</p>
              <p className="text-gray-300">f/1.8-f/4 • 1/125-1/250s • ISO 100-800</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="font-semibold text-green-400 mb-2">Low Light</p>
              <p className="text-gray-300">f/2.8+ • 1/60-1/125s • ISO 1600-3200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyBasics;