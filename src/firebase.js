import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCcpDveWBCYpCNapvL1eepBqMzDrAIYGH4",
  authDomain: "line-clone-7635d.firebaseapp.com",
  projectId: "line-clone-7635d",
  storageBucket: "line-clone-7635d.appspot.com",
  messagingSenderId: "153293345987",
  appId: "1:153293345987:web:6d20ff96f10f6be5e2fe76",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
