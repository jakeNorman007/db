import supabase from "./supabase";

//retrieves all of the project boards from db
export async function getBoards() {
  const { data, error } = await supabase.from("boards").select("*");

  if (error) {
    console.log(error);
    throw new Error("Boards could not be gathered");
  }

  return data;
}

//retrieves a single project board from db based on the board's id
export async function getBoard(id) {
  const { data, error } = await supabase
    .from("boards")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Board could not be gathered");
  }

  return data;
}

//deals with the creation of a new project board
export async function createBoard({boardName, description}) {
  const { data, error } = await supabase
    .from("boards")
    .insert([{ boardName: boardName, description: description }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Board could not be created");
  }

  return data;
}

//ability to delete a project board
export async function deleteBoard(id) {
  const { data, error } = await supabase.from("boards").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Board could not be deleted");
  }

  return data;
}
