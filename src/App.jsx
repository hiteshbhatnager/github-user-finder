import { useState } from 'react'
import { Logo, Input, Data } from './components'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Data />} />
          <Route 
        </Route>
      </Routes>
    </>
  )
}

export default App
