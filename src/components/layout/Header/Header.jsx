import React, { useState } from 'react'
import "./Header.css"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router';
import { IoCloseSharp } from "react-icons/io5";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const[search, setSearch] = useState(false);
  return (
    <header>
        <div className="navbar">
            <div className="logo">
                <div className="ham" onClick={() => setMenuOpen(!menuOpen)}>

                  {menuOpen ? <IoCloseSharp/> : <GiHamburgerMenu />}
                </div>
                <NavLink className={"links"} to={"/"}><h1>SHOP.CO</h1></NavLink>
            </div>
            <div className="nav-menu">
                <ul className={`nav-menus ${menuOpen ? 'nav-menusshow' : ''}`}>
                    <NavLink className={"links"}  to={"/shop"}><li>Shop</li></NavLink>
                    <NavLink className={"links"} to={"/onsale"}><li>On Sale</li></NavLink>
                    <NavLink className={"links"} to={"/newarrival"}><li>New Arrivals</li></NavLink>
                    <NavLink className={"links"} to={"/addproduct"}><li>AddProduct</li></NavLink>
                    
                    
                    
                </ul>
            </div>
            <div className={`search-section ${search ? 'search-sectionshow' : ''}`}>
                <input type="text" placeholder='Search for products' className='searchinput' />
                <CiSearch className='search-icon'/>
            </div>
            <div className="cart-user">
                <FaSearch className='search-mobile' onClick={()=>{setSearch(!search)}}/>
                <NavLink className="link" to={"/cart"}><MdOutlineShoppingCart/></NavLink>
                <NavLink className="link"  to={"/login"}><FaRegUserCircle/></NavLink>

            </div>
            
        </div>
      
    </header>
  )
}

export default Header
