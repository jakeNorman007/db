import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { deleteCard as deleteCardApi } from "../../services/cardsApi";

export function useDeleteCard() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCard } = useMutation({
    mutationFn: deleteCardApi,
    onSuccess: () => {
      alert("Card deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["card"],
      });
    },
    onError: (error) => alert(error.message),
  });

  return { isDeleting, deleteCard };
}
