import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function OneCase({getOneProduct, oneProduct}) {
    const {id}=useParams()

    getOneProduct(id)

   
    let arr=[];
    useEffect(()=>{
        arr=oneProduct.container;
        console.log(arr);
        
      
    },[])

    return (
    <div>a</div>
  )
}

export default OneCase