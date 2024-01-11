import React from 'react'
import { Todo } from '../schema';
import { Typography, Checkbox } from 'antd';
import { clickTodo, useAppDispatch } from '../reducer';



export const TodoCheck:React.FC<Todo> = ({title, done, id}) => {
    const dispatch = useAppDispatch()
    const onChange = () => {
        dispatch(clickTodo(id))
    };
      
  return (
    <div>
      <Checkbox checked={done} onChange={onChange}>
          <Typography.Text delete={done}>
              {title}
          </Typography.Text>
      </Checkbox>
    </div>
  )
}
