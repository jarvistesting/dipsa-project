import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button} from "react-bootstrap";

import { loginApi } from '../apis/skillcareapis';
import {getLoggedinDetails} from '../utils';
import isEmpty from 'lodash/isEmpty';

import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let loggedinUserDetail = getLoggedinDetails();
    if(loggedinUserDetail && !isEmpty(loggedinUserDetail)) {
      navigate("/", { replace: true });
    }
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        userName,
        password
      };
      const data = await loginApi(payload);
      if (data?.success) {
        localStorage.setItem(
          "loginDetail",
          JSON.stringify({
            userName: data?.User_deatils?.userName || payload.userName,
            userType: data?.User_deatils?.userType || "",
          })
        );
        navigate("/", { replace: true });
      } else if(data?.message) {
        alert(data?.message || 'Unable to login!');
      }
    } catch (error) {
      console.error("Error while login", error);
      alert("Unable to login!");
    }
  };

  const handleChange = (e, fieldName) => {
    const value = e.target.value;
    switch (fieldName) {
      case "userName":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="container-fluid mb-5 h-100 d-flex align-items-center justify-content-center"
      style={{
        padding: "50px",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "450px",
          border: "2px solid white",
          padding: "20px",
          backgroundColor: " rgba(255, 255, 255, 0.1)",
          borderRadius: "5px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <span
            style={{
              color: "white",
              textAlign: "center",
              width: "100%",
              textShadow: "2px 6px 5px black",
            }}
          >
            <h2>Log In</h2>
            <hr></hr>
          </span>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "500" }}>User name</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              id="userName"
              required
              placeholder="Enter user name"
              onChange={(e) => handleChange(e, "userName")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              onChange={(e) => handleChange(e, "password")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <h6>
              If You Don't Have Account&nbsp;
              <Link
                to="/sign"
                style={{
                  color: "white",
                  fontWeight: "700",
                  textShadow: "5px 0px 10px black",
                }}
              >
                {" "}
                Sign-UP{" "}
              </Link>
            </h6>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;