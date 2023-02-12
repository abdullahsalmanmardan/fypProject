import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          fyp
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-NavLink" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="/">
                Contact-Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-NavLink dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-NavLink" to="/">
                  p1
                </NavLink>

                <NavLink className="nav-NavLink" to="/">
                  product2
                </NavLink>

                <div className="dropdown-divider"></div>
                <NavLink className="nav-NavLink" to="/">
                  Product3
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="/">
                About-Us
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mr-auto">
            <NavLink className="nav-NavLink mr-auto" to="/Login">
              Login
            </NavLink>
          </li>

          <li className="nav-item mr-auto">
            <NavLink className="nav-NavLink mr-auto" to="/Registation">
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
