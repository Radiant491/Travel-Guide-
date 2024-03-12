import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/home.css";
import "../css/extra.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Toolbar } from "@mui/material";
import  Axios  from "axios";

const buttonContainerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
  };

export default function Home() {
  const nav = useNavigate();

  const uderID = useParams()

  const [name, setName] = useState([]);
  const [remove, setRemove] = useState([]);
  const [sel, setSel] = useState([]);
  const [select, setSelect] = useState("");
  const [close, setClose] = React.useState(false);
        


    useEffect(() => {
      const user=JSON.parse(localStorage.getItem("Token"))
      // console.log(user,654654654)
      Axios.get("http://localhost:7003/api/bookmark/view",{headers:{"Token":user}})
        .then((res) => {
          console.log("res", res.data);
          setName(res.data);
        
        })
        .catch((err) => {
          alert(err);
        });
    }, [remove]);
  
    const Del =async(item)=>{
      setSel(item)
      Axios.delete(`http://localhost:7003/api/bookmark/delete/${item._id}`)  
      .then((res)=>{
        console.log('res',res.data);
        setRemove((prev)=>!prev);
        // await handleClose2
      })
      .catch((err)=>{
        console.log(err);
      })
      // await handleClose2()
    }

    

    const del=()=>{
      localStorage.removeItem('Token')
      nav("/");
  
    }
  return (
    <>


     
      
      <main>
            <section className="section-tours" id="tours">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Bookmark Places</h2>
              </div>

                <div >
                  <div  className="gallery-container">
                      {name.map((item, index) => (
                          <div className="card-container"
                          >
                            <div className="col-1-of-3">
                              <div className="card">
                                <div className="card__side card__side--front">
                                  <div className="card__picture card__picture--3">
                                  <img src={`http://localhost:7003/uploads/travel/${item?.travel_id?.image?.[0]}`} alt="" />
                                  </div>
                                  <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">
                                      {item.travel_id?.name}
                                    </span>
                                  </h4>
                                  <div className="card__details">
                                    <ul>
                                      <li>{item?.travel_id?.country_id?.countrie}</li>
                                      <li>{item?.travel_id?.category_id?.status}</li>
                                 
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
                                    {/* <Link to={`/extra/${item._id}`}>
                                      <a  className="btn btn--white">
                                       More &rarr;
                                      </a>
                                    </Link> */}
                                   
                                      <Link onClick={()=>Del(item)}  className="btn btn--white">
                                       Remove &rarr;
                                      </Link>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>

            </section>

          </main>
            
       

        
    </>
  );
}




