import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Link">
        <h2>Home</h2>
      </Link>
      <Link to="/users" className="Link">
        <h2>Users</h2>
      </Link>
    </header>
  );
};

export default Header;
