"use client";

import { useState } from "react";

import Papa from "papaparse";

import { db } from "../../firebase";

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

export default function CSVUploadPage() {

  const [loading,setLoading] =
  useState(false);

  async function handleFileUpload(
    event:any
  ){

    const file =
    event?.target?.files?.[0];

    if(!file){

      return;

    }

    setLoading(true);

    Papa.parse(file,{

      header:true,

      skipEmptyLines:true,

      complete: async function(
        results:any
      ){

        try{

          const rows =
          results.data || [];

          for(
            const item of rows
          ){

            const row:any = item;

            await addDoc(

              collection(
                db,
                "questions"
              ),

              {

                question:
                row.question || "",

                options:[

                  row.option1 || "",

                  row.option2 || "",

                  row.option3 || "",

                  row.option4 || ""

                ],

                answer:
                row.answer || "",

                subject:
                row.subject || "",

                chapter:
                row.chapter || "",

                difficulty:
                row.difficulty || "",

                exam:
                row.exam || "",

                testSeries:
                row.testSeries || "",

                createdAt:
                serverTimestamp()

              }

            );

          }

          alert(
            "CSV Uploaded Successfully 🚀"
          );

        }

        catch(error){

          console.log(error);

          alert(
            "Upload Failed ❌"
          );

        }

        setLoading(false);

      }

    });

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black text-center mb-4">

          📄 CSV Upload

        </h1>

        <p className="text-center text-gray-400 text-lg mb-12">

          Upload bulk JEE / NEET questions 🚀

        </p>

        <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 text-center">

          <div className="text-8xl mb-8">

            📂

          </div>

          <h2 className="text-4xl font-bold mb-6">

            Upload CSV File

          </h2>

          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="mb-8"
          />

          <div>

            <button
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
            >

              {loading

                ? "Uploading..."

                : "Ready To Upload"

              }

            </button>

          </div>

        </div>

      </div>

    </main>

  );

}