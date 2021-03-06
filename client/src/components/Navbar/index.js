import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand"><a href="/Home">
          <img className="nav-img" src="AF_NavBar.png" alt="logo" width="300" height="120">
          </img>
        </a></a>
        <form className="d-flex1">
          <a class="nav-link" href="/Login">SIGN UP/LOG IN</a>
        </form>
        <form className="d-flex2">
          <a class="nav-link" href="/Profile">PROFILE</a>
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
        </form>
        <form action="/Results" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
                // value={searchQuery}
                // onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search podcasts"
                name="s"
            />
            <button type="submit">
                Search
            </button>
        </form>
      </div>
    </nav>

  );
}

export default Navbar;
