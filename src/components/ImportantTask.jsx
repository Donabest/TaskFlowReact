import TasksBody from "../ui/TasksBody";
import { useTasks } from "./useTasks";
import TaskItem from "../ui/TaskItem";

function ImportantTask() {
  const { importantTask } = useTasks();

  return (
    <TasksBody TaskTitle={`Important Task (${importantTask.length})`}>
      <TaskItem tasks={importantTask} />
    </TasksBody>
  );
}

export default ImportantTask;
