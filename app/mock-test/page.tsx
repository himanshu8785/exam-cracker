"use client";

import { useEffect,useState } from "react";

import {
  db,
  auth
} from "../../firebase";

import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import ProtectedRoute from "../ProtectedRoute";

const testSeriesList = [

  "JEE-MOCK-1",
  "JEE-MOCK-2",
  "JEE-MOCK-3",

  "NEET-MOCK-1",
  "NEET-MOCK-2",

  "PHY-TEST-1",
  "CHEM-TEST-1"

];

export default function MockTestPage() {

  const [selectedSeries,setSelectedSeries] =
  useState("");

  const [questions,setQuestions] =
  useState([]);

  const [loading,setLoading] =
  useState(false);

  const [started,setStarted] =
  useState(false);

  const [currentQuestion,setCurrentQuestion] =
  useState(0);

  const [selected,setSelected] =
  useState("");

  const [score,setScore] =
  useState(0);

  const [submitted,setSubmitted] =
  useState(false);

  async function startTest(){

    if(!selectedSeries){

      alert("Select test series 🚀");

      return;

    }

    setLoading(true);

    try{

      const q = query(

        collection(db,"questions"),

        where(
          "testSeries",
          "==",
          selectedSeries
        )

      );

      const querySnapshot =
      await getDocs(q);

      const data = [];

      querySnapshot.forEach((doc)=>{

        data.push({

          id:doc.id,

          ...doc.data()

        });

      });

      setQuestions(data);

      setStarted(true);

    }

    catch(error){

      console.log(error);

    }

    setLoading(false);

  }

  async function nextQuestion(){

    if(selected === ""){

      alert("Select an option 🚀");

      return;

    }

    let finalScore = score;

    if(
      selected ===
      questions[currentQuestion].answer
    ){

      finalScore += 4;

      setScore(finalScore);

    }

    if(
      currentQuestion <
      questions.length - 1
    ){

      setCurrentQuestion(prev=>
        prev + 1
      );

      setSelected("");

    }

    else{

      try{

        await addDoc(

          collection(db,"scores"),

          {

            email:
            auth.currentUser?.email,

            score:
            finalScore,

            testSeries:
            selectedSeries,

            createdAt:
            serverTimestamp()

          }

        );

      }

      catch(error){

        console.log(error);

      }

      setSubmitted(true);

    }

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-black text-center mb-4">

            📝 <span className="text-purple-500">
              Mock Test Series
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            Professional JEE / NEET Test System 🚀

          </p>

          {!started ? (

            <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold mb-10 text-center">

                Select Test Series 😎

              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {testSeriesList.map((test,index)=>(

                  <button
                    key={index}
                    onClick={()=>
                      setSelectedSeries(test)
                    }
                    className={`p-6 rounded-3xl border text-left transition

                    ${selectedSeries === test

                      ? "bg-purple-600 border-purple-500"

                      : "bg-[#1e293b] border-gray-700 hover:border-purple-500"

                    }`}
                  >

                    <h3 className="text-2xl font-bold">

                      {test}

                    </h3>

                  </button>

                ))}

              </div>

              <button
                onClick={startTest}
                className="w-full mt-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
              >

                {loading
                  ? "Loading..."
                  : "Start Test"
                }

              </button>

            </div>

          ) : submitted ? (

            <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-12 text-center">

              <h2 className="text-6xl font-black text-purple-500 mb-6">

                {score}

              </h2>

              <p className="text-2xl text-gray-300 mb-4">

                Test Submitted Successfully 🚀

              </p>

              <p className="text-lg text-gray-500 mb-10">

                {selectedSeries}

              </p>

              <button
                onClick={()=>
                  window.location.reload()
                }
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
              >

                Back To Tests

              </button>

            </div>

          ) : questions.length === 0 ? (

            <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-12 text-center">

              <h2 className="text-4xl font-bold">

                No Questions Found 🚀

              </h2>

              <p className="text-gray-400 mt-6 text-lg">

                Upload questions for:
                {selectedSeries}

              </p>

            </div>

          ) : (

            <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-2xl font-bold">

                  Question {currentQuestion + 1}
                  / {questions.length}

                </h2>

                <div className="bg-[#1e293b] px-6 py-3 rounded-2xl">

                  Score: {score}

                </div>

              </div>

              <p className="text-gray-400 mb-4">

                {selectedSeries}

              </p>

              <h3 className="text-4xl font-bold leading-relaxed mb-10">

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
                      className={`w-full p-5 rounded-2xl text-left border transition

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

                    ? "Submit Test"

                    : "Next Question"
                }

              </button>

            </div>

          )}

        </div>

      </main>

    </ProtectedRoute>

  );

}