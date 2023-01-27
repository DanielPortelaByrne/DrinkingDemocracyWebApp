import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <nav className="navbar" onClick={() => setSideMenuOpen(!sideMenuOpen)}>
      <div className="container">
        <div>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            style={{ paddingRight: "50px" }}
          />
        </div>
        <div>
          <h1>drinkingdemocracy.com</h1>
        </div>
      </div>
      {sideMenuOpen && (
        <div className="side-menu">
          <a href="#">Download the app!</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
