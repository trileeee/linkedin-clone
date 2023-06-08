import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtMxgAF-GwEJiIc3hzv95veT6o_Sfxx7I",
    authDomain: "my-project-1cbdf.firebaseapp.com",
    projectId: "my-project-1cbdf",
    storageBucket: "my-project-1cbdf.appspot.com",
    messagingSenderId: "1006495525493",
    appId: "1:1006495525493:web:50c1749e3e48de7af4663c",
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);
  const auth=getAuth(app);
  export {db,auth};