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

//creates a new card
export async function createCard({cardName, list_id}) {
  const { data, error } = await supabase
    .from("cards")
    .insert([{ cardName: cardName, list_id }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Card could not be created");
  }

  return data;
}
//ability to delete a card
export async function deleteCard(id) {
  const { data, error } = await supabase.from("cards").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Card could not be deleted");
  }

  return data;
}
