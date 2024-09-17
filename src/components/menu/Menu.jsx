import React, { useState } from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const items = [
  {
    key: '1',
    icon: <DesktopOutlined />,
    label: <Link to={"/profile/"}>Profile</Link>,
  },
  {
    key: '2',
    icon: <ContainerOutlined />,
    label: <Link to={"/profile/allUsers"}>All Users</Link>,
  },
];
const App = () => {
  return (
    <div
      className='fixed'
    >
      
      <Menu 
        className='rounded-lg'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};
export default App;