import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function About() {
  return (
    <>
      <nav></nav>
    </>
  );
}

function Navbar() {
  return (
    <nav class="navbar-top">
      <div class="navbar-logo">
        <img src="https://cdn.shopify.com/s/files/1/0556/1614/3550/files/KR-logo-white-WEB_180x.png?v=1640896102" />
      </div>
      <ul class="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/kits">Ramen Kits</Link>
        <Link to="/popups">Popups</Link>
      </ul>
    </nav>
  );
}

export { Navbar,About };
