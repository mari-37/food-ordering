import React from "react";
import ResCard from "./ResCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
const [listOfRes,SetlistOfRes] = useState([]) ;
const [searchRes,SetsearchRes] = useState("") ;
const [filterRes,SetfilterRes] = useState([]) ;
 
useEffect(()=> {
  fetchData();
},[]) ;

 const fetchData = async () =>{
   const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;
   const json = await data.json() ;
   SetlistOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
   SetfilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
   console.log(json) ;
} ;

if(listOfRes?.length===0){
  return <Shimmer /> ;
}
 
    return(
        <div className="body">

        <div className="search">  
          <input className="search-bar" value={searchRes} onChange={(e)=>{SetsearchRes(e.target.value)}} type="search"/>
          <button className="search-button" onClick={()=>{
            const filterRes=listOfRes.filter((res)=>
            res?.info?.name?.toLowerCase().includes(searchRes.toLowerCase()));
            SetfilterRes(filterRes);
            }}
            >SEARCH
          </button>     
        </div>

              <button className="filter-btn" onClick={ ()=>{
                const  filteredRes = listOfRes?.filter((res) => res.info.avgRating >4  ) ;
                  SetlistOfRes(filteredRes) ;
                  }}>
                TOP RATED RESTAURANT
              </button>
         
           <div className="res-container">
            {filterRes?.map((res) => (
             <ResCard key={res?.info?.id} resData={res} /> 
            ))}           
           </div>   
        </div>
    ) ;
 } ;

export default Body ;
