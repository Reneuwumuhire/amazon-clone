
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC4i-KSqIzCQUomUokGNW6q6mVp5PZbrfQ",
    authDomain: "clone-3303a.firebaseapp.com",
    databaseURL: "https://clone-3303a.firebaseio.com",
    projectId: "clone-3303a",
    storageBucket: "clone-3303a.appspot.com",
    messagingSenderId: "659465837117",
    appId: "1:659465837117:web:61aadb6ba939a8edcde854",
    measurementId: "G-WT93Q22XBL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export { db, firebaseApp };