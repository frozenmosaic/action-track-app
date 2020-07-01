import React from "react";
import { Home, CheckSquare, GitHub } from "react-feather";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavItem, Col } from "reactstrap";

function Nav(props) {
  return (
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <Navbar className="list-unstyled">
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
            <NavItem
              className="pl-3 text-muted navbar-text"
              style={{ fontStyle: "italic" }}
            >
              M stands for Managers
            </NavItem>
          </Navbar>
        </div>
        <Navbar className="list-unstyled">
          <NavItem className="w-100" style={{ textAlign: "center" }}>
            <a href="https://github.com/huynhv/action-track-app">
              <GitHub />
            </a>
          </NavItem>
        </Navbar>
      </nav>
    </div>
  );
}

export default Nav;
