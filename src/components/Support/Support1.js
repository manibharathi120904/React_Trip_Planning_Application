import React from 'react';
import './Support1.css';
import NavBar1 from '../NavBar/NavBar1'
const Support1 = () => {
  return (
    <div className="p1">
      <NavBar1 />
      <center><h1 className="s1">Your Virtual Agent is here to help you</h1></center>
      <center>
        <form className="s2">
          <a>Customer Service</a><br></br><br></br>
          <a>Change & Cancel</a><br></br><br></br>
          <a >Payment & Receipt</a><br></br><br></br>
          <a>Refunds</a><br></br><br></br>
          <a >Travel Documents</a><br></br><br></br>
          <a >Account Security</a><br></br><br></br>
          <a>Travel Alerts</a><br></br>
        </form>
      </center>
    </div>
  )
}
export default Support1;