import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const handleFormSubmit = (data) => {
    const newTask = { ...data, id: uuidv4(), status: false };
    alert("Task Added Succesfully!");
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  function toggleTaskStatus(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  TasksProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        handleFormSubmit,
        deleteTask,
        toggleTaskStatus,
        completedTask,
        setCompletedTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
