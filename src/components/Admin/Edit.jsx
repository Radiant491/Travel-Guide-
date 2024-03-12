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
    const [Cate, setCate] = useState();
    const [getCate,setGetCate]=useState([])


    const handleCategory = (e) => {
      setCate(e.target.value);
    };
    useEffect(() => {
      Axios.get(`http://localhost:7003/api/tour/singleview/${select4}`)
        .then((res) => {
          console.log("res", res.data);
          setName(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }, []);
    useEffect(()=>{
      Axios.get('http://localhost:7003/api/category/view')
      .then((res)=>{
          console.log('res',res.data);
          setGetCate(res.data)
      })
      .catch((err)=>{
          alert(err);
      });
  },[])
  
    const Name = (e) => {
      setName({ ...name, [e.target.name]: e.target.value });
    };
    const Image = (e) => {
      setName({ ...name, [e.target.name]: e.target.files[0] });
    };
    const handleSubmit = async () => {
      Axios.put(`http://localhost:7003/api/tour/update/${userID}`, name)
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
                  <form className="form">
                    <div className="form__group" style={{ display: "flex" }}>
                    {/* <select
                        type="text"
                        className="form__input3"
                        placeholder="Enter Type"
                        id="name"
                        name="countrie"
                        onChange={(e) => handleCategory(e)}
                        required
                      >
                        {" "}
                        {Cate?.map((item) => {
                          return (
                            <option value={item._id}>{item.countrie}</option>
                          );
                        })}
                      </select>
                      <label for="name" className="form__label">
                        Country
                      </label> */}

                      <input
                        style={{ marginLeft: "2%" }}
                        className="form__input"
                        placeholder="Enter Location Name"
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

                    <div className="form__group" style={{ display: "flex" }}>

                      <input
                        style={{ marginLeft: "2%" }}
                        className="form__input"
                        placeholder="Enter Name"
                        id="name"
                        name="name"
                        type="text"
                        onChange={(e) => Name(e)}
                        value={name?.name}

                      />
                      <label for="name" className="form__label">
                        Name
                      </label>
                    </div>

                    {/* <div className="form__group">
                      <select
                        type="text"
                        className="form__input3"
                        placeholder="Enter Type"
                        id="name"
                        name="image"
                        onChange={(e) => handleCategory(e)}
                        required
                        value={name?.category_id?.status}
                      >
                        {" "}
                        {getCate?.map((item) => {
                          return (
                            <option value={item._id}>{item.status}</option>
                          );
                        })}
                      </select>
                      <label for="name" className="form__label">
                        Type
                      </label>

                     
                    </div> */}

                    <div className="form__group">
                      <textarea
                        id="longText"
                        className="form__input"
                        placeholder="Enter Discription"
                        name="discription"
                        type="text"
                        onChange={(e) => Name(e)}
                        value={name?.discription}
                      ></textarea>
                      <label for="name" className="form__label">
                        Discription
                      </label>
                    </div>

                    {/* <div className="form__group">
                      <input
                        style={{ width: "42.5%" }}
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
                          Update &rarr;
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
