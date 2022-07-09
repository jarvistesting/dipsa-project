/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getLoggedinDetails } from "../../utils";
import { getAllUsersApi } from "../../apis/skillcareapis";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import logo1 from "./assets/images/logo.svg";
// import logo2 from './assets/images/logo-mini.svg';
import circle from "./assets/images/dashboard/circle.svg";
// import './assets/vendors/css/vendor.bundle.base.css';
import "./assets/assets/css/style.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Dashbord = () => {
  let navigate = useNavigate();
  const [usersKey, setUsersKey] = useState([]);
  const [users, setUsers] = useState({});

  const handleBrandClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const fetchUsers = async () => {
    try {
      const data = await getAllUsersApi();
      const success = get(data, "success", false);
      if (success && data?.courses && !isEmpty(data.courses)) {
        setUsers({...data.courses});
        setUsersKey(Object.keys(data.courses));
      } else if (success && isEmpty(data.courses)) {
        alert("No users found!");
      } else {
        alert(data?.message || "Unable to get users!");
      }
    } catch (error) {
      console.error("Error while fetching users:", error);
      alert("Unable to get users!");
    }
  };

  useEffect(() => {
    let loggedinUserDetail = getLoggedinDetails();
    if (
      !isEmpty(loggedinUserDetail) &&
      loggedinUserDetail?.userType === "admin"
    ) {
      fetchUsers();
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <>
      <div className="container-scroller">
        {/*  partial:partials/_navbar.html */}
        <nav
          className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
          style={{ background: "white" }}
        >
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a
              className="navbar-brand brand-logo"
              href="#"
              onClick={handleBrandClick}
            >
              <img src={logo1} alt="logo" />
            </a>
            {/* <a className="navbar-brand brand-logo-mini" href="index.html"><img src={logo2} alt="logo" /></a> */}
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span className="mdi mdi-menu"></span>
            </button>
            {/* <div className="search-field d-none d-md-block">
              <form className="d-flex align-items-center h-100" action="#">
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                  </div>
                  <input type="text" className="form-control bg-transparent" placeholder="Search projects"/>
                </div>
              </form>
            </div> */}
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item nav-profile dropdown">
                <a
                  className="nav-link "
                  id="profileDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="nav-profile-img">
                    <img
                      src={require("./assets/images/faces/face1.jpg")}
                      alt="image"
                    />
                    <span className="availability-status online"></span>
                  </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black">Admin</p>
                  </div>
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        {/*  partial */}
        <div className="container-fluid page-body-wrapper">
          {/*  partial:partials/_sidebar.html */}
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-profile">
                <a href="#" className="nav-link">
                  <div className="nav-profile-image">
                    <img
                      src={require("./assets/images/faces/face1.jpg")}
                      alt="profile"
                    />
                    <span className="login-status online"></span>
                    {/* change to offline or busy as needed*/}
                  </div>
                  <div className="nav-profile-text d-flex flex-column">
                    <span className="font-weight-bold mb-2">Admin</span>
                    <span className="text-secondary text-small">Owner</span>
                  </div>
                  <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="menu-title">Dashboard</span>
                  {/* <i className="mdi mdi-home menu-icon"></i> */}
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="Admition.html">
                  <span className="menu-title">Admission</span>
                  <i className="mdi mdi-contacts menu-icon"></i>
                </a>
              </li> */}
            </ul>
          </nav>
          {/*  partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="page-header">
                <h3 className="page-title" style={{ paddingRight: "900px" }}>
                  {/* <span className="page-title-icon bg-gradient-primary text-white me-2">
                    <i className="mdi mdi-home"></i>
                  </span>  */}
                  Dashboard
                </h3>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    {/* <li className="breadcrumb-item active" aria-current="page">
                      <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="row">
                {/* <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-danger card-img-holder text-white">
                    <div className="card-body">
                      <img
                        src={circle}
                        className="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 className="font-weight-normal mb-3">
                        Weekly Offline Admission{" "}
                        <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                      </h4>
                      <h2 className="mb-5">₹15,0000</h2>
                      <h6 className="card-text">Increased by 60%</h6>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-info card-img-holder text-white">
                    <div className="card-body">
                      <img
                        src={circle}
                        className="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 className="font-weight-normal mb-3">
                        Weekly Online Admission
                        <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                      </h4>
                      <h2 className="mb-5">{usersKey.length}</h2>
                      {/* <h6 className="card-text">Decreased by 10%</h6> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-success card-img-holder text-white">
                    <div className="card-body">
                      <img
                        src={circle}
                        className="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 className="font-weight-normal mb-3">
                        Online Visitors{" "}
                        <i className="mdi mdi-diamond mdi-24px float-right"></i>
                      </h4>
                      <h2 className="mb-5">95,5741</h2>
                      <h6 className="card-text">Increased by 5%</h6>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="clearfix">
                        <h4 className="card-title float-left">Visit And Admission Statistics</h4>
                        <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right"></div>
                      </div>
                      <canvas id="visit-sale-chart" className="mt-4"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Traffic Sources</h4>
                      <canvas id="traffic-chart"></canvas>
                      <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Recent Updates</h4>
                      <div className="d-flex">
                        <div className="d-flex align-items-center me-4 text-muted font-weight-light">
                          <i className="mdi mdi-account-outline icon-sm me-2"></i>
                          <span>Admin</span>
                        </div>
                        <div className="d-flex align-items-center text-muted font-weight-light">
                          <i className="mdi mdi-clock icon-sm me-2"></i>
                          <span>October 3rd, 2022</span>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-6 pe-1">
                          <img src={require("./assets/images/dashboard/img_1.jpg")} className="mb-2 mw-100 w-100 rounded" alt="image"/>
                          <img src={require("./assets/images/dashboard/img_4.jpg")} className="mw-100 w-100 rounded" alt="image"/>
                        </div>
                        <div className="col-6 ps-1">
                          <img src={require("./assets/images/dashboard/img_2.jpg")} className="mb-2 mw-100 w-100 rounded" alt="image"/>
                          <img src={require("./assets/images/dashboard/img_3.jpg")} className="mw-100 w-100 rounded" alt="image"/>
                        </div>
                      </div>
                      <div className="d-flex mt-5 align-items-top">
                        <img src={require("./assets/images/faces/face3.jpg")} className="img-sm rounded-circle me-3" alt="image" />
                        <div className="mb-0 flex-grow">
                          <h5 className="me-2 mb-2">Project Website - Authentication Module.</h5>
                          <p className="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        </div>
                        <div className="ms-auto">
                          <i className="mdi mdi-heart-outline text-muted"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="row">
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body" style={{ margin: 0 }}>
                      <h4 className="card-title">Recent Admission</h4>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th> Assignee (User name) </th>
                              <th> User type </th>
                              <th> Course Status </th>
                              {/* <th> Last Update </th>
                              <th> Tracking ID </th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {usersKey?.length
                              ? usersKey.map((item, index) => {
                                  return (
                                    <tr key={`${item}_${index}`}>
                                      <td>{users[item].userName}</td>
                                      <td>
                                        {users[item].userType}
                                      </td>
                                      <td>
                                          {users[item]?.Courses?.length
                                            ? <label className="badge badge-gradient-success">Enrolled/Progress</label>
                                            : <label className="badge badge-gradient-info">In-active</label>}
                                      </td>
                                    </tr>
                                  );
                                })
                              : null}

                            {/* <tr>
                              <td>
                                <img
                                  src={require("./assets/images/faces/face2.jpg")}
                                  className="me-2"
                                  alt="image"
                                />{" "}
                                Stella Johnson
                              </td>
                              <td> High loading time </td>
                              <td>
                                <label className="badge badge-gradient-warning">
                                  PROGRESS
                                </label>
                              </td>
                              <td> Dec 12, 2017 </td>
                              <td> WD-12346 </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={require("./assets/images/faces/face3.jpg")}
                                  className="me-2"
                                  alt="image"
                                />{" "}
                                Marina Michel
                              </td>
                              <td> Website down for one week </td>
                              <td>
                                <label className="badge badge-gradient-info">
                                  ON HOLD
                                </label>
                              </td>
                              <td> Dec 16, 2017 </td>
                              <td> WD-12347 </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={require("./assets/images/faces/face4.jpg")}
                                  className="me-2"
                                  alt="image"
                                />{" "}
                                John Doe
                              </td>
                              <td> Loosing control on server </td>
                              <td>
                                <label className="badge badge-gradient-danger">
                                  REJECTED
                                </label>
                              </td>
                              <td> Dec 3, 2017 </td>
                              <td> WD-12348 </td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  content-wrapper ends */}
            {/*  partial:partials/_footer.html */}
            {/* <footer className="footer">
              <div className="container-fluid" style={{width:"100%"}}>
                <span className="text-muted d-block text-center text-sm-start d-sm-inline-block" style={{width:"100%"}}>Copyright © Anezone.com 2022</span>

              </div>
            </footer> */}
            {/*  partial */}
          </div>
          {/*  main-panel ends */}
        </div>
        {/*  page-body-wrapper ends */}
      </div>
    </>
  );
};

export default Dashbord;
