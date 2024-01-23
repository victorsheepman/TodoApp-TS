import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Todo } from '../schema'
import { deleteTodoDB, insertTodoDB, updateTodoDB } from '../db'


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
      const todoSelected = state.todoList.find(todo=>todo.id == idSelected)
      state.todoList.forEach( todo => { 
        if(todo.id === idSelected) {
          todo.done = !todo.done
        }
      })
      if (todoSelected) {
        updateTodoDB(idSelected, todoSelected.done)
      }
      
    },
    setTodo:(state, action:PayloadAction<string>) => {
      const lastIndex = state.todoList.length - 1
      const newTodo:Todo = {
        title:action.payload,
        done:false, 
        id:state.todoList[lastIndex].id + 1
      }
      state.todoList.push(newTodo)
      insertTodoDB(newTodo)
     
    },
    deleteTodoById: (state, action:PayloadAction<number>) => {
      const idToDelete = action.payload
      state.todoList = state.todoList.filter(todo => todo.id !== idToDelete )
      deleteTodoDB(idToDelete)
    },
    deleteAllTodo:(state)=>{
      const idsCompleted = state.todoList.filter(todo => todo.done == true).map(todo => todo.id)
      idsCompleted.forEach(id=>{
        deleteTodoDB(id)
      })
      state.todoList = state.todoList.filter(todo => todo.done !== true)
    }
  },
})

export const { setTodoList, clickTodo, setTodo, deleteTodoById, deleteAllTodo } = todoSlice.actions

export const selectCount = (state: RootState) => state.todos

export default todoSlice.reducer