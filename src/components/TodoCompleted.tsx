import React from 'react'
import { style } from 'typestyle'
import { TodoCheck } from '.'
import { Todo } from '../schema'
import { DeleteOutlined } from '@ant-design/icons'
import { deleteTodoById, useAppDispatch } from '../reducer'

export const TodoCompleted:React.FC<Todo> = ({done, title,id}) => {
    const dispatch = useAppDispatch()
    const handlerClick = (id:number)=>{
        if (id < 0) {
            return 
        }
        dispatch(deleteTodoById(id))
    }
  return (
    <div className={todoCompletedWrapper}>
        <TodoCheck id={id} title={title} done={done}  />
        <DeleteOutlined onClick={()=>handlerClick(id)} />
    </div>
  )
}

const todoCompletedWrapper = style({
    width:'100%',
    height:'auto',
    display:'flex',
    justifyContent:'space-between'
})