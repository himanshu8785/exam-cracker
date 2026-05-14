"use client";

import {
  useEffect,
  useState
} from "react";

import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";

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

  const [user,setUser] =
  useState<any>(null);

  const [loading,setLoading] =
  useState(true);

  const [results,setResults] =
  useState<any[]>([]);

  const [stats,setStats] =
  useState({

    tests:0,

    average:0,

    highest:0

  });

  useEffect(()=>{

    const unsubscribe =
    onAuthStateChanged(

      auth,

      async(currentUser)=>{

        if(currentUser){

          setUser(currentUser);

          try{

            const q =
            query(

              collection(db,"results"),

              where(
                "uid",
                "==",
                currentUser.uid
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

            if(data.length > 0){

              const total =
              data.reduce(

                (acc:any,item:any)=>

                  acc + item.score,

                0

              );

              const highest =
              Math.max(

                ...data.map(

                  (item:any)=>

                    item.score

                )

              );

              setStats({

                tests:data.length,

                average:
                Math.round(
                  total /
                  data.length
                ),

                highest

              });

            }

          }

          catch(error){

            console.log(error);

          }

        }

        setLoading(false);

      }

    );

    return()=>unsubscribe();

  },[]);

  async function logout(){

    await signOut(auth);

    window.location.href = "/";

  }

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center text-3xl font-black">

        Loading Profile 😎🔥

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden pb-32">

      {/* HERO */}

      <section className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 text-center">

          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-5xl md:text-7xl font-black mx-auto mb-6 shadow-2xl">

            {

              user?.displayName

              ?

              user.displayName[0]

              :

              "U"

            }

          </div>

          <h1 className="text-3xl md:text-6xl font-black mb-4">

            {

              user?.displayName ||

              "Exam Cracker User"

            }

          </h1>

          <p className="text-sm md:text-xl text-gray-400 mb-8">

            {user?.email}

          </p>

          <button

            onClick={logout}

            className="px-8 py-4 rounded-[22px] bg-gradient-to-r from-red-500 to-pink-500 text-sm md:text-lg font-black"

          >

            Logout 🚀

          </button>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-8 text-center">

            <h2 className="text-3xl md:text-5xl font-black text-purple-400 mb-3">

              {stats.tests}

            </h2>

            <p className="text-sm md:text-lg text-gray-300">

              Tests Attempted

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-8 text-center">

            <h2 className="text-3xl md:text-5xl font-black text-blue-400 mb-3">

              {stats.average}

            </h2>

            <p className="text-sm md:text-lg text-gray-300">

              Average Score

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-8 text-center col-span-2 md:col-span-1">

            <h2 className="text-3xl md:text-5xl font-black text-green-400 mb-3">

              {stats.highest}

            </h2>

            <p className="text-sm md:text-lg text-gray-300">

              Highest Score

            </p>

          </div>

        </div>

      </section>

      {/* TEST HISTORY */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl md:text-5xl font-black">

            Test History 😎🔥

          </h2>

        </div>

        {

          results.length === 0

          ?

          <div className="bg-white/5 border border-white/10 rounded-[28px] md:rounded-[40px] p-10 text-center text-gray-400">

            No tests attempted yet 😭🔥

          </div>

          :

          <div className="space-y-5">

            {

              results.map((item,index)=>(

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-8"
                >

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

                    <div>

                      <h3 className="text-2xl md:text-4xl font-black mb-3">

                        Mock Test Result 🚀

                      </h3>

                      <p className="text-sm md:text-lg text-gray-400">

                        Accuracy:
                        {" "}

                        {item.accuracy || 0}%

                      </p>

                    </div>

                    <div className="flex gap-4">

                      <div className="bg-black/20 rounded-[20px] px-5 py-4 text-center">

                        <h4 className="text-2xl md:text-4xl font-black text-purple-400">

                          {item.score}

                        </h4>

                        <p className="text-xs md:text-sm text-gray-400">

                          Score

                        </p>

                      </div>

                      <div className="bg-black/20 rounded-[20px] px-5 py-4 text-center">

                        <h4 className="text-2xl md:text-4xl font-black text-green-400">

                          {item.correctAnswers}

                        </h4>

                        <p className="text-xs md:text-sm text-gray-400">

                          Correct

                        </p>

                      </div>

                    </div>

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