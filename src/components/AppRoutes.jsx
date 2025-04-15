import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Body from './Body'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Body/>}>
              <Route path="/login" element={<div>Login Page</div>} />
              <Route path="/test" element={<div>Test Page</div>} />
          </Route>
      </Routes>
  )
}

export default AppRoutes