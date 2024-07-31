import React from "react";
import { COMPANY_LOGO_URL } from "../utils/constants" ;
import { LOGIN_LOGO_URL} from "../utils/constants" ;

const Header = () => {
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
                     <img
                      className="login-logo"
                      src={LOGIN_LOGO_URL}
                     />
                       LOGIN
                 </li>
                 <li>💁HELP</li>
              </ul>
          </div>

        </div>
    );
 } ;

export default Header ;