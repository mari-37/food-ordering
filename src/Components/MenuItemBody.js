import React from "react";
import ITEM_LOGO_URL from "../utils/constants"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const MenuItemBody = ({items}) =>{
  const dispatch = useDispatch() ;
  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };
    return (
        <div className="menu-item-body">
          {items.map((items)=>(
            <div key={items?.card?.info?.id}>
               <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+items?.card?.info?.imageId} /> 
              <div>
                <span>{items?.card?.info?.name} - Rs.</span>
                <span>{items?.card?.info?.price/100}</span> 
                <span><button onClick={()=> handleAddItem(items)}>ADD</button></span>                     
               </div>
               <p>{items?.card?.info?.description}</p> 
            </div>
          ))}
          
        </div>
   
    ) ;
} ;

export default MenuItemBody ;