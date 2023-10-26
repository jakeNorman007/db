import supabase from "./supabase";

//retrieves all of the lists from db
export async function allLists(){
    const { data, error } = await supabase
        .from("lists")
        .select("*");

    if(error) {
        console.log(error);
        throw new Error("Lists could not be gathered");
    }

    return data;
}

//retrieves the lists related to the current board's id
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

//retrieves a single list from db based on the list's id
export async function getList(id) {
  const { data, error } = await supabase
    .from("lists")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("List could not be gathered");
  }

  return data;
}

//creates a new list
export async function createList({listName, board_id, teamName}) {
  const { data, error } = await supabase
    .from("lists")
    .insert([{ listName: listName, board_id, teamName: teamName }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("List could not be created");
  }

  return data;
}

//ability to delete a list related to a project 
export async function deleteList(id) {
  const { data, error } = await supabase.from("lists").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("List could not be deleted");
  }

  return data;
}
