import React from "react";
import "./Navbar.css";

import logo from '../assets/LogoM.png';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-navy ">
        <a class="navbar-brand" href="../assets/LogoM.png">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        <div className="buttons">
          <button type="button" className="btn btn-primary color-dark">
            Home
          </button>
          <button type="button" className="btn btn-primary color-dark">
            about us
          </button>
        </div>

        <div className="ml-auto">
          <button type="button" className="btn btn-outline-light ms-3">
            Log In
          </button>
          <button type="button" className="btn btn-outline-light ms-3">
            Sign Up
          </button>
          <button type="button" className="btn btn-warning ms-3">
            order now
          </button>
        </div>
      </nav>
    </div>
  );
}
