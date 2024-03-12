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




const StarRating = ({ onRatingChange, clickable }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onRatingChange(value);
  };
  const handleStarHover = (value) => {
    setRating(value);
  };


  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => handleStarClick(value)} 
       style={{ cursor: "pointer", }}>
          {value <= rating ? <StarIcon style={{color: "gold",fontSize: "400%" }}/> : <StarOutlineIcon style={{fontSize: "400%" }}/>}
        </span>
      ))}


    </div>
  );
};

export default StarRating;
