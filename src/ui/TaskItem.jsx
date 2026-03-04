import { useSearchParams } from "react-router-dom";
import Task from "../features/AllTasks/Task";

function TaskItem({ tasks }) {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortby") || "";

  let sortedTasks = tasks;

  if (sortBy === "completedFirst") {
    sortedTasks = [...tasks]?.sort((a, b) => {
      return (b.status === "completed") - (a.status === "completed");
    });
  }

  if (sortBy === "uncompletedFirst") {
    sortedTasks = [...tasks].sort((a, b) => {
      return (a.status === "completed") - (b.status === "completed");
    });
  }

  return sortedTasks?.map((task) => <Task key={task.id} task={task} />);
}

export default TaskItem;
