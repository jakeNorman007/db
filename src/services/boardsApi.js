import supabase from "./supabase";

//grabs all the boards
export async function getBoards() {
  const { data, error } = await supabase.from("boards").select("*");

  if (error) {
    console.log(error);
    throw new Error("Your board could not be created");
  }

  return data;
}

//gets a board by its id
export async function getBoard(id) {
  const { data, error } = await supabase
    .from("boards")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Board could not be found");
  }

  return data;
}

//deletes a board
export async function deleteBoard(id) {
  const { data, error } = await supabase.from("boards").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Your board could not be deleted");
  }

  return data;
}
