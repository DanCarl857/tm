"use client";

import { Button } from "@/ui/components/button";
import { TextArea } from "@/ui/components/input";
import { Text } from "@/ui/components/text";
import { Icon } from "@/ui/primitives/icon";
import { useEffect, useState } from "react";

export interface Tasks {
  id: number;
  title: string;
  completed: boolean;
}


export default function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks))
    }
  }, [])

  const addTask = () => {
    const newTask = {
      id: Math.random(),
      title: taskName,
      completed: false
    }
    setTasks([...tasks, newTask])
    setTaskName("")
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]))
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  const clearTasks = () => setTasks([])

  const completeTask = (id: number) => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed
      }
      return t
    })
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  return (
    <main className="flex flex-wrap justify-between items-center mx-auto max-w-screen-md">
      <div className="w-full">
        <div className="p-5 bg-blue-3 mb-10 rounded-md">
          <div className="flex flex-row justify-between">
            <div className="flex gap-2 flex-col">
              <p className="text-17 text-grey-2 font-500">Manage Your Tasks</p>
            </div>

          </div>
        </div>
        <div className="bg-surface flex-1 h-fit p-6 rounded-md drop-shadow-md gap-3">
          <div className="flex flex-row justify-between items-end mb-4 flex-wrap">
            <Text type="heading1" className="font-bold">
              Tasks
            </Text>
            <div className="flex flex-row items-end gap-4">
              <Button
                tone="outline"
                type="button"
                className="whitespace-nowrap"
                onClick={clearTasks}
              >
                Clear all tasks
              </Button>
            </div>
          </div>
          <hr />
          {tasks.length > 0 ? tasks.map((task) => {
            return (
              <div key={task.id} className="grid grid-cols-6 gap-4 mt-2">
                <div className="col-span-5 flex flex-row space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {
                      completeTask(task.id)
                    }}
                    className="h-6 w-6"
                  />
                  <div className={`ml-2 ${task.completed ? "line-through" : ""}`}>
                    {task.title}
                  </div>
                </div>
                <button
                  onClick={() => {
                    deleteTask(task.id)
                  }}
                  className="p-2 h-8 w-8 flex items-center justify-center rounded hover:bg-red-100 hover:text-white font-bold">
                  <Icon icon="trash" size={20} />
                </button>
              </div>
            )
          }) : <div className="flex items-center justify-center my-5">
            <Text className="text-grey-5">No tasks yet...</Text>
          </div>}
          <hr className="my-5" />
          <div className="flex flex-row space-x-2">
            <TextArea
              placeholder="Enter your task title here?"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="bg-transparent border rounded-xl min-h-10"
            />
            <Button
              tone="outline"
              type="button"
              className="whitespace-nowrap"
              onClick={addTask}
            >
              Add Task
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
