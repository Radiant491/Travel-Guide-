import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import './Admin/Log.css'
import { Toolbar } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  export default function RecipeReviewCard() {
    
    const meta = [{
   Ava:'MS',
      name:'Users',
    total: '43',
    email:'mahendrasinghshoni@gmail.com',
    address: 'Sr. No. 84/1, Tal Haveli, Maharashtra',
    dob :'7/7/1981',
    src: './images/transformers.gif',
    alt:'image 1'

},
{
   Ava:'IM',
   name:'Active',
   total: '18',
   email:'ironman@gmail.com',
   address: '10880 Malibu Point, 90265',
   dob:'29/5/1970',
   src: './images/man.gif',
   alt:'image 2'


},
{
  Ava:'SM',
name:'Location',
total: '78',
email:'spiderman@gmail.com',
address: '20 Ingram Street in Forest Hills, Queens',
dob:'10/08/2001',
src: './images/spi.gif',
alt:'image 3'
    }]
    const [value, setValue] = React.useState(2);
    return (
    <>
    <Toolbar/>

   d */}
    <div style={{justifyItems: 'center',display:'flex',gap:'10%',marginLeft:'20%'}}>
        {meta.map((k)=>{
          return(
            <>
            
   <Card sx={{ maxWidth: 400,}} style={{width:"100%"}}>
   <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     {k.Ava}
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          
        }
        title=  {k.name}
      />
    <CardMedia
        component="img"
        height="500"
        image={k.src}
        alt="Error"
      />
      <CardContent>
    <Typography variant="body2" color="text.secondary" >
    {/* <p><b>Total : {k.name}</b></p> */}
    <p><b>Total : {k.total}</b></p>
    {/* <p><b>Email : {k.email}</b></p>
    <p><b>Address : {k.address}</b></p> */}
    <p><b>Date : {k.dob}</b></p>
        </Typography><br />
        </CardContent>
      <CardActions disableSpacing>
      <div>
      {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      /> */}
    </div>
        {/* <IconButton aria-label="info">
          <InfoIcon/>
        </IconButton>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      </CardActions>
        </Card>
        </>
          )
        })}
        </div>
       
    </>
    
  );
}


