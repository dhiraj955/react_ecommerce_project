import React from "react";
import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


import SignUp from "./SignUp";

function AppLayout() {
  return (
    <div className="app-layout">
      <SignUp/>
      <Header/>
      <div style={{marginTop: "102px"}}>

      <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default AppLayout;
