import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "../layout/Navbar"

import logo from "../assets/LogoM.png";
import slvsind from "../assets/slvsind.jpg";
import rcbvscsk from "../assets/rcbvscsk.jpg";
import ausvseng from "../assets/ausvseng.jpg";
import indvspak from "../assets/indvspak.jpg"

export default function Home() {
  return (
    <div>
      <nav className="navbar ">
        <a class="navbar-brand" href="../assets/LogoM.png">
          <img src={logo} alt=""  />
        </a>
        <ul className='nav-links'>
                    <li><a href='/'>Home</a></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><a href='/'>Contact Us</a></li>
                    

                </ul>
        <div className="buttons">
          <Link className="btn btn-primary color-dark" to="/matches">
            Matches
          </Link>
        </div>
        <div className="ml-auto">
          <Link className="btn btn-outline-light m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>
      

      <div className="Home-custom-background ">
        <div class="card m-5" style={{ width: "18rem", height: "20rem" }}>
          <img
            class="card-img-top"
            src={slvsind} 
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">SL vs IND</h5>
            <p class="card-text">
              3rd ODI in Colombo.

            </p>
            <a href="/matches" class="btn btn-primary">
              Book Now
            </a>
          </div>
        </div>

        <div class="card m-5" style={{ width: "18rem", height: "20rem" }}>
          <img
            class="card-img-top"
            src={rcbvscsk}
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">RCB vs CSK</h5>
            <p class="card-text">
              Indian Premire League 15th match in Bengaluru Sinnaswamy stadium.
            </p>
            <a href="/matches" class="btn btn-primary">
            Book Now
            </a>
          </div>
        </div>
        <div class="card m-5" style={{ width: "18rem", height: "20rem" }}>
          <img
            class="card-img-top"
            src={ausvseng}
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">AUS vs ENG</h5>
            <p class="card-text">
              3rd Ashes test, day-3 in Melbourne cricket ground.
            </p>
            <a href="/matches" class="btn btn-primary">
            Book Now
            </a>
          </div>
        </div>
        <div class="card m-5" style={{ width: "18rem", height: "20rem" }}>
          <img
            class="card-img-top"
            src={indvspak}
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">PAK vs IND</h5>
            <p class="card-text">
              ODI world cup 23rd match in Mumbai Wankade stadium.
            </p>
            <a href="/matches" class="btn btn-primary">
            Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
