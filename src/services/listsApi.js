import supabase from "./supabase";

//fetches all lists
//mostly in here for testing purposes as of now
export async function getLists(id) {
  const { data, error } = await supabase
    .from("lists")
    .select()
    .eq("board_id", id);

  if (error) {
    console.log(error);
    throw new Error("List could not be gathered");
  }

  return data;
}
