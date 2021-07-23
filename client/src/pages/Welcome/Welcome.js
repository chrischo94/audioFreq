import React from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";
import './Welcome.css';

const Welcome = () => {

    return (
        <div>
            <div className="text-xxl-end">
                <a href="./starterPage.html">
                    <img src="AudioFreq_logo.png" alt="..." height="750"/>
                </a>
            </div>


            <div>
                <center><h1>THE ONE STOP PODCAST SHOP.</h1></center>
            </div>

            <div className="bottom">
                <center> FIND TRACK REVIEW</center>
            </div>

        </div>
    )
};

export default Welcome;