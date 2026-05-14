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
} from "../../firebase";

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

        const shuffled =
        data.sort(()=>
          Math.random() - 0.5
        );

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

        if(selected === q.answer){

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

  /* TIMER */

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

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center text-3xl font-black">

        Loading Questions 😎🔥

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden pb-32">

      {/* HEADER */}

      <section className="sticky top-0 z-40 backdrop-blur-2xl bg-[#050816]/80 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <div>

            <h1 className="text-3xl md:text-5xl font-black mb-2 text-center md:text-left">

              🚀 Mock Test

            </h1>

            <p className="text-sm md:text-lg text-gray-400 text-center md:text-left">

              Professional exam simulation 😎🔥

            </p>

          </div>

          {/* TIMER */}

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 rounded-[24px] text-center shadow-2xl">

            <div className="text-xs md:text-sm mb-1">

              Time Left

            </div>

            <div className="text-2xl md:text-4xl font-black">

              {hours}:
              {minutes.toString().padStart(2,"0")}:
              {seconds.toString().padStart(2,"0")}

            </div>

          </div>

        </div>

      </section>

      {/* RESULT */}

      {

        submitted

        ?

        <section className="max-w-5xl mx-auto px-4 md:px-6 py-10">

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[28px] md:rounded-[45px] p-6 md:p-14 text-center">

            <div className="text-6xl md:text-8xl mb-6">

              🎉

            </div>

            <h2 className="text-3xl md:text-6xl font-black mb-10">

              Test Submitted 😎🔥

            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10">

              <div className="bg-black/20 rounded-[22px] p-5 md:p-8">

                <h3 className="text-3xl md:text-5xl font-black mb-2">

                  {score}

                </h3>

                <p className="text-sm md:text-base">

                  Score

                </p>

              </div>

              <div className="bg-black/20 rounded-[22px] p-5 md:p-8">

                <h3 className="text-3xl md:text-5xl font-black mb-2">

                  {correctAnswers}

                </h3>

                <p className="text-sm md:text-base">

                  Correct

                </p>

              </div>

              <div className="bg-black/20 rounded-[22px] p-5 md:p-8">

                <h3 className="text-3xl md:text-5xl font-black mb-2">

                  {wrongAnswers}

                </h3>

                <p className="text-sm md:text-base">

                  Wrong

                </p>

              </div>

              <div className="bg-black/20 rounded-[22px] p-5 md:p-8">

                <h3 className="text-3xl md:text-5xl font-black mb-2">

                  {

                    Math.round(

                      (correctAnswers /
                      questions.length)

                      * 100

                    )

                  }%

                </h3>

                <p className="text-sm md:text-base">

                  Accuracy

                </p>

              </div>

            </div>

            <button

              onClick={()=>{

                window.location.reload();

              }}

              className="px-8 py-4 rounded-[22px] bg-black text-base md:text-xl font-black"

            >

              Restart Test 🚀

            </button>

          </div>

        </section>

        :

        /* TEST UI */

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 md:gap-10">

            {/* QUESTION */}

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[45px] p-5 md:p-12">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-xl md:text-3xl font-black">

                  Question
                  {" "}
                  {currentQuestion + 1}
                  {" "}
                  / {questions.length}

                </h2>

                <div className="bg-purple-600 px-4 py-2 rounded-2xl text-xs md:text-base font-bold">

                  +4 / -1

                </div>

              </div>

              {/* QUESTION TEXT */}

              <h3 className="text-2xl md:text-4xl font-black leading-relaxed mb-10">

                {

                  questions[currentQuestion]
                  ?.question

                }

              </h3>

              {/* OPTIONS */}

              <div className="space-y-4 md:space-y-6">

                {

                  [

                    questions[currentQuestion]?.option1,

                    questions[currentQuestion]?.option2,

                    questions[currentQuestion]?.option3,

                    questions[currentQuestion]?.option4

                  ].map((option,index)=>(

                    <button

                      key={index}

                      onClick={()=>{

                        selectAnswer(option);

                      }}

                      className={`w-full p-4 md:p-6 rounded-[22px] border text-left text-base md:text-xl transition-all duration-300

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

              <div className="flex flex-wrap gap-4 mt-10">

                <button

                  disabled={currentQuestion === 0}

                  onClick={()=>{

                    setCurrentQuestion(

                      prev=>prev - 1

                    );

                  }}

                  className="px-6 py-4 rounded-[20px] bg-[#111827] text-sm md:text-lg font-bold disabled:opacity-40"

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

                  className="px-6 py-4 rounded-[20px] bg-purple-600 text-sm md:text-lg font-bold"

                >

                  Next

                </button>

                <button

                  onClick={submitTest}

                  className="ml-auto px-8 py-4 rounded-[20px] bg-gradient-to-r from-green-500 to-emerald-500 text-sm md:text-lg font-black"

                >

                  Submit 🚀

                </button>

              </div>

            </div>

            {/* PALETTE */}

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[45px] p-5 md:p-8 h-fit lg:sticky top-32">

              <h2 className="text-2xl md:text-3xl font-black mb-8">

                Questions 😎🔥

              </h2>

              <div className="grid grid-cols-5 gap-3">

                {

                  questions.map((_,index)=>(

                    <button

                      key={index}

                      onClick={()=>{

                        setCurrentQuestion(index);

                      }}

                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl font-black text-sm md:text-lg transition-all

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

            </div>

          </div>

        </section>

      }

    </main>

  );

}