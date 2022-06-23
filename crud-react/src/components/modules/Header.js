import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Navbar
        </a>
        <form className="d-flex">
          <Link to="/form" className="btn btn-outline-success" type="submit">
            Add Posts
          </Link>
        </form>
      </div>
    </nav>
  );
};
