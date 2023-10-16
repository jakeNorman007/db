import { useQuery } from "@tanstack/vue-query";
import { getCards } from "../../services/cardsApi";
import { useRoute } from "vue-router";
import { getLists } from "../../services/listsApi";

//still trying to figure this out, need to gather cards attached to list via id
export function useCards() {
    const route = useRoute();
    const currentId = route.params.boardId;

    const { data: lists } = useQuery({
        queryKey: ["list", currentId],
        queryFn: () => getLists(currentId),
    });
    
    const listId = lists.currentId;
    const enabled = !!lists.currentId;

    const { isLoading, error, data: cards} = useQuery({
        queryKey: ["card", listId],
        queryFn: () => getCards(listId),
        enabled,
    });

    return { isLoading, error, cards};
}
