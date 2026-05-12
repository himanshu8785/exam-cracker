"use client";

import Link from "next/link";

export default function JEETestSeriesPage(){

  const fullTests = Array.from(
    {length:20},
    (_,i)=>({

      title:`JEE Full Test ${i+1}`,

      link:`/mock-test?exam=JEE&test=${i+1}`

    })
  );

  const halfTests = Array.from(
    {length:10},
    (_,i)=>({

      title:`Half Syllabus Test ${i+1}`,

      link:`/mock-test?exam=JEE&half=${i+1}`

    })
  );

  const physicsTests = Array.from(
    {length:10},
    (_,i)=>({

      title:`Physics Test ${i+1}`,

      link:`/mock-test?subject=Physics&test=${i+1}`

    })
  );

  const chemistryTests = Array.from(
    {length:10},
    (_,i)=>({

      title:`Chemistry Test ${i+1}`,

      link:`/mock-test?subject=Chemistry&test=${i+1}`

    })
  );

  const mathsTests = Array.from(
    {length:10},
    (_,i)=>({

      title:`Maths Test ${i+1}`,

      link:`/mock-test?subject=Maths&test=${i+1}`

    })
  );

  function TestCard({title,link}:any){

    return(

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 hover:border-purple-500 transition">

        <div className="flex justify-between items-center mb-6">

          <div className="text-5xl">

            📝

          </div>

          <div className="bg-purple-600 px-4 py-2 rounded-xl text-sm font-semibold">

            25 Questions

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

        <Link
          href={link}
          className="block text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-bold"
        >

          Start Test 🚀

        </Link>

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

      {/* FULL TESTS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

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
            />

          ))}

        </div>

      </section>

      {/* HALF TESTS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            📚

          </div>

          <h2 className="text-5xl font-black">

            Half Syllabus Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {halfTests.map((test,index)=>(

            <TestCard
              key={index}
              title={test.title}
              link={test.link}
            />

          ))}

        </div>

      </section>

      {/* PHYSICS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            ⚡

          </div>

          <h2 className="text-5xl font-black">

            Physics Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {physicsTests.map((test,index)=>(

            <TestCard
              key={index}
              title={test.title}
              link={test.link}
            />

          ))}

        </div>

      </section>

      {/* CHEMISTRY */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🧪

          </div>

          <h2 className="text-5xl font-black">

            Chemistry Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {chemistryTests.map((test,index)=>(

            <TestCard
              key={index}
              title={test.title}
              link={test.link}
            />

          ))}

        </div>

      </section>

      {/* MATHS */}

      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            📘

          </div>

          <h2 className="text-5xl font-black">

            Maths Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {mathsTests.map((test,index)=>(

            <TestCard
              key={index}
              title={test.title}
              link={test.link}
            />

          ))}

        </div>

      </section>

    </main>

  );

}