import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "./apiTasks";

export function useGetEditById() {
  const { data: editById } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTaskById,
  });

  return { editById };
}
