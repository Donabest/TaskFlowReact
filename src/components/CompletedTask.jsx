import TasksBody from "../ui/TasksBody";
import TaskItem from "../ui/TaskItem";
import { useTaskApi } from "./useTaskApi";
import Spinner from "../ui/Spinner";

function CompletedTask() {
  const { completedTask, isLoading } = useTaskApi();
  if (isLoading) return <Spinner />;
  return (
    <TasksBody TaskTitle={`Completed Task (${completedTask.length})`}>
      <TaskItem tasks={completedTask} />
    </TasksBody>
  );
}

export default CompletedTask;
