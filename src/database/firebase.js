// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDF8yyh6pNO7kO6tYgCcFG-KO_ydePupfw",
  authDomain: "loginapp-575e3.firebaseapp.com",
  projectId: "loginapp-575e3",
  storageBucket: "loginapp-575e3.appspot.com",
  messagingSenderId: "395418326598",
  appId: "1:395418326598:web:1f0bc4c333a978b3d59c47",
  measurementId: "G-RPZ38GCQZ9"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};