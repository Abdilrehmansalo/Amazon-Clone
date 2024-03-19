import React from 'react';
import CatagoryCard from './CatagoryCard';
import { infos } from "./infos";
import classes  from "./catagory.module.css";


const Catagory = () => {
  return (
   <div className={classes.Catagory_container}>
    {infos?.map((data,index) =>
   (<CatagoryCard data={data} key={index}/>))}
    </div>
  )
}

export default Catagory