import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { editBoard as editBoardApi } from "../../services/boardsApi";

export function useEditBoard(){
    const queryClient = useQueryClient();

    const { mutate: editBoard, isLoading: isEditing } = useMutation({
        mutationFn: (boardName) => editBoardApi(boardName),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["board"],
            });
        },
        onError: (error) =>  alert(error.message),
    });

    return { isEditing, editBoard };
}
