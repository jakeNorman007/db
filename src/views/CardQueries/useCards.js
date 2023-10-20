import { useQuery } from "@tanstack/vue-query";
import { getCards } from "../../services/cardsApi";
import { useRoute } from "vue-router";

export function useCards() {
    const route = useRoute();
    const listId = route.params.listId;

    const { isLoading, error, data: cards } = useQuery({
        queryKey: ["card", listId],
        queryFn: () => getCards(listId),
    });

    return { isLoading, error, cards };
}
