import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
function Pagination(props) {
  const loc = useLocation();

  return (
    <div class="container-fluid d-flex pt-4">
      <div class="w-100">
        <nav>
          <ul class="pagination pagination-sm">
            <NavLink
              className="d-flex align-items-center inactive page-item page-link"
              activeClassName="active"
              exact to="/"
            >
              <span class="pl-1">Version 1</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive page-item page-link"
              activeClassName="active"
              to="/dashboard-mgm2"
            >
              <span class="pl-1">Version 2</span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
