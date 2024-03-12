import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/admin.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Card, TextField, Toolbar } from "@mui/material";
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

    Axios.post("http://localhost:7003/api/category/insert", form)
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
    Axios.get("http://localhost:7003/api/category/view")
      .then((res) => {
        console.log("res", res.data);
        setDisc(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [disc]);

  return (
    <>
      <Toolbar />
      <main className="book2" style={{ marginLeft: "20%" }}>
        <section id="login">
          <div className="row">
            <div>
              <div className="book__form">
                <form className="form">
                  <div className="form__group">
                    <input
                      // style={{marginLeft:'2%'}}
                      className="form__input"
                      placeholder="Enter Type"
                      id="name"
                      name="name2"
                      type="text"
                      onChange={(e) => Name(e)}
                      required
                    />
                    <label for="name" className="form__label">
                      Type
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      // style={{width:'42.5%'}}
                      type="text"
                      className="form__input"
                      placeholder="Enter Status"
                      id="name"
                      name="status"
                      onChange={(e) => Name(e)}
                      required
                    />
                    <label for="name" className="form__label">
                      Status
                    </label>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div className="form__group">
                      <button className="btn btn--green" onClick={handleSubmit}>
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
      <Toolbar />
      <div className="medal-table" style={{ marginLeft: "20%" }}>
        <h2 className="heading-secondary">Details</h2>

        <table style={{ fontSize: "14px", fontFamily: "monospace" }}>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {disc?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name2}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
