import React,{ useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OrderMedicine.css";

import logo from "../assets/LogoM.png";

export default function Medicine()
 {
  const [medicine, setMedicine] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    const result = await axios.get("http://localhost:8080/medicines");
    setMedicine(result.data);
  };


  
  return (
    <div>
      <nav className="navbar  ">
        <a class="navbar-brand" href="../assets/LogoM.png">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        
      <ul className='nav-links'>
                  <li><a href='/HomeM'>Home</a></li>
                  <li><a href='/AboutUs'>About Us</a></li>
                  <li><a href='/ContactUs'>Contact Us</a></li>
              </ul>
      
       
       
      </nav>

      <div className="Medicines-custom-background">

      <div className="container">
          <div className="py-4">
            <table className="table shadow">
              <thead>
                <tr>
                <th scope="col">No</th>
                  <th scope="col">Medicine-Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Manufacture date</th>
                  <th scope="col">Stock Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicine.map((medicine, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{medicine.medicines}</td>
                    <td>{medicine.category}</td>
                    <td>{medicine.manu_date}</td>
                    <td>{medicine.stockQuantity}</td>
                    <td>{medicine.price}</td>
                    <td>{medicine.description}</td>
                    <td>
                      <Link
                        className="btn btn-primary mx-2"
                        to={`/viewmedicine/${medicine.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/order/${medicine.id}`}
                      >
                        Order Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
    </div>
  );
                };

