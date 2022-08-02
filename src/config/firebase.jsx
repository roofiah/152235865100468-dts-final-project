import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAHBx-hbYjdNi3_FdH5UlupUZkKbWtp9Bg",
    authDomain: "menuku-app.firebaseapp.com",
    projectId: "menuku-app",
    storageBucket: "menuku-app.appspot.com",
    messagingSenderId: "988103100841",
    appId: "1:988103100841:web:69f7f327117f79d0d9dcb8",
    measurementId: "G-2HLT0LES4K"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth }