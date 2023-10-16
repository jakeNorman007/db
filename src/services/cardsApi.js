import supabase from "./supabase";

//grabs the cards related to the current list
export async function getCards(id) {
  const { data, error } = await supabase
    .from("cards")
    .select()
    .eq("list_id", id);

  if (error) {
    console.log(error);
    throw new Error("Cards could not be gathered");
  }

  return data;
}
