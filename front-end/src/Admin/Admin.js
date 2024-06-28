// import React, { useState } from 'react'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";

import logo from "../assets/LogoM.png";

export default function Admin() {
  const [medicines, setMedicines] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    const result = await axios.get("http://localhost:8080/medicines");
    setMedicines(result.data);
  };

  const deleteMedicines = async (id) => {
    await axios.delete(`http://localhost:8080/medicine/${id}`);
    loadMedicines();
  };
  return (
    <div>
      <nav className="navbar  ">
        <a class="navbar-brand" href="../assets/LogoM.png">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        {/* <div className="buttons">
        <Link className="btn btn-primary color-dark" to="/home">
            Home
          </Link>
          <Link className="btn btn-primary color-dark" to="/matches">
            Matches
          </Link>
        </div> */}

        <div className="ml-auto">
        <Link className='btn btn-outline-light m-3' to="/Admin/addmedicine">
              Add Medicines
              </Link>
          <Link className="btn btn-outline-light m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>

        
            <table className="table shadow">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Medicine-Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Manufacture-date</th>
                  <th scope="col">Quantity of stock</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicines, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{medicines.medicines}</td>
                    <td>{medicines.category}</td>
                    <td>{medicines.manu_date}</td>
                    <td>{medicines.stockQuantity}</td>
                    <td>{medicines.price}</td>
                    <td>{medicines.description}</td>
                    <td>
                      <Link
                        className="btn5"
                        to={`/Admin/viewmedicine/${medicines.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn6"
                        to={`/Admin/editmedicine/${medicines.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn7"
                        onClick={() => deleteMedicines(medicines.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    
  );
}
