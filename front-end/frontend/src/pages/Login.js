import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import user from "../assets/user.png";
import Lock from "../assets/password.png";
import logo from "../assets/LogoM.png";
import background from "../assets/background.jpg";

const Login = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9090/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleClick = () => {
    // You can add your login logic here
    // For example, check the entered credentials against the users loaded from the server
    const user = users.find((u) => u.userName === loginUserName && u.password === loginPassword && u.userName !="admin" && u.password !="123");
    if (user) {
      // Successful login
      navigate("/HomeM"); // Redirect to the dashboard
    }
    else if(loginUserName==="admin" && loginPassword==="123"){
      navigate("/Admin/Admin")
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className='nav-links'>
           
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>

        <div className="ml-auto">
          
          <Link className="btn btn-outline-light m-2" to="/signup">
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="login-background">
        <div className="logincontainer">
          <div className="header">
            <div className="text" style={{ color: "silver" }}>Log In</div>
            <div className="underline"></div>
          </div>

          <div className="inputss">
            <div className="input" style={{ width: '350px', height: '40px' }}>
              <img src={user} alt="User Icon" style={{ width: '20px', height: '20px' }} />
              <input
                type="text"
                placeholder="User Name"
                name="loginUserName"
                value={loginUserName}
                onChange={(e) => setLoginUserName(e.target.value)}
              />
            </div>

            <div className="input" style={{ width: '350px', height: '40px' }} >
              <img src={Lock} alt="Password Icon" style={{ width: '20px', height: '20px' }} />
              <input
                type="password"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="forgot-password">
            If you don't have an account?{" "}
            <span>
              <Link to="/signup" style={{ color: "silver", fontSize: 16 }}>Create</Link>
            </span>
            <div className="submit-container">
              <button className="btn login" onClick={handleClick}>
                Log In
              </button>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
