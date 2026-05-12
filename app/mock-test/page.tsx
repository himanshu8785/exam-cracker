"use client";

import {
  useEffect,
  useState
} from "react";

import {
  db
} from "../../firebase";

import {
  collection,
  getDocs
} from "firebase/firestore";

export default function MockTestPage(){

  const [questions,setQuestions] =
  useState<any[]>([]);

  const [loading,setLoading] =
  useState(true);

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [selected,setSelected] =
  useState("");

  const [score,setScore] =
  useState(0);

  const [submitted,setSubmitted] =
  useState(false);

  const [timeLeft,setTimeLeft] =
  useState(1500);

  useEffect(()=>{

    fetchQuestions();

  },[]);

  async function fetchQuestions(){

    try{

      const querySnapshot =
      await getDocs(

        collection(
          db,
          "questions"
        )

      );

      const data:any[] = [];

      querySnapshot.forEach((doc)=>{

        data.push({

          id:doc.id,

          ...doc.data()

        });

      });

      /* URL PARAMS */

      const urlParams =
      new URLSearchParams(

        window.location.search

      );

      const exam =
      urlParams.get("exam");

      const subject =
      urlParams.get("subject");

      const chapter =
      urlParams.get("chapter");

      const test =
      urlParams.get("test");

      let filtered = data;

      /* FILTER EXAM */

      if(exam){

        filtered =
        filtered.filter(

          (q:any)=>

            q.exam === exam

        );

      }

      /* FILTER SUBJECT */

      if(subject){

        filtered =
        filtered.filter(

          (q:any)=>

            q.subject === subject

        );

      }

      /* FILTER CHAPTER */

      if(chapter){

        filtered =
        filtered.filter(

          (q:any)=>

            q.chapter === chapter

        );

      }

      /* TEST-ID ENGINE */

      if(test){

        const testNumber =
        parseInt(test);

        filtered =
        filtered.filter(

          (
            _:any,
            index:number
          )=>

            index % 10 ===
            testNumber % 10

        );

      }

      /* RANDOMIZE */

      const shuffled =
      filtered.sort(

        ()=>0.5 - Math.random()

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

  useEffect(()=>{

    if(submitted){

      return;

    }

    if(timeLeft <= 0){

      setSubmitted(true);

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
        "Select an option 😎"
      );

      return;

    }

    let updatedScore = score;

    if(

      selected ===
      questions[currentQuestion]?.answer

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

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center">

        <h1 className="text-5xl font-black">

          Loading Questions 🚀

        </h1>

      </main>

    );

  }

  if(questions.length === 0){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center">

        <h1 className="text-4xl font-black text-center">

          No Questions Found 😭

        </h1>

      </main>

    );

  }

  if(submitted){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center p-6">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-12 text-center max-w-2xl w-full">

          <div className="text-8xl mb-8">

            🎉

          </div>

          <h1 className="text-6xl font-black text-purple-400 mb-6">

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

  return(

    <main className="min-h-screen bg-[#050816] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-black">

            🚀 Real Test Series

          </h1>

          <div className="bg-red-500 px-6 py-3 rounded-2xl text-xl font-bold">

            ⏱ {minutes}:
            {seconds.toString().padStart(2,"0")}

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold">

              Question
              {" "}
              {currentQuestion + 1}
              {" "}
              / {questions.length}

            </h2>

            <div className="bg-[#111827] px-5 py-2 rounded-2xl">

              Score:
              {" "}
              {score}

            </div>

          </div>

          <h3 className="text-4xl font-black leading-relaxed mb-10">

            {
              questions[currentQuestion]
              ?.question
            }

          </h3>

          <div className="space-y-5">

            {
              questions[currentQuestion]
              ?.options?.map(

                (
                  option:any,
                  index:number
                )=>(

                  <button
                    key={index}
                    onClick={()=>
                      setSelected(option)
                    }
                    className={`w-full p-5 rounded-2xl border text-left transition

                    ${selected === option

                      ? "bg-purple-600 border-purple-500"

                      : "bg-[#111827] border-gray-700 hover:border-purple-500"

                    }`}
                  >

                    {option}

                  </button>

                )

              )
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