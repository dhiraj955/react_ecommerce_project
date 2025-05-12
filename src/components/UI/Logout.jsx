import React from 'react'
import { useNavigate } from 'react-router'

function Logout() {
    const navigate = useNavigate()

    const handleLogout = ()=> {
        localStorage.removeItem("token")
        navigate("/login")
    }

  return (
    <div className='logout-section'>
    <button onClick={handleLogout} className='logout'>Logout</button>
  </div>
  )
}

export default Logout