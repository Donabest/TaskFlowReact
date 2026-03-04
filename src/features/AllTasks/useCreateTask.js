import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTasks as createTasksApi } from "../../service/apiTasks";
import toast from "react-hot-toast";

export function useCreateTasks() {
  const queryClient = useQueryClient();
  const { mutate: createTasks, isPending } = useMutation({
    mutationFn: createTasksApi,
    onSuccess: () => {
      toast.success("New Task Added sucessfully");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createTasks, isPending };
}
