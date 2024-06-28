import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/LogoM.png";

export default function AddMedicines() {
  let navigate = useNavigate();

  const [medicine, setMedicine] = useState({
    medicines: "",
    category: "",
    manu_date: "",
    price: "",
    stockQuantity: "",
    description: "",
  });

  const {  medicines, category, manu_date, price, stockQuantity, description } = medicine;

  const onInputChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/medicine", medicine);
    navigate("/Admin/Admin");
  };

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="../assets/LogoM.png">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        <div className="ml-auto">
          <Link className="btn btn-outline-light m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add Medicine</h2>

            <form onSubmit={(e) => onSubmit(e)}>
          

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Medicine Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Medicine Name"
                  name="medicines"
                  value={medicines}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the category"
                  name="category"
                  value={category}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Manufacture Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter the manufacture date"
                  name="manu_date"
                  value={manu_date}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Quantity of Stock
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter the stock quantity"
                  name="stockQuantity"
                  value={stockQuantity}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter the price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link
                type="submit"
                className="btn btn-outline-danger mx-2"
                to="/Admin/Admin"
              >
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
