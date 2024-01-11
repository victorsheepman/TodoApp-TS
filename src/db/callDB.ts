
import { Todo } from "../schema"
import supabase from "./clientDB"

export const callDB = async () => {
    let dataDB:Todo[] = []
    try {
        const { data, error } = await supabase.from('todos').select()
        if (!error) {
            dataDB = data.map((item: Todo) => ({
                id: item.id,
                title: item.title,
                done: item.done,
            }))
        }
        return dataDB
    } catch (error) {
        console.error('Error en la llamada a la API:', error)
        return undefined
    }
}