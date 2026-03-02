import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskAPi } from "./apiTasks";
import toast from "react-hot-toast";
import { useTasks } from "./useTasks";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending: isLoading } = useMutation({
    mutationFn: deleteTaskAPi,
    onSuccess: () => {
      toast.success("Task successfully delete");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteTask, isLoading };
}
