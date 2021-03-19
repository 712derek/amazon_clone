import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDh-xLKR6ycR1nPKLLoP_JrqATend3LdKs",
  authDomain: "clone-ffb32.firebaseapp.com",
  projectId: "clone-ffb32",
  storageBucket: "clone-ffb32.appspot.com",
  messagingSenderId: "13744023988",
  appId: "1:13744023988:web:202ee39e0ff8153b232ae1",
  measurementId: "G-YT16ZWF6EG",
});

const auth = firebase.auth();

export { auth };
