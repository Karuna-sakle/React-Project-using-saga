import React, { useEffect, useState } from 'react'
import { Sidebar } from "./Sidebar"
import {UserList} from "./UserList"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Dashboard = () => {
    
  return (
      <div className='dashboard-container'>
         <h1 className='heading'>Welcome to Dashboard</h1>
           
           <Sidebar/>
           <UserList/>
      </div>
   
  )
}
