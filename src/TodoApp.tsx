import { useEffect } from "react"

import { callApi } from "./db/callApi"

import { Todo } from "./schema"
import { addTodos, useAppDispatch } from "./reducer"


export const TodoApp = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos: Todo[] | undefined = await callApi();

        if (todos !== undefined) {
          console.log('Lista de todos:', todos);
          dispatch(addTodos(todos))
        } else {
          console.log('No se pudo obtener la lista de todos');
        }
      } catch (error) {
        console.error('Error in fetchData', error);
      }
    };
    fetchData()
  }, [])
  
  return (
    <div>TodoApp</div>
  )
}
