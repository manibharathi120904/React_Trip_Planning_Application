
import React, { useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login1.css';
import NavBar1 from '../NavBar/NavBar1';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth-context';

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/users', {
        params: {
          email,
        },
      });

      if (response.status === 200 && response.data.length > 0) {
        const user = response.data[0];
        if (user.password === password) {
          alert('Login successful!');
          navigate('/');
          auth.login(user);
        } else {
          alert('Incorrect password. Please try again.');
        }
      } else {
        alert('User not found. Redirecting to registration page.');
        navigate('/register');
      }
    } catch (error) {
      console.error('Error during login:', error);

      if (error.response && error.response.status === 404) {
        alert('User not found. Redirecting to registration page.');
        navigate('/register');
      } 
    }
  };

  return (
    <div>
      <NavBar1 />
      <center>
        <h1 className="second"><AccountCircleIcon style={{ fontSize: "50px" }} /></h1>
        <form onSubmit={handleSubmit} className="third">
          <TextField
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            type={showPassword ? 'text' : 'password'}
            value={password}
            label="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <br />
          <br />

          <Button variant="contained" disableElevation type="submit">
            Login
          </Button>
        </form>
        <br></br>
        <br></br>
        Don't have an Account{' '}
        <Link to='/register'>
          <Button variant="contained" disableElevation type="submit">
            Register
          </Button>
        </Link>
      </center>
    </div>
  );
};

export default Login1;
