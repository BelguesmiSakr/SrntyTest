import React from "react";
import useTasksContext from "../customHooks/useTasksContext";
import axios from "axios";

export default function Task({ task }) {
  const { tasks, originalTasksRef, setTasks } = useTasksContext();
  const status = task.completed ? "Complete" : "Incomplete";

  const handelDelete = (task) => {
    const filtredTasks = tasks.filter((current) => current.id != task.id);
    setTasks(filtredTasks);
    originalTasksRef.current = filtredTasks;
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${task.id}`)
      .then((res) => {
        alert("Task deleted successfully");
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handelStatusUpdate = (task) => {
    const updatesTaks = tasks.map((current) =>
      current.id != task.id ? current : { ...current, completed: true }
    );
    setTasks(updatesTaks);
    originalTasksRef.current = updatesTaks;
    axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
        completed: true,
      })
      .then((res) => {
        alert("Task updated successfully");
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col gap-3 justify-between m-2 p-2 border-2 border-indigo-400 w-56 rounded-lg">
      <span className="p-1">
        <em className="font-semibold">Title: </em> {task.title}
      </span>
      <span className="p-1">
        <em className="font-semibold">UserID: </em> {task.userId}
      </span>
      <span className="flex items-center p-1 gap-1">
        {!task.completed ? (
          <input
            type="checkbox"
            className="mr-1 cursor-pointer"
            onChange={() => handelStatusUpdate(task)}
          />
        ) : (
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        )}
        <em className="font-semibold">Status: </em>
        {status}
      </span>
      <button
        className="p-1 border-2 rounded-lg border-red-300"
        onClick={() => handelDelete(task)}
      >
        Delete
      </button>
    </div>
  );
}
