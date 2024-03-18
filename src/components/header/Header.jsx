import React from "react";
import { SlLocationPin } from "react-icons/sl";
import {BsSearch}from "react-icons/bs"
import {BiCart}from "react-icons/bi"
 
import classes from"./header.module.css";
import LowerHeader from "./LowerHeader";


const Header = () => {
  return (
    <>
      <header className={classes.outerContainer}>
        <nav className={classes.header__container}>
          <div className={classes.logo__container}>
            <a href="#">
              <img src={""} alt="Amazon logo!!" />
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <a href="/" className={classes.language}>
              <img src={""} alt="" />
              <select name="" id="">
                <option value="">En</option>
              </select>
            </a>
            {/* three components */}
            <a href="">
              <p>Sign in</p>
              <span>Account & Lists</span>
            </a>
            {/* orders */}
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </nav>
      </header>
      <hr />
      <LowerHeader/>
    </>
  );
};

export default Header;
