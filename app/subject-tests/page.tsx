"use client";

import { useState } from "react";

import questions from "../data/questions";

export default function SubjectTestsPage() {

  const [selectedSubject,setSelectedSubject] =
  useState("");

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [answers,setAnswers] =
  useState([]);

  const [submitted,setSubmitted] =
  useState(false);

  const [score,setScore] =
  useState(0);

  const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology"
  ];

  const filteredQuestions =
  questions.filter(
    (q)=>q.subject === selectedSubject
  );

  function chooseOption(option){

    const updated = [...answers];

    updated[currentQuestion] = option;

    setAnswers(updated);

  }

  function submitTest(){

    let finalScore = 0;

    filteredQuestions.forEach((q,index)=>{

      if(answers[index] === q.answer){

        finalScore += 4;

      }

      else if(answers[index]){

        finalScore -= 1;

      }

    });

    setScore(finalScore);

    setSubmitted(true);

  }

  if(!selectedSubject){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white p-6 flex justify-center items-center">

        <div className="max-w-4xl w-full">

          <h1 className="text-5xl font-bold text-center mb-4">

            🎯 <span className="text-purple-500">
              Subject Tests
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            Select a subject to start practice 🚀

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {subjects.map((subject,index)=>(

              <button
                key={index}
                onClick={()=>
                  setSelectedSubject(subject)
                }
                className="bg-[#111827] border border-gray-800 hover:border-purple-500 transition rounded-3xl p-10 text-3xl font-bold"
              >

                {subject}

              </button>

            ))}

          </div>

        </div>

      </main>

    );

  }

  if(submitted){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center px-6">

        <div className="bg-[#111827] p-10 rounded-3xl border border-gray-800 max-w-2xl w-full text-center">

          <h1 className="text-5xl font-bold mb-6">

            🎉 {selectedSubject} Test Submitted

          </h1>

          <p className="text-3xl text-purple-500 font-bold mb-4">

            Your Score: {score}

          </p>

          <button
            onClick={()=>{
              setSelectedSubject("");
              setSubmitted(false);
              setCurrentQuestion(0);
              setAnswers([]);
            }}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600"
          >

            Back To Subjects

          </button>

        </div>

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">

                {selectedSubject} Test 🚀

              </h1>

              <p className="text-gray-400 mt-2">

                Question {currentQuestion + 1}
                / {filteredQuestions.length}

              </p>

            </div>

            <button
              onClick={()=>{
                setSelectedSubject("");
                setCurrentQuestion(0);
                setAnswers([]);
              }}
              className="px-6 py-3 rounded-2xl bg-red-500"
            >

              Exit

            </button>

          </div>

          <p className="text-purple-500 font-semibold mb-3">

            {filteredQuestions[currentQuestion].chapter}

          </p>

          <h2 className="text-3xl font-bold mb-10 leading-relaxed">

            {filteredQuestions[currentQuestion].question}

          </h2>

          <div className="space-y-5">

            {filteredQuestions[currentQuestion]
            .options.map((option,index)=>(

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

            {currentQuestion <
            filteredQuestions.length - 1 ? (

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
                className="px-8 py-4 rounded-2xl bg-green-600"
              >

                Submit Test

              </button>

            )}

          </div>

        </div>

      </div>

    </main>

  );

}