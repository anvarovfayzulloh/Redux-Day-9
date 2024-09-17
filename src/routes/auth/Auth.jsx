import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Auth = () => {
  const {token} = useSelector(state => state.auth);
  const {pathname} = useLocation()
  const navigate = useNavigate()
  
  useLayoutEffect(()=>{
    if(pathname.includes("auth") && token) {
      navigate("/")
    }
  },[pathname])
  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-500'>
        <div className='max-w-[400px] flex-1 bg-white rounded-[5px]'> 
            <Outlet/>
        </div>
    </div>
  )
}

export default Auth