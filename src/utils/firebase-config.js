
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBHOhvkozfvK7qMkZlvXIfDI3x7AbfUUYQ",
  authDomain: "react-netflix-clone-f2db3.firebaseapp.com",
  projectId: "react-netflix-clone-f2db3",
  storageBucket: "react-netflix-clone-f2db3.appspot.com",
  messagingSenderId: "1036221535543",
  appId: "1:1036221535543:web:975c1b057249a175a3b6b2",
  measurementId: "G-NHBM7W3XHL"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)