import React from "react" ;
import ReactDOM from "react-dom" ;

const Header = () => {
    return(
        <div className="header">
          <div className="logo-container">
             < img className="logo" src="data:image/png;base64,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" alt="company-logo" />
          </div>

          <div className="nav-items">
              <ul>
                 <li>🏠 HOME </li>   
                 <li>➜ ABOUT US</li>
                 <li>🛒 CART</li>
                 <li> <img className="login-logo" src="https://cdn-icons-png.flaticon.com/128/2609/2609282.png" /> LOGIN</li>
                 <li>💁HELP</li>
              </ul>
          </div>

        </div>
    );
 } ;

 const ResItems = () => {
    return (
        <div className="res-items">
            <img className="res-logo" alt="restaurant logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1b92e544-fce7-45ac-941a-50092e3037a5_50793.JPG" />
            <h2>KFC</h2>
            <h3>pizza,burger,coke</h3>
            <h4>30 mins</h4>
            <h4>4.3 stars</h4>
        </div>
    ) ;
 } ;


 const Body = () => {
    return(
        <div className="body">
           <div className="res-container">
             <ResItems />  <ResItems />   <ResItems />   <ResItems />   <ResItems />   <ResItems />   <ResItems />   <ResItems />   
             <ResItems />   <ResItems />   <ResItems />   <ResItems />   <ResItems />   <ResItems />   <ResItems />   <ResItems />      
           </div>   
        </div>
    ) ;
 } ;

const Applayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    ) ;
} ;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
