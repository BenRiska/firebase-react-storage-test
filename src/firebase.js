import firebase from "firebase/app"
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFtoREONNsEvWYfjoshrmJnEC4Xom1nr4",
    authDomain: "tester-ad838.firebaseapp.com",
    databaseURL: "https://tester-ad838.firebaseio.com",
    projectId: "tester-ad838",
    storageBucket: "tester-ad838.appspot.com",
    messagingSenderId: "457784744524",
    appId: "1:457784744524:web:d58fedbe062bf399f9f2e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;