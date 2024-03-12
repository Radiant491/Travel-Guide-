import React, { useState,useEffect } from 'react';

import { Routes, Route, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import side from './side';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Axios from "axios";



const drawerWidth = 240;

export default function ClippedDrawer() {
  const [openSubMenu, setOpenSubMenu] = React.useState(null);
  const location = useLocation();

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  React.useEffect(() => {
    // Close sub-menu when navigating to a different route
    setOpenSubMenu(null);
  }, [location.pathname]);

  const [isShrinkView, setIsShrinkView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Admin2"));
    setUser(storedUser?._id || null);
  }, []);
console.log(user, 'Profile')
  const [disc, setDisc] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    Axios.get(`http://localhost:7003/api/registeradmin/singleadminview/${user}`)
      .then((res) => {
        console.log("res", res.data);
        setDisc(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [user]);
  return (
   
    <Box sx={{ display: 'flex' }} className='body8'>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
       
        <div className="header__logo-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'5%' ,overflow:"hidden"  }}>    
                      <img
                        src="./radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                        alt="logo"
                        className="header__logo"
                        style={{width:'60%',marginTop:'8%',}}
                      />
                  </div>
           
                 

        {/* <Divider /> */}
        <List className="List">
        
          {side.map((item, index) => (
            <React.Fragment key={index}>  
            <Link to={item.path}>
              <ListItem disablePadding>
             
                  <ListItemButton onClick={() => handleSubMenuToggle(index)}>
                    <ListItemIcon>
                    {item.icon && React.cloneElement(item.icon, { style: { fontSize: '24px', color: ' #22bcdb' } })}
                    </ListItemIcon>
                    {item.title}
                    <ListItemText  />
                    {item.sub && (
                      <ListItemIcon sx={{ marginLeft: 'auto' }}>
                        {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                      </ListItemIcon>
                    )}
                  </ListItemButton>
               
              </ListItem>
              </Link>
              {item.sub && (
                <List
                  sx={{
                    marginLeft: '16px',
                    overflow: 'hidden',
                    maxHeight: '0',
                    transition: 'max-height 0.3s ease-in-out',
                    '&.open': {
                      maxHeight: '1000px', // adjust to a suitable value
                    },
                  }}
                  className={openSubMenu === index ? 'open' : ''}
                >
                  {item.sub.map((subItem, subIndex) => (
                     <Link to={subItem.path2}>
                       <ListItemButton >
                      <ListItem key={subIndex} disablePadding>
                      <ListItemIcon>
                      {subItem.icon2 && React.cloneElement(subItem.icon2, { style: { fontSize: '24px', color: ' #22bcdb' } })}
                    </ListItemIcon>
                        {subItem.title2}
                        <ListItemText inset />
                      </ListItem>
                      </ListItemButton>
                     </Link>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
          <div className="user-profile-top">
                        
                        <figure
                          className="story__shape2"
                          style={{ justifyContent: "center",marginLeft:"15%" ,marginTop:'-20%'}}
                        >
                          <img 
                            src={`http://localhost:7003/uploads/admin/${disc?.image}`}
                            alt="User Profile"
                            className="story__img3"
                            
                          />
                         
                        </figure>
                       <h3 >{disc?.name}</h3>
                    </div>
                   
        </List>
      </Drawer>
    </Box>
   
  );
}