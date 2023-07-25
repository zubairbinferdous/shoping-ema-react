/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from '../../utilities/fakedb.js';

import Product from "../Product/Product.Jsx";
import Side from "../Side/Side.jsx";
import "./Shop.css";

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState([]);


  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  useEffect(() => {

    const storedCart = getShoppingCart();
    const saveCart = [] ;
    for (const id in storedCart) {

      const addedProduct = products.find( product => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity
        saveCart.push(addedProduct);
      }
      setCart(saveCart);
    }

  } ,[products])



  const addToCart = (ProductData) => {
    const newCart = [...cart , ProductData]
    setCart(newCart);
    addToDb(ProductData.id)
  } 

  //   const addToCart = (ProductData) => {
  //     let newCart = [];
  //     const exists = cart.find(pd => pd.id === ProductData.id);
      
  //     if(!exists){
  //       ProductData.quantity = 1 ;
  //       newCart = [...cart , ProductData]
  //     }else{
  //       ProductData.quantity = ProductData.quantity + 1;
  //       const remaining = cart.filter(pd  => pd.id !== ProductData.id)
  //       newCart = [...remaining , exists]
  //     }
  //     setCart(newCart);
  //     addToDb(ProductData.id)
  // } 

  return (
    <div className="shop_container">
      <div className="product_area">
        <div className="product_container">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart}></Product>
          ))}
        </div>
        
      </div>

      <div className="product_order">
        <Side total={cart}></Side>
      </div>
      
    </div>
  ); 
};

export default Shop;
