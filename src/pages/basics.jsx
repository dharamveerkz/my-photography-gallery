import React from "react";
import PhotographyBasics from "../components/PhotographyBasics";

const Basics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
            📷 Photography Basics
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Master the fundamentals of photography through interactive lessons, quizzes, and hands-on exercises.
          </p>
        </header>

        {/* Course Component */}
        <main className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          <PhotographyBasics />
        </main>

        {/* Footer / Credits */}
        <footer className="mt-10 text-center text-gray-400 text-sm">
          <p>Learn • Practice • Capture • Share</p>
        </footer>
      </div>
    </div>
  );
};

export default Basics;