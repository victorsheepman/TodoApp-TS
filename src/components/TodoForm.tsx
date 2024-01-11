import { Button, Col, Form, Input, Row } from 'antd'

export const TodoForm = () => {
    const onFinish = (values: string) => {
        console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
      
  return (
    <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{width:'70%'}}
    >
        <Row gutter={25}>
            <Col span={14} lg={14} xs={24}>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please input your todo!' }]}
                    wrapperCol={{span:24}}
                >
                    <Input style={{height:'56px', borderRadius:'12px', }} />
                </Form.Item>
                
            </Col>
            <Col span={4}>
                <Form.Item >
                    <Button style={{width:'109px',height:'56px', borderRadius:'12px'}} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Col>
        </Row>
  </Form>
  )
}
