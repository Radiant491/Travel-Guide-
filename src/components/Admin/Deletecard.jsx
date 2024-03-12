import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function MediaCard({handleClose2,select, setData2,disc,setDisc}) {

    const Del =async(item)=>{
      Axios.delete(`http://localhost:7003/api/country/delete/${select._id}`)  
      .then((res)=>{
        console.log('res',res.data);
        setData2((prev)=>!prev);
        // await handleClose2
      })
      .catch((err)=>{
        console.log(err);
      })
      await handleClose2();
    }
   
  return (
    <>
    <Card sx={style}>
        
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          do you want to delete  {select.country}?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
          <Button onClick={()=>Del(select)} variant='contained' color='error' >Delete</Button>
          <Button onClick={handleClose2} variant='contained' color='inherit'>Close</Button>
        </Typography>
      </CardContent>
      
    </Card>

    
</>
  );
}
