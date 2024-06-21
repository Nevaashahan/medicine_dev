import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import './ViewMedicines.css'

import logo from "../assets/LogoM.png";

export default function Viewmedcines() {

  const [medicine, setMedicines]=useState({
    id: "",
    medicines: "",
    category: "",
    manu_date: "",
    price: "",
    stockQuantity: "",
    description: ""
  
    })

  const { id } = useParams();

  useEffect(()=>{
    loadMedicines();
   }, [])

  const loadMedicines = async () => {
    const result = await axios.get(`http://localhost:8080/medicine/${id}`);
    setMedicines(result.data);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-navy ">
        <a class="navbar-brand" href="../assets/LogoM.png">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        <div className="buttons">
          <Link className="btn btn" to="/Admin/Admin">
            Medicines
          </Link>
        </div>
        <div className="buttons">
          <Link className="btn btn" to="/OrderMedicine">
            Logout
          </Link>
        </div>
      </nav>
      <div className="card shadow">
            <div className="card-header">
              <h2 className="text-center">Medicine Details</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <span className="detail-label">Id : </span> {medicine.Id}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Medicine-Name : </span> {medicine.medicines}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Location : </span> {medicine.category}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Manufacture Date : </span> {medicine.manu_date}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Price: </span> {medicine.price}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Quantity of stock: </span> {medicine.stockQuantity}
                </li>
              
                <li className="list-group-item">
                  <span className="detail-label">Description : </span> {medicine.description}
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <Link className="btn btn-primary" to={"/Admin/Admin"}>
                Back 
              </Link>
            </div>
          </div>

    </div>
    
  
  );
}