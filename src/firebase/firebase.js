import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlSLGt30_iuoi9kU0ci-TyOfwfBk7q85w",
    authDomain: "bytblaze-login-auth.firebaseapp.com",
    projectId: "bytblaze-login-auth",
    storageBucket: "bytblaze-login-auth.firebasestorage.app",
    messagingSenderId: "713156533799",
    appId: "1:713156533799:web:8819e376bd00bf8440f802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);