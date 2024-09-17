import React from 'react'
import { Link } from 'react-router-dom'
import { useProfileFetchQuery } from '../../redux/api/profileApi'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: <Link to={'/'}>Home</Link>,
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: <Link to={'/profile'}>Profile</Link>,
    },    
]
const Nav = () => {
    const { token } = useSelector(state => state.auth);
    const data = useProfileFetchQuery();

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        // <nav className='w-full bg-black text-white px-[150px] py-[20px]' >
        //     <ul className='flex justify-between' >
        //         <Link to={"/"} >
        //             Home
        //         </Link>
        //         <span className='flex gap-[30px]' >
        //             {
        //                 token ? (
        //                     <Link to={"/profile"} className='flex gap-[10px] items-center justify-center' >
        //                         <img className='w-[30px] h-[30px] rounded-full object-cover' src={data.data?.payload.photo_url || "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"} alt="" />
        //                         <p>Profile</p>
        //                     </Link>
        //                 ) : (
        //                     <div className='flex gap-[30px]' >
        //                         <Link to={"/auth/login"} >
        //                             Login
        //                         </Link>
        //                         <Link to={"/auth/signup"} >
        //                             Sign Up
        //                         </Link>
        //                     </div>
        //                 )
        //             }
        //         </span>
        //     </ul>
        // </nav>
        <div>
            <div className='fixed bg-[black] min-h-screen flex' >
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>
        </div>
    )
}

export default Nav