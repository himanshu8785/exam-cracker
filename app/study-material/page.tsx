"use client";

import Link from "next/link";

export default function StudyMaterialPage(){

  const materials = [

    {

      class:"Class 11",

      subject:"Physics",

      icon:"⚡",

      chapters:[

        {
          title:"Units & Dimensions",
          pdf:"#",
          plan:"FREE"
        },

        {
          title:"Kinematics",
          pdf:"#",
          plan:"BASIC"
        },

        {
          title:"Laws of Motion",
          pdf:"#",
          plan:"PRO"
        }

      ]

    },

    {

      class:"Class 11",

      subject:"Chemistry",

      icon:"🧪",

      chapters:[

        {
          title:"Mole Concept",
          pdf:"#",
          plan:"FREE"
        },

        {
          title:"Atomic Structure",
          pdf:"#",
          plan:"BASIC"
        },

        {
          title:"Chemical Bonding",
          pdf:"#",
          plan:"PRO"
        }

      ]

    },

    {

      class:"Class 11",

      subject:"Maths",

      icon:"📘",

      chapters:[

        {
          title:"Functions",

          pdf:"#",

          plan:"FREE"
        },

        {
          title:"Quadratic Equations",

          pdf:"#",

          plan:"BASIC"
        },

        {
          title:"Trigonometry",

          pdf:"#",

          plan:"PRO"
        }

      ]

    },

    {

      class:"Class 12",

      subject:"Biology",

      icon:"🧬",

      chapters:[

        {
          title:"Genetics",

          pdf:"#",

          plan:"FREE"
        },

        {
          title:"Evolution",

          pdf:"#",

          plan:"BASIC"
        },

        {
          title:"Biotechnology",

          pdf:"#",

          plan:"PRO"
        }

      ]

    }

  ];

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

          BASIC ₹29

        </div>

      );

    }

    return(

      <div className="bg-blue-500 px-4 py-2 rounded-xl text-sm font-bold">

        PRO ₹69

      </div>

    );

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-8">

          📚 Premium Study Material

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Study
          {" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">

            Materials

          </span>

          <br />

          For JEE & NEET 🚀

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Notes, formulas,
          NCERT PDFs,
          short notes and premium study resources 😎🔥

        </p>

      </section>

      {/* MATERIALS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {materials.map((item,index)=>(

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10"
            >

              {/* HEADER */}

              <div className="flex items-center gap-5 mb-10">

                <div className="text-6xl">

                  {item.icon}

                </div>

                <div>

                  <h2 className="text-4xl font-black">

                    {item.subject}

                  </h2>

                  <p className="text-gray-400 text-lg">

                    {item.class}

                  </p>

                </div>

              </div>

              {/* CHAPTERS */}

              <div className="space-y-6">

                {item.chapters.map((chapter,i)=>(

                  <div
                    key={i}
                    className="bg-[#111827] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
                  >

                    <div>

                      <h3 className="text-2xl font-bold mb-3">

                        {chapter.title}

                      </h3>

                      {getBadge(chapter.plan)}

                    </div>

                    {

                      chapter.plan === "FREE"

                      ?

                      <a
                        href={chapter.pdf}
                        target="_blank"
                        className="px-8 py-4 rounded-2xl bg-green-500 text-black text-lg font-bold"
                      >

                        Open PDF 🚀

                      </a>

                      :

                      <Link
                        href="/pricing"
                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-bold"
                      >

                        Unlock Premium 💎

                      </Link>

                    }

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>

  );

}