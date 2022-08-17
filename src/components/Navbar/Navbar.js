import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="navbar-top">
      <div className="navbar-logo">
        <Link to="/">
          <img src="./logo.jpg" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/kits">Ramen Kits</Link>
        <Link to="/popups">Popups</Link>
      </ul>
      <a
        href={"https://www.instagram.com/kaseyramen/"}
        aria-label="instagram"
        target="_blank"
        className="icon"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          color={"white"}
          size={"2x"}
          className={"icon"}
        />
      </a>
    </nav>
  );
}

export { Navbar};
