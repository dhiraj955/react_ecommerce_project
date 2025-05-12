import React from 'react'
import "./Common.css"
import { NavLink, useNavigate } from 'react-router'
import opsImage from '../../assets/ops.png';

function NotFound() {
    const navigate = useNavigate()

    function handleError(){
        navigate(-1);
    }
  return (
    <div className='notfound' >
        <img src={opsImage} alt="Not Found" height={"200px"} />
        <h3>Something's wrong here...</h3>
        <p>We cant find the page you're looking for . Check out our Help Center or head back to previous page. </p>
        <div className="twobtn">
            <button className='helpbtn'>Help</button>
            <button  onClick={handleError} className='homebtn'>Go Back</button>
        </div>
      
    </div>
  )
}

export default NotFound
