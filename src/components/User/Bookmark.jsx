import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useNavigate, useParams,  } from 'react-router-dom';
import "../css/icons.css";
import "../css/style2.css";
import "../css/home.css";
import BookmarkHotel from "./BookmarkHotel"
import BookmarkPlace from "./BookmarkPlaces"
import { Button } from '@mui/material';

export default function Bookmark() {
  const nav = useNavigate();

  const uderID = useParams()

  const [name, setName] = useState([]);
  const [remove, setRemove] = useState([]);
  const [sel, setSel] = useState([]);
  const [select, setSelect] = useState("");
  const [close, setClose] = React.useState(false);
  const [selectedSection, setSelectedSection] = useState('places');



  useEffect(() => {
    const user=JSON.parse(localStorage.getItem("Token"))
    // console.log(user,654654654)
    Axios.get("http://localhost:7003/api/bookmark/view",{headers:{"Token":user}})
      .then((res) => {
        console.log("res", res.data);
        setName(res.data);
      
      })
      .catch((err) => {
        alert(err);
      });
  }, [remove]);

  const Del =async(item)=>{
    setSel(item)
    Axios.delete(`http://localhost:7003/api/bookmark/delete/${item._id}`)  
    .then((res)=>{
      console.log('res',res.data);
      setRemove((prev)=>!prev);
      // await handleClose2
    })
    .catch((err)=>{
      console.log(err);
    })
    // await handleClose2()
  }
  const del=()=>{
    localStorage.removeItem('Token')
    
  }

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setClickedSection(section); // Add a state to track clicked section
  };

  const [clickedSection, setClickedSection] = useState(null);

  // Add a class to the clicked link
  const handleClick = (section) => {
    setClickedSection(section);
  };

  return (
    <div style={{overflow:'hidden',backgroundColor:'#f7f7f7'}}>
       <header className="header">
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
                    <Link className="navigation2__link">
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

         
          <div className="video-background">
              <video autoPlay loop muted style={{ backgroundSize: "fit" }}>
                <source src="/mountain.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="header__text-box">

              <div class="title">
                <h1 className="h11">Outdoors</h1>
                <span className="heading-primary--sub">
                  is where life happens
                </span>
              </div>

              <Link to="/CountryUser">
                <p className="btn btn--white btn--animated">
                  Discover our tours
                </p>
              </Link>
            </div>
          </header>

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

       
         {selectedSection === 'places' ? <BookmarkPlace /> : <BookmarkHotel />}
     
    </div>
  );
}
