import React from "react";
import firebase from "firebase";
import config from "../config";

export default function Firestore() {
//   if (!firebase.app.length) {
//     const app = firebase.initializeApp({});
//     console.log("app exists");
//   } else {
//     const app = firebase.initializeApp(config);
//     console.log("fb init");
//   }
  const app = firebase.initializeApp(config);
  const db = app.firestore();

  //   const actionRef = db.collection("actions").doc("Zof996GDDmVdNAnkz9jQ");
  // const doc = await actionRef.get();
  // if (!doc.exists) {
  //     console.log('No such document!');
  //     } else {
  //     console.log('Document data:', doc.data());
  //     }

  db.collection("actions")
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      console.log(data);
    });
  return <div></div>;
}
