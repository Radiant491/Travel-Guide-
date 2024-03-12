import React, { useState, useEffect } from "react";
import "./css/icons.css";
import "./css/style2.css";
import "./css/home.css";


import { Link, useNavigate } from "react-router-dom";
import  Axios  from "axios";

export default function Home() {
  const nav = useNavigate();

  const [log, setLog] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const LoginChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  const HandleLogin = async (e) => {
    e.preventDefault();

    Axios.post("http://localhost:7003/api/register/login", log)
      .then((result) => {
        console.log(result.data)
        if (result.data.success == true) {
          console.log("login successful");
          console.log(result.data.authtoken);
          const auth = result.data.authtoken;
          localStorage.setItem("Token", JSON.stringify(auth));
          localStorage.setItem("Admin", JSON.stringify(result.data.admin));
          nav("/Main");
        } else {
          console.log(result.data.error);
          alert(result.data.error) 

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bo">
        <div className="bo2">
 <main>
            <section className="section-book" id="login">
              <div className="row">
                <div className="book">
                  
                  <div className="book__form">
                    <form action="#" className="form">
                      <div className="u-margin-bottom-mid">
                        <h2 className="heading-secondary">Login now</h2>
                      </div>
                      <div className="form__group">
                        <input
                          type="text"
                          className="form__input"
                          placeholder="Email address"
                          id="email"
                          name='email'
                          required
                          onChange={(e) => LoginChange(e)}
                        />
                        <label for="name" className="form__label">
                          Email
                        </label>
                       

                      </div>
                     
                      <div className="form__group">
                        <input
                          type="number"
                          className="form__input"
                          placeholder="Password"
                          id="password"
                          required
                          name='password'
                          onChange={(e) => LoginChange(e)}
                        />
                        <label for="email" className="form__label">
                          Password
                        </label>
                       

                      </div>

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

                      <div className="form__group u-margin-bottom-mid">
                        <div className="form__radio-group">
                          <Link to='/LoginAdmin'>
                            <label for="small" className="form__radio-label" >
                             
                              Are You a Admin?
                            </label>
                          </Link>
                        </div>
                      </div>
                      <div className="form__group">
        <span style={{ color: "red" }}>{error}</span>
      </div>
                      

                      <div style={{ display: "flex" }}>
                        <div className="form__group">
                          
                            <button className="btn btn--green" onClick={HandleLogin}>
                              Login &rarr;
                            </button>
                          
                        </div>
                        
                        <div
                          className="form__group"
                          style={{ marginLeft: "10%" }}
                        >
                         
                          <Link to='/Register'>
                            <button className="btn btn--green">
                              Register &rarr;
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
