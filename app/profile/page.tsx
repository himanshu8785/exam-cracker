"use client";

import {
  useEffect,
  useState
} from "react";

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit
} from "firebase/firestore";

import {
  onAuthStateChanged
} from "firebase/auth";

import {
  auth,
  db
} from "../../firebase";

export default function ProfilePage(){

  const [loading,setLoading] =
  useState(true);

  const [userData,setUserData] =
  useState<any>(null);

  const [recentTests,setRecentTests] =
  useState<any[]>([]);

  const [stats,setStats] =
  useState({

    totalTests:0,

    bestScore:0,

    avgScore:0,

    accuracy:0

  });

  useEffect(()=>{

    const unsubscribe =
    onAuthStateChanged(

      auth,

      async(user)=>{

        if(!user){

          setLoading(false);

          return;

        }

        setUserData(user);

        try{

          const q =
          query(

            collection(db,"results"),

            where(
              "uid",
              "==",
              user.uid
            ),

            orderBy(
              "createdAt",
              "desc"
            ),

            limit(10)

          );

          const snapshot =
          await getDocs(q);

          const results =
          snapshot.docs.map(doc=>({

            id:doc.id,

            ...doc.data()

          }));

          setRecentTests(results);

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

    );

    return()=>unsubscribe();

  },[]);

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

      <section className="relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 relative z-10">

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[50px] p-10 md:p-14 shadow-2xl">

            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">

              {/* IMAGE */}

              <div className="relative">

                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-60 rounded-full"></div>

                <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white/20 bg-[#111827] flex items-center justify-center text-[80px]">

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

              </div>

              {/* USER INFO */}

              <div className="flex-1 text-center lg:text-left">

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-sm mb-8">

                  💎 VERIFIED EXAM CRACKER USER

                </div>

                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 break-words">

                  {
                    userData?.displayName ||
                    "Exam Cracker User"
                  }

                </h1>

                <p className="text-2xl text-gray-300 mb-10 break-words">

                  {
                    userData?.email ||
                    "No Email"
                  }

                </p>

                {/* QUICK STATS */}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                  <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-center">

                    <div className="text-4xl mb-3">
                      📝
                    </div>

                    <h2 className="text-4xl font-black text-purple-400 mb-2">

                      {stats.totalTests}

                    </h2>

                    <p className="text-gray-400 font-semibold">

                      Tests Attempted

                    </p>

                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-center">

                    <div className="text-4xl mb-3">
                      🏆
                    </div>

                    <h2 className="text-4xl font-black text-yellow-400 mb-2">

                      {stats.bestScore}

                    </h2>

                    <p className="text-gray-400 font-semibold">

                      Best Score

                    </p>

                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-center">

                    <div className="text-4xl mb-3">
                      📈
                    </div>

                    <h2 className="text-4xl font-black text-blue-400 mb-2">

                      {stats.accuracy}%

                    </h2>

                    <p className="text-gray-400 font-semibold">

                      Accuracy

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ANALYTICS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/20 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="text-6xl mb-6">
              🎯
            </div>

            <h2 className="text-5xl font-black text-purple-400 mb-4">

              {stats.avgScore}

            </h2>

            <p className="text-gray-400 text-xl">

              Average Score

            </p>

          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-900/20 border border-green-500/20 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="text-6xl mb-6">
              🚀
            </div>

            <h2 className="text-5xl font-black text-green-400 mb-4">

              {stats.totalTests}

            </h2>

            <p className="text-gray-400 text-xl">

              Tests Completed

            </p>

          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-900/20 border border-blue-500/20 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="text-6xl mb-6">
              ⚡
            </div>

            <h2 className="text-5xl font-black text-blue-400 mb-4">

              {stats.accuracy}%

            </h2>

            <p className="text-gray-400 text-xl">

              Accuracy Rate

            </p>

          </div>

          <div className="bg-gradient-to-br from-yellow-600/20 to-orange-900/20 border border-yellow-500/20 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="text-6xl mb-6">
              👑
            </div>

            <h2 className="text-5xl font-black text-yellow-400 mb-4">

              {stats.bestScore}

            </h2>

            <p className="text-gray-400 text-xl">

              Highest Score

            </p>

          </div>

        </div>

      </section>

      {/* RECENT TESTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex items-center gap-4 mb-10">

          <div className="text-5xl">
            📊
          </div>

          <h2 className="text-5xl font-black">

            Recent Tests

          </h2>

        </div>

        {

          recentTests.length === 0

          ?

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-xl">

            <div className="text-8xl mb-8">
              😭
            </div>

            <h2 className="text-4xl font-black mb-4">

              No Tests Attempted Yet

            </h2>

            <p className="text-gray-400 text-xl">

              Start attempting mock tests to see your performance.

            </p>

          </div>

          :

          <div className="space-y-6">

            {

              recentTests.map((item,index)=>(

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
                >

                  <div>

                    <h3 className="text-3xl font-black mb-3">

                      🚀 Mock Test #{index + 1}

                    </h3>

                    <div className="flex flex-wrap gap-4 text-lg text-gray-300">

                      <div>
                        Accuracy: {item.accuracy}%
                      </div>

                      <div>
                        Exam: {item.exam || "JEE"}
                      </div>

                    </div>

                  </div>

                  <div className="text-right">

                    <div className="text-6xl font-black text-purple-400 mb-2">

                      {item.score}

                    </div>

                    <p className="text-gray-400 text-lg">

                      Score

                    </p>

                  </div>

                </div>

              ))

            }

          </div>

        }

      </section>

    </main>

  );

}