import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2OdK3yqoen96l4wWQbFbx3bh734lrwB0",
    authDomain: "tinder-react-0.firebaseapp.com",
    projectId: "tinder-react-0",
    storageBucket: "tinder-react-0.appspot.com",
    messagingSenderId: "912841341803",
    appId: "1:912841341803:web:d56d6bf549d29d02de2a2e",
    measurementId: "G-DE4CV32DFH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
