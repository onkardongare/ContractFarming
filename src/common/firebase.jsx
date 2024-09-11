// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9otqNDS_B2Xsd3rsQnN4sAdbbODRUj7k",
  authDomain: "kisan-helper-9fc6c.firebaseapp.com",
  projectId: "kisan-helper-9fc6c",
  storageBucket: "kisan-helper-9fc6c.appspot.com",
  messagingSenderId: "1028723811461",
  appId: "1:1028723811461:web:a1790262d42613fea075ec",
  measurementId: "G-YNGQDSWJ3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth , provider)
    .then((result)=>{
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}