import supabase from "./supabase";

export async function getBoard(){
    try{
        const { data, error } = await supabase
        .from("demoBoards").insert([{ name: boardName.value }]).select()
        if(error) throw error;
        statusMsg.value = "Board created successfully";
        setTimeout(() => {
            statusMsg.value = false;
        }, 5000);
    } catch(error){
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
            error.Msg.value = false;
        }, 5000);
    }
};

return data;
