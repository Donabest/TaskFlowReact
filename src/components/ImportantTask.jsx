import TasksBody from "../ui/TasksBody";
import { useTasks } from "./useTasks";
import Task from "./Task";

function ImportantTask() {
  const { importantTask } = useTasks();

  return (
    <TasksBody TaskTitle={`Important Task (${importantTask.length})`}>
      <Task tasks={importantTask} />
    </TasksBody>
  );
}

export default ImportantTask;
