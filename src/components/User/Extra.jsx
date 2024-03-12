import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/home.css";
import "../css/extra.css";
import Star from "../Admin/Star";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

export default function Extra() {
  const nav = useNavigate();

  const params = useParams();
  let userID = params.id;
  const [name, setName] = useState([]);
  const [Cate, setCate] = useState();
  const [from, setFrom] = useState([]);
  const [count, setCount] = useState("");
  const [user, setUser] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [remove,setRemove]=useState()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Token")));
  }, []);

  const Name = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setFrom({ ...from, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value) => {
    setFrom({ ...from, rating: value });
  };

  // console.log("Name ID:", from._id);

  useEffect(() => {
    Axios.get(`http://localhost:7003/api/tour/singleview/${userID}`)
      .then((res) => {
        console.log("res", res.data);
        setName(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [remove]);
console.log(name._id,"name")
  const handleSubmit = async () => {
    // e.preventDefault();
    console.log(from);
    const book={
      userID: name._id,
      rating:from.rating,
      reviews:from.reviews
    }
   
    Axios.post("http://localhost:7003/api/review/insert",book, 
     {
      headers: { "Token": user }
    })
    .then((result) => {
      console.log(result.data);
      setCount((prev) => prev + 1);
      setIsBookmarked(!isBookmarked); // Toggle bookmark status

    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:7003/api/review/view")
      .then((result) => {
        console.log("result", result.data);
        const rate = result.data.filter(item=>item.travel_id?._id ===userID)
        setCate(rate);
      })
      .catch((err) => {
        alert(err);
      });
  }, [count]);
  console.log(Cate,"cte")

  const Bookmark = async (e) => {
    Axios.post("http://localhost:7003/api/bookmark/insert", {
      travel: name._id
    }, { headers: { "Token": user } })
      .then((result) => {
        console.log(result.data);
        setCount((prev) => prev + 1);
        setIsBookmarked(!isBookmarked); // Toggle bookmark status
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const del=()=>{
    localStorage.removeItem('Token')
    nav("/");

  }

  const Del =async()=>{
    setIsBookmarked(!isBookmarked); // Toggle bookmark status

    // setSel(item)
    Axios.delete(`http://localhost:7003/api/bookmark/Remove/${userID}`)  
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

console.log(isBookmarked,"isBookmarked")
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="header">
        <div className="video-background">
          <img
            src={`http://localhost:7003/uploads/travel/${name?.image?.[0]}`}
            alt=""
            style={{ height: "100%" }}
          />
        </div>

        <nav className="navbar">
              <ul>
                <li>
                  <div className="header__logo-box">
                    <Link to="/Main">
                      <img
                        src="/radiant-solutions-logo-1C6764C0D0-seeklogo.com.png"
                        alt="logo"
                        className="header__logo"
                      />
                    </Link>
                  </div>
                </li>
                <h1>
                    <Link to="/Main" className="navigation2__link">
                    Home
                    </Link>
                  </h1>

                  <h1>
                    <Link to="/Homie2" className="navigation2__link">
                    Discover
                    </Link>
                  </h1>

                  <h1>
                    <Link to="/Bookmark" className="navigation2__link">
                    Bookmark
                    </Link>
                  </h1>
                  <h1>
                    <Link to="/About" className="navigation2__link">
                    About Us
                    </Link>
                  </h1>
                <h1>
                <Link onClick={del} className="navigation2__link">
                      <b> Logout</b>
                    </Link>
                </h1>
              </ul>
            </nav>

        <div className="header__text-box">
          <div class="title">
            <h1 className="h11">{name.name}</h1>
            <span className="heading-primary--sub">{name.country_id?.countrie}</span>
          </div>

          <Link to="./Login">
            <a href="#hh" className="btn btn--white btn--animated">
              Discover our tours
            </a>
          </Link>
        </div>
      </div>
      <div style={{ marginLeft: "80%", }}>
 
    {isBookmarked ? (
       <Button onClick={Bookmark} >
      <BookmarkAddOutlinedIcon  style={{fontSize:'500%'}}/>
      </Button>
    ) : ( 
      <Button onClick={Del}><BookmarkAddedIcon style={{ fontSize: '500%' }} /></Button>
    )}
  
</div>

      <section
        className="section-stories"
        id="about"
        style={{ overflow: "hidden" }}
      >
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Details</h2>
        </div>
        <div className="row">
        <div className="col-1-of-2">
                <div style={{display:"flex"}}>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                      Name : 
                    </h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      {name.name}
                    </h3>
                </div>

                <div style={{display:"flex"}}>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                      location :
                    </h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      {name.location} , {name.country_id?.countrie}
                    </h3>
                </div>

                <div style={{display:"flex"}}>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                      Status :
                    </h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                    {name.category_id?.status} 
                    </h3>
                </div>

                <div style={{display:"flex"}}>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                      Discription:
                    </h3> <br />
                    <h3 >
                    {name.discription}
                    </h3>
                </div>
                 
                  
                </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                src={`http://localhost:7003/uploads/travel/${name?.image?.[0]}`}
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
              />

              <img
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                src={`http://localhost:7003/uploads/travel/${name?.image?.[1]}`}
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                src={`http://localhost:7003/uploads/travel/${name?.image?.[2]}`}
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
              />
              <img
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                src={`http://localhost:7003/uploads/travel/${name?.image?.[3]}`}
                alt="Photo 4"
                className="composition__photo composition__photo--p4"
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40%" }}>
          <div className="bg-video">
            <video className="bg-video__content" autoplay muted loop>
              <source src="./video.mp4" type="video/mp4" />
              <source src="./video.webm" type="video/webm" />
              Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Reviews</h2>

          </div>
          {Cate?.map((item, index) => {
            return (
              <div className="row">
                <div className="story">
                  <figure className="story__shape">
                    <img
                      // srcset="./nat-8-small.jpg 1000w, ./nat-8.jpg 2000w"
                      // sizes="(max-width: 56.25em) 26vw, (max-width: 37.5em) 40vw, 1000px"
                    
                       src={`http://localhost:7003/uploads/admin/${item?.admin_id?.image}`}
                      alt="Person on a tour"
                      className="story__img"
                    />
                    <figcaption className="story__caption">
                     {item?.admin_id?.name}
                    </figcaption>
                  </figure>
                  <div className="story__text">
                    {item?.date}
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      {/* {item?.reviews} */}
                    </h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      <div key={index}>
                        <p>Rating {index + 1}:</p>
                        <Rating rating={item?.rating} />
                      </div>
                    </h3>
                    <p>{item?.reviews}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="u-center-text u-margin-top-big">
            <div className="form__group" style={{ marginLeft: "-60%" }}>
              <Star onRatingChange={handleRatingChange} name="rate" />
              <label className="form__label">Rating</label>
            </div>
            <div className="form__group" style={{ marginLeft: "10%" }}>
              <textarea
                id="longText"
                className="form__input"
                placeholder="Enter Review"
                name="reviews"
                type="text"
                onChange={(e) => Name(e)}
                required
              ></textarea>
              <label for="name" className="form__label">
                Review
              </label>
            </div>
          </div>
          <div className="form__group">
            <button className="btn btn--green" onClick={handleSubmit}>
              Add &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
const Rating = ({ rating }) => {
  const maxStars = 5;

  const stars = Array.from({ length: maxStars }, (_, index) => (
    <span key={index}>
      {index + 1 <= rating ? (
        <StarIcon style={{ color: "gold", fontSize: "200%" }} />
      ) : (
        <StarOutlineIcon style={{ fontSize: "200%" }} />
      )}
    </span>
  ));

  return <div>{stars}</div>;
};
