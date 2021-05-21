import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnu85Bu76y3xXpPaUs6Df8rD2bRH8wKlY",
  authDomain: "monthlygrocery-d0891.firebaseapp.com",
  projectId: "monthlygrocery-d0891",
  storageBucket: "monthlygrocery-d0891.appspot.com",
  messagingSenderId: "773843989151",
  appId: "1:773843989151:web:9b657af4f4d320361868aa",
  measurementId: "G-Q0R4ZEL4WX",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
