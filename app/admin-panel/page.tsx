"use client";

import { useState } from "react";

import {
  db
} from "../../firebase";

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import ProtectedRoute from "../ProtectedRoute";

export default function AdminPanelPage() {

  const [question,setQuestion] =
  useState("");

  const [option1,setOption1] =
  useState("");

  const [option2,setOption2] =
  useState("");

  const [option3,setOption3] =
  useState("");

  const [option4,setOption4] =
  useState("");

  const [answer,setAnswer] =
  useState("");

  const [subject,setSubject] =
  useState("Physics");

  const [chapter,setChapter] =
  useState("");

  const [difficulty,setDifficulty] =
  useState("Easy");

  const [exam,setExam] =
  useState("JEE");

  const [loading,setLoading] =
  useState(false);

  async function uploadQuestion(){

    if(
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !answer ||
      !chapter
    ){

      alert("Fill all fields 🚀");

      return;

    }

    setLoading(true);

    try{

      await addDoc(

        collection(db,"questions"),

        {

          question,

          options:[
            option1,
            option2,
            option3,
            option4
          ],

          answer,

          subject,

          chapter,

          difficulty,

          exam,

          createdAt:
          serverTimestamp()

        }

      );

      alert("Question Uploaded 🚀");

      setQuestion("");

      setOption1("");

      setOption2("");

      setOption3("");

      setOption4("");

      setAnswer("");

      setChapter("");

    }

    catch(error){

      console.log(error);

      alert("Upload failed");

    }

    setLoading(false);

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-black text-center mb-4">

            🧾 <span className="text-purple-500">
              Admin Panel
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            Upload JEE / NEET questions to Firebase 🚀

          </p>

          <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 space-y-6">

            <textarea
              placeholder="Enter Question..."
              value={question}
              onChange={(e)=>
                setQuestion(e.target.value)
              }
              className="w-full h-36 bg-[#1e293b] rounded-2xl p-5 outline-none resize-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Option 1"
                value={option1}
                onChange={(e)=>
                  setOption1(e.target.value)
                }
                className="bg-[#1e293b] rounded-2xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Option 2"
                value={option2}
                onChange={(e)=>
                  setOption2(e.target.value)
                }
                className="bg-[#1e293b] rounded-2xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Option 3"
                value={option3}
                onChange={(e)=>
                  setOption3(e.target.value)
                }
                className="bg-[#1e293b] rounded-2xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Option 4"
                value={option4}
                onChange={(e)=>
                  setOption4(e.target.value)
                }
                className="bg-[#1e293b] rounded-2xl p-4 outline-none"
              />

            </div>

            <input
              type="text"
              placeholder="Correct Answer"
              value={answer}
              onChange={(e)=>
                setAnswer(e.target.value)
              }
              className="w-full bg-[#1e293b] rounded-2xl p-4 outline-none"
            />

            <input
              type="text"
              placeholder="Chapter Name"
              value={chapter}
              onChange={(e)=>
                setChapter(e.target.value)
              }
              className="w-full bg-[#1e293b] rounded-2xl p-4 outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              <select
                value={subject}
                onChange={(e)=>
                  setSubject(e.target.value)
                }
                className="bg-[#1e293b] rounded-2xl p-4 outline-none"
              >

                <option>
                  Physics
                </option>

                <option>
                  Chemistry
                </option>

                <option>
                  Mathematics
                </option>

                <option>
                  Biology
                </option>

              </select>

              <select
                value={difficulty}
                onChange={(e)=>
                  setDifficulty(e.target.value)
                }
                className="bg-[#1e293b] rounded-2xl p-4 outline-none"
              >

                <option>
                  Easy
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Hard
                </option>

              </select>

              <select
                value={exam}
                onChange={(e)=>
                  setExam(e.target.value)
                }
                className="bg-[#1e293b] rounded-2xl p-4 outline-none"
              >

                <option>
                  JEE
                </option>

                <option>
                  NEET
                </option>

              </select>

            </div>

            <button
              onClick={uploadQuestion}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
            >

              {loading
                ? "Uploading..."
                : "Upload Question"
              }

            </button>

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}