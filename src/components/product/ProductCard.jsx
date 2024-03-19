import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CurrancyFormat from '../currancyFormat/CurrancyFormat';


const ProductCard = ({ product }) => {
 const {title,image,price,rate,}=product
 return (
   <div>
     <a href="/">
       <img src={image}  />
     </a>
     <div>
    <h1>{title}</h1>
    <div>
     <Rating value={rate} precision={0.1} />
     <small>{Rating.count }</small>
    </div>
    <div>
     <CurrancyFormat amount={75.3}/>

    </div>
    <button>Add to cart</button>
     </div>
   </div>
 );
}

export default ProductCard