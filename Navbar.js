import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
      <div className="container-fluid">
      <div className="d-flex align-items-center">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="images/indiaflag.jpg" 
              style={{ maxWidth: "40px", height: "auto", marginRight: "10px" }} 
              alt="Logo" 
            />
          </Link>
          <span className="fw-bold fs-5">Toll Collection System</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex align-items-center">

          <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

          
            {isLoggedIn ? (
              <li className="nav-item mx-2">
                <button className="btn btn-danger px-3 py-2" onClick={handleLogout} style={{ minWidth: "100px", whiteSpace: "nowrap" }}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link className="btn btn-outline-primary px-3 py-2" to="/login" style={{ minWidth: "100px", whiteSpace: "nowrap" }}>
                    Log In
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="btn btn-primary text-white px-3 py-2" to="/signin" style={{ minWidth: "100px", whiteSpace: "nowrap" }}>
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
