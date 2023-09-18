import supabase from "./supabase";

//grabs all the board info
export async function getBoards() {
  const { data, error } = await supabase.from("boards").select("*");

  if (error) {
    console.log(error);
    throw new Error("Your board could not be created");
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

//creates a board, will change to create & edit collectivly at some point
export async function createEditBoard(newBoard, id) {
 console.log(newBoard, id)
 
 //creates a new board 
  let query = supabase.from("boards");

  if (!id) query = query.insert([{ ...newBoard }]);

  // edits a board 
  if (id) query = query.update({ ...newBoard }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Your board could not be created");
  }

  return data;
}
