import { List, Tabs, TabsProps } from 'antd';


export const Tab = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];
      
      
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'All',
          children: <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <h1 key={index}> {item.title} </h1>
          )}
        />,
        },
        {
          key: '2',
          label: 'Active',
          children: 'Content of Tab Pane 2',
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
