import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import {resgisterApi} from '../apis/skillcareapis';

import { Form, Button } from "react-bootstrap";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Sign = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const payload = {
        userType,
        userName: name,
        password,
        email,
        mobile
      };
      const data = await resgisterApi(payload);
      if (data?.success) {
        navigate("/login");
      } else if (data?.message) {
        alert(data?.message);
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error("Error while registering", error);
      alert("Something went wrong!");
    }
  }

  const handleChange = (e, fieldName) => {
    const value = e.target.value;
    switch (fieldName) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "userType":
        setUserType(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div
        className="container-fluid mb-5 h-100 d-flex align-items-center justify-content-center"
        style={{ padding: "50px" }}
      >
        <div
          style={{
            width: "500px",
            minHeight: "400px auto",
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
              <h2>Sign Up</h2>
            </span>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label style={{ fontWeight: "500" }}>User name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter User Name"
                value={name}
                onChange={(e) => {
                  handleChange(e, "name");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "500" }}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  handleChange(e, "email");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label style={{ fontWeight: "500" }}>
                Mobile Number
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => {
                  handleChange(e, "mobile");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  handleChange(e, "password");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUserType">
              <Form.Label style={{ fontWeight: "500" }}>User Type</Form.Label>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <Form.Check
                  style={{ marginLeft: "24px", marginRight: "40px" }}
                  type={"radio"}
                  id={`default-user`}
                  name={"userType"}
                  value={"user"}
                  label={`User`}
                  checked={userType === "user"}
                  onChange={(e) => {
                    handleChange(e, "userType");
                  }}
                />
                <Form.Check
                  style={{ marginLeft: "24px", marginRight: "40px" }}
                  type={"radio"}
                  id={`default-admin`}
                  name={"userType"}
                  value={"admin"}
                  label={`Admin`}
                  checked={userType === "admin"}
                  onChange={(e) => {
                    handleChange(e, "userType");
                  }}
                />
              </div>
              {/* <Form.Check
                inline
                label="1"
                name="group1"
                type={'radio'}
                id={`inline-${'radio'}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type={'radio'}
                id={`inline-${'radio'}-2`}
              /> */}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sign;