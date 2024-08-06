import React from "react";
import ResCard from "./ResCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";
import  useOnlineStatus  from "../utils/useOnlineStatus" ;


const Body = () => {
const [listOfRes,SetlistOfRes] = useState([]) ;
const [searchRes,SetsearchRes] = useState("") ;
const [filterRes,SetfilterRes] = useState([]) ;
 
useEffect(()=> {
  fetchData();
},[]) ;

 const fetchData = async () =>{
   const data = await fetch (SWIGGY_API_URL) ;
   const json = await data.json() ;
   SetlistOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
   SetfilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
   console.log(json) ;
} ;

const OnlineStatus = useOnlineStatus() ;

if(OnlineStatus===false) return <h1>its look like you offline.   plz check ur network connections </h1>


if(listOfRes?.length===0){
  return <Shimmer /> ;
}
 
    return(
        <div className="body">

        <div className="search">  
          <input className="search-bar" value={searchRes} onChange={(e)=>{SetsearchRes(e.target.value)}} type="search"/>
          <button className="search-button" onClick={()=>{
            const filterRes=listOfRes?.filter((res)=>
            res?.info?.name?.toLowerCase().includes(searchRes.toLowerCase()));
            SetfilterRes(filterRes);
            }}
            >SEARCH
          </button>     
        </div>

              <button className="filter-btn" onClick={ ()=>{
                const  filteredRes = listOfRes?.filter((res) => res.info.avgRating >=4.5  ) ;
                  SetfilterRes(filteredRes) ;
                  }}>
                TOP RATED RESTAURANT
              </button>
         
           <div className="res-container">
            {filterRes?.map((res) => (
             <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id} ><ResCard  resData={res} /> </Link>
            ))}           
           </div>   
        </div>
    ) ;
 } ;

export default Body ;
