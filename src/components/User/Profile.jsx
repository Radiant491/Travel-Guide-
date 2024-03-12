import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/home.css";
import "../css/pro.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Card } from "@mui/material";

export default function UserProfile() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    image: null,
  });
  const [pro, setPro] = useState("");

  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Admin"));
    setUser(storedUser?._id || null);
  }, []);

  console.log(user, "profile");
  const [count, setCount] = useState(0);

  const [disc, setDisc] = useState([]);
  const [Cate, setCate] = useState();

  useEffect(() => {
    if (!user) {
      return;
    }

    Axios.get(`http://localhost:7003/api/register/singleadminview/${user}`)
      .then((res) => {
        console.log("res", res.data);
        setDisc(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [user]);

  // console.log(pro,)
  return (
    <>
      <div className="bo">
        <div className="bo2">
          <main>
            <section className="section-book" id="profile">
              <div className="row">
                <div className="book444">
                  <div className="book444__form">
                    <form action="#" className="form">
                      <div className="u-margin-bottom-mid">
                        <h2 className="heading-secondary">User Profile</h2>
                      </div>

                      <div className="user-profile-top">
                        
                        	<figure
	                          className="story__shape3"
	                          style={{ justifyContent: "center" }}
	                        >
	                          <img
	                            src={`http://localhost:7003/uploads/admin/${disc?.image}`}
	                            alt="User Profile"
	                            className="story__img2"
	                          />
	                          {/* <figcaption className="story__caption2">
	                            Roystan Dsouza
	                          </figcaption> */}

	                        </figure>
                        
                      </div>

                      <div style={{ marginLeft: "36%" }}>
                        <div className="form__group44">
                          <input
                            type="text"
                            className="form__input44"
                            id="name"
                            name="name"
                            required
                            value={disc?.name}
                          />
                          <label for="name" className="form__label">
                            Name
                          </label>
                        </div>

                        <div className="form__group44">
                          <input
                            type="text"
                            className="form__input44"
                            id="email"
                            name="email"
                            required
                            value={disc?.email}
                          />
                          <label for="name" className="form__label">
                            Email
                          </label>
                        </div>

						<div className="form__group44">
                          <input
                            type="number"
                            className="form__input44"
                            id="phone"
                            name="phone"
                            required
                            value={disc?.phone}
                          />
                          <label for="name" className="form__label">
                            Phone
                          </label>
                        </div>

						<div className="form__group44">
                          <input
                            type="text"
                            className="form__input44"
                            id="address"
                            name="address"
                            required
                            value={disc?.address}
                          />
                          <label for="name" className="form__label">
                            Address
                          </label>
                        </div>


                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
