import supabase from "./supabase";

//this gets all the boards not tied to a user, boards for demo version
export async function getDemoBoards() {
  const { data, error } = await supabase.from("boards").select("*");

  if (error) {
    console.log(error);
    throw new Error("Boards could not be gathered.");
  }

  return data;
}

//gets a a single board, specifically the one attached to the ID and its route.
//if you click on the board in dashboard, it'll take you to that board's page
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

//creating a board as a demo user
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
