import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { Toaster, toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import ProfileService from '../services/Profile.Service'

import { addUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store)=> store.user)

    const fetchUser = async () => {
        if (user) return;
        try {
            const res = await ProfileService();
            dispatch(addUser(res.data))
        } 
        catch (error) {
            toast.error(error.response.data);
            navigate('/login')
        }
    }

    useEffect(() => {
        fetchUser(); 
    },[])
  return (
      <div>
          <Navbar />
          <Outlet />
          <Toaster/>
          <Footer/>
    </div>
  )
}

export default Body