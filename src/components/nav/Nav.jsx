import React from 'react'
import { Link } from 'react-router-dom'
import { useProfileFetchQuery } from '../../redux/api/profileApi'

const Nav = () => {

    const data = useProfileFetchQuery();
    return (
        <nav className='w-full bg-black text-white px-[150px] py-[20px]' >
            <ul className='flex justify-between' >
                <Link to={"/"} >
                    Home
                </Link>
                <span className='flex gap-[30px]' >
                    <Link to={"/auth/login"} >
                        Login
                    </Link>
                    <Link to={"/auth/signup"} >
                        Sign Up
                    </Link>
                    <Link to={"/profile"} className='flex gap-[10px]' >
                    <img className='w-[30px] h-[30px] rounded-full object-cover' src={data.data?.payload.photo_url || "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"} alt="" />
                        Profile
                    </Link>
                </span>
            </ul>
        </nav>
    )
}

export default Nav