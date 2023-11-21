import React from 'react';
import './Login1.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import NavBar1 from '../NavBar/NavBar1';
function Login1(){
    return(
    <div className="first">
      <NavBar1 />
        <center>
          <h1 className="second">Login Page</h1>
        </center>
        <br></br>
        <form className="third">
          <center>
            
            <input type="email" placeholder="Enter your Email"></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter the Password"></input>
            <br></br>
            <br></br>
            <Link to="/">
            <Button variant="contained" disableElevation>
              Login
            </Button>
            </Link>
          </center>
        </form>
        <br></br>
        <br></br>
        <center>
          <label className='eight'>
            Don't Have An Account?{' '}
            <Link to="/register">
              <Button variant="contained" disableElevation >
                Register
              </Button>
            </Link>
          </label>
        </center>
      </div>
    );
    
}
export default Login1;