import React from "react";
import { COMPANY_LOGO_URL } from "../utils/constants" ;
import { LOGIN_LOGO_URL} from "../utils/constants" ;
import { useState } from "react";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus" ;
import { useSelector } from "react-redux";

const Header = () => {

const cartItems = useSelector((store)=>store.cart.items) ;
const onlineStatus = useOnlineStatus() ;
const [loginBtn,SetloginBtn] = useState("LOGIN") ;

    return(
        <div className="header">
          <div className="logo-container">
             < img className="logo" src={COMPANY_LOGO_URL} alt="company-logo" />
          </div>

          <div className="nav-items">
              <ul>
                 <li> ONLINE STATUS 🕵️ : { onlineStatus ? "🟢" : "🔴" }</li>
                 <li> <Link to= "/"> 🏠 HOME </Link>  </li>   
                 <li> <Link to= "/About">➜ ABOUT US</Link> </li>
                 <li> <Link to= "/cart">🛒 CART - ({cartItems.length}items)</Link> </li>
                 <li> 
                    <button  onClick={()=>{
                      return (loginBtn === "LOGIN" ? SetloginBtn("LOGOUT") : SetloginBtn("LOGIN") );
                    }}  >
                       <img
                        className="login-logo"
                        src={LOGIN_LOGO_URL}
                      />
                      {loginBtn}
                     </button>   
                 </li>
                 <li> <Link to= "/Help"> 💁HELP</Link></li>
                 <li> <Link to= "/Grocerry">🛍️ GROCERRY</Link></li>
              </ul>
          </div>

        </div>
    );
 } ;

export default Header ;