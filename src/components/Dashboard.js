import React from "react";
import { ACTIONS } from "../shared/actions";
import SortedTable from "./SortedTable"
import Pagination from "./Pagination";
import Dashboard2 from "./Dashboard2"

function Dashboard(props) {
  // sort((a, b) => {
  //   if (a.priority > b.priority) return 1;
  //   return -1;
  // })

  const actionTable = ACTIONS.map((act) => {
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
        <SortedTable />
        <Pagination />
      </main>
    </>
  );
}

export default Dashboard;
