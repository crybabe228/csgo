import React, { useEffect } from 'react'
import "../css/navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Navbar() {


  const navigate=useNavigate();
  return (
  <div className='navbar'>
    <img onClick={()=>navigate("/")} className='logo active' src="https://1000logos.net/wp-content/uploads/2017/12/CSGO-Logo.png" alt="logo" />
    <ul className='navbar_ul active'>
      <li className='navbar_li' onClick={()=>navigate("/")}>Home</li>
      <li className='navbar_li' onClick={()=>navigate("/add")}>Add</li>
        <li className='navbar_li' onClick={()=>navigate("/trade")}>Trade</li>
       <li className='navbar_li' >Shop</li>
       <li className='navbar_li' >FaQ</li>
    </ul>
    <div className='nav_item active'>
        <FavoriteIcon style={{color: "#fff"}}/>
        <button className='login active'>Sign in through Steam</button>
    </div>
  </div>
  )
}

export default Navbar