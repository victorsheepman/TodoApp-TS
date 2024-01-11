import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Todo } from '../schema'

interface todoState {
  todos: Todo[]
}


const initialState: todoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    clickTodo:(state, action:PayloadAction<number>) => {
      state.todos.forEach( todo => { 
        todo.id == action.payload ? todo.done = !todo.done : null
      })
    },
    setTodo:(state, action:PayloadAction<string>) => {
      const newTodo:Todo = {
        title:action.payload,
        done:false, 
        id:state.todos.length
      }
     state.todos.push(newTodo)
    },
  },
})

export const { addTodos, clickTodo, setTodo } = todoSlice.actions

export const selectCount = (state: RootState) => state.todos

export default todoSlice.reducer