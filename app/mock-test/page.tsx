"use client";

import { useState,useEffect } from "react";

import questions from "../data/questions";

import ProtectedRoute from "../ProtectedRoute";

import { saveScore } from "../lib/saveScore";

export default function MockTestPage() {

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [answers,setAnswers] =
  useState([]);

  const [submitted,setSubmitted] =
  useState(false);

  const [saving,setSaving] =
  useState(false);

  const [score,setScore] =
  useState(0);

  const [timeLeft,setTimeLeft] =
  useState(1800);

  useEffect(()=>{

    if(timeLeft <= 0){

      submitTest();

      return;

    }

    const timer = setInterval(()=>{

      setTimeLeft(prev=>prev - 1);

    },1000);

    return ()=>clearInterval(timer);

  },[timeLeft]);

  function chooseOption(option){

    const updated = [...answers];

    updated[currentQuestion] = option;

    setAnswers(updated);

  }

  async function submitTest(){

    if(saving){

      return;

    }

    setSaving(true);

    let finalScore = 0;

    questions.forEach((q,index)=>{

      if(answers[index] === q.answer){

        finalScore += 4;

      }

      else if(answers[index]){

        finalScore -= 1;

      }

    });

    setScore(finalScore);

    await saveScore(finalScore);

    setSubmitted(true);

  }

  const minutes =
  Math.floor(timeLeft / 60);

  const seconds =
  timeLeft % 60;

  if(submitted){

    return(

      <ProtectedRoute>

        <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center px-6">

          <div className="bg-[#111827] p-10 rounded-3xl border border-gray-800 max-w-2xl w-full text-center">

            <h1 className="text-5xl font-bold mb-6">

              🎉 Test Submitted

            </h1>

            <p className="text-3xl text-purple-500 font-bold mb-4">

              Your Score: {score}

            </p>

            <p className="text-gray-400 text-lg">

              Score saved successfully 🚀

            </p>

          </div>

        </main>

      </ProtectedRoute>

    );

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-6">

            <div className="flex-1">

              <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

                <div className="flex justify-between items-center mb-6">

                  <div>

                    <p className="text-purple-500 font-semibold mb-2">

                      {questions[currentQuestion].subject}

                    </p>

                    <p className="text-gray-400">

                      {questions[currentQuestion].chapter}

                    </p>

                  </div>

                  <div className="bg-[#1e293b] px-5 py-3 rounded-2xl text-xl font-bold">

                    ⏱️ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}

                  </div>

                </div>

                <h1 className="text-3xl font-bold mb-10 leading-relaxed">

                  {questions[currentQuestion].question}

                </h1>

                <div className="space-y-5">

                  {questions[currentQuestion].options.map((option,index)=>(

                    <button
                      key={index}
                      onClick={()=>chooseOption(option)}
                      className={`w-full p-5 rounded-2xl text-left border transition

                      ${answers[currentQuestion] === option

                        ? "bg-purple-600 border-purple-500"

                        : "bg-[#1e293b] border-gray-700 hover:border-purple-500"

                      }`}
                    >

                      {option}

                    </button>

                  ))}

                </div>

                <div className="flex justify-between mt-10">

                  <button
                    onClick={()=>
                      setCurrentQuestion(prev=>
                        Math.max(prev - 1,0)
                      )
                    }
                    className="px-8 py-4 rounded-2xl bg-gray-700"
                  >

                    Previous

                  </button>

                  {currentQuestion < questions.length - 1 ? (

                    <button
                      onClick={()=>
                        setCurrentQuestion(prev=>
                          prev + 1
                        )
                      }
                      className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600"
                    >

                      Next

                    </button>

                  ) : (

                    <button
                      onClick={submitTest}
                      disabled={saving}
                      className="px-8 py-4 rounded-2xl bg-green-600 disabled:opacity-50"
                    >

                      {saving
                        ? "Submitting..."
                        : "Submit Test"
                      }

                    </button>

                  )}

                </div>

              </div>

            </div>

            <div className="lg:w-80">

              <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 sticky top-6">

                <h2 className="text-2xl font-bold mb-6">

                  Question Palette

                </h2>

                <div className="grid grid-cols-4 gap-4">

                  {questions.map((_,index)=>(

                    <button
                      key={index}
                      onClick={()=>
                        setCurrentQuestion(index)
                      }
                      className={`h-14 rounded-2xl font-bold transition

                      ${answers[index]

                        ? "bg-purple-600"

                        : "bg-[#1e293b]"

                      }`}
                    >

                      {index + 1}

                    </button>

                  ))}

                </div>

                <button
                  onClick={submitTest}
                  disabled={saving}
                  className="w-full mt-8 py-4 rounded-2xl bg-red-500 font-semibold disabled:opacity-50"
                >

                  {saving
                    ? "Submitting..."
                    : "Submit Full Test"
                  }

                </button>

              </div>

            </div>

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}