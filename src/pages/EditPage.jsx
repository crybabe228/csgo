import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../css/edit.css";

function EditPage({oneProduct, getOneProduct, editProduct}) {
    const navItems=document.getElementsByClassName('active');
    setTimeout(() => {
        for (let i=0;i<navItems.length;i++){
            navItems[i].classList.add('on');
        };
    }, 0);
  
    // ! CONSTS
    const {id}=useParams()
    const navigate=useNavigate()
    const [title, setTitle]=useState('');
    const [sale, setSale]=useState('');
    const [price, setPrice]=useState('');
    const [img, setImg]=useState('');

    // GET
    useEffect(()=>{
        getOneProduct(id)
    },[])

    // SET INPUTS
    useEffect(()=>{
        if(oneProduct){
            setTitle(oneProduct.title)
            setSale(oneProduct.sale)
            setPrice(oneProduct.price)
            setImg(oneProduct.img)
        }
    }, [oneProduct])

    // SUBMIT
    function handleSubmit(e){
        e.preventDefault()
        let newObj={
            title,
            sale,
            price,
            img,
        }
        editProduct(id, newObj)
        navigate(-1);
    }

  return (
    <div className='edit_back'>
        <form className='edit_form active' onSubmit={(e)=>handleSubmit(e)}>
            <h1 className='edit_h1' >Edit Case</h1>
            <input className='edit_input' type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <input className='edit_input' type="number" value={sale} onChange={(e)=>setSale(e.target.value)} />
            <input className='edit_input' type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input className='edit_input' type="text" value={img} onChange={(e)=>setImg(e.target.value)} />
            <button className='edit_submit'>Save Changes</button>
        </form>
    </div>
  )
}

export default EditPage