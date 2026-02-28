import { motion } from "motion/react";

import { useTasks } from "./useTasks";
import TasksBody from "../ui/TasksBody";
import TaskItem from "../ui/TaskItem";

function AllTask() {
  const { tasks } = useTasks();
  return (
    <TasksBody TaskTitle={`All Task (${tasks.length})`}>
      <TaskItem tasks={tasks} />
    </TasksBody>
  );
}

export default AllTask;
