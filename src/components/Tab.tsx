import { Tabs, TabsProps } from 'antd';
import { useAppSelector } from '../reducer';
import { style } from 'typestyle';
import { TodoList } from '../container';
import { TodoCompletedList } from '../container/TodoCompletedList';


export const Tab = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const state = useAppSelector(state=>state.todos)
    const activeTodos = state.todoList.filter(todo => todo.done !== true);
    const todoComplete = state.todoList.filter(todo => todo.done == true)
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'All',
          children:
          <div className={tabContainer}> 
            <TodoList data={state.todoList}/>
          </div>,
        },
        {
          key: '2',
          label: 'Active',
          children: 
          <div className={tabContainer}>
            <TodoList data={activeTodos} />
          </div>
        },
        {
          key: '3',
          label: 'Completed',
          children: <div className={tabContainer}>
            <TodoCompletedList  data={todoComplete} />
          </div> 
        
        },
    ];
    
  return (
    <Tabs centered tabBarGutter={100} defaultActiveKey="1" items={items} onChange={onChange} />
  )
}


const tabContainer = style(
  {
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  }
)  