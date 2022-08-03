import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_KEY;
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "menuku-app.firebaseapp.com",
    projectId: "menuku-app",
    storageBucket: "menuku-app.appspot.com",
    messagingSenderId: "988103100841",
    appId: "1:988103100841:web:69f7f327117f79d0d9dcb8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }