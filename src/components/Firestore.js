import React, { useState } from "react";
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

const updateCf = async (id) => {
  const batch = db.batch();
  id.forEach(async (i) => {
    const docRef = actionsRef.doc(i.toString());
    const doc = await docRef.get();
    const curCf = doc.data().confirm;
    batch.update(docRef, { confirm: !curCf });
  });
  batch.commit();
};

export default function Firestore(props) {
  // updateCf([0, 1, 2]);
  return <div></div>;
}
