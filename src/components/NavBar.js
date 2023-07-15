import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/"/>
      <NavLink to="/movies"/>
      <NavLink to="/directors"/>
      <NavLink to="/actors"/>
    </div>
  )  
}

export default NavBar;
