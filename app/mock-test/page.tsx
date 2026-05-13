"use client";

import { useEffect,useState } from "react";

import {

  collection,
  addDoc,
  serverTimestamp

} from "firebase/firestore";

import {

  auth,
  db

} from "@/firebase";

export default function MockTestPage(){

  const questions = [

    {

      question:"What is acceleration due to gravity?",

      options:[

        "9.8 m/s²",

        "10 m/s²",

        "8 m/s²",

        "12 m/s²"

      ],

      answer:"9.8 m/s²"

    },

    {

      question:"DNA is located in?",

      options:[

        "Nucleus",

        "Ribosome",

        "Cytoplasm",

        "Membrane"

      ],

      answer:"Nucleus"

    },

    {

      question:"Mole concept belongs to?",

      options:[

        "Physics",

        "Maths",

        "Chemistry",

        "Biology"

      ],

      answer:"Chemistry"

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

  const [loading,setLoading] =
  useState(false);

  const [timeLeft,setTimeLeft] =
  useState(180);

  /* TIMER */

  useEffect(()=>{

    const timer = setInterval(()=>{

      setTimeLeft(prev=>{

        if(prev <= 1){

          clearInterval(timer);

          submitQuiz();

          return 0;

        }

        return prev - 1;

      });

    },1000);

    return()=>clearInterval(timer);

  },[]);

  async function submitQuiz(){

    setSubmitted(true);

    setLoading(true);

    try{

      const user =
      auth.currentUser;

      if(user){

        await addDoc(

          collection(db,"results"),

          {

            uid:user.uid,

            name:

            user.displayName ||

            "Exam Cracker User",

            email:user.email,

            score,

            totalQuestions:
            questions.length,

            accuracy:

            Math.round(

              (score / (questions.length * 4))

              * 100

            ),

            createdAt:
            serverTimestamp()

          }

        );

      }

    }

    catch(error){

      console.log(error);

    }

    setLoading(false);

  }

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

      submitQuiz();

    }

  }

  const minutes =
  Math.floor(timeLeft / 60);

  const seconds =
  timeLeft % 60;

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">

          🚀 Real Mock Test

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Smart
          {" "}

          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

            Mock Test

          </span>

        </h1>

      </section>

      {/* TOP STATS */}

      <section className="max-w-5xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 text-center">

            <div className="text-5xl mb-4">

              📝

            </div>

            <h2 className="text-5xl font-black text-purple-400 mb-3">

              {currentQuestion + 1}

            </h2>

            <p className="text-gray-400">

              Current Question

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 text-center">

            <div className="text-5xl mb-4">

              🎯

            </div>

            <h2 className="text-5xl font-black text-green-400 mb-3">

              {score}

            </h2>

            <p className="text-gray-400">

              Current Score

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 text-center">

            <div className="text-5xl mb-4">

              ⏱

            </div>

            <h2 className="text-5xl font-black text-blue-400 mb-3">

              {minutes}:
              {seconds.toString().padStart(2,"0")}

            </h2>

            <p className="text-gray-400">

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

              Test Submitted 😎🔥

            </h2>

            <div className="text-8xl font-black mb-10">

              {score}

            </div>

            <p className="text-2xl mb-10">

              Accuracy:
              {" "}

              {

                Math.round(

                  (score / (questions.length * 4))

                  * 100

                )

              }%

            </p>

            {

              loading

              ?

              <p className="text-xl">

                Saving Result... 😎🔥

              </p>

              :

              <p className="text-xl">

                Result Saved Successfully 🚀

              </p>

            }

          </div>

          :

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-12">

            <h2 className="text-4xl font-black leading-relaxed mb-12">

              {

                questions[currentQuestion]
                .question

              }

            </h2>

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

                      "bg-purple-600 border-purple-400"

                      :

                      "bg-[#111827] border-white/10 hover:border-purple-400"

                    }`}

                  >

                    {option}

                  </button>

                ))

              }

            </div>

            <button

              onClick={nextQuestion}

              className="w-full mt-10 py-6 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-2xl font-black"

            >

              {

                currentQuestion ===
                questions.length - 1

                ?

                "Submit Test 🚀"

                :

                "Next Question 🚀"

              }

            </button>

          </div>

        }

      </section>

    </main>

  );

}