import React from "react";
import { Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeM.css"; // Create a new CSS file for styling
import logo from "../assets/LogoM.png";
import medicine1 from "../assets/EASE A COLD COUGH,COLD & FLU 24'S.png";
import medicine2 from "../assets/GLUCOPHAGE 850MG TABS.png";
import medicine3 from "../assets/AVAMYS AQUEOUS NASAL SPRAY 0.05%.png";


export default function HomeM() {


  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="../assets/LogoM.png">
          <img src={logo} alt="" />
        </a>
        <ul className="nav-links">
          <li><a href="/ContactUs">ContactUs</a></li>
          <li><a href="/ordermedicine">Orders</a></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
        </ul>
        <div className="buttons">
          
        </div>
        <div className="ml-auto">
          <Link className="btn btn-outline-light m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>

      <div className="PharmacyManagement-custom-background">
        <div className="card m-5" style={{ width: "18rem", height: "20rem" }}>
          <img
            className="card-img-top"
            src={medicine1}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title"> EASE A COLD COUGH,COLD</h5>
            <p className="card-text">
          
            </p>
            <Link to="/OrderMedicine" className="btn ">
              Order now
            </Link>
          </div>
        </div>

        <div className="card m-5" style={{ width: "18rem", height: "20rem" }}>
          <img
            className="card-img-top"
            src={medicine2}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">GLUCOPHAGE 850MG TABS</h5>
            <p className="card-text">
             
            </p>
            <Link to="/OrderMedicine" className="btn ">
            Order now
            </Link>
          </div>
        </div>
 <div className="card m-5" style={{ width: "18rem", height: "20rem" }}>
          <img
            className="card-img-top"
            src={medicine1}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">GLUCOPHAGE 850MG TABS</h5>
            <p className="card-text">
              
            </p>
            <Link to="/OrderMedicine" className="btn ">
              Order now
            </Link>
          </div>
        </div>
       

        
      </div>
    </div>
    
  );
}

