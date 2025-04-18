import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from '../pages/Login'
import Feed from '../pages/Feed'
import Profile from '../pages/Profile'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Body />}>
              <Route path='/' element={<Feed/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/profile" element={<Profile/>} />
          </Route>
      </Routes>
  )
}

export default AppRoutes