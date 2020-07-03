import React from "react";
import { LogOut, GitHub } from "react-feather";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <div className="navbar-brand border-danger col-sm-3 col-md-2 mr-0 sidebar-heading pl-4">
        <a href="/">WHODUNIT</a>
      </div>
      <input
        type="text"
        className="form-control form-control-dark w-100"
        aria-label="Search"
        placeholder="Search"
      />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="/">
            <LogOut className="feather" size={16} strokeWidth={1.5} />{" "}
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
