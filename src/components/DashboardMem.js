import React, { useState } from "react";
import { ACTIONS } from "../shared/actions";
import PaginationMem from "./PaginationMem";
import STMem from "./STMem"

function DashboardMem(props) {
  var [check, setCheck] = useState(props.actions.map((a) => null));
  var [id, setId] = useState(new Array());

  const handleInput = (event) => {
    var targetId = event.target.id;
    var checked = event.target.checked;
    // alert(checked)
    if (checked) {
      id.push(parseInt(targetId));
      setId(id);
    }

    console.log(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.confirmCheck(id);
    setCheck(check.map((c) => false));
    setId(new Array());
    // console.log(id);
    // setCheck(
    //   check.forEach((c) => {
    //     if (id.includes(c.id)) {
    //       c.confirm = !c.confirm;
    //     }
    //   })
    // );
  };

  const actionTable = props.actions.map((act) => {
    return (
      <tr className="align-middle">
        <td>{act.id + 1}</td>
        <td style={{ width: "50%" }}>{act.action}</td>
        <td>{act.priority}</td>
        <td>{act.by}</td>
        <td>{act.department}</td>
        <td className={act.confirm ? "text-success" : ""}>
          {act.confirm ? "Confirmed" : "Not Confirmed"}
        </td>
        <td className="text-center">
          <input
            type="checkbox"
            id={act.id}
            checked={check[act.id]}
            onChange={handleInput}
          />
        </td>
      </tr>
    );
  });

  return (
    <>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1 mb-3">
          <h3>Dashboard</h3>
        </div>
        {/* <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          Success
        </div> */}
        <form onSubmit={handleSubmit}>
          <div class="table-responsive">
            <table class="table table-sm">
              <thead class="thead-dark align-middle">
                <tr>
                  <th class="align-middle">#</th>
                  <th class="align-middle">Action</th>
                  <th class="align-middle">Priority</th>
                  <th class="align-middle">By</th>
                  <th class="align-middle">Department</th>
                  <th class="align-middle">Status</th>
                  <th class="text-center align-middle">
                    <button
                      class="btn-sm btn btn-primary text-light"
                      type="submit"
                    >
                      Confirm
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>{actionTable}</tbody>
            </table>
          </div>
        </form>
        {/* <form onSubmit={handleSubmit} name="form">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                value="no"
                onChange={handleInput}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form> */}
        <PaginationMem />
      </main>
    </>
  );
}

export default DashboardMem;
