"use client";

import { useState } from "react";

import ProtectedRoute from "../ProtectedRoute";

export default function DailyQuizPage() {

  const questions = [

    {
      question:
      "What is the SI unit of Force?",

      options:[
        "Newton",
        "Joule",
        "Pascal",
        "Watt"
      ],

      answer:"Newton"
    },

    {
      question:
      "Who is known as the father of Genetics?",

      options:[
        "Darwin",
        "Mendel",
        "Newton",
        "Einstein"
      ],

      answer:"Mendel"
    },

    {
      question:
      "Derivative of x² is?",

      options:[
        "2x",
        "x",
        "x²",
        "1"
      ],

      answer:"2x"
    }

  ];

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [selected,setSelected] =
  useState("");

  const [score,setScore] =
  useState(0);

  const [submitted,setSubmitted] =
  useState(false);

  function submitAnswer(){

    if(selected === ""){

      return;

    }

    if(
      selected ===
      questions[currentQuestion].answer
    ){

      setScore(prev=>prev + 1);

    }

    if(
      currentQuestion <
      questions.length - 1
    ){

      setCurrentQuestion(prev=>
        prev + 1
      );

      setSelected("");

    }

    else{

      setSubmitted(true);

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">

            🎯 <span className="text-purple-500">
              Daily Quiz
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            Practice one quick quiz daily 🚀

          </p>

          {submitted ? (

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 text-center">

              <h2 className="text-5xl font-black text-purple-500 mb-6">

                {score} / {questions.length}

              </h2>

              <p className="text-2xl text-gray-300 mb-8">

                Quiz Completed 🚀

              </p>

              <button
                onClick={()=>{
                  setCurrentQuestion(0);
                  setSelected("");
                  setScore(0);
                  setSubmitted(false);
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
              >

                Restart Quiz

              </button>

            </div>

          ) : (

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-2xl font-bold">

                  Question {currentQuestion + 1}

                </h2>

                <div className="bg-[#1e293b] px-5 py-3 rounded-2xl">

                  Score: {score}

                </div>

              </div>

              <h3 className="text-4xl font-bold mb-10 leading-relaxed">

                {
                  questions[currentQuestion]
                  .question
                }

              </h3>

              <div className="space-y-5">

                {
                  questions[currentQuestion]
                  .options.map((option,index)=>(

                    <button
                      key={index}
                      onClick={()=>
                        setSelected(option)
                      }
                      className={`w-full p-5 rounded-2xl text-left border transition

                      ${selected === option

                        ? "bg-purple-600 border-purple-500"

                        : "bg-[#1e293b] border-gray-700 hover:border-purple-500"

                      }`}
                    >

                      {option}

                    </button>

                  ))
                }

              </div>

              <button
                onClick={submitAnswer}
                className="w-full mt-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
              >

                {
                  currentQuestion ===
                  questions.length - 1

                    ? "Finish Quiz"

                    : "Next Question"
                }

              </button>

            </div>

          )}

        </div>

      </main>

    </ProtectedRoute>

  );

}