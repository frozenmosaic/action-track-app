import React from "react";
import { ACTIONS } from "./actions";

function Dashboard(props) {
  const prog = (act) => {
    switch (act.progress) {
      case 1:
        return "";
      case 2:
        return "text-info";
      case 3:
        return "text-success";
      default:
        return "text-danger";
    }
  }

  const progText = (act) => {
    switch (act.progress) {
      case 1:
        return "Confirmed";
      case 2:
        return "In Progress";
      case 3:
        return "Completed";
      default:
        return "Not Confirmed";
    }
  }

  const actionTable = ACTIONS.sort((a,b) => {
      if (a.priority > b.priority) return 1;
      return -1;
  }).map((act) => {
    return (
      <tr>
        <td>{act.id + 1}</td>
        <td style={{ width: "50%" }}>{act.action}</td>
        <td>{act.priority}</td> 
        <td>{act.to}</td> 
        <td>{act.department}</td>
        <td class={prog(act)}>
          {progText(act)}
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
            <thead class="thead-dark">
              <tr>
                <th class="align-middle">#</th>
                <th class="align-middle">Action</th>
                <th class="align-middle">Priority</th>
                <th class="align-middle">To</th>
                <th class="align-middle">Department</th>
                <th class="align-middle">Status</th>
              </tr>
            </thead>
            <tbody>{actionTable}</tbody>
          </table>
        </div>

        <div class="btn-toolbar justify-content-start pt-5">
          <nav aria-label="Page navigation example">
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
      </main>
    </>
  );
}

export default Dashboard;
