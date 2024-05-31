import React from "react";
import useTasksContext from "../customHooks/useTasksContext";
import Task from "./Task";
import AddTask from "./AddTask";
import FilterTasks from "./FilterTasks";

export default function Tasks() {
  const { tasks } = useTasksContext();
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="p-4 font-bold underline underline-offset-2">
        Add new task
      </div>
      <AddTask />
      <div className="p-4 font-bold underline underline-offset-2">
        Filter tasks
      </div>
      <FilterTasks />
      <div className="p-4 font-bold underline underline-offset-2">
        Tasks List
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </div>
    </div>
  );
}
