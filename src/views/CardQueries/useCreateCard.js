import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createCard as createCardApi } from "../../services/cardsApi";

export function useCreateCard() {
  const queryClient = useQueryClient();

  const { mutate: createCard, isLoading: isCreating } = useMutation({
    mutationFn: createCardApi,
    onSuccess: () => {
      alert("Card was created.");
      queryClient.invalidateQueries({
        queryKey: ["card"],
      });
    },
    onError: (error) => alert(error.message),
  });

  return { isCreating, createCard };
}
