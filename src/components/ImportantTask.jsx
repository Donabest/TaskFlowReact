import TasksBody from "../ui/TasksBody";
import TaskItem from "../ui/TaskItem";
import { useTaskApi } from "./useTaskApi";
import Spinner from "../ui/Spinner";

function ImportantTask() {
  const { importantTask, isLoading } = useTaskApi();
  if (isLoading) return <Spinner />;

  return (
    <TasksBody TaskTitle={`Important Task (${importantTask.length})`}>
      <TaskItem tasks={importantTask} />
    </TasksBody>
  );
}

export default ImportantTask;
