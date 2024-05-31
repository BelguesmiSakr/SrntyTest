import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const useTasksContext = () => useContext(TasksContext);
export default useTasksContext;
