import React from 'react'
import "../../pages/Admin/Admin.css"
import { NavLink } from 'react-router'
function AdminHeader() {
  return (
    <div className='aheader'>
      <div className="aheadre-section">
      <div className="logo">
       <NavLink className={"links"} to={"/"}><h1>SHOP.CO</h1></NavLink> 
      </div>
      </div>
    </div>
  )
}

export default AdminHeader
