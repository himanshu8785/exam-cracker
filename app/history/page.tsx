"use client";

import { useEffect,useState } from "react";

import {
  collection,
  getDocs,
  query,
  orderBy
} from "firebase/firestore";

import {
  db
} from "../../firebase";

import ProtectedRoute from "../ProtectedRoute";

export default function HistoryPage() {

  const [scores,setScores] =
  useState([]);

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    async function fetchScores(){

      try{

        const q = query(

          collection(db,"scores"),

          orderBy(
            "createdAt",
            "desc"
          )

        );

        const querySnapshot =
        await getDocs(q);

        const data = [];

        querySnapshot.forEach((doc)=>{

          data.push(doc.data());

        });

        setScores(data);

      }

      catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    fetchScores();

  },[]);

  if(loading){

    return(

      <ProtectedRoute>

        <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center">

          <h1 className="text-4xl font-bold">

            Loading History...

          </h1>

        </main>

      </ProtectedRoute>

    );

  }

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">

            📊 <span className="text-purple-500">
              Test History
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            View all submitted mock test scores 🚀

          </p>

          <div className="space-y-6">

            {scores.length === 0 ? (

              <div className="bg-[#111827] p-10 rounded-3xl border border-gray-800 text-center">

                <h2 className="text-3xl font-bold mb-4">

                  No Test History Found

                </h2>

              </div>

            ) : (

              scores.map((item,index)=>(

                <div
                  key={index}
                  className="bg-[#111827] border border-gray-800 rounded-3xl p-6 flex justify-between items-center hover:border-purple-500 transition"
                >

                  <div>

                    <h2 className="text-2xl font-bold">

                      {item.email || "Student"}

                    </h2>

                    <p className="text-gray-400 mt-2">

                      Mock Test Attempt

                    </p>

                  </div>

                  <div className="text-4xl font-bold text-purple-500">

                    {item.score}

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}