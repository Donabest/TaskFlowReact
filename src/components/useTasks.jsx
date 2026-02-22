import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [IsDeleteAllModal, setIsDeleteAllModal] = useState(false);

  function handleSideBarClick() {
    setShowSideBar((show) => !show);
  }

  function handleDeleteAllModal() {
    setIsDeleteAllModal((show) => !show);
  }

  return (
    <TasksContext.Provider
      value={{
        showSideBar,
        setShowSideBar,
        IsDeleteAllModal,
        handleDeleteAllModal,
        handleSideBarClick,
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
