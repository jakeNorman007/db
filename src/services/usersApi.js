import supabase from "./supabase";

export async function allUsers() {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.log(error);
    throw new Error("Users could not be gathered");
  }

  return data;
}
