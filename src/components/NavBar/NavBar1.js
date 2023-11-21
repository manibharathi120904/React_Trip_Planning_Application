
import React from "react";
import { Link } from "react-router-dom";
import './NavBar1.css';

const NavBar1 =()=>{
    return(
    <div className="six">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      
    </div>
    );
  }
  export default NavBar1;