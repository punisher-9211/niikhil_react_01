import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
const NavBarItem = props => {
  return (
    <div>
      <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <img
              class="topbar-brand"
              src="saisun_black_updated.png "
              height="200px"
            />
            {/* <img src="saisun_logo_full.png " height="40px" /> */}
          </a>
          <div>Best Solution to your Weighing</div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink
                  to="/home"
                  activeClassName="menu-active"
                  className="nav-item"
                >
                  HOME
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  className="nav-item"
                  to="/about_us"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/products"
                  activeClassName="menu-active"
                  className="nav-item"
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  className="nav-item"
                  to="/contact_us"
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default NavBarItem;
