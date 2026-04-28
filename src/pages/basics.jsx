import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PhotographyBasics from "../components/PhotographyBasics";

const Basics = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Photography Basics</h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Master the fundamentals of photography through interactive lessons, quizzes, and hands-on exercises.
            </p>
          </div>

          {/* Course Module Wrapper */}
          <div className="bg-gray-50 rounded-2xl p-2 sm:p-4 border border-gray-100 shadow-sm overflow-hidden">
            <PhotographyBasics />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Basics;