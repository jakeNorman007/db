import supabase from "./supabase";

export async function getDemoBoards() {
  const { data, error } = await supabase.from("boards").select("*");

  if (error) {
    console.log(error);
    throw new Error("Boards could not be gathered.");
  }

  return data;
}

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

export async function createDemoBoard(boardName) {
  const { data, error } = await supabase
    .from("boards")
    .insert([{ boardName: boardName }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Board could not be created");
  }

  return data;
}

export async function deleteBoard(id){
    const { data, error } = await supabase
        .from("boards")
        .delete()
        .eq("id", id)

    if(error) {
        console.log(error);
        throw new Error("Your board could not be deleted");
    }

    return data;
}
