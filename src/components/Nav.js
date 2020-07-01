import React from "react";
import { Home, CheckSquare } from "react-feather";
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";

function Nav(props) {
  return (
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky align-items-center flex-column pl-3">
          <ul class="nav">
            <NavLink
              className="d-flex align-items-center inactive"
              activeClassName="active"
              exact
              to="/"
            >
              <Home class="feather" size={16} stroke-width={1.5} />
              <span class="pl-1">Dashboard 1.0</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive"
              activeClassName="active"
              to="/dashboard-mgm"
            >
              <Home class="feather" size={16} stroke-width={1.5} />
              <span class="pl-1">Dashboard-M 1.0</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive pb-5"
              activeClassName="active"
              to="/create"
            >
              <CheckSquare class="feather" size={16} stroke-width={1.5} />
              <span class="pl-1">Create</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive mt-auto"
              activeClassName="active"
              to="/dashboard2"
            >
              <Home class="feather" size={16} stroke-width={1.5} />
              <span class="pl-1">Dashboard 1.1</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive"
              activeClassName="active"
              to="/dashboard-mgm2"
            >
              <Home class="feather" size={16} stroke-width={1.5} />
              <span class="pl-1">Dashboard-M 1.1</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive pb-5"
              activeClassName="active"
              to="/create"
            >
              <CheckSquare class="feather" size={16} stroke-width={1.5} />
              <span class="pl-1">Create</span>
            </NavLink>
          </ul>
          <div class="pl-4" style={{fontSize: "15px"}}>M: Managers</div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
