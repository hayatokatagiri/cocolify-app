import React from "react";
import "./Navbar.css";
import AuthButton from "../AuthButton";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="navfirst">
          <a href="./index.html">Cocolify</a>
        </li>
        <li>
          <a href="./index.html">
            <AuthButton />
          </a>
        </li>
        <li>
          <a href="./index.html">Cocolifyについて</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
