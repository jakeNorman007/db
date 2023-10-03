import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createDemoBoard as createDemoApi } from "../../services/boardsApi";

export function useCreateDemoBoard() {
    const queryClient = useQueryClient();

    const { mutate: createDemoBoard, isLoading: isCreating } = useMutation({
        mutationFn: createDemoApi,
        onSuccess: () => {
            alert("Board was created.");
            queryClient.invalidateQueries({
                queryKey: ["demoBoard"],
            });
        },
        onError: (error) => alert(error.message),
    });

    return { isCreating, createDemoBoard };
}

