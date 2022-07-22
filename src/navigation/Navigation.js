import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import { Dashboard } from '../components/Dashboard'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Logout } from '../components/Logout'
import { Register } from '../components/Register'
import { UserList } from '../components/UserList'
import { About } from '../components/About'
import Navbar from '../components/Navbar'
import { Setting } from '../components/Setting'

export const Navigation = () => {
  const user = localStorage.getItem("auth-user")
  return (
    <>
    {user ? 
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/logout" element={<Logout/>}/>
        <Route path="/dashboard/users" element={<UserList/>}/>
        <Route path="/dashboard/setting" element={<Setting/>}/>
        <Route path="/dashboard/register" element={<Register/>}/>

      </Routes>
    </div>
    :
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
   }
  </>
  )
}
