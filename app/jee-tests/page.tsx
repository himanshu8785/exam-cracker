"use client";

import Link from "next/link";

export default function JEETestSeriesPage(){

  const fullTests = Array.from(
    {length:20},
    (_,i)=>{

      let plan = "FREE";

      if(i >= 3){

        plan = "BASIC";

      }

      if(i >= 8){

        plan = "PRO";

      }

      if(i >= 15){

        plan = "ELITE";

      }

      return{

        title:`JEE Full Test ${i+1}`,

        plan,

        link:`/mock-test?exam=JEE&test=${i+1}`

      };

    }
  );

  function getBadge(plan:string){

    if(plan === "FREE"){

      return(

        <div className="bg-green-500 text-black px-4 py-2 rounded-xl text-sm font-bold">

          FREE

        </div>

      );

    }

    if(plan === "BASIC"){

      return(

        <div className="bg-purple-500 px-4 py-2 rounded-xl text-sm font-bold">

          BASIC ₹19

        </div>

      );

    }

    if(plan === "PRO"){

      return(

        <div className="bg-blue-500 px-4 py-2 rounded-xl text-sm font-bold">

          PRO ₹49

        </div>

      );

    }

    return(

      <div className="bg-yellow-500 text-black px-4 py-2 rounded-xl text-sm font-bold">

        ELITE ₹299

      </div>

    );

  }

  function TestCard({title,link,plan}:any){

    const locked =
    plan !== "FREE";

    return(

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 hover:border-purple-500 transition relative overflow-hidden">

        <div className="absolute top-4 right-4">

          {getBadge(plan)}

        </div>

        <div className="flex justify-between items-center mb-6">

          <div className="text-5xl">

            📝

          </div>

        </div>

        <h2 className="text-3xl font-black mb-6">

          {title}

        </h2>

        <div className="space-y-3 text-gray-300 mb-8">

          <p>

            ⏱ 60 Minutes

          </p>

          <p>

            🔥 Real JEE PYQs

          </p>

          <p>

            🚀 Smart Test Engine

          </p>

        </div>

        {

          locked

          ?

          <Link
            href="/pricing"
            className="block text-center py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-lg font-bold"
          >

            Unlock {plan} 💎

          </Link>

          :

          <Link
            href={link}
            className="block text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-bold"
          >

            Start Free Test 🚀

          </Link>

        }

      </div>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">

        <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-[45px] p-12">

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">

            <div>

              <div className="inline-block px-5 py-2 rounded-full bg-white/20 mb-6">

                ⚡ Real JEE Test Series

              </div>

              <h1 className="text-7xl font-black leading-tight mb-6">

                100+
                <br />

                JEE Mock Tests 😎🔥

              </h1>

              <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">

                Full syllabus,
                half syllabus,
                chapter tests,
                PYQs and subject-wise practice 🚀

              </p>

            </div>

            <div className="text-[150px]">

              ⚡

            </div>

          </div>

        </div>

      </section>

      {/* PLAN INFO */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-purple-600 rounded-[35px] p-10">

            <h2 className="text-4xl font-black mb-6">

              BASIC ₹19

            </h2>

            <div className="space-y-4 text-lg">

              <p>✅ 3 Full Tests</p>

              <p>✅ 2 Half Tests</p>

              <p>✅ Daily Quiz</p>

            </div>

          </div>

          <div className="bg-blue-600 rounded-[35px] p-10">

            <h2 className="text-4xl font-black mb-6">

              PRO ₹49

            </h2>

            <div className="space-y-4 text-lg">

              <p>✅ 20 Full Tests</p>

              <p>✅ Subject Tests</p>

              <p>✅ Analytics</p>

              <p>✅ Leaderboard</p>

            </div>

          </div>

          <div className="bg-yellow-500 text-black rounded-[35px] p-10">

            <h2 className="text-4xl font-black mb-6">

              ELITE ₹299

            </h2>

            <div className="space-y-4 text-lg font-semibold">

              <p>✅ ALL Tests</p>

              <p>✅ ALL Notes</p>

              <p>✅ Future AI Tools</p>

              <p>✅ Premium Features</p>

            </div>

          </div>

        </div>

      </section>

      {/* TESTS */}

      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🚀

          </div>

          <h2 className="text-5xl font-black">

            Full Syllabus Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {fullTests.map((test,index)=>(

            <TestCard
              key={index}
              title={test.title}
              link={test.link}
              plan={test.plan}
            />

          ))}

        </div>

      </section>

    </main>

  );

}