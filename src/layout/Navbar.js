import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const navbar = () => {
  return (
    <div>
      <div className="topnav">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">news</Link>
        <Link to="/card">Card</Link>
        <h2 className="galaxy-computer">Galaxy Computer</h2>
      </div>
    </div>
  );
};

export default navbar;
