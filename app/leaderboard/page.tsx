"use client";

import {

  useEffect,
  useState

} from "react";

import {

  collection,
  getDocs,
  query,
  orderBy,
  limit

} from "firebase/firestore";

import {

  db

} from "../../firebase";

export default function LeaderboardPage(){

  const [loading,setLoading] =
  useState(true);

  const [leaders,setLeaders] =
  useState<any[]>([]);

  /* LOAD LEADERBOARD */

  useEffect(()=>{

    async function loadLeaderboard(){

      try{

        const q =
        query(

          collection(db,"results"),

          orderBy(
            "score",
            "desc"
          ),

          limit(20)

        );

        const snapshot =
        await getDocs(q);

        const data =
        snapshot.docs.map((doc,index)=>({

          id:doc.id,

          rank:index + 1,

          ...doc.data()

        }));

        setLeaders(data);

      }

      catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    loadLeaderboard();

  },[]);

  /* LOADING */

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center text-4xl font-black">

        Loading Leaderboard 😎🔥

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-8">

          🏆 Real Rankings

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Global
          {" "}

          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">

            Leaderboard

          </span>

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Compete with real JEE & NEET aspirants 😎🔥

        </p>

      </section>

      {/* TOP 3 */}

      {

        leaders.length >= 3 && (

          <section className="max-w-7xl mx-auto px-6 pb-24">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {

                leaders.slice(0,3).map((user,index)=>(

                  <div
                    key={index}
                    className={`relative rounded-[45px] p-[2px]

                    ${user.rank === 1

                      ?

                      "scale-105"

                      :

                      ""

                    }`}
                  >

                    <div className={`absolute inset-0 rounded-[45px]

                    ${user.rank === 1

                      ?

                      "bg-gradient-to-br from-yellow-400 to-orange-500"

                      :

                      user.rank === 2

                      ?

                      "bg-gradient-to-br from-gray-300 to-gray-500"

                      :

                      "bg-gradient-to-br from-orange-700 to-orange-900"

                    }`}></div>

                    <div className="relative bg-[#0B1120] rounded-[43px] p-10 text-center">

                      <div className="text-8xl mb-6">

                        {

                          user.rank === 1

                          ?

                          "👑"

                          :

                          user.rank === 2

                          ?

                          "🥈"

                          :

                          "🥉"

                        }

                      </div>

                      <div className="text-7xl font-black text-yellow-400 mb-6">

                        #{user.rank}

                      </div>

                      <h2 className="text-4xl font-black mb-6 break-words">

                        {user.name}

                      </h2>

                      <div className="space-y-4 text-lg">

                        <p>

                          🎯 Accuracy:
                          {" "}
                          {user.accuracy}%

                        </p>

                        <p>

                          📈 Score:
                          {" "}
                          {user.score}

                        </p>

                      </div>

                    </div>

                  </div>

                ))

              }

            </div>

          </section>

        )

      }

      {/* FULL LEADERBOARD */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🚀

          </div>

          <h2 className="text-5xl font-black">

            Top Rankings

          </h2>

        </div>

        {

          leaders.length === 0

          ?

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-16 text-center text-3xl font-black">

            No Leaderboard Data Yet 😭🔥

          </div>

          :

          <div className="space-y-6">

            {

              leaders.map((user,index)=>(

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >

                  <div className="flex items-center gap-6">

                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black

                    ${user.rank === 1

                      ?

                      "bg-yellow-400 text-black"

                      :

                      user.rank === 2

                      ?

                      "bg-gray-300 text-black"

                      :

                      user.rank === 3

                      ?

                      "bg-orange-700"

                      :

                      "bg-gradient-to-r from-purple-500 to-blue-500"

                    }`}>

                      {user.rank}

                    </div>

                    <div>

                      <h3 className="text-3xl font-black mb-2 break-words">

                        {user.name}

                      </h3>

                      <p className="text-gray-400 text-lg">

                        Accuracy:
                        {" "}
                        {user.accuracy}%

                      </p>

                    </div>

                  </div>

                  <div className="text-5xl font-black text-purple-400">

                    {user.score}

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