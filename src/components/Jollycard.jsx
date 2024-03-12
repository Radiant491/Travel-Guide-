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
import './Log.css'
import img from '../ms.png'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  export default function RecipeReviewCard() {
    
    const meta = [{
   Ava:'MS',
      name:'Mahendra Singh Dhoni',
    phone: '022-67254873',
    email:'mahendrasinghshoni@gmail.com',
    address: 'Sr. No. 84/1, Tal Haveli, Maharashtra',
    dob :'7/7/1981',
    src: './images/transformers.gif',
    alt:'image 1'

},
{
   Ava:'IM',
   name:'Iron Man',
   phone: '212-970-4133',
   email:'ironman@gmail.com',
   address: '10880 Malibu Point, 90265',
   dob:'29/5/1970',
   src: './images/man.gif',
   alt:'image 2'


},
{
  Ava:'SM',
name:'Spider Man',
phone: '(407) 224-1783',
email:'spiderman@gmail.com',
address: '20 Ingram Street in Forest Hills, Queens',
dob:'10/08/2001',
src: './images/spi.gif',
alt:'image 3'
    }]
    const [value, setValue] = React.useState(2);
    return (
    <>
    <div style={{justifyItems: 'center',display:'flex',gap:'58px'}}>
        {meta.map((k)=>{
          return(
            <>
            
   <Card sx={{ maxWidth: 400,}} >
   <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {k.Ava}
          </Avatar>
        }
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
        alt="lg tv"
      />
      <CardContent>
    <Typography variant="body2" color="text.secondary" >
    <p><b>Name : {k.name}</b></p>
    <p><b>Phone : {k.phone}</b></p>
    <p><b>Email : {k.email}</b></p>
    <p><b>Address : {k.address}</b></p>
    <p><b>DOB : {k.dob}</b></p>
        </Typography><br />
        </CardContent>
      <CardActions disableSpacing>
      <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
        <IconButton aria-label="info">
          <InfoIcon/>
        </IconButton>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
        </Card>
        </>
          )
        })}
        </div>
        <div>
        <Button variant='outlined' style={{background:'yellow'}}><Link to='/'>Back</Link></Button>
        </div>
    </>
    
  );
}


