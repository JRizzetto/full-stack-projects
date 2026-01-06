import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
