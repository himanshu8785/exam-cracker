"use client";

import { useState } from "react";

import Papa from "papaparse";

import {
  db
} from "../../../firebase";

import {
  collection,
  addDoc
} from "firebase/firestore";

export default function CSVUploadPage(){

  const [loading,setLoading] =
  useState(false);

  const [message,setMessage] =
  useState("");

  async function handleFileUpload(
    event:any
  ){

    const file =
    event.target.files[0];

    if(!file){

      return;

    }

    setLoading(true);

    Papa.parse(file,{

      header:true,

      skipEmptyLines:true,

      complete: async(results:any)=>{

        try{

          for(const item of results.data){

            await addDoc(

              collection(
                db,
                "questions"
              ),

              {

                question:
                item.question,

                options:[

                  item.option1,

                  item.option2,

                  item.option3,

                  item.option4

                ],

                answer:
                item.answer,

                exam:
                item.exam,

                subject:
                item.subject,

                chapter:
                item.chapter,

                difficulty:
                item.difficulty

              }

            );

          }

          setMessage(
            "Questions Uploaded Successfully 🚀"
          );

        }

        catch(error){

          console.log(error);

          setMessage(
            "Upload Failed 😭"
          );

        }

        setLoading(false);

      }

    });

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-12">

          <div className="text-center mb-10">

            <div className="text-8xl mb-6">

              📄

            </div>

            <h1 className="text-5xl font-black mb-4">

              CSV Upload

            </h1>

            <p className="text-gray-400 text-xl">

              Upload JEE / NEET Questions 😎🔥

            </p>

          </div>

          <div className="bg-[#111827] rounded-3xl p-10 border border-white/10">

            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="w-full text-lg"
            />

            {

              loading && (

                <div className="mt-8 text-center text-2xl font-bold text-purple-400">

                  Uploading Questions 🚀

                </div>

              )

            }

            {

              message && (

                <div className="mt-8 text-center text-2xl font-bold text-green-400">

                  {message}

                </div>

              )

            }

          </div>

        </div>

      </div>

    </main>

  );

}