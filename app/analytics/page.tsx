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
  orderBy

} from "firebase/firestore";

import {

  auth,
  db

} from "../../firebase";

export default function AnalyticsPage(){

  const [loading,setLoading] =
  useState(true);

  const [results,setResults] =
  useState<any[]>([]);

  const [stats,setStats] =
  useState({

    totalTests:0,

    avgScore:0,

    accuracy:0,

    bestScore:0

  });

  /* LOAD REAL RESULTS */

  useEffect(()=>{

    async function loadResults(){

      try{

        const user =
        auth.currentUser;

        if(!user){

          setLoading(false);

          return;

        }

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
          )

        );

        const snapshot =
        await getDocs(q);

        const data =
        snapshot.docs.map(doc=>({

          id:doc.id,

          ...doc.data()

        }));

        setResults(data);

        /* CALCULATE STATS */

        if(data.length > 0){

          const totalTests =
          data.length;

          const totalScore =
          data.reduce(

            (acc:any,item:any)=>

              acc + item.score,

            0

          );

          const avgScore =
          Math.round(
            totalScore / totalTests
          );

          const totalAccuracy =
          data.reduce(

            (acc:any,item:any)=>

              acc + item.accuracy,

            0

          );

          const avgAccuracy =
          Math.round(

            totalAccuracy /
            totalTests

          );

          const bestScore =
          Math.max(

            ...data.map(
              (item:any)=>
              item.score
            )

          );

          setStats({

            totalTests,

            avgScore,

            accuracy:
            avgAccuracy,

            bestScore

          });

        }

      }

      catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    loadResults();

  },[]);

  /* LOADING */

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center text-4xl font-black">

        Loading Analytics 😎🔥

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">

          📈 Real Analytics

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Your
          {" "}

          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

            Performance

          </span>

        </h1>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* TOTAL TESTS */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              📝

            </div>

            <h2 className="text-5xl font-black text-purple-400 mb-4">

              {stats.totalTests}

            </h2>

            <p className="text-gray-400 text-lg">

              Tests Attempted

            </p>

          </div>

          {/* AVG SCORE */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              🎯

            </div>

            <h2 className="text-5xl font-black text-green-400 mb-4">

              {stats.avgScore}

            </h2>

            <p className="text-gray-400 text-lg">

              Average Score

            </p>

          </div>

          {/* ACCURACY */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              📈

            </div>

            <h2 className="text-5xl font-black text-blue-400 mb-4">

              {stats.accuracy}%

            </h2>

            <p className="text-gray-400 text-lg">

              Accuracy

            </p>

          </div>

          {/* BEST SCORE */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <div className="text-6xl mb-6">

              🏆

            </div>

            <h2 className="text-5xl font-black text-yellow-400 mb-4">

              {stats.bestScore}

            </h2>

            <p className="text-gray-400 text-lg">

              Best Score

            </p>

          </div>

        </div>

      </section>

      {/* RECENT TESTS */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🚀

          </div>

          <h2 className="text-5xl font-black">

            Recent Tests

          </h2>

        </div>

        {

          results.length === 0

          ?

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-16 text-center text-3xl font-black">

            No Tests Attempted Yet 😭🔥

          </div>

          :

          <div className="space-y-6">

            {

              results.map((result,index)=>(

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >

                  <div>

                    <h3 className="text-3xl font-black mb-3">

                      Mock Test 🚀

                    </h3>

                    <p className="text-gray-400 text-lg">

                      Accuracy:
                      {" "}
                      {result.accuracy}%

                    </p>

                  </div>

                  <div className="text-5xl font-black text-purple-400">

                    {result.score}

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