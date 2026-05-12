"use client";

import { useEffect,useState } from "react";

const questions = [

  {
    question:
    "What is the SI unit of force?",

    options:[
      "Newton",
      "Joule",
      "Watt",
      "Pascal"
    ],

    answer:"Newton"
  },

  {
    question:
    "Which gas is used in photosynthesis?",

    options:[
      "Oxygen",
      "Nitrogen",
      "Carbon Dioxide",
      "Hydrogen"
    ],

    answer:"Carbon Dioxide"
  },

  {
    question:
    "Derivative of x² is?",

    options:[
      "x",
      "2x",
      "x²",
      "2"
    ],

    answer:"2x"
  },

  {
    question:
    "Atomic number of Oxygen?",

    options:[
      "6",
      "7",
      "8",
      "9"
    ],

    answer:"8"
  },

  {
    question:
    "Speed of light is?",

    options:[
      "3×10^8 m/s",
      "5×10^6 m/s",
      "1×10^5 m/s",
      "7×10^7 m/s"
    ],

    answer:"3×10^8 m/s"
  }

];

export default function MockTestPage() {

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [selected,setSelected] =
  useState("");

  const [score,setScore] =
  useState(0);

  const [submitted,setSubmitted] =
  useState(false);

  const [timeLeft,setTimeLeft] =
  useState(300);

  useEffect(()=>{

    if(timeLeft <= 0){

      setSubmitted(true);

      return;

    }

    if(submitted){

      return;

    }

    const timer = setInterval(()=>{

      setTimeLeft(prev=>prev - 1);

    },1000);

    return ()=>clearInterval(timer);

  },[timeLeft,submitted]);

  function nextQuestion(){

    if(selected === ""){

      alert(
        "Please select an option 😎"
      );

      return;

    }

    let updatedScore = score;

    if(
      selected ===
      questions[currentQuestion].answer
    ){

      updatedScore += 4;

      setScore(updatedScore);

    }

    if(
      currentQuestion <
      questions.length - 1
    ){

      setCurrentQuestion(
        prev=>prev + 1
      );

      setSelected("");

    }

    else{

      setSubmitted(true);

    }

  }

  const minutes =
  Math.floor(timeLeft / 60);

  const seconds =
  timeLeft % 60;

  if(submitted){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center p-6">

        <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-12 text-center max-w-2xl w-full">

          <div className="text-8xl mb-8">

            🎉

          </div>

          <h1 className="text-6xl font-black text-purple-500 mb-6">

            Test Submitted
          </h1>

          <p className="text-3xl mb-4">

            Your Score 😎🔥

          </p>

          <div className="text-7xl font-black mb-8">

            {score}
          </div>

          <button
            onClick={()=>
              window.location.reload()
            }
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
          >

            Restart Test 🚀

          </button>

        </div>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-black">

            📝 Mock Test
          </h1>

          <div className="bg-red-500 px-6 py-3 rounded-2xl text-xl font-bold">

            ⏱ {minutes}:
            {seconds.toString().padStart(2,"0")}

          </div>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold">

              Question
              {" "}
              {currentQuestion + 1}
              {" "}
              / {questions.length}

            </h2>

            <div className="bg-[#1e293b] px-5 py-2 rounded-2xl">

              Score:
              {" "}
              {score}

            </div>

          </div>

          <h3 className="text-4xl font-black leading-relaxed mb-10">

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
                  className={`w-full p-5 rounded-2xl border text-left transition

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
            onClick={nextQuestion}
            className="w-full mt-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
          >

            {
              currentQuestion ===
              questions.length - 1

                ? "Submit Test 🚀"

                : "Next Question 🚀"
            }

          </button>

        </div>

      </div>

    </main>

  );

}