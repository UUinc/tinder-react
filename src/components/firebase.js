import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//put your api key info here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
