// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMjYH_CCtjCqW5HCBrybxTvkf4zPlgIBc",
    authDomain: "twitter-clone-250.firebaseapp.com",
    projectId: "twitter-clone-250",
    storageBucket: "twitter-clone-250.appspot.com",
    messagingSenderId: "334455244512",
    appId: "1:334455244512:web:5a2f1426b47f44bef23285"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };