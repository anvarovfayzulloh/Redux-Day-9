import React from 'react'
import { Link } from 'react-router-dom'
import { useProfileFetchQuery } from '../../redux/api/profileApi'
import { useSelector } from 'react-redux'

const Nav = () => {
    const { token } = useSelector(state => state.auth);
    const data = useProfileFetchQuery();

 
    return (
        <nav className='w-full bg-black text-white px-[150px] py-[20px]' >
            <ul className='flex justify-between' >
                <Link to={"/"} >
                    Home
                </Link>
                <span className='flex gap-[30px]' >
                    {
                        token ? (
                            <Link to={"/profile"} className='flex gap-[10px] items-center justify-center' >
                                <img className='w-[30px] h-[30px] rounded-full object-cover' src={data.data?.payload.photo_url || "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"} alt="" />
                                <p>Profile</p>
                            </Link>
                        ) : (
                            <div className='flex gap-[30px]' >
                                <Link to={"/auth/login"} >
                                    Login
                                </Link>
                                <Link to={"/auth/signup"} >
                                    Sign Up
                                </Link>
                            </div>
                        )
                    }
                </span>
            </ul>
        </nav>
    )
}

export default Nav