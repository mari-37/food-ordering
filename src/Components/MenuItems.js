import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const MenuItems  = () => {
const [menuItems,SetmenuItems] = useState(null) ;
const {resId} = useParams();
 useEffect(()=>{
    fetchMenuItems() ;
 },[]) ;

    const fetchMenuItems = async () => {
    const response = await fetch(MENU_API_URL + resId ) ;
    const json = await response.json();
    SetmenuItems(json?.data);  
    console.log(json);
    };

 if(menuItems===null) return <h1>loading.....!</h1>

    const {name,cuisines,avgRating} = menuItems?.cards[2]?.card?.card?.info ;
    const {itemCards} =menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

    return(
        <div className="menu-items">
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h5>{avgRating}</h5>
            <h2>MenuItems</h2>
            <ul>
            
                { itemCards.map((items)=><li key={items?.card?.info?.id}>{items?.card?.info?.name} - {items?.card?.info?.defaultPrice/100 || items?.card?.info?.finalPrice/100 || items?.card?.info?.price/100 }</li>)}

            </ul>
            
        </div>
    ) ;
} ;

export default MenuItems ;

