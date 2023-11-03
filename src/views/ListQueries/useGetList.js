import { useQuery } from "@tanstack/vue-query";
import { getList } from "../../services/listsApi";
import { useRoute } from "vue-router";

export function useGetList() {
  const route = useRoute();
  const currentId = route.params.listId;

  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["list", currentId],
    queryFn: () => getList(currentId),
    retry: false,
  });

  return { isLoading, list, error };
}
