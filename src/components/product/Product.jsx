import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import ProductCard from './ProductCard';

const Product = () => {
 const [products, setproducts] = useState();
 useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
   
   .then((response) => {
    console.log(response.data)
       setproducts(response.data);
     })
     .catch((error) => console.log(error));
 }, [])
 
  return (
   <div>
    {products?.map((singleproduct,index) => (
     <ProductCard product={singleproduct} key={index}/>
    ))}
   
    
    </div>
  )
}

export default Product