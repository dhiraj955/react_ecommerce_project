import React from 'react'
import Logout from '../UI/Logout'
import "../../pages/Admin/Admin.css"
import { NavLink } from 'react-router'

function AdminSider() {
  return (
    <div className='sider'>
       <NavLink className="link" to={"/admin/dashboard"}>
        <li>Dashboard</li>
       </NavLink>
       <NavLink className="link" to={"/admin/user"}>
        <li>User</li>
       </NavLink>
       <NavLink className="link" to={"/admin/product"}>
        <li>Product</li>
       </NavLink>
      <Logout/>
    </div>
  )
}

export default AdminSider
