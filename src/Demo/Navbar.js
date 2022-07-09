import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

import {getLoggedinDetails} from '../utils';

const Navbar = (props) => {
  let navigate = useNavigate();
  const loggedinDetails = getLoggedinDetails();

  let activeStyle = {
    textDecoration: "underline",
  };
  
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('loginDetail');
    navigate("/login", { replace: true });
  }

  return (
    <>
      <div className="main">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">
                    <strong>Skill Care</strong>
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
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          to="/"
                          className="nav-link active"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                          aria-current="page"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                          to="/services"
                        >
                          services
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                          to="/about"
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                          to="/contact"
                        >
                          Contact
                        </NavLink>
                      </li>
                      {!loggedinDetails ? (
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            to="/Login"
                          >
                            Login
                          </NavLink>
                        </li>
                      ) : (
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            to="/login"
                            onClick={(e) => {
                              handleLogout(e);
                            }}
                          >
                            Logout
                          </NavLink>
                        </li>
                      )}
                      {loggedinDetails?.userType === "admin" && (
                        <li className="nav-item ">
                          <NavLink
                            className="nav-link"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            to="/dashbord"
                          >
                            Dashbord
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
