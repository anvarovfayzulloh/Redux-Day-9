import { BiLogOut } from "react-icons/bi"; 
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import { Button } from 'antd'
import { logOut } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {

  const dispatch = useDispatch();

  return (
    <div className='flex max-h-screen h-full bg-[#05052a]' >
      <div>
        <Sidebar/>
      </div>
      <div className='flex-1 max-h-screen' >
        <div className='bg-[#05052a] flex py-[10px] justify-end' >
          <Button onClick={()=> dispatch(logOut())}  danger type='primary' ><BiLogOut />Log Out</Button>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard