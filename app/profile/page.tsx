"use client";

import { useEffect,useState } from "react";

import {
  auth,
  db
} from "../../firebase";

import {
  onAuthStateChanged
} from "firebase/auth";

import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

import ProtectedRoute from "../ProtectedRoute";

import SkeletonCard from "../components/SkeletonCard";

export default function ProfilePage() {

  const [user,setUser] =
  useState(null);

  const [scores,setScores] =
  useState([]);

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    const unsubscribe =
    onAuthStateChanged(auth,async(currentUser)=>{

      if(!currentUser){

        setLoading(false);

        return;

      }

      setUser(currentUser);

      try{

        const q = query(

          collection(db,"scores"),

          where(
            "email",
            "==",
            currentUser.email
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

    });

    return ()=>unsubscribe();

  },[]);

  if(loading){

    return(

      <ProtectedRoute>

        <main className="min-h-screen bg-[#0b1120] text-white p-6">

          <div className="max-w-6xl mx-auto">

            <h1 className="text-5xl font-bold mb-10">

              Loading Profile...

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

          <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 mb-10">

            <div className="flex flex-col md:flex-row justify-between gap-8 items-center">

              <div className="flex items-center gap-6">

                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex justify-center items-center text-5xl font-black">

                  {user?.email?.charAt(0).toUpperCase()}

                </div>

                <div>

                  <h1 className="text-5xl font-black mb-3">

                    Student Profile 🚀

                  </h1>

                  <p className="text-gray-400 text-xl">

                    {user?.email}

                  </p>

                </div>

              </div>

              <div className="bg-[#1e293b] rounded-3xl px-8 py-5 text-center">

                <p className="text-gray-400 mb-2">

                  Account Status

                </p>

                <h2 className="text-3xl font-black text-green-500">

                  Active

                </h2>

              </div>

            </div>

          </div>

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

              📈 Recent Activity

            </h2>

            <div className="space-y-6">

              {scores.length === 0 ? (

                <div className="bg-[#1e293b] rounded-3xl p-8 text-center">

                  <h3 className="text-3xl font-bold mb-3">

                    No Activity Yet

                  </h3>

                  <p className="text-gray-400">

                    Complete mock tests to track activity 🚀

                  </p>

                </div>

              ) : (

                scores.slice(0,5).map((item,index)=>(

                  <div
                    key={index}
                    className="bg-[#1e293b] rounded-3xl p-6 flex justify-between items-center"
                  >

                    <div>

                      <h3 className="text-2xl font-bold">

                        Mock Test Attempt

                      </h3>

                      <p className="text-gray-400 mt-2">

                        Exam Cracker Practice Session

                      </p>

                    </div>

                    <div className="text-4xl font-black text-purple-500">

                      {item.score}

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}