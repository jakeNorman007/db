import supabase from "./supabase";

export async function getBoards(){
    const { data, error } = await supabase.from("boards").select("*");

    if (error) {
        console.log(error);
        throw new Error("Your board could not be created");
    }

    return data;
}

export async function deleteBoard(id) {
    const { data, error } = await supabase.from("boards").delete().eq("id", id);

    if(error) {
        console.log(error);
        throw new Error("Your board could not be deleted");
    }

    return data;
}
