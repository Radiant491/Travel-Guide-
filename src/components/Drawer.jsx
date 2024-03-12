import React from 'react'
import "./css/icons.css";
import "./css/style2.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Drawer() {
const nav = useNavigate()
  const del=()=>{
    localStorage.removeItem('Token')
    nav("/");

  }
  return (
    <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp:</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
      <li class="navigation__item">
  
                    <Link to="./Main">
                      <img
                        src="/radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                        alt="logo"
                        className="header__logo"
                        style={{height:'2%'}}
                      />
                    </Link>
                 
        </li>
        <li class="navigation__item">
          <Link to='/Main' class="navigation__link">Home</Link>
        </li>
        <li class="navigation__item">
          <Link to='/Profile' class="navigation__link">Profile</Link>
        </li>
        
        <li class="navigation__item">
          <Link  to="/Bookmark" class="navigation__link">Bookmark</Link >
        </li>
        <li class="navigation__item">
          <Link to="/About"  class="navigation__link">About Us</Link>
        </li>
        <li class="navigation__item">
          <Link onClick={del} class="navigation__link">Logout</Link >
        </li>
       
      </ul>
    </nav>
  </div>
  )
}
