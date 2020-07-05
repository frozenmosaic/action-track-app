import firebase from "firebase";
import config from "./config";

//   if (!firebase.app.length) {
//     const app = firebase.initializeApp({});
//     console.log("app exists");
//   } else {
//     const app = firebase.initializeApp(config);
//     console.log("fb init");
//   }
export const app = firebase.initializeApp(config);
export const db = app.firestore();
export const actionsRef = db.collection("actions");
