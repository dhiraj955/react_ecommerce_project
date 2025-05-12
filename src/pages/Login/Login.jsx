import React, { useState } from 'react'
import "./Login.css"
import { Navigate, NavLink, useNavigate } from 'react-router';

const Login = () => {
const isLoggedIn = localStorage.getItem("token");

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      return;
    }
    if (!password) {
      return;
    }
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        const matchedUser = data.find(
          (user) => user.username === username && user.password === password
        );
        if (matchedUser) {
          localStorage.setItem("token", matchedUser.username);
          navigate("/admin/dashboard");
        } else {
          alert("wrong credentials");
        }
      });
  };

  if (isLoggedIn) {
    return <Navigate to={"/admin/dashboard"} />;
  }
  return (
    <div className='loginsignup'>
       <div className="loginsignup-cont">
        <NavLink to={"/"} style={{textDecoration:"none"}}><h1>Login Here</h1></NavLink>
        <div className="loginsignup-fields">
          <form onSubmit={handleSubmit}  >
          
          <input type="text" placeholder='Username'
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
           />
           <br /> <br />
          <input type="password" placeholder='Password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
           /> <br /> <br />
           <p>Forget Password ?</p>
           <input className='login-btn'  type="Submit" />
           </form>
        </div>


        
       </div>
      
    </div>
  )
}

export default Login
