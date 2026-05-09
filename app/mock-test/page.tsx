"use client";

import { useState,useEffect } from "react";

export default function MockTest() {

  const questions = [

    {
      question:"SI unit of Force is?",
      options:["Joule","Newton","Pascal","Watt"],
      answer:"Newton"
    },

    {
      question:"H2O is formula of?",
      options:["Hydrogen","Water","Salt","Oxygen"],
      answer:"Water"
    },

    {
      question:"Human heart has how many chambers?",
      options:["2","3","4","5"],
      answer:"4"
    },

    {
      question:"Who discovered Gravity?",
      options:["Newton","Tesla","Einstein","Bohr"],
      answer:"Newton"
    },

    {
      question:"Speed of light is?",
      options:[
        "3×10^8 m/s",
        "5×10^6 m/s",
        "7×10^5 m/s",
        "1×10^9 m/s"
      ],
      answer:"3×10^8 m/s"
    }

  ];

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [answers,setAnswers] = useState<string[]>([]);

  const [score,setScore] = useState(0);

  const [submitted,setSubmitted] = useState(false);

  const [timeLeft,setTimeLeft] = useState(300);

  useEffect(()=>{

    if(timeLeft <= 0){

      handleSubmit();

      return;

    }

    const timer = setInterval(()=>{

      setTimeLeft(prev=>prev - 1);

    },1000);

    return ()=>clearInterval(timer);

  },[timeLeft]);

  function selectOption(option:string){

    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = option;

    setAnswers(updatedAnswers);

  }

  function handleSubmit(){

    let finalScore = 0;

    questions.forEach((q,index)=>{

      if(answers[index] === q.answer){

        finalScore += 4;

      }else if(answers[index]){

        finalScore -= 1;

      }

    });

    setScore(finalScore);

    setSubmitted(true);

  }

  if(submitted){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center px-6">

        <div className="bg-[#111827] p-10 rounded-3xl border border-gray-800 text-center max-w-xl w-full">

          <h1 className="text-5xl font-bold mb-6">

            🎉 Test Completed

          </h1>

          <p className="text-2xl text-gray-300 mb-4">

            Your Score:
            <span className="text-purple-500 font-bold">
              {" "} {score}
            </span>

          </p>

          <p className="text-gray-400 text-lg">

            Keep Practicing Daily 🚀

          </p>

        </div>

      </main>

    );

  }

  const minutes =
  Math.floor(timeLeft / 60);

  const seconds =
  timeLeft % 60;

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center mb-10">

        <h1 className="text-3xl font-bold">

          Exam <span className="text-purple-500">
            Cracker
          </span>

        </h1>

        <div className="bg-[#111827] px-5 py-3 rounded-2xl border border-gray-800 text-xl font-semibold">

          ⏱️ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}

        </div>

      </nav>

      {/* QUESTION BOX */}

      <div className="max-w-3xl mx-auto bg-[#111827] p-10 rounded-3xl border border-gray-800">

        <p className="text-gray-400 mb-4">

          Question {currentQuestion + 1}
          / {questions.length}

        </p>

        <h2 className="text-3xl font-bold mb-10 leading-relaxed">

          {questions[currentQuestion].question}

        </h2>

        <div className="space-y-5">

          {questions[currentQuestion].options.map((option,index)=>(

            <button
              key={index}
              onClick={()=>selectOption(option)}
              className={`w-full text-left p-5 rounded-2xl transition border

              ${answers[currentQuestion] === option

                ? "bg-purple-600 border-purple-500"

                : "bg-[#1e293b] border-gray-700 hover:border-purple-500"

              }`}

            >

              {option}

            </button>

          ))}

        </div>

        {/* BUTTONS */}

        <div className="flex justify-between mt-10 gap-4">

          <button
            onClick={()=>
              setCurrentQuestion(prev=>Math.max(prev - 1,0))
            }
            className="bg-gray-700 px-8 py-4 rounded-2xl font-semibold"
          >

            Previous

          </button>

          {currentQuestion < questions.length - 1 ? (

            <button
              onClick={()=>
                setCurrentQuestion(prev=>prev + 1)
              }
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-2xl font-semibold"
            >

              Next

            </button>

          ) : (

            <button
              onClick={handleSubmit}
              className="bg-green-600 px-8 py-4 rounded-2xl font-semibold"
            >

              Submit Test

            </button>

          )}

        </div>

      </div>

    </main>

  );

}