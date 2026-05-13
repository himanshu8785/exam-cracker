"use client";

import { useState } from "react";

import {
  db
} from "../../../firebase"

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

export default function JSONUploadPage() {

  const [jsonText,setJsonText] =
  useState("");

  const [loading,setLoading] =
  useState(false);

  async function uploadJSON(){

    if(!jsonText){

      alert("Paste JSON first 🚀");

      return;

    }

    setLoading(true);

    try{

      const questions =
      JSON.parse(jsonText);

      for(
        let item of questions
      ){

        await addDoc(

          collection(db,"questions"),

          {

            question:
            item.question,

            options:
            item.options,

            answer:
            item.answer,

            subject:
            item.subject,

            chapter:
            item.chapter,

            difficulty:
            item.difficulty,

            exam:
            item.exam,
            testSeries:
            item.testSeries,

            createdAt:
            serverTimestamp()

          }

        );

      }

      alert("Questions Uploaded 🚀");

      setJsonText("");

    }

    catch(error){

      console.log(error);

      alert("Invalid JSON ❌");

    }

    setLoading(false);

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black text-center mb-4">

          🔥 <span className="text-purple-500">
            JSON Upload
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-12">

          Paste bulk JEE / NEET questions instantly 🚀

        </p>

        <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

          <textarea
            placeholder="Paste JSON here..."
            value={jsonText}
            onChange={(e)=>
              setJsonText(e.target.value)
            }
            className="w-full h-[500px] bg-[#1e293b] rounded-3xl p-6 outline-none resize-none text-sm"
          />

          <button
            onClick={uploadJSON}
            className="w-full mt-8 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
          >

            {loading
              ? "Uploading..."
              : "Upload Questions"
            }

          </button>

        </div>

      </div>

    </main>

  );

}
