import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig={
    apiKey: "AIzaSyA0lE9fl3M5owEEBUEIk0KeZQeRk9dMwic",
  authDomain: "todo-c5830.firebaseapp.com",
  projectId: "todo-c5830",
  storageBucket: "todo-c5830.appspot.com",
  messagingSenderId: "389413029343",
  appId: "1:389413029343:web:61bf104ed3926e0324306a",
  measurementId: "G-0B3D7KHNCV"  
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}