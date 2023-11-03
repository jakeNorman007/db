import { useQuery } from "@tanstack/vue-query";
import { getBoards } from "../../services/boardsApi";

export function useBoards() {
  const {
    isLoading,
    error,
    data: boards,
  } = useQuery({
    queryKey: ["board"],
    queryFn: getBoards,
  });

  return { isLoading, error, boards };
}
