import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Trade from '../pages/Trade'
import MainLayout from '../layouts/MainLayout'
import AddPage from '../pages/AddPage'
import EditPage from '../pages/EditPage'
import axios from 'axios'
import OneCase from '../pages/OneCase'

function MainRoutes() {
  // ! CONSTS
  const API="http://localhost:8000/cases";
  const [oneProduct, setOneProduct]=useState('');
  const [cases, setCases]=useState([]);

  useEffect(()=>{
    getCases()
  },[])

  // GET
  async function getCases(){
    const {data}=await axios.get(API)
    setCases(data)
  }

  // CREATE
  function createNewProduct(newProduct){
    axios.post(API, newProduct)
    getCases()
  }
  
  // GET ONE PRODUCT
  async function getOneProduct(id){
    const {data}=await axios.get(`${API}/${id}`)
    setOneProduct(data);
  }

  // EDIT
  async function editProduct(id, editedProduct){
    await axios.patch(`${API}/${id}`, editedProduct)
    getCases()
  }

  // DELETE
  async function deleteCase(id){
    await axios.delete(`${API}/${id}`)
    getCases();
  }

  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path='/' element={<HomePage cases={cases} getCases={getCases} deleteCase={deleteCase}/>}/>
            <Route path='/trade' element={<Trade/>}/>
            <Route path="/add" element={<AddPage createNewProduct={createNewProduct}/>} />
            <Route path='/edit/:id' element={<EditPage getOneProduct={getOneProduct} oneProduct={oneProduct} editProduct={editProduct}/>} />  {/*ожидает id*/}
            <Route path='/oneCase/:id' element={<OneCase getOneProduct={getOneProduct} oneProduct={oneProduct} />}  />
        </Route>
    </Routes>
  )
}

export default MainRoutes