"use client";

import { useState } from "react";

export default function ThemeDemoPage() {

  const [darkMode,setDarkMode] = useState(true);

  return (

    <main
      className={`min-h-screen transition-all duration-500

      ${darkMode
        ? "bg-[#0b1120] text-white"
        : "bg-white text-black"
      }`}
    >

      <div className="max-w-5xl mx-auto p-6">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-bold">

            🌙 Theme <span className="text-purple-500">
              Demo
            </span>

          </h1>

          <button
            onClick={()=>setDarkMode(!darkMode)}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
          >

            {darkMode
              ? "Light Mode"
              : "Dark Mode"
            }

          </button>

        </div>

        <div
          className={`p-10 rounded-3xl border

          ${darkMode
            ? "bg-[#111827] border-gray-800"
            : "bg-gray-100 border-gray-300"
          }`}
        >

          <h2 className="text-4xl font-bold mb-4">

            Exam Cracker 🚀

          </h2>

          <p className="text-lg opacity-80 leading-relaxed">

            This is a modern dark/light mode demo page for your JEE & NEET platform.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div
            className={`p-8 rounded-3xl border transition

            ${darkMode
              ? "bg-[#111827] border-gray-800"
              : "bg-gray-100 border-gray-300"
            }`}
          >

            <h3 className="text-2xl font-bold mb-3">

              📘 Mock Tests

            </h3>

            <p className="opacity-80">

              Practice exam-level questions.

            </p>

          </div>

          <div
            className={`p-8 rounded-3xl border transition

            ${darkMode
              ? "bg-[#111827] border-gray-800"
              : "bg-gray-100 border-gray-300"
            }`}
          >

            <h3 className="text-2xl font-bold mb-3">

              📈 Rank Predictor

            </h3>

            <p className="opacity-80">

              Predict your expected rank instantly.

            </p>

          </div>

          <div
            className={`p-8 rounded-3xl border transition

            ${darkMode
              ? "bg-[#111827] border-gray-800"
              : "bg-gray-100 border-gray-300"
            }`}
          >

            <h3 className="text-2xl font-bold mb-3">

              🤖 AI Doubt Solver

            </h3>

            <p className="opacity-80">

              Solve doubts using AI support.

            </p>

          </div>

        </div>

      </div>

    </main>

  );

}