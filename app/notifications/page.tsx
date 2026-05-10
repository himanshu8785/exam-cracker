"use client";

import { useState } from "react";

import ProtectedRoute from "../ProtectedRoute";

export default function NotificationsPage() {

  const [notifications,setNotifications] =
  useState([

    {
      id:1,
      title:"🔥 New Mock Test Added",
      message:
      "Practice the latest JEE Advanced mock test now.",
      time:"2 mins ago",
      unread:true
    },

    {
      id:2,
      title:"🚀 Rank Predictor Updated",
      message:
      "More accurate percentile prediction added.",
      time:"1 hour ago",
      unread:true
    },

    {
      id:3,
      title:"📚 New Study Material",
      message:
      "Chemical Bonding handwritten notes uploaded.",
      time:"Today",
      unread:false
    },

    {
      id:4,
      title:"🏆 Leaderboard Updated",
      message:
      "Top scorers for this week are now visible.",
      time:"Yesterday",
      unread:false
    }

  ]);

  function markAsRead(id){

    const updated =
    notifications.map((item)=>{

      if(item.id === id){

        return {

          ...item,

          unread:false

        };

      }

      return item;

    });

    setNotifications(updated);

  }

  const unreadCount =
  notifications.filter(
    (item)=>item.unread
  ).length;

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-5xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center mb-12">

            <div>

              <h1 className="text-5xl font-black mb-4">

                🔔 <span className="text-purple-500">
                  Notifications
                </span>

              </h1>

              <p className="text-gray-400 text-lg">

                Stay updated with platform announcements 🚀

              </p>

            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-3xl px-8 py-5 text-center">

              <h2 className="text-4xl font-black text-purple-500">

                {unreadCount}

              </h2>

              <p className="text-gray-400 mt-2">

                Unread

              </p>

            </div>

          </div>

          <div className="space-y-6">

            {notifications.map((item)=>(

              <div
                key={item.id}
                className={`rounded-3xl p-8 border transition

                ${item.unread

                  ? "bg-purple-600/10 border-purple-500"

                  : "bg-[#111827] border-gray-800"

                }`}
              >

                <div className="flex flex-col md:flex-row justify-between gap-5">

                  <div>

                    <div className="flex items-center gap-4 mb-4">

                      <h2 className="text-3xl font-bold">

                        {item.title}

                      </h2>

                      {item.unread && (

                        <div className="w-3 h-3 rounded-full bg-purple-500" />

                      )}

                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-5">

                      {item.message}

                    </p>

                    <p className="text-gray-500">

                      {item.time}

                    </p>

                  </div>

                  {item.unread && (

                    <button
                      onClick={()=>
                        markAsRead(item.id)
                      }
                      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold h-fit"
                    >

                      Mark as Read

                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}