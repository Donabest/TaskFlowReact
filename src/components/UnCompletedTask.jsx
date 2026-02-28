import TasksBody from "../ui/TasksBody";
import { useTasks } from "./useTasks";
import TaskItem from "../ui/TaskItem";

function UnCompletedTask() {
  const { unCompletedTask } = useTasks();

  return (
    <TasksBody TaskTitle={`Uncompleted Task (${unCompletedTask.length})`}>
      <TaskItem tasks={unCompletedTask} />
    </TasksBody>
  );
}

export default UnCompletedTask;
