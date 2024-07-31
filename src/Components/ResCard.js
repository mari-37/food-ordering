import React from "react";
import { RES_LOGO_URL } from "../utils/constants";

const ResCard = (props) => {

    const {resData} = props ;
  
    const {name,cloudinaryImageId,costForTwo,cuisines,avgRating} = resData?.info ;
    
      return (
          <div className="res-items">
              <img className="res-logo" alt="restaurant logo" src={RES_LOGO_URL +cloudinaryImageId} />
              <h3>{name}</h3>
              <h4>{cuisines.join(",")}</h4>
              <h5>{resData?.info?.sla?.deliveryTime}mins - {avgRating}stars</h5>        
              <h5>{costForTwo}</h5>
          </div>
      ) ;
   } ;

export default ResCard ;
  