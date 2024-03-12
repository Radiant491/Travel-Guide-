import React, { useState, useEffect } from "react";
import "../css/icons.css";
import "../css/style2.css";
import "../css/admin.css";
import "./Log.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Card, TextField, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Modal from "@mui/material/Modal";
import Deletecard from "./Deletecard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

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
 

  const [disc, setDisc] = useState([]);
  const [Cate, setCate] = useState();
  useEffect(() => {
    Axios.get("http://localhost:7003/api/register/view")
      .then((res) => {
        console.log("res", res.data);
        setDisc(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleCategory = (e) => {
    setCate(e.target.value);
  };

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  // Delete
  const [select, setSelect] = useState("");
  const [close, setClose] = React.useState(false);

  const handleOpen2 = (i) => {
    setClose(true);
    setSelect(i);
  };

  const handleClose2 = () => setClose(false);

  const [selectedImage, setSelectedImage] = useState(null);
 

  const Del =async(item)=>{
    Axios.delete(`http://localhost:7003/api/tour/delete/${select._id}`)  
    .then((res)=>{
      console.log('res',res.data);
      selectedImage((prev)=>!prev);
      // await handleClose2
    })
    .catch((err)=>{
      console.log(err);
    })
    await handleClose2();
  }

  const [select3, setSelect3] = useState("");
  const [close2, setClose2] = React.useState(false);

  const handleOpen3 = (i) => {
    setClose2(true);
    setSelect3(i);
  };
  const handleClose3 = () => setClose2(false);

  const [openDetailDialog, setOpenDetailDialog] = React.useState(false);
const [selectedDetail, setSelectedDetail] = useState(null);
const handleOpenDetailDialog = (item) => {
  setSelectedDetail(item);
  setOpenDetailDialog(true);
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
};

const handleCloseDetailDialog = () => {
  setOpenDetailDialog(false);
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
};

  return (
    <>

      <Toolbar />
      <div className="medal-table" style={{marginLeft:'20%'}}>
        <h2 className="heading-secondary">Details</h2>

        <table style={{ fontSize: "14px", fontFamily: "monospace" }}>
          <thead>
            <tr>
            <th>Sl.No</th>
             <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              {/* <th>Discription</th> */}
              {/* <th>Price</th> */}
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {disc?.map((item, index) => (
              <>
                <tr key={index}>
                  <td>{index + 1}</td> <td>
                      <img
                        src={`http://localhost:7003/uploads/admin/${item?.image}`}
                        className="country-logo"
                        style={{ borderRadius: '50%',
                        overflow: 'hidden',
                       width: "60%",height:'60px'}}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>   
                    <td>{item?.address}</td>
                  {/* <td ><textarea readOnly >{item.discription}</textarea></td> */}
                  {/* <td>{item.price}</td> */}
                  <td>{item.phone}</td>
                  <td>{item.date}</td>
                 
                  
                  {/* <td>
                  <Button
  color="info"
  onClick={() => handleOpenDetailDialog(item)}
  style={{ marginRight: "10px" }}
>
  Show Details
</Button>

                    <Button
                      color="primary"
                      onClick={() => handleOpen3(item)}
                      style={{ marginRight: "10px" }}
                    >
                      <EditIcon />
                    </Button>

                    <Button color="error" onClick={() => handleOpen2(item)}>
                      <DeleteForeverIcon />
                    </Button>
                  </td> */}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog
  open={openDetailDialog}
  onClose={handleCloseDetailDialog}
  maxWidth="sm"
  fullWidth
  style={{ maxHeight: "100%", overflow: 'hidden' }}
>
  <DialogTitle>Additional Details</DialogTitle>
  <DialogContent>
    <img
      src={`http://localhost:7003/uploads/travel/${selectedDetail?.image}`}
      className="country-logo"
      style={{ marginLeft: "2px", width: "90%",height:"40%",objectFit: "cover"}}
    />
    <div>
      <strong>Country:</strong> {selectedDetail?.country}
      </div>
     <div> <strong>name:</strong> {selectedDetail?.name}</div>
    <div>  <strong>status:</strong> {selectedDetail?.status}</div>
    <div><strong>Discription:</strong>{selectedDetail?.discription}</div>
   
    <div>
      <strong>Location:</strong> {selectedDetail?.name}
    </div>
    {/* Add more details as needed */}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseDetailDialog}>Close</Button>
  </DialogActions>
</Dialog>




<Dialog open={close} onClose={handleClose2}>
  <DialogTitle>Delete Item</DialogTitle>
  <DialogContent>
    <div>
      Are you sure you want to delete the item {select?.country}?
    </div>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose2}>Cancel</Button>
    <Button onClick={() => Del()} style={{color:'red'}}>Delete</Button>
  </DialogActions>
</Dialog>


    </>
  );
}
