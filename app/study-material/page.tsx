"use client";

import ProtectedRoute from "../ProtectedRoute";

export default function StudyMaterialPage() {

  const materials = [

    {
      subject:"Physics",
      chapter:"Units & Dimensions",
      file:"Download PDF"
    },

    {
      subject:"Physics",
      chapter:"Laws of Motion",
      file:"Download PDF"
    },

    {
      subject:"Chemistry",
      chapter:"Atomic Structure",
      file:"Download PDF"
    },

    {
      subject:"Chemistry",
      chapter:"Chemical Bonding",
      file:"Download PDF"
    },

    {
      subject:"Mathematics",
      chapter:"Limits & Continuity",
      file:"Download PDF"
    },

    {
      subject:"Mathematics",
      chapter:"Integration",
      file:"Download PDF"
    },

    {
      subject:"Biology",
      chapter:"Cell Structure",
      file:"Download PDF"
    },

    {
      subject:"Biology",
      chapter:"Genetics",
      file:"Download PDF"
    }

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">

            📚 <span className="text-purple-500">
              Study Material
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            Access chapter-wise notes and PDFs 🚀

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {materials.map((item,index)=>(

              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition"
              >

                <div className="flex justify-between items-center mb-6">

                  <div className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500">

                    {item.subject}

                  </div>

                  <div className="text-3xl">

                    📄

                  </div>

                </div>

                <h2 className="text-3xl font-bold mb-4 leading-snug">

                  {item.chapter}

                </h2>

                <p className="text-gray-400 mb-8">

                  Premium handwritten notes and formulas 🚀

                </p>

                <button
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-lg"
                >

                  {item.file}

                </button>

              </div>

            ))}

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}