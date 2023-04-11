import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBey6Z3rHwpgyAQ04VUV3OOtk7AfKmvouU",
    authDomain: "blog-3f18a.firebaseapp.com",
    projectId: "blog-3f18a",
    storageBucket: "blog-3f18a.appspot.com",
    messagingSenderId: "668567375908",
    appId: "1:668567375908:web:a1e3a1b6808a36789208b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };