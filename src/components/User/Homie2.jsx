import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/home.css";
import "../css/extra.css";
import PlacesSection from "./LocationU";
import HotelsSection from "./HotelU";
import { Link, useNavigate } from "react-router-dom";
import { Button, Toolbar } from "@mui/material";

const buttonContainerStyle = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
};

export default function Home() {
  const nav = useNavigate();

  const navigate = useNavigate();
  const [odd, setOdd] = useState();
  const Click = () => {
    navigate("./Main");
  };

  const [selectedSection, setSelectedSection] = useState("places");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setClickedSection(section); // Add a state to track clicked section
  };

  const [clickedSection, setClickedSection] = useState(null);

  // Add a class to the clicked link
  const handleClick = (section) => {
    setClickedSection(section);
  };

  const del = () => {
    localStorage.removeItem("Token");
    nav("/");
  };
  return (
    <>
      <div className="lend">
        <div className="">
          <div className="header">
            <div className="video-background">
              <video autoPlay loop muted>
                <source src="/mountain.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <nav className="navbar">
              <ul>
                <li>
                  <div className="header__logo-box">
                    <Link to="/Main">
                      <img
                        src="./radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                        alt="logo"
                        className="header__logo"
                      />
                    </Link>
                  </div>
                </li>
                <h1>
                  <Link to="/Main" className="navigation2__link">
                    Home
                  </Link>
                </h1>

                <h1>
                  <Link to="/Homie2" className="navigation2__link">
                    Discover
                  </Link>
                </h1>

                <h1>
                  <Link to="/Bookmark" className="navigation2__link">
                    Bookmark
                  </Link>
                </h1>
                <h1>
                  <Link to="/About" className="navigation2__link">
                    About Us
                  </Link>
                </h1>
                <h1>
                  <Link onClick={del} className="navigation2__link">
                    <b> Logout</b>
                  </Link>
                </h1>
              </ul>
            </nav>

            <div className="header__text-box">
              <div class="title">
                <h1 className="h11" style={{ fontWeight: "1000px" }}>
                  Outdoors
                </h1>
                <span
                  className="heading-primary--sub"
                  style={{ marginTop: "8%" }}
                >
                  is where life happens
                </span>
              </div>

              <Link className="btn btn--white btn--animated">
                Discover our tours
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "silver" }}>
        <ul class="menu45">
          <li class="menu-item45">
            <h1>
              <Link
                className={`navigation44__link ${
                  clickedSection === "places" ? "clicked" : ""
                }`}
                onClick={() => {
                  handleSectionChange("places");
                  handleClick("places");
                }}
              >
                Places
              </Link>
            </h1>
          </li>
          <li class="menu-item45">
            <h1>
              <Link
                className={`navigation44__link ${
                  clickedSection === "hotels" ? "clicked" : ""
                }`}
                onClick={() => {
                  handleSectionChange("hotels");
                  handleClick("hotels");
                }}
              >
                Hotels
              </Link>
            </h1>
          </li>
        </ul>
      </div>

      {selectedSection === "places" ? <PlacesSection /> : <HotelsSection />}
    </>
  );
}
