import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/add.css";

function AddPage({createNewProduct}) {

const navigate=useNavigate();
    // CREATE CONSTS
const [title, setTitle]=useState('');
const [sale, setSale]=useState('');
const [price, setPrice]=useState('');
const [img, setImg]=useState('');

// HANDLE SUBMIT
function handleSubmit(e){
    e.preventDefault()
  if(!title || !sale || !price || !img){
    alert("Fill all inputs!")
    return;
  }

  const newObj={
    title,
    sale,
    price,
    img,
  }
  createNewProduct(newObj);
  setTitle('')
  setSale('')
  setPrice('')
  setImg('')

  alert("Case has been successfuly added!")
navigate("/")
}

const navItems=document.getElementsByClassName('active');
  setTimeout(() => {
    for (let i=0;i<navItems.length;i++){
      navItems[i].classList.add('on');
    };
  }, 0);
  

  return (
    <div className='add_back'>
        <form onSubmit={(e)=>handleSubmit(e)} className='add_form active'>
            <h1 className='add_h1'>Add new case</h1>
            <input className='add_input' type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
            <input className='add_input' type="text" placeholder='Sale' onChange={(e)=>setSale(e.target.value)}/>
            <input className='add_input' type="text" placeholder='Price' onChange={(e)=>setPrice(e.target.value)}/>
            <input className='add_input' type="text" placeholder='Image' onChange={(e)=>setImg(e.target.value)}/>
            <button className='add_submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default AddPage