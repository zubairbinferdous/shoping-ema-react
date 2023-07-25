/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Product.css";


const Product = (props) => {
    
  const { img, name, price, seller, ratings } = props.product;

  const addToCart = props.addToCart;

  return (
    <div className="product_item">
      <img src={img} alt="" />
      <div className="product_data">
        <h4>{name}</h4>
        <p>price : ${price}</p>
        <h5>Manufacturer : {seller} </h5>
        <h5>Rating : {ratings}</h5>
      </div>
      <button className="button" onClick={() => addToCart(props.product)}> add to cart  <FontAwesomeIcon icon={faCartArrowDown} /></button>
    </div>
  );
  
};

export default Product;
