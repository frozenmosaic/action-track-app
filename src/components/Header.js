import React from "react";
import { LogOut } from "react-feather";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <div class="navbar-brand col-sm-3 col-md-2 mr-0 sidebar-heading pl-4">
        Action App
      </div>
      <input
        type="text"
        class="form-control form-control-dark w-100"
        aria-label="Search"
        placeholder="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">
            <LogOut class="feather" size={16} stroke-width={1.5} />{" "}
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
