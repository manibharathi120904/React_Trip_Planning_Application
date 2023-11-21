import React from 'react';
import Tour1 from './Images3/Tour1.png';
import Tour2 from './Images3/Tour2.png';
import Tour3 from './Images3/Tour3.png';
import './TouristSpot1.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const TouristSpot1 = () => {
  return (
    <div className="t1">
      <form className="t2">
        <center>
          <img src={Tour1} alt="no photo" height="200px" width="200px" /><br></br>
          <h4>Burj khalifa</h4>
          <h4>Tall Tower</h4>
         <h4> price: $250</h4>
         <Link to="/visit">
         <Button variant="contained" disableElevation >
              Book Now
            </Button>
            </Link>
        </center>
      </form>
      <form className="t3">
        <center>
          <img src={Tour2} alt="no photo" height="200px" width="200px" /><br></br>
         
          <h4>Burj Al Arab</h4>
          <h4>Architectural Building</h4>
         <h4> price: $200</h4>
         <Link to="/visit">
         <Button variant="contained" disableElevation >
              Book Now
            </Button>
            </Link>
        </center>
      </form>
      <form className="t4">
        <center>
          <img src={Tour3} alt="no photo" height="200px" width="200px" /><br></br>
          <h4>The Dubai Fountain</h4>
          <h4>Fountain</h4>
         <h4> price: $150</h4>
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

export default TouristSpot1;
