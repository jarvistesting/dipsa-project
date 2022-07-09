import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './Demo/Home';
import About from './Demo/About';
import Service  from './Demo/Services';
import Contact from './Demo/Contact';
import Navbar from './Demo/Navbar';
// import Footer from './Demo/Footer';
import Sign from './Demo/Sign';
import LoginWithRouter from "./Demo/Login";
import Dashbord from './Demo/Admin/Dashbord';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
    return (
      <>
        <div style={{ height: "100vh" }}>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/services" element={<Service />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/login" element={<LoginWithRouter />} />
              <Route exact path="/sign" element={<Sign />} />
              <Route exact path="/dashbord" element={<Dashbord />} />
              <Route path="*" element={Home} />
            </Routes>
          </div>
        </div>
        {/* <Footer/>  */}
      </>
    );
};

export default App;