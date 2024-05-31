import React from "react";
import useTasksContext from "../customHooks/useTasksContext";

export default function FilterTasks() {
  const { originalTasksRef, setTasks } = useTasksContext();

  const handelFilter = (option) => {
    if (option === "all") setTasks(originalTasksRef.current);
    if (option === "com")
      setTasks(originalTasksRef.current.filter((task) => task.completed));
    if (option === "inc")
      setTasks(originalTasksRef.current.filter((task) => !task.completed));
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-around p-4 m-2 bg-slate-200 rounded-xl md:w-3/5">
      <button
        className="py-1 px-4 border-2 rounded-lg border-blue-300"
        onClick={() => {
          handelFilter("all");
        }}
      >
        All Tasks
      </button>
      <button
        className="py-1 px-4 border-2 rounded-lg border-blue-300"
        onClick={() => {
          handelFilter("com");
        }}
      >
        Only Complete
      </button>
      <button
        className="py-1 px-4 border-2 rounded-lg border-blue-300"
        onClick={() => {
          handelFilter("inc");
        }}
      >
        Only Incomplete
      </button>
    </div>
  );
}
