import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyAPl8acLeOnSnk5t9I5aZOgaq3E9tsfOcA",
    authDomain: "videpo-admin.firebaseapp.com",
    projectId: "videpo-admin",
    storageBucket: "videpo-admin.appspot.com",
    messagingSenderId: "645050121293",
    appId: "1:645050121293:web:9bbdd45a76bb63c8327004",
    measurementId: "G-VH2VERQ8SZ"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
//   firebase.analytics();

export default firebase;