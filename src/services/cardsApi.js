import supabase from "./supabase";

//retrieves all of the cards based on the lists id the card is related to 
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

