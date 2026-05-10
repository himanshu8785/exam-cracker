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

import SkeletonCard from "../components/SkeletonCard";

export default function AnalyticsPage() {

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

        <main className="min-h-screen bg-[#0b1120] text-white p-6">

          <div className="max-w-6xl mx-auto">

            <h1 className="text-5xl font-bold mb-10">

              Loading Analytics...

            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />

            </div>

          </div>

        </main>

      </ProtectedRoute>

    );

  }

  const totalTests =
  scores.length;

  const highestScore =
  scores.length > 0

    ? Math.max(
        ...scores.map(
          (item)=>item.score
        )
      )

    : 0;

  const averageScore =
  scores.length > 0

    ? Math.floor(

        scores.reduce(
          (acc,item)=>
            acc + item.score,
          0
        ) / scores.length

      )

    : 0;

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">

            📊 <span className="text-purple-500">
              Analytics Dashboard
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            Track platform performance and test statistics 🚀

          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-purple-500 mb-4">

                {totalTests}

              </h2>

              <p className="text-gray-400 text-xl">

                Total Tests

              </p>

            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-blue-500 mb-4">

                {highestScore}

              </h2>

              <p className="text-gray-400 text-xl">

                Highest Score

              </p>

            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-green-500 mb-4">

                {averageScore}

              </h2>

              <p className="text-gray-400 text-xl">

                Average Score

              </p>

            </div>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-10">

              📈 Recent Test Scores

            </h2>

            <div className="space-y-6">

              {scores.slice(0,5).map((item,index)=>(

                <div
                  key={index}
                  className="bg-[#1e293b] rounded-3xl p-6 flex justify-between items-center"
                >

                  <div>

                    <h3 className="text-2xl font-bold">

                      {item.email || "Student"}

                    </h3>

                    <p className="text-gray-400 mt-2">

                      Mock Test Attempt

                    </p>

                  </div>

                  <div className="text-4xl font-black text-purple-500">

                    {item.score}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}