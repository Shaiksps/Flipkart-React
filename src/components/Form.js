import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function Forms() {
const [id,setId]=useState('');
const [title,setTitle]=useState('');
const [brand,setBrand]=useState('');
const [des,setDes]=useState('');
const [price,setPrice]=useState('');
const [image,setImage]=useState('');

const [productsList,setProductList]=useState([{}])

const ftechData=()=>{
    axios.get('http://localhost:3002/products')
    .then((res)=>setProductList(res.data))
}


fetchData

console.log(productsList)

const productData={
    productId:id,
    title:title,
    brand:brand,
    price:price,
    description:des,
    thumbnail:image
}

useEffect(()=>{
    axios.get('')
    .then((res)=>setProductList(res.data[0]))
})

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3002/products',productData)
    .then((res)=>{
        alert("Success")
        fetchData('')
        setId('')
        setTitle('')
        setBrand('')
        setPrice('')
        setDes('')
        setImg('')
    })
}
const handleDelete = (id)=>{
    axios.delete(`http://localhost:3002/products/${id}`)
    .then((res)=>{
        alert('Product Deleted')
        fetchData()
    })
}
 let sn0=1;
 useEffect(()=>{
    fetchData()
 },0)

  return (
    <>
    <table className='table table-hover table-striped table-bordered'>
        <thead>
            <tr>
                <th>Sno:</th>
                <th>Product id:</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
                <th>Thumbnail</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>productList.map((e,i)=>{
            return(
                <>
                <tr>
                    <td> {Sno++}</td>
                    <td> {e.ProductId}</td>
                    <td> {e.title}</td>
                    <td> {e.brand}</td>
                    <td> {e.price}</td>
                    <td> {e.description}</td>
                    <td> {={e.thumbnail} height="100"/></td>
 
                    <td>
                        <button className='btn btn-primary'>
                                <i className='fa  fa-edit'></i>
                        </button>
                &nbsp;&nbsp;&nbsp;
                        <button className='btn btn-danger' onClick={()=>handleDelete(e.id)}>
                             <i className='fa fa-trash'></i>
                        </button>
                   </td>
                </tr>
                </>
            )
        })
    }
    </tbody>
       
    </table>
    <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-6" style={{backgroundColor:"#abc3ee"}}>
                    <form method="post" onSubmit={handleSubmit}>
                    <h2 class="text-center">Add Product</h2><hr></hr>
                    <div class="mb-3">
                        <label>Product Id</label>
                        <input type="text" class="form-control" id="txtname" placeholder="Enter Id" onChange={(e)=>{setId(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label>Product Name</label>
                        <input type="text" class="form-control" id="txtroll" placeholder="Enter Name" onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label>Brand</label>
                        <input type="text" class="form-control" id="txtdob" placeholder="Enter Brand" onChange={(e)=>{setBrand(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label>Description</label>
                        <textarea type="number" class="form-control" id="txtmob" placeholder="Enter Description" style={{paddingBottom:"50px"}} onChange={(e)=>{setDes(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label>Price</label>
                        <input type="number" class="form-control" id="txtmob" placeholder="Ener Price" onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label>Image</label>
                        <input type="text" class="form-control" id="txtmob" placeholder="Enter product url" onChange={(e)=>{setImage(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <button className="btn bg-success" style={{paddingLeft:"5px",paddingRight:"10px"}}>Submit</button>
                    </div>
                </form>
               
                </div> 
            </div>
        </div>
    </>
  )
}