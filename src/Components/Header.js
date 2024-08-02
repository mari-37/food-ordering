import React from "react";
import { COMPANY_LOGO_URL } from "../utils/constants" ;
import { LOGIN_LOGO_URL} from "../utils/constants" ;
import { useState } from "react";

const Header = () => {

const [loginBtn,SetloginBtn] = useState("LOGIN") ;

    return(
        <div className="header">
          <div className="logo-container">
             < img className="logo" src={COMPANY_LOGO_URL} alt="company-logo" />
          </div>

          <div className="nav-items">
              <ul>
                 <li>🏠 HOME </li>   
                 <li>➜ ABOUT US</li>
                 <li>🛒 CART</li>
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
                 <li>💁HELP</li>
              </ul>
          </div>

        </div>
    );
 } ;

export default Header ;