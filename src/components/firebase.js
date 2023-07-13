import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtLQUutOZjnYQ_X8eJtIEu2Ly_GOUwpto",
    authDomain: "cocolify.firebaseapp.com",
    databaseURL: "https://cocolify-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cocolify",
    storageBucket: "cocolify.appspot.com",
    messagingSenderId: "512949946435",
    appId: "1:512949946435:web:b3521653edf1fc487cecf6",
    measurementId: "G-EWVSF4EL9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };