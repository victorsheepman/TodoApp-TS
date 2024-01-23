import { useEffect } from "react"

import { callDB } from "./db"

import { Todo } from "./schema"
import { setTodoList, useAppDispatch } from "./reducer"
import { Alert, Col, Row, Typography } from "antd"
import { Tab } from "./components"

import { style } from "typestyle"


export const TodoApp = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosDB: Todo[] | undefined = await callDB();
        if (todosDB !== undefined) {
          dispatch(setTodoList(todosDB))
        } else {
          <Alert message="Error al llamar a la base de datos" type="error" />
        }
      } catch (error) {
        console.error('Error in fetchData', error);
      }
    };
    fetchData()
  }, [])
  
  return (
    <main className={mainStyles}>
      <Row className={rowWrapper}>
        <Col span={24} className={colWrapper}>
          <Typography.Title level={3}>#todo</Typography.Title>
        </Col>
        <Col span={24}>
          <Tab />
        </Col>
      </Row>  
    </main>
   
  )
}

const mainStyles = style(
  {
    width:'100vw',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start'
  }
)
const rowWrapper = style(
  {
    width:'100%',
    maxWidth:'608px'
  }
)

const colWrapper = style(
  {
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center'
  }
)