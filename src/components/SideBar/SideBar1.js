
import React, { useState } from 'react';
import './SideBar1.css';
import { Link } from 'react-router-dom';
const SideBar1 = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };
  return (
    <div className="side">
      <button className="nav-toggle" onClick={toggleSideNav}>
        ☰ 
      </button>
      <span className="brand">Explore</span>
      <ul className={`nav-links ${isSideNavOpen ? 'open' : ''}`}>
        <Link to="touristspot"><li>TouristSpot</li></Link>
        <Link to="stay"><li>Stay</li></Link>
        <Link to="/"><li>Home</li></Link>
      </ul>
      </div>
  );
}

export default SideBar1

