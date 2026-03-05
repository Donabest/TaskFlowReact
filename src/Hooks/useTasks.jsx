import { createContext, useContext, useEffect, useState } from "react";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDeleteTaskModal, setIsDeleteTaskModal] = useState(false);
  const [isDeleteAllModal, setIsDeleteAllModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState();
  const [isNotify, setIsNotify] = useState(false);

  function handleSideBarClick() {
    setShowSideBar((show) => !show);
  }

  function handleOpenDeleteModal(id) {
    setIsDeleteTaskModal(true);
    setTaskToDelete(id);
  }

  function onCancelDelete() {
    setIsDeleteTaskModal(false);
    setIsDeleteAllModal(false);
  }

  function handleDeleteAllModal() {
    setIsDeleteAllModal(true);
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
        isDeleteTaskModal,
        onCancelDelete,
        handleDeleteAllModal,
        isDeleteAllModal,
        setIsDeleteTaskModal,
        handleOpenDeleteModal,
        taskToDelete,
        setIsDeleteAllModal,
        isNotify,
        setIsNotify,
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
