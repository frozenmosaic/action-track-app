import React from "react";
import { ACTIONS } from "./actions";
import Pagination from "./Pagination";

function Dashboard(props) {
  const actionTable = ACTIONS.sort((a, b) => {
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
        <td class={act.confirm ? "text-success" : ""}>
          {act.confirm ? "Confirmed" : "Not Confirmed"}
        </td>
      </tr>
    );
  });

  return (
    <>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap  pb-1 mb-3">
          <h3>Dashboard</h3>
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
        <Pagination />
      </main>
    </>
  );
}

export default Dashboard;
