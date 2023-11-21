import React from 'react'
import { Link } from 'react-router-dom'
import NavBar1 from '../NavBar/NavBar1'
import './Home1.css';
import Dubai from './Images/Dubai.png'
import { Button } from '@mui/material';
const Home1 = () => {
  return (
    <div >
      <NavBar1 />
      <div className='background-image' style={{ backgroundImage: `url(${Dubai})` }}>
      <center><h1>Explore Dubai</h1>
      <Link to="/visit">
        <br></br>
      <Button variant="contained" disableElevation >
              Visit
            </Button>
      </Link>
      </center>
      </div>
    </div>
  )
}

export default Home1;

