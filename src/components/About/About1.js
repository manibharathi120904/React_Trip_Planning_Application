import React from 'react'
import './About1.css';
import NavBar1 from '../NavBar/NavBar1'
const About1 = () => {
  return (
    <div >
      <NavBar1 />
      <center>
        <h2 className="para">About Visit Dubai</h2>
        <p >Visit Dubai is not a law firm, but is affiliatedwith Boundless Legal, a non-traditional law firm,<br></br>
           authorized by the Utah Supreme Court’s Office of Legal Services Innovation to offer certain legal<br></br>
            services in the area of immigration law. As part of this authorization, Boundless and Boundless <br></br>
            Legal’s owners and managers are not lawyers, but do employ licensed attorneys. </p>
        <form className="para1">
        <h1>Contact Information</h1>
        <h3>Phone no : 1-800-1234-567</h3>
        <h3>Email : visitdubai@111.com</h3>
        <h3>Insta ID : @Visit_Dubai</h3>
          </form>    
   
        </center>  
    </div>
  )
}
export default About1;