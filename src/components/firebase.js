import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDy4GcXiKoSVQxg2ousBcg0-ReabkwTQrI",
    authDomain: "conant-hack-club.firebaseapp.com",
    databaseURL: "https://conant-hack-club-default-rtdb.firebaseio.com",
    projectId: "conant-hack-club",
    storageBucket: "conant-hack-club.appspot.com",
    messagingSenderId: "921670754324",
    appId: "1:921670754324:web:21ca40db4c2cb17bea4701",
    measurementId: "G-2H55PV1TBZ"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
