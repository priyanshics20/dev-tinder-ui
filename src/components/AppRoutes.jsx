import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from './auth/login'
import Feed from './Feed'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Body />}>
              <Route path='/' element={<Feed/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
          </Route>
      </Routes>
  )
}

export default AppRoutes