import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import cart from "./Assets/trolley.png";
import mainLogo from "./Assets/diet.png";

// console.log(container);
/**
 * Header
 *  - logo - done
 *  - nav items - done  
 *  - cart icon - done
 *
 * Body - 
 *  - restaurent cards
 *      - image
 *      - name
 *      - cuisine
 * Footer
 *  -review email
 *
 */

const Header = () => {

  // const [stickyHeader, setStickyHeader] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll =()=>{
  //   if(window.scrollY > 0){
  //     setStickyHeader(true);
  //   }else{
  //     setStickyHeader(false);
  //   }
  // }

  return (
    <>
      <div className="main-header">
        <div className="logo-icon">
          <a href="/">
            <img src={mainLogo} alt="website logo" />
          </a>
        </div>
        <div className="nav-items-list">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>User</li>
          </ul>
        </div>
        <div className="cart">
          <img src={cart} alt="cart-logo" />
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return(
    <div className="body-container">
      {/* <h1>HEllo</h1> */}
    </div>
  );
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
