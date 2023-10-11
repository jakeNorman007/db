import { useQuery } from "@tanstack/vue-query";
import { getLists } from "../../services/listsApi";
import { useRoute } from "vue-router";

export function useLists() {
    const route = useRoute();
    const currentId = route.params.boardId;

    const { isLoading, error, data: lists } = useQuery({
        queryKey: ["list", currentId],
        queryFn: () => getLists(currentId),
    });

    return { isLoading, error, lists };
}
