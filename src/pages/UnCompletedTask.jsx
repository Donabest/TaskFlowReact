import TasksBody from "../ui/TasksBody";
import TaskItem from "../ui/TaskItem";
import Spinner from "../ui/Spinner";
import { useTaskApi } from "../features/AllTasks/useTaskApi";

function UnCompletedTask() {
  const { unCompletedTask, isLoading } = useTaskApi();

  if (isLoading) return <Spinner />;

  return (
    <TasksBody TaskTitle={`Uncompleted Task (${unCompletedTask.length})`}>
      <TaskItem tasks={unCompletedTask} />
    </TasksBody>
  );
}

export default UnCompletedTask;
