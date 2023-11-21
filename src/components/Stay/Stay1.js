import React from 'react';
import Tour4 from './Images4/Tour4.png';
import Tour5 from './Images4/Tour5.png';
import Tour6 from './Images4/Tour6.png';
import './Stay1.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Stay1 = () => {
  return (
    <div className="t5">
      <form className="t6">
        <center>
          <img src={Tour4} alt="no photo" height="200px" width="200px" /><br></br>
          <h4>Rixos Hotel</h4>
          <h4>Rating: 4.5/5</h4>
         <h4> price: $80</h4>
         <Link to="/visit">
         <Button variant="contained" disableElevation >
              Book Now
            </Button>
            </Link>
        </center>
      </form>
      <form className="t7">
        <center>
          <img src={Tour6} alt="no photo" height="200px" width="200px" /><br></br>
         
          <h4>Nikki Beach Resort</h4>
          <h4>Rating: 5/5</h4>
         <h4> price: $100</h4>
         <Link to="/visit">
         <Button variant="contained" disableElevation >
              Book Now
            </Button>
            </Link>
        </center>
      </form>
      <form className="t8">
        <center>
          <img src={Tour5} alt="no photo" height="200px" width="200px" /><br></br>
          <h4>JW Marriott Hotel</h4>
          <h4>Rating: 4.5/5</h4>
         <h4> price: $90</h4>
         <Link to="/visit">
         <Button variant="contained" disableElevation >
              Book Now
            </Button>
            </Link>
        </center>
      </form>
     
    </div>
  );
};

export default Stay1;
