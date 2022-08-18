import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyAjyDWo3WN-zCem-VdXjzjI5ZoZDkPQc8c",
  authDomain: "kasey-ramen.firebaseapp.com",
  projectId: "kasey-ramen",
  storageBucket: "kasey-ramen.appspot.com",
  messagingSenderId: "68986686362",
  appId: "1:68986686362:web:17e0b6344cde17c3d3c823",
  measurementId: "G-R194JCG7DJ",
});

const db = firebase.firestore()


export {db}
