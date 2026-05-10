"use client";

import { useState } from "react";

export default function AIDoubtSolverPage() {

  const [question,setQuestion] =
  useState("");

  const [answer,setAnswer] =
  useState("");

  const [loading,setLoading] =
  useState(false);

  async function solveDoubt(){

    if(!question){

      return;

    }

    setLoading(true);

    setAnswer("");

    try{

      const response =
      await fetch("/api/solve-doubt",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          question
        })

      });

      const data =
      await response.json();

      setAnswer(data.answer);

    }

    catch(error){

      console.log(error);

      setAnswer(
        "Something went wrong 🚀"
      );

    }

    setLoading(false);

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-center mb-4">

          🤖 <span className="text-purple-500">
            AI Doubt Solver
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-12">

          Ask any JEE / NEET doubt instantly 🚀

        </p>

        <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

          <textarea
            placeholder="Ask your doubt..."
            value={question}
            onChange={(e)=>
              setQuestion(e.target.value)
            }
            className="w-full h-40 bg-[#1e293b] rounded-3xl p-6 outline-none resize-none text-lg"
          />

          <button
            onClick={solveDoubt}
            className="w-full mt-8 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
          >

            {loading
              ? "Solving..."
              : "Solve Doubt"
            }

          </button>

        </div>

        {answer && (

          <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 mt-10">

            <h2 className="text-4xl font-bold mb-8">

              ✅ Solution
            </h2>

            <div className="bg-[#1e293b] rounded-3xl p-6 whitespace-pre-wrap leading-relaxed text-lg text-gray-300">

              {answer}

            </div>

          </div>

        )}

      </div>

    </main>

  );

}