import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './login'
import Signup from './signup'

function Homepagelogin() {
  return (
   <BrowserRouter>
   <Routes>
    <Route  path="/" element={<Login/>} />
    <Route  path="/signup" element={<Signup/>} />
   </Routes>
   
   </BrowserRouter>
  )
}

export default Homepagelogin