import React from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";
import './Login.css';
import NavBar from "../../components/Navbar"; 
import Navbar from "../../components/Navbar";



const Login = () => {
    return (
  

                 <div className="hero">
                  <div className="form-box">
                    <div className="button-box">
                      <div id="btn" />
                      <button type="button" className="toggle-btn" onclick="login()">Login</button>
                      <button type="button" className="toggle-btn" onclick="register()">Register</button>
                    </div>
                    <form id="login" className="input-group">
                      <input type="text" className="input-field" placeholder="Enter Username" required />
                      <input type="text" className="input-field" placeholder="Enter Password" required />
                      <input type="checkbox" className="check-box" /><span>Remember Password</span>
                      <button type="submit" className="submit-btn">Login</button>
                    </form>
                    <form id="register" className="input-group">
                      <input type="text" className="input-field" placeholder="Enter Username" required />
                      <input type="email" className="input-field" placeholder="Enter Email" required />
                      <input type="text" className="input-field" placeholder="Enter Password" required />
                      <input type="checkbox" className="check-box" /><span>I agree to the terms &amp; conditions</span>
                      <button type="submit" className="submit-btn">Register</button>
                    </form>
                  </div>
                </div>
              );
            }
export default Login;