import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

const FakeTasks = [
  {
    id: "yghjkh",
    title: "DON",
    description: "learning react",
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
  const [tasks, setTask] = useState(FakeTasks);

  const importantTask = tasks.filter((task) => task.important === true);
  const completedTask = tasks.filter((task) => task.status === "completed");
  const unCompletedTask = tasks.filter((task) => task.status === "uncompleted");

  function handleSideBarClick() {
    setShowSideBar((show) => !show);
  }

  function handleDeleteTaskModal() {
    setIsDeleteTaskModal((show) => !show);
  }

  function hanldeDeleteTask(id) {
    setTask((task) => task.filter((task) => task.id !== id));
    // setIsDeleteTaskModal((show) => !show);
  }

  function ToggleImportant(id) {
    setTask((task) =>
      task.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task,
      ),
    );
  }

  return (
    <TasksContext.Provider
      value={{
        showSideBar,
        setShowSideBar,
        isDeleteTaskModal,
        handleDeleteTaskModal,
        handleSideBarClick,
        setIsDeleteTaskModal,
        tasks,
        hanldeDeleteTask,
        ToggleImportant,
        completedTask,
        importantTask,
        unCompletedTask,
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
