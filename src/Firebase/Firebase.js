import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBc6EqXRhgtqAvr-vLLVhe3-o3Wrhn5QTg",

  authDomain: "smartstore-eb4df.firebaseapp.com",

  projectId: "smartstore-eb4df",

  storageBucket: "smartstore-eb4df.appspot.com",

  messagingSenderId: "732590850317",

  appId: "1:732590850317:web:14d0aecdb1a7199c50b044",

  measurementId: "G-B2ECDRM83K"

};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
