import React, { useState, useEffect } from "react";
import "./css/icons.css";
import "./css/style2.css";
import "./css/home.css";
import "./css/extra.css";

import { Link, useNavigate } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div style={{ backgroundColor: "#f7f7f7" ,overflow:'hidden'}}>
        <div className="header2">
         
    
          <nav className="navbar">
            <ul>
              <li>
                <div className="header__logo-box">
                  <Link to="./Dashboard">
                    <img
                      src="./radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                      alt="logo"
                      className="header__logo"
                    />
                  </Link>
                </div>
              </li>
              <Link to="/AustraliaAdmin">
                <h1>
                  <a href="#about" className="navigation2__link">
                    <b>About Natours</b>
                  </a>
                </h1>
              </Link>
    
              <h1>
                <a href="#features" className="navigation2__link">
                  Your benifits
                </a>
              </h1>
    
              <Link to="/CountryUp">
                <h1>
                  <a href="#tours" className="navigation2__link">
                    poular tours
                  </a>
                </h1>
              </Link>
              <Link to="/About">
                <h1>
                  <a href="#stories" className="navigation2__link">
                    About Us
                  </a>
                </h1>
              </Link>
              <h1>
                <Link to="./Login" href="#login" className="navigation2__link">
                  Login now
                </Link>
              </h1>
            </ul>
          </nav>
        </div>
    </div>
  );
}
