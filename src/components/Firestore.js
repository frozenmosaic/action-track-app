import React from "react";
import { db } from "../db/firestore";
import { addDocs } from "../db/fsoper";
import { ACTIONS } from "../shared/actions";

const addDoc = async () => {
  var actionsRef = db.collection("actions");
  await actionsRef
    .doc("1")
    .set({
      action:
        "Velit incididunt esse Lorem deserunt nulla ea enim est amet do ex voluptate.",
      by: "Alvis",
      to: "Desmond",
      confirm: false,
      department: "Product",
      priority: 1,
    });
};

export default function Firestore() {
  addDoc()
  return <div></div>;
}
