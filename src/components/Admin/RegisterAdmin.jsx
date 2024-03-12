import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/home.css";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";


import { Link } from "react-router-dom";
import  Axios  from "axios";

export default function Home() {

  const [form, setForm] = useState();
  const [count, setCount] = useState("");
  const[role,setRole]=useState('')
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
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const Data1 = new FormData();
    Data1.append("name", form.name);
    Data1.append("password",form.password)
    Data1.append("email", form.email);
    Data1.append("phone", form.phone);

    Data1.append("image", form.image);

    Axios.post("http://localhost:7003/api/registeradmin/register", Data1, {
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

  return (
    <>
      <div className="bo">
        <div className="bo2">
          {/* <nav >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav> */}

{/* <nav style={{ display: "flex" }} className="head2">
            <div className="header__logo-box">
              <img
                src="./radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                alt="logo"
                className="header__logo"
              />
            </div>
           

            <h1 className="h12">
              <a href="#about" className="navigation2__link">
                <b>About Natours</b>
              </a>
            </h1>
           
            <h1 className="h12">
              <a href="#features" className="navigation2__link" >
                Your benifits
              </a>
            </h1>
            <h1 className="h12">
              <a href="#tours" className="navigation2__link">
                poular tours
              </a>
            </h1>
            <h1 className="h12">
              <a href="#stories" className="navigation2__link">
                Stories
              </a>
            </h1>
            <h1 className="h12">
              <a href="#login" className="navigation2__link">
                Login now
              </a>
            </h1>
          </nav> */}


          {/* <header className="header">
            <video
              src="./bgvid.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
            ></video>

            <div className="header__text-box">
              <h1 className="heading-primary">
                
                <span className="heading-primary--main">Outdoors</span>
                <span className="heading-primary--sub">is where life happens</span>
              </h1>

              <div class="title">
                <h1 className="h11">Outdoors</h1>
                <span className="heading-primary--sub">
                  is where life happens
                </span>
              </div>

              <Link to="./Extra">
                <a href="#hh" className="btn btn--white btn--animated">
                  Discover our tours
                </a>
              </Link>
            </div>
          </header> */}

          <main>

            <section className="section-book" id="login">
              <div className="row">
                <div className="book">
                  
                  <div className="book__form">
                    <form action="#" className="form">
                      <div className="u-margin-bottom-mid">
                        <h2 className="heading-secondary">Register</h2>
                      </div>
                      <div className="form__group">
                        <input
                          type="text"
                          className="form__input"
                          placeholder="User Name"
                          id="name"
                          required
                          name="name"
                          onChange={(e)=>Name(e)}
                        />
                        <label for="name" className="form__label">
                          User Name
                        </label>
                      </div>

                      <div className="form__group">
                        <input
                          type="email"
                          className="form__input"
                          placeholder="Email Address"
                          id="email"
                          name="email"
                          required
                          onChange={(e)=>Name(e)}

                        />
                        <label for="email" className="form__label">
                          Email
                        </label>
                      </div>


                      <div className="form__group">
                        <input
                          type="number"
                          className="form__input"
                          placeholder="Phone Number"
                          id="phone"
                          name="phone"
                          required
                          onChange={(e)=>Name(e)}

                        />
                        <label for="phone" className="form__label">
                          Phone
                        </label>
                      </div>

                      <div className="form__group">
                        <input
                          type="password"
                          className="form__input"
                          placeholder="Password"
                          id="password"
                          name="password"
                          required
                          onChange={(e)=>Name(e)}

                        />
                        <label for="phone" className="form__label">
                          Password
                        </label>
                      </div>

                      <div className="form__group">
                        <input
                          type="file"
                          className="form__input"
                          placeholder="Image"
                          id="image"
                          name="image"
                          required
                          onChange={(e)=>Image(e)}

                        />
                        <label for="phone" className="form__label">
                          Password
                        </label>
                      </div>
{/* 
                      <div className="form__group">
                        <select
                          className="form__input"
                          id="role"
                          name="role"
                          required
                          onChange={(e)=>handleRole(e)}
                          value={role}

                        >  <option value="ddmin">0</option>
                           <option value="user">1</option>
                        </select>
                        <label for="phone" className="form__label">
                          Role
                        </label>
                      </div> */}

                      <div className="form__group u-margin-bottom-mid">
                        <div className="form__radio-group">
                          <input
                            type="radio"
                            className="form__radio-input"
                            id="small"
                            name="size"
                          />
                          <label for="small" className="form__radio-label">
                            <span className="form__radio-button"></span>
                            Remember me
                          </label>
                        </div>

                        
                      </div>

                      <div style={{ display: "flex" }}>
                        <div className="form__group">
                          <button className="btn btn--green"
                          onClick={handleSubmit}>
                             Submit &rarr;
                          </button>
                        </div>
                        <div
                          className="form__group"
                          style={{ marginLeft: "10%" }}
                        >
                          
                             <Link to='/LoginAdmin'>
                                <button className="btn btn--green">
                                Login &rarr;
                                </button>
                             </Link>
                          
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
