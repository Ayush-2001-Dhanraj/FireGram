import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkBaqbj82YdM-_UvpYPRepfcLnOX1VfNU",
  authDomain: "ayush-firegram-b67a5.firebaseapp.com",
  projectId: "ayush-firegram-b67a5",
  storageBucket: "ayush-firegram-b67a5.appspot.com",
  messagingSenderId: "289083159999",
  appId: "1:289083159999:web:211f2baf72042c20f6dd0a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
