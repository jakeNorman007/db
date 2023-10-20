import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { deleteBoard as deleteBoardApi } from "../../services/boardsApi";

export function useDeleteBoard(){
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteBoard } = useMutation({
        mutationFn: deleteBoardApi,
        onSuccess: () => {
            alert("Board deleted successfully");
            queryClient.invalidateQueries({
                queryKey: ["board"],
            });
        },
        onError: (error) => alert(error.message),
    });

    return { isDeleting, deleteBoard };
}
