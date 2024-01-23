import { Button, Col, Form, Input, Row } from 'antd'
import { setTodo, useAppDispatch } from '../reducer';
import { classes, style } from 'typestyle';

export const TodoForm = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch()
    const onFinish = (values: {title:string}) => {
        dispatch(setTodo(values.title))
        form.resetFields()
    };
      
    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };
      
  return (
    <Form
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{width:'100%'}}
    >
        <Row gutter={25}>
            <Col span={18} lg={18} xs={24}>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please input your todo!' }]}
                    className={formWrapper}
                >
                    <Input className={inputStyle} onPressEnter={(e) => e.preventDefault()} placeholder='add details' />
                </Form.Item>
                
            </Col>
            <Col span={4}>
                <Form.Item >
                    <Button 
                        className={classes(inputStyle, buttonWrapper,buttonText)} 
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
const formWrapper = style(
    {
        maxWidth:'476px', 
        width:'100%'
    }
)
const inputStyle = style(
    {
        height:'56px', 
        borderRadius:'12px'
    }
)

const buttonWrapper = style(
    {
        width:'109px',  
        boxShadow: '0px 2px 6px 0px rgba(127, 177, 243, 0.40)'
    }
)

const buttonText = style({
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
});