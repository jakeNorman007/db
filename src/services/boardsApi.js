import supabase from "./supabase";

export async function getDemoBoards() {
  const { data, error } = await supabase.from("boards").select("*");

  if (error) {
    console.log(error);
    throw new Error("Boards could not be gathered");
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

export async function createDemoBoard({boardName, description}) {
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

export async function deleteBoard(id) {
  const { data, error } = await supabase.from("boards").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Board could not be deleted");
  }

  return data;
}
