import React from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";
import './Login.css';

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import NavBar from "../../components/Navbar"

const Login = () => {
  return (
    <Container>
      <NavBar />
      <Row>
        {/* This is the Login */}
        <Col>
          <Form className="mt-5 p-5" >
            <h1 className="text-center" >Login</h1>
            <Row className="border border-2 border-danger rounded p-5" >

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>


          </Form>
        </Col>
        {/* This is SignUp */}
        <Col>
          <Form className=" mt-5 p-5" >
            <h1 className="text-center"  >Sign-Up</h1>
            <Row className="border border-2 border-danger rounded p-5" >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="Username" placeholder="Username" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>

    </Container>
  );
}
export default Login;