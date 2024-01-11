import { Tabs, TabsProps } from 'antd';
import { useAppSelector } from '../reducer';
import { style } from 'typestyle';
import { TodoList } from '../container';


export const Tab = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const state = useAppSelector(state=>state.todos)
      
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
            <TodoList data={state.todoList.filter(i=>i.done !== true)} />
          </div>
        },
        {
          key: '3',
          label: 'Completed',
          children: 'Content of Tab Pane 3',
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