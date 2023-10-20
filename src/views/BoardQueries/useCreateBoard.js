import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createBoard as createBoardApi } from "../../services/boardsApi";

export function useCreateBoard() {
    const queryClient = useQueryClient();

    const { mutate: createBoard, isLoading: isCreating } = useMutation({
        mutationFn: createBoardApi,
        onSuccess: () => {
            alert("Board was created.");
            queryClient.invalidateQueries({
                queryKey: ["board"],
            });
        },
        onError: (error) => alert(error.message),
    });

    return { isCreating, createBoard };
}

