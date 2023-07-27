/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import OrderItem from '../OrderItem/OrderItem';
import Side from '../Side/Side';
import './Order.css';

const Order = () => {
    const product = useLoaderData();
    // console.log(product)
    const [cart , setCart] = useState(product);

    const removeItem = (id) => {
       const remaining = cart.filter(pd => pd.id !== id);
       setCart(remaining);
       removeFromDb(id)
    }

    const clearCart = () => {
      setCart([]);
      deleteShoppingCart();
    }

    return (
    <div className="shop_container">
      <div className="product_area">
        <div className="order_item_area">
            {
              cart.map( pd => <OrderItem key={pd.id} item={pd} removeItem={removeItem}></OrderItem>)
            }
        </div>
        
      </div>

      <div className="product_order">
        <Side total={cart} clearCart={clearCart}></Side>
      </div>
      
    </div>
    );
};

export default Order;