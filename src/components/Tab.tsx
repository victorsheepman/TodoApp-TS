import { List, Tabs, TabsProps } from 'antd';
import { useAppSelector } from '../reducer';
import { TodoCheck } from './TodoCheck';


export const Tab = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const state = useAppSelector(state=>state.todos)
      
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'All',
         /* children: <List
          itemLayout="horizontal"
          dataSource={state.todos}
          renderItem={(item, index) => (
            <TodoCheck title={item.title} done={item.done} key={index} id={item.id} />
          )}
        />,*/
        },
        {
          key: '2',
          label: 'Active',
         /* children: <List
          itemLayout="horizontal"
          dataSource={state.todos.filter(i=>i.done !== true)}
          renderItem={(item, index) => (
            <TodoCheck title={item.title} done={item.done} key={index} id={item.id} />
          )}
        />,*/
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
