import React from "react";
import resList from "../utils/mockData" ;
import ResCard from "./ResCard";
import { useState } from "react";


const Body = () => {
const [listOfRes,SetlistOfRes] = useState(resList) ;

    return(
        <div className="body">
            <button className="filter-btn" onClick={ ()=>{
              const  filteredRes = listOfRes.filter((res) => res.info.avgRating >4  ) ;
                 SetlistOfRes(filteredRes)
                }}>
              TOP RATED RESTAURANT
            </button>

           <div className="res-container">
            {listOfRes.map((res) => (
             <ResCard key={res?.info?.id} resData={res} />
            ))}           
           </div>   
        </div>
    ) ;
 } ;

export default Body ;
