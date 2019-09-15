import * as firebase from "firebase/app"
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCUUJTCppqgqoHhbydbNmOIWLszLa4cl5A",
    authDomain: "agromarket-fc4cd.firebaseapp.com",
    databaseURL: "https://agromarket-fc4cd.firebaseio.com",
    projectId: "agromarket-fc4cd",
    storageBucket: "agromarket-fc4cd.appspot.com",
    messagingSenderId: "595807655382",
    appId: "1:595807655382:web:efdb77f49dfc6199700077"
 }
 firebase.initializeApp(config);
 



 export default firebase