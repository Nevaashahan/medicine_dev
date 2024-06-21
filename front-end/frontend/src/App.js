
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import HomeM from "./pages/HomeM";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./Admin/Admin";
/*import AddMatches from "./Admin/AddMedicines";
import EditMatches from "./Admin/EditMedicines";
import ViewMatches from "./Admin/ViewMedicines";
import Matches from "./pages/Matches";
import ViewMatch from "./pages/ViewMatch";
import Booking from "./pages/Booking";*/
import AddMedicines from "./Admin/AddMedicines";
import EditMedicines from "./Admin/EditMedicines";
import ViewMedcines from "./Admin/ViewMedicines";
import OrderMedicine from "./pages/OrderMedicine";
import Order from "./pages/Order";
import ViewMedicine from "./pages/ViewMedicine";



function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route exact path="/" element={<Login />} />
            <Route exact path="/HomeM" element={<HomeM/>} />
            <Route exact path="/AboutUs" element={<AboutUs/>} />
            <Route exact path="/ContactUs" element={<ContactUs/>} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/ordermedicine" element={<OrderMedicine />} />
            <Route exact path="/Admin/Admin" element={<Admin />} />
            <Route exact path="/Admin/addmedicine" element={<AddMedicines />} />
            <Route exact path="/Admin/editmedicine/:id" element={<EditMedicines/>} />
            <Route exact path="/Admin/viewmedicine/:id" element={<ViewMedcines/>} />
            <Route exact path="/viewmedicine/:id" element={<ViewMedicine />} />
            <Route exact path="/order/:id" element={<Order />} />


          </Routes>
      </Router>

      
      
    </div>
  );
}

export default App;
