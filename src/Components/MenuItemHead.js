import React, { useState } from "react";
import MenuItemBody from "./MenuItemBody";

const MenuItemHead = ({data}) =>{

const [showItems,setshowItems] = useState(false) ;
     
    return (
       <div className="res-item-head">
         <div className="item-head" onClick={()=>setshowItems(!showItems)}>
            <span> {data.title}({data.itemCards.length}) </span>
            <span>⬇️</span>
            
          </div>
         { showItems && < MenuItemBody items={data.itemCards} />}
       </div>
    );

} ;

export default MenuItemHead ;