import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand"><a href="./starterPage.html">
         <img src="AudioFreq_logo.png" alt="logo" width="300" height="120">
           </img>
       </a></a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </nav>
  
    );
}

      export default Navbar;
