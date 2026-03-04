import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTask as editTaskApi } from "../service/apiTasks";
import toast from "react-hot-toast";

export function useEditTask() {
  const queryClient = useQueryClient();

  const { mutate: editTask, isPending } = useMutation({
    mutationFn: editTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task Edited Successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editTask, isPending };
}
