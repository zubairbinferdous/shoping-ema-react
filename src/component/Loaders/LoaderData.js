import { getShoppingCart } from "../../utilities/fakedb";

/* eslint-disable no-unused-vars */
const loaderData = async () => {
    const data = await fetch('products.json')
    const product = await data.json()
    // if ur cart data in database use async await 
    
    const storeCart = getShoppingCart();
    const Cart = [];
    
    for (const id in storeCart) {
       const addedProduct = product.find( pd => pd.id === id)
       if(addedProduct){
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        Cart.push(addedProduct);
       }
    }

    return Cart;
}

export default loaderData