
import { Todo } from "../schema"
import supabase from "./clientDB"

export const callApi = async () => {
    let cleanData:Todo[] = []
    try {
        const { data, error } = await supabase.from('todos').select()
        if (!error) {
            console.log(data);
            
            cleanData = data.map((item: Todo) => ({
                id: item.id,
                title: item.title,
                done: item.done,
            }))
            
        }
        return cleanData
    } catch (error) {
        console.error('Error en la llamada a la API:', error)
        return undefined
    }
}