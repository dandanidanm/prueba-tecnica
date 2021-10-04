import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNQYLYYxATauu_6oeGM-BLXi-sEYYytkk",
  authDomain: "recetario-del-risotto.firebaseapp.com",
  projectId: "recetario-del-risotto",
  storageBucket: "recetario-del-risotto.appspot.com",
  messagingSenderId: "716716421791",
  appId: "1:716716421791:web:1dd6fe450a177b28bfe8aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, firebase };
