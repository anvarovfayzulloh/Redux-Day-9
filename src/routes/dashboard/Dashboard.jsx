import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex ' >
      <div>
        <Sidebar/>
      </div>
      <div className='flex-1' >
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard