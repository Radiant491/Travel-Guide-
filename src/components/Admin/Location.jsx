import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/admin.css";
import "./Log.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Card, TextField, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Modal from "@mui/material/Modal";
import Deletecard from "./Deletecard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import Star from './Star';

import MenuItem from "@mui/material/MenuItem";

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

  const [data2, setData2] = useState([]);
  const [images, setImages] = useState({ image1: []});
  const [form, setForm] = useState();
  const Name = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const Image = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.files[0] });
  // };

  const handleRatingChange = (value) => {
    setForm({ ...form, rating: value });
  };

  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Token")));
  }, []);
  const [count, setCount] = useState("");
  const [Cate, setCate] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [disc, setDisc] = useState({ image1: [] });
    const [getCate,setGetCate]=useState([])
    const [getCate2,setGetCate2]=useState([])

  const handleCountry = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleCategory = (e) => {
    setCate(e.target.value);
  };

  const handleFile = (e, index) => {
    const image = [...images.image1];
    image[index] = e.target.files[0];
    setImages({ ...images, image1: image });
  };
  console.log(form);
  console.log(selectedCountry,"selectedCountry");
  console.log(getCate2,"getCate2");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
  
    // Validate form fields before submitting
    if (!selectedCountry || !Cate || !form || !form.location || !form.name || !form.discription || !images.image1) {
      console.log("Please fill in all the required fields");
      alert("Please fill in all the required fields")
      // Optionally, you can display an error message to the user
      return;
    }
  
    const Data1 = new FormData();
    Data1.append("country", selectedCountry);
    Data1.append("category", Cate);
    Data1.append("location", form.location);
    Data1.append("name", form.name);
    Data1.append("discription", form.discription);
  
    images.image1.map((item) => {
      Data1.append("image", item);
    });
  
    Axios.post("http://localhost:7003/api/tour/insert", Data1, {
      headers: { "Token": user },
    })
      .then((result) => {
        console.log(result.data);
        setCount((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

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

    useEffect(()=>{
      Axios.get('http://localhost:7003/api/country/view')
      .then((res)=>{
          console.log('res',res.data);
          setGetCate2(res.data)
      })
      .catch((err)=>{
          alert(err);
      });
  },[])

  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 



  return (
    <>
      <Toolbar />
      <div style={{marginLeft:'20%'}}>
        <main className="book2">
          <h2 className="heading-secondary">INSERT DATA</h2>

          <section id="login">
            <div className="row">
              <div>
                <div className="book__form2">
                  <form onClick={handleOpen} className="form">
                    <div className="form__group" style={{ display: "flex" }}>
                    <select
                        type="text"
                        className="form__input3"
                        placeholder="Enter Type"
                        id="country"
                        name="country"
                        onChange={(e) => handleCountry(e)}
                        required
                      >
                            <option >Choose</option>

                        {" "}
                        {getCate2?.map((item) => {
                          return (
                            <option value={item._id}>{item.countrie}</option>
                          );
                        })}
                      </select>
                      <label for="name" className="form__label">
                        Country
                      </label>

                      <input
                        style={{ marginLeft: "2%" }}
                        className="form__input"
                        placeholder="Enter Name"
                        id="name"
                        name="name"
                        type="text"
                        onChange={(e) => Name(e)}
                        required
                      />
                      <label for="name" className="form__label">
                        Name
                      </label>
                    </div>

                    <div className="form__group" style={{ display: "flex" }}>

                      {/* <div className="form__group">
                      <Star onRatingChange={handleRatingChange} name='rate'/>
                      <label className="form__label">Hotel Rating</label>
                    </div> */}

                      <input
                        style={{ marginLeft: "2%" }}
                        className="form__input"
                        placeholder="Enter Location"
                        id="location"
                        name="location"
                        type="text"
                        onChange={(e) => Name(e)}
                        required
                      />
                      <label for="name" className="form__label">
                        Location
                      </label>
                    </div>

                    <div className="form__group">
                      <select
                        type="text"
                        className="form__input3"
                        placeholder="Enter Type"
                        id="status"
                        name="status"
                        onChange={(e) => handleCategory(e)}
                        required
                      >
                        {" "}
                        {getCate?.map((item) => {
                          return (
                            <option value={item._id}>{item.status}</option>
                          );
                        })}
                      </select>
                      <label for="name" className="form__label">
                        Status
                      </label>

                  
                    </div>

                    <div className="form__group">
                      <textarea
                        id="longText"
                        className="form__input"
                        placeholder="Enter Discription"
                        name="discription"
                        type="text"
                        onChange={(e) => Name(e)}
                        required
                      ></textarea>
                      <label for="name" className="form__label">
                        Discription
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        style={{ width: "42.5%" }}
                        type="file"
                        className="form__input"
                        placeholder="Enter Image"
                        id="name"
                        name="image"
                        onChange={(e) => handleFile(e, 0)}
                        required
                      />
                      <label for="name" className="form__label">
                        Image
                      </label>

                      <input
                        style={{ width: "42.5%" }}
                        type="file"
                        className="form__input"
                        placeholder="Enter Image"
                        id="name"
                        name="image"
                        onChange={(e) => handleFile(e, 1)}
                        required
                      />
                      <label for="name" className="form__label">
                        Image
                      </label>

                      <input
                        style={{ width: "42.5%" }}
                        type="file"
                        className="form__input"
                        placeholder="Enter Image"
                        id="name"
                        name="image"
                        onChange={(e) => handleFile(e, 2)}
                        required
                      />
                      <label for="name" className="form__label">
                        Image
                      </label>

                      <input
                        style={{ width: "42.5%" }}
                        type="file"
                        className="form__input"
                        placeholder="Enter Image"
                        id="name"
                        name="image"
                        onChange={(e) => handleFile(e, 3)}
                        required
                      />
                      <label for="name" className="form__label">
                        Image
                      </label>

                      
                    </div>

                    <div style={{ display: "flex" }}>
                      <div className="form__group">
                        <button
                          className="btn btn--green"
                          onClick={handleSubmit}
                        >
                          Add &rarr;
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
   
     
    </>
  );
}
