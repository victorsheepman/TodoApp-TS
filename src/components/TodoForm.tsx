import { Button, Col, Form, Input, Row } from 'antd'
import { setTodo, useAppDispatch } from '../reducer';
import { classes, style } from 'typestyle';

export const TodoForm = () => {
    const dispatch = useAppDispatch()
    const onFinish = (values: {title:string}) => {
        dispatch(setTodo(values.title))
    };
      
    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };
      
  return (
    <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{width:'80%'}}
    >
        <Row gutter={25}>
            <Col span={14} lg={14} xs={24}>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please input your todo!' }]}
                    wrapperCol={{span:24}}
                    
                >
                    <Input className={inputStyle} placeholder='add details' />
                </Form.Item>
                
            </Col>
            <Col span={4}>
                <Form.Item >
                    <Button 
                        className={classes(inputStyle, style({width:'109px'}))} 
                        type="primary" 
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Col>
        </Row>
  </Form>
  )
}

const inputStyle = style(
    {
        height:'56px', 
        borderRadius:'12px'
    }
)