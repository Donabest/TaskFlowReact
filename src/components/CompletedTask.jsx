import TasksBody from "../ui/TasksBody";
import { useTasks } from "./useTasks";
import Task from "./Task";

function CompletedTask() {
  const { completedTask } = useTasks();

  return (
    <TasksBody TaskTitle={`Completed Task (${completedTask.length})`}>
      <Task tasks={completedTask} />
    </TasksBody>
  );
}

export default CompletedTask;
