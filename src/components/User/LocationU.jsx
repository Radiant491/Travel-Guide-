import React, { useState, useEffect } from "react";
import Axios from "axios";
import { MenuItem, Select, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import "../css/icons.css";
// import "../css/style2.css";
// import "../css/home.css";
// import "../css/extra.css";

export default function Home() {
  const navigate = useNavigate();
  const [disc, setDisc] = useState([]);
  const [getcate, setGetCate] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Token"));
    Axios.get("http://localhost:7003/api/tour/view", {
      headers: { Token: user },
    })
      .then((res) => {
        console.log("res", res.data);
        setDisc(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:7003/api/country/view")
      .then((res) => {
        console.log("res", res.data);
        setGetCate(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  // };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <main>
        <section className="section-tours" id="tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>
          <div
            className="search-bar"
            style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
          >
            <label htmlFor="category">
              <h3>Category:</h3>
            </label>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: "20%", // Adjust the width as needed
                border: "2px solid #ccc",
                borderRadius: "10px",
                padding: "8px",
                boxSizing: "border-box",
                height: "50%",
              }}
              size="small"
            >
              <MenuItem value={""}>All</MenuItem>

              {getcate?.map((item) => {
                return <MenuItem value={item?._id}>{item.countrie}</MenuItem>;
              })}
            </Select>
            <input
              style={{
                width: "20%",
                border: "2px solid #ccc",
                borderRadius: "10px",
                padding: "8px",
                marginLeft: "50%",
              }}
              type="text"
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>

          {disc.filter((item) => {
            return (
              (search.toLowerCase() === "" ||
                item.name.toLowerCase().includes(search)) &&
              (selectedCategory === "" ||
                item?.country_id?._id === selectedCategory)
            );
          }).length === 0 ? (
            <p style={{ alignItems: "center" }}>"No result found"</p>
          ) : (
            <div>
              <div className="gallery-container">
                {disc
                  .filter(
                    (item) =>
                    (  !selectedCategory ||
                      item?.country_id?._id == selectedCategory)&&
                     ( search.toLowerCase() === "" ||
                item.name.toLowerCase().includes(search))
                  )
                  .map((item, index) => (
                    // <React.Fragment key={index}>
                    <>
                      {/* <Toolbar /> */}
                      <div
                        className="card-container"
                        style={{ overflow: "hidden" }}
                      >
                        <div className="col-1-of-3">
                          <div className="card">
                            <div className="card__side card__side--front">
                              <div className="card__picture card__picture--3">
                                <img
                                  src={`http://localhost:7003/uploads/travel/${item?.image?.[0]}`}
                                  alt=""
                                />
                              </div>
                              <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                  {item.name}
                                </span>
                              </h4>
                              <div className="card__details">
                                <ul>
                                  <li>Location : {item?.location}</li>
                                  <li>Country : {item.country_id?.countrie}</li>
                                  <li>Status : {item?.category_id?.status}</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                              <div className="card__cta">
                                <div className="card__price-box">
                                  <img
                                    src="./nat-8.jpg"
                                    alt=""
                                    style={{ width: "100%" }}
                                  />
                                </div>
                                <Link to={`/extra/${item._id}`}>
                                  <a className="btn btn--white">More &rarr;</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                    // </React.Fragment>
                  ))}
              </div>
            </div>
          )}
          {/* <div className="u-center-text u-margin-top-big">
            <a href="#" className="btn btn--green">
              Discover all tours
            </a>
          </div> */}
        </section>
      </main>
    </>
  );
}
