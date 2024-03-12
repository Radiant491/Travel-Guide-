import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/admin.css";
import "./Log.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card, TextField, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Modal from "@mui/material/Modal";
import Deletecard from "./Deletecard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
export default function Edit({handleClose4,select4,setSelect4}) {
    const params = useParams();
    let userID = params.id;
  
    const [name, setName] = useState([]);
    const [Cate, setCate] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:7003/api/hotel/singleview/${select4}`)
        .then((res) => {
          console.log("res", res.data);
          setName(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }, []);
  
    const Name = (e) => {
      setName({ ...name, [e.target.name]: e.target.value });
    };
    const Image = (e) => {
      setName({ ...name, [e.target.name]: e.target.files[0] });
    };
    const handleSubmit = async () => {
      Axios.put(`http://localhost:7003/api/hotel/update/${userID}`, name)
        .then((res) => {
          console.log("res", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };


    const [close3, setClose3] = React.useState(false);
  
    const handleOpen4 = (i) => {
      setClose3(true);
      setSelect4(i);
    };
    // const handleClose4 = () => setClose3(false);
  return (
    <div>

<main className="book2">
        <section id="login">
            <div className="row">
              <div>

                 
              <div className="book__form2">
                  <form className="form" style={{ display: "inline-block" }}>

                <div style={{display:'flex'}}>
                      <div className="form__group" >
                      <input
                            className="form__input"
                            placeholder="Enter Hotel Name"
                            id="hotel"
                            name="hotel"
                            type="text"
                            onChange={(e) => Name(e)}
                            value={name?.hotel}
                          />
                          <label for="name" className="form__label">
                            Hotel
                          </label>
                        </div>
                  
                        <div className="form__group" >
                      <input
                            className="form__input"
                            placeholder="Enter Stars"
                            id="stars"
                            name="stars"
                            type="text"
                            onChange={(e) => Name(e)}
                            value={name?.stars}

                          />
                          <label for="name" className="form__label">
                            Stars
                          </label>
                        </div>
                        </div>   
    
                        <div className="form__group" >
                      <textarea
                            className="form__input"
                            placeholder="Enter Discription"
                            id="discription"
                            name="discription"
                            type="text"
                            onChange={(e) => Name(e)}
                            value={name?.discription}

                          />
                          <label for="name" className="form__label">
                          Discription
                          </label>
                        </div>
{/*     
                        <div className="form__group" >
                        <select
                            type="text"
                            className="form__input3"
                            placeholder="Enter Type"
                            id="name"
                            name="country"
                            // onChange={(e) => handleCategory(e)}
                            value={name?.country_id}

                          >
                            {" "}
                            {Cate?.map((item) => {
                              return (
                                <option value={item._id}>{item.country}</option>
                              );
                            })}
                          </select>
                          <label for="name" className="form__label">
                            Country
                          </label>
                        </div> */}
    
                        <div className="form__group">
                          <input
                            className="form__input"
                            placeholder="Enter Location"
                            id="location"
                            name="location"
                            type="text"
                            onChange={(e) => Name(e)}
                            value={name?.location}

                          />
                          <label for="name" className="form__label">
                            Location
                          </label>
                        </div>
    
                        {/* <div className="form__group">
                          <select
                            type="text"
                            className="form__input3"
                            placeholder="Enter status"
                            id="status"
                            name="status"
                            // onChange={(e) => handleCategory(e)}
                            required
                          >
                            {" "}
                            {Cate?.map((item) => {
                              return (
                                <option value={item._id}>{item.status}</option>
                              );
                            })}
                          </select>
                          <label for="name" className="form__label">
                            Status
                          </label>
    
                     
                        </div> */}
                        <div className="form__group">
                                 <input
                            type="number"
                            className="form__input"
                            placeholder="Enter Price"
                            id="price"
                            name="price"
                            onChange={(e) => Name(e)}
                            value={name?.price}

                          />
                          <label for="name" className="form__label">
                            Price
                          </label>
    
                        </div>
    
                        {/* <div className="form__group">
                          <input
                            type="file"
                            className="form__input"
                            placeholder="Enter Image"
                            id="name"
                            name="image"
                            onChange={(e) => Image(e)}
                            required
                          />
                          <label for="name" className="form__label">
                            Image
                          </label>
                        </div> */}
    
                        <div style={{ display: "flex" }}>
                          <div className="form__group">
                            <button
                              className="btn btn--green"
                              onClick={handleSubmit}
                            >
                              Add &rarr;
                            </button>
                            <button
                          className="btn btn--green"
                          onClick={handleClose4}
                        >
                          Cancel &rarr;
                        </button>
                          </div>
                        </div>

                       
                
                  </form>
                </div>
             </div>
            </div>
          </section>
          
</main>

    </div>
  )
}
