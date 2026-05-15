"use client";

import {
  useState,
  useEffect
} from "react";

import {
  db
} from "../../../firebase";

import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

export default function NEETMockTestPage(){

  const [questions,setQuestions] =
  useState([]);

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [selectedAnswers,setSelectedAnswers] =
  useState({});

  const [timeLeft,setTimeLeft] =
  useState(180);

  const [submitted,setSubmitted] =
  useState(false);

  const [subject,setSubject] =
  useState("All");

  const [savingScore,setSavingScore] =
  useState(false);

  const formatTime = (time)=>{

    const minutes =
    Math.floor(time/60);

    const seconds =
    time % 60;

    return `${minutes
      .toString()
      .padStart(2,"0")}:${seconds
      .toString()
      .padStart(2,"0")}`;

  };

  useEffect(()=>{

    async function fetchQuestions(){

      try{

        let q;

        if(subject==="All"){

          q = query(

            collection(
              db,
              "questions"
            ),

            where(
              "exam",
              "==",
              "NEET"
            )

          );

        }

        else{

          q = query(

            collection(
              db,
              "questions"
            ),

            where(
              "exam",
              "==",
              "NEET"
            ),

            where(
              "subject",
              "==",
              subject
            )

          );

        }

        const querySnapshot =
        await getDocs(q);

        const fetchedQuestions =
        querySnapshot.docs.map(

          (doc)=>{

            const data:any = doc.data();

            return{

              question:
              data.question,

              options:[

                data.option1,
                data.option2,
                data.option3,
                data.option4

              ],

              answer:
              data.answer

            };

          }

        );

        const shuffledQuestions =

        fetchedQuestions.sort(
          ()=>0.5-Math.random()
        );

        setQuestions(
          shuffledQuestions
        );

      }

      catch(error){

        console.log(error);

      }

    }

    fetchQuestions();

  },[subject]);

  useEffect(()=>{

    if(submitted) return;

    if(timeLeft <= 0){

      setSubmitted(true);

      return;

    }

    const timer =

    setInterval(()=>{

      setTimeLeft((prev)=>prev-1);

    },1000);

    return()=>clearInterval(timer);

  },[timeLeft,submitted]);

  const handleOptionClick = (option)=>{

    setSelectedAnswers({

      ...selectedAnswers,

      [currentQuestion]:option

    });

  };

  const nextQuestion = ()=>{

    if(currentQuestion < questions.length-1){

      setCurrentQuestion(currentQuestion+1);

    }

  };

  const prevQuestion = ()=>{

    if(currentQuestion > 0){

      setCurrentQuestion(currentQuestion-1);

    }

  };

  const scoreData = questions.reduce(

    (total,q,index)=>{

      if(
        selectedAnswers[index]
        === q.answer
      ){

        total.correct += 1;

        total.score += 4;

      }

      else if(
        selectedAnswers[index]
      ){

        total.wrong += 1;

        total.score -= 1;

      }

      return total;

    },

    {

      correct:0,
      wrong:0,
      score:0

    }

  );

  const submitTest = async()=>{

    try{

      setSavingScore(true);

      await addDoc(

        collection(
          db,
          "leaderboard"
        ),

        {

          exam:"NEET",

          subject,

          score:
          scoreData.score,

          correct:
          scoreData.correct,

          wrong:
          scoreData.wrong,

          totalQuestions:
          questions.length,

          createdAt:
          serverTimestamp()

        }

      );

      setSubmitted(true);

    }

    catch(error){

      console.log(error);

    }

    finally{

      setSavingScore(false);

    }

  };

  if(questions.length===0){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">

        <div className="text-center">

          <div className="text-7xl mb-6">

            🚀

          </div>

          <h1 className="text-4xl font-black mb-4">

            Loading Questions...

          </h1>

        </div>

      </main>

    );

  }

  if(submitted){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-4">

        <div className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 text-center">

          <div className="text-7xl mb-8">

            🏆

          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6">

            Test Submitted 😎🔥

          </h1>

          <p className="text-gray-400 text-lg mb-10">

            Your Score

          </p>

          <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text mb-10">

            {scoreData.score}

          </div>

          <div className="mt-8 space-y-3 text-lg text-gray-300">

            <div>

              ✅ Correct:
              {scoreData.correct}

            </div>

            <div>

              ❌ Wrong:
              {scoreData.wrong}

            </div>

            <div>

              🏆 Final Score:
              {scoreData.score}

            </div>

          </div>

          <button
            onClick={()=>window.location.reload()}
            className="mt-10 px-8 py-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-lg font-bold active:scale-95 transition-all"
          >

            Restart Test 🚀

          </button>

        </div>

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-10 pb-32">

      <div className="max-w-4xl mx-auto">

        {/* SUBJECT FILTER */}

        <div className="flex flex-wrap gap-3 mb-8">

          {

            [
              "All",
              "Physics",
              "Chemistry",
              "Biology"
            ]

            .map((item,index)=>(

              <button
                key={index}
                onClick={()=>
                  setSubject(item)
                }
                className={`px-5 py-3 rounded-2xl font-bold transition-all duration-300

                ${
                  subject===item

                  ?

                  "bg-gradient-to-r from-green-500 to-emerald-500 text-white"

                  :

                  "bg-white/5 border border-white/10 text-gray-400"
                }`}
              >

                {item}

              </button>

            ))

          }

        </div>

        {/* TOP BAR */}

        <div className="flex items-center justify-between mb-8 bg-white/5 border border-white/10 rounded-[28px] px-5 py-4">

          <div>

            <h1 className="text-2xl md:text-3xl font-black">

              NEET Mock Test 😎🔥

            </h1>

          </div>

          <div className="text-lg md:text-2xl font-black text-green-400">

            ⏱ {formatTime(timeLeft)}

          </div>

        </div>

        {/* PROGRESS BAR */}

        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-8">

          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
            style={{
              width:`${
                (
                  (currentQuestion+1)
                  /
                  questions.length
                )*100
              }%`
            }}
          />

        </div>

        {/* QUESTION */}

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 md:p-10 mb-8">

          <div className="text-sm text-green-400 font-bold mb-5">

            Question {currentQuestion+1}/{questions.length}

          </div>

          <h2 className="text-2xl md:text-4xl font-black leading-relaxed mb-10">

            {
              questions[currentQuestion]
              ?.question
            }

          </h2>

          <div className="grid gap-4">

            {
              questions[currentQuestion]
              ?.options
              ?.map((option,index)=>(

                <button
                  key={index}
                  onClick={()=>
                    handleOptionClick(option)
                  }
                  className={`w-full text-left px-5 py-5 rounded-2xl border transition-all duration-300

                  ${
                    selectedAnswers[currentQuestion]
                    === option

                    ?

                    "bg-green-500 border-green-400"

                    :

                    "bg-white/5 border-white/10 hover:border-green-500"
                  }`}
                >

                  {option}

                </button>

              ))
            }

          </div>

        </div>

        {/* QUESTION PALETTE */}

        <div className="flex flex-wrap gap-3 mb-10">

          {questions.map((_,index)=>(

            <button
              key={index}
              onClick={()=>
                setCurrentQuestion(index)
              }
              className={`w-12 h-12 rounded-xl font-bold transition-all duration-300

              ${
                currentQuestion === index

                ?

                "bg-gradient-to-r from-green-500 to-emerald-500 text-white"

                :

                selectedAnswers[index]

                ?

                "bg-green-500/20 border border-green-500 text-green-400"

                :

                "bg-white/5 border border-white/10 text-gray-400"
              }`}
            >

              {index+1}

            </button>

          ))}

        </div>

        {/* BUTTONS */}

        <div className="flex flex-wrap justify-between gap-4">

          <button
            onClick={prevQuestion}
            disabled={currentQuestion===0}
            className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold disabled:opacity-40"
          >

            ⬅ Previous

          </button>

          {

            currentQuestion ===
            questions.length-1

            ?

            <button
              onClick={submitTest}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 font-bold active:scale-95 transition-all"
            >

              {
                savingScore
                ?
                "Saving Score..."
                :
                "Submit Test 🚀"
              }

            </button>

            :

            <button
              onClick={nextQuestion}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 font-bold active:scale-95 transition-all"
            >

              Next Question ➡

            </button>

          }

        </div>

      </div>

    </main>

  );

}