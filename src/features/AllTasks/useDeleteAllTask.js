import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAllTask as deleteAllTaskApi } from "../../service/apiTasks";
import toast from "react-hot-toast";

export function useDeleteAllTask() {
  const queryClient = useQueryClient();
  const { data: deleteAll, isPending: isDeletingAll } = useMutation({
    mutationFn: deleteAllTaskApi,
    onSuccess: () => {
      toast.success("All Task Deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteAll, isDeletingAll };
}
