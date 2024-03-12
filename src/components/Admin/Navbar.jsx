import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Sidebar from './Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../css/admin.css'

const drawerWidth = 240;


export default function PermanentDrawerLeft() {
const nav = useNavigate()

  const [adminData,setAdminData]= useState('')

  useEffect(()=>{
      const adData=JSON.parse(localStorage.getItem("Admin"))
      console.log(adData,'ad');
      setAdminData(adData)
  },[])


  const Del=()=>{
    localStorage.removeItem("Token2")
    nav('/Login')
    

}
  return (
    <div >
      
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:'white', }}
        >
       
            
  
            <nav className="navbar2" >
              <ul>
                <div className="nb">  
                <h1>
                    <Link to="/RegisterAdmin" className="navigation3__link">
                      <b> Register</b>
                    </Link>
                  </h1>
                  <h1>
                    <Link onClick={Del} className="navigation3__link">
                      <b> Logout</b>
                    </Link>
                  </h1>
                </div>
              </ul>
            </nav> 
            
  
            
          
        </AppBar>
       
      </Box>
      
    </div>
  );
}

{/* <Link to="./Admin">
<img
  src="./radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
  alt="logo"
  className="header__logo"
  style={{ marginLeft: "50%", marginTop: "10%" }}
/>
</Link> */}