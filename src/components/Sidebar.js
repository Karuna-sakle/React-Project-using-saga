import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='left-sidebar' style={{width:'25%',float:"left"}}>
      <div className='sidebar-item'>
        <Link className='sidebar-link' to="/dashboard/register">AddUser</Link>
      </div>
      <div className='sidebar-item'>
        <Link className='sidebar-link'to="/dashboard/settings">Settings</Link>
      </div>
      <div className='sidebar-item'>
        <Link className='sidebar-link' to="/dashboard/logout">Logout</Link>
      </div>
    </div>
  )
}
