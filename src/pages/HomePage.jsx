import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../css/home.css";
import "../css/casesList.css";
import "../css/case.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';


function HomePage({cases, getCases, deleteCase}) {

  // SMOOTH APPEAR
  const navItems=document.getElementsByClassName('active');
  setTimeout(() => {
    for (let i=0;i<navItems.length;i++){
      navItems[i].classList.add('on');
    };
  }, 0);
    
  const navigate=useNavigate()

  return (
    <>
      <div className='cases_list active'>
        {cases.map((item)=>{
          return (
            
            // <Link to={`oneCase/${item.id}`}>
            <div className='card' key={item.id} onClick={()=>navigate(`/oneCase/${item.id}`)}>
              <img className='card_img' src={item.img} alt="" />
              <h2 className='card_h2' >{item.title}</h2>
              <div className='buttons'>
                <div className='buy'>  
                  <p className='sale'>{item.sale} $</p>
                  <p className='btn'>{item.price} $</p>  
                </div>
              
              <button className='delete' onClick={()=>deleteCase(item.id)} >Delete</button>
              <Link to={`edit/${item.id}`}>             
              <button className='edit' >Edit</button>   {/* link из роутер дома */}
              </Link>

              </div>
            </div>
          // </Link>
         
          )
        })}
      </div>
    </>
  )
}

export default HomePage