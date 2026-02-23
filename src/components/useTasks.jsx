import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [IsDeleteTaskModal, setIsDeleteTaskModal] = useState(false);
  const [tasks, setTask] = useState([]);

  function handleSideBarClick() {
    setShowSideBar((show) => !show);
  }

  function handleDeleteTaskModal() {
    setIsDeleteTaskModal((show) => !show);
  }

  function hanldeDeleteTask(id) {
    const TaskToDelete = tasks.filter((task) => task.id !== id);
    setTask(TaskToDelete);
    setIsDeleteTaskModal((show) => !show);
  }

  return (
    <TasksContext.Provider
      value={{
        showSideBar,
        setShowSideBar,
        IsDeleteTaskModal,
        handleDeleteTaskModal,
        handleSideBarClick,
        tasks,
        setTask,
        hanldeDeleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined)
    throw new Error("TasksContext is used outside of TasksProvider");

  return context;
}

export { TasksProvider, useTasks };
