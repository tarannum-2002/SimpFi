import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EnterDetails from "./pages/EnterDetails";
import RegisterBusiness from "./pages/RegisterBusiness";
import Data from "./pages/Distribution";
import Home from "./pages/Home.js";
// import Stock from "./images/stock.jpg";
import Footer from "./pages/Footer";
import BusinessInfo from "./pages/BusinessInfo";

import Profile from "./pages/Profile";

//  import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/EnterDetails" element={<EnterDetails />} />
          <Route path="/RegisterBusiness" element={<RegisterBusiness />} />
          <Route path="/Distribution" element={<Data />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/BusinessInfo" element={<BusinessInfo/>} />

        </Routes>
        <Home />
        <Footer />
        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
