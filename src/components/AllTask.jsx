import { motion } from "motion/react";

import TasksBody from "../ui/TasksBody";
import TaskItem from "../ui/TaskItem";
import { useTaskApi } from "./useTaskApi";
import Spinner from "../ui/spinner";

function AllTask() {
  const { tasks, isLoading } = useTaskApi();

  if (isLoading) return <Spinner />;

  return (
    <TasksBody TaskTitle={`All Task (${tasks?.length})`}>
      <TaskItem tasks={tasks} />
    </TasksBody>
  );
}

export default AllTask;
