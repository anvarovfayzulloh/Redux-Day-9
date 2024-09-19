import { NavLink } from 'react-router-dom'

const Sidebar = () => {


  return (
    <div>
      <nav className='flex flex-col items-center h-screen bg-[#05052a] text-white' >
        <div  className='pt-[20px]' >
        <h3><NavLink className='rounded-lg' to={"/"}>Home</NavLink></h3>
        </div>
        <ul className='flex flex-col gap-[20px] list-none p-[30px]' >
          <li><NavLink className='py-[10px] px-[20px] rounded-lg' to={"/dashboard/profile"}>Profile</NavLink></li>
          <li><NavLink className='py-[10px] px-[20px] rounded-lg' to={"/dashboard/allUsers"}>Users</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar