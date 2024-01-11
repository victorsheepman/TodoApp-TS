import { useEffect } from "react"

import { callApi } from "./db"

import { Todo } from "./schema"
import { addTodos, useAppDispatch} from "./reducer"
import { Col, Row, Typography } from "antd"
import { Tab } from "./components"

import { style } from "typestyle"


export const TodoApp = () => {
  const dispatch = useAppDispatch()
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
      <Col span={24} className={colWrapper}>
        <Typography.Title level={3}>#todo</Typography.Title>
      </Col>
      <Col span={24}>
        <Tab />
      </Col>
    </Row>
  )
}

const colWrapper = style(
  {
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center'
  }
)