"use client";

import { useState } from "react";

export default function ChatRoomPage() {

  const [message,setMessage] = useState("");

  const [messages,setMessages] = useState<string[]>([
    "Welcome to Exam Cracker Chat 🚀"
  ]);

  function sendMessage(){

    if(message.trim() === ""){

      return;

    }

    setMessages([...messages,message]);

    setMessage("");

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">

          💬 <span className="text-purple-500">
            Chat Room
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-10">

          Discuss JEE / NEET doubts with students 🚀

        </p>

        <div className="bg-[#111827] rounded-3xl border border-gray-800 p-6 h-[500px] flex flex-col">

          <div className="flex-1 overflow-y-auto space-y-4 pr-2">

            {messages.map((msg,index)=>(

              <div
                key={index}
                className="bg-[#1e293b] p-4 rounded-2xl text-lg"
              >

                {msg}

              </div>

            ))}

          </div>

          <div className="flex gap-4 mt-6">

            <input
              type="text"
              placeholder="Type message..."
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="flex-1 p-5 rounded-2xl bg-[#1e293b] outline-none"
            />

            <button
              onClick={sendMessage}
              className="px-8 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
            >

              Send

            </button>

          </div>

        </div>

      </div>

    </main>

  );

}