import React, { createContext, useEffect, useState, useRef } from "react";

const TasksContext = createContext();

export default function Provider({ children }) {
  const originalTasksRef = useRef([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTasks(json);
        originalTasksRef.current = json;
      })
      .catch((err) => console.error(err));
  }, []);

  const [tasks, setTasks] = useState([]);

  const valueToShare = { tasks, originalTasksRef, setTasks };
  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext };
