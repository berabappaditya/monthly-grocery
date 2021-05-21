import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="mainHeadernav">
      <nav className="navbar navbar-dark bg-dark text-lightr">
        <div className=" d-flex justify-content-center aling-items-center text-white mainheader">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <h3 className="main-htext ">Monthly Grocery Planning App</h3>
          </Link>
        </div>

        <div className="float-right ">
          <NavLink
            to="/login"
            activeStyle={{
              display: "none",
            }}
          >
            <button className="border-gradient border-gradient-green loginbtn">
              Login
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
