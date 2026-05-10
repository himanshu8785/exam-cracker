"use client";

import Link from "next/link";

import ProtectedRoute from "../ProtectedRoute";

export default function StudyMaterialPage() {

  const materials = [

    {
      title:"Physics Class 11 Notes",
      description:
      "Complete handwritten notes for Class 11 Physics 🚀",
      file:"/pdfs/physics11.pdf"
    },

    {
      title:"Physics Class 12 Notes",
      description:
      "Important concepts and formulas for boards + JEE 😎",
      file:"/pdfs/physics12.pdf"
    },

    {
      title:"Chemistry Short Notes",
      description:
      "Organic + Inorganic revision notes 🔥",
      file:"/pdfs/chemistry.pdf"
    },

    {
      title:"Math Formula Sheet",
      description:
      "All important formulas in one place 😭🔥",
      file:"/pdfs/maths.pdf"
    },

    {
      title:"Biology NCERT Notes",
      description:
      "Best notes for NEET preparation 😎",
      file:"/pdfs/biology.pdf"
    }

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-6xl font-black text-center mb-4">

            📚 <span className="text-purple-500">
              Study Material
            </span>

          </h1>

          <p className="text-center text-gray-400 text-xl mb-16">

            Premium notes, NCERT PDFs and formula sheets 🚀

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {materials.map((item,index)=>(

              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 flex flex-col justify-between"
              >

                <div>

                  <div className="text-7xl mb-8">

                    📄

                  </div>

                  <h2 className="text-4xl font-black mb-6">

                    {item.title}

                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed">

                    {item.description}

                  </p>

                </div>

                <div className="mt-10">

                  <Link
                    href={item.file}
                    target="_blank"
                    className="block w-full text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
                  >

                    Download PDF 🚀

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}