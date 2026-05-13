"use client";

import {

  useEffect,
  useState

} from "react";

import {

  collection,
  getDocs,
  addDoc,
  serverTimestamp

} from "firebase/firestore";

import {

  auth,
  db

} from "@/firebase";

export default function MockTestPage(){

  const [questions,setQuestions] =
  useState<any[]>([]);

  const [loading,setLoading] =
  useState(true);

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [selectedAnswers,setSelectedAnswers] =
  useState<any>({});

  const [submitted,setSubmitted] =
  useState(false);

  const [score,setScore] =
  useState(0);

  const [correctAnswers,setCorrectAnswers] =
  useState(0);

  const [wrongAnswers,setWrongAnswers] =
  useState(0);

  const [timeLeft,setTimeLeft] =
  useState(3600);

  /* LOAD QUESTIONS */

  useEffect(()=>{

    async function loadQuestions(){

      try{

        const snapshot =
        await getDocs(
          collection(db,"questions")
        );

        const data =
        snapshot.docs.map(doc=>({

          id:doc.id,

          ...doc.data()

        }));

        /* SHUFFLE */

        const shuffled =
        data.sort(()=>
          Math.random() - 0.5
        );

        /* 25 QUESTIONS */

        setQuestions(
          shuffled.slice(0,25)
        );

      }

      catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    loadQuestions();

  },[]);

  /* TIMER */

  useEffect(()=>{

    if(submitted) return;

    const timer =
    setInterval(()=>{

      setTimeLeft(prev=>{

        if(prev <= 1){

          clearInterval(timer);

          submitTest();

          return 0;

        }

        return prev - 1;

      });

    },1000);

    return()=>clearInterval(timer);

  },[submitted]);

  /* SELECT ANSWER */

  function selectAnswer(
    answer:string
  ){

    setSelectedAnswers({

      ...selectedAnswers,

      [currentQuestion]:answer

    });

  }

  /* SUBMIT */

  async function submitTest(){

    let finalScore = 0;

    let correct = 0;

    let wrong = 0;

    questions.forEach((q,index)=>{

      const selected =
      selectedAnswers[index];

      if(selected){

        if(

          selected === q.answer

        ){

          finalScore += 4;

          correct++;

        }

        else{

          finalScore -= 1;

          wrong++;

        }

      }

    });

    setScore(finalScore);

    setCorrectAnswers(correct);

    setWrongAnswers(wrong);

    setSubmitted(true);

    /* SAVE RESULT */

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

            score:finalScore,

            correctAnswers:correct,

            wrongAnswers:wrong,

            totalQuestions:
            questions.length,

            accuracy:

            Math.round(

              (correct /
              questions.length)

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

  }

  /* TIMER FORMAT */

  const hours =
  Math.floor(timeLeft / 3600);

  const minutes =
  Math.floor(
    (timeLeft % 3600) / 60
  );

  const seconds =
  timeLeft % 60;

  /* LOADING */

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center text-4xl font-black">

        Loading Questions 😎🔥

      </main>

    );

  }

  /* NO QUESTIONS */

  if(questions.length === 0){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center text-4xl font-black text-center px-6">

        No Questions Found 😭🔥

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HEADER */}

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-10">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* TITLE */}

          <div>

            <h1 className="text-5xl font-black mb-3">

              🚀 Advanced Mock Test

            </h1>

            <p className="text-gray-400 text-xl">

              Real JEE & NEET Test Engine 😎🔥

            </p>

          </div>

          {/* TIMER */}

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-6 rounded-3xl text-center">

            <div className="text-lg mb-2">

              Time Left

            </div>

            <div className="text-5xl font-black">

              {hours}:
              {minutes.toString().padStart(2,"0")}:
              {seconds.toString().padStart(2,"0")}

            </div>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        {

          submitted

          ?

          /* RESULT */

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45px] p-16 text-center">

            <div className="text-8xl mb-8">

              🎉

            </div>

            <h2 className="text-7xl font-black mb-10">

              Test Submitted 😎🔥

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

              <div className="bg-black/20 rounded-3xl p-8">

                <h3 className="text-5xl font-black mb-3">

                  {score}

                </h3>

                <p>

                  Final Score

                </p>

              </div>

              <div className="bg-black/20 rounded-3xl p-8">

                <h3 className="text-5xl font-black mb-3">

                  {correctAnswers}

                </h3>

                <p>

                  Correct

                </p>

              </div>

              <div className="bg-black/20 rounded-3xl p-8">

                <h3 className="text-5xl font-black mb-3">

                  {wrongAnswers}

                </h3>

                <p>

                  Wrong

                </p>

              </div>

              <div className="bg-black/20 rounded-3xl p-8">

                <h3 className="text-5xl font-black mb-3">

                  {

                    Math.round(

                      (correctAnswers /
                      questions.length)

                      * 100

                    )

                  }%

                </h3>

                <p>

                  Accuracy

                </p>

              </div>

            </div>

            <button

              onClick={()=>{

                window.location.reload();

              }}

              className="px-12 py-5 rounded-3xl bg-black text-2xl font-black"

            >

              Restart Test 🚀

            </button>

          </div>

          :

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

            {/* QUESTION AREA */}

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-12">

              <div className="flex justify-between items-center mb-10">

                <h2 className="text-3xl font-black">

                  Question
                  {" "}
                  {currentQuestion + 1}
                  {" "}
                  / {questions.length}

                </h2>

                <div className="bg-purple-600 px-5 py-2 rounded-2xl text-lg font-bold">

                  +4 / -1 😎🔥

                </div>

              </div>

              {/* QUESTION */}

              <h3 className="text-4xl font-black leading-relaxed mb-12">

                {

                  questions[currentQuestion]
                  ?.question

                }

              </h3>

              {/* OPTIONS */}

              <div className="space-y-6">

                {

                  [

                    questions[currentQuestion]
                    ?.option1,

                    questions[currentQuestion]
                    ?.option2,

                    questions[currentQuestion]
                    ?.option3,

                    questions[currentQuestion]
                    ?.option4

                  ].map((option,index)=>(

                    <button

                      key={index}

                      onClick={()=>{

                        selectAnswer(option);

                      }}

                      className={`w-full p-6 rounded-3xl border text-left text-xl transition

                      ${selectedAnswers[currentQuestion] === option

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

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5 mt-12">

                <button

                  disabled={currentQuestion === 0}

                  onClick={()=>{

                    setCurrentQuestion(

                      prev=>prev - 1

                    );

                  }}

                  className="px-8 py-4 rounded-2xl bg-[#111827] text-xl font-bold disabled:opacity-40"

                >

                  Previous

                </button>

                <button

                  disabled={
                    currentQuestion ===
                    questions.length - 1
                  }

                  onClick={()=>{

                    setCurrentQuestion(

                      prev=>prev + 1

                    );

                  }}

                  className="px-8 py-4 rounded-2xl bg-purple-600 text-xl font-bold"

                >

                  Next

                </button>

                <button

                  onClick={submitTest}

                  className="ml-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-xl font-black"

                >

                  Submit Test 🚀

                </button>

              </div>

            </div>

            {/* QUESTION PALETTE */}

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-8 h-fit sticky top-6">

              <h2 className="text-3xl font-black mb-8">

                Question Palette 😎🔥

              </h2>

              <div className="grid grid-cols-5 gap-4">

                {

                  questions.map((_,index)=>(

                    <button

                      key={index}

                      onClick={()=>{

                        setCurrentQuestion(index);

                      }}

                      className={`w-14 h-14 rounded-2xl font-black text-lg transition

                      ${currentQuestion === index

                        ?

                        "bg-purple-600"

                        :

                        selectedAnswers[index]

                        ?

                        "bg-green-500 text-black"

                        :

                        "bg-[#111827]"

                      }`}

                    >

                      {index + 1}

                    </button>

                  ))

                }

              </div>

              {/* LEGEND */}

              <div className="mt-10 space-y-4 text-lg">

                <div className="flex items-center gap-4">

                  <div className="w-5 h-5 rounded bg-green-500"></div>

                  Answered

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-5 h-5 rounded bg-purple-600"></div>

                  Current

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-5 h-5 rounded bg-[#111827]"></div>

                  Unanswered

                </div>

              </div>

            </div>

          </div>

        }

      </section>

    </main>

  );

}