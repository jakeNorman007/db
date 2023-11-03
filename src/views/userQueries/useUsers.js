import { useQuery } from "@tanstack/vue-query";
import { allUsers } from "../../services/usersApi";

export function useUsers() {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: ["user"],
    queryFn: allUsers,
  });

  return { isLoading, error, users };
}
