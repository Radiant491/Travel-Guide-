import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import CategoryIcon from '@mui/icons-material/Category';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PublicIcon from '@mui/icons-material/Public';
import Hotel from '@mui/icons-material/Hotel';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';


const SidebarLists = [
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <DashboardIcon />,
  },
  { title: "User", icon: <AccountCircleIcon />, path: "/Users" },
  {
    title: "Edit",
    icon: <ModeEditIcon />,
    sub: [
      { title2: "Catagory", path2: "/Catagory",icon2:<CategoryIcon/> },
      { title2: "Country", path2: "/Country",icon2:<PublicIcon/> },
      { title2: "Hotel", path2: "/Hotel",icon2:<Hotel/> },
      { title2: "Location", path2: "/Location",icon2:<AddLocationAltIcon/> },
      { title2: "Update", path2: "/LocUp",icon2:<BrowserUpdatedIcon/> },
    ],
  },
  {
    title:"ULocation",
    path:'/Homie2'
  },
 
];

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => handleStarClick(value)}>
          {value <= rating ? <StarIcon /> : <StarOutlineIcon />}
        </span>
      ))}
    </div>
  );
};

export default SidebarLists;
