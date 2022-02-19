import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFSsLdZ7XfUWyixSj6sovpsIqA0hF9xBM",
  authDomain: "superstition-e23d6.firebaseapp.com",
  projectId: "superstition-e23d6",
  storageBucket: "superstition-e23d6.appspot.com",
  messagingSenderId: "239758618231",
  appId: "1:239758618231:web:6e49804383b8c0fbd9e072",
};

// CDG config:
// const firebaseConfig = {
//     apiKey: "AIzaSyAI6GeYj-5UFAFbs6ckdeWV622vpTPVR-E",
//     authDomain: "cards-dd-game.firebaseapp.com",
//     projectId: "cards-dd-game",
//     storageBucket: "cards-dd-game.appspot.com",
//     messagingSenderId: "349803451655",
//     appId: "1:349803451655:web:4a4bb416a26f8d97f421a2"
//   };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const subjectsCollection = db.collection("subjects");

function writeMetaUser(uid, data) {
  subjectsCollection
    .doc(uid)
    .set(data)
    // .then(() => {
    //   console.log("New user collection successfully created.");
    // })
    .catch((error) => {
      console.error("Error creating document: ", error);
    });
}

function writeResponseData(uid, responseName, data) {
  let newPath = subjectsCollection
    .doc(uid)
    .collection("responses")
    .doc(responseName);
  newPath
    .set(data)
    // .then(() => {
    //   console.log(responseName, "data successfully written.");
    // })
    .catch((error) => {
      console.error("Error writing", responseName, " data: ", error);
    });
}

export { writeMetaUser, writeResponseData };
