import { Col, List, Row } from 'antd'

import { Todo } from '../schema'
import { TodoCheck, TodoForm } from '../components'
import { style } from 'typestyle'

export const TodoList = ({data}:{data:Todo[]}) => {
  return (
    <Row style={{ width:'100%'}}>
        <Col span={24} className={style({display:'flex', justifyContent:'center'})}>
            <TodoForm />
        </Col>
        <Col span={24} className={style({paddingLeft:'13%'})}>
            <List
              dataSource={data}
              renderItem={(todo, index) => (
                <TodoCheck 
                  key={index}
                  title={todo.title} 
                  done={todo.done} 
                  id={todo.id} 
                />
              )}
            />
        </Col>
    </Row>
  )
}
