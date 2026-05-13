"use client";

import Link from "next/link";

export default function ProfilePage(){

  const achievements = [

    {
      title:"7 Day Streak",
      icon:"🔥"
    },

    {
      title:"100 Questions Solved",
      icon:"🧠"
    },

    {
      title:"Top 10 Rank",
      icon:"🏆"
    },

    {
      title:"Physics Master",
      icon:"⚡"
    }

  ];

  const stats = [

    {
      title:"Tests Attempted",
      value:"48",
      icon:"📝"
    },

    {
      title:"Average Score",
      value:"182",
      icon:"📈"
    },

    {
      title:"Accuracy",
      value:"78%",
      icon:"🎯"
    },

    {
      title:"Current Streak",
      value:"12 Days",
      icon:"🔥"
    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[50px] p-12 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col md:flex-row items-center gap-10">

            {/* AVATAR */}

            <div className="w-[180px] h-[180px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[80px]">

              👨‍🎓

            </div>

            {/* INFO */}

            <div className="flex-1">

              <div className="inline-block px-5 py-2 rounded-full bg-yellow-400 text-black text-sm font-black mb-6">

                💎 PRO MEMBER

              </div>

              <h1 className="text-6xl md:text-7xl font-black mb-6">

                Exam Cracker 😎🔥

              </h1>

              <p className="text-2xl text-white/90 mb-8 leading-relaxed">

                JEE Aspirant • AIR Under 1000 Goal 🚀

              </p>

              <div className="flex flex-wrap gap-5">

                <div className="bg-white/10 px-6 py-4 rounded-2xl text-lg font-bold">

                  🔥 12 Day Streak

                </div>

                <div className="bg-white/10 px-6 py-4 rounded-2xl text-lg font-bold">

                  🏆 Rank #42

                </div>

                <div className="bg-white/10 px-6 py-4 rounded-2xl text-lg font-bold">

                  📈 78% Accuracy

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat,index)=>(

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center"
            >

              <div className="text-6xl mb-6">

                {stat.icon}

              </div>

              <h2 className="text-5xl font-black mb-4 text-purple-400">

                {stat.value}

              </h2>

              <p className="text-gray-400 text-lg">

                {stat.title}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🏆

          </div>

          <h2 className="text-5xl font-black">

            Achievements

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((achievement,index)=>(

            <div
              key={index}
              className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[40px] p-10 text-black text-center"
            >

              <div className="text-7xl mb-6">

                {achievement.icon}

              </div>

              <h3 className="text-3xl font-black leading-tight">

                {achievement.title}

              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* PERFORMANCE */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* STRONG SUBJECTS */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-10">

            <div className="flex items-center gap-4 mb-10">

              <div className="text-5xl">

                😎

              </div>

              <h2 className="text-4xl font-black">

                Strong Subjects

              </h2>

            </div>

            <div className="space-y-6">

              <div className="bg-green-500/20 border border-green-500/30 rounded-3xl p-6">

                <h3 className="text-3xl font-black text-green-400 mb-3">

                  Physics

                </h3>

                <p className="text-lg text-gray-300">

                  Excellent in Modern Physics & Mechanics 🚀

                </p>

              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-3xl p-6">

                <h3 className="text-3xl font-black text-blue-400 mb-3">

                  Chemistry

                </h3>

                <p className="text-lg text-gray-300">

                  Strong in Physical Chemistry 😎🔥

                </p>

              </div>

            </div>

          </div>

          {/* WEAK SUBJECTS */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-10">

            <div className="flex items-center gap-4 mb-10">

              <div className="text-5xl">

                😭

              </div>

              <h2 className="text-4xl font-black">

                Improve These

              </h2>

            </div>

            <div className="space-y-6">

              <div className="bg-red-500/20 border border-red-500/30 rounded-3xl p-6">

                <h3 className="text-3xl font-black text-red-400 mb-3">

                  Probability

                </h3>

                <p className="text-lg text-gray-300">

                  Practice more PYQs and mock tests ⚡

                </p>

              </div>

              <div className="bg-orange-500/20 border border-orange-500/30 rounded-3xl p-6">

                <h3 className="text-3xl font-black text-orange-400 mb-3">

                  Organic Chemistry

                </h3>

                <p className="text-lg text-gray-300">

                  Revise reaction mechanisms daily 🔥

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PREMIUM CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45px] p-12 text-center">

          <div className="text-8xl mb-8">

            💎

          </div>

          <h2 className="text-6xl font-black mb-8">

            Unlock Elite Profile Features

          </h2>

          <p className="text-2xl text-white/90 mb-10 leading-relaxed">

            Get advanced badges,
            AI recommendations,
            personalized insights and elite ranks 😎🔥

          </p>

          <Link
            href="/pricing"
            className="inline-block px-12 py-5 rounded-3xl bg-black text-2xl font-black"
          >

            Upgrade to ELITE 🚀

          </Link>

        </div>

      </section>

    </main>

  );

}