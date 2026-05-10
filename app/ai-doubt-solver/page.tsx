"use client";

import { useState } from "react";

export default function AIDoubtSolverPage() {

  const [question,setQuestion] = useState("");

  const [answer,setAnswer] = useState("");

  const [loading,setLoading] = useState(false);

  async function solveDoubt(){

    if(question.trim() === ""){
      return;
    }

    setLoading(true);

    setAnswer("");

    try{

      const response = await fetch("/api/ai",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          question
        })

      });

      const data = await response.json();

      setAnswer(
        data.choices?.[0]?.message?.content ||
        "No response from AI"
      );

    }

    catch(error){

      setAnswer(
        "Something went wrong 🚀"
      );

    }

    setLoading(false);

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">

          🤖 <span className="text-purple-500">
            AI Doubt Solver
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-10">

          Ask JEE / NEET doubts using AI 🚀

        </p>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

          <textarea
            value={question}
            onChange={(e)=>
              setQuestion(e.target.value)
            }
            placeholder="Ask your doubt..."
            className="w-full h-40 bg-[#1e293b] rounded-2xl p-5 outline-none resize-none text-lg"
          />

          <button
            onClick={solveDoubt}
            className="w-full mt-6 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
          >

            {loading
              ? "Solving..."
              : "Solve Doubt"
            }

          </button>

        </div>

        {answer && (

          <div className="mt-10 bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              AI Answer 🚀

            </h2>

            <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">

              {answer}

            </p>

          </div>

        )}

      </div>

    </main>

  );

}