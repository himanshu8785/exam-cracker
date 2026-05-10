"use client";

import ProtectedRoute from "../ProtectedRoute";

export default function PremiumPage() {

  const plans = [

    {
      name:"Free",
      price:"₹0",
      features:[
        "Limited Mock Tests",
        "Basic Analytics",
        "Daily Quiz Access",
        "Basic Study Material"
      ],
      button:"Current Plan",
      popular:false
    },

    {
      name:"Pro",
      price:"₹299/month",
      features:[
        "Unlimited Mock Tests",
        "Advanced Analytics",
        "AI Doubt Solver",
        "Premium Study Material",
        "Leaderboard Access",
        "Priority Features"
      ],
      button:"Upgrade Now",
      popular:true
    },

    {
      name:"Elite",
      price:"₹799/month",
      features:[
        "Everything in Pro",
        "1-on-1 Mentorship",
        "Personalized Study Planner",
        "Advanced Rank Prediction",
        "Premium Test Series",
        "Early Access Features"
      ],
      button:"Go Elite",
      popular:false
    }

  ];

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h1 className="text-6xl font-black mb-6">

              💳 <span className="text-purple-500">
                Premium Plans
              </span>

            </h1>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">

              Unlock advanced features, AI tools, analytics and premium mock tests to accelerate your JEE & NEET preparation 🚀

            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {plans.map((plan,index)=>(

              <div
                key={index}
                className={`relative rounded-[40px] p-10 border transition hover:scale-[1.02]

                ${plan.popular

                  ? "bg-gradient-to-b from-purple-600/20 to-blue-600/10 border-purple-500"

                  : "bg-[#111827] border-gray-800"

                }`}
              >

                {plan.popular && (

                  <div className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">

                    MOST POPULAR

                  </div>

                )}

                <h2 className="text-4xl font-black mb-4">

                  {plan.name}

                </h2>

                <div className="text-5xl font-black text-purple-500 mb-8">

                  {plan.price}

                </div>

                <div className="space-y-5 mb-10">

                  {plan.features.map((feature,i)=>(

                    <div
                      key={i}
                      className="flex items-center gap-4"
                    >

                      <div className="w-7 h-7 rounded-full bg-green-500 flex justify-center items-center text-sm font-bold">

                        ✓

                      </div>

                      <p className="text-lg text-gray-300">

                        {feature}

                      </p>

                    </div>

                  ))}

                </div>

                <button
                  className={`w-full py-5 rounded-2xl text-lg font-semibold transition

                  ${plan.popular

                    ? "bg-gradient-to-r from-purple-600 to-blue-600"

                    : "bg-[#1e293b] border border-gray-700"

                  }`}
                >

                  {plan.button}

                </button>

              </div>

            ))}

          </div>

          <div className="mt-20 bg-[#111827] border border-gray-800 rounded-[40px] p-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

              <div>

                <h2 className="text-5xl font-black text-purple-500 mb-4">

                  10K+

                </h2>

                <p className="text-gray-400 text-xl">

                  Active Students

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-blue-500 mb-4">

                  95%

                </h2>

                <p className="text-gray-400 text-xl">

                  Satisfaction Rate

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-green-500 mb-4">

                  AI

                </h2>

                <p className="text-gray-400 text-xl">

                  Powered Learning

                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}