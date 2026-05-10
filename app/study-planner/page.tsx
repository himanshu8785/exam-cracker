"use client";

import { useState,useEffect } from "react";

import ProtectedRoute from "../ProtectedRoute";

export default function StudyPlannerPage() {

  const [task,setTask] =
  useState("");

  const [tasks,setTasks] =
  useState([]);

  useEffect(()=>{

    const savedTasks =
    localStorage.getItem("studyTasks");

    if(savedTasks){

      setTasks(
        JSON.parse(savedTasks)
      );

    }

  },[]);

  useEffect(()=>{

    localStorage.setItem(
      "studyTasks",
      JSON.stringify(tasks)
    );

  },[tasks]);

  function addTask(){

    if(task.trim() === ""){

      return;

    }

    const newTask = {

      id:Date.now(),

      title:task,

      completed:false

    };

    setTasks([
      newTask,
      ...tasks
    ]);

    setTask("");

  }

  function toggleTask(id){

    const updatedTasks =
    tasks.map((item)=>{

      if(item.id === id){

        return {

          ...item,

          completed:
          !item.completed

        };

      }

      return item;

    });

    setTasks(updatedTasks);

  }

  function deleteTask(id){

    const updatedTasks =
    tasks.filter(
      (item)=>item.id !== id
    );

    setTasks(updatedTasks);

  }

  const completedTasks =
  tasks.filter(
    (item)=>item.completed
  ).length;

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">

            📅 <span className="text-purple-500">
              Study Planner
            </span>

          </h1>

          <p className="text-center text-gray-400 text-lg mb-12">

            Plan and track your daily study goals 🚀

          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-purple-500 mb-4">

                {tasks.length}

              </h2>

              <p className="text-gray-400 text-xl">

                Total Tasks

              </p>

            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-green-500 mb-4">

                {completedTasks}

              </h2>

              <p className="text-gray-400 text-xl">

                Completed

              </p>

            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-blue-500 mb-4">

                {tasks.length - completedTasks}

              </h2>

              <p className="text-gray-400 text-xl">

                Remaining

              </p>

            </div>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 mb-10">

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Add study task..."
                value={task}
                onChange={(e)=>
                  setTask(e.target.value)
                }
                className="flex-1 bg-[#1e293b] rounded-2xl px-5 py-4 outline-none"
              />

              <button
                onClick={addTask}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
              >

                Add Task

              </button>

            </div>

          </div>

          <div className="space-y-6">

            {tasks.length === 0 ? (

              <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 text-center">

                <h2 className="text-3xl font-bold mb-4">

                  No Tasks Added

                </h2>

                <p className="text-gray-400">

                  Add tasks to organize your study routine 🚀

                </p>

              </div>

            ) : (

              tasks.map((item)=>(

                <div
                  key={item.id}
                  className="bg-[#111827] border border-gray-800 rounded-3xl p-6 flex flex-col md:flex-row justify-between gap-5 md:items-center"
                >

                  <div className="flex items-center gap-5">

                    <button
                      onClick={()=>
                        toggleTask(item.id)
                      }
                      className={`w-8 h-8 rounded-full border-2 flex justify-center items-center

                      ${item.completed

                        ? "bg-green-500 border-green-500"

                        : "border-gray-500"

                      }`}
                    >

                      {item.completed && "✓"}

                    </button>

                    <div>

                      <h2 className={`text-2xl font-bold

                      ${item.completed

                        ? "line-through text-gray-500"

                        : ""

                      }`}>

                        {item.title}

                      </h2>

                      <p className="text-gray-400 mt-2">

                        Study Goal

                      </p>

                    </div>

                  </div>

                  <button
                    onClick={()=>
                      deleteTask(item.id)
                    }
                    className="px-6 py-3 rounded-2xl bg-red-500"
                  >

                    Delete

                  </button>

                </div>

              ))

            )}

          </div>

        </div>

      </main>

    </ProtectedRoute>

  );

}