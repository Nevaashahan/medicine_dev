import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import logo from "../assets/LogoM.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirm_password: "",
  });

  const { name, email, userName, password, confirm_password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!name || !email || !userName || !password || !confirm_password) {
      toast.error("All the fields should be filled. Please fill all the fields.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (password !== confirm_password) {
      toast.error("Passwords do not match. Password and confirm password should be matched.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      return true;
    }
    return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (handleClick()) {
      try {
        await axios.post("http://localhost:9090/user", user);
        toast.success("Successfully Registered your account.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          onClose: () => {
            navigate("/");
          },
        });
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="../assets/logo.png">
          <img src={logo} alt=""  />
        </a>
        <ul className='nav-links'>
                    <li><a href='/'>Home</a></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                </ul>


        <div className="ml-auto">
          <Link className="btn btn-outline-light m-2" to="/">
            Log In
          </Link>
        </div>
      </nav>

      <div className="custom-background-for-signup">
        <div className="signupcontainer mt-20">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="header">
              <div className="text">Sign Up</div>
              <div className="underline"></div>
            </div>

            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
                <div className="validation-message">
                  {validationMessages.name}
                </div>
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
                <div className="validation-message">
                  {validationMessages.email}
                </div>
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder="User Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                />
                <div className="validation-message">
                  {validationMessages.userName}
                </div>
              </div>

              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
                <div className="validation-message">
                  {validationMessages.password}
                </div>
              </div>

              <div className="input">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  value={confirm_password}
                  onChange={(e) => onInputChange(e)}
                />
                <div className="validation-message">
                  {validationMessages.confirm_password}
                </div>
              </div>
            </div>

            <div className="submit-container">
              <button type="submit" className="btn signup">
                Sign Up
              </button>
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <Link className="btn cancel" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
