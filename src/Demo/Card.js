import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  return (
    <>
      <div
        className="col-md-4 col-10 mx-auto "
        style={{ paddingBottom: "15px" }}
      >
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            style={{ with: "100%", height: "200px" }}
            alt={props.imgsrc}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-capitalize">{props.title}</h5>
            <p className="card-text">{props.des}</p>
            <Link
              to=""
              onClick={(e) => props.handleClick(e, props.item)}
              className="btn btn-primary"
              style={{ letterSpacing: "1px" }}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
