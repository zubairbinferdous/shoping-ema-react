/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Home.css";
const Home = () => {
  return (
    <>
    <nav className="header">
      <img src={logo} alt="" />

      {/* menu-area  */}

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/shop">shop</Link>
        <Link to="/order">order</Link>
        <Link to="/inventory">inventory</Link>
        <Link to="/login">login</Link>
      </div>
    </nav>

    
    
    </>
  );
};

export default Home;
