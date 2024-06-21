import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/LogoM.png";
import "./Order.css";

export default function Order() {
  
  const [orderedMedicineQuantity, setOrderedMedicineQuantity] = useState("");
  const { id } = useParams();
  const [medicine, setMedicine] = useState({
    
    medicines: "",
    category: "",
    manu_date: "",
    stockQuantity: "",
    price: "",
    description: "",
  });

  const {
    medicines,
    category,
    manu_date,
    stockQuantity,
    price,
    description,
  } = medicine;

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    const result = await axios.get(`http://localhost:8080/medicine/${id}`);
    setMedicine(result.data);
  };

  const handleInputChange = (e) => {
    setOrderedMedicineQuantity(e.target.value);
  };

  const handleClick = async () => {
    if (orderedMedicineQuantity > stockQuantity) {
      toast.error("Sorry! It is out of stock", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    else if (orderedMedicineQuantity==="" ||  orderedMedicineQuantity<1) {
      toast.error("Please enter valid count.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    
    else {
      toast.success("You successfully ordered the medicine", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return true;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (handleClick()) {
      const newStockQuantity = stockQuantity - orderedMedicineQuantity;
      try {
        await axios.put(`http://localhost:8080/medicines/${id}`, {
          stockquantity: newStockQuantity,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-navy">
        <a className="navbar-brand" href="../assets/logo.png">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        <div className="buttons">
          <Link className="btn4" to="/OrderMedicine">
            Medicines
          </Link>
        </div>
      </nav>

      <div className="ordering-background">
        <div className="view-user-container">
          <div className="card shadow">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="card-header">
                <h2
                  className="text-center"
                  style={{ color: "white", fontFamily: "-moz-initial" }}
                >
                  Order Details
                </h2>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="detail-label">Medicine Name: </span>{" "}
                    {medicine.medicines}
                  </li>
                  <li className="list-group-item">
                    <span className="detail-label">Category: </span>{" "}
                    {medicine.category}
                  </li>
                  <li className="list-group-item">
                    <span className="detail-label">Manufacture Date: </span>{" "}
                    {medicine.manu_date}
                  </li>
                  <li className="list-group-item">
                    <span className="detail-label">Stock Quantity: </span>{" "}
                    {medicine.stockQuantity}
                  </li>
                  <li className="list-group-item">
                    <span className="detail-label">Price: </span> {medicine.price}
                  </li>
            
                  <li className="list-group-item">
                    <span className="detail-label">Description: </span>{" "}
                    {medicine.description}
                  </li>
                </ul>

                <div className="input">
                  <label htmlFor="orderedMedicine" className="input-label">
                    Count:
                  </label>
                  <input
                    type="number"
                    id="orderedMedicine"
                    name="orderedMedicineQuantity"
                    value={orderedMedicineQuantity}
                    onChange={handleInputChange}
                    className="number-input"
                    placeholder="Enter the quantity of medicine"
                  />
                </div>
              </div>
              <div className="card-footer">
                <Link className="btn2" onClick={handleClick}>
                  Confirm
                </Link>
                <Link className="btn2" to="/ordermedicine">
                  Back
                </Link>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
