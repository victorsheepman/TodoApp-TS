import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Todo } from '../schema'

// Define a type for the slice state
interface todoState {
  todos: Todo[]
}

// Define the initial state using that type
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
  },
})

export const { addTodos } = todoSlice.actions

export const selectCount = (state: RootState) => state.todos

export default todoSlice.reducer