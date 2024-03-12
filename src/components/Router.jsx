import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import LocUp from "./Admin/LocUp";
import Main from "./Main";
import Dashboard from "./AdminDashboard";
import Country from "./Admin/Country";
import CountryUp from "./Admin/CountryUp";
import Register from "./Register"
import RegisterAdmin from "./Admin/RegisterAdmin";
import LoginAdmin from "./Admin/LoginAdmin";
import Login from "./Login";
import About from "./About";
import AustraliaUser from "./User/AustraliaUser";
import CountryUser from "./User/CountryUser";
import LocatinoU from "./User/LocationU";
import HotelU from "./User/HotelU";
import Homie2 from "./User/Homie2";
import Location from "./Admin/Location";
import Sidebar from "./Admin/Sidebar";
import "./css/admin.css";
import Error from "./Error";
import Footer from "./Footer";
import Navbar from "./Admin/Navbar";
import MainNavbar from "./MainNavbar";
import Users from "./Admin/Users";
import Catagory from "./Admin/Catagory";
import Edit from "./Admin/Edit";
import Hotel from "./Admin/Hotel";
import Extra from "./User/Extra";
import Bookmark from "./User/Bookmark";
import HotelExtra from "./User/HotelExtra";
import HotelUp from "./Admin/HotelUp";
import Drawer from "./Drawer";
import Profile from "./User/Profile";

export default function Rout() {

  const Data = ({children})=>{
    return(
    <>
    <Navbar/>
    <Sidebar/>

    {children}
    </>)
  }

  const W = ({children})=>{
    return(
    <>
    <Drawer/>
  

    {children}
    </>)
  }
  
  return (
    <div>
      <BrowserRouter>
        <div >
          <div >
      
    
            <div >
            
              <Routes>
                <Route exact path="/" element={<><Home /><Footer/></>} />
                <Route exact path="/Main" element={<W><Main /><Footer/></W>} />
                <Route exact path="/Bookmark" element={<W><Bookmark /><Footer/></W>} />
                <Route exact path="/extra/:id" element={<W><Extra /><Footer/></W>} />
                <Route exact path="/HotelExtra/:id" element={<W><HotelExtra /><Footer/></W>} />
                <Route exact path="/Hotel" element={<Data><Hotel/></Data>} />
                <Route exact path="/HotelUp" element={<HotelUp/>} />
                <Route exact path="/CountryUp" element={<CountryUp />} />
                <Route exact path="/Country" element={<Data><Country /></Data>} />
                <Route exact path="/Edit" element={<Edit />} />
                <Route exact path="/LocUp" element={<Data><LocUp /></Data>} />
                <Route exact path="/Login/Main" element={<Main />} />
                <Route exact path="/Catagory" element={<Data><Catagory /></Data>} />
                <Route path="/Dashboard" element={<Data><Dashboard/></Data>} />
                <Route path="/LocationU" element={<LocatinoU />} />
              
                <Route exact path="/HotelU" element={<HotelU/>} />
                <Route exact path="/Profile" element={<W>< Profile/></W>} />
                <Route exact path="/Homie2" element={<W><Homie2 /><Footer/></W>} />
                <Route exact path="/Sidebar" element={<Sidebar />} />
                <Route exact path="/Users" element={<Data><Users /></Data>} />
                <Route exact path="/Register" element={<Register />} />
                <Route exact path="/RegisterAdmin" element={<RegisterAdmin />} />
                <Route exact path="/LoginAdmin" element={<LoginAdmin />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/About" element={<><About /><Footer/></>} />
                <Route
                  exact
                  path="/Dashboard/AustraliaUser"
                  element={<AustraliaUser />}
                />
                <Route exact path="/Location" element={<Data><Location /></Data>} />
                <Route
                  exact
                  path="/Login/Main/CountryUser"
                  element={<CountryUser />}
                />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}
