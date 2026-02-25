import TasksBody from "../ui/TasksBody";
import { useTasks } from "./useTasks";
import Task from "./Task";

function UnCompletedTask() {
  const { unCompletedTask } = useTasks();

  return (
    <TasksBody TaskTitle={`Uncompleted Task (${unCompletedTask.length})`}>
      <Task tasks={unCompletedTask} />
    </TasksBody>
  );
}

export default UnCompletedTask;
