import { db } from "../db/firestore";

export const addDocs = async (docs) => {
  var actionsRef = db.collection("actions");
  const batch = db.batch();
  docs.map((a) => {
    batch.set(a);
  });
  await batch.commit();
};

//   const actionRef = db.collection("actions").doc("Zof996GDDmVdNAnkz9jQ");
// const doc = await actionRef.get();
// if (!doc.exists) {
//     console.log('No such document!');
//     } else {
//     console.log('Document data:', doc.data());
//     }
//   db.collection("actions")
//     .get()
//     .then((snapshot) => {
//       const data = snapshot.docs.map((doc) => doc.data());
//       console.log(data);
//     })
