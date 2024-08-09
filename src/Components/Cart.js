import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux" ;
import MenuItemBody from "./MenuItemBody";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch() ;
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    
    console.log(cartItems) ;
    return(       
        <div>
            <h1>CART</h1>
            <button onClick={handleClearCart}>CLEAR CART</button>
            <div>
              <MenuItemBody items={cartItems} />
            </div>
            
        </div>
      
    )
}

export default Cart ;