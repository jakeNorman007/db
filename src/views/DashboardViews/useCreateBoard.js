import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { useToast } from "vue-toastification";
import { createEditBoard } from "../../services/boardsApi";

export function useCreateBoard() {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: createBoard, isLoading: isCreating } = useMutation({
        mutationFn: createEditBoard,
        onSuccess: () => {
            toast.success("Board was created successfully");
            queryClient.invalidateQueries({
                queryKey: ["board"],
            });
        },
        onError: (error) => toast.error(error.message),
    });

    return { createBoard, isCreating };
}
