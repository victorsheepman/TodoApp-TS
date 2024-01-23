import React from 'react'
import { Todo } from '../schema';
import { Typography, Checkbox } from 'antd';
import { clickTodo, useAppDispatch } from '../reducer';
import { style } from 'typestyle';



export const TodoCheck:React.FC<Todo> = ({title, done, id}) => {
    const dispatch = useAppDispatch()
    const onChange = () => {
        dispatch(clickTodo(id))
    };
      
  return (
    <div className={style({marginBottom:'10px'})}>
      <Checkbox checked={done} onChange={onChange}>
          <Typography.Text className={todoCheckText} delete={done}>
              {title}
          </Typography.Text>
      </Checkbox>
    </div>
  )
}


const todoCheckText = style({
  color: '#000',
  fontFamily: 'Montserrat',
  fontSize: '1.125rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});
