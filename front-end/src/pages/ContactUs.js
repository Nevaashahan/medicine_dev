import React, { useState } from "react";
import "./ContactUs.css";
import logo from "../assets/LogoM.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending data to an API
    // After successful submission, you can set the "submitted" state to true
    setSubmitted(true);
  };

  return (
    <div ><nav className="navbar">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" />
    </a>
    <ul className='nav-links'>
                  <li><a href='/HomeM'>Home</a></li>
                  <li><a href='/AboutUs'>About Us</a></li>
                 
              </ul>
      
       
              
    

   
    
  </nav>
    <div className="contact-us-container">
        
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="thank-you-message">
          Thank you for your message! We will get back to you.
        </div>
      ) : (
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div></div>
  );
}

export default ContactUs;
