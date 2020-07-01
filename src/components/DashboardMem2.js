import React, { useState } from "react";
import { Input, FormGroup } from "reactstrap";
import { ACTIONS } from "./actions";

function DashboardMem2(props) {
  const prog = (act) => {
    switch (act.progress) {
      case 1:
        return "Confirmed";
      case 2:
        return "In Progress";
      case 3:
        return "Completed";
      default:
        return "--";
    }
  }
  const actionTable = ACTIONS.sort((a, b) => {
    if (a.priority > b.priority) return 1;
    return -1;
  }).map((act) => {
    return (
      <tr class="align-middle">
        <td>{act.id + 1}</td>
        <td style={{ width: "50%" }}>{act.action}</td>
        <td>{act.priority}</td>
        <td>{act.by}</td>
        <td>{act.department}</td>
        <td>
          <FormGroup className="form-control-sm">
            <Input
              type="select"
              name="select"
              // value={act.progress % 2 == 0 ? "Confirmed" : "In Progress"}
              value={prog(act)}
            >
              <option>--</option>
              <option>Confirmed</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Input>
          </FormGroup>
        </td>
      </tr>
    );
  });

  return (
    <>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1 mb-3">
          <h1 class="h2">Dashboard</h1>
        </div>

        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="thead-dark align-middle">
              <tr>
                <th class="align-middle">#</th>
                <th class="align-middle">Action</th>
                <th class="align-middle">Priority</th>
                <th class="align-middle">By</th>
                <th class="align-middle">Department</th>
                <th class="text-center align-middle">
                  <button class="btn-sm btn btn-primary text-light">
                    Submit Progress
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>{actionTable}</tbody>
          </table>
        </div>
        <div class="container-fluid d-flex pt-5">
          <div class="w-100">
            <nav aria-label="">
              <ul class="pagination pagination-sm">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardMem2;
