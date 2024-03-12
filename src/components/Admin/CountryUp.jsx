import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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
import Deletecard from "./Deletecard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dashboard from "../AdminDashboard";

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

const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  let userID = params.id;
 
  const [upd, setUpd] = useState([]);
  const [disp, setDisp] = useState([]);
  const [index, setIndex] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:7003/api/country/singleview/${userID}`)
      .then((res) => {
        console.log("res", res.data);
        setDisp(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleChange = (e) => {
    setDisp({ ...disp, [e.target.name]: e.target.value });
    console.log(disp,6544);
  };
 

  const Image = (e) => {
    setDisp({ ...disp, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async () => {
    Axios.put(`http://localhost:7003/api/country/update/${userID}`, disp)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseDetails = () => {
    setSelectedImage(null);
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
  }, []);

  return (
    <>

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
                        <CardContent>
                            <Button onClick={()=>handleOpenForm()}><EditIcon/></Button>
                        </CardContent>
                      </Card>
                     
                    </div>
                  ))}
                </div>
              </div>

      <main>


      {isFormVisible && (
              <div className="dropdown">
                <form onSubmit={handleSubmit}>
        <section id="login">
          <div className="row">


            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-mid">
                    <h2 className="heading-secondary">Update
                    </h2>
                  </div>


                  <div className="form__group">
                    <input
                      className="form__input"
                      placeholder="Enter Country Name"
                      id="name"
                      name="country"
                      type="text"
                      onChange={(e) => handleChange(e)}
                      value={disp?.country }
                      
                    />
                    <label for="name" className="form__label">
                      Location
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="file"
                      className="form__input"
                      placeholder="Enter Image"
                      id="name"
                      name="image"
                      onChange={(e) => Image(e)}
                      
                    />
                    <label for="name" className="form__label">
                      Image
                    </label>
                  </div>

                  <div style={{ display: "flex" }}>
                        <div className="form__group">
                         
                            <button className="btn btn--green" onClick={handleSubmit}>
                              Update &rarr;
                            </button>
                         
                        </div>
                        <div
                          className="form__group"
                          style={{ marginLeft: "10%" }}
                        >
                         
                            <button className="btn btn--green"  onClick={handleCloseForm}>
                            Close &rarr;
                            </button>
                         
                        </div>
                      </div>

                 
                 
                </form>
              </div>
            </div>
          </div>
        </section>
        </form>
        </div>
      )}
      </main>
      <Fab
            color="primary"
            aria-label="add"
            sx={fabStyle}
            onClick={handleOpenForm}
          >
            <AddIcon />
          </Fab>
    </>
  );
};

export default Home;
