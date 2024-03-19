import React from 'react'
import classes from  "./catagory.module.css";
const CatagoryCard = ({data}) => {
  return (
    <div className={classes.CatagoryCard}>
      <a href="#">
        <span>
          <h1>{data.title}</h1>
        </span>
        <img src={data.imglink}  />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CatagoryCard