import React, { useState, useEffect } from "react";
import { db, actionsRef } from "../db/firestore";
import { ACTIONS } from "../shared/actions";
import PaginationMem from "./PaginationMem";

const getAllDocs = async () => {
  const actions = [];

  const snapshop = await actionsRef.get();
  snapshop.forEach((d) => {
    actions.push(d.data());
  });

  return actions;
};

const updateCf = (id, actions) => {
  console.log("updating db...");
  const batch = db.batch();
  id.forEach(async (i) => {
    const docRef = actionsRef.doc(i.toString());
    // const doc = await docRef.get();
    // const curCf = doc.data().confirm;
    batch.update(docRef, { confirm: !actions[i].confirm });
    console.log("batch update");
  });
  batch
    .commit()
    .then(console.log("batch commit"))
    .catch((e) => {
      console.log(e);
    });
};

export default function Firestore(props) {
  var [actions, setActions] = useState([]);

  getAllDocs()
    .then((a) => {
      setActions(a);
    })
    .catch((e) => {
      console.log(e);
    });

  var [check, setCheck] = useState(actions.map((a) => null));
  var [id, setId] = useState(new Array());

  const handleInput = (event) => {
    var targetId = event.target.id;
    var checked = event.target.checked;
    if (checked) {
      id.push(parseInt(targetId));
      setId(id);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(id);
    updateCf(id, actions);
    setCheck(actions.map((a) => null));
    getAllDocs()
      .then((a) => {
        setActions(a);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const actionTable = actions.map((act, index) => {
    return (
      <tr key={index} className="align-middle">
        <td>{index + 1}</td>
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
            id={index}
            checked={check[index]}
            onChange={handleInput}
          />
        </td>
      </tr>
    );
  });

  return (
    <>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1 mb-3">
          <h3>Dashboard</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="table table-sm">
              <thead className="thead-dark align-middle">
                <tr>
                  <th className="align-middle">#</th>
                  <th className="align-middle">Action</th>
                  <th className="align-middle">Priority</th>
                  <th className="align-middle">By</th>
                  <th className="align-middle">Department</th>
                  <th className="align-middle">Status</th>
                  <th className="text-center align-middle">
                    <button
                      className="btn-sm btn btn-primary text-light"
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
        <PaginationMem />
      </main>
    </>
  );
}
