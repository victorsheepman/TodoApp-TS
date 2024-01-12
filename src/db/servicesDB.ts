import { Todo } from "../schema";
import supabase from "./clientDB";

export const insertTodoDB = async (todo:Todo)=>{
    const { error } = await supabase.from('todos').insert(todo)
    if (error) {
        console.error(error)
    }
}

export const deleteTodoDB = async (id:number) => {  
    const { error } = await supabase.from('todos').delete().eq('id', id)
    if (error) {
        console.error(error)
    }
}