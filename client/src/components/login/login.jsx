import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import "./login.css";
import { redirect } from "react-router-dom";

import BackgroundImage from "../../assets/images/background.jpg";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    if (
      inputEmail !== "competitor01@example.com" ||
      inputPassword !== "dc4104d572514232b496fe6117b1315b"
    ) {
      localStorage.clear('token')
      setShow(true);
    } else {
      const data = {
        email: inputEmail,
        password: inputPassword,
      };
      const tokenResponse = await fetch(`http://172.16.50.58:5000/api/v1/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      localStorage.clear('token');
      const token = await tokenResponse.text();
      if(localStorage.getItem('token') == null) {
        localStorage.setItem('token', token)
        return redirect("/main");
      } else {
        return redirect("/main");
      }
    }
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <Header nav={false} />
        <div className="h4 mb-2 text-center">Log In</div>
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect email or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={inputEmail}
            placeholder="email"
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
      </Form>
      <Footer color={"white"} />
    </div>
  );
};

export default Login;
