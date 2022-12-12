import React from "react";
import "./css/navBar.css";
import { Link } from "react-router-dom";

const pathname = window.location.pathname;

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Tennis Match
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span id="toggler" className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  to="/"
                >
                  Scores
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/rules" ? "active" : ""
                  }`}
                  to="/rules"
                >
                  Rules
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
