"use client";

import Link from "next/link";

export default function AnalyticsPage(){

  const stats = [

    {
      title:"Tests Attempted",
      value:"48",
      icon:"📝",
      color:"from-blue-500 to-cyan-500"
    },

    {
      title:"Average Score",
      value:"182",
      icon:"📈",
      color:"from-purple-500 to-pink-500"
    },

    {
      title:"Accuracy",
      value:"78%",
      icon:"🎯",
      color:"from-green-500 to-emerald-500"
    },

    {
      title:"Current Streak",
      value:"12 Days",
      icon:"🔥",
      color:"from-orange-500 to-red-500"
    }

  ];

  const subjects = [

    {
      name:"Physics",
      score:"72%",
      weak:"Rotation",
      strong:"Modern Physics",
      color:"from-blue-500 to-cyan-500"
    },

    {
      name:"Chemistry",
      score:"81%",
      weak:"Organic Chemistry",
      strong:"Physical Chemistry",
      color:"from-green-500 to-emerald-500"
    },

    {
      name:"Maths",
      score:"69%",
      weak:"Probability",
      strong:"Calculus",
      color:"from-purple-500 to-pink-500"
    }

  ];

  const recentTests = [

    {
      name:"JEE Full Test 12",
      score:"210",
      accuracy:"82%"
    },

    {
      name:"Physics Test 4",
      score:"78",
      accuracy:"76%"
    },

    {
      name:"Chemistry Test 8",
      score:"91",
      accuracy:"88%"
    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">

          📈 Performance Dashboard

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Your
          {" "}

          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

            Analytics

          </span>

          <br />

          Dashboard 🚀

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Analyze your performance,
          improve weak chapters
          and track your preparation 😎🔥

        </p>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat,index)=>(

            <div
              key={index}
              className="relative rounded-[40px] p-[2px]"
            >

              <div className={`absolute inset-0 rounded-[40px] bg-gradient-to-br ${stat.color}`}></div>

              <div className="relative bg-[#0B1120] rounded-[38px] p-8 text-center">

                <div className="text-6xl mb-6">

                  {stat.icon}

                </div>

                <h2 className="text-5xl font-black mb-4">

                  {stat.value}

                </h2>

                <p className="text-gray-400 text-lg">

                  {stat.title}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* SUBJECT ANALYSIS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            📚

          </div>

          <h2 className="text-5xl font-black">

            Subject Analysis

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {subjects.map((subject,index)=>(

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10"
            >

              <div className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${subject.color} mb-8`}>

                {subject.name}

              </div>

              <h3 className="text-6xl font-black mb-8">

                {subject.score}

              </h3>

              <div className="space-y-6">

                <div>

                  <p className="text-gray-400 mb-2">

                    Weak Topic 😭

                  </p>

                  <h4 className="text-2xl font-bold text-red-400">

                    {subject.weak}

                  </h4>

                </div>

                <div>

                  <p className="text-gray-400 mb-2">

                    Strong Topic 😎🔥

                  </p>

                  <h4 className="text-2xl font-bold text-green-400">

                    {subject.strong}

                  </h4>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* RECENT TESTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🚀

          </div>

          <h2 className="text-5xl font-black">

            Recent Tests

          </h2>

        </div>

        <div className="space-y-6">

          {recentTests.map((test,index)=>(

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >

              <div>

                <h3 className="text-3xl font-black mb-2">

                  {test.name}

                </h3>

                <p className="text-gray-400 text-lg">

                  Accuracy:
                  {" "}
                  {test.accuracy}

                </p>

              </div>

              <div className="text-5xl font-black text-purple-400">

                {test.score}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PREMIUM CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45px] p-12 text-center">

          <div className="text-8xl mb-8">

            💎

          </div>

          <h2 className="text-6xl font-black mb-8">

            Unlock Advanced Analytics

          </h2>

          <p className="text-2xl text-white/90 mb-10 leading-relaxed">

            Get detailed insights,
            chapter analysis,
            rank prediction and AI-powered performance reports 😎🔥

          </p>

          <Link
            href="/pricing"
            className="inline-block px-12 py-5 rounded-3xl bg-black text-2xl font-black"
          >

            Upgrade to PRO 🚀

          </Link>

        </div>

      </section>

    </main>

  );

}