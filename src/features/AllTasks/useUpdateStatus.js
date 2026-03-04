import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus as updateStatusApi } from "../../service/apiTasks";
import toast from "react-hot-toast";

export function useUpdateStatus() {
  const queryClient = useQueryClient();
  const { mutate: updateStatus, isPending: isLoading } = useMutation({
    mutationFn: ({ id, currentStatus }) =>
      updateStatusApi({ id, currentStatus }),
    onSuccess: () => {
      toast.success("Task status change successfully");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateStatus, isLoading };
}
