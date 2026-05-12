"use client";

export default function PricingPage(){

  const plans = [

    {

      name:"BASIC",

      price:"₹29",

      color:"from-purple-600 to-pink-500",

      features:[

        "10 Mock Tests",

        "Daily Quiz",

        "Limited PYQs",

        "Basic Notes"

      ],

      popular:false

    },

    {

      name:"PRO",

      price:"₹69",

      color:"from-blue-600 to-cyan-500",

      features:[

        "50+ Mock Tests",

        "Full PYQs",

        "Leaderboard Access",

        "Analytics Dashboard",

        "Premium Notes"

      ],

      popular:true

    },

    {

      name:"ELITE",

      price:"₹299",

      color:"from-yellow-400 to-orange-500",

      features:[

        "ALL Tests",

        "ALL Notes",

        "Future AI Features",

        "Advanced Analytics",

        "Elite Access"

      ],

      popular:false

    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">

          💎 Premium Membership

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Unlock
          {" "}

          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

            Premium

          </span>

          <br />

          Features 🚀

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Access premium mock tests,
          PYQs, analytics,
          notes and future AI tools 😎🔥

        </p>

      </section>

      {/* PRICING CARDS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((plan,index)=>(

            <div
              key={index}
              className={`relative rounded-[45px] p-[2px]

              ${plan.popular

                ?

                "scale-105 shadow-[0_0_60px_rgba(59,130,246,0.5)]"

                :

                ""

              }`}
            >

              <div className={`absolute inset-0 rounded-[45px] bg-gradient-to-br ${plan.color}`}></div>

              <div className="relative bg-[#0B1120] rounded-[43px] p-10 h-full overflow-hidden">

                {

                  plan.popular && (

                    <div className="absolute top-5 right-5 bg-blue-500 px-5 py-2 rounded-full text-sm font-bold">

                      🔥 MOST POPULAR

                    </div>

                  )

                }

                <div className="mb-10">

                  <h2 className="text-5xl font-black mb-6">

                    {plan.name}

                  </h2>

                  <div className="flex items-end gap-2">

                    <span className="text-7xl font-black">

                      {plan.price}

                    </span>

                    <span className="text-gray-400 text-xl mb-3">

                      /month

                    </span>

                  </div>

                </div>

                <div className="space-y-5 mb-12">

                  {plan.features.map((feature,i)=>(

                    <div
                      key={i}
                      className="flex items-center gap-4 text-lg"
                    >

                      <div className="text-green-400 text-2xl">

                        ✅

                      </div>

                      <span>

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                <a

  href={

    plan.name === "BASIC"

    ?

    "upi://pay?pa=examcracker@naviaxis&pn=ExamCracker&am=29"

    :

    plan.name === "PRO"

    ?

    "upi://pay?pa=examcracker@naviaxis&pn=ExamCracker&am=69"

    :

    "upi://pay?pa=examcracker@naviaxis&pn=ExamCracker&am=299"

  }

  className={`block text-center w-full py-5 rounded-2xl text-xl font-black bg-gradient-to-r ${plan.color}`}

>

  Buy {plan.name} 🚀

</a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PAYMENT SECTION */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-12 text-center">

          <div className="text-8xl mb-8">

            💳

          </div>

          <h2 className="text-5xl font-black mb-8">

            Pay Using UPI 😎🔥

          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">

            Pay on the UPI ID below and send payment screenshot
            on WhatsApp for instant premium activation 🚀

          </p>

          {/* UPI BOX */}

          <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 mb-10">

            <p className="text-gray-400 text-lg mb-3">

              Your UPI ID

            </p>

            <h3 className="text-4xl font-black text-purple-400">

              examcracker@naviaxis

            </h3>

          </div>

          {/* QR PLACEHOLDER */}

          <img
  src="/gpay-qr.jpg"
  alt="UPI QR"
  className="w-[280px] h-[280px] mx-auto rounded-[35px] object-cover mb-10"
/>

          {/* WHATSAPP */}

          <div className="bg-green-600 rounded-3xl p-8 max-w-2xl mx-auto">

            <h3 className="text-3xl font-black mb-4">

              📲 Send Payment Screenshot

            </h3>

            <p className="text-lg mb-6">

              WhatsApp after payment for activation 😎🔥

            </p>

            <a
              href="https://wa.me/9336593375"
              target="_blank"
              className="inline-block px-8 py-4 rounded-2xl bg-black text-lg font-bold"
            >

              Open WhatsApp 🚀

            </a>

          </div>

        </div>

      </section>

    </main>

  );

}