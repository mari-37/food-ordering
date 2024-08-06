import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import MenuItemHead from "./MenuItemHead";

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
    console.log(menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards) ;
    const categories =
    menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return(
        <div className="menu-items">
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h5>{avgRating}</h5>
            <h2>MenuItems</h2>
            {categories.map((c,index)=>(<MenuItemHead key={index} data={c?.card?.card} />)) }           


        </div>
    ) ;
} ;
       
export default MenuItems ;

