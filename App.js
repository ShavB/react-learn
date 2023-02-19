import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Restaurant";

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
