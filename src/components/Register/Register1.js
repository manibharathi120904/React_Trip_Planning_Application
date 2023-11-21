import React from 'react';
import './Register1.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import NavBar1 from '../NavBar/NavBar1';
function Register1() {
  return (
    <div>
      <NavBar1 />
      <center>
        <h1 className='four'>Registration Page</h1><br></br>
        <form className='five'>
          <input type="text" placeholder="Enter Your Name" required></input><br></br><br></br>
          <input type="text" placeholder="Enter Your Email" required></input><br></br><br></br>
          <input type="password" placeholder="Enter Your Password" required></input><br></br><br></br>
          <input type="password" placeholder="Re-Enter Password" required></input><br></br><br></br>
          <Link to="/login">
          <Button variant="contained" disableElevation>
              Register
            </Button>
          </Link>
        </form>
      </center>
    </div>
  );
}

export default Register1;




