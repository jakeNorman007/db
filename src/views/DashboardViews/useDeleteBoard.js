import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { useToast } from "vue-toastification";
import { deleteBoard as deleteBoardApi } from "../../services/boardsApi";

export function useDeleteBoard(){
    const queryClient = useQueryClient();
    const toast = useToast();

    const { isLoading: isDeleting, mutate: deleteBoard } = useMutation({
        mutationFn: deleteBoardApi,
        onSuccess: () => {
            toast.success("Board deleted successfully");
            queryClient.invalidateQueries({
                queryKey: ["board"],
            });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isDeleting, deleteBoard };
}
