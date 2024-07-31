import React from "react";
import resList from "../utils/mockData" ;
import ResCard from "./ResCard";


const Body = () => {
    return(
        <div className="body">
           <div className="res-container">
            {resList.map((res) => (
             <ResCard key={res?.info?.id} resData={res} />
            ))}           
           </div>   
        </div>
    ) ;
 } ;

export default Body ;
