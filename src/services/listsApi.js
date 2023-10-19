import supabase from "./supabase";

//gets all lists
export async function allLists(){
    const { data, error } = await supabase
        .from("lists")
        .select("*");

    if(error) {
        console.log(error);
        throw new Error("All lists could not be gathered");
    }

    return data;
}

//grabs the lists related to the current board
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

//creates a new list
export async function createList({listName, board_id}) {
  const { data, error } = await supabase
    .from("lists")
    .insert([{ listName: listName, board_id }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("List could not be created");
  }

  return data;
}
