import { useQuery } from "@tanstack/vue-query";
import { getDemoBoards } from "../../services/boardsApi";

export function useDemoBoards() {
    const { isLoading, error, data: demoBoards } = useQuery({
        queryKey: ["demoBoard"],
        queryFn: getDemoBoards,
    });

    return { isLoading, error, demoBoards };
}
