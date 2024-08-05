import { useState,useEffect } from "react";

const useOnlineStatus =() =>{
const[CheckStatus,SetCheckStatus] = useState(true) ;
useEffect(()=>{

    window.addEventListener("offline",()=>{
        SetCheckStatus(false);
    })

    window.addEventListener("online",()=>{
        SetCheckStatus(true);
    })

},[])
 return CheckStatus ;
} ;

export default useOnlineStatus ;

