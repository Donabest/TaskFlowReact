import { createContext, useContext, useEffect, useState } from "react";
import { useTaskApi } from "./useTaskApi";

const TasksContext = createContext();

const FakeTasks = [
  {
    id: "yghjkh",
    title: "DON",
    description: "learn basic or pivot to Ai",
    startDate: "2/14/2002",
    endDate: "2/14/2002",
    status: "completed",
    priority: "p0",
    important: true,
  },
  {
    id: "fghjk",
    title: "Zeez",
    description: "practicing react",
    startDate: "2/14/2002",
    endDate: "2/14/2002",
    status: "uncompleted",
    priority: "p1",
    important: false,
  },
  {
    id: "hkjha",
    title: "Abest",
    description: "learning framer motion",
    startDate: "2/14/2002",
    endDate: "2/14/2002",
    status: "completed",
    priority: "p2",
    important: true,
  },
];

function TasksProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDeleteTaskModal, setIsDeleteTaskModal] = useState(false);
  const [isDeleteAllModal, setIsDeleteAllModal] = useState(false);
  const [tasks, setTask] = useState(FakeTasks);

  const importantTask = tasks.filter((task) => task.important === true);
  const completedTask = tasks.filter((task) => task.status === "completed");
  const unCompletedTask = tasks.filter((task) => task.status === "uncompleted");

  function handleSideBarClick() {
    setShowSideBar((show) => !show);
  }

  function onCancelDelete() {
    setIsDeleteTaskModal(false);
    setIsDeleteAllModal(false);
  }

  function handleDeleteAllModal() {
    setIsDeleteAllModal(true);
  }

  function onConfirmDeleteAll() {
    setTask([]);
    setIsDeleteAllModal(false);
  }

  function ToggleImportant(id) {
    setTask((task) =>
      task.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task,
      ),
    );
  }

  function ToggleCompleted(id) {
    const toggleComplete = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "completed" ? "uncompleted" : "completed",
          }
        : task,
    );
    setTask(toggleComplete);
  }

  useEffect(function () {
    function handleOutsideClick(e) {
      if (e.key === "Escape") setShowSideBar(false);
    }
    window.addEventListener("keydown", handleOutsideClick);

    return () => window.removeEventListener("keydown", handleOutsideClick);
  }, []);

  return (
    <TasksContext.Provider
      value={{
        showSideBar,
        setShowSideBar,
        handleSideBarClick,
        tasks,
        setTask,
        ToggleImportant,
        completedTask,
        importantTask,
        unCompletedTask,
        ToggleCompleted,
        isDeleteTaskModal,
        onCancelDelete,
        handleDeleteAllModal,
        isDeleteAllModal,
        onConfirmDeleteAll,
        setIsDeleteTaskModal,
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
