import React, { useState, useEffect } from "react";
import "./css/icons.css";
import "./css/style2.css";
import "./css/home.css";
import "./css/extra.css";

import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [odd, setOdd] = useState();
  const Click = () => {
    navigate("./Main");
  };

  return (
    <>
      <div className="">
        <div style={{ backgroundColor: "#f7f7f7", overflow: "hidden" }}>
          <div className="header">
            <div className="video-background">
              <video autoPlay loop muted style={{ backgroundSize: "fit" }}>
                <source src="/mountain.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <nav className="navbar">
              <ul>
                <li>
                  <div className="header__logo-box">
                    <Link to="./Dashboard">
                      <img
                        src="./radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                        alt="logo"
                        className="header__logo"
                      />
                    </Link>
                  </div>
                </li>
               <>
                  <h1>
                    <Link to="/" className="navigation2__link">
                    Home
                    </Link>
                  </h1>
                </>

                {/* <h1>
                  <a href="#features" className="navigation2__link">
                    Your benifits
                  </a>
                </h1>

                <Link to="/CountryUp">
                  <h1>
                    <a href="#tours" className="navigation2__link">
                      poular tours
                    </a>
                  </h1>
                </Link>
                <Link to="AustraliaAdmin">
                  <h1>
                    <a href="#stories" className="navigation2__link">
                      Stories
                    </a>
                  </h1>
                </Link> */}
                
                <h1>
                  <Link
                    to="./Login"
                    href="#login"
                    className="navigation2__link"
                  >
                    Login now
                  </Link>
                </h1>
              </ul>
            </nav>

            <div className="header__text-box">
              <div class="title">
                <h1 className="h11">Outdoors</h1>
                <span
                  className="heading-primary--sub"
                  style={{ marginTop: "8%" }}
                >
                  is where life happens
                </span>
              </div>

              <Link to="./Login">
                <a href="#hh" className="btn btn--white btn--animated">
                  Discover our tours
                </a>
              </Link>
            </div>
          </div>

          <main>
            <section className="section-stories" id="stories">
              <div className="bg-video">
                <video className="bg-video__content" autoplay muted loop>
                  <source src="./video.mp4" type="video/mp4" />
                  <source src="./video.webm" type="video/webm" />
                  Your browser is not supported!
                </video>
              </div>
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">About Us</h2>
              </div>
              <div className="row">
                <div className="story">
                  <figure className="story__shape">
                    <img
                      srcset="./nat-8-small.jpg 1000w, ./nat-8.jpg 2000w"
                      sizes="(max-width: 56.25em) 26vw, (max-width: 37.5em) 40vw, 1000px"
                      src="./nat-8.jpg"
                      alt="Person on a tour"
                      className="story__img"
                    />
                    <figcaption className="story__caption">
                      Mary Smith
                    </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Our Story
                    </h3>
                    <p>
                      Welcome to [Your Travel Guide Website], where the journey
                      is as important as the destination. Founded [Year], we are
                      passionate about unlocking the world's wonders and sharing
                      the joy of exploration with fellow travelers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="story">
                  <figure className="story__shape">
                    <img
                      srcset="./nat-8-small.jpg 1000w, ./nat-8.jpg 2000w"
                      sizes="(max-width: 56.25em) 26vw, (max-width: 37.5em) 40vw, 1000px"
                      src="./nat-8.jpg"
                      alt="Person on a tour"
                      className="story__img"
                    />
                    <figcaption className="story__caption">
                      Mary Smith
                    </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Our Mission
                    </h3>
                    <p>
                      At [Your Travel Guide Website], our mission is to inspire
                      and empower you to embark on unforgettable journeys. We
                      believe that travel is not just about visiting new places
                      but about connecting with cultures, discovering hidden
                      gems, and creating memories that last a lifetime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="story">
                  <figure className="story__shape">
                    <img
                      srcset="./nat-8-small.jpg 1000w, ./nat-8.jpg 2000w"
                      sizes="(max-width: 56.25em) 26vw, (max-width: 37.5em) 40vw, 1000px"
                      src="./nat-8.jpg"
                      alt="Person on a tour"
                      className="story__img"
                    />
                    <figcaption className="story__caption">
                      Mary Smith
                    </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      What Sets Us Apart
                    </h3>
                    <p>
                      1. Authentic Experiences We go beyond the tourist
                      hotspots, curating experiences that capture the true
                      essence of a destination. Whether it's savoring local
                      delicacies, participating in cultural festivals, or
                      exploring off-the-beaten-path treasures, we strive to
                      bring you authentic adventures. <br /> 2. Expert Insights Our
                      team of seasoned travelers and local experts work
                      tirelessly to provide you with up-to-date information,
                      insider tips, and recommendations. We want you to feel
                      confident and well-prepared as you embark on your journey. <br />
                      3. Community Connection Travel is a shared experience, and
                      our community is at the heart of everything we do. Join a
                      community of like-minded explorers, share your stories,
                      and gain valuable insights from fellow travelers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="story">
                  <figure className="story__shape">
                    <img
                      srcset="./nat-8-small.jpg 1000w, ./nat-8.jpg 2000w"
                      sizes="(max-width: 56.25em) 26vw, (max-width: 37.5em) 40vw, 1000px"
                      src="./nat-8.jpg"
                      alt="Person on a tour"
                      className="story__img"
                    />
                    <figcaption className="story__caption">
                      Mary Smith
                    </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Get in Touch
                    </h3>
                    <p>
                      We love hearing from our community! If you have any
                      questions, suggestions, or just want to share your latest
                      adventure, don't hesitate to contact us. Thank you for
                      choosing [Your Travel Guide Website] as your companion in
                      exploration. Let's embark on this journey together! Happy
                      Travels, [Your Name] Founder, [Your Travel Guide Website]
                    </p>
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
