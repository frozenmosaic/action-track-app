import { db } from "../db/firestore";

export const addDoc = async () => {
  var actionsRef = db.collection("actions");
  await actionsRef.doc("1").set({
    action:
      "Velit incididunt esse Lorem deserunt nulla ea enim est amet do ex voluptate.",
    by: "Alvis",
    to: "Desmond",
    confirm: false,
    department: "Product",
    priority: 1,
  });
};

export const addDocs = async (docs) => {
  var actionsRef = db.collection("actions");
  const batch = db.batch();
  docs.map((a) => {
    var newObj = {};
    newObj.action = a.action;
    newObj.by = a.by;
    newObj.to = a.to;
    newObj.confirm = a.confirm;
    newObj.priority = a.priority;
    // data.push(newObj);
    batch.set(actionsRef.doc(a.id.toString()), newObj);
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
