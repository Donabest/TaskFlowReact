import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../service/apiTasks";

export function useTaskApi() {
  const { isLoading, data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const completedTask = tasks?.filter((task) => task.status === "completed");
  const unCompletedTask = tasks?.filter(
    (task) => task.status === "uncompleted",
  );
  const importantTask = tasks?.filter((task) => task.important === true);

  return { isLoading, tasks, completedTask, unCompletedTask, importantTask };
}
