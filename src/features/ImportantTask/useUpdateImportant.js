import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateImportant as updateImportantApi } from "../../service/apiTasks";
import toast from "react-hot-toast";

export function useUpdateImportant() {
  const queryClient = useQueryClient();
  const { mutate: updateImportant, isPending } = useMutation({
    mutationFn: ({ id, currentImportant }) =>
      updateImportantApi({ id, currentImportant }),
    onSuccess: () => {
      toast.success("Task added as important successfully ");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateImportant, isPending };
}
