import React, { useState, useEffect,useParams } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/admin.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Card, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Rating from "@mui/material/Rating";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const fabStyle = {
  position: "absolute",
  right: "80px",
};

export default function Home() {
    const params=useParams()
  const data = [
    { id: 1, path: "/AustraliaAdmin" },
    { id: 2, path: "./Main" },
    { id: 3, path: "/Login" },
    { id: 4, path: "/AustraliaAdmin" },
    { id: 5, path: "/AustraliaAdmin" },
    { id: 6, path: "/AustraliaAdmin" },
    { id: 7, path: "/AustraliaAdmin" },
    { id: 8, path: "/AustraliaAdmin" },
    { id: 9, path: "/AustraliaAdmin" },
    { id: 10, path: "/AustraliaAdmin" },
  ];

  const [data2, setData2] = useState([]);

  const [form, setForm] = useState();
  const Name = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const Image = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Tour")));
  }, []);
  const [count, setCount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setOpen(false);

    const Data1 = new FormData();
    Data1.append("country", form.country);
    // Data1.append("status",form.status)
    Data1.append("image", form.image);

    Axios.post("http://localhost:7003/api/country/update", Data1, {
      headers: { Token: user },
    })
      .then((result) => {
        console.log(result.data);
        setCount((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [disc, setDisc] = useState([]);
  const [Cate, setCate] = useState();
  useEffect(() => {
    Axios.get("http://localhost:7003/api/country/view")
      .then((res) => {
        console.log("res", res.data);
        setDisc(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [user]);

  const handleCategory = (e) => {
    setCate(e.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  // Delete
  const [select, setSelect] = useState("");
  const [close, setClose] = React.useState(false);

  const handleOpen2 = (i) => {
    setClose(true);
    setSelect(i);
  };

  const handleClose2 = () => setClose(false);

  return (
    <>   
      <div className="bo">
        <div className="bo2">
          <main>
          
            <section id="about">
              

              <div>
                <div className="search-icon" onClick={handleSearchClick}>
                  <i className="fa fa-search"></i>
                </div>
                {isSearchVisible && (
                  <div className="search-bar">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                    <button className="search-button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                )}
              </div>

              <div className="row">
                <div className="gallery-container">
                  {disc?.map((item, index) => (
                    <div key={index} className="card-container">
                      <Card sx={{ maxWidth: 400 }}>
                        <CardHeader
                          
                          title={item.country}
                        />

                        <Link to={`/AustraliaAdmin/${item._id}`} key={item.id}>
                          <img
                            src={`http://localhost:7003/uploads/travel/${item?.image}`}
                            alt="lg tv"
                            className="card-image"
                            to={item.path}
                          />
                        </Link>
                        
                        <div className="card-overlay">
                          <h1>{item.country}</h1>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            
            </section>
          </main>
        </div>
      </div>
     



   
      
    </> 
  );
}
