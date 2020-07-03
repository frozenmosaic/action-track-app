import React from "react";
import { Home, CheckSquare, GitHub } from "react-feather";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavItem, Col } from "reactstrap";

function Nav(props) {
  return (
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <Navbar className="list-unstyled">
            <NavLink
              className="d-flex align-items-center inactive"
              activeClassName="active"
              to="/dashboard-mgm"
            >
              <Home className="feather" size={16} strokeWidth={1.5} />
              <span className="pl-1">Dashboard</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive"
              activeClassName="active"
              to="/dashboard-mem"
            >
              <Home className="feather" size={16} strokeWidth={1.5} />
              <span className="pl-1">Dashboard-Members</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive"
              activeClassName="active"
              to="/create"
            >
              <CheckSquare className="feather" size={16} strokeWidth={1.5} />
              <span className="pl-1">Create</span>
            </NavLink>
            {/* <NavItem
              className="pl-4 pt-5 text-muted navbar-text"
              style={{ fontStyle: "italic" }}
            >
              M stands for Members
            </NavItem> */}
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
