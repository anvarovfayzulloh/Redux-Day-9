import { NavLink } from 'react-router-dom'

const Sidebar = () => {
 

  return (
    <div>
      <nav className='flex flex-col h-screen bg-[#05052a] text-white' >
        <ul className='flex flex-col gap-[20px] list-none p-[30px] pt-[70px]' >
          <li><NavLink className='py-[10px] px-[20px] rounded-lg' to={"/dashboard/profile"}>Profile</NavLink></li>
          <li><NavLink className='py-[10px] px-[20px] rounded-lg' to={"/dashboard/allUsers"}>Users</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar