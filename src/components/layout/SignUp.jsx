import React from 'react'
import "../layout/Header/Header.css"
import { NavLink } from 'react-router'

function SignUp() {
  return (
    <div className='signup'>
     <p>Sign up and get 20% off to your first order. <NavLink to={"/signup"} style={{color:"white", fontSize: "14px", fontWeight: "bold"}}>Sign Up Now</NavLink> </p>
    </div>
  )
}

export default SignUp
