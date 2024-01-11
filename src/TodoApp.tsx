import { useEffect } from "react"

import { callApi } from "./db/callApi"

import { Todo } from "./schema"
import { addTodos, useAppDispatch, useAppSelector } from "./reducer"
import { Col, List, Row, Typography } from "antd"
import { Tab } from "./components/Tab"
import { TodoForm } from "./components/TodoForm"
import { TodoCheck } from "./components/TodoCheck"


export const TodoApp = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(s=>s.todos)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos: Todo[] | undefined = await callApi();
        if (todos !== undefined) {
          dispatch(addTodos(todos))
        } else {
          console.log('No se pudo obtener la lista de todos');
        }
      } catch (error) {
        console.error('Error in fetchData', error);
      }
    };
    fetchData()
  }, [])
  
  return (
    <Row>
      <Col span={24} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Typography.Title level={3}>#todo</Typography.Title>
      </Col>
      <Col span={24} style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Tab />
        <TodoForm />
      </Col>
      <Col span={24}>
        <List
          itemLayout="horizontal"
          dataSource={state.todos}
          renderItem={(item, index) => (
            <TodoCheck title={item.title} done={item.done} key={index} id={item.id} />
          )}
        />
      </Col>
    </Row>
  )
}
