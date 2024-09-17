import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProfileFetchQuery } from '../../redux/api/profileApi';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { token } = useSelector((state) => state.auth);
  const data = useProfileFetchQuery();

  
  return (
    <nav className='w-full bg-[#001529] text-white px-[150px] py-[20px] max-h-[70px]'>
      <ul className='flex justify-between items-center'>
        <Link to={"/"}>
          Home
        </Link>
        <span className='flex gap-[30px] items-center'>
          {token ? (
            <Link to={"/profile"} className='flex gap-[10px] items-center justify-center h-[30px]'>
              <img className='w-[30px] h-[30px] rounded-full object-cover' src={data.data?.payload.photo_url || "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"} alt="Profile" />
              <p className='m-0' >Profile</p>
            </Link>
          ) : (
            <div className='flex gap-[30px]'>
              <Link to={"/auth/login"}>Login</Link>
              <Link to={"/auth/signup"}>Sign Up</Link>
            </div>
          )}
        </span>
      </ul>
    </nav>
  );
};

export default Nav;
