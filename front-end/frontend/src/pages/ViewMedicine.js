import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewMedicine.css";

import logo from "../assets/LogoM.png";

export default function ViewMedicine() {
  const [medicine, setMedicines] = useState({
    id: "",
    medicines: "",
    category: "",
    manu_date: "",
    price: "",
    stockquantity: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    const result = await axios.get(`http://localhost:8080/medicine/${id}`);
    setMedicines(result.data);
  };

  return (
    <div>
    <nav className="navbar">
      <a class="navbar-brand" href="../assets/LogoM.png">
        <img src={logo} alt="" />
      </a>
      <ul className='nav-links'>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>About Us</a></li>
                  <li><a href='/'>Contact Us</a></li>
              </ul>
      

      </nav>

      <div className="Viewmedicine-custom-background ">
        <div className="view-user-container ">
          <div className="card shadow">
            <div className="card-header">
              <h2 className="text-center">Medicine Details</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="detail-label">Id : </span> {medicine.id}
                </li>
                <li className="list-group-item">
                  <span className="detail-label"> Medicines</span>{" "}
                  {medicine.medicines}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Category: </span>{" "}
                  {medicine.category}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Manufacture-Date : </span> {medicine.manu_date}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Stock-Quantity </span> {medicine.stockQuantity}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Description : </span>{" "}
                  {medicine.description}
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <Link
                className="btn btn-outline-primary mx-2"
                to={`/order/${medicine.id}`}
              >
                Order Now
              </Link>
              <Link className="btn btn-primary" to={"/ordermedicine"}>
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
