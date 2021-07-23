import React from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";

// import './Home.css';



import NavBar from "../../components/Navbar"; 

function Home() {
    return (
        <div>
            <NavBar>
                Hello World 
            </NavBar>
        </div>
    )
};

export default Home;