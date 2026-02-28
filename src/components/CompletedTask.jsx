import TasksBody from "../ui/TasksBody";
import { useTasks } from "./useTasks";
import TaskItem from "../ui/TaskItem";

function CompletedTask() {
  const { completedTask } = useTasks();

  return (
    <TasksBody TaskTitle={`Completed Task (${completedTask.length})`}>
      <TaskItem tasks={completedTask} />
    </TasksBody>
  );
}

export default CompletedTask;
