import { useQuery } from "@tanstack/vue-query";
import { getBoards } from "../../services/boardsApi";

//this retreives the bords and their info from supabase in order to display what I need
//in the dashboard
export function useBoards(){
    const { isLoading, error, data: boards } = useQuery({
        queryKey: ["board"],
        queryFn: getBoards,
    });

    return { isLoading, error, boards };
}
