"use client";

import {

  useEffect,
  useState

} from "react";

import {

  collection,
  getDocs,
  query,
  where

} from "firebase/firestore";

import {

  auth,
  db

} from "../../firebase";

export default function ProfilePage(){

  const [loading,setLoading] =
  useState(true);

  const [userData,setUserData] =
  useState<any>(null);

  const [stats,setStats] =
  useState({

    totalTests:0,

    bestScore:0,

    avgScore:0,

    accuracy:0

  });

  /* LOAD USER DATA */

  useEffect(()=>{

    async function loadProfile(){

      try{

        const user =
        auth.currentUser;

        if(!user){

          setLoading(false);

          return;

        }

        setUserData(user);

        const q =
        query(

          collection(db,"results"),

          where(
            "uid",
            "==",
            user.uid
          )

        );

        const snapshot =
        await getDocs(q);

        const results =
        snapshot.docs.map(doc=>({

          id:doc.id,

          ...doc.data()

        }));

        if(results.length > 0){

          const totalTests =
          results.length;

          const totalScore =
          results.reduce(

            (acc:any,item:any)=>

              acc + item.score,

            0

          );

          const avgScore =
          Math.round(
            totalScore / totalTests
          );

          const bestScore =
          Math.max(

            ...results.map(
              (item:any)=>
              item.score
            )

          );

          const totalAccuracy =
          results.reduce(

            (acc:any,item:any)=>

              acc + item.accuracy,

            0

          );

          const avgAccuracy =
          Math.round(

            totalAccuracy /
            totalTests

          );

          setStats({

            totalTests,

            bestScore,

            avgScore,

            accuracy:
            avgAccuracy

          });

        }

      }

      catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    loadProfile();

  },[]);

  /* LOADING */

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center text-4xl font-black">

        Loading Profile 😎🔥

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[50px] p-12 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col md:flex-row items-center gap-10">

            {/* PROFILE IMAGE */}

            <div className="w-[180px] h-[180px] rounded-full bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center text-[80px]">

              {

                userData?.photoURL

                ?

                <img
                  src={userData.photoURL}
                  alt="profile"
                  className="w-full h-full object-cover"
                />

                :

                "👨‍🎓"

              }

            </div>

            {/* USER INFO */}

            <div className="flex-1">

              <div className="inline-block px-5 py-2 rounded-full bg-yellow-400 text-black text-sm font-black mb-6">

                💎 EXAM CRACKER USER

              </div>

              <h1 className="text-6xl md:text-7xl font-black mb-6 break-words">

                {

                  userData?.displayName ||

                  "Exam Cracker User"

                }

              </h1>

              <p className="text-2xl text-white/90 mb-8 break-words">

                {

                  userData?.email

                }

              </p>

              <div className="flex flex-wrap gap-5">

                <div className="bg-white/10 px-6 py-4 rounded-2xl text-lg font-bold">

                  📝 {stats.totalTests} Tests

                </div>

                <div className="bg-white/10 px-6 py-4 rounded-2xl text-lg font-bold">

                  🏆 Best: {stats.bestScore}

                </div>

                <div className="bg-white/10 px-6 py-4 rounded-2xl text-lg font-bold">

                  📈 {stats.accuracy}% Accuracy

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* TESTS */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              📝

            </div>

            <h2 className="text-5xl font-black mb-4 text-purple-400">

              {stats.totalTests}

            </h2>

            <p className="text-gray-400 text-lg">

              Tests Attempted

            </p>

          </div>

          {/* AVG */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              🎯

            </div>

            <h2 className="text-5xl font-black mb-4 text-green-400">

              {stats.avgScore}

            </h2>

            <p className="text-gray-400 text-lg">

              Average Score

            </p>

          </div>

          {/* BEST */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              🏆

            </div>

            <h2 className="text-5xl font-black mb-4 text-yellow-400">

              {stats.bestScore}

            </h2>

            <p className="text-gray-400 text-lg">

              Best Score

            </p>

          </div>

          {/* ACCURACY */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              📈

            </div>

            <h2 className="text-5xl font-black mb-4 text-blue-400">

              {stats.accuracy}%

            </h2>

            <p className="text-gray-400 text-lg">

              Accuracy

            </p>

          </div>

        </div>

      </section>

      {/* PERFORMANCE */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-12 text-center">

          <div className="text-8xl mb-8">

            🚀

          </div>

          <h2 className="text-6xl font-black mb-8">

            Real Performance Tracking

          </h2>

          <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">

            Your profile now tracks
            real Firebase data including
            scores, accuracy,
            tests attempted and performance 😎🔥

          </p>

        </div>

      </section>

    </main>

  );

}