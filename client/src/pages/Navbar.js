import React from "react";
import * as Components from "./Components";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

function App() {
  return (
    <Components.Nav>
      <Components.NavLink to="/Home">
        <p className="logo">SIMPfi</p>
      </Components.NavLink>
      <Components.NavMenu>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/Signup">Signup</Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/Login">Login</Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/EnterDetails">
            Enter Details
          </Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/RegisterBusiness">
            Register Business
          </Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/Distribution">
            Distribution
          </Components.NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Components.NavLink to="/Profile">
            <BsPersonCircle />
          </Components.NavLink>
        </div>
      </Components.NavMenu>
    </Components.Nav>
  );
}

export default App;
