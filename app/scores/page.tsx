"use client";

import { useEffect,useState } from "react";

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

export default function ScoresPage(){

  const [scores,setScores] = useState<any[]>([]);

  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    async function fetchScores(){

      try{

        const user = auth.currentUser;

        if(!user){

          setLoading(false);

          return;

        }

        const q = query(
          collection(db,"scores"),
          where("email","==",user.email)
        );

        const querySnapshot = await getDocs(q);

        const loadedScores:any[] = [];

        querySnapshot.forEach((doc)=>{

          loadedScores.push(doc.data());

        });

        setScores(loadedScores);

      }catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    fetchScores();

  },[]);

  return(

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <h1 className="text-5xl font-bold mb-10 text-center">

        Your <span className="text-purple-500">
          Scores
        </span>

      </h1>

      {loading ? (

        <p className="text-center text-gray-400 text-xl">

          Loading Scores...

        </p>

      ) : scores.length === 0 ? (

        <p className="text-center text-gray-400 text-xl">

          No Scores Found 🚀

        </p>

      ) : (

        <div className="max-w-3xl mx-auto space-y-6">

          {scores.map((item,index)=>(

            <div
              key={index}
              className="bg-[#111827] p-6 rounded-3xl border border-gray-800 flex justify-between items-center"
            >

              <div>

                <h2 className="text-2xl font-semibold">

                  Mock Test #{index + 1}

                </h2>

                <p className="text-gray-400 mt-2">

                  {item.email}

                </p>

              </div>

              <div className="text-3xl font-bold text-purple-500">

                {item.score}

              </div>

            </div>

          ))}

        </div>

      )}

    </main>

  );

}