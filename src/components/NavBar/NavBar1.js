
import React from "react";
import { Link } from "react-router-dom";
import './NavBar1.css';
import HomeIcon from '@mui/icons-material/Home';
import Logo1 from './Images4/Logo1.png';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
const NavBar1 =()=>{
    return(
    <div className="six">
      <nav>
        <ul>
          <li><img src={Logo1} alt="" width="" height="49"/></li>
          <li style={{paddingLeft:"400px",paddingTop:"10px"}}>
            <Link to="/"> <HomeIcon style={{paddingBottom:"6px",fontSize:"35px"}}/></Link>
          </li>
          <li style={{paddingTop:"10px"}}>
            <Link to="/about"> <InfoIcon style={{paddingBottom:"4px",fontSize:"35px"}}/></Link>
          </li>
          <li style={{paddingTop:"10px"}}>
            <Link to="/support"><HelpIcon style={{paddingBottom:"4px",fontSize:"35px"}}/></Link>
          </li>
          <li style={{paddingTop:"5px"}}>
            <Link to="/login"> <LoginIcon style={{paddingTop:"3px",fontSize:"35px"}}/></Link>
          </li>
        </ul>
      </nav>
      
    </div>
    );
  }
  export default NavBar1;