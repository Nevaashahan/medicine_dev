// AboutUs.js
import React from "react";
import "./AboutUs.css";
import logo from "../assets/LogoM.png";


const AboutUs = () => {
  return (
    <div>   <nav className="navbar">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" />
    </a>
    <ul className='nav-links'>
                  <li><a href='/HomeM'>Home</a></li>
                  <li><a href='/ContactUs'>Contact Us</a></li>
                 
              </ul>
      
       
              
    

   
    
  </nav>
    <div className="about-us">
   
      
      <h1>Welcome to MediCare Pharmacy.....!</h1>
      <p>
       We are committed to providing high-quality pharmaceutical
        products and exceptional customer service. Our mission is to serve our community's health
        needs and make healthcare accessible to all.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
