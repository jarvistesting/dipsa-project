import React from 'react';
import { NavLink } from 'react-router-dom';

const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center" >
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} <strong className="brand-name"><font color="light-Blue">Dipsa Gajera</font></strong>
                  </h1>
                  <h2 className="my-3">We are the team of talented developer making you to learn the best language...</h2>
                  <div className="mt-3">
                    {/* because we are sending them from home to services */}
                    <NavLink to={props.visit} className="btn-get-started"> 
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src="https://knowledgebase.techloop.io/knowledgebase-overview.3d71293b.svg" className="img-fluid animated" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default Commom;