import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBrd6FVbze4aDZFKpHiXmHvkmIlC3e9RTg",
    authDomain: "castrobikeshop.firebaseapp.com",
    projectId: "castrobikeshop",
    storageBucket: "castrobikeshop.appspot.com",
    messagingSenderId: "1023368454117",
    appId: "1:1023368454117:web:e35c64e81b90031dd8d90c",
    measurementId: "G-F6PNECC39T"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);