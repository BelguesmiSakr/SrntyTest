import React, { useState } from "react";
import axios from "axios";
import useTasksContext from "../customHooks/useTasksContext";

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export default function AddTask() {
  const [newtask, setNewTask] = useState({
    completed: false,
    id: generateRandomId(),
    title: "",
    userId: "",
  });

  const { tasks, originalTasksRef, setTasks } = useTasksContext();

  const handelTitlechange = (e) => {
    setNewTask({ ...newtask, title: e.target.value });
  };

  const handelUserIDchange = (e) => {
    setNewTask({ ...newtask, userId: Number(e.target.value) });
  };

  const handelSubmit = () => {
    const updatesTaks = [newtask, ...tasks];
    setTasks(updatesTaks);
    originalTasksRef.current = updatesTaks;
    axios
      .post("https://jsonplaceholder.typicode.com/todos", newtask)
      .then((res) => {
        alert("New task added successfully");
        console.log(res.data);
      })
      .then(() =>
        setNewTask({
          ...newtask,
          id: generateRandomId(),
          title: "",
          userId: "",
        })
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-4 p-4 m-2 bg-slate-200 rounded-xl md:w-3/5">
      <label htmlFor="user">Title</label>
      <input
        className="w-60 md:w-1/2 p-1"
        name="user"
        type="text"
        value={newtask.title}
        onChange={handelTitlechange}
      />
      <label htmlFor="title">User ID</label>
      <input
        className="p-1"
        name="title"
        type="number"
        value={newtask.userId}
        onChange={handelUserIDchange}
      />
      <button
        className="p-1 border-4 rounded-lg border-green-300"
        onClick={handelSubmit}
      >
        Add
      </button>
    </div>
  );
}
