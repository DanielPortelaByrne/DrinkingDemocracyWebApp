import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container">
        <div onClick={() => setSideMenuOpen(!sideMenuOpen)}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            style={{ paddingRight: "50px" }}
          />
        </div>
        <div onClick={() => navigate("/")}>
          <h1>drinkingdemocracy.com</h1>
        </div>
      </div>
      {sideMenuOpen && (
        <div className="side-menu">
          <a href="https://danielportelabyrne.github.io/DanielPortelaByrne-DrinkingDemocracyContact/">
            Download the app!
          </a>
          {/* <a href="#">About</a>
          <a href="#">Contact</a> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
