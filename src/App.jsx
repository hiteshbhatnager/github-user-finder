import React, { useState, useEffect } from 'react'
import { Logo, Input, Data } from './components'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Layout from './layout'
import Home from './pages/home'
import User from './pages/user'
import About from './pages/about'
import NotFound from './pages/notfound'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user/:username" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
