import { getBoard } from "../../services/boardsApi";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";

export function useBoard() {
    const route = useRoute();
    const currentId = route.params.boardId;

    const { isLoading, data: board, error } = useQuery({
        queryKey: ["board", currentId],
        queryFn: () => getBoard(currentId),
        retry: false,
    });

    return { isLoading, error, board };
}
