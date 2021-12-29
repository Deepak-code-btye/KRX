import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import f1 from "./image/ll4.png";
const Footer = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row bg-info ">
            <div className="col-sm-6">
              <h1 className="text-warning">
                Lets Discuss
                <p className="text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  <div className="imgs">
                    <span className="">
                      <input type="text" />
                      <span>Search</span>
                    </span>
                  </div>
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <img className="footer_img" src={f1} alt="" />
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <NavLink to="#">About</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <NavLink to="#">About</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-5">
              <p className="main-hero-para text-center w-100">
                Copy @ 2021 KRX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
