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

  const [check, setCheck] = useState();

  // useEffect(() => {
  //   if (localStorage.getItem("Token") === null) {
  //     navigate("/Login");
  //   }
  // },[]);

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

                <h1>
                  <Link to="/" className="navigation2__link">
                    Home
                  </Link>
                </h1>

                <h1>
                  <Link to="/About" className="navigation2__link">
                    About Us
                  </Link>
                </h1>
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

              <Link to="./Main">
                <a href="#hh" className="btn btn--white btn--animated">
                  Discover our tours
                </a>
              </Link>
            </div>
          </div>

          <main>
            <section className="section-about" id="about">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Exiciting tours for adventurous people
                </h2>
              </div>
              <div className="row">
                <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    You're going to fall in love with nature
                  </h3>
                  <p className="paragraph">
                    Nature's enchanting allure is destined to captivate your
                    heart, as you immerse yourself in the beauty of its
                    landscapes, feeling the rhythmic pulse of life and finding
                    solace in the embrace of the great outdoors.
                  </p>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Live adventures like you never have
                  </h3>
                  <p className="paragraph">
                    Embark on adventures that redefine the boundaries of your
                    experience, transcending the ordinary and embracing the
                    extraordinary. In the dance of life, discover uncharted
                    realms and forge memories that resonate with the untamed
                    spirit of your journey.
                  </p>

                  <Link to="/Main" className="btn-text">
                    Learn more &rarr;
                  </Link>
                </div>
                <div className="col-1-of-2">
                  <div className="composition">
                    <img
                      sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                      src="./nat-1-large.jpg"
                      alt="Photo 1"
                      className="composition__photo composition__photo--p1"
                    />

                    <img
                      sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                      src="./nat-2-large.jpg"
                      alt="Photo 2"
                      className="composition__photo composition__photo--p2"
                    />
                    <img
                      sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                      src="./nat-3-large.jpg"
                      alt="Photo 3"
                      className="composition__photo composition__photo--p3"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-features" id="features">
              <div className="row">
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-world"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Explore the world
                    </h3>
                    <p className="feature-box__text">
                      In the vast tapestry of existence, individuals often find
                      themselves navigating diverse landscapes, each holding its
                      unique blend of challenges and opportunities.
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-compass"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Meet nature
                    </h3>
                    <p className="feature-box__text">
                      Embrace the serenity of nature's embrace, where the
                      symphony of rustling leaves and babbling brooks harmonizes
                      with the soul, creating a timeless connection to the world
                      around us.
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-map"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Find your way
                    </h3>
                    <p className="feature-box__text">
                      Discover your path amid the twists and turns of life,
                      where every step is a journey of self-discovery, and the
                      choices you make carve a unique trail through the tapestry
                      of your existence.
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-heart"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Live Healthier life
                    </h3>
                    <p className="feature-box__text">
                      Embrace a healthier life by nurturing your body and mind,
                      where conscious choices and balanced living become the
                      foundation for vitality and well-being in the intricate
                      dance of daily existence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-tours" id="tours">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Advertisement</h2>
              </div>
              <div className="row">
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--1"></div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">
                          The sea explore
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 day tours</li>
                          <li>Up to 30 people</li>
                          <li>2 tour guides</li>
                          <li>Sleep in cozy hotels</li>
                          <li>Difficulty: easy</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$123</p>
                        </div>
                        <a href="#popup" className="btn btn--white">
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--2"></div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">
                          The forest hiker
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 day tours</li>
                          <li>Up to 30 people</li>
                          <li>2 tour guides</li>
                          <li>Sleep in cozy hotels</li>
                          <li>Difficulty: easy</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$123</p>
                        </div>
                        <a href="#popup" className="btn btn--white">
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--3"></div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">
                          The snow adventurer
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 day tours</li>
                          <li>Up to 30 people</li>
                          <li>2 tour guides</li>
                          <li>Sleep in cozy hotels</li>
                          <li>Difficulty: easy</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-3">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$123</p>
                        </div>
                        <a href="#popup" className="btn btn--white">
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="u-center-text u-margin-top-big">
                <a href="#" className="btn btn--green">
                  Discover all tours
                </a>
              </div> */}
            </section>

            <section className="section-stories" id="stories">
              {/* <section className="section-book" id="login">
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
                            id="name"
                            required
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
                            id="email"
                            required
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

                        <div style={{ display: "flex" }}>
                          <div className="form__group">
                            <button className="btn btn--green" onClick={Click}>
                              Login &rarr;
                            </button>
                          </div>
                          <div
                            className="form__group"
                            style={{ marginLeft: "10%" }}
                          >
                            <Link to="./Register">
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
              </section>{" "} */}
              <br />
              <br />
              <br />
              <br />
              <div className="bg-video">
                <video className="bg-video__content" autoplay muted loop>
                  <source src="./video.mp4" type="video/mp4" />
                  <source src="./video.webm" type="video/webm" />
                  Your browser is not supported!
                </video>
              </div>
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  We make people genuienly happy
                </h2>
              </div>
              <div className="row">
                <div className="story">
                  <figure className="story__shape">
                    <img
                      // srcset="/nat-8-small.jpg 1000w, /nat-8.jpg 2000w"
                      // sizes="(max-width: 56.25em) 26vw, (max-width: 37.5em) 40vw, 1000px"
                      src="/nat-8.jpg"
                      alt="Person on a tour"
                      className="story__img"
                    />
                    <figcaption className="story__caption">
                      Mary Smith
                    </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      I had the best week ever with my family
                    </h3>
                    <p>
                      We explored new places, shared hearty laughs, and created
                      unforgettable memories together. From adventurous outdoor
                      activities to cozy evenings spent around the fireplace,
                      every moment was filled with warmth and joy. Our family
                      bond grew even stronger as we embraced each other's
                      company, and the happiness radiating from those days will
                      undoubtedly linger in our hearts for years to come.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="story">
                  <figure className="story__shape">
                    <img
                      // srcset="/nat-9-small.jpg 1000w, /nat-9.jpg 2000w"
                      // sizes="(max-width: 56.25em) 26vw, (max-width: 37.5em) 40vw, 1000px"
                      src="/nat-9.jpg"
                      alt="Person on a tour"
                      className="story__img"
                    />
                    <figcaption className="story__caption">
                      Roystan Dsouza
                    </figcaption>
                  </figure>
                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      WOW! My life is completely different now
                    </h3>
                    <p>
                      since I made that bold decision to pursue my passion for
                      photography. Capturing moments and telling stories through
                      my lens has not only transformed my career but also
                      brought a new sense of purpose and fulfillment to my daily
                      life. The thrill of exploring unique perspectives and the
                      joy of connecting with people through my images have
                      become the driving forces that fuel my creativity. Looking
                      back, I can't help but marvel at the incredible journey of
                      self-discovery and growth that unfolded from that pivotal
                      moment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="u-center-text u-margin-top-big">
                {/* <a href="#" className="btn-text">
                  Read all stories &rarr;
                </a> */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
