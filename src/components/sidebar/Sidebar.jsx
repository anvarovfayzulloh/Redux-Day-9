import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <nav className='flex flex-col ' >
            <li><NavLink to={"/dashboard/profile"}>SSSSSSSS</NavLink></li>
            <li><NavLink to={"/dashboard/allUSers"}>ssssssss</NavLink></li>
        </nav>
    </div>
  )
}

export default Sidebar