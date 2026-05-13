"use client";

import { useState } from "react";

export default function DailyQuizPage(){

  const questions = [

    {

      question:"A body moving with constant acceleration covers distances 10m and 14m in consecutive seconds. Find acceleration.",

      options:[

        "1 m/s²",

        "2 m/s²",

        "3 m/s²",

        "4 m/s²"

      ],

      answer:"2 m/s²"

    },

    {

      question:"Which biomolecule acts as genetic material?",

      options:[

        "Protein",

        "DNA",

        "Lipid",

        "Vitamin"

      ],

      answer:"DNA"

    },

    {

      question:"The hybridization of carbon in methane is:",

      options:[

        "sp",

        "sp2",

        "sp3",

        "dsp2"

      ],

      answer:"sp3"

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

  const [streak] =
  useState(12);

  const [timeLeft,setTimeLeft] =
  useState(300);

  /* TIMER */

  useState(()=>{

    const timer = setInterval(()=>{

      setTimeLeft(prev=>{

        if(prev <= 1){

          clearInterval(timer);

          setSubmitted(true);

          return 0;

        }

        return prev - 1;

      });

    },1000);

  });

  function nextQuestion(){

    if(selected === ""){

      alert(
        "Select an option 😎🔥"
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

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-orange-500/20 border border-orange-500/30 mb-8">

          🔥 Daily Challenge

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Daily
          {" "}

          <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">

            Quiz

          </span>

          <br />

          Challenge 🚀

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Attempt daily JEE & NEET quizzes,
          build streaks
          and improve your rank 😎🔥

        </p>

      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* STREAK */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              🔥

            </div>

            <h2 className="text-5xl font-black text-orange-400 mb-4">

              {streak}

            </h2>

            <p className="text-gray-400 text-xl">

              Day Streak

            </p>

          </div>

          {/* SCORE */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              🎯

            </div>

            <h2 className="text-5xl font-black text-green-400 mb-4">

              {score}

            </h2>

            <p className="text-gray-400 text-xl">

              Current Score

            </p>

          </div>

          {/* TIMER */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              ⏱

            </div>

            <h2 className="text-5xl font-black text-blue-400 mb-4">

              {minutes}:
              {seconds.toString().padStart(2,"0")}

            </h2>

            <p className="text-gray-400 text-xl">

              Time Left

            </p>

          </div>

        </div>

      </section>

      {/* QUIZ */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        {

          submitted

          ?

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45px] p-16 text-center">

            <div className="text-8xl mb-8">

              🎉

            </div>

            <h2 className="text-6xl font-black mb-8">

              Quiz Completed 😎🔥

            </h2>

            <p className="text-3xl mb-6">

              Your Score

            </p>

            <div className="text-8xl font-black mb-10">

              {score}

            </div>

            <button

              onClick={()=>{

                window.location.reload();

              }}

              className="px-12 py-5 rounded-3xl bg-black text-2xl font-black"

            >

              Restart Quiz 🚀

            </button>

          </div>

          :

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-12">

            <div className="flex justify-between items-center mb-10">

              <h2 className="text-3xl font-black">

                Question
                {" "}
                {currentQuestion + 1}
                {" "}
                / {questions.length}

              </h2>

              <div className="bg-orange-500 px-5 py-2 rounded-2xl text-lg font-bold">

                Daily Quiz 😎🔥

              </div>

            </div>

            {/* QUESTION */}

            <h3 className="text-4xl font-black leading-relaxed mb-12">

              {

                questions[currentQuestion]
                .question

              }

            </h3>

            {/* OPTIONS */}

            <div className="space-y-6">

              {

                questions[currentQuestion]
                .options
                .map((option,index)=>(

                  <button

                    key={index}

                    onClick={()=>{

                      setSelected(option);

                    }}

                    className={`w-full p-6 rounded-3xl border text-left text-xl transition

                    ${selected === option

                      ?

                      "bg-orange-500 border-orange-400"

                      :

                      "bg-[#111827] border-white/10 hover:border-orange-400"

                    }`}

                  >

                    {option}

                  </button>

                ))

              }

            </div>

            {/* NEXT BUTTON */}

            <button

              onClick={nextQuestion}

              className="w-full mt-10 py-6 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-2xl font-black"

            >

              {

                currentQuestion ===
                questions.length - 1

                ?

                "Submit Quiz 🚀"

                :

                "Next Question 🚀"

              }

            </button>

          </div>

        }

      </section>

      {/* PREMIUM CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45px] p-12 text-center">

          <div className="text-8xl mb-8">

            💎

          </div>

          <h2 className="text-6xl font-black mb-8">

            Unlock Premium Quizzes

          </h2>

          <p className="text-2xl text-white/90 mb-10 leading-relaxed">

            Get advanced daily quizzes,
            rank rewards,
            premium challenges and AI analysis 😎🔥

          </p>

          <a
            href="/pricing"
            className="inline-block px-12 py-5 rounded-3xl bg-black text-2xl font-black"
          >

            Upgrade to PRO 🚀

          </a>

        </div>

      </section>

    </main>

  );

}