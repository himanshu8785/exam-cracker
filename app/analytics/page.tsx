"use client";

import { useEffect,useState } from "react";

import {
  db
} from "../../firebase";

import {
  collection,
  getDocs
} from "firebase/firestore";

export default function AnalyticsPage() {

  const [scores,setScores] =
  useState<any[]>([]);

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    async function fetchScores(){

      try{

        const querySnapshot =
        await getDocs(

          collection(
            db,
            "scores"
          )

        );

        const data:any[] = [];

        querySnapshot.forEach((doc)=>{

          data.push({

            id:doc.id,

            ...doc.data()

          });

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

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-center mb-4">

          📊 Analytics Dashboard

        </h1>

        <p className="text-center text-gray-400 text-lg mb-12">

          User scores and performance 🚀

        </p>

        {loading ? (

          <div className="text-center text-3xl font-bold">

            Loading...

          </div>

        ) : (

          <div className="grid gap-6">

            {scores.map((item,index)=>(

              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-3xl p-6"
              >

                <h2 className="text-2xl font-bold mb-2">

                  {item.email || "Unknown"}

                </h2>

                <p className="text-gray-400 mb-2">

                  Test:
                  {" "}
                  {item.testSeries || "N/A"}

                </p>

                <p className="text-purple-500 text-xl font-bold">

                  Score:
                  {" "}
                  {item.score || 0}

                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>

  );

}