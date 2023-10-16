import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createList as createListApi } from "../../services/listsApi";

export function useCreateList() {
  const queryClient = useQueryClient();

  const { mutate: createList, isLoading: isCreating } = useMutation({
    mutationFn: createListApi,
    onSuccess: () => {
      alert("List was created.");
      queryClient.invalidateQueries({
        queryKey: ["list"],
      });
    },
    onError: (error) => alert(error.message),
  });

  return { isCreating, createList };
}
