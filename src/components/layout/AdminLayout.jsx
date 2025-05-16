import React from 'react'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router'
import AdminSider from './AdminSider'

function AdminLayout() {
  //    const isLoggedIn = !!localStorage.getItem("token");
  //   console.log("isLoggedIn:", isLoggedIn);

  // if (!isLoggedIn) {
  //   return <Navigate to={"/login"} />;
  // }
  return (
    <div>
      <AdminHeader/>
      <div style={{display: "flex", gap: "100px"}}>
        <AdminSider />
        <Outlet/>
        
      </div>
    </div>
  )
}

export default AdminLayout
