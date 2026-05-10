"use client";

import { useState } from "react";

export default function AdminPanelPage() {

  const [announcement,setAnnouncement] = useState("");

  const [announcements,setAnnouncements] = useState<string[]>([
    "🔥 Welcome to Exam Cracker Admin Panel"
  ]);

  const users = [
    "Himanshu",
    "Aarav",
    "Priya",
    "Rohan",
    "Ananya"
  ];

  const mockTests = [
    "JEE Mock Test 1",
    "NEET Mock Test 2",
    "Physics Full Test",
    "Chemistry Practice Test"
  ];

  function postAnnouncement(){

    if(announcement.trim() === ""){

      return;

    }

    setAnnouncements([
      announcement,
      ...announcements
    ]);

    setAnnouncement("");

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">

          🧾 <span className="text-purple-500">
            Admin Panel
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-10">

          Manage Exam Cracker platform 🚀

        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

            <h2 className="text-3xl font-bold mb-6">

              👥 Users

            </h2>

            <div className="space-y-4">

              {users.map((user,index)=>(

                <div
                  key={index}
                  className="bg-[#1e293b] p-4 rounded-2xl"
                >

                  {user}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

            <h2 className="text-3xl font-bold mb-6">

              📘 Mock Tests

            </h2>

            <div className="space-y-4">

              {mockTests.map((test,index)=>(

                <div
                  key={index}
                  className="bg-[#1e293b] p-4 rounded-2xl"
                >

                  {test}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

            <h2 className="text-3xl font-bold mb-6">

              📢 Announcements

            </h2>

            <div className="flex gap-3 mb-6">

              <input
                type="text"
                placeholder="Write announcement..."
                value={announcement}
                onChange={(e)=>setAnnouncement(e.target.value)}
                className="flex-1 p-4 rounded-2xl bg-[#1e293b] outline-none"
              />

              <button
                onClick={postAnnouncement}
                className="px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
              >

                Post

              </button>

            </div>

            <div className="space-y-4">

              {announcements.map((item,index)=>(

                <div
                  key={index}
                  className="bg-[#1e293b] p-4 rounded-2xl"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}