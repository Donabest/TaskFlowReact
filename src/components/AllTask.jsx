import { motion } from "motion/react";

import Task from "./Task";
import { useTasks } from "./useTasks";
import TasksBody from "../ui/TasksBody";

function AllTask() {
  const { tasks } = useTasks();
  return (
    <TasksBody TaskTitle={`All Task (${tasks.length})`}>
      <Task tasks={tasks} />
    </TasksBody>
  );
}

export default AllTask;
