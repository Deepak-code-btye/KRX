import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import l1 from "./image/ll4.png";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img className="header_logo" src={l1} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav ml-auto mb-2 mb-lg-0 "
                style={{ color: "white" }}
              >
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/studies">
                    Studies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/developer">
                    Developer
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <NavLink to="/contact">
                  <button className="btn btn-style" type="submit">
                    Contact Us
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
