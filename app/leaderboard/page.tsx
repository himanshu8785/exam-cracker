"use client";

import { useEffect,useState } from "react";

import SkeletonCard from "../components/SkeletonCard";

import {
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from "firebase/firestore";

import { db } from "../../firebase";

export default function LeaderboardPage() {

  const [leaders,setLeaders] =
  useState([]);

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    async function fetchLeaderboard(){

      try{

        const q = query(

          collection(db,"scores"),

          orderBy("score","desc"),

          limit(10)

        );

        const querySnapshot =
        await getDocs(q);

        const users = [];

        querySnapshot.forEach((doc)=>{

          users.push(doc.data());

        });

        setLeaders(users);

      }

      catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    fetchLeaderboard();

  },[]);

  if(loading){

  return(

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          Loading Leaderboard...

        </h1>

        <div className="space-y-6">

          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />

        </div>

      </div>

    </main>

  );

}

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">

          🏆 <span className="text-purple-500">
            Real Leaderboard
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-12">

          Top students of Exam Cracker 🚀

        </p>

        <div className="space-y-6">

          {leaders.length === 0 ? (

            <div className="bg-[#111827] p-10 rounded-3xl border border-gray-800 text-center">

              <h2 className="text-3xl font-bold mb-4">

                No Scores Yet

              </h2>

              <p className="text-gray-400">

                Complete mock tests to appear here 🚀

              </p>

            </div>

          ) : (

            leaders.map((user,index)=>(

              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-3xl p-6 flex justify-between items-center hover:border-purple-500 transition"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-full bg-purple-600 flex justify-center items-center text-2xl font-bold">

                    {index + 1}

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">

                      {user.email}

                    </h2>

                    <p className="text-gray-400">

                      Exam Cracker Student

                    </p>

                  </div>

                </div>

                <div className="text-4xl font-bold text-purple-500">

                  {user.score}

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </main>

  );

}