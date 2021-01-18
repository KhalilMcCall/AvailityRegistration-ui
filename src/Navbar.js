import blackLogo from "./images/availityBlack.jpg";
import React, { useState } from "react";
import "./Css/Navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(!isOpen);
  }
  return (
    <div className="nav">
      <div className="logo">
        <img src={blackLogo} />
      </div>

      <div onClick={openMenu} className="menu">
        <span className={isOpen ? "t" : ""} id="tspan"></span>
        <span className={isOpen ? "m" : ""} id="mspan"></span>
        <span className={isOpen ? "b" : ""} id="bspan"></span>
      </div>

      <ul className={isOpen ? "slide" : ""}>
        <li>Home</li>
        <li>Products</li>
        <li>Resources</li>
        <li>Vendors</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
