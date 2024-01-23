import { Button, Col, List, Row } from 'antd'
import { TodoCompleted } from '../components'
import { Todo } from '../schema'
import { classes, style } from 'typestyle'
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
    <Row gutter={120} className={style({width:'100%'})}>
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
            className={buttonContainer}
        >
            <Button 
                type="primary" 
                danger 
                icon={<DeleteOutlined />} 
                onClick={handlerClick}
                className={classes(buttonWrapper, buttonText)}
            >
                delete all
            </Button>
        </Col>
    </Row>
  )
}

const buttonContainer = style(
    {
        display:'flex', 
        justifyContent:'flex-end', 
        marginTop:'34px'
    }
)


const buttonWrapper = style({
    width: '124px',
    height: '40px',
    flexShrink: 0,
});

const buttonText = style({
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',

});


