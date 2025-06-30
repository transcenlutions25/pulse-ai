import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// your config
const firebaseConfig = {
  apiKey: "AIzaSyDwiQGT8pXFDY0tfXtmdD7HC5Y7vIrOziE",
  authDomain: "pulse-ai-38c2c.firebaseapp.com",
  projectId: "pulse-ai-38c2c",
  storageBucket: "pulse-ai-38c2c.appspot.com",
  messagingSenderId: "406799196648",
  appId: "1:406799196648:web:a28116a4e3edec206a445d",
};

// initialize
const app = initializeApp(firebaseConfig);

// explicitly get auth
const auth = getAuth(app);

export { auth };
