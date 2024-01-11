import { Col, List, Row } from 'antd'

import { Todo } from '../schema'
import { TodoCheck, TodoForm } from '../components'
import { style } from 'typestyle'

export const TodoList = ({data}:{data:Todo[]}) => {
  return (
    <Row style={{ width:'60%'}}>
        <Col span={24} className={style({display:'flex', justifyContent:'center'})}>
            <TodoForm />
        </Col>
        <Col span={24} className={style({paddingLeft:'13%'})}>
            <List
              dataSource={data}
              renderItem={(item, index) => (
                <TodoCheck title={item.title} done={item.done} key={index} id={item.id} />
              )}
            />
        </Col>
    </Row>
  )
}
