import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Todo } from '../schema'

interface todoState {
  todoList: Todo[]
}


const initialState: todoState = {
  todoList: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<Todo[]>) => {
      state.todoList = action.payload
    },
    clickTodo:(state, action:PayloadAction<number>) => {
      const idSelected  =  action.payload
      state.todoList.forEach( todo => { 
        if(todo.id === idSelected) {
          todo.done = !todo.done
        }
      })
    },
    setTodo:(state, action:PayloadAction<string>) => {
      const lastIndex = state.todoList.length - 1
      const newTodo:Todo = {
        title:action.payload,
        done:false, 
        id:state.todoList[lastIndex].id + 1
      }
     state.todoList.push(newTodo)
    },
  },
})

export const { setTodoList, clickTodo, setTodo } = todoSlice.actions

export const selectCount = (state: RootState) => state.todos

export default todoSlice.reducer