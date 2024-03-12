import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/home.css";
import "../css/extra.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Toolbar,MenuItem, Select, } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


export default function Home() {
  const navigate = useNavigate();
  const [odd, setOdd] = useState();
  const Click = () => {
    navigate("./Main");
  };

  const [disc, setDisc] = useState([]);
  const [Cate, setCate] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [getcate,setGetCate]=useState()
  const [selectedCategory, setSelectedCategory] = useState("");



  useEffect(() => {
    Axios.get("http://localhost:7003/api/hotel/view")
      .then((res) => {
        console.log("res", res.data);
        setDisc(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  useEffect(()=>{
    Axios.get('http://localhost:7003/api/country/view')
    .then((res)=>{
        console.log('res',res.data);
        setGetCate(res.data)
    })
    .catch((err)=>{
        alert(err);
    });
},[])

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const [select, setSelect] = useState("");
  const [close, setClose] = React.useState(false);

  const handleOpen2 = (i) => {
    setClose(true);
    setSelect(i);
  };

  const handleClose2 = () => setClose(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  

  return (
    <>
      <div className="">
        <div className="">
       

          <main>
            <section className="section-tours" id="tours">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Most popular tours</h2>
              </div>
              <div className="search-bar" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
              <label htmlFor="category">Select Category:</label>
                <Select  
                value={selectedCategory}
                  onChange={handleCategoryChange}
                  style={{
                 
                  width: '20%', // Adjust the width as needed
                  border: '2px solid #ccc',
                  borderRadius: '10px',
                  padding: '8px',
                  boxSizing: 'border-box', 
                  height: '50%'
                }}>{getcate?.map((item) => {
                  return (
                    <MenuItem value={item._id}>{item.countrie}</MenuItem>
                  );
                })}</Select>
                <input
                 style={{
                  width: '20%', // Adjust the width as needed
                  border: '2px solid #ccc',
                  borderRadius: '10px',
                  padding: '8px',
                  marginLeft:'50%'
                }}
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <button className="search-button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <Toolbar/>

              {disc
            .filter((item) => {
              const matchesSearch = searchValue.toLowerCase() === "" || item.name.toLowerCase().includes(searchValue);
              const matchesCategory = selectedCategory === "" || item?.country_id?.countrie === selectedCategory;
              return matchesSearch && matchesCategory;
            })
            .length === 0 ? (
              <p style={{ alignItems: "center" }}>No result found</p>
            ) : ( 
                <div >
                  <div  className="gallery-container">
                      {disc.map((item, index) => (
                          <div className="card-container"
                          >
                            <div className="col-1-of-3">
                              <div className="card">
                                <div className="card__side card__side--front">
                                  <div className="card__picture card__picture--3">
                                    <img src={`http://localhost:7003/uploads/travel/${item?.image?.[0]}`} alt="" />
                                  </div>
                                  <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">
                                      {item.hotel}
                                    </span>
                                  </h4>
                                  <div className="card__details">
                                    <ul>
                                      <li>{item.country_id?.countrie}</li>
                                      <li>{item.location}</li>
                                      <li>{item?.category_id?.status}</li>
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
                                    <Link to={`/HotelExtra/${item._id}`} className="btn btn--white">
                                     More &rarr;
                                    </Link >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              )}

              <div className="u-center-text u-margin-top-big">
                <a href="#" className="btn btn--green">
                  Discover all tours
                </a>
              </div>
            </section>

            
          </main>
        </div>
      </div>
    </>
  );
}
