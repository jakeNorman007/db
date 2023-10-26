import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { deleteList as deleteListApi } from "../../services/listsApi";

export function useDeleteList() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteList } = useMutation({
    mutationFn: deleteListApi,
    onSuccess: () => {
      alert("List deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["list"],
      });
    },
    onError: (error) => alert(error.message),
  });

  return { isDeleting, deleteList };
}
