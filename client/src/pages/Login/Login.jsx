import React from "react";
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
                <Form.Label className="text-light" >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-light" >Password</Form.Label>
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
                <Form.Label className="text-light" >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="text-light" >Username</Form.Label>
                <Form.Control type="Username" placeholder="Username" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-light" >Password</Form.Label>
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


// import React, { useState, useRef } from "react";
// import { Redirect } from "react-router-dom";
// import { signup, useAuth } from "../../utils/auth/";
// import {
//   AuthenticationContainer,
//   AuthenticationForm,
// } from "../../components/Authentication/";

// const loginFields = [
//   { name: "username", type: "text", placeholder: "username" },
//   { name: "password", type: "password", placeholder: "password" },
// ];
// const signUpFields = [
//   { name: "username1", type: "text", placeholder: "username" },
//   { name: "password1", type: "password", placeholder: "password" },
//   { name: "email", type: "text", placeholder: "JohnSmith@gmail.com" },
//   { name: "firstName", type: "text", placeholder: "First Name" },
//   { name: "lastName", type: "text", placeholder: "Last Name" },
// ];

// const Login = () => {
//   const [isLeft, setIsLeft] = useState(false);
//   const [formData, setFormData] = useState();
//   const [currentForm, setCurrentForm] = useState("login");
//   const sliderRef = useRef();
//   const topLayerRef = useRef();
//   const { login, isPending, isLoggedIn, error } = useAuth();

//   const handleChange = formObj => {
//     setFormData({ ...formData, ...formObj });
//   };

//   const handleClick = e => {
//     e.preventDefault();
//     if (!isLeft) {
//       setIsLeft(true);
//       setFormData();
//       setCurrentForm("signup");
//       sliderRef.current.style.marginLeft = "0";
//       topLayerRef.current.style.marginLeft = "100%";
//       loginFields.forEach(login => document.getElementById(login.name).value = "");
//     }

//     if (isLeft) {
//       setIsLeft(false);
//       setFormData();
//       setCurrentForm("login");
//       sliderRef.current.style.marginLeft = "50%";
//       topLayerRef.current.style.marginLeft = "0";
//       signUpFields.forEach(login => document.getElementById(login.name).value = "");
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if(currentForm === "login") {
//         login(formData);
//     } else {
//         signup(formData);
//         const { username1, password1 } = formData;
//         login({username: username1, password: password1});
//     }
//   };

//   if(isLoggedIn) return <Redirect to="/" />;
//   if(isPending) return <h1>Loading...</h1>;

//   return (
//     <>
//       <div id='back'>
//         <div className='backRight'></div>
//         <div className='backLeft'></div>
//       </div>
//       <div id='slideBox' ref={sliderRef}>
//         <div className='topLayer' ref={topLayerRef}>
//           <AuthenticationContainer direction='right'>
//             <AuthenticationForm
//               formData={loginFields}
//               title={"Login"}
//               handleChange={handleChange}
//               formState={formData}
//             />
//             <button onClick={handleClick}>Sign Up</button>
//             <button onClick={handleSubmit}>Login</button>
//           </AuthenticationContainer>
//           <AuthenticationContainer direction='left'>
//             <AuthenticationForm
//               formData={signUpFields}
//               title={"Sign Up"}
//               handleChange={handleChange}
//               formState={formData}
//             />
//             <button onClick={handleSubmit}>Sign Up</button>
//             <button onClick={handleClick}>Login</button>
//           </AuthenticationContainer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
