// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// import "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDy4GcXiKoSVQxg2ousBcg0-ReabkwTQrI",
//     authDomain: "conant-hack-club.firebaseapp.com",
//     databaseURL: "https://conant-hack-club-default-rtdb.firebaseio.com",
//     projectId: "conant-hack-club",
//     storageBucket: "conant-hack-club.appspot.com",
//     messagingSenderId: "921670754324",
//     appId: "1:921670754324:web:21ca40db4c2cb17bea4701",
//     measurementId: "G-2H55PV1TBZ"
// };

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZcf3t-UlLgF8O1d_4k3mcPnziveiOLF0",
    authDomain: "hack-9f519.firebaseapp.com",
    projectId: "hack-9f519",
    storageBucket: "hack-9f519.appspot.com",
    messagingSenderId: "728205887202",
    appId: "1:728205887202:web:207a239d0bd6107a9580bb",
    measurementId: "G-3HG75RFBL7"
});


// firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

//
// export default firebase;
