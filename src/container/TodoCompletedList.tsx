import { Button, Col, List, Row } from 'antd'
import { TodoCompleted } from '../components'
import { Todo } from '../schema'
import { style } from 'typestyle'
import { DeleteOutlined } from '@ant-design/icons'
import { deleteAllTodo, useAppDispatch } from '../reducer'

export const TodoCompletedList = ({data}:{data:Todo[]}) => {
    const dispatch = useAppDispatch()
     const handlerClick = ()=>{
        if (data.length  == 0) {
            return 
        }
        dispatch(deleteAllTodo())
     }
  return (
    <Row gutter={120} className={style({
        width:'100%', 
        maxWidth:'400px'
    })}>
        <Col span={24}>
            <List
                dataSource={data}
                renderItem={(todo, index) => (
                    <TodoCompleted 
                        key={index} 
                        title={todo.title} 
                        done={todo.done} 
                        id={todo.id} 
                    />
                )}
            />
        </Col>
        <Col 
            span={24} 
            className={
                style({display:'flex', justifyContent:'flex-end', marginTop:'34px'})
            }
        >
            <Button 
                type="primary" 
                danger 
                icon={<DeleteOutlined />} 
                onClick={handlerClick}
            >
                delete all
            </Button>
        </Col>
    </Row>
  )
}

