import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
function PaginationMem(props) {

  return (
    <div class="container-fluid d-flex pt-4">
      <div class="w-100">
        <nav>
          <ul class="pagination pagination-sm">
            <NavLink
              className="d-flex align-items-center inactive page-item page-link"
              activeClassName="active"
              to="/dashboard-mem"
            >
              <span class="pl-1">Version 1</span>
            </NavLink>
            <NavLink
              className="d-flex align-items-center inactive page-item page-link"
              activeClassName="active"
              to="/dashboard-mem2"
            >
              <span class="pl-1">Version 2</span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PaginationMem;
